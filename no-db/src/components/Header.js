import React, { Component } from 'react'

function Header(props)  {
        return (
            <div className = "header"> 
            
                <div className = "title">VIDEOGAME PLAYLIST</div>

                <div>
                    <input className= "searchBar" placeholder='Search' onChange = {e=>props.change(e.target.value) } type = "text"/>
                    <button className = "searchBar"onClick={() =>props.updategames(props.filterGames)}>Search</button>
                </div>

            </div>
        )
}

export default Header;