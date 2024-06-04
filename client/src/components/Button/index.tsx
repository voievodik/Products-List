import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  onClick?: () => void;
  className?: string;
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
};

export const Button: FC<Props> = ({ onClick, title, className, type }) => {
  return (
    <button
      className={twMerge(
        "w-full bg-blue-500 text-white px-4 py-2 rounded m-0",
        className
      )}
      type={type || "button"}
      onClick={() => onClick?.()}
    >
      {title}
    </button>
  );
};
