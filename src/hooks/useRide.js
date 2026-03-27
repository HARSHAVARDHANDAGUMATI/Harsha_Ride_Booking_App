import { useContext } from "react";
import { RideContext } from "../context/rideContextObject";

const useRide = () => {
  const context = useContext(RideContext);

  if (!context) {
    throw new Error("useRide must be used within RideProvider");
  }

  return context;
};

export default useRide;
