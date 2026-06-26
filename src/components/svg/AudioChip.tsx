import { motion } from "motion/react"

type Props = {
  className?: string
}

const PARTICLE_VARIANTS = ["pf-a", "pf-b", "pf-c", "pf-d", "pf-e"]

const PARTICLE_DELAYS = [
  0, 0.4, 0.8, 1.2, 0.2, 0.6, 1.0, 1.4, 0.3, 0.7, 1.1, 1.5, 0.5, 0.9, 1.3,
  1.7, 0.1, 0.5, 0.9, 1.3, 0.2, 0.6, 1.0, 1.4, 0.4, 0.8, 1.2, 1.6, 0.3,
  0.7, 1.1, 1.5, 0.5, 0.9, 1.3, 1.7, 0.0, 0.4, 0.8, 1.2, 0.2, 0.6, 1.0,
  1.4, 0.3, 0.7, 1.1, 1.5, 0.5, 0.9, 1.3,
]

const PARTICLE_DURATIONS = [
  5.0, 6.2, 4.6, 7.0, 5.4, 6.6, 4.8, 6.0, 5.8, 6.4, 4.4, 7.2, 5.2, 6.8,
  4.6, 6.0, 5.6, 6.4, 4.8, 6.6, 5.0, 6.2, 4.4, 7.0, 5.8, 6.6, 4.6, 6.0,
  5.2, 6.4, 4.8, 6.8, 5.4, 6.2, 4.6, 6.0, 5.6, 6.4, 4.8, 7.2, 5.0, 6.6,
  4.4, 6.0, 5.8, 6.4, 4.6, 6.8, 5.2, 6.2, 4.8,
]

function particleClass(i: number) {
  return `${PARTICLE_VARIANTS[i % PARTICLE_VARIANTS.length]}-${i}`
}

export default function AudioChip({ className = "w-100" }: Props) {
  return (
    <div className="relative">
      <style>{`
        @keyframes chipFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes bgGlowBreathe {
          0%, 100% { opacity: 0.22; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.05); }
        }
        @keyframes particleA {
          0%, 100% { transform: translate(0, 0); opacity: 0.85; }
          25% { transform: translate(2px, -3px); opacity: 1; }
          50% { transform: translate(-1.5px, -5px); opacity: 0.9; }
          75% { transform: translate(3px, -1.5px); opacity: 1; }
        }
        @keyframes particleB {
          0%, 100% { transform: translate(0, 0); opacity: 0.9; }
          33% { transform: translate(-3px, 2px); opacity: 1; }
          66% { transform: translate(2px, -4px); opacity: 0.8; }
        }
        @keyframes particleC {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          50% { transform: translate(2.5px, 3px); opacity: 0.7; }
        }
        @keyframes particleD {
          0%, 100% { transform: translate(0, 0); opacity: 0.9; }
          20% { transform: translate(3px, -1px); opacity: 1; }
          40% { transform: translate(-2px, 3px); opacity: 0.95; }
          60% { transform: translate(1.5px, -4px); opacity: 0.8; }
          80% { transform: translate(-3px, -2px); opacity: 1; }
        }
        @keyframes particleE {
          0%, 100% { transform: translate(0, 0); opacity: 1; }
          50% { transform: translate(-2px, -2.5px); opacity: 0.85; }
        }
        @keyframes pinPulse {
          0%, 100% { opacity: 0.55; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes pinGlowPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes edgeShimmer {
          0%, 100% { stroke-opacity: 0.55; }
          50% { stroke-opacity: 1; }
        }
        @keyframes corePulse {
          0%, 100% { fill-opacity: 0.69; }
          50% { fill-opacity: 0.9; }
        }

        .ac-chip-float {
          animation: chipFloat 5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .ac-bg-glow {
          animation: bgGlowBreathe 4s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .ac-edge-shimmer {
          animation: edgeShimmer 3s ease-in-out infinite;
        }
        .ac-core-pulse {
          animation: corePulse 2.8s ease-in-out infinite;
        }
        .ac-pin-1 { animation: pinPulse 2.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        .ac-pin-2 { animation: pinPulse 2.2s ease-in-out infinite; animation-delay: 0.25s; transform-box: fill-box; transform-origin: center; }
        .ac-pin-3 { animation: pinPulse 2.2s ease-in-out infinite; animation-delay: 0.5s; transform-box: fill-box; transform-origin: center; }
        .ac-pin-glow-1 { animation: pinGlowPulse 2.2s ease-in-out infinite; }
        .ac-pin-glow-2 { animation: pinGlowPulse 2.2s ease-in-out infinite; animation-delay: 0.25s; }
        .ac-pin-glow-3 { animation: pinGlowPulse 2.2s ease-in-out infinite; animation-delay: 0.5s; }

        .pf-a-0, .pf-a-5, .pf-a-10, .pf-a-15, .pf-a-20, .pf-a-25, .pf-a-30, .pf-a-35, .pf-a-40, .pf-a-45, .pf-a-50 { animation-name: particleA; }
        .pf-b-1, .pf-b-6, .pf-b-11, .pf-b-16, .pf-b-21, .pf-b-26, .pf-b-31, .pf-b-36, .pf-b-41, .pf-b-46 { animation-name: particleB; }
        .pf-c-2, .pf-c-7, .pf-c-12, .pf-c-17, .pf-c-22, .pf-c-27, .pf-c-32, .pf-c-37, .pf-c-42, .pf-c-47 { animation-name: particleC; }
        .pf-d-3, .pf-d-8, .pf-d-13, .pf-d-18, .pf-d-23, .pf-d-28, .pf-d-33, .pf-d-38, .pf-d-43, .pf-d-48 { animation-name: particleD; }
        .pf-e-4, .pf-e-9, .pf-e-14, .pf-e-19, .pf-e-24, .pf-e-29, .pf-e-34, .pf-e-39, .pf-e-44, .pf-e-49 { animation-name: particleE; }

        [class*="pf-"] {
          transform-box: fill-box;
          transform-origin: center;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>

      <motion.svg
        className={className}
        width="362"
        height="286"
        viewBox="0 0 362 286"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <g id="voice-chip">
          <g id="chip-group">
            <g id="bg-glow" className="ac-bg-glow">
              <g id="Vector 6" opacity="0.3" filter="url(#filter0_df_2051_266)">
                <path d="M261 171H84.5L10 10H329.5L261 171Z" fill="url(#paint0_linear_2051_266)" shape-rendering="crispEdges" />
              </g>
            </g>
            <g id="base">
              <foreignObject x="105.602" y="199.601" width="143.149" height="86.0284"><div style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_2051_266_clip_path)",
                height: "100%",
                width: "100%"
              }}></div></foreignObject><rect id="Rectangle 1" data-figma-bg-blur-radius="4" x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 102.616 243.048)" fill="black" fill-opacity="0.31" stroke="url(#paint1_linear_2051_266)" />
              <foreignObject x="215.602" y="138.601" width="143.149" height="86.0284"><div style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_1_2051_266_clip_path)",
                height: "100%",
                width: "100%"
              }}></div></foreignObject><rect id="Rectangle 2" data-figma-bg-blur-radius="4" x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 212.616 182.048)" fill="black" fill-opacity="0.31" stroke="url(#paint2_linear_2051_266)" />
              <foreignObject x="105.602" y="74.6005" width="143.149" height="86.0284"><div style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_2_2051_266_clip_path)",
                height: "100%",
                width: "100%"
              }}></div></foreignObject><rect id="Rectangle 3" data-figma-bg-blur-radius="4" x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 102.616 118.048)" fill="black" fill-opacity="0.31" stroke="url(#paint3_linear_2051_266)" />
              <foreignObject x="3.60229" y="138.601" width="143.149" height="86.0284"><div style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_3_2051_266_clip_path)",
                height: "100%",
                width: "100%"
              }}></div></foreignObject><rect id="Rectangle 4" data-figma-bg-blur-radius="4" x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 0.616025 182.048)" fill="black" fill-opacity="0.31" stroke="url(#paint4_linear_2051_266)" />
            </g>
            <g id="bottom">
              <g id="Vector 4" filter="url(#filter5_d_2051_266)">
                <path d="M105.5 208L114 202.5V153L105.5 146.5V138.5L108.5 137H125.5L132.5 141.5H222L228 137H246.5L249 140V148L240.5 153V204L249 209.5V216.5L246.5 219.5H228L222 215H132.5L123.5 219.5H108.5L105.5 216.5V208Z" fill="#342479" />
              </g>
              <path id="Vector 5" d="M125.5 199.997L131.66 195.93V159.33L125.5 154.524V148.609L127.674 147.5H139.995L145.068 150.827H209.932L214.28 147.5H227.688L229.5 149.718V155.633L223.34 159.33V197.039L229.5 201.106V206.282L227.688 208.5H214.28L209.932 205.173H145.068L138.545 208.5H127.674L125.5 206.282V199.997Z" fill="#100629" />
            </g>
            <motion.g
              id="chip"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <path id="edges" d="M84.5 181.5V174.5V173.5L102 183.5H115.5L152.5 205L153 213.5L172 224.5H179.5L198 213.5L198.5 212.5L198 205L234.5 183.5H250L267 171.5V179L250 191.5H236L199 213.5V221L179.5 232H172L152 220V213L114.5 191H100L84.5 181.5Z" fill="#392D67" />
              <g id="pins">
                <circle className="ac-pin-glow-1" cx="213.5" cy="201.5" r="1" fill="url(#paint5_linear_2051_266)" />
                <circle className="ac-pin-1" cx="213.5" cy="201.5" r="1" fill="url(#paint5_linear_2051_266)" />
                <circle className="ac-pin-glow-2" cx="218.5" cy="198.5" r="1" fill="url(#paint6_linear_2051_266)" />
                <circle className="ac-pin-2" cx="218.5" cy="198.5" r="1" fill="url(#paint6_linear_2051_266)" />
                <circle className="ac-pin-glow-3" cx="223.5" cy="195.5" r="1" fill="url(#paint7_linear_2051_266)" />
                <circle className="ac-pin-3" cx="223.5" cy="195.5" r="1" fill="url(#paint7_linear_2051_266)" />
              </g>
              <g id="pins_2">
                <circle className="ac-pin-glow-2" cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 137.5 199.5)" fill="url(#paint8_linear_2051_266)" />
                <circle className="ac-pin-2" cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 137.5 199.5)" fill="url(#paint8_linear_2051_266)" />
                <circle className="ac-pin-glow-1" cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 132.5 196.5)" fill="url(#paint9_linear_2051_266)" />
                <circle className="ac-pin-1" cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 132.5 196.5)" fill="url(#paint9_linear_2051_266)" />
                <circle className="ac-pin-glow-3" cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 127.5 193.5)" fill="url(#paint10_linear_2051_266)" />
                <circle className="ac-pin-3" cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 127.5 193.5)" fill="url(#paint10_linear_2051_266)" />
              </g>
              <g id="top">
                <g id="Vector 1">
                  <path d="M152.5 129.5V136.5L115.942 157.249L102 157.5L84.5 168V173.5L102 183.5H115.5L152.5 205V213.5L172 224.5H179.5L198 213.5V205L234 183.5H250L266.5 171.5V167.5L248.5 157.5H234L198 136.5V128L179.5 117.5H172L152.5 129.5Z" fill="#180E26" />
                  <motion.path
                    d="M115.5 157.5L115.942 157.249M115.942 157.249L152.5 136.5V129.5L172 117.5H179.5L198 128V136.5L234 157.5H248.5L266.5 167.5V171.5L250 183.5H234L198 205V213.5L179.5 224.5H172L152.5 213.5V205L115.5 183.5H102L84.5 173.5V168L102 157.5L115.942 157.249Z"
                    stroke="url(#paint11_linear_2051_266)"
                    animate={{ strokeOpacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </g>
                <path id="Vector 3" className="ac-core-pulse" d="M159.174 141.023V145.995L133.275 160.733L123.398 160.911L111 168.369V172.276L123.398 179.379H132.962L159.174 194.65V200.687L172.989 208.5H178.302L191.409 200.687V194.65L216.913 179.379H228.248L239 171.5V168.5L227.185 160.911H216.913L191.409 145.995V139.958L178.302 132.5H172.989L159.174 141.023Z" fill="#3C2758" fill-opacity="0.69" />
              </g>
              <path id="logo" d="M196.483 161.576C196.961 161.852 197.737 161.852 198.215 161.576C198.693 161.299 198.693 160.852 198.215 160.576L197.349 161.076L196.483 161.576ZM190.95 159.583L191.816 159.083L191.67 159L191.486 158.948L190.95 159.583ZM183.811 159.316L184.677 158.816L184.617 158.782L184.55 158.752L183.811 159.316ZM179.996 161.518L180.862 161.018L180.803 160.984L180.736 160.955L179.996 161.518ZM194.681 169.997L195.605 169.533L195.577 169.514L195.547 169.497L194.681 169.997ZM189.913 172.75L189.047 173.25L189.077 173.267L189.109 173.283L189.913 172.75ZM171.081 161.878L171.947 161.378L171.898 161.349L171.843 161.324L171.081 161.878ZM163.452 166.282L164.318 165.782L164.268 165.754L164.213 165.729L163.452 166.282ZM182.284 177.155L181.417 177.655L181.447 177.672L181.479 177.688L182.284 177.155ZM177.992 179.633L178.916 179.168L178.888 179.15L178.858 179.133L177.992 179.633ZM159.253 173.494L160.119 172.994L160.06 172.96L159.993 172.931L159.253 173.494ZM169.792 179.579L170.752 179.139L170.708 179.108L170.658 179.079L169.792 179.579ZM165.978 181.781L165.112 182.281L165.161 182.31L165.216 182.335L165.978 181.781ZM159.24 177.891L160.106 177.391L160.04 177.353L159.964 177.321L159.24 177.891ZM160.72 182.223C161.198 182.5 161.974 182.5 162.452 182.223C162.93 181.947 162.93 181.5 162.452 181.223L161.586 181.723L160.72 182.223ZM197.349 161.076L198.215 160.576L193.723 157.982L192.857 158.482L191.991 158.982L196.483 161.576L197.349 161.076ZM192.857 158.482L193.723 157.982C193.352 157.768 192.701 157.475 191.928 157.34C191.528 157.27 191.031 157.231 190.508 157.306C189.961 157.385 189.488 157.571 189.129 157.85L190.11 158.273L191.091 158.696C191.139 158.659 191.142 158.673 191.097 158.679C191.075 158.682 191.106 158.673 191.219 158.693C191.331 158.713 191.471 158.752 191.623 158.81C191.773 158.867 191.902 158.931 191.991 158.982L192.857 158.482ZM190.11 158.273L189.129 157.85C188.799 158.105 188.603 158.391 188.586 158.696C188.569 158.997 188.729 159.257 188.939 159.461C189.155 159.669 189.444 159.823 189.761 159.913C190.081 160.003 190.448 160.041 190.797 160.041C191.146 160.041 191.512 160.003 191.832 159.913C192.149 159.823 192.438 159.669 192.654 159.461C192.864 159.257 193.024 158.997 193.007 158.696C192.99 158.391 192.794 158.105 192.464 157.85L191.483 158.273L190.502 158.696C190.459 158.669 190.466 158.682 190.508 158.694C190.527 158.699 190.484 158.691 190.394 158.672C190.301 158.652 190.176 158.629 190.046 158.602C189.918 158.576 189.831 158.553 189.761 158.536C189.694 158.52 189.693 158.52 189.761 158.536L190.684 159.061L191.607 159.586C191.641 159.563 191.613 159.581 191.536 159.594C191.484 159.603 191.527 159.599 191.65 159.609C191.776 159.62 191.926 159.637 192.085 159.659C192.241 159.681 192.349 159.7 192.43 159.715C192.473 159.723 192.476 159.724 192.43 159.715L191.507 159.19L190.584 158.665C190.547 158.689 190.582 158.669 190.671 158.657C190.722 158.65 190.679 158.654 190.561 158.645C190.439 158.636 190.286 158.62 190.131 158.599C189.979 158.578 189.873 158.561 189.793 158.547C189.752 158.541 189.75 158.54 189.793 158.547L190.716 159.072L191.639 159.597C191.672 159.575 191.639 159.595 191.555 159.61C191.505 159.62 191.546 159.614 191.422 159.625C191.296 159.637 191.144 159.654 190.984 159.676C190.829 159.697 190.721 159.716 190.639 159.731C190.597 159.739 190.593 159.74 190.639 159.731L189.716 159.206L188.793 158.681C188.762 158.702 188.792 158.682 188.876 158.668C188.926 158.659 188.886 158.663 189.007 158.654C189.13 158.645 189.279 158.629 189.435 158.611C189.588 158.593 189.694 158.578 189.773 158.566C189.814 158.561 189.816 158.561 189.773 158.566L190.696 159.091L191.619 159.616C191.649 159.597 191.62 159.614 191.555 159.626C191.514 159.633 191.546 159.629 191.428 159.638C191.308 159.648 191.165 159.662 191.013 159.679C190.866 159.696 190.764 159.71 190.687 159.721C190.649 159.727 190.646 159.727 190.687 159.721L189.764 159.196L188.841 158.671C188.811 158.69 188.838 158.673 188.903 158.661C188.943 158.654 188.903 158.658 189.018 158.649C189.135 158.64 189.277 158.625 189.428 158.607C189.575 158.59 189.677 158.576 189.755 158.565C189.794 158.561 189.796 158.56 189.755 158.565L190.678 159.09L191.601 159.615C191.631 159.596 191.602 159.613 191.537 159.625C191.496 159.632 191.528 159.628 191.41 159.637C191.29 159.647 191.147 159.661 190.996 159.678C190.849 159.695 190.747 159.709 190.669 159.72C190.631 159.725 190.629 159.726 190.669 159.72L189.746 159.195L188.823 158.67C188.792 158.69 188.819 158.672 188.886 158.66C188.927 158.653 188.886 158.658 189.005 158.648C189.125 158.638 189.27 158.622 189.423 158.604C189.572 158.587 189.675 158.572 189.754 158.561C189.793 158.556 189.795 158.556 189.754 158.561L190.677 159.086L191.6 159.611C191.629 159.592 191.601 159.609 191.539 159.621C191.498 159.628 191.527 159.624 191.415 159.633C191.298 159.643 191.162 159.656 191.014 159.673C190.871 159.69 190.772 159.703 190.696 159.715C190.66 159.72 190.657 159.721 190.696 159.715L189.773 159.19L188.85 158.665C188.823 158.681 188.847 158.667 188.901 158.658C188.937 158.652 188.901 158.655 189.005 158.647C189.115 158.638 189.246 158.625 189.387 158.61C189.524 158.595 189.619 158.582 189.691 158.572C189.726 158.567 189.728 158.567 189.691 158.572L190.614 159.097L191.537 159.622C191.564 159.604 191.539 159.619 191.481 159.629C191.444 159.635 191.47 159.633 191.371 159.641C191.264 159.65 191.137 159.661 190.998 159.676C190.864 159.691 190.771 159.703 190.7 159.713C190.667 159.718 190.665 159.718 190.7 159.713L189.777 159.188L188.854 158.663C188.83 158.678 188.85 158.665 188.899 158.657C188.932 158.652 188.899 158.654 188.992 158.647C189.092 158.64 189.21 158.628 189.34 158.615C189.466 158.602 189.554 158.591 189.621 158.582C189.653 158.578 189.654 158.577 189.621 158.582L190.544 159.107L191.467 159.632C191.493 159.615 191.469 159.629 191.416 159.638C191.381 159.644 191.405 159.642 191.314 159.649C191.215 159.656 191.099 159.666 190.97 159.679C190.846 159.692 190.76 159.703 190.694 159.712C190.664 159.716 190.662 159.717 190.694 159.712L189.771 159.187L188.848 158.662C188.825 158.676 188.844 158.664 188.889 158.656C188.921 158.651 188.89 158.654 188.978 158.646C189.073 158.638 189.184 158.626 189.307 158.613C189.426 158.601 189.509 158.591 189.573 158.582C189.604 158.578 189.605 158.578 189.573 158.582L190.496 159.107L191.419 159.632C191.444 159.616 191.422 159.628 191.371 159.637C191.339 159.642 191.36 159.641 191.276 159.647C191.184 159.654 191.077 159.663 190.957 159.675C190.842 159.687 190.762 159.697 190.699 159.706C190.671 159.71 190.669 159.71 190.699 159.706L189.776 159.181L188.853 158.656C188.832 158.668 188.848 158.658 188.886 158.652C188.913 158.648 188.888 158.65 188.962 158.643C189.044 158.636 189.139 158.626 189.247 158.615C189.351 158.605 189.424 158.596 189.481 158.589C189.508 158.586 189.509 158.586 189.481 158.589L190.404 159.114L191.327 159.639C191.349 159.625 191.331 159.635 191.288 159.643C191.261 159.648 191.281 159.647 191.211 159.652C191.135 159.658 191.046 159.666 190.945 159.676C190.849 159.686 190.78 159.694 190.726 159.701C190.702 159.704 190.701 159.704 190.726 159.701L189.803 159.176L188.88 158.651C188.861 159.048 189.064 159.474 189.488 159.736C189.488 159.736 189.488 159.736 189.488 159.736L190.411 160.261L191.334 160.786C191.758 161.048 192.323 161.14 192.82 161.027C193.314 160.915 193.659 160.616 193.708 160.236C193.708 160.236 193.708 160.236 193.708 160.236L192.785 159.711L191.862 159.186C191.862 159.186 191.862 159.186 191.862 159.186L192.785 159.711L193.708 160.236Z" />
            </motion.g>
          </g>
          <g id="sparkle">
            <g id="glow-balls">
              <g
                id="glow-balls_2"
                className={particleClass(0)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[0]}s`, animationDelay: `${PARTICLE_DELAYS[0]}s` }}
              >
                <g id="Ellipse 9" filter="url(#filter6_f_2051_266)">
                  <circle cx="147.5" cy="77.5" r="2" fill="white" />
                </g>
                <circle id="Ellipse 10" cx="147.5" cy="77.5" r="2" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_3"
                className={particleClass(1)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[1]}s`, animationDelay: `${PARTICLE_DELAYS[1]}s` }}
              >
                <g id="Ellipse 9_2" filter="url(#filter7_f_2051_266)">
                  <circle cx="261.5" cy="115.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_2" cx="261.5" cy="115.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_4"
                className={particleClass(2)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[2]}s`, animationDelay: `${PARTICLE_DELAYS[2]}s` }}
              >
                <g id="Ellipse 9_3" filter="url(#filter8_f_2051_266)">
                  <circle cx="209.5" cy="183.5" r="2" fill="white" />
                </g>
                <circle id="Ellipse 10_3" cx="209.5" cy="183.5" r="2" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_5"
                className={particleClass(3)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[3]}s`, animationDelay: `${PARTICLE_DELAYS[3]}s` }}
              >
                <g id="Ellipse 9_4" filter="url(#filter9_f_2051_266)">
                  <circle cx="127.5" cy="183.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_4" cx="127.5" cy="183.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_6"
                className={particleClass(4)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[4]}s`, animationDelay: `${PARTICLE_DELAYS[4]}s` }}
              >
                <g id="Ellipse 9_5" filter="url(#filter10_f_2051_266)">
                  <circle cx="93.5" cy="140.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_5" cx="93.5" cy="140.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_7"
                className={particleClass(5)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[5]}s`, animationDelay: `${PARTICLE_DELAYS[5]}s` }}
              >
                <g id="Ellipse 9_6" filter="url(#filter11_f_2051_266)">
                  <circle cx="147.5" cy="114.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_6" cx="147.5" cy="114.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_8"
                className={particleClass(6)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[6]}s`, animationDelay: `${PARTICLE_DELAYS[6]}s` }}
              >
                <g id="Ellipse 9_7" filter="url(#filter12_f_2051_266)">
                  <circle cx="235.5" cy="149.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_7" cx="235.5" cy="149.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_9"
                className={particleClass(7)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[7]}s`, animationDelay: `${PARTICLE_DELAYS[7]}s` }}
              >
                <g id="Ellipse 9_8" filter="url(#filter13_f_2051_266)">
                  <circle cx="174.5" cy="56.5" r="1" fill="white" />
                </g>
                <circle id="Ellipse 10_8" cx="174.5" cy="56.5" r="1" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_10"
                className={particleClass(8)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[8]}s`, animationDelay: `${PARTICLE_DELAYS[8]}s` }}
              >
                <g id="Ellipse 9_9" filter="url(#filter14_f_2051_266)">
                  <circle cx="248.75" cy="124.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_9" cx="248.75" cy="124.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_11"
                className={particleClass(9)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[9]}s`, animationDelay: `${PARTICLE_DELAYS[9]}s` }}
              >
                <g id="Ellipse 9_10" filter="url(#filter15_f_2051_266)">
                  <circle cx="242.75" cy="138.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_10" cx="242.75" cy="138.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_12"
                className={particleClass(10)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[10]}s`, animationDelay: `${PARTICLE_DELAYS[10]}s` }}
              >
                <g id="Ellipse 9_11" filter="url(#filter16_f_2051_266)">
                  <circle cx="224.75" cy="134.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_11" cx="224.75" cy="134.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_13"
                className={particleClass(11)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[11]}s`, animationDelay: `${PARTICLE_DELAYS[11]}s` }}
              >
                <g id="Ellipse 9_12" filter="url(#filter17_f_2051_266)">
                  <circle cx="208.75" cy="111.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_12" cx="208.75" cy="111.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_14"
                className={particleClass(12)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[12]}s`, animationDelay: `${PARTICLE_DELAYS[12]}s` }}
              >
                <g id="Ellipse 9_13" filter="url(#filter18_f_2051_266)">
                  <circle cx="194.75" cy="133.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_13" cx="194.75" cy="133.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_15"
                className={particleClass(13)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[13]}s`, animationDelay: `${PARTICLE_DELAYS[13]}s` }}
              >
                <g id="Ellipse 9_14" filter="url(#filter19_f_2051_266)">
                  <circle cx="162.75" cy="187.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_14" cx="162.75" cy="187.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_16"
                className={particleClass(14)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[14]}s`, animationDelay: `${PARTICLE_DELAYS[14]}s` }}
              >
                <g id="Ellipse 9_15" filter="url(#filter20_f_2051_266)">
                  <circle cx="167.75" cy="135.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_15" cx="167.75" cy="135.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_17"
                className={particleClass(15)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[15]}s`, animationDelay: `${PARTICLE_DELAYS[15]}s` }}
              >
                <g id="Ellipse 9_16" filter="url(#filter21_f_2051_266)">
                  <circle cx="182.75" cy="144.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_16" cx="182.75" cy="144.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_18"
                className={particleClass(16)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[16]}s`, animationDelay: `${PARTICLE_DELAYS[16]}s` }}
              >
                <g id="Ellipse 9_17" filter="url(#filter22_f_2051_266)">
                  <circle cx="197.75" cy="153.75" r="0.25" fill="white" />
                </g>
                <circle id="Ellipse 10_17" cx="197.75" cy="153.75" r="0.25" fill="white" fill-opacity="0.92" />
              </g>
            </g>
            <g id="glow-balls_19" opacity="0.49">
              <g
                id="glow-balls_20"
                className={particleClass(17)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[17]}s`, animationDelay: `${PARTICLE_DELAYS[17]}s` }}
              >
                <g id="Ellipse 9_18" filter="url(#filter23_f_2051_266)">
                  <circle cx="151.594" cy="103.938" r="1.49434" fill="white" />
                </g>
                <circle id="Ellipse 10_18" cx="151.594" cy="103.938" r="1.49434" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_21"
                className={particleClass(18)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[18]}s`, animationDelay: `${PARTICLE_DELAYS[18]}s` }}
              >
                <g id="Ellipse 9_19" filter="url(#filter24_f_2051_266)">
                  <circle cx="236.772" cy="132.33" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_19" cx="236.772" cy="132.33" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_22"
                className={particleClass(19)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[19]}s`, animationDelay: `${PARTICLE_DELAYS[19]}s` }}
              >
                <g id="Ellipse 9_20" filter="url(#filter25_f_2051_266)">
                  <circle cx="197.919" cy="183.138" r="1.49434" fill="white" />
                </g>
                <circle id="Ellipse 10_20" cx="197.919" cy="183.138" r="1.49434" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_23"
                className={particleClass(20)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[20]}s`, animationDelay: `${PARTICLE_DELAYS[20]}s` }}
              >
                <g id="Ellipse 9_21" filter="url(#filter26_f_2051_266)">
                  <circle cx="136.651" cy="183.138" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_21" cx="136.651" cy="183.138" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_24"
                className={particleClass(21)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[21]}s`, animationDelay: `${PARTICLE_DELAYS[21]}s` }}
              >
                <g id="Ellipse 9_22" filter="url(#filter27_f_2051_266)">
                  <circle cx="111.247" cy="151.009" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_22" cx="111.247" cy="151.009" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_25"
                className={particleClass(22)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[22]}s`, animationDelay: `${PARTICLE_DELAYS[22]}s` }}
              >
                <g id="Ellipse 9_23" filter="url(#filter28_f_2051_266)">
                  <circle cx="151.594" cy="131.583" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_23" cx="151.594" cy="131.583" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_26"
                className={particleClass(23)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[23]}s`, animationDelay: `${PARTICLE_DELAYS[23]}s` }}
              >
                <g id="Ellipse 9_24" filter="url(#filter29_f_2051_266)">
                  <circle cx="217.345" cy="157.734" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_24" cx="217.345" cy="157.734" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_27"
                className={particleClass(24)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[24]}s`, animationDelay: `${PARTICLE_DELAYS[24]}s` }}
              >
                <g id="Ellipse 9_25" filter="url(#filter30_f_2051_266)">
                  <circle cx="171.768" cy="88.2472" r="0.74717" fill="white" />
                </g>
                <circle id="Ellipse 10_25" cx="171.768" cy="88.2472" r="0.74717" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_28"
                className={particleClass(25)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[25]}s`, animationDelay: `${PARTICLE_DELAYS[25]}s` }}
              >
                <g id="Ellipse 9_26" filter="url(#filter31_f_2051_266)">
                  <circle cx="227.245" cy="139.242" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_26" cx="227.245" cy="139.242" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_29"
                className={particleClass(26)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[26]}s`, animationDelay: `${PARTICLE_DELAYS[26]}s` }}
              >
                <g id="Ellipse 9_27" filter="url(#filter32_f_2051_266)">
                  <circle cx="222.762" cy="149.702" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_27" cx="222.762" cy="149.702" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_30"
                className={particleClass(27)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[27]}s`, animationDelay: `${PARTICLE_DELAYS[27]}s` }}
              >
                <g id="Ellipse 9_28" filter="url(#filter33_f_2051_266)">
                  <circle cx="209.313" cy="146.713" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_28" cx="209.313" cy="146.713" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_31"
                className={particleClass(31)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[31]}s`, animationDelay: `${PARTICLE_DELAYS[31]}s` }}
              >
                <g id="Ellipse 9_29" filter="url(#filter34_f_2051_266)">
                  <circle cx="197.359" cy="129.528" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_29" cx="197.359" cy="129.528" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_32"
                className={particleClass(32)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[32]}s`, animationDelay: `${PARTICLE_DELAYS[32]}s` }}
              >
                <g id="Ellipse 9_30" filter="url(#filter35_f_2051_266)">
                  <circle cx="186.898" cy="145.966" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_30" cx="186.898" cy="145.966" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_33"
                className={particleClass(33)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[33]}s`, animationDelay: `${PARTICLE_DELAYS[33]}s` }}
              >
                <g id="Ellipse 9_31" filter="url(#filter36_f_2051_266)">
                  <circle cx="162.989" cy="186.313" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_31" cx="162.989" cy="186.313" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_34"
                className={particleClass(34)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[34]}s`, animationDelay: `${PARTICLE_DELAYS[34]}s` }}
              >
                <g id="Ellipse 9_32" filter="url(#filter37_f_2051_266)">
                  <circle cx="166.725" cy="147.46" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_32" cx="166.725" cy="147.46" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_35"
                className={particleClass(35)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[35]}s`, animationDelay: `${PARTICLE_DELAYS[35]}s` }}
              >
                <g id="Ellipse 9_33" filter="url(#filter38_f_2051_266)">
                  <circle cx="177.932" cy="154.185" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_33" cx="177.932" cy="154.185" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_36"
                className={particleClass(36)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[36]}s`, animationDelay: `${PARTICLE_DELAYS[36]}s` }}
              >
                <g id="Ellipse 9_34" filter="url(#filter39_f_2051_266)">
                  <circle cx="189.14" cy="160.909" r="0.186792" fill="white" />
                </g>
                <circle id="Ellipse 10_34" cx="189.14" cy="160.909" r="0.186792" fill="white" fill-opacity="0.92" />
              </g>
            </g>
            <g id="glow-balls_37" opacity="0.7">
              <g
                id="glow-balls_38"
                className={particleClass(37)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[37]}s`, animationDelay: `${PARTICLE_DELAYS[37]}s` }}
              >
                <g id="Ellipse 9_35" filter="url(#filter40_f_2051_266)">
                  <circle cx="175.33" cy="116.132" r="0.830186" fill="white" />
                </g>
                <circle id="Ellipse 10_35" cx="175.33" cy="116.132" r="0.830186" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_39"
                className={particleClass(38)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[38]}s`, animationDelay: `${PARTICLE_DELAYS[38]}s` }}
              >
                <g id="Ellipse 9_36" filter="url(#filter41_f_2051_266)">
                  <circle cx="222.651" cy="131.905" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_36" cx="222.651" cy="131.905" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_40"
                className={particleClass(39)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[39]}s`, animationDelay: `${PARTICLE_DELAYS[39]}s` }}
              >
                <g id="Ellipse 9_37" filter="url(#filter42_f_2051_266)">
                  <circle cx="201.066" cy="160.132" r="0.830186" fill="white" />
                </g>
                <circle id="Ellipse 10_37" cx="201.066" cy="160.132" r="0.830186" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_41"
                className={particleClass(40)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[40]}s`, animationDelay: `${PARTICLE_DELAYS[40]}s` }}
              >
                <g id="Ellipse 9_38" filter="url(#filter43_f_2051_266)">
                  <circle cx="167.028" cy="160.132" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_38" cx="167.028" cy="160.132" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_42"
                className={particleClass(41)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[41]}s`, animationDelay: `${PARTICLE_DELAYS[41]}s` }}
              >
                <g id="Ellipse 9_39" filter="url(#filter44_f_2051_266)">
                  <circle cx="152.915" cy="142.283" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_39" cx="152.915" cy="142.283" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_43"
                className={particleClass(42)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[42]}s`, animationDelay: `${PARTICLE_DELAYS[42]}s` }}
              >
                <g id="Ellipse 9_40" filter="url(#filter45_f_2051_266)">
                  <circle cx="175.33" cy="131.491" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_40" cx="175.33" cy="131.491" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_44"
                className={particleClass(43)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[43]}s`, animationDelay: `${PARTICLE_DELAYS[43]}s` }}
              >
                <g id="Ellipse 9_41" filter="url(#filter46_f_2051_266)">
                  <circle cx="211.858" cy="146.019" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_41" cx="211.858" cy="146.019" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_45"
                className={particleClass(44)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[44]}s`, animationDelay: `${PARTICLE_DELAYS[44]}s` }}
              >
                <g id="Ellipse 9_42" filter="url(#filter47_f_2051_266)">
                  <circle cx="186.538" cy="107.415" r="0.415093" fill="white" />
                </g>
                <circle id="Ellipse 10_42" cx="186.538" cy="107.415" r="0.415093" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_46"
                className={particleClass(45)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[45]}s`, animationDelay: `${PARTICLE_DELAYS[45]}s` }}
              >
                <g id="Ellipse 9_43" filter="url(#filter48_f_2051_266)">
                  <circle cx="217.358" cy="135.745" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_43" cx="217.358" cy="135.745" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_47"
                className={particleClass(46)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[46]}s`, animationDelay: `${PARTICLE_DELAYS[46]}s` }}
              >
                <g id="Ellipse 9_44" filter="url(#filter49_f_2051_266)">
                  <circle cx="214.868" cy="141.557" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_44" cx="214.868" cy="141.557" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_48"
                className={particleClass(47)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[47]}s`, animationDelay: `${PARTICLE_DELAYS[47]}s` }}
              >
                <g id="Ellipse 9_45" filter="url(#filter50_f_2051_266)">
                  <circle cx="207.396" cy="139.896" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_45" cx="207.396" cy="139.896" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_49"
                className={particleClass(28)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[28]}s`, animationDelay: `${PARTICLE_DELAYS[28]}s` }}
              >
                <g id="Ellipse 9_46" filter="url(#filter51_f_2051_266)">
                  <circle cx="200.755" cy="130.349" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_46" cx="200.755" cy="130.349" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_50"
                className={particleClass(29)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[29]}s`, animationDelay: `${PARTICLE_DELAYS[29]}s` }}
              >
                <g id="Ellipse 9_47" filter="url(#filter52_f_2051_266)">
                  <circle cx="194.943" cy="139.481" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_47" cx="194.943" cy="139.481" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_51"
                className={particleClass(30)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[30]}s`, animationDelay: `${PARTICLE_DELAYS[30]}s` }}
              >
                <g id="Ellipse 9_48" filter="url(#filter53_f_2051_266)">
                  <circle cx="181.66" cy="161.896" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_48" cx="181.66" cy="161.896" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_52"
                className={particleClass(48)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[48]}s`, animationDelay: `${PARTICLE_DELAYS[48]}s` }}
              >
                <g id="Ellipse 9_49" filter="url(#filter54_f_2051_266)">
                  <circle cx="183.736" cy="140.311" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_49" cx="183.736" cy="140.311" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_53"
                className={particleClass(49)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[49]}s`, animationDelay: `${PARTICLE_DELAYS[49]}s` }}
              >
                <g id="Ellipse 9_50" filter="url(#filter55_f_2051_266)">
                  <circle cx="189.962" cy="144.047" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_50" cx="189.962" cy="144.047" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
              <g
                id="glow-balls_54"
                className={particleClass(50)}
                style={{ animationDuration: `${PARTICLE_DURATIONS[50]}s`, animationDelay: `${PARTICLE_DELAYS[50]}s` }}
              >
                <g id="Ellipse 9_51" filter="url(#filter56_f_2051_266)">
                  <circle cx="196.188" cy="147.783" r="0.103773" fill="white" />
                </g>
                <circle id="Ellipse 10_51" cx="196.188" cy="147.783" r="0.103773" fill="white" fill-opacity="0.92" />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_df_2051_266" x="0" y="0" width="339.5" height="181" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2051_266" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2051_266" result="shape" />
            <feGaussianBlur stdDeviation="5" result="effect2_foregroundBlur_2051_266" />
          </filter>
          <clipPath id="bgblur_0_2051_266_clip_path" transform="translate(-105.602 -199.601)"><rect x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 102.616 243.048)" />
          </clipPath><clipPath id="bgblur_1_2051_266_clip_path" transform="translate(-215.602 -138.601)"><rect x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 212.616 182.048)" />
          </clipPath><clipPath id="bgblur_2_2051_266_clip_path" transform="translate(-105.602 -74.6005)"><rect x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 102.616 118.048)" />
          </clipPath><clipPath id="bgblur_3_2051_266_clip_path" transform="translate(-3.60229 -138.601)"><rect x="0.866025" width="85.2295" height="85.2295" rx="13.5" transform="matrix(0.866025 -0.5 0.866025 0.5 0.616025 182.048)" />
          </clipPath><filter id="filter5_d_2051_266" x="101.5" y="137" width="151.5" height="90.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2051_266" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2051_266" result="shape" />
          </filter>
          <filter id="filter6_f_2051_266" x="141.5" y="71.5" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter7_f_2051_266" x="256.5" y="110.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter8_f_2051_266" x="203.5" y="177.5" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter9_f_2051_266" x="122.5" y="178.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter10_f_2051_266" x="88.5" y="135.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter11_f_2051_266" x="142.5" y="109.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter12_f_2051_266" x="230.5" y="144.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter13_f_2051_266" x="169.5" y="51.5" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter14_f_2051_266" x="244.5" y="120.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter15_f_2051_266" x="238.5" y="134.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter16_f_2051_266" x="220.5" y="130.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter17_f_2051_266" x="204.5" y="107.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter18_f_2051_266" x="190.5" y="129.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter19_f_2051_266" x="158.5" y="183.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter20_f_2051_266" x="163.5" y="131.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter21_f_2051_266" x="178.5" y="140.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter22_f_2051_266" x="193.5" y="149.5" width="8.5" height="8.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter23_f_2051_266" x="146.1" y="98.4434" width="10.9886" height="10.9887" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter24_f_2051_266" x="232.025" y="127.583" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter25_f_2051_266" x="192.425" y="177.643" width="10.9886" height="10.9887" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter26_f_2051_266" x="146.1" y="98.4434" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter27_f_2051_266" x="106.5" y="146.262" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter28_f_2051_266" x="146.847" y="126.836" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter29_f_2051_266" x="212.598" y="152.987" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter30_f_2051_266" x="167.021" y="83.5" width="9.49438" height="9.49435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter31_f_2051_266" x="223.058" y="135.055" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter32_f_2051_266" x="218.575" y="145.515" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter33_f_2051_266" x="205.126" y="142.526" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter34_f_2051_266" x="193.172" y="125.342" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter35_f_2051_266" x="182.711" y="141.779" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter36_f_2051_266" x="158.802" y="182.126" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter37_f_2051_266" x="162.538" y="143.274" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter38_f_2051_266" x="173.745" y="149.998" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter39_f_2051_266" x="184.953" y="156.723" width="8.37354" height="8.3736" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter40_f_2051_266" x="170.5" y="111.302" width="9.6604" height="9.66037" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter41_f_2051_266" x="218.236" y="127.49" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter42_f_2051_266" x="196.236" y="155.302" width="9.6604" height="9.66037" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter43_f_2051_266" x="162.613" y="155.717" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter44_f_2051_266" x="148.5" y="137.868" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter45_f_2051_266" x="170.915" y="127.076" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter46_f_2051_266" x="207.443" y="141.604" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter47_f_2051_266" x="182.123" y="103" width="8.8302" height="8.8302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter48_f_2051_266" x="213.255" y="131.641" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter49_f_2051_266" x="210.764" y="137.453" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter50_f_2051_266" x="203.292" y="135.792" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter51_f_2051_266" x="196.651" y="126.245" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter52_f_2051_266" x="190.839" y="135.377" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter53_f_2051_266" x="177.557" y="157.792" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter54_f_2051_266" x="179.632" y="136.207" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter55_f_2051_266" x="185.858" y="139.943" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <filter id="filter56_f_2051_266" x="192.085" y="143.679" width="8.20752" height="8.20755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2051_266" />
          </filter>
          <linearGradient id="paint0_linear_2051_266" x1="177.5" y1="52.5" x2="177.5" y2="181" gradientUnits="userSpaceOnUse">
            <stop stop-opacity="0" />
            <stop offset="1" stop-color="#C498FF" />
          </linearGradient>
          <linearGradient id="paint1_linear_2051_266" x1="30.2724" y1="84.0429" x2="221.598" y2="43.8137" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A572D0" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint2_linear_2051_266" x1="63.3968" y1="75.1673" x2="85.5562" y2="-43.429" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A572D0" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint3_linear_2051_266" x1="63.3968" y1="75.1673" x2="85.5562" y2="-43.429" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A572D0" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint4_linear_2051_266" x1="26.6177" y1="85.3882" x2="150.987" y2="24.1139" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A572D0" />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint5_linear_2051_266" x1="213.5" y1="200.5" x2="213.5" y2="202.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC89FF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint6_linear_2051_266" x1="218.5" y1="197.5" x2="218.5" y2="199.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC89FF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint7_linear_2051_266" x1="218.5" y1="197.5" x2="218.5" y2="199.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC89FF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint8_linear_2051_266" x1="1" y1="0" x2="1" y2="2" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC89FF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint9_linear_2051_266" x1="1" y1="0" x2="1" y2="2" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC89FF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint10_linear_2051_266" x1="1" y1="0" x2="1" y2="2" gradientUnits="userSpaceOnUse">
            <stop stop-color="#BC89FF" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
          <linearGradient id="paint11_linear_2051_266" x1="176.25" y1="117.5" x2="176.25" y2="224.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9DD6FF" />
            <stop offset="0.125" stop-color="#5CAEFF" />
            <stop offset="0.899038" stop-color="#C98BFF" />
            <stop offset="1" stop-color="#EBC2FF" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}
