import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useRide from "../../hooks/useRide";
import { quickLocations, rideTypes } from "../../data/mockData";
import { ClockIcon, PinIcon, PlusIcon, SparkIcon, BikeVehicleIcon, AutoVehicleIcon, CarVehicleIcon } from "../../components/common/Icons";

const Home = () => {
  const {
    pickup,
    setPickup,
    drop,
    setDrop,
    scheduleEnabled,
    setScheduleEnabled,
    scheduledAt,
    setScheduledAt,
    stops,
    fareTotal,
    surgeMultiplier,
  } = useRide();

  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const MotionSpan = motion.span;

  const mapVehicles = [
    { id: 1, Icon: AutoVehicleIcon, init: { left: "-15%", top: "50%", y: "-50%", rotate: 0 }, anim: { left: "115%", top: "50%", y: "-50%", rotate: 0 }, dur: 14, delay: 0, color: "text-slate-950", bg: "bg-[#b7f43a]", shadow: "shadow-[0_0_0_10px_rgba(183,244,58,0.15)]" },
    { id: 2, Icon: CarVehicleIcon, init: { left: "115%", top: "25%", y: "-50%", rotateY: 180 }, anim: { left: "-15%", top: "25%", y: "-50%", rotateY: 180 }, dur: 19, delay: 2, color: "text-slate-950", bg: "bg-[#ffd55a]", shadow: "shadow-[0_0_0_10px_rgba(255,213,90,0.15)]" },
    { id: 3, Icon: BikeVehicleIcon, init: { left: "25%", top: "115%", x: "-50%", rotate: -90 }, anim: { left: "25%", top: "-15%", x: "-50%", rotate: -90 }, dur: 11, delay: 1, color: "text-slate-950", bg: "bg-[#ffae00]", shadow: "shadow-[0_0_0_10px_rgba(255,174,0,0.15)]" },
    { id: 4, Icon: CarVehicleIcon, init: { left: "75%", top: "-15%", x: "-50%", rotate: 90 }, anim: { left: "75%", top: "115%", x: "-50%", rotate: 90 }, dur: 17, delay: 4, color: "text-slate-950", bg: "bg-[#ffd55a]", shadow: "shadow-[0_0_0_10px_rgba(255,213,90,0.15)]" },
    { id: 5, Icon: BikeVehicleIcon, init: { left: "115%", top: "75%", y: "-50%", rotateY: 180 }, anim: { left: "-15%", top: "75%", y: "-50%", rotateY: 180 }, dur: 13, delay: 6, color: "text-slate-950", bg: "bg-[#ffae00]", shadow: "shadow-[0_0_0_10px_rgba(255,174,0,0.15)]" },
  ];

  return (
    <div className="space-y-5 pb-32">
      <MotionSection className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <MotionDiv initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="card-shell overflow-hidden p-6 md:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Book in seconds</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
                Responsive ride booking with real app flow.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-[color:var(--text-dim)]">
                Build your trip with live fare updates, book-for-later scheduling, multi-stop routing, nearby captain animation, wallet perks, and safety actions.
              </p>
            </div>
            <MotionDiv animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="rounded-[28px] bg-[linear-gradient(135deg,rgba(255,220,95,0.24),rgba(255,220,95,0.05))] p-5">
              <div className="icon-badge h-16 w-16 rounded-[24px] bg-[color:var(--accent)] text-slate-950">
                <SparkIcon className="h-7 w-7" />
              </div>
            </MotionDiv>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              { value: "2 min", label: "Nearest captain" },
              { value: `${stops.length} stops`, label: "Active route points" },
              { value: `x${surgeMultiplier.toFixed(2)}`, label: "Current demand level" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm text-[color:var(--text-dim)]">{item.label}</p>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="card-shell p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Ride planner</p>
              <h3 className="mt-2 text-2xl font-semibold">Pickup and drop</h3>
            </div>
            <span className="pill-chip text-[color:var(--success)]">Estimated Rs.{fareTotal}</span>
          </div>

          <div className="mt-5 space-y-3">
            <label className="block rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text-soft)]">
                <PinIcon className="h-4 w-4" />
                Pickup
              </span>
              <input value={pickup} onChange={(event) => setPickup(event.target.value)} className="w-full bg-transparent text-sm outline-none" />
            </label>
            <label className="block rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--text-soft)]">
                <PinIcon className="h-4 w-4" />
                Drop
              </span>
              <input value={drop} onChange={(event) => setDrop(event.target.value)} className="w-full bg-transparent text-sm outline-none" />
            </label>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ClockIcon className="h-4 w-4 text-[color:var(--accent-strong)]" />
                Schedule ride
              </div>
              <input
                type="datetime-local"
                value={scheduledAt}
                onChange={(event) => setScheduledAt(event.target.value)}
                disabled={!scheduleEnabled}
                className="mt-3 w-full bg-transparent text-sm outline-none"
              />
              <button type="button" onClick={() => setScheduleEnabled((current) => !current)} className="mt-3 rounded-full bg-[color:var(--accent)] px-3 py-1 text-xs font-semibold text-slate-950">
                {scheduleEnabled ? "Book for later" : "Book now"}
              </button>
            </label>
            <div className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <PlusIcon className="h-4 w-4 text-[color:var(--success)]" />
                Multi-stop
              </div>
              <p className="mt-2 text-sm text-[color:var(--text-dim)]">
                {stops.length > 0 ? `${stops.join(", ")}` : "No extra stop added"}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/ride" className="primary-button">
              Find rides
            </Link>
            <Link to="/tracking" className="secondary-button">
              Watch live map
            </Link>
          </div>
        </MotionDiv>
      </MotionSection>

      <MotionSection className="grid gap-5 lg:grid-cols-[1fr_0.92fr]">
        <MotionDiv initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="card-shell p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Dynamic fare estimation</p>
              <h3 className="mt-2 text-2xl font-semibold">Choose the travel style</h3>
            </div>
            <span className="text-sm text-[color:var(--text-dim)]">Responsive on mobile and desktop</span>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {rideTypes.map((ride) => (
              <MotionDiv key={ride.id} whileHover={{ y: -6 }} className="overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface-2)]">
                <div className={`h-28 bg-gradient-to-br ${ride.accent} p-4 text-slate-950`}>
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-semibold">{ride.tag}</span>
                    <span className="text-xs font-semibold">{ride.eta}</span>
                  </div>
                  <p className="mt-7 text-3xl font-semibold">Rs.{Math.round(ride.price * surgeMultiplier)}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">{ride.name}</h4>
                    <span className="text-xs text-[color:var(--text-dim)]">{ride.seats} seat</span>
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--text-dim)]">{ride.subtitle}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="card-shell p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Nearby drivers</p>
              <h3 className="mt-2 text-2xl font-semibold">Animated city map</h3>
            </div>
            <span className="pill-chip">12 live</span>
          </div>

          <div className="relative mt-5 h-[280px] overflow-hidden rounded-[30px] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,220,95,0.16),transparent_22%),radial-gradient(circle_at_80%_70%,rgba(183,244,58,0.14),transparent_24%)]" />
            <div className="absolute inset-x-10 top-1/4 h-px bg-white/10" />
            <div className="absolute inset-x-10 top-1/2 h-px bg-white/10" />
            <div className="absolute inset-x-10 bottom-1/4 h-px bg-white/10" />
            <div className="absolute inset-y-8 left-1/4 w-px bg-white/10" />
            <div className="absolute inset-y-8 left-1/2 w-px bg-white/10" />
            <div className="absolute inset-y-8 right-1/4 w-px bg-white/10" />

            {mapVehicles.map((vehicle) => (
              <MotionDiv
                key={vehicle.id}
                className={`absolute flex h-8 w-8 items-center justify-center rounded-full opacity-90 backdrop-blur-sm transition-opacity duration-300 ${vehicle.bg} ${vehicle.shadow} ${vehicle.color}`}
                initial={vehicle.init}
                animate={vehicle.anim}
                transition={{ duration: vehicle.dur, delay: vehicle.delay, repeat: Infinity, ease: "linear" }}
              >
                <vehicle.Icon className="h-4 w-4" />
              </MotionDiv>
            ))}

            <MotionDiv className="absolute left-[58%] top-[52%] flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--accent)] text-slate-950 shadow-[0_0_0_16px_rgba(255,219,82,0.14)]" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.4, repeat: Infinity }}>
              <PinIcon className="h-6 w-6" />
            </MotionDiv>

            <div className="absolute bottom-4 left-4 rounded-[20px] bg-black/35 px-4 py-3 text-sm text-white backdrop-blur">
              2 mins away from pickup
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {quickLocations.map((location) => (
              <div key={location.label} className="min-w-[180px] flex-1 rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3">
                <p className="text-sm font-medium">{location.label}</p>
                <p className="mt-1 text-xs text-[color:var(--text-dim)]">{location.eta}</p>
              </div>
            ))}
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
};

export default Home;
