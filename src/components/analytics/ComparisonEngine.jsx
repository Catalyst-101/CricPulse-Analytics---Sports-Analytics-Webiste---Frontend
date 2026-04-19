import { TitleSm } from "../../components/ui/Typography";

export const ComparisonEngine = () => {
    return (
        <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 text-on-surface">
            <div className="flex items-center justify-between mb-8">
                <TitleSm className="tracking-widest uppercase">Head-to-Head Engine</TitleSm>
                <div className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded">VIRTUAL SIMULATION</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Player 1: VK */}
                <div className="flex items-center gap-4 group">
                    <img src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=100&q=80" alt="VK" className="w-16 h-16 rounded-lg object-cover border border-primary/40 grayscale group-hover:grayscale-0 transition-all"/>
                    <div>
                        <p className="font-headline font-bold text-lg text-primary">V. KOHLI</p>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">TOP ORDER • IND</p>
                    </div>
                </div>

                {/* Player 2: SS/BA */}
                <div className="flex items-center gap-4 flex-row-reverse text-right group">
                    <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100&q=80" alt="BA" className="w-16 h-16 rounded-lg object-cover border border-secondary/40 grayscale group-hover:grayscale-0 transition-all"/>
                    <div>
                        <p className="font-headline font-bold text-lg text-secondary">S. SMITH</p>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">MIDDLE ORDER • AUS</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-[1fr,100px,1fr] gap-4 items-center">
                    <div className="text-right flex items-center justify-end gap-3">
                         <span className="text-sm font-bold text-on-surface">52.7</span>
                         <div className="w-24 h-1.5 bg-surface-container rounded-l-full flex justify-end">
                             <div className="h-full bg-primary w-[80%] rounded-l-full shadow-[0_0_8px_#9cff93]"></div>
                         </div>
                    </div>
                    <div className="text-center text-[10px] text-on-surface-variant font-bold uppercase">AVERAGE</div>
                    <div className="flex items-center gap-3">
                         <div className="w-24 h-1.5 bg-surface-container rounded-r-full">
                             <div className="h-full bg-secondary w-[65%] rounded-r-full shadow-[0_0_8px_#ff734a]"></div>
                         </div>
                         <span className="text-sm font-bold text-on-surface">48.2</span>
                    </div>
                </div>

                <div className="grid grid-cols-[1fr,100px,1fr] gap-4 items-center">
                    <div className="text-right flex items-center justify-end gap-3">
                         <span className="text-sm font-bold text-on-surface">138.4</span>
                         <div className="w-24 h-1.5 bg-surface-container rounded-l-full flex justify-end">
                             <div className="h-full bg-primary w-[90%] rounded-l-full shadow-[0_0_8px_#9cff93]"></div>
                         </div>
                    </div>
                    <div className="text-center text-[10px] text-on-surface-variant font-bold uppercase">STRIKE RATE</div>
                    <div className="flex items-center gap-3">
                         <div className="w-24 h-1.5 bg-surface-container rounded-r-full">
                             <div className="h-full bg-secondary w-[85%] rounded-r-full shadow-[0_0_8px_#ff734a]"></div>
                         </div>
                         <span className="text-sm font-bold text-on-surface">132.1</span>
                    </div>
                </div>

                <div className="grid grid-cols-[1fr,100px,1fr] gap-4 items-center">
                    <div className="text-right flex items-center justify-end gap-3">
                         <span className="text-sm font-bold text-on-surface">92%</span>
                         <div className="w-24 h-1.5 bg-surface-container rounded-l-full flex justify-end">
                             <div className="h-full bg-primary w-[95%] rounded-l-full shadow-[0_0_8px_#9cff93]"></div>
                         </div>
                    </div>
                    <div className="text-center text-[10px] text-on-surface-variant font-bold uppercase">CONSISTENCY</div>
                    <div className="flex items-center gap-3">
                         <div className="w-24 h-1.5 bg-surface-container rounded-r-full">
                             <div className="h-full bg-secondary w-[75%] rounded-r-full shadow-[0_0_8px_#ff734a]"></div>
                         </div>
                         <span className="text-sm font-bold text-on-surface">84%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
