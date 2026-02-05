import { TEAMS } from '../src/lib/data';
import { predictMatch } from '../src/lib/predictor';
import { PredictorOptions } from '../src/lib/types';

// 1. Setup Teams
const manCity = TEAMS.find(t => t.id === 'man-city'); // Strong
const arsenal = TEAMS.find(t => t.id === 'arsenal');  // Strong Rival

if (!manCity || !arsenal) { throw new Error("Teams not found"); }

console.log("------------------------------------------------");
console.log("🧪 ADVANCED TEST: Man City vs Arsenal");
console.log("------------------------------------------------");

// Case 1: Standard Match (Baseline)
const baseline = predictMatch(manCity, arsenal);
console.log(`\n1. Baseline (Full Strength):`);
console.log(`   Home Win: ${baseline.homeWinProb}% | Draw: ${baseline.drawProb}% | Away: ${baseline.awayWinProb}%`);

// Case 2: Man City Crisis (Haaland Missing + Bad Form)
const crisisOptions: PredictorOptions = {
    homeConditions: {
        missingPlayerIds: ['mci_haaland', 'mci_kdb', 'mci_rodri'], // 3 key players out
        formRating: 2 // Terrible form
    }
};

const crisis = predictMatch(manCity, arsenal, crisisOptions);
console.log(`\n2. Man City Crisis (Injuries + No Haaland):`);
console.log(`   Home Win: ${crisis.homeWinProb}% | Draw: ${crisis.drawProb}% | Away: ${crisis.awayWinProb}%`);
console.log(`   Reasons:`, crisis.explanation);

// Case 3: Arsenal on Fire (Saka Excellent form)
const upsetOptions: PredictorOptions = {
    homeConditions: crisisOptions.homeConditions, // City still in crisis
    awayConditions: {
        missingPlayerIds: [],
        formRating: 9 // Excellent form
    }
};

const upset = predictMatch(manCity, arsenal, upsetOptions);
console.log(`\n3. Upset Potential (Rival Strong Form vs Crisis City):`);
console.log(`   Home Win: ${upset.homeWinProb}% | Draw: ${upset.drawProb}% | Away: ${upset.awayWinProb}%`);
console.log(`   Reasons:`, upset.explanation);

if (upset.awayWinProb > baseline.awayWinProb) {
    console.log("\n✅ SUCCESS: Probabilities shifted correctly based on conditions.");
} else {
    console.error("\n❌ FAILURE: Probabilities did not respond to conditions.");
    process.exit(1);
}
