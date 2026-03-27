import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useRide from "../../hooks/useRide";
import { coupons, paymentMethods } from "../../data/mockData";
import { CardPayIcon, CashIcon, ShieldIcon, SparkIcon, WalletIcon } from "../../components/common/Icons";

const paymentIcons = {
  upi: WalletIcon,
  card: CardPayIcon,
  cash: CashIcon,
};

const Payment = () => {
  const {
    selectedRide,
    selectedCouponCode,
    setSelectedCouponCode,
    walletEnabled,
    setWalletEnabled,
    walletBalance,
    paymentMethod,
    setPaymentMethod,
    paymentSuccess,
    paymentMessage,
    fareTotal,
    baseFare,
    surgeAmount,
    taxes,
    walletApplied,
    selectedCoupon,
    completePayment,
  } = useRide();

  const [showCheckout, setShowCheckout] = useState(false);
  const [upiId, setUpiId] = useState("harsha@upi");
  const [cardNumber, setCardNumber] = useState("4111 1111 1111 1111");
  const [cardName, setCardName] = useState("Harsha");
  const [cvv, setCvv] = useState("123");

  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const ActiveIcon = paymentIcons[paymentMethod];

  const handleConfirm = () => {
    setShowCheckout(true);
  };

  const handlePay = () => {
    completePayment({ method: paymentMethod, upiId, cardNumber, cardName, cvv });
    setShowCheckout(false);
  };

  return (
    <div className="space-y-5 pb-32">
      <MotionSection className="grid gap-5 xl:grid-cols-[0.98fr_1.02fr]">
        <MotionDiv initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="card-shell p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Payment</p>
              <h2 className="mt-2 text-3xl font-semibold">Confirm fare and pay</h2>
            </div>
            <div className="icon-badge bg-[color:var(--accent)] text-slate-950">
              <ActiveIcon />
            </div>
          </div>

          <div className="mt-5 rounded-[30px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-[color:var(--text-dim)]">Selected ride</p>
                <p className="mt-1 text-2xl font-semibold">{selectedRide.name}</p>
              </div>
              <span className="pill-chip">{paymentMethod.toUpperCase()}</span>
            </div>

            <div className="space-y-3 text-sm text-[color:var(--text-dim)]">
              <div className="flex items-center justify-between">
                <span>Base fare</span>
                <span>Rs.{baseFare}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Surge pricing</span>
                <span>Rs.{surgeAmount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Taxes and platform fee</span>
                <span>Rs.{taxes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Coupon applied</span>
                <span className="text-[color:var(--success)]">- Rs.{selectedCoupon.savings}</span>
              </div>
              {walletEnabled && (
                <div className="flex items-center justify-between">
                  <span>Wallet applied</span>
                  <span className="text-[color:var(--success)]">- Rs.{walletApplied}</span>
                </div>
              )}
            </div>

            <div className="mt-4 border-t border-[color:var(--border)] pt-4">
              <div className="flex items-center justify-between text-2xl font-semibold">
                <span>Total</span>
                <span>Rs.{fareTotal}</span>
              </div>
            </div>
          </div>

          <button onClick={handleConfirm} className="primary-button mt-5 w-full justify-center">
            Confirm payment
          </button>

          {paymentSuccess && (
            <div className="mt-4 rounded-[24px] border border-emerald-400/25 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-300">
              {paymentMessage}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/tracking" className="secondary-button">
              Track ride
            </Link>
            <Link to="/rating" className="secondary-button">
              Rating page
            </Link>
          </div>
        </MotionDiv>

        <MotionDiv initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="space-y-5">
          <div className="card-shell p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Pay with</h3>
              <span className="text-sm text-[color:var(--text-dim)]">Choose method below</span>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {paymentMethods.map((item) => {
                const active = paymentMethod === item.id;
                const Icon = paymentIcons[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => setPaymentMethod(item.id)}
                    className={`rounded-[24px] border p-4 text-left transition ${
                      active ? "border-[color:var(--accent)] bg-[linear-gradient(135deg,rgba(255,220,95,0.16),rgba(255,255,255,0.03))]" : "border-[color:var(--border)] bg-[color:var(--surface-2)]"
                    }`}
                  >
                    <div className="icon-badge h-10 w-10 bg-[color:var(--surface-3)] text-[color:var(--accent-strong)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-base font-semibold">{item.name}</p>
                    <p className="mt-2 text-xs leading-5 text-[color:var(--text-dim)]">{item.detail}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="card-shell p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <SparkIcon className="h-4 w-4 text-[color:var(--accent-strong)]" />
                Wallet and offers
              </div>
              <button onClick={() => setWalletEnabled((current) => !current)} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                {walletEnabled ? "Wallet on" : "Wallet off"}
              </button>
            </div>
            <div className="mt-4 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[color:var(--text-dim)]">Wallet balance</span>
                <span className="text-lg font-semibold">Rs.{walletBalance}</span>
              </div>
              <p className="mt-2 text-xs text-[color:var(--text-dim)]">Up to Rs.{Math.min(walletBalance, 60)} can be auto-used on this booking.</p>
            </div>
            <div className="mt-4 grid gap-3">
              {coupons.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setSelectedCouponCode(item.code)}
                  className={`rounded-[24px] border p-4 text-left transition ${selectedCouponCode === item.code ? "border-[color:var(--success)]" : "border-[color:var(--border)]"} bg-[color:var(--surface-2)]`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold">{item.code}</p>
                    <span className="text-xs text-[color:var(--success)]">Save Rs.{item.savings}</span>
                  </div>
                  <p className="mt-2 text-sm">{item.title}</p>
                  <p className="mt-1 text-xs text-[color:var(--text-dim)]">{item.detail}</p>
                </button>
              ))}
            </div>
          </div>
        </MotionDiv>
      </MotionSection>

      {showCheckout && (
        <MotionSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 md:items-center">
          <MotionDiv initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="card-shell w-full max-w-xl p-5 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Checkout</p>
                <h3 className="mt-2 text-2xl font-semibold">Complete payment</h3>
              </div>
              <button onClick={() => setShowCheckout(false)} className="secondary-button px-4 py-2">
                Close
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {paymentMethods.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPaymentMethod(item.id)}
                  className={`rounded-[22px] px-4 py-3 text-sm font-semibold ${paymentMethod === item.id ? "bg-[color:var(--accent)] text-slate-950" : "bg-[color:var(--surface-2)]"}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {paymentMethod === "upi" && (
              <div className="mt-5">
                <label className="block text-sm text-[color:var(--text-dim)]">UPI ID</label>
                <input value={upiId} onChange={(event) => setUpiId(event.target.value)} className="mt-2 w-full rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 outline-none" />
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="mt-5 grid gap-4">
                <div>
                  <label className="block text-sm text-[color:var(--text-dim)]">Card number</label>
                  <input value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} className="mt-2 w-full rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-[color:var(--text-dim)]">Card holder</label>
                  <input value={cardName} onChange={(event) => setCardName(event.target.value)} className="mt-2 w-full rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-[color:var(--text-dim)]">CVV</label>
                  <input value={cvv} onChange={(event) => setCvv(event.target.value)} className="mt-2 w-full rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 outline-none" />
                </div>
              </div>
            )}

            {paymentMethod === "cash" && (
              <div className="mt-5 rounded-[22px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4 text-sm text-[color:var(--text-dim)]">
                Cash selected. Please keep exact amount ready for the captain when the ride ends.
              </div>
            )}

            <div className="mt-5 flex items-center justify-between rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4">
              <span className="text-sm text-[color:var(--text-dim)]">Payable now</span>
              <span className="text-2xl font-semibold">Rs.{fareTotal}</span>
            </div>

            <button onClick={handlePay} className="primary-button mt-5 w-full justify-center">
              Pay Rs.{fareTotal}
            </button>
          </MotionDiv>
        </MotionSection>
      )}

      <MotionSection initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="card-shell p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[color:var(--text-soft)]">Wallet and safety</p>
            <h3 className="mt-2 text-2xl font-semibold">Protected checkout experience</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[color:var(--surface-2)] px-4 py-2 text-sm text-[color:var(--text-dim)]">
            <ShieldIcon className="h-4 w-4 text-[color:var(--success)]" />
            Secure transaction preview
          </div>
        </div>
      </MotionSection>
    </div>
  );
};

export default Payment;
