import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (index === 3 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [index, setIndex]);

  return (
    <div className="relative h-full min-h-screen w-full bg-slate-900 ">
      <video
        autoPlay={true}
        muted
        playsInline
        loop
        className="absolute top-0 left-0 grayscale opacity-10 w-screen h-screen object-cover object-center invert"
        src="../assets/videos/hero.mp4"
      />
      <section className="relative w-screen h-screen flex items-center justify-center">
        <div>
          <div className="text-white flex flex-row">
            <p className="font-Oswald text-9xl z-[2] leading-tight">Tricky</p>

            <motion.p
              transition={{ duration: 1 }}
              animate={{ backgroundColor: colors[index] }}
              className="font-Oswald text-xl uppercase py-4 px-4 h-auto rounded-sm -translate-x-16 translate-y-3"
            >
              Bugg
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}

const colors = ["#D82148", "#D67D3E", "#FFC900", "#019267"];
