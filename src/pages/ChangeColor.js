import React, { Component } from 'react';
import { browserHistory } from "react-router"
import "../App.css"
import api from "../api"

export class ChangeColor extends Component{
color
    render(){
        return(
            <div className="ChangeColor">
            <button onClick={() => browserHistory.push(`/user/${this.props.params.id}`)}>Voltar</button>
            <br></br>
            <input placeholder="hex color" onInput={(e) => this.color = e.target.value}></input>
            <button onClick={() => this.ir(this.props.params.id, this.color)}>Ir</button>
          </div>
        )
    }
    ir(user, color){
          if(!user || !color || user === "" || color === ""){
            return alert("Você não preencheu todos os campos")
          }
          api.post("/", { user: user, color: color})
    }
}
export default ChangeColor