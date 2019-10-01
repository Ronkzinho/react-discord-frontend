import React, { Component } from 'react';
import "../App.css"
import api from "../api"
import { browserHistory } from "react-router"

export class Home extends Component{
        userID
        color
        bot

        render(){  
          return (
            <div className="App" >
              <input placeholder="seu id" onInput={(e) => this.userID = e.target.value}></input>
              <button onClick={() => this.ir()}>Ir</button>
            </div>
          );
        }
        ir(){
            if(!this.userID || this.userID === ""){
              return alert("Você não pode trocar de pagina sem um id")
            }
            api.get("/user/" + this.userID)
            browserHistory.push("/user/" + this.userID)
        }
    }
        export default Home;        