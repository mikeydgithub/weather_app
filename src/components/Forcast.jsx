import React from 'react'

function Forcast({title}) {
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2"/>

        <div className="flex flex-row items-center justify-between text-white">

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="https://user-images.githubusercontent.com/94988620/173457761-3cbb14da-7694-4d4b-899b-2aa77813dc75.png"
                className="w-12 my1"
                />
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="https://user-images.githubusercontent.com/94988620/173457761-3cbb14da-7694-4d4b-899b-2aa77813dc75.png"
                className="w-12 my1"
                />
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="https://user-images.githubusercontent.com/94988620/173457761-3cbb14da-7694-4d4b-899b-2aa77813dc75.png"
                className="w-12 my1"
                />
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="https://user-images.githubusercontent.com/94988620/173457761-3cbb14da-7694-4d4b-899b-2aa77813dc75.png"
                className="w-12 my1"
                />
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                    04:30 PM
                </p>
                <img src="https://user-images.githubusercontent.com/94988620/173457761-3cbb14da-7694-4d4b-899b-2aa77813dc75.png"
                className="w-12 my1"
                />
                <p className="font-medium">22°</p>
            </div>
        </div>
    </div>
  )
}

export default Forcast