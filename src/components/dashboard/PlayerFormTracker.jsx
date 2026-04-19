import { GlassCard } from "../ui/GlassCard";
import { TitleSm, Label, Body } from "../ui/Typography";
import { TrendingUp, TrendingDown } from "lucide-react";

export const PlayerFormTracker = ({ data }) => {
  return (
    <GlassCard className="p-6 flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between mb-2">
        <TitleSm>Recent Form</TitleSm>
        <Label>Last 5</Label>
      </div>
      
      <div className="flex flex-col gap-3 flex-1 justify-center">
        {data.map((item, i) => (
          <div key={i} className="flex items-center justify-between group">
            <Body variant="secondary" className="w-16">{item.match}</Body>
            <div className="flex-1 px-4">
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${Math.min(item.runs, 100)}%` }} 
                />
              </div>
            </div>
            <div className="flex items-center gap-3 w-20 justify-end">
              <TitleSm className="text-sm">{item.runs}</TitleSm>
              {item.trend === "up" ? (
                <TrendingUp size={16} className="text-primary" />
              ) : (
                <TrendingDown size={16} className="text-error" />
              )}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};
