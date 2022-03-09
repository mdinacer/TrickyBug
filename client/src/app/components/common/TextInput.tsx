import { useController, UseControllerProps } from "react-hook-form";

interface Props extends UseControllerProps {
  label: string;
  type?: string;
  placeholder: string;
  fullWidth?: boolean;
  autoComplete?: string | undefined;
}

const styles = {
  inputContainer:
    " border-x-2 border-x-slate-200 bg-slate-500 flex flex-row items-center ",
  inputStyle:
    " font-Montserrat font-thin text-2xl text-white placeholder:capitalize placeholder:text-gray-300 placeholder:opacity-50 placeholder:font-Oswald pb-2 pt-3 px-5 w-full h-auto block bg-transparent focus-within:outline-none",
  inputValidationStyle:
    " h-auto font-Oswald text-xl leading-none w-full text-left font-thin px-5 py-0 text-gray-200 ",
};

export default function AppTextInput(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });

  return (
    <div
      className={` ${props.fullWidth ? "w-full" : "w-full max-w-sm "} ${
        fieldState.error ? "border-r-red-500" : "border-x-white "
      } ${styles.inputContainer}`}
    >
      <input
        className={`${styles.inputStyle} autofill:bg-yellow-200 `}
        aria-label={props.label}
        type={props.type}
        {...props}
        {...field}
      />
      {fieldState.error && (
        <p className={styles.inputValidationStyle}>
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}
