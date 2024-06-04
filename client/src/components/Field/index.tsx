import { FC } from "react";
import {
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

type Props = {
  field: ControllerRenderProps<FieldValues, string>;
  className?: string;
  classNameInput?: string;
  classNameLabel?: string;
  label?: string;
  wLabel?: number;
  note?: string;
  type?: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  errors?: FieldErrors;
  onInput?: () => void;
};

export const Field: FC<Props> = ({
  name,
  errors,
  field,
  label,
  note,
  placeholder,
  disabled,
  onInput,
}) => {
  return (
    <div className={twMerge(`mb-2 text-sm font-medium text-n-48 w-full`)}>
      <p className="mb-[0.25rem]">{label}</p>
      <div className="relative">
        <input
          {...field}
          className={twMerge(
            "w-full p-2.5 outline-none rounded-lg text-n-48 bg-n-8 truncate placeholder:text-n-4 border-n-167 border"
          )}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          onInput={onInput}
        />
      </div>
      {note && <div className="mt-2 base2 text-n-4/50">{note}</div>}
      {errors && errors[name] && errors[name]?.message && (
        <p className="text-[red] text-start ml-2 text-xs">
          {String(errors[name]?.message)}
        </p>
      )}
    </div>
  );
};
