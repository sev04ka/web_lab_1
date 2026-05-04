import type { FC } from "react";
import '../assets/styles/index.css'

export const Example: FC = () => {
    return (
        <>
            <div className="bg">
                <div className="bg__overlay"></div>
                <picture className="bg__img">
                    <source srcSet={"/images/bg.webp"} type="image/webp" />
                    <img src={"/images/bg.jpeg"} alt="Фоновое изображение" />
                </picture>
            </div>
            <div className="counter">
                <h1 className="counter__title h1">Счетчик калорий</h1>
                <div className="counter__body wrapper">
                    <form className="form">
                        <fieldset className="form__group">
                            <legend className="form__legend h2">Пол</legend>
                            <div className="form__btn-radios">
                                <div className="form__btn-radio">
                                    <input type="radio" id="male" name="gender" value="male" checked={true} />
                                    <label htmlFor="male">Мужской</label>
                                </div>
                                <div className="form__btn-radio">
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label htmlFor="female">Женский</label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="form__group form__row">
                            <legend className="visually-hidden">Параметры человека</legend>
                            <div className="form__group">
                                <label className="form__label h2" htmlFor="age">Возраст <span className="text-light">лет</span></label>
                                <input className="form__control" type="number" id="age" name="age" value="0" min="0" max="150" />
                            </div>
                            <div className="form__group">
                                <label className="form__label h2" htmlFor="height">Рост <span className="text-light">см</span></label>
                                <input className="form__control form__control_error" type="number" id="height" name="height" value="0" min="0" />
                                <span className="form__error">Значение не должно быть отрицательным</span>
                            </div>
                            <div className="form__group">
                                <label className="form__label h2" htmlFor="weight">Вес <span className="text-light">кг</span></label>
                                <input className="form__control" type="number" id="weight" name="weight" value="0" min="0" />
                            </div>
                        </fieldset>
                        <fieldset className="form__group">
                            <legend className="form__legend h2">Физическая активность</legend>
                            <div className="form__radio">
                                <input type="radio" name="activity" id="min" value="checked" />
                                <label className="text" htmlFor="min">Минимальная
                                    <span className="text-light">
                                        Сидячая работа, отсутствие физических нагрузок
                                    </span>
                                </label>
                            </div>
                            <div className="form__radio">
                                <input type="radio" name="activity" id="low" />
                                <label className="text" htmlFor="low">Низкая
                                    <span className="text-light">Редкие, нерегулярные тренировки, активность в
                                        быту
                                    </span>
                                </label>
                            </div>
                            <div className="form__radio">
                                <input type="radio" name="activity" id="mid" />
                                <label className="text" htmlFor="mid">Средняя
                                    <span className="text-light">
                                        Тренировки 3-5 раз в неделю
                                    </span>
                                </label>
                            </div>
                            <div className="form__radio">
                                <input type="radio" name="activity" id="high" />
                                <label className="text" htmlFor="high">Высокая
                                    <span className="text-light">
                                        Тренировки 6-7 раз в неделю
                                    </span>
                                </label>
                            </div>
                            <div className="form__radio">
                                <input type="radio" name="activity" id="very-high" />
                                <label className="text" htmlFor="very-high">Очень высокая
                                    <span className="text-light">
                                        Больше 6 тренировок в неделю и физическая работа
                                    </span>
                                </label>
                            </div>
                        </fieldset>
                        <div className="form__btns">
                            <button className="form__submit btn" type="submit" disabled={true}>
                                Рассчитать
                            </button>
                            <button className="form__reset btn btn_transparent" type="reset">
                                Очистить поля
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="counter-result counter-result_active wrapper">
                <h2 className="counter-result__title h2">Ваш результат</h2>
                <div className="counter-result__body">
                    <p className="counter-result__text text">Суточная норма - <strong>3333 ккал</strong>, необходимая организму для нормального функционирования.</p>
                    <p className="counter-result__text text">Для поддержания веса нужно употреблять <strong>4000 ккал</strong> в день.</p>
                </div>
            </div>
        </>
    )
}