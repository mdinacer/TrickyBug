export default function Spinner() {
  return (
    <div className="relative h-20 w-20 mx-auto -translate-x-1/2 -translate-y-1/2">
      <div
        className={`${styles.baseStyle} ${styles.outer} animate-spin-slow`}
      ></div>
      <div
        className={`${styles.baseStyle} ${styles.middle} animate-spin-slow-reverse `}
      ></div>
      <div
        className={`${styles.baseStyle} ${styles.inner} animate-spin-normal`}
      ></div>
    </div>
  );
}

const styles = {
  baseStyle: `border-[5px] border-transparent border-solid border-t-[#3cefff] border-r-[#3cefff] rounded-[50%] absolute top-1/2 left-1/2`,
  outer: `w-[5.5rem] h-[5.5rem] ml-[-1.75em] mt-[-1.75em]`,
  middle: `w-[4.1rem] h-[4.1rem] ml-[-1.05em] mt-[-1.05em]`,
  inner: `w-[2.8rem] h-[2.8rem] ml-[-0.4em] mt-[-0.4em]`,
};
