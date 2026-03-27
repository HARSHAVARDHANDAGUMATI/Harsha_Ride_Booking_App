import { motion } from "framer-motion";
import { rideHistory } from "../../data/mockData";

const History = () => {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;

  return (
    <div className="space-y-5 pb-32">
      <MotionSection
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-shell p-5 md:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Ride history</p>
            <h2 className="mt-2 text-3xl font-semibold">Recent trips and rebook shortcuts</h2>
          </div>
          <div className="flex gap-2 text-sm">
            <span className="pill-chip">All trips</span>
            <span className="pill-chip">Work rides</span>
            <span className="pill-chip">Night rides</span>
          </div>
        </div>
      </MotionSection>

      <div className="grid gap-4">
        {rideHistory.map((ride, index) => (
          <MotionDiv
            key={ride.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="card-shell p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold">{ride.route}</p>
                <p className="mt-2 text-sm text-[color:var(--text-dim)]">{ride.date}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold">{ride.fare}</p>
                <p className="mt-1 text-xs text-[color:var(--text-dim)]">{ride.vehicle} via {ride.payment}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="pill-chip">Rated {ride.rating}/5</span>
              <span className="pill-chip">Rebook route</span>
              <span className="pill-chip">Download invoice</span>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default History;
