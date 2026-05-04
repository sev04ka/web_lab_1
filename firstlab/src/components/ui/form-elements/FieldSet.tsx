import type { FC, ReactNode } from "react";

interface FieldSetProps {
    children: ReactNode;
    extraClassName?: string;
    legend: string;
    hideLegend?: boolean;
}


export const FieldSet: FC<FieldSetProps> = ({
    children,
    extraClassName,
    legend,
    hideLegend = false
}) => {
    return (
        <fieldset className={`form__group ${extraClassName}`}>
            <legend className={hideLegend ? "visually-hidden" : "form__legend h2"}>{legend}</legend>
            {children}
        </fieldset>
    )
}