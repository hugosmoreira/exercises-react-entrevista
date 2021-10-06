import React, { Component } from 'react'


class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    handleClickAdd1 = () => {
        this.setState({
            num: this.state.num + 1
        })
    }

    handleClickMenos1 = () => {
        this.setState({
            num: this.state.num - 1
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Contador: {this.state.num}</h1>
                <button className="button" onClick={this.handleClickAdd1} >Mais 1</button> 
                <button className="button" onClick={this.handleClickMenos1} >Menos 1</button>     
            </div>
        )
    }
}

export default ClassCounter