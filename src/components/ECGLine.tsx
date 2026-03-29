export default function ECGLine({ className = "" }: { className?: string }) {
  // Realistic ECG PQRST waveform pattern, repeated
  const segment = "l10,0 l3,-4 l3,4 l4,0 l2,-30 l3,45 l3,-20 l2,5 l6,0 l4,-3 l4,3 l15,0";
  const pattern = `M0,50 ${segment} ${segment} ${segment} ${segment} ${segment} ${segment} ${segment} ${segment}`;

  return (
    <svg
      viewBox="0 0 600 100"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={pattern}
        fill="none"
        stroke="hsl(0, 65%, 42%)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-ecg"
        opacity="0.35"
      />
    </svg>
  );
}
