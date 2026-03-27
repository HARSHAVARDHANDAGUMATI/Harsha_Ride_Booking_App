import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useRide from "../../hooks/useRide";
import { rideTypes } from "../../data/mockData";
import {
  AutoVehicleIcon,
  BikeVehicleIcon,
  CarVehicleIcon,
  ClockIcon,
  PinIcon,
  PlusIcon,
  SparkIcon,
} from "../../components/common/Icons";

const visualByRide = {
  bike: BikeVehicleIcon,
  auto: AutoVehicleIcon,
  car: CarVehicleIcon,
};

const RideSelection = () => {
  const {
    pickup,
    drop,
    selectedRideId,
    setSelectedRideId,
    selectedRide,
    scheduleEnabled,
    setScheduleEnabled,
    scheduledAt,
    setScheduledAt,
    stops,
    addStop,
    updateStop,
    removeStop,
    baseFare,
    surgeAmount,
    surgeMultiplier,
    taxes,
    fareTotal,
  } = useRide();

  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const MotionButton = motion.button;

  return (
    <div className="space-y-5 pb-32">
      <MotionSection initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="card-shell p-5 md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Ride selection</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Choose your city ride</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--text-dim)]">
              Pick bike, auto, or car with live surge pricing, scheduling, multi-stop support, and responsive booking controls.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="pill-chip">Surge x{surgeMultiplier.toFixed(2)}</span>
            <span className="pill-chip">{stops.length} stops</span>
            <span className="pill-chip">{scheduleEnabled ? "Scheduled" : "Instant"}</span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {rideTypes.map((ride) => {
              const active = selectedRideId === ride.id;
              const VehicleIcon = visualByRide[ride.id];
              const rideFare = Math.max(Math.round(ride.price * surgeMultiplier) + Math.max(stops.length - 1, 0) * 18, ride.price);

              return (
                <MotionButton
                  key={ride.id}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedRideId(ride.id)}
                  className={`flex h-full min-h-[24.5rem] flex-col overflow-hidden rounded-[34px] border text-left transition md:min-h-[26rem] ${
                    active
                      ? "border-[color:var(--accent)] shadow-[0_28px_80px_rgba(255,184,0,0.22)]"
                      : "border-[color:var(--border)] hover:border-white/20"
                  }`}
                >
                  <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${ride.accent} p-4 text-slate-950 md:h-48 md:p-5`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_38%)]" />
                    <div className="relative flex items-start justify-between">
                      <span className="rounded-full bg-black/10 px-3 py-1 text-[11px] font-semibold">{ride.tag}</span>
                      <span className="rounded-full bg-black/10 px-3 py-1 text-[11px] font-semibold">{ride.eta}</span>
                    </div>

                    <div className="relative mt-4 flex items-center justify-center md:mt-5">
                      <div className="flex h-20 w-20 items-center justify-center rounded-[26px] bg-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] md:h-24 md:w-24 md:rounded-[30px]">
                        <VehicleIcon className="h-12 w-12 md:h-14 md:w-14" />
                      </div>
                    </div>

                    <div className="relative mt-4 flex items-end justify-between md:mt-5">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-950/60">
                          {ride.id === "bike" ? "Solo sprint" : ride.id === "auto" ? "City saver" : "Premium comfort"}
                        </p>
                        <p className="mt-1.5 text-[2rem] font-semibold leading-none md:text-[2.2rem]">Rs.{rideFare}</p>
                      </div>
                      <div className="rounded-[16px] bg-black/10 px-3 py-1.5 text-right">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-950/60">ETA</p>
                        <p className="mt-1 text-sm font-semibold">{ride.eta}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`flex flex-1 flex-col p-4 md:p-5 ${active ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" : "bg-[color:var(--surface-2)]"}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-[1.55rem] font-semibold leading-none md:text-[1.75rem]">{ride.name}</h3>
                        <p className="mt-3 min-h-[3.8rem] text-sm leading-7 text-[color:var(--text-dim)] md:min-h-[4.2rem]">
                          {ride.subtitle}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--text-soft)]">Seats</span>
                        <p className="mt-2 text-lg font-semibold">{ride.seats}</p>
                      </div>
                    </div>

                    <div className="mt-auto grid grid-cols-[minmax(0,1fr)_112px] items-center gap-3 pt-4">
                      <div className="flex min-h-[2.5rem] min-w-0 items-center gap-2 text-[11px] leading-5 text-[color:var(--text-dim)] md:text-xs">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--success)]" />
                        <span className="line-clamp-2 min-w-0">
                          {ride.id === "bike" ? "Fastest for traffic" : ride.id === "auto" ? "Best price right now" : "Most comfortable ride"}
                        </span>
                      </div>
                      <span className={`flex h-10 w-[112px] items-center justify-center rounded-full px-3 py-1.5 text-center text-[11px] font-semibold md:text-xs ${active ? "bg-[color:var(--accent)] text-slate-950" : "bg-white/10"}`}>
                        {active ? "Selected" : "Tap to choose"}
                      </span>
                    </div>
                  </div>
                </MotionButton>
              );
            })}
          </div>

          <div className="space-y-4">
            <div className="rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Ride details</h3>
                <span className="pill-chip">{selectedRide.name}</span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3 rounded-[22px] bg-[color:var(--surface-1)] p-4">
                  <PinIcon className="h-5 w-5 text-[color:var(--success)]" />
                  <div>
                    <p className="text-sm font-medium">{pickup}</p>
                    <p className="text-xs text-[color:var(--text-dim)]">Pickup confirmed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-[22px] bg-[color:var(--surface-1)] p-4">
                  <PinIcon className="h-5 w-5 text-[color:var(--accent-strong)]" />
                  <div>
                    <p className="text-sm font-medium">{drop}</p>
                    <p className="text-xs text-[color:var(--text-dim)]">Dynamic fare updates while demand changes</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="rounded-[22px] border border-[color:var(--border)] p-4">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <ClockIcon className="h-4 w-4 text-[color:var(--accent-strong)]" />
                    Schedule later
                  </span>
                  <input
                    type="datetime-local"
                    value={scheduledAt}
                    onChange={(event) => setScheduledAt(event.target.value)}
                    disabled={!scheduleEnabled}
                    className="mt-3 w-full bg-transparent text-sm outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setScheduleEnabled((current) => !current)}
                    className={`mt-3 rounded-full px-3 py-1 text-xs font-semibold ${scheduleEnabled ? "bg-[color:var(--accent)] text-slate-950" : "bg-white/10"}`}
                  >
                    {scheduleEnabled ? "Scheduled" : "Book now"}
                  </button>
                </label>

                <div className="rounded-[22px] border border-[color:var(--border)] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <PlusIcon className="h-4 w-4 text-[color:var(--success)]" />
                    Multi-stop
                  </div>
                  <div className="mt-3 space-y-2">
                    {stops.map((stop, index) => (
                      <div key={`${stop}-${index}`} className="flex items-center gap-2">
                        <input
                          value={stop}
                          onChange={(event) => updateStop(index, event.target.value)}
                          className="w-full rounded-full bg-[color:var(--surface-1)] px-3 py-2 text-sm outline-none"
                        />
                        {stops.length > 1 && (
                          <button type="button" onClick={() => removeStop(index)} className="rounded-full bg-white/10 px-3 py-2 text-xs">
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={addStop} className="secondary-button px-4 py-2 text-xs">
                      Add stop
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(255,220,95,0.15),rgba(255,255,255,0.03))] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <SparkIcon className="h-4 w-4 text-[color:var(--accent-strong)]" />
                Fare breakdown
              </div>
              <div className="mt-4 space-y-3 text-sm text-[color:var(--text-dim)]">
                <div className="flex items-center justify-between">
                  <span>Base fare</span>
                  <span>Rs.{baseFare}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Surge adjustment</span>
                  <span>Rs.{surgeAmount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Platform fee</span>
                  <span>Rs.{taxes}</span>
                </div>
                <div className="border-t border-[color:var(--border)] pt-3 text-base font-semibold text-[color:var(--text-main)]">
                  <div className="flex items-center justify-between">
                    <span>Total estimate</span>
                    <span>Rs.{fareTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <MotionDiv initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="card-shell p-5 md:p-6">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Stop flow</p>
          <h3 className="mt-2 text-2xl font-semibold">Route manager</h3>
          <div className="mt-5 space-y-3">
            {[pickup, ...stops, drop].map((point, index) => (
              <div key={`${point}-${index}`} className="flex items-center gap-3 rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--surface-3)] text-xs font-semibold">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-medium">{point}</p>
                  <p className="text-xs text-[color:var(--text-dim)]">
                    {index === 0 ? "Pickup point" : index === stops.length + 1 ? "Final drop" : "Stopover destination"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="card-shell p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Ready to confirm</p>
              <h3 className="mt-2 text-2xl font-semibold">Continue booking</h3>
            </div>
            <span className="pill-chip text-[color:var(--success)]">{selectedRide.eta} captain ETA</span>
          </div>

          <div className="mt-5 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-[color:var(--text-dim)]">Selected ride</p>
                <p className="mt-1 text-2xl font-semibold">{selectedRide.name}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-[color:var(--text-dim)]">Estimated payable</p>
                <p className="mt-1 text-2xl font-semibold">Rs.{fareTotal}</p>
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/10">
              <MotionDiv
                initial={{ width: "20%" }}
                animate={{ width: `${Math.min(88, 40 + stops.length * 10)}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-[linear-gradient(90deg,var(--success),var(--accent))]"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/tracking" className="primary-button">
                Continue to tracking
              </Link>
              <Link to="/payment" className="secondary-button">
                Continue to payment
              </Link>
            </div>
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
};

export default RideSelection;
