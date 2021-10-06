import React, { useState } from 'react'

const FunctionCounter = (props) => {

    const [count, setCount] = useState(0)

    const adicionaUm = (props) => {
        return setCount(count + 1)
    }

    const diminuiUm = (props) => {
        return setCount(count -1)
    }

    return (
        <div className="container">
            <h1>Function Counter: {count}</h1>
            <button className="button" onClick={adicionaUm}>Mais 1</button>
            <button className="button" onClick={diminuiUm}>Menos 1</button>
        </div>
    )
}

export default FunctionCounter
