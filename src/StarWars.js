// criando uma Lista de items / pessoas

import axios from "axios"
import React , { Component }from 'react' 

class StarWars extends Component {
   state ={
       planets: []
   }


    componentDidMount() {
        axios.get(`http://swapi.dev/api/planets/1/`).then(res => {
            console.log(res.data)
            
            this.setState({planets: res.data})
        })
    }

    render(){
        return  (
                <div>
                    <ul>
                        {/* {this.state.planets.map(({ name, climate, gravity  }) => <li>{{name, climate, gravity}}</li>)} */}
                    </ul>
                </div>
        )
    }
}

export default StarWars