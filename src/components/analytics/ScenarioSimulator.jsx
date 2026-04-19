import { useState } from "react";
import { TitleLg, TitleSm } from "../../components/ui/Typography";

export const ScenarioSimulator = () => {
    const [runsNextOver, setRunsNextOver] = useState(8);
    const [wicketProb, setWicketProb] = useState(14);

    // Calculate dynamic win prob based on inputs simulating an algorithm
    const baseWinProb = 65;
    let dynamicWinProb = baseWinProb + (runsNextOver - 8) * 1.5 - (wicketProb - 5) * 0.5;
    if (dynamicWinProb > 99) dynamicWinProb = 99;
    if (dynamicWinProb < 1) dynamicWinProb = 1;

    return (
        <div className="bg-surface-container-low rounded-xl p-8 border border-primary/20 shadow-[0_0_20px_rgba(156,255,147,0.05)] h-full flex flex-col">
            <div className="mb-8">
                <TitleSm className="tracking-widest uppercase mb-2 text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">settings_suggest</span> Simulator Controls
                </TitleSm>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-10">
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-on-surface-variant uppercase tracking-widest text-[10px]">Runs Next Over</span>
                        <span className="text-primary font-headline text-lg">{runsNextOver}</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="36" 
                        value={runsNextOver} 
                        onChange={(e) => setRunsNextOver(Number(e.target.value))}
                        className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm font-bold">
                        <span className="text-on-surface-variant uppercase tracking-widest text-[10px]">Wicket Probability</span>
                        <span className="text-secondary font-headline text-lg">{wicketProb}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={wicketProb} 
                        onChange={(e) => setWicketProb(Number(e.target.value))}
                        className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                    />
                    <div className="flex justify-between text-[8px] text-on-surface-variant uppercase tracking-widest">
                        <span>Stable</span>
                        <span>Critical</span>
                    </div>
                </div>
            </div>

            <div className="mt-10 pt-6 border-t border-outline-variant/10 grid grid-cols-2 gap-4">
                 <div className="bg-surface-container p-4 rounded-lg text-center">
                     <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">PROJ SCORE</p>
                     <p className="text-2xl font-headline font-bold text-on-surface">
                         {Math.floor(184 + runsNextOver * 3.5)}
                     </p>
                 </div>
                 <div className="bg-surface-container p-4 rounded-lg text-center border-b-2 border-primary">
                     <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">DYNAMIC WIN PROB</p>
                     <p className="text-2xl font-headline font-bold text-primary">
                         {dynamicWinProb.toFixed(1)}%
                     </p>
                 </div>
            </div>
        </div>
    );
};
