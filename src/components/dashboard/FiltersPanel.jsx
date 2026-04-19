import { useState } from "react";
import { GlassCard } from "../ui/GlassCard";

const FilterPill = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
        active 
          ? "bg-primary-container text-on-primary shadow-[0_0_15px_rgba(0,252,64,0.3)]" 
          : "bg-surface-variant text-on-surface-variant hover:text-on-surface"
      }`}
    >
      {label}
    </button>
  );
};

export const FiltersPanel = () => {
    const [activeFormat, setActiveFormat] = useState("T20");
    
    return (
        <GlassCard className="p-3 px-4 flex items-center justify-between border-none bg-surface/50">
            <div className="flex items-center gap-2">
                <span className="text-xs text-outline font-semibold uppercase mr-2 tracking-wider">Format</span>
                <FilterPill label="T20" active={activeFormat === "T20"} onClick={() => setActiveFormat("T20")} />
                <FilterPill label="ODI" active={activeFormat === "ODI"} onClick={() => setActiveFormat("ODI")} />
                <FilterPill label="TEST" active={activeFormat === "TEST"} onClick={() => setActiveFormat("TEST")} />
            </div>
            <div className="flex items-center gap-2">
               <span className="text-xs text-outline font-semibold uppercase mr-2 tracking-wider">Context</span>
               <button className="px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/30 text-xs text-on-surface hover:border-outline-variant">
                   By Player
               </button>
               <button className="px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant/30 text-xs text-on-surface hover:border-outline-variant">
                   By Venue
               </button>
            </div>
        </GlassCard>
    );
};
