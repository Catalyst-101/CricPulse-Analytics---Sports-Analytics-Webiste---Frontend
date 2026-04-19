import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { GlassCard } from "../ui/GlassCard";
import { TitleSm, Label } from "../ui/Typography";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-surface-container-high border border-outline-variant/30 p-2 rounded shadow-lg text-center min-w-[80px]">
        <p className="text-on-surface text-xs font-bold mb-1">{data.region}</p>
        <p className="text-primary text-xs">{data.runs} runs</p>
        <p className="text-on-surface-variant text-[10px]">{data.percentage}%</p>
      </div>
    );
  }
  return null;
};

export const ShotAnalysis = ({ data }) => {
  return (
    <GlassCard className="p-4 flex flex-col items-center h-full min-h-[220px]">
      <div className="w-full flex justify-between items-center mb-0">
        <TitleSm className="text-sm">Shot Direction</TitleSm>
        <Label>Wagon Wheel</Label>
      </div>
      
      <div className="w-full flex-1 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#484847" />
            <PolarAngleAxis 
              dataKey="region" 
              tick={{ fill: '#adaaaa', fontSize: 10 }} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Radar
              name="Runs"
              dataKey="runs"
              stroke="#00fc40"
              fill="#9cff93"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
        
        {/* Subtle center pitch indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center pointer-events-none">
           <div className="w-1.5 h-3 bg-surface-variant rounded-sm" />
        </div>
      </div>
    </GlassCard>
  );
};
