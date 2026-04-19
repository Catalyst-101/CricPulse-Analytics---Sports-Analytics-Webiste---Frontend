import { useState } from "react";
import { Link } from "react-router-dom";
import { TitleLg, TitleSm, Body } from "../components/ui/Typography";
import { allMatches, completedMatches } from "../data/mockData";
import { cn } from "../lib/utils";

const LiveMatchCard = ({ match }) => {
    return (
        <Link 
            to={`/match/${match.id}`} 
            className="block bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 hover:border-primary/40 transition-colors w-full group"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left: Teams & Score */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    {match.teams.map((team, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{team.logo}</span>
                                <span className="font-headline font-bold text-on-surface text-xl">{team.name}</span>
                            </div>
                            <div className="text-right">
                                <span className="font-headline font-bold text-xl">{team.score || "0/0"}</span>
                                <span className="text-xs text-on-surface-variant ml-2">({team.overs || "0"} ov)</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle: Match Info (VS & Status) */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center border-y lg:border-y-0 lg:border-x border-outline-variant/10 py-4 lg:py-0 px-4 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container py-1 px-3 rounded mb-2">
                        {match.type} • {match.category}
                    </span>
                    <span className="font-headline font-bold text-lg text-primary mb-1">CRR: {match.currentRR || "0.00"}</span>
                    {match.series && (
                        <p className="text-xs font-semibold text-on-surface line-clamp-1">{match.series}</p>
                    )}
                    <span className="text-[10px] text-on-surface-variant mt-1">{match.standingsInfo}</span>
                </div>

                {/* Right: Detailed Live Stats */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {/* Player Stats */}
                     <div className="flex flex-col gap-3">
                         {match.currentBatters && (
                            <div className="bg-surface-container rounded p-3">
                               <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 border-b border-outline-variant/10 pb-1">Batters</p>
                               {match.currentBatters.map((b, i) => (
                                   <div key={i} className="flex justify-between text-xs font-semibold">
                                       <span className="text-secondary">{b.name}</span>
                                       <span className="text-on-surface">{b.runs} ({b.balls})</span>
                                   </div>
                               ))}
                            </div>
                         )}
                         {match.currentBowler && (
                            <div className="bg-surface-container rounded p-3">
                               <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 border-b border-outline-variant/10 pb-1">Bowler</p>
                               <div className="flex justify-between text-xs font-semibold">
                                   <span className="text-secondary">{match.currentBowler.name}</span>
                                   <span className="text-on-surface">
                                       {match.currentBowler.wickets}/{match.currentBowler.runs} ({match.currentBowler.overs})
                                   </span>
                               </div>
                            </div>
                         )}
                     </div>

                     {/* Ball Tracking & Partnership */}
                     <div className="flex flex-col gap-3 justify-center h-full"> 
                         {match.partnership && (
                            <div className="flex justify-between items-center text-xs font-bold text-on-surface bg-surface-container p-3 rounded">
                                <span>Partnership:</span>
                                <span>{match.partnership}</span>
                            </div>
                         )}
                         {match.last6Balls && (
                             <div>
                                 <p className="text-[10px] text-on-surface-variant uppercase mb-2">Last 6 Balls</p>
                                 <div className="flex gap-2">
                                     {match.last6Balls.map((b, i) => (
                                        <div 
                                          key={i} 
                                          className={cn(
                                              "flex-1 flex items-center justify-center py-1.5 rounded text-xs font-bold font-headline",
                                              b === "W" ? "bg-red-500/20 text-red-400" : 
                                              b === "4" || b === "6" ? "bg-primary/20 text-primary" : 
                                              "bg-surface-container-high text-on-surface"
                                          )}
                                        >
                                            {b}
                                        </div>
                                     ))}
                                 </div>
                             </div>
                         )}
                     </div>
                </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-outline-variant/10 flex justify-between items-center">
                 <span className="flex items-center gap-1.5 text-[10px] text-primary font-bold uppercase">
                     <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#9cff93]"></span> 
                     Live Match Pulse Active
                 </span>
                 <span className="text-[10px] text-on-surface-variant uppercase group-hover:text-primary transition-colors flex items-center gap-1">
                     Enter Match Center →
                 </span>
            </div>
        </Link>
    );
};

const ResultCard = ({ match }) => {
    return (
        <Link 
            to={`/match/${match.id}`} 
            className="block bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 hover:border-surface-container-highest transition-colors w-full"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left: Teams & Score */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    {match.teams.map((team, idx) => (
                        <div key={idx} className="flex justify-between items-center opacity-80">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">{team.logo}</span>
                                <span className="font-headline font-bold text-on-surface">{team.name}</span>
                            </div>
                            <div className="text-right">
                                <span className="font-headline font-bold text-lg">{team.score || "0/0"}</span>
                                <span className="text-xs text-on-surface-variant ml-2">({team.overs || "0"} ov)</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle: Details */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center border-y lg:border-y-0 lg:border-x border-outline-variant/10 py-4 lg:py-0 px-4 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container py-1 px-3 rounded mb-2">
                        {match.type} • {match.category}
                    </span>
                    {match.series && (
                        <p className="text-xs font-semibold text-on-surface line-clamp-1">{match.series}</p>
                    )}
                    <span className="text-[10px] text-on-surface-variant mt-1">{match.standingsInfo}</span>
                </div>

                {/* Right: Result Text */}
                <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                     <span className="text-sm font-bold text-secondary bg-secondary/10 px-4 py-2 rounded-lg border border-secondary/20">
                         {match.resultText}
                     </span>
                </div>
            </div>
        </Link>
    );
};

export const Live = () => {
    const [formatFilter, setFormatFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");

    const liveMatches = allMatches.filter(match => match.status === "LIVE");

    const formatFilterFn = (match) => {
        const matchesFormat = formatFilter === "All" || match.type === formatFilter;
        const matchesCategory = categoryFilter === "All" || match.category === categoryFilter;
        return matchesFormat && matchesCategory;
    };

    const finalLiveMatches = liveMatches.filter(formatFilterFn);
    const finalCompletedMatches = completedMatches.filter(formatFilterFn);

    const formatOptions = ["All", "T20", "ODI", "Test"];
    const categoryOptions = ["All", "Men's", "Women's"];

    return (
        <div className="space-y-10 animate-in fade-in duration-500 pb-10">
            {/* Header & Shared Filters */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 border-b border-outline-variant/10 pb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                         <span className="relative flex h-4 w-4">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                         </span>
                         <TitleLg className="text-4xl text-on-surface">Live Center</TitleLg>
                    </div>
                    <Body variant="secondary">Centralized telemetry for all live action and recent closures.</Body>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-surface-container rounded-xl p-2 border border-outline-variant/10">
                     <div className="flex items-center gap-1 bg-background rounded-lg p-1">
                         {formatOptions.map(opt => (
                             <button
                                key={opt}
                                onClick={() => setFormatFilter(opt)}
                                className={cn(
                                    "px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide transition-all",
                                    formatFilter === opt 
                                        ? "bg-primary/20 text-primary" 
                                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                                )}
                             >
                                 {opt}
                             </button>
                         ))}
                     </div>
                     <div className="flex items-center gap-1 bg-background rounded-lg p-1">
                         {categoryOptions.map(opt => (
                             <button
                                key={opt}
                                onClick={() => setCategoryFilter(opt)}
                                className={cn(
                                    "px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide transition-all",
                                    categoryFilter === opt 
                                        ? "bg-secondary/20 text-secondary" 
                                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                                )}
                             >
                                 {opt}
                             </button>
                         ))}
                     </div>
                 </div>
            </div>

            {/* Section 1: Live Cricket Score */}
            <section className="space-y-6">
                 <TitleSm className="text-xl uppercase tracking-widest text-on-surface">Live Action</TitleSm>
                 
                 <div className="flex flex-col gap-6">
                     {finalLiveMatches.length > 0 ? (
                         finalLiveMatches.map(match => (
                             <LiveMatchCard key={match.id} match={match} />
                         ))
                     ) : (
                         <div className="py-12 text-center bg-surface-container-low rounded-xl border border-outline-variant/10">
                             <TitleSm className="text-on-surface-variant">No actively streaming matches fit your filters.</TitleSm>
                         </div>
                     )}
                 </div>
            </section>

            {/* Section 2: Results */}
            <section className="space-y-6 pt-10">
                 <TitleSm className="text-xl uppercase tracking-widest text-on-surface">Recent Results</TitleSm>
                 
                 <div className="flex flex-col gap-4">
                     {finalCompletedMatches.length > 0 ? (
                         finalCompletedMatches.map(match => (
                             <ResultCard key={match.id} match={match} />
                         ))
                     ) : (
                         <div className="py-12 text-center bg-surface-container-low rounded-xl border border-outline-variant/10 opacity-60">
                             <TitleSm className="text-on-surface-variant">No completed matches map to your filters.</TitleSm>
                         </div>
                     )}
                 </div>
            </section>
        </div>
    );
};
