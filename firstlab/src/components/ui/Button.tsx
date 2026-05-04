import type { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    type?: "submit" | "reset" | "button"
    extraClassName?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
    children,
    type,
    extraClassName,
    disabled,
    onClick
}) => {
    return (
        <button
            className={`btn ${extraClassName}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >{children}</button>
    )
}