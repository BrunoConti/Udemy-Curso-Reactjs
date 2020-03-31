import React, {Component} from 'react'

class LoginButton extends Component {
    render(){
        return <button>Iniciar Sesión</button>
    }
}


class LogoutButton extends Component {
    render(){
        return (
            <div>
                <p>Bienvenido, Usuario!</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}


// function useConditionalRedering (mostrarA){
//     if (mostrarA){
//         return <ComponenteA></ComponenteA>
//     }
//     return <ComponenteB></ComponenteB>
// }

export default class ConditionalSection extends Component{
    constructor(){
        super()
        this.state = {isUserLogged:true }
    }

    render(){ 

        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged
                ?<LogoutButton></LogoutButton>
                :<LoginButton></LoginButton> }
            </div>
        )
    }
}