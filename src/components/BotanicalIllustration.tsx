const BotanicalIllustration = () => {
  return (
    <div className="w-full h-full">
      <svg
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main stem */}
        <path
          d="M150 380 C150 320 140 280 150 220 C160 160 180 120 150 60"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-foreground/60"
        />
        
        {/* Left leaves - elegant flowing shapes */}
        <path
          d="M150 300 C100 280 60 290 40 250 C70 245 110 240 150 270"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/50"
        />
        <path
          d="M150 250 C90 225 50 240 30 200 C60 190 100 180 150 215"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/50"
        />
        <path
          d="M150 200 C100 175 70 185 50 150 C75 142 105 135 150 165"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/50"
        />
        <path
          d="M150 150 C110 130 85 140 70 110 C90 105 115 100 150 125"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/50"
        />
        
        {/* Right leaves */}
        <path
          d="M150 320 C200 300 240 310 260 270 C230 265 190 260 150 290"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/50"
        />
        <path
          d="M150 270 C210 245 250 255 270 215 C240 205 200 195 150 230"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/50"
        />
        <path
          d="M150 220 C200 195 230 205 250 170 C225 162 195 155 150 185"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/50"
        />
        <path
          d="M150 170 C190 150 215 158 230 130 C210 125 185 120 150 145"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/50"
        />
        
        {/* Top flower/bud */}
        <ellipse
          cx="150"
          cy="50"
          rx="25"
          ry="35"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/40"
        />
        <ellipse
          cx="150"
          cy="45"
          rx="15"
          ry="22"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          className="text-foreground/40"
        />
        
        {/* Decorative dots/speckles */}
        <circle cx="45" cy="265" r="1.5" fill="currentColor" className="text-foreground/30" />
        <circle cx="255" cy="285" r="1.5" fill="currentColor" className="text-foreground/30" />
        <circle cx="35" cy="210" r="1" fill="currentColor" className="text-foreground/30" />
        <circle cx="265" cy="225" r="1" fill="currentColor" className="text-foreground/30" />
        <circle cx="55" cy="155" r="1.5" fill="currentColor" className="text-foreground/30" />
        <circle cx="245" cy="175" r="1" fill="currentColor" className="text-foreground/30" />
        <circle cx="130" cy="40" r="1" fill="currentColor" className="text-foreground/30" />
        <circle cx="170" cy="35" r="1.5" fill="currentColor" className="text-foreground/30" />
      </svg>
    </div>
  );
};

export default BotanicalIllustration;