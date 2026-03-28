export default function HeartbeatIcon({ className = "w-8 h-8", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Heart shape */}
      <path
        d="M32 56C32 56 8 40 8 22C8 14 14 8 22 8C26.4 8 30.4 10.4 32 14C33.6 10.4 37.6 8 42 8C50 8 56 14 56 22C56 40 32 56 32 56Z"
        fill={color}
        opacity="0.12"
      />
      <path
        d="M32 56C32 56 8 40 8 22C8 14 14 8 22 8C26.4 8 30.4 10.4 32 14C33.6 10.4 37.6 8 42 8C50 8 56 14 56 22C56 40 32 56 32 56Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* ECG/Pulse line across the heart */}
      <path
        d="M6 32H18L22 22L28 42L34 18L40 38L44 28H58"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
