import { TitleLg, TitleSm, Body } from "../../components/ui/Typography";

export const VenueAnalysis = () => {
  return (
    <div className="bg-surface-container-low rounded-xl overflow-hidden relative group border border-outline-variant/10">
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent z-10" />
        <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" 
            alt="Venue" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-6 z-20">
          <TitleLg className="text-2xl">Lords Overview</TitleLg>
          <Body variant="secondary">Historical pitch performance & conditions</Body>
        </div>
      </div>
      
      <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 bg-surface-container-low">
        <div className="space-y-1">
          <p className="text-[10px] text-primary uppercase font-bold tracking-widest">Avg 1st Innings</p>
          <p className="text-4xl font-headline font-bold">178<span className="text-lg text-on-surface-variant">/6</span></p>
          <p className="text-xs text-on-surface-variant">Last 10 T20 Matches</p>
        </div>
        
        <div className="space-y-1 border-l border-outline-variant/10 pl-6">
          <p className="text-[10px] text-primary uppercase font-bold tracking-widest">Toss Impact</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[62%] shadow-[0_0_8px_#9cff93]"></div>
            </div>
            <span className="text-sm font-bold">62%</span>
          </div>
          <p className="text-xs text-on-surface-variant">Bat first win percentage</p>
        </div>
        
        <div className="space-y-3 pl-0 sm:pl-6 border-l-0 sm:border-l border-outline-variant/10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
               <span className="text-secondary text-sm font-bold">22°</span>
             </div>
             <div>
               <p className="text-xs font-bold text-on-surface">Clear Sky</p>
               <p className="text-[10px] text-on-surface-variant">Wind: 14km/h SW</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
               <span className="text-primary text-sm font-bold">G</span>
             </div>
             <div>
               <p className="text-xs font-bold text-on-surface">Hard & Green</p>
               <p className="text-[10px] text-on-surface-variant">Seam movement: High</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
