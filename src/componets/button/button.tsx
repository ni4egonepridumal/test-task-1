import { DetailedHTMLProps, ReactNode } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface IButton extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    color: string;
    onClick?: ()=>void
}

export const Button: React.FC<IButton> = ({ color, children, onClick }) => {
    const ckickOnButton = () => {
        console.log("clickOn")
    }
    return (
        <button onClick={onClick} className={cn(styles.item, {
            [styles.purple]: color === "purple",
            [styles.lightGray]: color === "lightGray",
        })}>
            {children}
        </button>
    );
};

