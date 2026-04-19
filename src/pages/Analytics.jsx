import { TitleLg, Body } from "../components/ui/Typography";
import { VenueAnalysis } from "../components/analytics/VenueAnalysis";
import { SmartInsights } from "../components/analytics/SmartInsights";

export const Analytics = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <TitleLg className="text-4xl">Venue Analysis</TitleLg>
                    <Body variant="secondary">Lords Cricket Ground, London — Match ID: 8921-X</Body>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-surface-container-highest text-primary text-xs font-bold rounded-full flex items-center gap-2 border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_#9cff93]"></span> 
                        LIVE
                    </span>
                    <span className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-xs font-bold rounded-full border border-outline-variant/10">
                        Innings 1: 142/3 (15.4 ov)
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    <VenueAnalysis />
                    
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10 flex items-center justify-between hover:border-primary/30 transition-colors cursor-pointer">
                            <div>
                                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Score Prediction</p>
                                <p className="text-2xl font-headline font-bold text-primary">185 - 195</p>
                            </div>
                            <span className="text-3xl opacity-20">📈</span>
                        </div>
                        <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10 flex items-center justify-between hover:border-primary/30 transition-colors cursor-pointer">
                            <div>
                                <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Next Milestone</p>
                                <p className="text-2xl font-headline font-bold">150 Runs</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-primary uppercase font-bold">ETA</p>
                                <p className="text-sm font-bold">2.4 Overs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <SmartInsights />
                </div>
            </div>
        </div>
    );
};
