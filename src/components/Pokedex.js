import React from 'react'
// import { useState, useEffect } from "react"
// import axios from "axios"


const Pokedex = ({ pokemonID, setPokemonID, currentPokemon, setCurrentPokemon }) => {

    // Next Pokemon
    const nextPokemon = () => {

        if (pokemonID < 898) {
            setPokemonID(pokemonID + 1)
        } else if (pokemonID === 898) {
            setPokemonID(1)
        }
    }

    const prevPokemon = () => {

        if (pokemonID > 1) {
            setPokemonID(pokemonID - 1)
        } else if (pokemonID <= 1) {
            setPokemonID(898)
        }

    }

    return (
        <div className="pokedex">

            <div className="left-side">

                <div className="left-top">

                    <div className="blue-circle-container">

                        <div className="blue-circle"></div>

                    </div>
                    <div className="top-lights">
                        <span className="top-light orange"></span>
                        <span className="top-light yellow"></span>
                        <span className="top-light green"></span>

                    </div>
                </div>

                <div className="left-mid">
                    <div className="main-screen-container">
                        <div className="main-screen">
                            <img src={currentPokemon ? currentPokemon.sprites.front_default : ''} alt="" />
                        </div>
                    </div>
                    <div className="two-buttons">
                        <span className="button"> </span>
                        <span className="button"> </span>
                    </div>
                </div>

                <div className="left-bottom">

                    <div className="black-button-container">
                        <span className="black-button"></span>
                    </div>

                    <div className="bottom-middle">

                        <div className="mini-screen-container">
                            <span className="mini-screen">
                                <h1 ># {currentPokemon ? currentPokemon.id : ""}</h1>
                            </span>


                        </div>
                    </div>


                    <div className="directional-pad">

                        <span onClick={() => { prevPokemon() }} className="left-direction direction"></span>
                        <div className="top-and-bottom">
                            <span className="top-direction direction"></span>
                            <span className="bottom-direction direction"></span>
                        </div>
                        <span onClick={() => { nextPokemon() }} className="right-direction direction"></span>

                    </div>
                </div>
            </div>

            <div className="right-side">

                <div className="right-top">

                    <div className="right-screen">

                        <h3>{currentPokemon ? `${currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1)}` : ""}  </h3>
                        <h4>Height: {currentPokemon ? currentPokemon.height : ""} </h4>
                        <h4>Weight: {currentPokemon ? currentPokemon.weight : ""}</h4>

                    </div>

                </div>

                <div className="right-mid">

                    <div className="top-row">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>

                    </div>

                    <div className="bottom-row">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>

                </div>

                <div className="right-bot">
                    <div className="dual-boxes">
                        <div className="box"></div>
                        <div className="box"></div>

                    </div>

                    <div className="yellow-button-container">
                        <div className="yellow-button">

                        </div>

                    </div>

                    <div className="double-screens">
                        <div className="screen">
                            <h4>{currentPokemon ? currentPokemon.types[0].type.name : ""}</h4>
                        </div>

                        <div className="screen">
                            <h4>{currentPokemon && currentPokemon.types[1] ? currentPokemon.types[1].type.name : ""}</h4>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Pokedex

// {/* <svg height="100" width="225" class="left-svg">
//                         <polyline
//                             points="0,75 70,75 90,38 224,38"
//                             style={{ fill: "none", stroke: 'black', strokeWidth: "5" }}
//                         />
//                     </svg> */}