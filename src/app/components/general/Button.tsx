import React from "react"
import { IconType } from "react-icons";

interface ButtonProps {
    text: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    small? : boolean
    outline? : boolean
    icon: IconType
    disabled?: boolean

}
const Button:React.FC<ButtonProps> = ({onClick, small,outline,disabled}) => {
  return (
    <button className={`${outline ? "border border-black" : ""} ${small ? "text-sm" : "text-md"} ${disabled ? "opacity-50 cursor-default" : "cursor-pointer"}`} onClick={onClick}>
        
    </button>
  )
}

export default Button