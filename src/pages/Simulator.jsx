import { TitleLg, TitleSm, Body } from "../components/ui/Typography";
import { ComparisonEngine } from "../components/analytics/ComparisonEngine";
import { ScenarioSimulator } from "../components/analytics/ScenarioSimulator";
import { SmartInsights } from "../components/analytics/SmartInsights";

export const Simulator = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <TitleLg className="text-4xl italic text-on-surface mb-2">SCENARIO SIMULATOR</TitleLg>
                <Body variant="secondary" className="max-w-xl">Run high-fidelity predictive models using real-time match state and historical player performance data.</Body>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Comparison */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <ComparisonEngine />
                    <ScenarioSimulator />
                </div>

                {/* Right Column: Insights & Leaderboard */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <SmartInsights />
                    
                    <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
                         <TitleSm className="tracking-widest uppercase mb-4 text-xs">Prediction Leaderboard</TitleSm>
                         <div className="space-y-4">
                             <div className="flex items-center justify-between p-3 bg-surface-container-high rounded-lg hover:bg-surface-container-highest transition-colors">
                                 <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">1</div>
                                     <div>
                                         <p className="text-sm font-bold text-on-surface">Alex_Quant</p>
                                         <p className="text-[10px] text-on-surface-variant">5.2k Simulations</p>
                                     </div>
                                 </div>
                                 <span className="text-primary font-headline font-bold">98.2</span>
                             </div>
                             <div className="flex items-center justify-between p-3 bg-surface-container-high rounded-lg hover:bg-surface-container-highest transition-colors">
                                 <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-xs">2</div>
                                     <div>
                                         <p className="text-sm font-bold text-on-surface">DataCric_01</p>
                                         <p className="text-[10px] text-on-surface-variant">4.1k Simulations</p>
                                     </div>
                                 </div>
                                 <span className="text-on-surface-variant font-headline font-bold">94.7</span>
                             </div>
                         </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
