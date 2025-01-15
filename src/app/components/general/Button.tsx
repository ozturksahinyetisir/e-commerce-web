import React from "react"
import { IconType } from "react-icons";

interface ButtonProps {
    text: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    small? : boolean
    outline? : boolean
    icon?: IconType 
    disabled?: boolean
    children?: React.ReactNode
    className?: string

}
const Button: React.FC<ButtonProps> = ({ text, onClick, small, outline, disabled ,icon: Icon,className}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        disabled:opacity-50 
        disabled:cursor-not-allowed 
        disabled:animate-none 
        ${small ? "px-3 py-1 text-sm" : "px-2 py-2 text-base"} 
        ${outline ? "bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white" : "bg-blue-500 text-white"} 
        ${outline ? "focus:ring-blue-300 focus:ring-2" : "focus:ring-4 focus:ring-blue-400"} 
        rounded-lg shadow-md 
        hover:scale-105 
        active:scale-95 
        transition-all duration-200 ease-in-out
        ${className || ""} 
      `}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;