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
    "border-x-2 border-x-slate-200 h-full bg-slate-500 flex flex-row items-center",
  inputStyle:
    "font-Montserrat resize-none font-thin text-2xl text-white placeholder:text-gray-300 placeholder:font-Oswald pb-2 pt-3 px-5 w-full h-full block bg-transparent focus-within:outline-none",
  inputValidationStyle:
    "h-auto font-Oswald text-lg leading-none w-full font-thin px-5 py-0 text-gray-600",
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
