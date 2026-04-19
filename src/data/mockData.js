export const liveMatchData = {
  teamA: { name: "IND", score: 214, wickets: 4, overs: 18.2, logo: "🇮🇳" },
  teamB: { name: "AUS", score: 0, wickets: 0, overs: 0, logo: "🇦🇺" },
  status: "IND batting, Over 18.2",
  currentRR: 11.75,
  requiredRR: 0,
  projectedScore: 236,
  winProbability: { teamA: 68, teamB: 32 },
  last6Balls: ["1", "4", "W", "0", "2", "6"],
  partnership: { runs: 42, balls: 18 },
  currentBatters: [
    { name: "S. Yadav", runs: 68, balls: 24, strikeRate: 283.3, onStrike: true },
    { name: "H. Pandya", runs: 24, balls: 12, strikeRate: 200.0, onStrike: false }
  ],
  currentBowler: { name: "P. Cummins", overs: 3.2, maidens: 0, runs: 42, wickets: 1, economy: 12.6 },
};

export const runRateHistory = [
  { over: 1, runs: 8, cumulativeRuns: 8 },
  { over: 2, runs: 12, cumulativeRuns: 20 },
  { over: 3, runs: 6, cumulativeRuns: 26 },
  { over: 4, runs: 18, cumulativeRuns: 44 },
  { over: 5, runs: 10, cumulativeRuns: 54 },
  { over: 6, runs: 14, cumulativeRuns: 68 },
  { over: 7, runs: 4, cumulativeRuns: 72 },
  { over: 8, runs: 8, cumulativeRuns: 80 },
  { over: 9, runs: 11, cumulativeRuns: 91 },
  { over: 10, runs: 9, cumulativeRuns: 100 },
  { over: 11, runs: 5, cumulativeRuns: 105 },
  { over: 12, runs: 16, cumulativeRuns: 121 },
  { over: 13, runs: 12, cumulativeRuns: 133 },
  { over: 14, runs: 8, cumulativeRuns: 141 },
  { over: 15, runs: 22, cumulativeRuns: 163 },
  { over: 16, runs: 15, cumulativeRuns: 178 },
  { over: 17, runs: 14, cumulativeRuns: 192 },
  { over: 18, runs: 16, cumulativeRuns: 208 },
];

export const topPerformers = {
  batsman: { name: "V. Kohli", runs: 82, balls: 45, impactScore: 94 },
  bowler: { name: "M. Starc", wickets: 3, economy: 6.2, impactScore: 88 },
};

export const winProbabilityHistory = [
  { over: 0, ind: 50, aus: 50 },
  { over: 5, ind: 55, aus: 45, event: "Boundary" },
  { over: 10, ind: 45, aus: 55, event: "Wicket" },
  { over: 15, ind: 62, aus: 38, event: "Momentum Shift" },
  { over: 18, ind: 68, aus: 32 },
];

export const playerForm = [
  { match: "vs ENG", runs: 45, strikeRate: 140, trend: "up" },
  { match: "vs SA", runs: 12, strikeRate: 90, trend: "down" },
  { match: "vs PAK", runs: 82, strikeRate: 160, trend: "up" },
  { match: "vs NZ", runs: 34, strikeRate: 130, trend: "up" },
  { match: "vs SL", runs: 55, strikeRate: 155, trend: "up" },
];

export const momentumData = [
  { phase: "Powerplay", team: "IND", domination: 70 },
  { phase: "Middle", team: "AUS", domination: 60 },
  { phase: "Death", team: "IND", domination: 85 }
];

export const shotDistribution = [
  { region: "Third Man", runs: 12, percentage: 10 },
  { region: "Point", runs: 24, percentage: 20 },
  { region: "Cover", runs: 36, percentage: 30 },
  { region: "Mid Off", runs: 8, percentage: 5 },
  { region: "Mid On", runs: 10, percentage: 8 },
  { region: "Mid Wicket", runs: 18, percentage: 15 },
  { region: "Square Leg", runs: 8, percentage: 7 },
  { region: "Fine Leg", runs: 5, percentage: 5 },
];

export const allMatches = [
  {
    id: 1,
    type: "T20",
    category: "Men's",
    status: "LIVE",
    series: "World T20 Championship",
    isTournament: true,
    teams: [{ name: "IND", logo: "🇮🇳", score: "214/4", overs: "18.2" }, { name: "AUS", logo: "🇦🇺", score: "135/2", overs: "11.4" }],
    standingsInfo: "Final",
    currentRR: 11.57,
    last6Balls: ["1", "4", "W", "0", "2", "6"],
    partnership: "42 (18)",
    currentBatters: [
      { name: "S. Yadav", runs: 68, balls: 24 },
      { name: "H. Pandya", runs: 24, balls: 12 }
    ],
    currentBowler: { name: "P. Cummins", overs: 3.2, runs: 42, wickets: 1 }
  },
  {
    id: 2,
    type: "ODI",
    category: "Men's",
    status: "UPCOMING",
    series: "Bilateral Series",
    isTournament: false,
    teams: [{ name: "ENG", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, { name: "NZ", logo: "🇳🇿" }],
    date: "Tomorrow, 10:00 AM",
    venue: "Lord's, London",
    description: "1st ODI Match",
    standingsInfo: "Match 1 of 3",
  },
  {
    id: 3,
    type: "Test",
    category: "Men's",
    status: "UPCOMING",
    series: "The Ashes",
    isTournament: false,
    teams: [{ name: "AUS", logo: "🇦🇺" }, { name: "ENG", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }],
    date: "Nov 23, 09:30 AM",
    venue: "Gabba, Brisbane",
    description: "1st Test Match",
    standingsInfo: "Day 1",
  },
  {
    id: 4,
    type: "T20",
    category: "Women's",
    status: "LIVE",
    series: "WPL T20",
    isTournament: true,
    teams: [{ name: "MI", logo: "🔵", score: "142/3", overs: "15.0" }, { name: "DC", logo: "🔴", score: "0/0", overs: "0" }],
    standingsInfo: "Qualifier 1",
    currentRR: 9.46,
    last6Balls: ["1", "1", "1", "4", "2", "1"],
    partnership: "55 (32)",
    currentBatters: [
      { name: "H. Kaur", runs: 45, balls: 28 },
      { name: "N. Sciver", runs: 18, balls: 14 }
    ],
    currentBowler: { name: "M. Kapp", overs: 3.0, runs: 22, wickets: 1 }
  },
  {
    id: 5,
    type: "ODI",
    category: "Men's",
    status: "LIVE",
    series: "Asia Cup",
    isTournament: true,
    teams: [{ name: "PAK", logo: "🇵🇰", score: "298/7", overs: "48.0" }, { name: "SL", logo: "🇱🇰", score: "0/0", overs: "0" }],
    standingsInfo: "Group Stage",
    currentRR: 6.20,
    last6Balls: ["W", "0", "1", "1", "4", "6"],
    partnership: "12 (6)",
    currentBatters: [
      { name: "I. Ahmed", runs: 42, balls: 20 },
      { name: "S. Afridi", runs: 6, balls: 2 }
    ],
    currentBowler: { name: "M. Theekshana", overs: 9.0, runs: 58, wickets: 2 }
  },
  {
    id: 6,
    type: "T20",
    category: "Men's",
    status: "UPCOMING",
    series: "Caribbean Premier League",
    isTournament: true,
    teams: [{ name: "TKR", logo: "⚔️" }, { name: "GAW", logo: "🏹" }],
    date: "Tonight, 07:00 PM",
    venue: "Port of Spain",
    description: "Match 12 • High intensity clash",
    standingsInfo: "Round Robin",
  },
  {
    id: 7,
    type: "Test",
    category: "Women's",
    status: "UPCOMING",
    series: "Border-Gavaskar Trophy",
    isTournament: false,
    teams: [{ name: "IND", logo: "🇮🇳" }, { name: "AUS", logo: "🇦🇺" }],
    date: "Dec 10, 09:00 AM",
    venue: "Wankhede, Mumbai",
    description: "1st Test • Day 1",
    standingsInfo: "Series opener",
  },
  {
    id: 8,
    type: "T20",
    category: "Men's",
    status: "UPCOMING",
    series: "Super Smash",
    isTournament: true,
    teams: [{ name: "AKL", logo: "🏙️" }, { name: "WEL", logo: "🔥" }],
    date: "Tomorrow, 02:00 PM",
    venue: "Eden Park, Auckland",
    description: "Final",
    standingsInfo: "Championship Round",
  }
];

export const trendingPlayers = [
  {
    id: 1,
    name: "Virat Kohli",
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=200&q=80",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    country: "India",
  },
  {
    id: 2,
    name: "Pat Cummins",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=200&q=80",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast",
    country: "Australia",
  },
  {
    id: 3,
    name: "Ellyse Perry",
    image: "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=200&q=80",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast-medium",
    country: "Australia",
  },
   {
    id: 4,
    name: "Babar Azam",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&q=80",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm offbreak",
    country: "Pakistan",
  },
  {
    id: 5,
    name: "Rashid Khan",
    image: "https://images.unsplash.com/photo-1520610996884-7a3eb0bfb6ff?w=200&q=80",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm legbreak",
    country: "Afghanistan",
  },
  {
    id: 6,
    name: "Smriti Mandhana",
    image: "https://images.unsplash.com/photo-1549429546-2495b452e858?w=200&q=80",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm offbreak",
    country: "India",
  },
  {
    id: 7,
    name: "Trent Boult",
    image: "https://images.unsplash.com/photo-1510279589335-51b7ea84bcbb?w=200&q=80",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Left-arm fast-medium",
    country: "New Zealand",
  },
  {
    id: 8,
    name: "Ben Stokes",
    image: "https://images.unsplash.com/photo-1533254924-f7b5df21a224?w=200&q=80",
    battingStyle: "Left-hand bat",
    bowlingStyle: "Right-arm fast-medium",
    country: "England",
  }
];

export const completedMatches = [
  {
    id: 101,
    type: "T20",
    category: "Men's",
    status: "COMPLETED",
    series: "World T20 Championship",
    teams: [{ name: "ENG", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "185/6", overs: "20.0" }, { name: "SA", logo: "🇿🇦", score: "172/9", overs: "20.0" }],
    resultText: "England won by 13 runs",
    standingsInfo: "Semi Final 1"
  },
  {
    id: 102,
    type: "ODI",
    category: "Men's",
    status: "COMPLETED",
    series: "Bilateral Series",
    teams: [{ name: "IND", logo: "🇮🇳", score: "320/5", overs: "50.0" }, { name: "SL", logo: "🇱🇰", score: "145/10", overs: "28.4" }],
    resultText: "India won by 175 runs",
    standingsInfo: "Final"
  },
  {
    id: 103,
    type: "Test",
    category: "Women's",
    status: "COMPLETED",
    series: "Women's Ashes",
    teams: [{ name: "AUS", logo: "🇦🇺", score: "473 & 257/2 d", overs: "132.0" }, { name: "ENG", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: "298 & 214/10", overs: "85.2" }],
    resultText: "Australia won by 218 runs",
    standingsInfo: "Test 1 of 1"
  }
];
