import type { FC, ChangeEvent } from "react";

interface InputProps {
    type: "number" | "radio";
    label: string;
    meassureUnit?: string;
    error?: string;
    name: string;
    id: string;
    wrapperClassName?: string;
    value?: string | number;
    checked?: boolean;
    min?: number;
    max?: number;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = ({
    type,
    label,
    meassureUnit,
    error,
    name,
    id,
    wrapperClassName,
    value,
    checked,
    onChange,
    min,
    max
}) => {
    const containerClassName = wrapperClassName ?? (type === "number" ? "form__group" : "form__radio");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={containerClassName}>
            {type === "radio" ? (
                <>
                    <input
                        className="form__control"
                        type="radio"
                        id={id}
                        name={name}
                        value={id}
                        checked={checked}
                        onChange={handleChange}
                    />
                    <label className="text" htmlFor={id}>
                        {label}
                        {meassureUnit && <span className="text-light">{meassureUnit}</span>}
                    </label>
                </>
            ) : (
                <>
                    <label className="form__label h2" htmlFor={id}>
                        {label}
                        {meassureUnit && <span className="text-light">{meassureUnit}</span>}
                    </label>
                    <input
                        className="form__control"
                        type={type}
                        id={id}
                        name={name}
                        value={value ?? ""}
                        onChange={handleChange}
                    />
                </>
            )}
            {error && <span className="form__error">{error}</span>}
        </div>
    );
}