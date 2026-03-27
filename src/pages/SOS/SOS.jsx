import { motion } from "framer-motion";
import useRide from "../../hooks/useRide";
import { ShieldIcon } from "../../components/common/Icons";

const SOS = () => {
  const { sosTriggered, triggerSos } = useRide();
  const MotionSection = motion.section;
  const MotionButton = motion.button;

  return (
    <div className="space-y-5 pb-32">
      <MotionSection initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="card-shell border-[rgba(255,106,112,0.2)] p-6">
        <div className="flex items-center gap-3">
          <div className="icon-badge bg-[rgba(255,106,112,0.16)] text-[color:var(--danger)]">
            <ShieldIcon />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Emergency support</p>
            <h2 className="mt-2 text-3xl font-semibold">SOS controls</h2>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-[color:var(--text-dim)]">
          Trigger SOS to share current ride, captain details, and live location with your emergency contacts.
        </p>

        <MotionButton
          whileTap={{ scale: 0.98 }}
          onClick={triggerSos}
          className="mt-8 flex h-44 w-full items-center justify-center rounded-[36px] border border-[rgba(255,106,112,0.35)] bg-[radial-gradient(circle_at_center,rgba(255,106,112,0.3),rgba(255,106,112,0.08))] text-xl font-semibold uppercase tracking-[0.3em] text-[color:var(--danger)]"
        >
          {sosTriggered ? "Alert sent" : "Hold to alert"}
        </MotionButton>
      </MotionSection>
    </div>
  );
};

export default SOS;
