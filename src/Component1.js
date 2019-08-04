import React from 'react'

export default function Component1(props) {
    return (
        <div style= {{ color: "red" , border: "1px solid blue" }}>
                <h1>{ props.name }</h1>
                <h1>{ props.markpoints }</h1>

        </div>
    )
}
