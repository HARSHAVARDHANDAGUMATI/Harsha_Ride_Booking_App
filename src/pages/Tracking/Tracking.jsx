import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useRide from "../../hooks/useRide";
import { ChatIcon, PhoneIcon, ShieldIcon, TrackIcon, BikeVehicleIcon, AutoVehicleIcon, CarVehicleIcon } from "../../components/common/Icons";

const Tracking = () => {
  const { driver, notifications, chatMessages, sendChatMessage, triggerSos, sosTriggered, pickup, drop, stops } = useRide();
  const [progress, setProgress] = useState(0.18);
  const [draftMessage, setDraftMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((current) => (current >= 0.92 ? 0.92 : Number((current + 0.04).toFixed(2))));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const MotionSection = motion.section;
  const MotionDiv = motion.div;

  const routePoints = [pickup, ...stops, drop];
  
  const DriverIcon = driver.vehicle === "Bike" ? BikeVehicleIcon : driver.vehicle === "Auto" ? AutoVehicleIcon : CarVehicleIcon;

  const backgroundVehicles = [
    { id: 1, Icon: AutoVehicleIcon, init: { left: "-15%", top: "50%", y: "-50%", rotate: 0 }, anim: { left: "115%", top: "50%", y: "-50%", rotate: 0 }, dur: 13, delay: 0, color: "text-slate-950", bg: "bg-[#b7f43a]", shadow: "shadow-[0_0_0_10px_rgba(183,244,58,0.15)]" },
    { id: 2, Icon: CarVehicleIcon, init: { left: "20%", top: "115%", x: "-50%", rotate: -90 }, anim: { left: "20%", top: "-15%", x: "-50%", rotate: -90 }, dur: 15, delay: 2, color: "text-slate-950", bg: "bg-[#ffd55a]", shadow: "shadow-[0_0_0_10px_rgba(255,213,90,0.15)]" },
    { id: 3, Icon: BikeVehicleIcon, init: { left: "115%", top: "20%", y: "-50%", rotateY: 180 }, anim: { left: "-15%", top: "20%", y: "-50%", rotateY: 180 }, dur: 11, delay: 1, color: "text-slate-950", bg: "bg-[#ffae00]", shadow: "shadow-[0_0_0_10px_rgba(255,174,0,0.15)]" },
    { id: 4, Icon: CarVehicleIcon, init: { left: "82%", top: "-15%", x: "-50%", rotate: 90 }, anim: { left: "82%", top: "115%", x: "-50%", rotate: 90 }, dur: 18, delay: 4, color: "text-slate-950", bg: "bg-[#ffd55a]", shadow: "shadow-[0_0_0_10px_rgba(255,213,90,0.15)]" },
  ];

  return (
    <div className="space-y-5 pb-32">
      <MotionSection className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <MotionDiv initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="card-shell p-5 md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Live ride tracking</p>
              <h2 className="mt-2 text-3xl font-semibold">Captain {driver.name} is on the move</h2>
            </div>
            <span className="pill-chip">ETA {Math.max(1, Math.round((1 - progress) * driver.etaMinutes))} min</span>
          </div>

          <div className="relative mt-5 h-[260px] overflow-hidden rounded-[32px] border border-[color:var(--border)] bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] md:h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,220,95,0.14),transparent_22%),radial-gradient(circle_at_18%_78%,rgba(183,244,58,0.13),transparent_24%)]" />
            <div className="absolute left-8 right-8 top-16 h-px bg-white/10 md:left-10 md:right-10 md:top-20" />
            <div className="absolute left-8 right-8 top-1/2 h-px bg-white/10" />
            <div className="absolute left-8 right-8 bottom-16 h-px bg-white/10 md:left-10 md:right-10 md:bottom-24" />
            <div className="absolute bottom-6 left-[20%] top-6 w-px bg-white/10 md:bottom-8 md:top-8" />
            <div className="absolute bottom-6 left-[48%] top-6 w-px bg-white/10 md:bottom-8 md:top-8" />
            <div className="absolute bottom-6 right-[18%] top-6 w-px bg-white/10 md:bottom-8 md:top-8" />

            {backgroundVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                className={`absolute flex h-7 w-7 items-center justify-center rounded-full opacity-70 backdrop-blur-sm transition-opacity duration-300 ${vehicle.bg} ${vehicle.shadow} ${vehicle.color}`}
                initial={vehicle.init}
                animate={vehicle.anim}
                transition={{ duration: vehicle.dur, delay: vehicle.delay, repeat: Infinity, ease: "linear" }}
              >
                <vehicle.Icon className="h-3.5 w-3.5" />
              </motion.div>
            ))}

            <div className="absolute left-[13%] top-[74%] flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent)] text-slate-950 shadow-[0_0_0_16px_rgba(255,219,82,0.14)] font-bold text-lg">
              P
            </div>

            <motion.div
              className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--success)] text-slate-950 shadow-[0_0_0_16px_rgba(183,244,58,0.2)] z-10"
              animate={{
                left: [`${18 + progress * 8}%`, `${18 + progress * 18}%`, `${18 + progress * 26}%`],
                top: [`${70 - progress * 6}%`, `${62 - progress * 12}%`, `${56 - progress * 18}%`],
                rotate: [-42, -38, -35]
              }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            >
              <DriverIcon className="h-6 w-6 drop-shadow-md" />
            </motion.div>

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M18 74 C28 58, 40 53, 50 45 S72 31, 82 20"
                fill="none"
                stroke="rgba(255,219,82,0.78)"
                strokeWidth="1.2"
                strokeDasharray="5 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </svg>

            <div className="absolute bottom-4 right-4 rounded-[24px] bg-black/35 px-4 py-3 text-sm text-white backdrop-blur">
              Driver assignment and movement simulation active
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-soft)]">Current route</p>
              <div className="mt-3 space-y-2">
                {routePoints.map((point, index) => (
                  <div key={`${point}-${index}`} className="text-sm text-[color:var(--text-dim)]">
                    {index + 1}. {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-soft)]">Ride status</p>
              <p className="mt-3 text-lg font-semibold">Driver assigned</p>
              <p className="mt-2 text-sm text-[color:var(--text-dim)]">Vehicle {driver.vehicle} · {driver.plate}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/10">
                <motion.div animate={{ width: `${progress * 100}%` }} className="h-full rounded-full bg-[linear-gradient(90deg,var(--success),var(--accent))]" />
              </div>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="space-y-5">
          <div className="card-shell p-5">
            <div className="flex items-center gap-4">
              <div className="icon-badge h-16 w-16 rounded-[24px] bg-[linear-gradient(135deg,var(--success),var(--accent))] text-slate-950">
                {driver.name[0]}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{driver.name}</h3>
                <p className="text-sm text-[color:var(--text-dim)]">{driver.vehicle} · {driver.plate}</p>
                <p className="mt-1 text-xs text-[color:var(--text-soft)]">{driver.rating} rating · {driver.trips}+ trips</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button className="secondary-button justify-center">
                <PhoneIcon className="h-4 w-4" />
                Call driver
              </button>
              <button className="secondary-button justify-center">
                <ChatIcon className="h-4 w-4" />
                Chat driver
              </button>
            </div>

            <div className="mt-4 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <p className="text-sm font-semibold">Quick chat</p>
              <div className="mt-3 max-h-40 space-y-2 overflow-auto">
                {chatMessages.map((message, index) => (
                  <div key={`${message.sender}-${index}`} className={`rounded-[18px] px-3 py-2 text-sm ${message.sender === "you" ? "ml-8 bg-[color:var(--accent)] text-slate-950" : "mr-8 bg-white/10 text-[color:var(--text-main)]"}`}>
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <input value={draftMessage} onChange={(event) => setDraftMessage(event.target.value)} className="w-full rounded-[20px] bg-[color:var(--surface-1)] px-4 py-3 text-sm outline-none" placeholder="Message your driver" />
                <button
                  onClick={() => {
                    sendChatMessage(draftMessage);
                    setDraftMessage("");
                  }}
                  className="primary-button px-4"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          <div className="card-shell p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <Link to="/notifications" className="text-sm text-[color:var(--text-dim)]">
                See all
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {notifications.slice(0, 3).map((item) => (
                <div key={`${item.title}-${item.time}`} className="rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <span className="text-xs text-[color:var(--text-soft)]">{item.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--text-dim)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-shell p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Safety</p>
                <h3 className="mt-2 text-2xl font-semibold">SOS emergency button</h3>
              </div>
              <div className="icon-badge h-11 w-11 bg-[rgba(255,106,112,0.16)] text-[color:var(--danger)]">
                <ShieldIcon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-sm text-[color:var(--text-dim)]">Share live location, trip details, and captain info with trusted contacts instantly.</p>
            <button onClick={triggerSos} className="mt-5 inline-flex w-full items-center justify-center rounded-[24px] border border-[rgba(255,106,112,0.35)] px-5 py-4 text-sm font-semibold text-[color:var(--danger)] transition hover:-translate-y-0.5">
              {sosTriggered ? "SOS sent successfully" : "Hold to alert contacts"}
            </button>
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
};

export default Tracking;
