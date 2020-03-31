import React, {Component} from 'react'

const HelloRender = (props) => <h1>Hola render !</h1>

class Render extends Component{
    
    constructor(props){
        console.log('render');
        super(props)
        this.state = {mensaje: 'mensaje inicial'}

    }

    componentWillMount(){
        console.log('componentWillMount');
        
    }

    render(){
        console.log('render');
        return ([
            <h1 key='A'>Primer elemento</h1>,
            <HelloRender key='B'></HelloRender>,
            <HelloRender key='C'></HelloRender>,
            <h1 key='D'>Primer elemento</h1>
        ])
    }
}

export default Render