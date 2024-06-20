import "./style.scss";
import React, { FC, InputHTMLAttributes } from "react";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField: FC<ITextField> = ({
  label,
  type = "text",
  ...rest
}) => {
  return (
    <div>
      <label className="label">
        {label}
        <input className="field" type={type} {...rest} />
      </label>
    </div>
  );
};
