export default function AnatomicalHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 450" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Main heart outline */}
      <path
        d="M200 410C200 410 50 300 35 190C25 130 50 70 100 55C130 47 160 55 185 80L200 100L215 80C240 55 270 47 300 55C350 70 375 130 365 190C350 300 200 410 200 410Z"
        stroke="#8B1A1A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      {/* Aorta */}
      <path d="M185 80C175 55 155 30 130 20C110 14 95 25 90 40C85 55 90 70 100 80" stroke="#8B1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M130 20C125 5 140 -5 155 8" stroke="#8B1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Pulmonary artery */}
      <path d="M215 80C225 55 245 30 270 20C290 14 305 25 310 40C315 55 310 70 300 80" stroke="#8B1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M270 20C275 5 260 -5 245 8" stroke="#8B1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Superior vena cava */}
      <path d="M160 55C150 35 145 15 150 0" stroke="#8B1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M240 55C250 35 260 15 258 0" stroke="#8B1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Ventricle division */}
      <path d="M200 100C198 160 195 250 200 350" stroke="#8B1A1A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* Left coronary artery */}
      <path d="M165 110C140 130 110 170 90 220" stroke="#8B1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M130 155C115 180 100 210 95 240" stroke="#8B1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M140 145C125 165 108 200 100 230" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Right coronary artery */}
      <path d="M235 110C260 130 290 170 310 220" stroke="#8B1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M270 155C285 180 300 210 305 240" stroke="#8B1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M260 145C275 165 292 200 300 230" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Small branches */}
      <path d="M110 190C95 200 80 225 75 250" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M120 210C105 230 90 260 85 280" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M290 190C305 200 320 225 325 250" stroke="#8B1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M280 210C295 230 310 260 315 280" stroke="#8B1A1A" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Auricle details */}
      <path d="M95 70C80 75 70 90 75 110C80 125 95 130 105 120" stroke="#8B1A1A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M305 70C320 75 330 90 325 110C320 125 305 130 295 120" stroke="#8B1A1A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  );
}
