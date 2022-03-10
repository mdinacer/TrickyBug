import { CheckIcon } from "@heroicons/react/solid";

interface Props {
  label: string;
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

const styles = {
  buttonStyle:
    "flex bg-slate-200 text-inherit flex-row gap-x-2 items-center  border-inherit w-full",
};

export default function AppCheckbox({ label, isChecked, onChange }: Props) {
  return (
    <button
      type="button"
      title="checkbox"
      className={styles.buttonStyle}
      onClick={() => onChange(!isChecked)}
    >
      <div className="pb-2 pt-3 px-3 h-full w-auto border-2 border-inherit  rounded-sm bg-slate-800 text-white ">
        {isChecked ? (
          <CheckIcon className="w-6 h-6" />
        ) : (
          <div className="w-6 h-6"></div>
        )}
      </div>
      <p className=" font-Oswald text-lg lg:text-2xl capitalize font-thin pr-5">
        {label}
      </p>
    </button>
  );
}
