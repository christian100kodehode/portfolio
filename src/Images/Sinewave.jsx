import { easeInOut, easeOut, motion } from "framer-motion";

const SineWave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 400">
      <g>
        <motion.path
          path
          d="M19.10446000322213 60.298506236867794C58.764160547499955 143.96417344013508 46.62684367442638 325.5253572932845 149.85072553380837 336.11938712676033C253.07460739319038 346.71341696023603 227.38505302811174 103.37313000599214 359.4029716275584 95.22387931426037C491.420890227005 87.0746286225286 458.2179170010935 279.6447708344426 585.0746330045115 309.2537255056666C711.9313490079295 338.86268017689054 719.2089467659048 228.14924979765868 777.6119254849802 192.83581779082277 "
          // Framer Motion
          initial={{ strokeOpacity: 0, pathLength: 0 }}
          animate={{ strokeOpacity: 1, pathLength: 1 }}
          transition={{
            delay: 0.7,
            duration: 3,
            // Ease accepts 4 values to control, set between 0 and 1
            // ease: [0.17, 1, 0.83, 1],
          }}
          // End of Framer Motion
          fill="none"
          stroke-width="25"
          stroke="hsla(0, 10%, 30%, 0.579)"
          stroke-linecap="round"
          id="wave"
        ></motion.path>
        <defs>
          <linearGradient id="SvgjsLinearGradient1009">
            <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
            <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
};

export default SineWave;
