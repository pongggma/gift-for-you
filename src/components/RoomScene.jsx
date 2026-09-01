export default function RoomScene() {
  return (
    <div
      className="room-scene"
      aria-label="A soft pink and white bedroom"
    >
      <div className="room-shadow" />
      <div className="room-light" />

      <svg
        viewBox="0 0 1000 680"
        className="room-art"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fff1f6" />
          </linearGradient>

          <linearGradient id="floor" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fffafc" />
            <stop offset="100%" stopColor="#efd9e3" />
          </linearGradient>

          <linearGradient id="bed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f4c5d7" />
          </linearGradient>

          <linearGradient id="blanket" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f9dce8" />
            <stop offset="100%" stopColor="#edb0c7" />
          </linearGradient>

          <linearGradient id="wood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8e7df" />
            <stop offset="100%" stopColor="#e2c0b5" />
          </linearGradient>

          <filter
            id="shadow"
            x="-30%"
            y="-30%"
            width="160%"
            height="170%"
          >
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="#a96f88"
              floodOpacity=".14"
            />
          </filter>
        </defs>

        {/* WALL */}
        <path
          d="M58 60 Q500 18 942 60 L942 472 Q500 515 58 472Z"
          fill="url(#wall)"
        />

        {/* FLOOR */}
        <path
          d="M58 472 L500 515 L942 472 L942 604 L500 680 L58 604Z"
          fill="url(#floor)"
        />

        {/* WINDOW */}
        <g filter="url(#shadow)">
          <rect
            x="110"
            y="110"
            width="220"
            height="178"
            rx="18"
            fill="#fff"
            stroke="#e7c3d1"
            strokeWidth="6"
          />

          <rect
            x="130"
            y="130"
            width="180"
            height="138"
            rx="10"
            fill="#f8e9ef"
          />

          <path
            d="M220 130V268M130 199H310"
            stroke="#fff"
            strokeWidth="7"
          />

          <circle
            cx="270"
            cy="157"
            r="12"
            fill="#f2b8ce"
            opacity=".65"
          />
        </g>

        {/* WALL ART */}
        <g filter="url(#shadow)">
          <rect
            x="700"
            y="110"
            width="130"
            height="155"
            rx="14"
            fill="#fff"
            stroke="#ead0da"
            strokeWidth="5"
          />

          <rect
            x="718"
            y="128"
            width="94"
            height="119"
            rx="9"
            fill="#fff6f9"
          />

          <path
            d="M765 148C742 164 738 188 765 208C792 188 788 164 765 148Z"
            fill="#f0aec5"
          />

          <path
            d="M765 150V224"
            stroke="#d78ca7"
            strokeWidth="3"
          />
        </g>

        {/* SIDE TABLE */}
        <g filter="url(#shadow)">
          <rect
            x="115"
            y="374"
            width="125"
            height="100"
            rx="16"
            fill="url(#wood)"
          />

          <rect
            x="125"
            y="362"
            width="105"
            height="22"
            rx="9"
            fill="#fff"
            stroke="#e7c8d2"
            strokeWidth="3"
          />

          <path
            d="M142 474V528M214 474V528"
            stroke="#bd8e80"
            strokeWidth="9"
            strokeLinecap="round"
          />

          {/* LAMP */}
          <path
            d="M177 354V322"
            stroke="#bd8e80"
            strokeWidth="5"
          />

          <path
            d="M154 326Q177 302 200 326L193 344H161Z"
            fill="#f2aec5"
          />
        </g>

        {/* BED BACK */}
        <g filter="url(#shadow)">
          <path
            d="M268 390L300 292H700L732 390Z"
            fill="#e4afc2"
          />

          {/* BED */}
          <rect
            x="288"
            y="332"
            width="424"
            height="150"
            rx="28"
            fill="url(#bed)"
            stroke="#ddb0c0"
            strokeWidth="5"
          />

          {/* BLANKET */}
          <path
            d="M288 397Q500 350 712 397V482H288Z"
            fill="url(#blanket)"
          />

          {/* PILLOWS */}
          <rect
            x="330"
            y="312"
            width="138"
            height="82"
            rx="25"
            fill="#fff"
            stroke="#ead5dc"
            strokeWidth="4"
            transform="rotate(-4 330 312)"
          />

          <rect
            x="528"
            y="312"
            width="138"
            height="82"
            rx="25"
            fill="#fff"
            stroke="#ead5dc"
            strokeWidth="4"
            transform="rotate(4 528 312)"
          />

          {/* BED LEGS */}
          <path
            d="M325 482V532M675 482V532"
            stroke="#c88da6"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>

        {/* RUG */}
        <g filter="url(#shadow)">
          <ellipse
            cx="500"
            cy="575"
            rx="250"
            ry="57"
            fill="#efd5df"
            opacity=".8"
          />

          <ellipse
            cx="500"
            cy="565"
            rx="225"
            ry="45"
            fill="#fff"
          />

          <ellipse
            cx="500"
            cy="565"
            rx="188"
            ry="32"
            fill="#fff3f7"
          />
        </g>

        {/* PLANT */}
        <g filter="url(#shadow)">
          <path
            d="M778 430C800 400 829 386 849 404C825 423 807 445 792 473Z"
            fill="#9dbda0"
          />

          <path
            d="M796 447C815 416 846 409 866 425C841 441 824 463 813 492Z"
            fill="#bdd4be"
          />

          <path
            d="M810 471C823 443 849 439 870 452C848 469 836 491 828 517Z"
            fill="#a9caa9"
          />

          <path
            d="M785 488H850L840 544H795Z"
            fill="#e3c1ce"
          />

          <path
            d="M782 489Q817 472 852 489"
            fill="#fff3f7"
          />
        </g>
      </svg>
    </div>
  )
}