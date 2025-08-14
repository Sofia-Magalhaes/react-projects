import { useState } from "react";

export function useForm(steps){
    const [currentStep, setCurrentStep] = useState(1)

    return{
        currentStep,
        currentComponent: steps[currentStep],
    }
}