// This file is like a dictionary. It defines what words mean in our app.

/**
 * Represents a La Liga Football Team
 */
export interface Team {
    id: string;          // Unique ID (e.g., 'real-madrid')
    name: string;        // Display name (e.g., 'Real Madrid')
    shortName: string;   // Abbreviation (e.g., 'RMA')
    logo: string;        // Emoji for now, URL later 🛡️

    // 1. TEAM FORM (Last 10 Matches)
    stats: {
        matchesPlayed: number;
        wins: number;
        draws: number;
        losses: number;
        goalsScored: number;
        goalsConceded: number;
        formPoints: number; // Last 5 games (Win=3, Draw=1, Loss=0) - Simplified for now
    };

    // 2. STRENGTH METRICS (0-100 Scale for simplicity)
    // These represent things like xG, Possession, etc. combined
    attackStrength: number;  // How good are they at scoring?
    defenseStrength: number; // How good are they at stopping goals?
    homeAdvantage: number;   // Bonus points when playing at home

    // 3. KEY PLAYERS (New)
    players: Player[];
}

/**
 * Represents a specific player
 */
export interface Player {
    id: string;
    name: string;
    position: 'FW' | 'MF' | 'DF' | 'GK';
    rating: number; // 0-10 (Impact on the game)
    stats?: {
        goals: number;
        assists: number;
        matchesPlayed: number;
        lastMatchRating: number; // 0-10 rating from the last match
        yellowCards?: number;    // Count of yellow cards
        redCards?: number;       // Count of red cards
        isInjured?: boolean;     // True if currently injured
    };
}

/**
 * Represents a Match to be predicted
 */
export interface Match {
    id: string;
    homeTeamId: string;
    awayTeamId: string;
    date: string;
}

/**
 * The Output of our Prediction Model
 */
export interface PredictionResult {
    matchId: string;
    homeWinProb: number; // e.g., 0.60 (60%)
    drawProb: number;    // e.g., 0.25 (25%)
    awayWinProb: number; // e.g., 0.15 (15%)

    confidenceScore: number; // 0 to 10 scale of how sure we are
    explanation: string[];   // List of reasons ("Home team has better attack", etc.)
}

export interface TeamConditions {
    missingPlayerIds: string[]; // List of IDs of unavailable players
    formRating: number;         // 0-10 Scale (User rated performance in last 3 games)
}

export interface PredictorOptions {
    homeConditions?: TeamConditions;
    awayConditions?: TeamConditions;
}
