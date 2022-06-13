import React from 'react'

function TopButtons() {

    // an array of objects
    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Sydney'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Paris'
        }
    ]

    // map over city data
    // include a key for the city id due to mapping

    return (

        <div className="flex items-start justify-around my-6">
            {cities.map((city) => (
                <button key={city.id} className="text-white text-lg font-medium">
                {city.title}</button>
            ))}
        </div>
    )
}

export default TopButtons
