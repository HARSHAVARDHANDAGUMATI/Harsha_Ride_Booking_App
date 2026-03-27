import { motion } from "framer-motion";
import { profileStats, savedPlaces } from "../../data/mockData";

const Profile = () => {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;

  return (
    <div className="space-y-5 pb-32">
      <MotionSection
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-shell p-6"
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="icon-badge h-20 w-20 rounded-[28px] bg-[linear-gradient(135deg,var(--accent),var(--success))] text-2xl font-semibold text-slate-950">
            W
          </div>
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Rider profile</p>
            <h2 className="mt-2 text-3xl font-semibold">Winner</h2>
            <p className="mt-2 text-sm text-[color:var(--text-dim)]">Premium rider with verified phone, wallet access, and saved locations.</p>
          </div>
          <button className="secondary-button">Edit profile</button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {profileStats.map((item) => (
            <div key={item.label} className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-soft)]">{item.label}</p>
              <p className="mt-3 text-2xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <MotionDiv
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="card-shell p-5"
        >
          <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Preferences</p>
          <h3 className="mt-2 text-2xl font-semibold">Rider controls</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Dark mode enabled", "Driver chat on", "Auto apply coupons", "Share trip status"].map((item) => (
              <span key={item} className="pill-chip">
                {item}
              </span>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="card-shell p-5"
        >
          <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Saved places</p>
          <div className="mt-5 space-y-3">
            {savedPlaces.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-[color:var(--text-dim)]">{item.address}</p>
              </div>
            ))}
          </div>
        </MotionDiv>
      </MotionSection>
    </div>
  );
};

export default Profile;
