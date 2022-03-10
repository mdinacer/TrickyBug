interface Props {
  title: string;
  value: any | null;
  fallbackValue?: any;
  isCol?: boolean;
}

export default function LabelItem({
  title,
  value,
  fallbackValue = "Unavailable",
  isCol = false,
}: Props) {
  return (
    <p
      className={`${
        isCol ? "flex-col items-start" : "flex-row items-center"
      } flex w-full justify-between font-Montserrat border-b border-b-inherit`}
    >
      <span className="text-xl uppercase font-Oswald font-thin min-w-[7rem] text-gray-500">
        {title}
      </span>
      {value ? (
        <span className="text-lg first-letter:capitalize">{value}</span>
      ) : (
        <span className="text-base uppercase font-thin text-gray-500">
          {fallbackValue}
        </span>
      )}
    </p>
  );
}
