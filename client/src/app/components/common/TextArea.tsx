import { useController, UseControllerProps } from "react-hook-form";

interface Props extends UseControllerProps {
  label: string;
  type?: string;
  placeholder: string;
  rows?: number;
  fullWidth?: boolean;
}

const styles = {
  inputContainer:
    "border-x-2 border-x-slate-200 h-full bg-slate-200 flex flex-col lg:flex-row items-center",
  inputStyle:
    "font-Montserrat resize-none font-thin text-base lg:text-xl text-inherit placeholder:text-gray-500 placeholder:font-Oswald pb-2 pt-3 px-5 w-full h-full block bg-transparent focus-within:outline-none",
  inputValidationStyle:
    "h-auto font-Oswald text-xl leading-none w-full font-thin px-5 py-5 lg:py-0 text-gray-200",
};

export default function AppTextArea(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });

  return (
    <div
      className={`
      ${props.fullWidth ? "w-full" : "w-full max-w-sm"}
      ${fieldState.error ? "border-x-red-500" : "border-x-white"}  
      ${styles.inputContainer}`}
    >
      <textarea
        className={styles.inputStyle}
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
