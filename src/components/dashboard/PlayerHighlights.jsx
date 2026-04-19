import { GlassCard } from "../ui/GlassCard";
import { TitleSm, Label, Body } from "../ui/Typography";

export const PlayerHighlights = ({ data }) => {
  return (
    <GlassCard className="p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <TitleSm>Top Performers</TitleSm>
        <Label>Impact</Label>
      </div>

      {/* Batsman */}
      <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center overflow-hidden">
          <span className="text-xl">🏏</span>
        </div>
        <div className="flex-1">
          <TitleSm className="text-lg">{data.batsman.name}</TitleSm>
          <Body variant="secondary" className="text-xs mt-1">
            {data.batsman.runs} ({data.batsman.balls}) • SR: {((data.batsman.runs / data.batsman.balls) * 100).toFixed(1)}
          </Body>
        </div>
        <div className="text-right">
          <div className="text-primary font-display font-bold text-xl">{data.batsman.impactScore}</div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-outline-variant/20" />

      {/* Bowler */}
      <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center overflow-hidden">
          <span className="text-xl">🥎</span>
        </div>
        <div className="flex-1">
          <TitleSm className="text-lg">{data.bowler.name}</TitleSm>
          <Body variant="secondary" className="text-xs mt-1">
            {data.bowler.wickets} Wkts • Econ: {data.bowler.economy}
          </Body>
        </div>
        <div className="text-right">
          <div className="text-primary font-display font-bold text-xl">{data.bowler.impactScore}</div>
        </div>
      </div>
    </GlassCard>
  );
};
