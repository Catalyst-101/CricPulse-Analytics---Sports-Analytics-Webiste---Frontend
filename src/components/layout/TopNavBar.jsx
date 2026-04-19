import { Activity, Users, Settings, Home, Target, Navigation, Bell, Search, Radio, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useState, useEffect } from "react";

const NavItem = ({ icon: Icon, to, label }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) => cn(
        "flex flex-col items-center gap-1.5 p-3 rounded-xl cursor-pointer transition-all duration-300 min-w-[72px]",
        isActive
          ? "bg-primary/10 text-primary shadow-[inset_0_-4px_0_0_#9cff93]"
          : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
      )}
    >
      {({ isActive }) => (
        <>
          <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
          <span className="text-[10px] font-semibold tracking-wide uppercase whitespace-nowrap">
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
};

export const TopNavBar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="w-full bg-surface border-b border-outline-variant/10 flex flex-row items-center px-4 md:px-8 py-2 z-50 overflow-x-auto overflow-y-hidden sticky top-0 md:static">
      <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-primary to-primary-container rounded-full flex items-center justify-center font-headline font-bold text-black text-xl mr-8 shadow-[0_0_20px_rgba(156,255,147,0.3)]">
        OA
      </div>

      <nav className="flex flex-row gap-2 md:gap-4 flex-1">
        <NavItem icon={Home} label="Home" to="/" />
        <NavItem icon={Radio} label="Live" to="/live" />
        <NavItem icon={Activity} label="Analytics" to="/analytics" />
        <NavItem icon={Users} label="Players" to="/players" />
        <NavItem icon={Target} label="Simulator" to="/simulator" />
        <NavItem icon={Navigation} label="Leagues" to="/leagues" />
      </nav>

      {/* Moved Search, Notifications, Profile, and existing Config */}
      <div className="ml-auto flex items-center gap-4 sm:gap-6 flex-shrink-0">

        {/* Search */}
        <div className="hidden xl:flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20 focus-within:border-primary/50 transition-colors">
          <Search size={18} className="text-on-surface-variant" />
          <input
            type="text"
            placeholder="Search players..."
            className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-on-surface-variant/50 relative text-on-surface"
          />
        </div>

        {/* Theme Toggle Button */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="relative w-10 h-10 rounded-full bg-surface-container border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-high transition-colors flex-shrink-0 overflow-hidden"
          title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        >
           <div className={cn("transition-all duration-500 absolute flex items-center justify-center w-full h-full", isDark ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0')}>
              <Moon size={18} className="text-primary" />
           </div>
           <div className={cn("transition-all duration-500 absolute flex items-center justify-center w-full h-full", isDark ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100')}>
              <Sun size={18} className="text-orange-500" />
           </div>
        </button>

        {/* Bell */}
        <button className="relative w-10 h-10 rounded-full bg-surface-container border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-high transition-colors flex-shrink-0">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#9cff93]" />
        </button>

        <div className="pl-4 sm:pl-6 border-l border-outline-variant/10 flex items-center gap-2 sm:gap-4">
          {/* Config */}
          <NavItem icon={Settings} label="Config" to="/config" />

          {/* Profile */}
          <div className="w-10 h-10 rounded-full border-2 border-primary/40 overflow-hidden bg-surface-container-high flex-shrink-0 cursor-pointer hover:border-primary transition-colors">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs font-bold text-primary">JD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
