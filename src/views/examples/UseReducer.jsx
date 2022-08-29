import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    number: 0,
    cart: [],
    products: [],
    user: null,
}

function reducer(state, action) {
    switch(action.type) {
        case 'add2':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: {name: action.payload}}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispach] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : 
                <span className="text">Sem Usuário</span> }
                
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispach({type: 'login', payload: 'Mateus'})}>Login</button>
                    <button className="btn" onClick={() => dispach({type: 'add2'})}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
