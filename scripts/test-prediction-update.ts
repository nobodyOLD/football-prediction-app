import { TEAMS } from '../src/lib/data';
import { predictMatch } from '../src/lib/predictor';

// Scenario 1: Man City vs Arsenal (Top Clash, Close Game)
// Expect: Lower confidence, mention of balanced odds or form.
const city = TEAMS.find(t => t.id === 'man-city')!;
const arsenal = TEAMS.find(t => t.id === 'arsenal')!;

console.log("\n--- TEST: Man City vs Arsenal (Derby) ---");
const result1 = predictMatch(city, arsenal);
console.log(`Confidence: ${result1.confidenceScore}/10`);
console.log("Explanation:\n", result1.explanation.join('\n'));


// Scenario 2: Man City vs Southampton (David vs Goliath)
// Expect: High confidence, mention of goals Scored per game.
const southampton = TEAMS.find(t => t.id === 'southampton')!;
console.log("\n--- TEST: Man City vs Southampton (Mismatch) ---");
const result2 = predictMatch(city, southampton);
console.log(`Confidence: ${result2.confidenceScore}/10`);
console.log("Explanation:\n", result2.explanation.join('\n'));

// Scenario 3: Man City with Rodri Injured (Simulated)
// Expect: Mention of Critical Injury, slightly lower confidence.
console.log("\n--- TEST: Man City (Rodri Out) vs Arsenal ---");
const result3 = predictMatch(city, arsenal, {
    homeConditions: { missingPlayerIds: ['mci_rodri'], formRating: 5 }
});
console.log(`Confidence: ${result3.confidenceScore}/10`);
console.log("Explanation:\n", result3.explanation.join('\n'));
