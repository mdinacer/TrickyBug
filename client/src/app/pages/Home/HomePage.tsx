import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/configureStore";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const { user } = useAppSelector((state) => state.account);

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
        <div className=" flex flex-col items-center">
          <div className="text-white flex flex-row ">
            <p className="font-Oswald text-9xl z-[2] leading-tight">Tricky</p>

            <motion.p
              transition={{ duration: 1 }}
              animate={{ backgroundColor: colors[index] }}
              className="font-Oswald text-xl uppercase py-4 px-4 h-auto rounded-sm -translate-x-16 translate-y-3"
            >
              Bugg
            </motion.p>
          </div>
          <div className="max-w-lg py-10">
            <p className=" text-white font-Montserrat text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quisquam aperiam, ab officia excepturi cumque magni quo dicta
              nobis atque.
            </p>
          </div>
          {!user ? (
            <div className="p-10 flex flex-row justify-around">
              <Link
                to={"/account/login"}
                className={`${styles.buttonStyle} bg-[#D82148]`}
              >
                <p className={`${styles.buttonTextStyle}`}>Login</p>
              </Link>
              <Link
                to={"/account/register"}
                className={`${styles.buttonStyle}  border-[#D82148] border-2`}
              >
                <p className={`${styles.buttonTextStyle}`}>Register</p>
              </Link>
            </div>
          ) : (
            <div className="p-10 flex flex-row justify-around">
              <Link
                to={"/projects"}
                className={`${styles.buttonStyle} bg-[#019267] rounded-md`}
              >
                <p className={`${styles.buttonTextStyle}`}>Browse Projects</p>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

const styles = {
  buttonStyle: "py-1 px-5 rounded-xs",
  buttonTextStyle:
    "text-white uppercase font-Oswald text-2xl font-thin tex-white",
};

const colors = ["#D82148", "#D67D3E", "#FFC900", "#019267"];
