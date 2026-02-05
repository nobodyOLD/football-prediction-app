// src/lib/store.ts

// 1. What is this file?
// This is the "Fridge" for our data.
// Instead of ordering fresh data (pizza) every time a user asks,
// we check if we have some in the fridge first.

interface CachedData {
    matches: any[];
    lastUpdated: number; // The time (in computer numbers) when we last fetched
}

// 2. The Store
// We use a "Class" to keep this organized.
// 'private' means other files can't mess with the data directly.
class MatchStore {
    private cache: CachedData | null = null;
    private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 Hours in milliseconds

    // 3. The Main Function
    // This is what the API route calls.
    async getData() {
        // A. Check if cache exists and is fresh
        if (this.cache && this.isCacheValid()) {
            console.log("🟢 Serving from Cache (Fridge)");
            return this.cache;
        }

        // B. If not, fetch new data
        console.log("🔴 Cache empty or old -> Fetching from API (Ordering Pizza)");
        return await this.fetchFromApi();
    }

    // Helper: Is the cache fresh?
    private isCacheValid(): boolean {
        if (!this.cache) return false;
        const now = Date.now();
        const age = now - this.cache.lastUpdated;
        return age < this.CACHE_DURATION; // True if younger than 24 hours
    }

    // Helper: Validating the API Key
    private getApiKey(): string {
        const key = process.env.FOOTBALL_DATA_KEY;
        if (!key) throw new Error("SERVER ERROR: API Key missing in environment variables.");
        return key;
    }

    // The actual Fetch
    private async fetchFromApi() {
        try {
            const apiKey = this.getApiKey();
            const url = 'https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED';

            const response = await fetch(url, {
                headers: { 'X-Auth-Token': apiKey },
                // vital: revalidate 0 here because WE control the caching in this class
                next: { revalidate: 0 }
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();

            // Save to cache
            this.cache = {
                matches: data.matches || [],
                lastUpdated: Date.now()
            };

            return this.cache;
        } catch (error) {
            console.error("Failed to update cache:", error);
            // Safety: If fetch fails, return old cache if we have it, or empty
            if (this.cache) return this.cache;
            return { matches: [], lastUpdated: 0 };
        }
    }
}

// Export a SINGLE instance (Singleton)
// This ensures everyone shares the same "Fridge"
export const matchStore = new MatchStore();
