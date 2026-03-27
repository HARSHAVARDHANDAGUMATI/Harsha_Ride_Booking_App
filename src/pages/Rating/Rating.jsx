import { motion } from "framer-motion";
import { StarIcon } from "../../components/common/Icons";

const Rating = () => {
  const MotionSection = motion.section;

  return (
    <div className="space-y-5 pb-32">
      <MotionSection
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-shell p-6"
      >
        <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Rating and review</p>
        <h2 className="mt-2 text-3xl font-semibold">How was your ride?</h2>
        <div className="mt-6 flex gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} className="icon-badge h-14 w-14 rounded-[22px] bg-[color:var(--surface-2)] text-[color:var(--accent)]">
              <StarIcon className="h-6 w-6" />
            </button>
          ))}
        </div>
        <textarea
          rows="4"
          placeholder="Share feedback about the captain, comfort, or route..."
          className="mt-6 w-full rounded-[26px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4 text-sm text-[color:var(--text-main)] outline-none placeholder:text-[color:var(--text-soft)]"
        />
        <button className="primary-button mt-5">Submit review</button>
      </MotionSection>
    </div>
  );
};

export default Rating;
