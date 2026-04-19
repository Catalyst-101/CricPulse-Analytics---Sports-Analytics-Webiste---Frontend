import { useState, useEffect } from "react";
import { LiveScoreCard } from "../components/dashboard/LiveScoreCard";
import { RunRateChart } from "../components/dashboard/RunRateChart";
import { PlayerHighlights } from "../components/dashboard/PlayerHighlights";
import { WinProbabilityChart } from "../components/dashboard/WinProbabilityChart";
import { PlayerFormTracker } from "../components/dashboard/PlayerFormTracker";
import { MomentumBar } from "../components/dashboard/MomentumBar";
import { FiltersPanel } from "../components/dashboard/FiltersPanel";
import { ShotAnalysis } from "../components/dashboard/ShotAnalysis";
import { TitleLg, Body } from "../components/ui/Typography";
import { 
  liveMatchData, 
  runRateHistory, 
  topPerformers, 
  winProbabilityHistory, 
  playerForm, 
  momentumData,
  shotDistribution
} from "../data/mockData";

export const MatchDetails = () => {
  const [liveData, setLiveData] = useState(liveMatchData);
  const [chartData, setChartData] = useState(runRateHistory);

  // Simulate live match ticking
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => {
        const newRun = Math.floor(Math.random() * 7);
        const isWicket = Math.random() > 0.95; 
        const last6Balls = [...prev.last6Balls.slice(1)];
        let newScore = prev.teamA.score;
        let newWickets = prev.teamA.wickets;

        if (isWicket) {
          last6Balls.push("W");
          newWickets++;
        } else {
          last6Balls.push(newRun.toString());
          newScore += newRun;
        }

        return {
          ...prev,
          teamA: {
            ...prev.teamA,
            score: newScore,
            wickets: newWickets,
            overs: prev.teamA.overs, 
          },
          last6Balls,
        };
      });
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mb-6">
        <div className="flex justify-between items-end mb-4">
           <div>
              <TitleLg className="mb-2">Match Pulse</TitleLg>
              <Body variant="secondary">Real-time telemetry and predictive analytics</Body>
           </div>
           <FiltersPanel />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <LiveScoreCard data={liveData} />
          <PlayerFormTracker data={playerForm} />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <RunRateChart data={chartData} />
          <WinProbabilityChart data={winProbabilityHistory} />
        </div>
        
        <div className="lg:col-span-1 flex flex-col gap-6">
          <PlayerHighlights data={topPerformers} />
          <MomentumBar data={momentumData} />
          
          <div className="flex-1 min-h-[220px]">
            <ShotAnalysis data={shotDistribution} />
          </div>
        </div>
      </div>
    </>
  );
};
