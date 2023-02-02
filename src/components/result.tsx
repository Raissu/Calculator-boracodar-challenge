import equals from '../assets/Equals.png'

export function Result() {
    return (
        <div className="flex-col justify-end items-center w-288 h-86 px-18 text-grayCustom ">
            <div className='flex justify-end text-xl'>
                <h1>1+1</h1>
            </div>

            <div className='flex justify-between mt-5 text-white text-3xl'>
                <img className='object-contain' src={equals} alt="" />
                <h1>2</h1>
            </div>
        </div >
    )
}