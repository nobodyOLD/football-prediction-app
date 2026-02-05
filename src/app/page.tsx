"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TEAMS } from "../lib/data";
import { predictMatch } from "../lib/predictor";
import { PredictionResult, TeamConditions } from "../lib/types";

// Types for Live Data
interface LiveMatch {
  id: number;
  homeTeam: { name: string; shortName: string; crest: string };
  awayTeam: { name: string; shortName: string; crest: string };
  utcDate: string;
}

// Default condition state
const initialConditions: TeamConditions = {
  missingPlayerIds: [],
  formRating: 5 // Default 'Average'
};

export default function Home() {
  const [homeTeamId, setHomeTeamId] = useState<string>(TEAMS[0].id);
  const [awayTeamId, setAwayTeamId] = useState<string>(TEAMS[1].id);

  // New State for Live Data
  const [matches, setMatches] = useState<LiveMatch[]>([]);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [loadingMatches, setLoadingMatches] = useState(true);

  // New State for Advanced Factors
  const [homeConditions, setHomeConditions] = useState<TeamConditions>(initialConditions);
  const [awayConditions, setAwayConditions] = useState<TeamConditions>(initialConditions);

  const [prediction, setPrediction] = useState<PredictionResult | null>(null);

  // FETCH LIVE MATCHES
  useEffect(() => {
    async function fetchMatches() {
      try {
        const res = await fetch('/api/matches');
        const data = await res.json();
        // The API now returns { matches, lastUpdated }
        if (data && data.matches) {
          setMatches(data.matches);
          setLastUpdated(data.lastUpdated);
        }
      } catch (e) {
        console.error("Failed to fetch matches", e);
      } finally {
        setLoadingMatches(false);
      }
    }
    fetchMatches();
  }, []);

  const handlePredict = () => {
    const homeTeam = TEAMS.find(t => t.id === homeTeamId);
    const awayTeam = TEAMS.find(t => t.id === awayTeamId);

    if (homeTeam && awayTeam) {
      const result = predictMatch(homeTeam, awayTeam, {
        homeConditions,
        awayConditions
      });
      setPrediction(result);
    }
  };

  // Helper to toggle players
  const togglePlayer = (conditions: TeamConditions, setConditions: (c: TeamConditions) => void, playerId: string) => {
    const currentMissing = conditions.missingPlayerIds || [];
    if (currentMissing.includes(playerId)) {
      setConditions({
        ...conditions,
        missingPlayerIds: currentMissing.filter(id => id !== playerId)
      });
    } else {
      setConditions({
        ...conditions,
        missingPlayerIds: [...currentMissing, playerId]
      });
    }
  };

  // Helper to render condition inputs
  const renderTeamConditions = (
    title: string,
    teamId: string,
    conditions: TeamConditions,
    setConditions: (c: TeamConditions) => void,
    colorClass: string
  ) => {
    const team = TEAMS.find(t => t.id === teamId);
    if (!team) return null;

    return (
      <div className={`p-4 rounded-xl border-2 ${colorClass} bg-white dark:bg-zinc-800`}>
        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 border-b pb-2 border-gray-100 dark:border-zinc-700">
          {title} News
        </h3>

        <div className="space-y-6">
          {/* 1. Squad Availability */}
          <div>
            <label className="block text-xs font-semibold mb-2 text-gray-500">Uncheck Unavailable Players:</label>
            <div className="flex flex-col gap-2">
              {team.players.map(player => (
                <button
                  key={player.id}
                  onClick={() => togglePlayer(conditions, setConditions, player.id)}
                  className={`text-xs p-2 rounded-lg border text-left transition-all flex justify-between items-center group ${!conditions.missingPlayerIds.includes(player.id)
                    ? 'bg-green-50 border-green-200 text-green-700 font-medium dark:bg-green-900/20 dark:border-green-800 dark:text-green-400'
                    : 'bg-gray-50 border-gray-200 text-gray-400 decoration-line-through dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-600'
                    }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span>{player.name}</span>
                      {player.stats && !conditions.missingPlayerIds.includes(player.id) && (
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${player.stats.lastMatchRating >= 8.0 ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' :
                          player.stats.lastMatchRating <= 6.5 ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                            'bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-zinc-400'
                          }`}>
                          {player.stats.lastMatchRating}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] opacity-70 font-normal">{player.position}</span>
                  </div>
                  {player.stats && !conditions.missingPlayerIds.includes(player.id) && (
                    <div className="text-[10px] flex gap-2 opacity-80 group-hover:opacity-100 items-center">
                      <span title="Goals">⚽ {player.stats.goals}</span>
                      <span title="Assists">👟 {player.stats.assists}</span>

                      {/* Status Icons */}
                      {player.stats.yellowCards && player.stats.yellowCards > 0 && (
                        <span title={`${player.stats.yellowCards} Yellow Cards`} className="flex items-center gap-0.5 ml-1">
                          <span className="w-2 h-3 bg-yellow-400 rounded-sm inline-block shadow-sm"></span>
                          {player.stats.yellowCards > 1 && <span className="font-bold text-[9px]">{player.stats.yellowCards}</span>}
                        </span>
                      )}
                      {player.stats.redCards && player.stats.redCards > 0 && (
                        <span title="Red Card / Suspended" className="w-2 h-3 bg-red-500 rounded-sm inline-block shadow-sm ml-1"></span>
                      )}
                      {player.stats.isInjured && (
                        <span title="Injured" className="text-sm ml-1">🚑</span>
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>


        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 py-6">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            🦁 EPL Predictor AI
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            2025/26 Season Data
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Input Section */}
          <div className="space-y-6">

            {/* LIVE DATA SECTION */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>📅 Upcoming Fixtures (Live)</span>
                <div className="flex flex-col items-end">
                  {loadingMatches && <span className="text-xs text-purple-500 animate-pulse">Loading...</span>}
                  {lastUpdated && (
                    <span className="text-[10px] text-gray-400 font-normal">
                      Last update: {new Date(lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  )}
                </div>
              </h3>

              {!loadingMatches && matches.length === 0 && (
                <p className="text-xs text-gray-400">No scheduled matches found or API key limit reached.</p>
              )}

              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {matches.map((match) => (
                  <button
                    key={match.id}
                    onClick={() => {
                      // Try to auto-select teams if they match our database names
                      // Simple heuristic: check if our team name includes the API name part
                      const home = TEAMS.find(t => t.name.includes(match.homeTeam.shortName || match.homeTeam.name));
                      const away = TEAMS.find(t => t.name.includes(match.awayTeam.shortName || match.awayTeam.name));
                      if (home) setHomeTeamId(home.id);
                      if (away) setAwayTeamId(away.id);
                    }}
                    className="w-full text-xs p-2 rounded-lg bg-gray-50 dark:bg-zinc-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all flex justify-between items-center group"
                  >
                    <div className="flex items-center gap-2 w-[45%] justify-end">
                      <span className="font-medium truncate">{match.homeTeam.shortName || match.homeTeam.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono bg-white dark:bg-zinc-950 px-1.5 py-0.5 rounded border dark:border-zinc-700">VS</span>
                    <div className="flex items-center gap-2 w-[45%]">
                      <span className="font-medium truncate">{match.awayTeam.shortName || match.awayTeam.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>


            {/* Team Selectors */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-600 dark:text-zinc-400 uppercase tracking-wider">
                  Home Team
                </label>
                <select
                  value={homeTeamId}
                  onChange={(e) => setHomeTeamId(e.target.value)}
                  className="w-full p-4 rounded-xl bg-white dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-700 focus:border-orange-500 focus:ring-0 transition-all text-lg font-medium shadow-sm hover:border-gray-300 dark:hover:border-zinc-600 appearance-none"
                >
                  {TEAMS.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.logo} {team.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-center text-gray-400 dark:text-zinc-600 font-bold text-xl my-4">
                VS
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-600 dark:text-zinc-400 uppercase tracking-wider">
                  Away Team
                </label>
                <select
                  value={awayTeamId}
                  onChange={(e) => setAwayTeamId(e.target.value)}
                  className="w-full p-4 rounded-xl bg-white dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-700 focus:border-red-500 focus:ring-0 transition-all text-lg font-medium shadow-sm hover:border-gray-300 dark:hover:border-zinc-600 appearance-none"
                >
                  {TEAMS.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.logo} {team.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Match Factors / Conditions */}
            <div className="grid grid-cols-2 gap-4">
              {renderTeamConditions('Home', homeTeamId, homeConditions, setHomeConditions, 'border-orange-100 dark:border-orange-900/30')}
              {renderTeamConditions('Away', awayTeamId, awayConditions, setAwayConditions, 'border-red-100 dark:border-red-900/30')}
            </div>

            <button
              onClick={handlePredict}
              disabled={homeTeamId === awayTeamId}
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {homeTeamId === awayTeamId ? "Select Different Teams" : "Analyze Matchup"}
            </button>
          </div>

          {/* Results Section */}
          <div className="md:sticky md:top-8">
            {prediction ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-zinc-700">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Prediction Results</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${prediction.confidenceScore > 7 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      prediction.confidenceScore > 4 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                      Confidence: {prediction.confidenceScore}/10
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-8">
                    <div className="text-center p-3 rounded-xl bg-gray-50 dark:bg-zinc-900/50">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Home</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{prediction.homeWinProb}%</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-gray-50 dark:bg-zinc-900/50">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Draw</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{prediction.drawProb}%</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-gray-50 dark:bg-zinc-900/50">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Away</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{prediction.awayWinProb}%</div>
                    </div>
                  </div>

                  {/* Probability Bar */}
                  <div className="h-4 w-full bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden flex mb-8">
                    <div style={{ width: `${prediction.homeWinProb}%` }} className="h-full bg-blue-500" />
                    <div style={{ width: `${prediction.drawProb}%` }} className="h-full bg-gray-400 dark:bg-zinc-500" />
                    <div style={{ width: `${prediction.awayWinProb}%` }} className="h-full bg-red-500" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <span>🧠</span> AI Analysis
                    </h3>
                    <ul className="space-y-3">
                      {prediction.explanation.map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm bg-gray-50 dark:bg-zinc-900/30 p-3 rounded-lg">
                          <span>•</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center text-gray-400 dark:text-zinc-600 border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-3xl">
                <div className="text-6xl mb-4 grayscale opacity-50">🏟️</div>
                <p className="font-medium">Select teams and conditions to generate a match report.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-xs text-gray-400 dark:text-zinc-600 max-w-lg mx-auto leading-relaxed">
          Disclaimer: This tool calculates probabilities based on historical statistics and simple heuristics.
          It is for entertainment purposes only and should not be used for gambling or financial decisions.
          Sports outcomes are unpredictable.
        </p>
        <div className="mt-4 text-xs font-medium text-gray-300 dark:text-zinc-700">
          Built with Next.js & TypeScript
        </div>
      </footer>
    </div>
  );
}
