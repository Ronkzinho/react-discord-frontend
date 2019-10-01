import React, { Component } from 'react';
import { browserHistory } from "react-router"
import "../App.css"
import api from "../api"


export class User extends Component{
color
atualColor
    componentDidMount(){
      api.get(`/user/${this.props.params.id}`).then(async response => {
        this.atualColor = response.data
        
        document.getElementById("atualColor").style.backgroundColor = this.atualColor
        document.getElementById("atualColor").style.padding = "6px"
        document.getElementById("atualColor").style.border = "1px solid black"
        var elemento = document.createElement("p")
        elemento.innerText = this.atualColor
        document.getElementById("atualColor").appendChild(elemento)
      })
    }
    render(){
        return(
            <div className="Home">
            <button onClick={() => browserHistory.push("/home")}>Voltar</button>
            <br></br>
            Cor atual:
            <div id="atualColor" className="atualColor">

            </div>
            <button onClick={() => this.changeColor()}>Mudar de cor</button>
          </div>
        )
    }
    changeColor(){
      browserHistory.push(`/user/${this.props.params.id}/changeColor`)
    }
}