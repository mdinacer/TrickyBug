import Spinner from "./Spinner";

interface Props {
  message?: string;
}

export default function LoadingComponent({ message = "Loading" }: Props) {
  return (
    <div className="relative bg-slate-700 w-screen h-screen flex items-center justify-center">
      <div className="h-auto flex items-center flex-col">
        <Spinner />
        <p className=" font-Oswald text-2xl font-thin text-center lg:text-5xl py-10 text-white uppercase">
          {message}
        </p>
      </div>
    </div>
  );
}
