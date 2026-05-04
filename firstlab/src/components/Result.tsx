import type { FC } from "react";

interface ResultProps {
    result:
    {
        dailyNorm: number;
        dailyNormForWeightSupport: number;
    }
}

export const Result: FC<ResultProps> = ({
    result
}) => {
    return (
        <div className="counter-result counter-result_active wrapper">
            <h2 className="counter-result__title h2">Ваш результат</h2>
            <div className="counter-result__body">
                <p className="counter-result__text text">Суточная норма - <strong>{result.dailyNorm} ккал</strong>, необходимая организму для нормального функционирования.</p>
                <p className="counter-result__text text">Для поддержания веса нужно употреблять <strong>{result.dailyNormForWeightSupport} ккал</strong> в день.</p>
            </div>
        </div>
    )
}