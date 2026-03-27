import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Auth from "../pages/Auth/Auth";
import History from "../pages/History/History";
import Home from "../pages/Home/Home";
import Notifications from "../pages/Notifications/Notifications";
import Payment from "../pages/Payment/Payment";
import Profile from "../pages/Profile/Profile";
import Rating from "../pages/Rating/Rating";
import RideSelection from "../pages/Ride/RideSelection";
import SOS from "../pages/SOS/SOS";
import Tracking from "../pages/Tracking/Tracking";

const routeTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.28, ease: "easeOut" },
};

const MotionDiv = motion.div;

const RouteFrame = ({ children }) => <MotionDiv {...routeTransition}>{children}</MotionDiv>;

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteFrame><Home /></RouteFrame>} />
        <Route path="/auth" element={<RouteFrame><Auth /></RouteFrame>} />
        <Route path="/ride" element={<RouteFrame><RideSelection /></RouteFrame>} />
        <Route path="/payment" element={<RouteFrame><Payment /></RouteFrame>} />
        <Route path="/history" element={<RouteFrame><History /></RouteFrame>} />
        <Route path="/profile" element={<RouteFrame><Profile /></RouteFrame>} />
        <Route path="/tracking" element={<RouteFrame><Tracking /></RouteFrame>} />
        <Route path="/notifications" element={<RouteFrame><Notifications /></RouteFrame>} />
        <Route path="/sos" element={<RouteFrame><SOS /></RouteFrame>} />
        <Route path="/rating" element={<RouteFrame><Rating /></RouteFrame>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
