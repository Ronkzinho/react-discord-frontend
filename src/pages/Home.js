import React, { Component } from 'react';
import "../App.css"
import api from "../api"
import { browserHistory } from "react-router"

export class Home extends Component{
        userID
        color
        bot
        users
        componentDidMount(){
          var sel = document.getElementById('select');
          api.get("/users").then(async response => {
            var arr1 = response.data.users
            var arr2 = response.data.nick 
            var arr = arr1.map(function (x, i){
              return { user: x, nick: arr2[i]}
            })
            arr.map(c => {
              var opt = document.createElement('option');
              opt.appendChild( document.createTextNode(c.user + " - " + c.nick) );
              opt.value = c.user; 
              sel.appendChild(opt); 
            })
          })

          
        }
        render(){  
          return (
            <div className="App" >
              Usuário: 
              <br />
              <select id="select"></select>
              <br />
              <button onClick={() => this.ir()}>Ir</button>
            </div>
          );
        }
        ir(){
          this.userID = document.getElementById("select").value
            if(!this.userID || this.userID === ""){
              return alert("Você não pode trocar de pagina sem um id")
            }
            api.get("/user/" + this.userID)
            browserHistory.push("/user/" + this.userID)
        }
    }
        export default Home;        