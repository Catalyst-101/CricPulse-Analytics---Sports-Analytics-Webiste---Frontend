import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GlassCard } from "../ui/GlassCard";
import { TitleSm, Label } from "../ui/Typography";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-container-high border border-outline-variant/30 p-3 rounded-md shadow-lg">
        <p className="text-on-surface text-sm font-semibold mb-1">Over {label}</p>
        <p className="text-primary text-xs">
          Runs: {payload[0].payload.runs}
        </p>
        <p className="text-on-surface-variant text-xs">
          Cumulative: {payload[0].payload.cumulativeRuns}
        </p>
      </div>
    );
  }
  return null;
};

export const RunRateChart = ({ data }) => {
  return (
    <GlassCard className="p-6 h-[350px] flex flex-col items-start w-full">
      <div className="w-full flex justify-between items-center mb-6">
        <TitleSm>Run Rate Trajectory</TitleSm>
        <Label active>Live Trajectory</Label>
      </div>
      <div className="w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRuns" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9cff93" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#9cff93" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="over"
              stroke="#767575"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              stroke="#767575"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#262626"
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="cumulativeRuns"
              stroke="#9cff93"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRuns)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
};
