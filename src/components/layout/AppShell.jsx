import { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../../data/mockData";
import {
  BellIcon,
  HomeIcon,
  MenuIcon,
  MoonIcon,
  ProfileIcon,
  RideIcon,
  SunIcon,
  TrackIcon,
  WalletIcon,
} from "../common/Icons";

const navIcons = {
  Home: HomeIcon,
  Ride: RideIcon,
  Track: TrackIcon,
  Pay: WalletIcon,
  Profile: ProfileIcon,
};

const pageMeta = {
  "/": { title: "City rides, tuned for speed", eyebrow: "Live booking" },
  "/ride": { title: "Choose the right ride", eyebrow: "Dynamic fares" },
  "/tracking": { title: "Track your captain live", eyebrow: "Live route" },
  "/payment": { title: "Pay, save, and go", eyebrow: "Wallet and offers" },
  "/history": { title: "Your recent trips", eyebrow: "Ride archive" },
  "/profile": { title: "Profile and rider perks", eyebrow: "Account" },
  "/notifications": { title: "Updates that matter", eyebrow: "Alerts" },
  "/sos": { title: "Safety controls", eyebrow: "Emergency" },
  "/rating": { title: "Rate every trip", eyebrow: "Reviews" },
  "/auth": { title: "Login and signup", eyebrow: "Authentication" },
};

const AppShell = ({ children }) => {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("ride-theme") || "dark";
    document.documentElement.dataset.theme = savedTheme;
    return savedTheme;
  });
  const activeMeta = pageMeta[pathname] || pageMeta["/"];

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ride-theme", theme);
  }, [theme]);

  const MotionDiv = motion.div;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[color:var(--page-bg)] text-[color:var(--text-main)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />
        <div className="grid-mask" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-3 pb-8 pt-3 md:px-6 lg:px-8">
        <header className="glass-strip relative z-30 flex items-center justify-between gap-3 rounded-[26px] px-3 py-3 md:rounded-[30px] md:px-6 md:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="icon-badge h-12 w-12 shrink-0 rounded-[16px] bg-[color:var(--accent)] text-slate-950 md:h-12 md:w-12">
              <RideIcon />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[color:var(--text-soft)] md:text-[11px] md:tracking-[0.45em]">{activeMeta.eyebrow}</p>
              <h1 className="text-base font-semibold leading-tight md:text-xl">{activeMeta.title}</h1>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link to="/notifications" className="icon-button h-11 w-11 rounded-[16px] md:rounded-[18px]" aria-label="Notifications">
              <BellIcon />
            </Link>
            <button
              type="button"
              className="icon-button h-11 w-11 rounded-[16px] md:rounded-[18px]"
              aria-label="Toggle theme"
              onClick={(e) => {
                e.preventDefault();
                const newTheme = theme === "dark" ? "light" : "dark";
                document.documentElement.dataset.theme = newTheme;
                localStorage.setItem("ride-theme", newTheme);
                setTheme(newTheme);
              }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <Link to="/auth" className="icon-button h-11 w-11 rounded-[16px] md:rounded-[18px]" aria-label="Authentication">
              <MenuIcon />
            </Link>
          </div>
        </header>

        <div className="mt-5 grid flex-1 gap-5 lg:grid-cols-[280px_minmax(0,1fr)] lg:pb-6">
          <aside className="hidden lg:block">
            <div className="card-shell overflow-hidden p-5">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Ride OS</p>
              <h2 className="mt-3 text-3xl font-semibold">Rapido energy, upgraded with a richer feel.</h2>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-dim)]">
                Fast booking, live captain movement, wallet perks, dark mode, and safety shortcuts in one responsive frontend flow.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Schedule rides in seconds",
                  "Switch bike, auto, and car views",
                  "Bottom-sheet inspired mobile navigation",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 text-sm text-[color:var(--text-dim)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main>{children}</main>
        </div>
      </div>

      <nav className="relative z-20 mx-auto -mt-2 mb-6 w-[min(720px,calc(100%-1.25rem))]">
        <div className="glass-strip mx-auto flex items-center justify-between rounded-[30px] px-2 py-2 shadow-[0_25px_60px_rgba(15,23,42,0.25)]">
          {navLinks.map((item) => {
            const active = pathname === item.path;
            const Icon = navIcons[item.name];

            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative flex flex-1 flex-col items-center gap-1 rounded-[24px] px-2 py-2 text-[11px] font-medium"
              >
                {active && <MotionDiv layoutId="nav-active" className="absolute inset-0 rounded-[24px] bg-[color:var(--surface-3)]" />}
                <span className={`relative ${active ? "text-[color:var(--text-main)]" : "text-[color:var(--text-dim)]"}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className={`relative ${active ? "text-[color:var(--text-main)]" : "text-[color:var(--text-dim)]"}`}>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AppShell;
