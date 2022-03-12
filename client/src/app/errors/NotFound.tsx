export default function NotFoundPage() {
  return (
    <div className="py-20 w-full h-full min-h-screen flex items-center justify-center">
      <div>
        <p className="font-Montserrat text-[10rem] lg:text-[16rem] text-center leading-none">
          404
        </p>
        <p className="font-Oswald text-3xl lg:text-5xl font-thin text-center uppercase bg-black rounded-md text-slate-100 py-2 px-5">
          Sorry, Page not found
        </p>
      </div>
    </div>
  );
}
