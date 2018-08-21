import React, { Component } from 'react'

export default function Delete(props){
        return (
            <div>
            <button className = "deleteButton" onClick = {()=> props.deleteGame(props.id)}>Delete</button>
            </div> 
        )
}