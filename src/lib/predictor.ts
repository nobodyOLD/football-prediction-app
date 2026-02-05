import { Team, PredictionResult, PredictorOptions, TeamConditions } from './types';

/**
 * THE BRAIN 🧠
 * This function calculates the probability of a Home Win, Draw, or Away Win.
 * It uses simple math so we can explain it easily.
 */
export function predictMatch(homeTeam: Team, awayTeam: Team, options?: PredictorOptions): PredictionResult {
    const explanation: string[] = [];
    let confidencePenalty = 0; // Starts at 0, increases with uncertainty

    // 0. Base Stats
    const homeGoalsAvg = (homeTeam.stats.goalsScored / homeTeam.stats.matchesPlayed).toFixed(1);
    const awayGoalsAvg = (awayTeam.stats.goalsScored / awayTeam.stats.matchesPlayed).toFixed(1);

    explanation.push(`📊 ${homeTeam.shortName} averages ${homeGoalsAvg} goals/game vs ${awayTeam.shortName}'s ${awayGoalsAvg}.`);

    // 1. Process Team Conditions (Injuries, Form, etc.)
    let homeAttack = homeTeam.attackStrength;
    let homeDefense = homeTeam.defenseStrength;
    let awayAttack = awayTeam.attackStrength;
    let awayDefense = awayTeam.defenseStrength;

    // Helper to calculate conditions
    const applyConditions = (team: Team, conditions: TeamConditions | undefined, isHome: boolean) => {
        let attackMod = 0;
        let defenseMod = 0;
        const teamName = team.name;

        if (!conditions) return { attackMod, defenseMod };

        // 1. Missing Players
        const { missingPlayerIds, formRating } = conditions;
        const missingCount = missingPlayerIds.length;

        if (missingCount > 0) {
            const penalty = missingCount * 4; // Increased penalty per player
            attackMod -= penalty;
            defenseMod -= penalty;

            // Confidence Drop: Missing players adds uncertainty
            confidencePenalty += missingCount * 0.5;

            // Check for Key Players/Injuries
            const missingPlayers = team.players.filter(p => missingPlayerIds.includes(p.id));
            const keyPlayers = missingPlayers.filter(p => p.rating >= 9);
            const injuredPlayers = missingPlayers.filter(p => p.stats?.isInjured);

            if (injuredPlayers.length > 0) {
                const names = injuredPlayers.map(p => p.name).join(', ');
                explanation.push(`🚑 Critical Injury: ${teamName} without ${names}.`);
                confidencePenalty += 1; // Confirmed injury is a known negative, but changes game dynamics
            }

            if (keyPlayers.length > 0 && injuredPlayers.length === 0) {
                const names = keyPlayers.map(p => p.name).join(', ');
                explanation.push(`❌ Key Absence: ${teamName} missing star ${names}.`);
                attackMod -= 10;
                confidencePenalty += 1.5; // Big impact
            }
        }

        // 2. Recent Form (User Rating 0-10)
        // We use this as a 'Motivation/Morale' factor
        if (formRating >= 8) {
            attackMod += 8;
            explanation.push(`🔥 ${teamName} is in peak form (User Rating: ${formRating}/10).`);
        } else if (formRating <= 3) {
            attackMod -= 8;
            explanation.push(`❄️ ${teamName} is struggling for form (User Rating: ${formRating}/10).`);
            confidencePenalty += 1; // Poor form is unpredictable
        }

        return { attackMod, defenseMod };
    };

    // Apply Conditions
    if (options?.homeConditions) {
        const mods = applyConditions(homeTeam, options.homeConditions, true);
        homeAttack += mods.attackMod;
        homeDefense += mods.defenseMod;
    }

    if (options?.awayConditions) {
        const mods = applyConditions(awayTeam, options.awayConditions, false);
        awayAttack += mods.attackMod;
        awayDefense += mods.defenseMod;
    }

    // 2. Logic: Attack vs Defense
    const homePotential = (homeAttack * 1.1) - awayDefense; // Home advantage bias in potential
    const awayPotential = awayAttack - (homeDefense * 1.1); // Home defense bonus

    const powerDiff = homePotential - awayPotential;

    // 3. Logic: Statistical Form (Real Data)
    const formDiff = (homeTeam.stats.formPoints - awayTeam.stats.formPoints) * 4;

    // Explanation for Form
    if (homeTeam.stats.formPoints >= 12) {
        explanation.push(`📈 ${homeTeam.name} has been dominant recently (High Form Points).`);
    } else if (awayTeam.stats.formPoints >= 12) {
        explanation.push(`📈 ${awayTeam.name} is on a winning run.`);
    }

    // 4. Calculate Probabilities
    let homeProb = 38 + powerDiff + (formDiff / 2);
    let awayProb = 34 - powerDiff - (formDiff / 2);
    let drawProb = 28;

    // Adjust for Draws
    if (Math.abs(homeProb - awayProb) < 10) {
        drawProb += 15; // High draw chance if teams are close
        homeProb -= 7.5;
        awayProb -= 7.5;
        explanation.push(`⚖️ Teams are evenly matched - Draw is likely.`);
        confidencePenalty += 2; // Hard to call
    }

    // Normalize
    homeProb = Math.max(5, homeProb);
    drawProb = Math.max(5, drawProb);
    awayProb = Math.max(5, awayProb);

    const total = homeProb + drawProb + awayProb;
    const finalHome = Math.round((homeProb / total) * 100);
    const finalDraw = Math.round((drawProb / total) * 100);
    const finalAway = 100 - finalHome - finalDraw;

    // 5. Advanced Confidence Score
    // Base confidence starts at 10, reduced by various factors
    let confidence = 8.5; // Start high but realistic

    // Penalty A: closeness of match
    const spread = Math.abs(finalHome - finalAway);
    if (spread < 15) confidence -= 2.5; // Close game
    else if (spread > 50) confidence += 1; // One-sided

    // Penalty B: Missing players / Injuries (Calculated above)
    confidence -= confidencePenalty;

    // Penalty C: Early Season Volatility (Data sample size)
    if (homeTeam.stats.matchesPlayed < 5) confidence -= 2;

    // Clamp Confidence
    confidence = Math.min(9.8, Math.max(1.0, confidence));

    // Round to 1 decimal
    confidence = Math.round(confidence * 10) / 10;

    return {
        matchId: `${homeTeam.id}-vs-${awayTeam.id}`,
        homeWinProb: finalHome,
        drawProb: finalDraw,
        awayWinProb: finalAway,
        confidenceScore: confidence,
        explanation: explanation.slice(0, 5)
    };
}
