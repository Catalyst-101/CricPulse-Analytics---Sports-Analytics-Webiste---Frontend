import { TitleLg, TitleSm, Body } from "../components/ui/Typography";
import { PlayerFormTracker } from "../components/dashboard/PlayerFormTracker";
import { DeliveryPitchMap } from "../components/analytics/DeliveryPitchMap";
import { ShotAnalysis } from "../components/dashboard/ShotAnalysis";
import { shotDistribution, playerForm } from "../data/mockData";

export const Players = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header & Momentum Bar Section */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <TitleLg className="text-4xl text-on-surface mb-2">Player Performance <span className="text-primary">Deep-Dive</span></TitleLg>
                    <Body variant="secondary" className="max-w-xl">Advanced visual analysis of shot distributions, delivery length consistency, and performance trends over the current season.</Body>
                </div>
                <div className="flex items-center bg-surface-container rounded-full px-4 py-2 border border-outline-variant/10">
                    <span className="text-[10px] font-bold text-primary mr-3">MATCH STATUS</span>
                    <span className="w-2 h-2 bg-primary animate-pulse rounded-full mr-2"></span>
                    <span className="text-sm font-medium uppercase tracking-widest text-on-surface">LIVE DATA SYNC</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 bg-surface-container-low rounded-xl p-6 relative overflow-hidden flex flex-col border border-outline-variant/10">
                    <div className="flex justify-between items-start mb-8 z-10">
                        <div className="flex items-center space-x-6">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all rounded-full"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=200&q=80" 
                                    alt="Player" 
                                    className="relative w-24 h-24 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-primary/20" 
                                />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-1">Batting Order #3</div>
                                <h2 className="text-3xl font-headline font-bold text-on-surface">Liam Sterling</h2>
                                <div className="flex space-x-4 mt-2">
                                    <div className="text-center">
                                        <div className="text-[8px] text-on-surface-variant uppercase font-bold">AVG</div>
                                        <div className="text-xl font-headline font-bold text-on-surface">48.2</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[8px] text-on-surface-variant uppercase font-bold">SR</div>
                                        <div className="text-xl font-headline font-bold text-on-surface">142.5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right hidden sm:block">
                            <div className="text-[10px] text-on-surface-variant font-bold mb-1">LAST 5 MATCHES FORM</div>
                            <div className="flex items-center text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">
                                <span className="mr-1">📈</span>
                                +12.4% PERFORMANCE
                            </div>
                        </div>
                    </div>
                    {/* Line Graph Form tracker */}
                    <div className="flex-1 min-h-[220px]">
                        <PlayerFormTracker data={playerForm} />
                    </div>
                </div>

                {/* Pitch Map (Bowling Analysis) */}
                <div className="md:col-span-4 h-full">
                    <DeliveryPitchMap />
                </div>
                
                {/* Wagon Wheel */}
                <div className="md:col-span-6 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
                     <div className="flex items-center justify-between mb-8">
                         <TitleSm className="tracking-widest uppercase">Shot Wagon Wheel</TitleSm>
                     </div>
                     <div className="h-[300px]">
                         <ShotAnalysis data={shotDistribution} />
                     </div>
                </div>

                {/* Runs by Field Region */}
                <div className="md:col-span-6 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
                     <div className="flex items-center justify-between mb-8">
                         <TitleSm className="tracking-widest uppercase">Runs by Field Region</TitleSm>
                         <span className="material-symbols-outlined text-on-surface-variant">bar_chart</span>
                     </div>
                     
                     <div className="space-y-6">
                        {[
                          { region: "Cover / Point", runs: 42, pct: "85%" },
                          { region: "Mid Off / On", runs: 28, pct: "55%" },
                          { region: "Square Leg / Mid Wicket", runs: 34, pct: "68%" },
                          { region: "Third Man / Fine Leg", runs: 12, pct: "25%" },
                          { region: "Behind Square", runs: 8, pct: "15%" },
                        ].map((item, idx) => (
                           <div className="space-y-2" key={idx}>
                               <div className="flex justify-between items-end text-[10px] font-bold uppercase">
                                   <span className="text-on-surface-variant">{item.region}</span>
                                   <span className="text-primary">{item.runs} Runs</span>
                               </div>
                               <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                                   <div className="h-full bg-primary rounded-full shadow-[0_0_12px_rgba(156,255,147,0.3)] transition-all duration-1000" style={{ width: item.pct }}></div>
                               </div>
                           </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    );
};
