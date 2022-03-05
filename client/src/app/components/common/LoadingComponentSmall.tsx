import Spinner from "./Spinner";

interface Props {
  message?: string;
}

export default function LoadingComponentSmall({ message = "Loading" }: Props) {
  return (
    <div className="relative  w-full h-full flex items-center justify-center">
      <div>
        <Spinner />
        <p className=" font-Oswald text-5xl py-10 uppercase">{message}</p>
      </div>
    </div>
  );
}
