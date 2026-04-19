import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
} from "recharts";
import { GlassCard } from "../ui/GlassCard";
import { TitleSm, Label } from "../ui/Typography";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-surface-container-high border border-outline-variant/30 p-3 rounded-md shadow-lg">
        <p className="text-on-surface text-sm font-semibold mb-1">Over {label}</p>
        <p className="text-primary text-xs">IND: {data.ind}%</p>
        <p className="text-secondary text-xs">AUS: {data.aus}%</p>
        {data.event && (
          <p className="text-on-surface-variant font-bold text-[10px] uppercase mt-2">{data.event}</p>
        )}
      </div>
    );
  }
  return null;
};

export const WinProbabilityChart = ({ data }) => {
  return (
    <GlassCard className="p-6 h-[250px] flex flex-col items-start w-full">
      <div className="w-full flex justify-between items-center mb-6">
        <TitleSm>Win Probability</TitleSm>
        <Label>Live Model</Label>
      </div>
      <div className="w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis dataKey="over" stroke="#767575" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#767575" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="ind" stroke="#9cff93" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#00fc40' }} />
            <Line type="monotone" dataKey="aus" stroke="#ff734a" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#ff734a' }} />
            {data.map((entry, index) => {
              if (entry.event) {
                return (
                  <ReferenceDot key={index} x={entry.over} y={entry.ind} r={4} fill="#ffffff" stroke="none" />
                );
              }
              return null;
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
};
