import { DetailedHTMLProps, ReactNode } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface IButton extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    color: string;
}

export const Button: React.FC<IButton> = ({ color, children }) => {
    return (
        <button className={cn(styles.item, {
            [styles.purple]: color === "purple",
            [styles.lightGray]: color === "lightGray",
        })}>
            {children}
        </button>
    );
};

