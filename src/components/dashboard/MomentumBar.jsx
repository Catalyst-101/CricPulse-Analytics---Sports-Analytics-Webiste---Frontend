import { GlassCard } from "../ui/GlassCard";
import { TitleSm, Label, Body } from "../ui/Typography";

export const MomentumBar = ({ data }) => {
  return (
    <GlassCard className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-1">
        <TitleSm className="text-sm">Match Momentum</TitleSm>
        <Label>Phase Shift</Label>
      </div>
      
      <div className="w-full flex h-8 rounded-full overflow-hidden border border-outline-variant/20 relative">
        {/* We can just show three blocks roughly representing the three phases */}
        {data.map((phase, i) => {
          const width = phase.phase === "Powerplay" ? "30%" : phase.phase === "Middle" ? "50%" : "20%";
          return (
            <div 
              key={i} 
              style={{ width }} 
              className={`h-full flex items-center justify-center border-r border-background/50 relative group ${phase.team === 'IND' ? 'bg-primary/20 hover:bg-primary/40' : 'bg-secondary/20 hover:bg-secondary/40'}`}
            >
                <span className={`text-[10px] font-bold ${phase.team === 'IND' ? 'text-primary' : 'text-secondary'}`}>
                   {phase.team}
                </span>
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full mb-2 bg-surface-container-high px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none shadow-lg">
                   {phase.phase} ({phase.domination}% domination)
                </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};
