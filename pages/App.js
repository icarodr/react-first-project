import "./App.css";
import React, { Component } from "react";


class Ap extends Component{
  render(){
    return(
      <>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="nav.css">
                <title>ApeView</title>
            </head>
            <body>
                <img src="./images/linha_logo.png" alt="Linha Bosch" class="linha">
                <header class="cabecalho">
                    <img src="./imagens/logo_bosch.png" alt="Logo Bosch" class="logo">
                    <input type="text" class="pesquisa">
                    <a href="../css/search.svg" class="icons-search"></a>
                    <a href=""></a>
                    <a href="" class="icons-exit"></a>
                </header>
            </body>
          </html>
      </>
    )
  }
}

export default Ap