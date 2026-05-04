import type { FC } from "react";


export const Bg: FC = () => {
    return (
        <div className="bg">
            <div className="bg__overlay"></div>
            <picture className="bg__img">
                <source srcSet={"/images/bg.webp"} type="image/webp" />
                <img src={"/images/bg.jpeg"} alt="Фоновое изображение" />
            </picture>
        </div>
    )
}