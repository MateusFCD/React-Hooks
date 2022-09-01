import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store'


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
                    <button className="btn" onClick={() => dispach({type: 'mult7'})}>*7</button>
                    <button className="btn" onClick={() => dispach({type: 'div25'})}>/25</button>
                    <button className="btn" onClick={() => dispach({type: 'add2'})}>+2</button>
                    <button className="btn" onClick={() => dispach({type: 'int'})}>int</button>
                    <button className="btn" onClick={() => dispach({type: 'n', payload: -9})}>-9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
