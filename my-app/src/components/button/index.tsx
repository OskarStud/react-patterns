import "./style.scss";
import { ButtonHTMLAttributes, FC, FormEvent } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: string;
}

export const Button: FC<IButton> = ({
  label,
  type = "button",
  children,
  ...rest
}) => {
  return (
    <div className="button-with-label">
      {label && <p className="text">{label}</p>}
      <button className="button" type={type} {...rest}>
        {children}
      </button>
    </div>
  );
};
