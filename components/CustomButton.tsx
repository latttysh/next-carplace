"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  type,
  rightIcon,
  textStyles,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Right Icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
