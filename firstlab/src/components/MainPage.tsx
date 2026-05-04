import { useState, type FC } from "react";
import { Bg } from "./ui/Bg";
import { Counter } from "./Counter";
import '../assets/styles/index.css'
import { Result } from "./Result";


export const MainPage: FC = () => {
    const [result, setResult] = useState<{
        dailyNorm: number
        dailyNormForWeightSupport: number
    } | null>();


    return (
        <>
            <Bg />
            <Counter setResult={setResult} />

            {result && <Result result={result} />}
        </>
    )
}