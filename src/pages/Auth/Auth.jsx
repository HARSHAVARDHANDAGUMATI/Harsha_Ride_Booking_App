import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { authHighlights } from "../../data/mockData";
import { RideIcon, ShieldIcon, SparkIcon } from "../../components/common/Icons";

const initialLogin = { phone: "", password: "" };
const initialSignup = { name: "", phone: "", email: "", password: "" };

const validateLogin = (values) => {
  const errors = {};
  if (!/^\d{10}$/.test(values.phone)) errors.phone = "Enter a valid 10-digit mobile number.";
  if (values.password.trim().length < 6) errors.password = "Password must be at least 6 characters.";
  return errors;
};

const validateSignup = (values) => {
  const errors = {};
  if (values.name.trim().length < 3) errors.name = "Name must be at least 3 characters.";
  if (!/^\d{10}$/.test(values.phone)) errors.phone = "Enter a valid 10-digit mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.password.trim().length < 6) errors.password = "Password must be at least 6 characters.";
  return errors;
};

const inputClass =
  "w-full rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 text-sm text-[color:var(--text-main)] outline-none transition placeholder:text-[color:var(--text-soft)] focus:border-[color:var(--accent-strong)]";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [login, setLogin] = useState(initialLogin);
  const [signup, setSignup] = useState(initialSignup);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});
  const [signupErrors, setSignupErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const activeErrors = mode === "login" ? loginErrors : signupErrors;
  const successText = useMemo(
    () => (mode === "login" ? "Ready to jump back into your city rides." : "Create your rider account and unlock faster bookings."),
    [mode]
  );

  const handleLogin = (event) => {
    event.preventDefault();
    const errors = validateLogin(login);
    setLoginErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatusMessage("");
      return;
    }

    setStatusMessage("Login successful. Redirecting to your ride dashboard...");
    setTimeout(() => navigate("/"), 500);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const errors = validateSignup(signup);
    setSignupErrors(errors);

    if (Object.keys(errors).length > 0) {
      setStatusMessage("");
      return;
    }

    setStatusMessage("Account created successfully. Redirecting to your ride dashboard...");
    setLogin({ phone: signup.phone, password: signup.password });
    setSignup(initialSignup);
    setTimeout(() => navigate("/"), 500);
  };

  const MotionSection = motion.section;

  return (
    <div className="grid gap-4 pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:pb-32">
      <MotionSection
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-shell order-2 overflow-hidden p-5 md:p-8 lg:order-1"
      >
        <div className="flex items-start gap-3">
          <div className="icon-badge h-12 w-12 shrink-0 rounded-[16px] bg-[color:var(--accent)] text-slate-950 md:h-12 md:w-12">
            <RideIcon />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Ride identity</p>
            <h2 className="text-[2rem] font-semibold leading-tight text-[color:var(--text-main)] md:text-3xl">
              Secure login. Fast booking.
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
          {authHighlights.map((item) => (
            <div key={item} className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <div className="icon-badge mb-4 h-10 w-10 rounded-[14px] bg-[color:var(--surface-3)] text-[color:var(--accent-strong)]">
                <SparkIcon className="h-4 w-4" />
              </div>
              <p className="text-sm leading-7 text-[color:var(--text-main)]">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] bg-[linear-gradient(135deg,rgba(255,220,95,0.16),rgba(255,255,255,0.02))] p-5">
          <p className="text-sm font-medium text-[color:var(--text-main)]">{successText}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-[color:var(--text-dim)]">
            <span className="pill-chip">OTP-ready mobile validation</span>
            <span className="pill-chip">Device-safe session design</span>
            <span className="pill-chip">Wallet + offer sync</span>
          </div>
        </div>
      </MotionSection>

      <MotionSection
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="card-shell order-1 p-4 md:p-6 lg:order-2"
      >
        <div className="glass-strip grid grid-cols-2 p-1">
          {["login", "signup"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`rounded-[18px] px-4 py-3 text-sm font-semibold capitalize transition ${
                mode === item
                  ? "bg-[color:var(--accent)] text-slate-950"
                  : "text-[color:var(--text-dim)] hover:text-[color:var(--text-main)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {mode === "login" ? (
          <form className="mt-5 space-y-4" onSubmit={handleLogin}>
            <label className="block">
              <span className="mb-2 block text-sm text-[color:var(--text-dim)]">Mobile number</span>
              <input
                className={inputClass}
                placeholder="9876543210"
                value={login.phone}
                onChange={(event) => setLogin((prev) => ({ ...prev, phone: event.target.value }))}
              />
              {activeErrors.phone && <span className="mt-2 block text-xs text-rose-400">{activeErrors.phone}</span>}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-[color:var(--text-dim)]">Password</span>
              <div className="relative">
                <input
                  type={showLoginPassword ? "text" : "password"}
                  className={`${inputClass} pr-20`}
                  placeholder="Enter password"
                  value={login.password}
                  onChange={(event) => setLogin((prev) => ({ ...prev, password: event.target.value }))}
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword((current) => !current)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[color:var(--text-dim)]"
                >
                  {showLoginPassword ? "Hide" : "Show"}
                </button>
              </div>
              {activeErrors.password && <span className="mt-2 block text-xs text-rose-400">{activeErrors.password}</span>}
            </label>
            <button type="submit" className="primary-button w-full justify-center">
              Login to ride
            </button>
          </form>
        ) : (
          <form className="mt-5 space-y-4" onSubmit={handleSignup}>
            <label className="block">
              <span className="mb-2 block text-sm text-[color:var(--text-dim)]">Full name</span>
              <input
                className={inputClass}
                placeholder="Winner"
                value={signup.name}
                onChange={(event) => setSignup((prev) => ({ ...prev, name: event.target.value }))}
              />
              {activeErrors.name && <span className="mt-2 block text-xs text-rose-400">{activeErrors.name}</span>}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-[color:var(--text-dim)]">Mobile number</span>
              <input
                className={inputClass}
                placeholder="9876543210"
                value={signup.phone}
                onChange={(event) => setSignup((prev) => ({ ...prev, phone: event.target.value }))}
              />
              {activeErrors.phone && <span className="mt-2 block text-xs text-rose-400">{activeErrors.phone}</span>}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-[color:var(--text-dim)]">Email</span>
              <input
                className={inputClass}
                placeholder="you@example.com"
                value={signup.email}
                onChange={(event) => setSignup((prev) => ({ ...prev, email: event.target.value }))}
              />
              {activeErrors.email && <span className="mt-2 block text-xs text-rose-400">{activeErrors.email}</span>}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-[color:var(--text-dim)]">Password</span>
              <div className="relative">
                <input
                  type={showSignupPassword ? "text" : "password"}
                  className={`${inputClass} pr-20`}
                  placeholder="Create password"
                  value={signup.password}
                  onChange={(event) => setSignup((prev) => ({ ...prev, password: event.target.value }))}
                />
                <button
                  type="button"
                  onClick={() => setShowSignupPassword((current) => !current)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[color:var(--text-dim)]"
                >
                  {showSignupPassword ? "Hide" : "Show"}
                </button>
              </div>
              {activeErrors.password && <span className="mt-2 block text-xs text-rose-400">{activeErrors.password}</span>}
            </label>
            <button type="submit" className="primary-button w-full justify-center">
              Create account
            </button>
          </form>
        )}

        {statusMessage && (
          <div className="mt-4 rounded-[20px] border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
            {statusMessage}
          </div>
        )}

        <div className="mt-5 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
          <div className="flex items-center gap-3">
            <div className="icon-badge h-10 w-10 bg-[color:var(--surface-3)] text-[color:var(--accent-strong)]">
              <ShieldIcon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--text-main)]">Safe sign-in flow</p>
              <p className="text-xs text-[color:var(--text-dim)]">Validation is active for all fields before the ride journey starts.</p>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default Auth;
