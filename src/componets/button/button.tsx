import { DetailedHTMLProps, ReactNode } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface IButton extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    color: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<IButton> = ({ color, children, onClick, disabled }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={cn(styles.item, {
            [styles.purple]: color === "purple",
            [styles.lightGray]: color === "lightGray",
            [styles.green]: color === "green",
        })}>
            {children}
        </button>
    );
};

