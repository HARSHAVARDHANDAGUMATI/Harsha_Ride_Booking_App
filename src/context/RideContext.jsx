import { useMemo, useState } from "react";
import { coupons, notifications as defaultNotifications, rideTypes, stopOptions } from "../data/mockData";
import { RideContext } from "./rideContextObject";

const initialDriver = {
  name: "Rohit Kumar",
  vehicle: "Bike",
  plate: "KA 05 MQ 2147",
  rating: 4.9,
  trips: 1248,
  etaMinutes: 4,
};

export const RideProvider = ({ children }) => {
  const [pickup, setPickup] = useState("HSR Layout, 17th Main");
  const [drop, setDrop] = useState("MG Road Metro Station");
  const [selectedRideId, setSelectedRideId] = useState("auto");
  const [scheduleEnabled, setScheduleEnabled] = useState(true);
  const [scheduledAt, setScheduledAt] = useState("2026-03-27T19:30");
  const [stops, setStops] = useState(stopOptions.slice(0, 2));
  const [walletEnabled, setWalletEnabled] = useState(true);
  const [walletBalance] = useState(420);
  const [selectedCouponCode, setSelectedCouponCode] = useState(coupons[0].code);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [notifications, setNotifications] = useState(defaultNotifications);
  const [sosTriggered, setSosTriggered] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "driver", text: "I’m on the way. Please be ready near the pickup point." },
  ]);
  const [driver] = useState(initialDriver);

  const selectedRide = rideTypes.find((ride) => ride.id === selectedRideId) || rideTypes[0];
  const surgeMultiplier = useMemo(() => (scheduleEnabled ? 1.2 : 1.35), [scheduleEnabled]);
  const stopCharge = Math.max(stops.length - 1, 0) * 18;
  const baseFare = selectedRide.price + stopCharge;
  const surgeAmount = Math.round(baseFare * (surgeMultiplier - 1));
  const taxes = 12;
  const selectedCoupon = coupons.find((coupon) => coupon.code === selectedCouponCode) || coupons[0];
  const walletApplied = walletEnabled ? Math.min(walletBalance, 60) : 0;
  const fareTotal = Math.max(baseFare + surgeAmount + taxes - selectedCoupon.savings - walletApplied, 0);

  const addNotification = (title, detail, time = "Now", tone = "accent") => {
    setNotifications((current) => [{ title, detail, time, tone }, ...current]);
  };

  const addStop = () => {
    setStops((current) => [...current, `Stop ${current.length + 1}`]);
  };

  const updateStop = (index, value) => {
    setStops((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)));
  };

  const removeStop = (index) => {
    setStops((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  const completePayment = (details) => {
    setPaymentMethod(details.method);
    setPaymentSuccess(true);
    setPaymentMessage(`Payment successful via ${details.method.toUpperCase()}. Your captain is on the move.`);
    addNotification("Payment successful", `Your ${details.method.toUpperCase()} payment for Rs.${fareTotal} is confirmed.`);
    addNotification("Driver assigned", `${driver.name} is coming in ${driver.etaMinutes} minutes.`);
  };

  const sendChatMessage = (text) => {
    if (!text.trim()) return;
    setChatMessages((current) => [...current, { sender: "you", text }]);
    setTimeout(() => {
      setChatMessages((current) => [...current, { sender: "driver", text: "Got it. I’ll be there shortly." }]);
    }, 300);
  };

  const triggerSos = () => {
    setSosTriggered(true);
    addNotification("SOS activated", "Live trip details were shared with your trusted contacts.");
  };

  const value = {
    pickup,
    setPickup,
    drop,
    setDrop,
    selectedRide,
    selectedRideId,
    setSelectedRideId,
    scheduleEnabled,
    setScheduleEnabled,
    scheduledAt,
    setScheduledAt,
    stops,
    addStop,
    updateStop,
    removeStop,
    walletEnabled,
    setWalletEnabled,
    walletBalance,
    selectedCoupon,
    selectedCouponCode,
    setSelectedCouponCode,
    paymentMethod,
    setPaymentMethod,
    paymentSuccess,
    setPaymentSuccess,
    paymentMessage,
    fareTotal,
    baseFare,
    surgeAmount,
    surgeMultiplier,
    taxes,
    walletApplied,
    notifications,
    addNotification,
    driver,
    completePayment,
    chatMessages,
    sendChatMessage,
    sosTriggered,
    triggerSos,
  };

  return <RideContext.Provider value={value}>{children}</RideContext.Provider>;
};
