import Spinner from "./Spinner";

interface Props {
  message?: string;
}

export default function LoadingComponent({ message = "Loading" }: Props) {
  return (
    <div className="relative bg-slate-700 w-screen h-screen flex items-center justify-center">
      <div>
        <Spinner />
        <p className=" font-Oswald text-5xl py-10 text-white uppercase">
          {message}
        </p>
      </div>
    </div>
  );
}
