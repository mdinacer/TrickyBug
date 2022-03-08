import { CheckIcon } from "@heroicons/react/solid";

interface Props {
  label: string;
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

const styles = {
  buttonStyle:
    "flex pb-2 pt-3 px-5 text-inherit flex-row gap-x-2 items-center bg-inherit border-inherit transition-all duration-300",
};

export default function AppCheckbox({ label, isChecked, onChange }: Props) {
  return (
    <button
      type="button"
      title="checkbox"
      className={styles.buttonStyle}
      onClick={() => onChange(!isChecked)}
    >
      <div className="w-6 h-6 border-2 border-inherit  rounded-sm ">
        {isChecked && <CheckIcon className="h-full w-full" />}
      </div>
      <p className=" font-Oswald text-2xl capitalize font-thin">{label}</p>
    </button>
  );
}
