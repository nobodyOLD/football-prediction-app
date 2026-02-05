
import { TEAMS } from '../src/lib/data';
import { predictMatch } from '../src/lib/predictor';

// 1. Get Teams
const realMadrid = TEAMS.find(t => t.id === 'real-madrid');
const osasuna = TEAMS.find(t => t.id === 'osasuna');
const almeria = TEAMS.find(t => t.id === 'almeria');

if (!realMadrid || !osasuna || !almeria) {
    console.error("Missing teams!");
    process.exit(1);
}

// 2. Run Test Cases

console.log("------------------------------------------------");
console.log("🧪 TEST 1: Real Madrid vs Almeria (Strong vs Weak)");
console.log("Expected: High Home Win %");
const test1 = predictMatch(realMadrid, almeria);
console.log(`Result: Home ${test1.homeWinProb}% | Draw ${test1.drawProb}% | Away ${test1.awayWinProb}%`);
console.log(`Confidence: ${test1.confidenceScore}/10`);
console.log("Why?", test1.explanation);

console.log("\n------------------------------------------------");
console.log("🧪 TEST 2: Almeria vs Real Madrid (Weak vs Strong)");
console.log("Expected: High Away Win % (even with home advantage)");
const test2 = predictMatch(almeria, realMadrid);
console.log(`Result: Home ${test2.homeWinProb}% | Draw ${test2.drawProb}% | Away ${test2.awayWinProb}%`);
console.log(`Confidence: ${test2.confidenceScore}/10`);
console.log("Why?", test2.explanation);

console.log("\n------------------------------------------------");
console.log("🧪 TEST 3: Osasuna vs Almeria (Mid vs Weak)");
console.log("Expected: Balanced, favor home");
const test3 = predictMatch(osasuna, almeria);
console.log(`Result: Home ${test3.homeWinProb}% | Draw ${test3.drawProb}% | Away ${test3.awayWinProb}%`);
console.log("------------------------------------------------");
