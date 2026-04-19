import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { TitleLg, TitleSm, Body, Label } from "../ui/Typography";

export const LiveScoreCard = ({ data }) => {
  return (
    <GlassCard glow className="p-6 flex flex-col gap-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="flex justify-between items-start z-10">
        <div>
          <Label active className="mb-2 block flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live Match
          </Label>
          <Body variant="secondary">{data.status}</Body>
        </div>
        <div className="text-right">
          <Label>Req RR</Label>
          <TitleSm>{data.requiredRR > 0 ? data.requiredRR.toFixed(2) : "N/A"}</TitleSm>
        </div>
      </div>

      <div className="flex items-center gap-6 z-10 my-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl">{data.teamA.logo}</span>
          <TitleSm>{data.teamA.name}</TitleSm>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={data.teamA.score}
            className="flex items-end gap-2"
          >
            <TitleLg className="tracking-tighter">
              {data.teamA.score}
              <span className="text-3xl text-on-surface-variant font-light">/{data.teamA.wickets}</span>
            </TitleLg>
          </motion.div>
          <Body variant="secondary" className="mt-1">
            CRR: <span className="text-primary font-medium">{data.currentRR.toFixed(2)}</span> ({data.teamA.overs})
          </Body>
        </div>
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span className="text-4xl">{data.teamB.logo}</span>
          <TitleSm>{data.teamB.name}</TitleSm>
        </div>
      </div>

      <div className="border-t border-outline-variant/20 pt-4 z-10">
        <div className="flex justify-between items-center mb-3">
          <Label>Last 6 Balls</Label>
          <Body variant="secondary" className="text-xs">
            Proj. Score: {data.projectedScore}
          </Body>
        </div>
        <div className="flex gap-2 w-full">
          {data.last6Balls.map((run, i) => (
            <motion.div
              key={i}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`flex-1 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                run === "W"
                  ? "bg-error text-on-error"
                  : run === "6" || run === "4"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-highest text-on-surface"
              }`}
            >
              {run}
            </motion.div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};
