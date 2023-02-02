import operators from "../assets/operators/Operators"

export function ButtonsKeyboard() {
    return (
        <div>
            <table>
                <tr>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-purpleCustom text-2xl w-16 h-16 rounded-full">CE</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">C</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-purpleCustom text-2xl w-16 h-16 rounded-full flex justify-center items-center"><img src={operators.Percent} alt="" /></button></td>
                    <td><button className="bg-purple-600 m-1 bg-opacity-25 shadow-custom2 text-purpleCustom text-2xl w-16 h-16 rounded-full flex justify-center items-center"><img src={operators.Divide} alt="" /></button></td>
                </tr>
                <tr>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">7</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">8</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">9</button></td>
                    <td><button className="bg-purple-600 m-1 bg-opacity-25 shadow-custom2 text-purpleCustom text-2xl w-16 h-16 rounded-full flex justify-center items-center"><img src={operators.X} alt="" /></button></td>
                </tr>
                <tr>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">4</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">5</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">6</button></td>
                    <td><button className="bg-purple-600 m-1 bg-opacity-25 shadow-custom2 text-purpleCustom text-2xl w-16 h-16 rounded-full flex justify-center items-center"><img src={operators.Minus} alt="" /></button></td>
                </tr>
                <tr>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">1</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">2</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">3</button></td>
                    <td><button className="m-1 bg-opacity-25 shadow-custom2 text-purpleCustom bg-purple-600 text-2xl w-16 h-16 rounded-full flex justify-center items-center"><img src={operators.Plus} alt="" /></button></td>
                </tr>
                <tr>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-purpleCustom text-2xl w-16 h-16 rounded-full flex justify-center items-center"><img src={operators.PlusMinus} alt="" /></button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">0</button></td>
                    <td><button className="bg-gray-700 m-1 bg-opacity-25 shadow-custom2 text-whiteCustom text-2xl w-16 h-16 rounded-full">,</button></td>
                    <td><button className="bg-purple-400 m-1 bg-opacity-25 shadow-custom2 text-purpleCustom text-2xl w-16 h-16 rounded-full flex justify-center items-center"><img src={operators.Equals} alt="" /></button></td>
                </tr>
            </table>
        </div>
    )
}