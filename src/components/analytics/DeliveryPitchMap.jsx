import { TitleSm } from "../../components/ui/Typography";

export const DeliveryPitchMap = () => {
    return (
        <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 glass-panel h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <TitleSm className="tracking-widest uppercase">Delivery Pitch Map</TitleSm>
                <span className="material-symbols-outlined text-primary">sports_cricket</span>
            </div>

            <div className="relative w-full aspect-[2/3] max-h-[300px] mx-auto bg-surface-container-highest rounded-lg flex items-end justify-center p-4 border border-outline-variant/20 overflow-hidden flex-1">
                {/* Stumps visualization */}
                <div className="absolute bottom-12 w-16 h-20 border-x-2 border-t-2 border-white/20 flex justify-center items-end z-10">
                    <div className="flex space-x-1 mb-2">
                        <div className="w-1 h-10 bg-on-surface-variant/40 rounded-full"></div>
                        <div className="w-1 h-10 bg-on-surface-variant/40 rounded-full"></div>
                        <div className="w-1 h-10 bg-on-surface-variant/40 rounded-full"></div>
                    </div>
                </div>

                {/* Landing Zones (Yorker, Good, Short) */}
                <div className="absolute bottom-0 w-full px-4 h-full flex flex-col justify-end space-y-4 pb-4">
                    {/* Short */}
                    <div className="w-full h-1/4 border border-secondary/30 bg-secondary/5 rounded-md flex items-center justify-center relative hover:bg-secondary/10 transition-colors">
                        <span className="text-[8px] font-bold text-secondary uppercase opacity-40">Short</span>
                        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_#ff734a]"></div>
                        <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-secondary rounded-full opacity-60"></div>
                    </div>
                    {/* Good Length */}
                    <div className="w-full h-1/4 border border-primary/30 bg-primary/5 rounded-md flex items-center justify-center relative hover:bg-primary/10 transition-colors">
                        <span className="text-[8px] font-bold text-primary uppercase opacity-40">Good Length</span>
                        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#9cff93]"></div>
                        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#9cff93]"></div>
                        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#9cff93]"></div>
                    </div>
                    {/* Yorker */}
                    <div className="w-full h-1/4 border border-white/10 bg-white/5 rounded-md flex items-center justify-center relative hover:bg-white/10 transition-colors">
                        <span className="text-[8px] font-bold text-on-surface-variant uppercase opacity-40">Yorker</span>
                        <div className="absolute bottom-4 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#ffffff]"></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6">
                <div className="text-center p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                    <div className="text-[8px] text-on-surface-variant uppercase font-bold">Short</div>
                    <div className="text-md font-headline font-bold text-secondary">22%</div>
                </div>
                <div className="text-center p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                    <div className="text-[8px] text-on-surface-variant uppercase font-bold">Good</div>
                    <div className="text-md font-headline font-bold text-primary">58%</div>
                </div>
                <div className="text-center p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                    <div className="text-[8px] text-on-surface-variant uppercase font-bold">Full</div>
                    <div className="text-md font-headline font-bold text-white">20%</div>
                </div>
            </div>
        </div>
    );
};
