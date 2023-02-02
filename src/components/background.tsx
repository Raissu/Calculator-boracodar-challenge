import { Keyboard } from "./Keyboard";
import { Result } from "./result";


export function Background() {
    return (
        <div className="bg-backgroundCalculator px-9 py-14 shadow-custom rounded-borderCalculator w-widthCalculator h-heightCalculator ">
            <Result />
            <Keyboard />
        </div >
    )
}