import { useController, UseControllerProps } from "react-hook-form";

interface Props extends UseControllerProps {
  label: string;
  type?: string;
  placeholder: string;
  //fullWidth?: boolean;
  autoComplete?: string | undefined;
}

const styles = {
  inputContainer:
    "w-full border-x-2 border-x-black bg-slate-200 flex flex-col lg:flex-row items-center ",
  inputStyle:
    " font-Montserrat font-thin text-lg lg:text-xl text-inherit placeholder:capitalize placeholder:text-gray-500  placeholder:font-Oswald pb-2 pt-3 px-5 w-full h-auto block bg-transparent focus-within:outline-none",
  inputValidationStyle:
    " h-auto font-Oswald text-xl leading-none w-full text-center lg:text-left font-thin px-5 lg:py-0 text-gray-400 py-2 ",
};

export default function AppTextInput(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });

  return (
    <div
      className={` ${
        fieldState.error ? "border-r-red-500" : "border-x-inherit "
      } ${styles.inputContainer}`}
    >
      <input
        className={`${styles.inputStyle}`}
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
