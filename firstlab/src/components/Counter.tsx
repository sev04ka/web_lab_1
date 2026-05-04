import { useState, type FC } from "react";
import { Button } from "./ui/Button";
import { FieldSet } from "./ui/form-elements/FieldSet";
import { Input } from "./ui/form-elements/Input";



type ActivityLevel = "min" | "low" | "mid" | "high" | "very-high";

interface FormValues {
    gender: string;
    age: number;
    height: number;
    weight: number;
    activity: ActivityLevel;
}


const defaultFormValues: FormValues = {
    gender: "male",
    age: 0,
    height: 0,
    weight: 0,
    activity: "min"
}

const coefficients = {
    min: 1.2,
    low: 1.375,
    mid: 1.55,
    high: 1.7,
    "very-high": 1.9,
}

const fieldsValidators = {
    age: (value: number) => {
        if (!value) return { isValid: false, errorMessage: "Укажите возраст" };
        if (value > 150) return { isValid: false, errorMessage: "Максимальный возраст 150 лет" };
        return { isValid: true, errorMessage: undefined };
    },
    height: (value: number) => {
        if (!value) return { isValid: false, errorMessage: "Укажите рост" };
        if (value > 1000) return { isValid: false, errorMessage: "Рост не может быть больше 1000 см" };
        return { isValid: true, errorMessage: undefined };
    },
    weight: (value: number) => {
        if (!value) return { isValid: false, errorMessage: "Укажите вес" };
        if (value > 1000) return { isValid: false, errorMessage: "Вес не может быть больше 1000 кг" };
        return { isValid: true, errorMessage: undefined };
    },
} as const;

const getInitialErrors = () => {
    const errors: Record<string, string | undefined> = {};
    Object.keys(fieldsValidators).forEach(field => {
        errors[field] = undefined;
    });
    return errors;
};

interface CounterProps {
    setResult: (result: { dailyNorm: number; dailyNormForWeightSupport: number } | null) => void;
}

export const Counter: FC<CounterProps> = ({
    setResult
}) => {
    const [formState, setFormState] = useState<FormValues>(defaultFormValues);
    const [formErrors, setFormErrors] = useState<Record<string, string | undefined>>(getInitialErrors);


    const handleSubmit = (e: any) => {
        e.preventDefault();

        let dailyNorm

        if (formState.gender == "male") {
            dailyNorm = 66.5 + (13.75 * formState.weight) + (5.003 * formState.height) - (6.775 * formState.age);
        } else {
            dailyNorm = 655.1 + (9.563 * formState.weight) + (1.85 * formState.height) - (4.676 * formState.age);
        }

        setResult({
            dailyNorm: dailyNorm,
            dailyNormForWeightSupport: dailyNorm * coefficients[formState.activity]
        })

    };

    const handleReset = (e: any) => {
        e.preventDefault();
        setFormState(defaultFormValues);
        setFormErrors(getInitialErrors());

        setResult(null)
    };

    const handleNumberChange = (field: keyof FormValues, min: number = 0, max: number = 150) => (value: string) => {
        let num = value === "" ? 0 : Number(value);

        num = num < min ? min :
            num > max ? max : num

        setFormState(prev => ({ ...prev, [field]: num }));

        const validation = fieldsValidators[field as keyof typeof fieldsValidators](Number(num));
        setFormErrors(prev => ({ ...prev, [field]: validation.errorMessage || '' }));
    };

    const handleRadioChange = (field: keyof FormValues) => (value: string) => {
        setFormState(prev => ({ ...prev, [field]: value }));
    };

    const isFormValid = Object.values(formErrors).every(error => error == '');


    return (
        <div className="counter">
            <h1 className="counter__title h1">Счетчик калорий</h1>
            <div className="counter__body wrapper">
                <form className="form" onSubmit={(e) => handleSubmit(e)} onReset={(e) => handleReset(e)}>
                    <FieldSet
                        legend="Пол"
                    >
                        <div className="form__btn-radios">
                            <Input
                                type="radio"
                                label="Мужской"
                                name="gender"
                                id="male"
                                wrapperClassName="form__btn-radio"
                                checked={formState.gender === "male"}
                                onChange={handleRadioChange("gender")}
                            />
                            <Input
                                type="radio"
                                label="Женский"
                                name="gender"
                                id="female"
                                checked={formState.gender === "female"}
                                onChange={handleRadioChange("gender")}
                                wrapperClassName="form__btn-radio"
                            />
                        </div>
                    </FieldSet>
                    <FieldSet
                        extraClassName="form__row"
                        legend="Параметры человека"
                        hideLegend={true}
                    >
                        <Input
                            type="number"
                            label="Возраст"
                            meassureUnit="лет"
                            name="age"
                            id="age"
                            value={formState.age}
                            onChange={handleNumberChange("age", 0, 150)}
                            min={0}
                            max={150}
                            error={formErrors.age}
                        />
                        <Input
                            type="number"
                            label="Рост"
                            meassureUnit="см"
                            name="height"
                            id="height"
                            value={formState.height}
                            onChange={handleNumberChange("height", 0, 1000)}
                            min={0}
                            max={1000}
                            error={formErrors.height}
                        />
                        <Input
                            type="number"
                            label="Вес"
                            meassureUnit="кг"
                            name="weight"
                            id="weight"
                            value={formState.weight}
                            onChange={handleNumberChange("weight", 0, 1000)}
                            min={0}
                            max={1000}
                            error={formErrors.weight}
                        />
                    </FieldSet>
                    <FieldSet
                        legend="Физическая активность"
                    >
                        <Input
                            type="radio"
                            label="Минимальная"
                            meassureUnit="Сидячая работа, отсутствие физических нагрузок"
                            name="activity"
                            id="min"
                            checked={formState.activity === "min"}
                            onChange={handleRadioChange("activity")}
                        />
                        <Input
                            type="radio"
                            label="Низкая"
                            meassureUnit="Редкие, нерегулярные тренировки, активность в быту"
                            name="activity"
                            id="low"
                            checked={formState.activity === "low"}
                            onChange={handleRadioChange("activity")}
                        />
                        <Input
                            type="radio"
                            label="Средняя"
                            meassureUnit="Тренировки 3-5 раз в неделю"
                            name="activity"
                            id="mid"
                            checked={formState.activity === "mid"}
                            onChange={handleRadioChange("activity")}
                        />
                        <Input
                            type="radio"
                            label="Высокая"
                            meassureUnit="Тренировки 6-7 раз в неделю"
                            name="activity"
                            id="high"
                            checked={formState.activity === "high"}
                            onChange={handleRadioChange("activity")}
                        />
                        <Input
                            type="radio"
                            label="Очень высокая"
                            meassureUnit="Больше 6 тренировок в неделю и физическая работа"
                            name="activity"
                            id="very-high"
                            checked={formState.activity === "very-high"}
                            onChange={handleRadioChange("activity")}
                        />
                    </FieldSet>
                    <div className="form__btns">
                        <Button
                            extraClassName="form__submit"
                            type="submit"
                            disabled={!isFormValid}
                        >
                            Рассчитать
                        </Button>
                        <Button
                            extraClassName="form__reset btn_transparent"
                            type="reset"
                        >
                            Очистить поля
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
