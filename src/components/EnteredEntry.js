import React from 'react'

function EnteredEntry(props) {
    const todayDate = new Date().getDate();
    console.log('props', props)
    return (
        <div>
            {props.date.map((value, index) => {
                return value + 3 === todayDate ?
                <div key={index}>
                    {/* {props.body} */}
                    hihi
                </div>
                : <div></div>
            })}
        </div>
    )
}

export default EnteredEntry
