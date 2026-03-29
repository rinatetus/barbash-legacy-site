export default function HeartbeatIcon({ className = "w-8 h-8", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Anatomical heart silhouette — contour lines only, no fill */}
      {/* Aortic arch */}
      <path
        d="M60 108C60 108 20 82 20 48C20 34 28 22 40 20C46 19 52 22 56 28L60 36L64 28C68 22 74 19 80 20C92 22 100 34 100 48C100 82 60 108 60 108Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.15"
      />
      {/* Aorta arch detail */}
      <path
        d="M52 30C48 18 42 12 36 14C28 16 26 28 32 38"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.12"
      />
      <path
        d="M68 30C72 18 78 12 84 14C92 16 94 28 88 38"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.12"
      />
      {/* Ventricle partition */}
      <path
        d="M60 36V90"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.08"
      />
      {/* Coronary arteries */}
      <path
        d="M40 44C46 48 52 56 54 68"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.1"
      />
      <path
        d="M80 44C74 48 68 56 66 68"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.1"
      />
    </svg>
  );
}
