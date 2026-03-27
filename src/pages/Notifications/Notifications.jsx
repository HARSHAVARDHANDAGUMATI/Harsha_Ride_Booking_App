import { motion } from "framer-motion";
import useRide from "../../hooks/useRide";

const Notifications = () => {
  const { notifications } = useRide();
  const MotionSection = motion.section;
  const MotionDiv = motion.div;

  return (
    <div className="space-y-5 pb-32">
      <MotionSection initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="card-shell p-5 md:p-6">
        <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Notifications</p>
        <h2 className="mt-2 text-3xl font-semibold">Ride updates and alerts</h2>
        <p className="mt-3 text-sm text-[color:var(--text-dim)]">Driver assignment, payment success, SOS updates, and booking changes appear here.</p>
      </MotionSection>

      <div className="grid gap-4">
        {notifications.map((item, index) => (
          <MotionDiv
            key={`${item.title}-${item.time}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="card-shell p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-semibold">{item.title}</p>
              <span className="text-xs text-[color:var(--text-soft)]">{item.time}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-[color:var(--text-dim)]">{item.detail}</p>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
