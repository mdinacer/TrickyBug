import { PhotographIcon } from "@heroicons/react/solid";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useController, UseControllerProps } from "react-hook-form";

interface Props extends UseControllerProps {}

export default function MediaDropZone(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: null });

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles[0] = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
      field.onChange(acceptedFiles[0]);
    },
    [field]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  return (
    <div
      {...getRootProps()}
      className={`h-full w-full text-inherit overflow-hidden`}
    >
      <div
        className={`${
          isDragActive ? " bg-green-500" : "bg-inherit "
        } flex flex-col justify-center items-center  w-full h-full`}
      >
        <input aria-label="dropZone" {...getInputProps()} />
        <PhotographIcon className=" w-16 h-16" />
        <p className=" font-Montserrat text-lg font-thin  max-w-sm whitespace-pre-wrap">
          Drop image or click to browse{" "}
        </p>
        <p>{fieldState.error?.message}</p>
      </div>
    </div>
  );
}
