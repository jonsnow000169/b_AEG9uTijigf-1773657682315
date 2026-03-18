'use client'

export function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative w-80">
      {/* Tape decoration */}
      <svg
        style={{
          position: 'absolute',
          top: '-24px',
          left: '-47px',
          width: '199px',
          height: '120px',
          zIndex: 10,
          overflow: 'visible',
        }}
        viewBox="0 0 160 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="tapeStripes"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-45)"
          >
            <rect width="10" height="10" fill="#F9AB3E" />
            <rect x="0" y="0" width="5" height="10" fill="#F0A030" opacity="0.5" />
          </pattern>
          <filter id="tapeShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="rgba(0,0,0,0.28)" />
          </filter>
          <clipPath id="tapeClip">
            <polygon points="96,0  118,0  24,110  0,110" />
          </clipPath>
        </defs>
        <g filter="url(#tapeShadow)">
          <polygon points="96,0  118,0  24,110  0,110" fill="url(#tapeStripes)" />
        </g>
        <g clipPath="url(#tapeClip)">
          <polygon points="100,0  110,0  16,110  6,110" fill="white" opacity="0.10" />
          <polygon points="96,0  101,0  7,110  0,110" fill="#C07810" opacity="0.20" />
          <polygon points="113,0  118,0  24,110  19,110" fill="#C07810" opacity="0.20" />
        </g>
      </svg>

      {/* Card */}
      <div className="bg-[#FFFDF4] rounded-t-md shadow-lg relative flex flex-col h-96">
        {/* Spirals */}
        <div className="flex justify-center gap-[10px] px-3 py-[18px] pb-[14px] border-b-[1.5px] border-[#E8E0D0]">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-[14px] h-[20px] border-[2.5px] border-[#D4C9B0] rounded-t-full"
              style={{
                borderRadius: '50% 50% 40% 40%',
              }}
            >
              <div
                className="absolute w-[2.5px] h-[6px] bg-[#D4C9B0] rounded-b"
                style={{
                  bottom: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="px-6 pt-4 pb-6 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-serif italic text-2xl font-normal text-[#2a2a2a] leading-[1.3] mb-3">
              {title}
            </h3>
            <div className="w-full h-px bg-[#D8CEB8] mb-3" />
            <p className="text-sm text-[#3a3a3a] leading-[1.7] font-normal mb-3">
              {description}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#3BBFDD] text-white border-none rounded-full px-9 py-[13px] text-[15px] font-semibold cursor-pointer tracking-[0.3px] flex items-center gap-2 shadow-lg hover:bg-[#29aece] transition-all hover:translate-y-[-1px]">
              Know More <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Torn paper bottom edge */}
      <svg
        className="block w-full"
        viewBox="0 0 320 44"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ marginTop: '-1px', lineHeight: 0 }}
      >
        <path
          d="M0,0 L320,0 L320,10
        L316,17 L312,8  L308,18 L303,9  L299,20 L294,10
        L290,22 L285,12 L280,24 L275,10 L270,21 L265,8
        L260,20 L255,28 L250,14 L245,23 L240,11
        L235,24 L229,32 L224,16 L219,26 L213,12
        L208,25 L202,33 L197,18 L191,28 L186,14
        L180,27 L175,36 L169,20 L164,30 L158,15
        L153,28 L147,37 L142,21 L136,31 L131,17
        L125,30 L120,38 L114,22 L109,32 L103,18
        L98,31  L92,39  L87,24  L81,33  L76,19
        L70,32  L65,40  L59,25  L54,34  L48,20
        L43,33  L37,41  L32,26  L26,35  L21,21
        L15,34  L10,42  L5,27   L0,20
        Z"
          fill="#FFFDF4"
        />
      </svg>
    </div>
  )
}
