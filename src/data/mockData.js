export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Ride", path: "/ride" },
  { name: "Track", path: "/tracking" },
  { name: "Pay", path: "/payment" },
  { name: "Profile", path: "/profile" },
];

export const rideTypes = [
  {
    id: "bike",
    name: "Bike",
    subtitle: "Fastest for one rider",
    eta: "2 min",
    price: 68,
    seats: 1,
    accent: "from-[#fddd5c] via-[#ffc83d] to-[#ffae00]",
    tag: "Quick pick",
  },
  {
    id: "auto",
    name: "Auto",
    subtitle: "Smart value for city rides",
    eta: "4 min",
    price: 112,
    seats: 3,
    accent: "from-[#c7ff48] via-[#b7f43a] to-[#8dd100]",
    tag: "Most booked",
  },
  {
    id: "car",
    name: "Car",
    subtitle: "AC comfort for longer hops",
    eta: "6 min",
    price: 196,
    seats: 4,
    accent: "from-[#ffe589] via-[#ffd55a] to-[#ffbc21]",
    tag: "Comfort",
  },
];

export const quickLocations = [
  { label: "Airport Terminal 2", eta: "22 min" },
  { label: "Indiranagar 100 ft", eta: "11 min" },
  { label: "Electronic City", eta: "26 min" },
  { label: "Manyata Tech Park", eta: "17 min" },
];

export const stopOptions = [
  "Forum Mall",
  "Koramangala 5th Block",
  "HSR Layout",
  "Bellandur Signal",
];

export const trackingSteps = [
  { title: "Captain assigned", detail: "Rohit accepted your trip", status: "done" },
  { title: "Arriving at pickup", detail: "2 mins away from you", status: "live" },
  { title: "Ride in progress", detail: "Starts after pickup OTP", status: "pending" },
  { title: "Drop and rating", detail: "Payment closes automatically", status: "pending" },
];

export const paymentMethods = [
  { id: "upi", name: "UPI", detail: "Pay instantly with your UPI app" },
  { id: "cash", name: "Cash", detail: "Pay the captain after the ride" },
  { id: "card", name: "Card", detail: "Saved card with one-tap payment" },
];

export const coupons = [
  { code: "RAPID50", title: "Flat Rs.50 off", detail: "Valid on Bike and Auto", savings: 50 },
  { code: "NIGHT10", title: "10% night ride cashback", detail: "Credited to wallet", savings: 24 },
  { code: "WALLET25", title: "Rs.25 wallet booster", detail: "Auto applied above Rs.150", savings: 25 },
];

export const notifications = [
  {
    title: "Captain assigned",
    detail: "Rohit on Bike is heading to your pickup point.",
    time: "Now",
    tone: "accent",
  },
  {
    title: "Surge calming down",
    detail: "Your area moved from high demand to normal pricing.",
    time: "5 min ago",
    tone: "soft",
  },
  {
    title: "Wallet credited",
    detail: "Rs.120 cashback has been added to your wallet.",
    time: "Today",
    tone: "muted",
  },
];

export const rideHistory = [
  {
    id: 1,
    route: "Indiranagar to MG Road",
    date: "Today, 8:10 AM",
    fare: "Rs.126",
    vehicle: "Bike",
    payment: "UPI",
    rating: 5,
  },
  {
    id: 2,
    route: "HSR Layout to Airport",
    date: "Yesterday, 7:45 PM",
    fare: "Rs.412",
    vehicle: "Car",
    payment: "Card",
    rating: 4,
  },
  {
    id: 3,
    route: "Koramangala to Bellandur",
    date: "Mar 24, 9:15 PM",
    fare: "Rs.188",
    vehicle: "Auto",
    payment: "Wallet",
    rating: 5,
  },
];

export const profileStats = [
  { label: "Wallet", value: "Rs.420" },
  { label: "Completed rides", value: "148" },
  { label: "Avg. rating", value: "4.9" },
];

export const savedPlaces = [
  { label: "Home", address: "17th Main, HSR Layout" },
  { label: "Work", address: "Embassy Tech Village" },
  { label: "Gym", address: "Indiranagar 12th Main" },
];

export const authHighlights = [
  "Lightning-fast city booking flow",
  "Wallet, offers, SOS, and ride tracking",
  "Dark mode with app-like bottom sheet feel",
];
