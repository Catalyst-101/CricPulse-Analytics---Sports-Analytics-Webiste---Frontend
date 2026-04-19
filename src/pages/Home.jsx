import { useState } from "react";
import { TitleLg, TitleSm, Body } from "../components/ui/Typography";
import { allMatches, trendingPlayers } from "../data/mockData";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const MatchCard = ({ match }) => {
    const isLive = match.status === "LIVE";
    return (
        <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/10 min-w-[320px] max-w-[320px] shrink-0 flex flex-col justify-between hover:border-primary/30 transition-colors w-full h-full">
            <div className="flex flex-col gap-4 mb-4">
                <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container py-1 px-2 rounded">
                            {match.type} • {match.category}
                        </span>
                        {isLive && (
                             <span className="flex items-center gap-1 text-[10px] text-primary font-bold bg-primary/10 px-2 py-1 rounded">
                                 <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> LIVE
                             </span>
                        )}
                    </div>
                    <span className="text-xs text-on-surface-variant font-medium">{match.standingsInfo}</span>
                </div>

                {match.series && (
                    <div>
                       <p className="text-sm font-semibold text-on-surface truncate">{match.series}</p>
                       {match.status === "UPCOMING" && <p className="text-[10px] text-primary uppercase">Scheduled</p>}
                    </div>
                )}

                <div className="flex flex-col gap-3 py-2">
                    {match.teams.map((team, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">{team.logo}</span>
                                <span className="font-headline font-bold text-on-surface">{team.name}</span>
                            </div>
                            {isLive && (
                               <div className="text-right">
                                    <span className="font-headline font-bold text-lg">{team.score || "0/0"}</span>
                                    <span className="text-xs text-on-surface-variant ml-2">({team.overs || "0"} ov)</span>
                               </div>
                            )}
                        </div>
                    ))}
                </div>

                {!isLive && (
                    <div className="mt-auto pt-3 border-t border-outline-variant/10">
                       <p className="text-xs text-secondary font-bold">{match.date}</p>
                       <p className="text-[10px] text-on-surface-variant">{match.venue}</p>
                       <p className="text-[10px] text-on-surface italic mt-1">{match.description}</p>
                    </div>
                )}
            </div>

            {/* Action Buttons Pushed to Bottom */}
            <div className="flex gap-2 mt-auto pt-4 border-t border-outline-variant/10">
                <button className="flex-1 py-1.5 text-[10px] uppercase font-bold text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors">
                    Schedule
                </button>
                {match.isTournament && (
                    <button className="flex-1 py-1.5 text-[10px] uppercase font-bold text-primary hover:bg-primary/10 rounded transition-colors">
                        Table
                    </button>
                )}
            </div>
        </div>
    );
};

const PlayerCard = ({ player }) => {
    return (
        <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 group cursor-pointer hover:border-primary/40 transition-colors shrink-0 min-w-[240px] max-w-[240px] w-full">
            <div className="h-40 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent z-10"></div>
               <img src={player.image} alt={player.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
               <div className="absolute top-2 left-2 z-20 bg-surface/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold border border-outline-variant/20">
                   {player.country}
               </div>
            </div>
            <div className="p-4 relative z-20">
               <TitleSm className="mb-3">{player.name}</TitleSm>
               <div className="flex flex-col gap-1.5 pt-3 border-t border-outline-variant/10">
                   <div className="flex justify-between items-center">
                       <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Batting</span>
                       <span className="text-xs font-semibold text-on-surface">{player.battingStyle}</span>
                   </div>
                   <div className="flex justify-between items-center">
                       <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Bowling</span>
                       <span className="text-xs font-semibold text-on-surface text-right">{player.bowlingStyle}</span>
                   </div>
               </div>
            </div>
        </div>
    );
};

export const Home = () => {
    const [formatFilter, setFormatFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");

    const filteredMatches = allMatches.filter(match => {
        const matchesFormat = formatFilter === "All" || match.type === formatFilter;
        const matchesCategory = categoryFilter === "All" || match.category === categoryFilter;
        return matchesFormat && matchesCategory;
    });

    const formatOptions = ["All", "T20", "ODI", "Test"];
    const categoryOptions = ["All", "Men's", "Women's"];

    return (
        <div className="space-y-10 animate-in fade-in duration-500 pb-10">
            {/* Header */}
            <div>
                <TitleLg className="text-4xl mb-2 text-on-surface">Cricket Central</TitleLg>
                <Body variant="secondary">Browse live coverage, upcoming fixtures, and trending athletes.</Body>
            </div>

            {/* Match Scroll Section */}
            <section className="space-y-6">
                 {/* Filters */}
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

                 {/* Match Carousel */}
                 {filteredMatches.length > 0 ? (
                    <div className="flex gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar px-2 md:px-0 snap-x items-stretch">
                        {filteredMatches.map(match => (
                            <Link to={`/match/${match.id}`} key={match.id} className="snap-start flex h-full">
                                <MatchCard match={match} />
                            </Link>
                        ))}
                    </div>
                 ) : (
                    <div className="py-12 text-center bg-surface-container-low rounded-xl border border-outline-variant/10">
                        <TitleSm className="text-on-surface-variant">No matches match your filters.</TitleSm>
                    </div>
                 )}
            </section>

            {/* Trending Players Section */}
            <section className="space-y-6 border-t border-outline-variant/10 pt-10">
                <div className="flex items-center gap-3 mb-6">
                    <TitleSm className="text-xl uppercase tracking-widest text-on-surface">Trending Players</TitleSm>
                </div>
                
                <div className="flex gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar px-2 md:px-0 snap-x">
                    {trendingPlayers.map(player => (
                        <div key={player.id} className="snap-start flex">
                            <PlayerCard player={player} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
