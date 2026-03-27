const IconBase = ({ children, className = "h-5 w-5", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const HomeIcon = (props) => (
  <IconBase {...props}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 10.5V20h13V10.5" />
  </IconBase>
);

export const RideIcon = (props) => (
  <IconBase {...props}>
    <path d="M5 16.5h14" />
    <path d="M7 16.5 8.5 9h7L17 16.5" />
    <circle cx="8" cy="18" r="1.5" />
    <circle cx="16" cy="18" r="1.5" />
  </IconBase>
);

export const TrackIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 3v3" />
    <path d="M21 12h-3" />
    <path d="M12 21v-3" />
    <path d="M3 12h3" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </IconBase>
);

export const WalletIcon = (props) => (
  <IconBase {...props}>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 16.5v-9Z" />
    <path d="M4 8h14" />
    <path d="M16 13h4" />
    <circle cx="16.5" cy="13" r=".5" fill="currentColor" stroke="none" />
  </IconBase>
);

export const ProfileIcon = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 19c1.8-3 4.2-4.5 7-4.5s5.2 1.5 7 4.5" />
  </IconBase>
);

export const BellIcon = (props) => (
  <IconBase {...props}>
    <path d="M6.5 16.5h11" />
    <path d="M8 16.5V10a4 4 0 1 1 8 0v6.5" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </IconBase>
);

export const MoonIcon = (props) => (
  <IconBase {...props}>
    <path d="M18 14.5A6.5 6.5 0 0 1 9.5 6a7.5 7.5 0 1 0 8.5 8.5Z" />
  </IconBase>
);

export const SunIcon = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.2" />
    <path d="M12 19.3v2.2" />
    <path d="m4.9 4.9 1.6 1.6" />
    <path d="m17.5 17.5 1.6 1.6" />
    <path d="M2.5 12h2.2" />
    <path d="M19.3 12h2.2" />
    <path d="m4.9 19.1 1.6-1.6" />
    <path d="m17.5 6.5 1.6-1.6" />
  </IconBase>
);

export const PinIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 20s5-4.8 5-9a5 5 0 1 0-10 0c0 4.2 5 9 5 9Z" />
    <circle cx="12" cy="11" r="1.8" />
  </IconBase>
);

export const ClockIcon = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5v4.8l3 1.7" />
  </IconBase>
);

export const PlusIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </IconBase>
);

export const SparkIcon = (props) => (
  <IconBase {...props}>
    <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
  </IconBase>
);

export const PhoneIcon = (props) => (
  <IconBase {...props}>
    <path d="M7.5 4.5c.8 3.5 3.5 6.2 7 7" />
    <path d="M6.4 3.5h2a1 1 0 0 1 1 .8l.5 2.4a1 1 0 0 1-.3.9L8.3 9a12 12 0 0 0 6.7 6.7l1.4-1.3a1 1 0 0 1 .9-.3l2.4.5a1 1 0 0 1 .8 1v2c0 .5-.4.9-.9 1A16.5 16.5 0 0 1 5.5 4.4c.1-.5.5-.9.9-.9Z" />
  </IconBase>
);

export const ChatIcon = (props) => (
  <IconBase {...props}>
    <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v5A2.5 2.5 0 0 1 16.5 15H11l-4 3v-3H7.5A2.5 2.5 0 0 1 5 12.5v-5Z" />
  </IconBase>
);

export const ShieldIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 3 6 5.5v5c0 4.1 2.5 7.2 6 8.5 3.5-1.3 6-4.4 6-8.5v-5L12 3Z" />
    <path d="m9.5 12 1.6 1.6 3.4-3.7" />
  </IconBase>
);

export const StarIcon = (props) => (
  <IconBase {...props}>
    <path d="m12 4 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 9.2l5-.7L12 4Z" />
  </IconBase>
);

export const MenuIcon = (props) => (
  <IconBase {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </IconBase>
);

export const BikeVehicleIcon = (props) => (
  <IconBase {...props}>
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="17.5" cy="16.5" r="2.5" />
    <path d="M9 16.5 H14" />
    <path d="M17.5 16.5 L15 7 h2" />
    <path d="M14 16.5 L16 11 h1" />
    <path d="M9 16.5 L7.5 11 H11 l1.5 5.5" />
    <path d="M6 11 v-1 c0-1 1-1.5 2-1.5 h3.5 c1 0 1.5.5 1.5 1.5 v1" />
  </IconBase>
);

export const AutoVehicleIcon = (props) => (
  <IconBase {...props}>
    <circle cx="6.5" cy="16.5" r="2" />
    <circle cx="17.5" cy="16.5" r="2" />
    <path d="M4 16.5 V9 c0-1.7 1.3-3 3-3 h6 c1.1 0 2 .7 2.5 1.7 L18 12.5 h1.5" />
    <path d="M8.5 16.5 H15" />
    <path d="M11.5 6 V16.5" />
    <path d="M15 16.5 l2.5-4" />
    <path d="M14 11.5 h2.5" />
  </IconBase>
);

export const CarVehicleIcon = (props) => (
  <IconBase {...props}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </IconBase>
);

export const CardPayIcon = (props) => (
  <IconBase {...props}>
    <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
    <path d="M3.5 10.2h17" />
    <path d="M7.5 14.3h3.4" />
  </IconBase>
);

export const CashIcon = (props) => (
  <IconBase {...props}>
    <rect x="3" y="7" width="18" height="10" rx="2.5" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M7 10c0 1.1-.9 2-2 2" />
    <path d="M17 14c0-1.1.9-2 2-2" />
  </IconBase>
);
