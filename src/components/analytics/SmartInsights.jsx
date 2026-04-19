import { TitleLg, Body } from "../../components/ui/Typography";

export const SmartInsights = () => {
    return (
        <div className="bg-surface-container-low/40 backdrop-blur-md rounded-xl p-6 border border-primary/20 shadow-[0_0_20px_rgba(156,255,147,0.05)] h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-primary text-xl font-bold">⚡</span>
                <TitleLg className="uppercase tracking-widest text-xs">AI Smart Insights</TitleLg>
            </div>
            
            <div className="flex-1 space-y-6">
                <div className="relative pl-4 border-l-2 border-primary/40 focus-within:border-primary transition-colors">
                    <p className="text-sm text-on-surface leading-relaxed italic">
                        "Team A struggles against leg-spin in middle overs, losing wickets every 14.2 balls when pace drops."
                    </p>
                </div>
                <div className="relative pl-4 border-l-2 border-secondary/40">
                    <p className="text-sm text-on-surface leading-relaxed italic">
                        "Boundary rate drops by 25% in the death overs when bowling full and wide on this surface."
                    </p>
                </div>
                <div className="relative pl-4 border-l-2 border-primary/40">
                    <p className="text-sm text-on-surface leading-relaxed italic">
                        "Expected par score adjusted to 184 based on current cloud cover and humidity shift."
                    </p>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/10">
                <div className="flex justify-between items-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                    <span>Win Probability</span>
                    <span className="text-primary">Team A 68%</span>
                </div>
                <div className="mt-2 h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[68%] shadow-[0_0_8px_#9cff93]"></div>
                </div>
            </div>
        </div>
    );
};
