import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Weather from './components/Weather';

class App extends Component {
  constructor(){
    super()
    this.state ={
      videogameslist:[],
      name:'',
      year:'',
      price:'',
      review:'',
      image:'',
      updateReview:'',
      games: [],
      filterGames: ''
    }
    this.deleteGame = this.deleteGame.bind(this)
    this.updateReview = this.updateReview.bind(this)
    this.createVideogame = this.createVideogame.bind(this)
  }
 componentDidMount(){
   axios.get('/api/video_games').then(games=>{
    this.setState({videogameslist:games.data})
   })
 }

  createVideogame(){
    const {name, year, price, review, image} = this.state
    let newGame = {
      name:name,
      year:year,
      price:price,
      review:review,
      image:image
    }
    console.log(newGame)
    axios.post('/api/video_games', newGame).then(res =>{
      console.log('res', res)
      this.setState({videogameslist:res.data})
    })
  }
createName(val){
  this.setState({name:val})
}
createYear(val){
  this.setState({year:val})
}
createPrice(val){
  this.setState({price:val})
}
createReview(val){
  this.setState({review:val})
}
createImage(val){
  this.setState({image:val})
}

deleteGame(id){
  axios.delete(`/api/video_games/${id}`).then(res=>{
    this.setState({videogameslist:res.data})
  })
}

updateReview(val){
  this.setState({updateReview:val})
}

updateGame(id, review){
  console.log('review', review)
  axios.put(`/api/video_games/${id}`,{review}).then(res=>{
    axios.get('/api/video_games').then(res => {
      console.log('asdfasdfasdfasdfs-----------------', res)
    this.setState({
      videogameslist:res.data
    })
  })
})
}

updateGames = () => {
  let gamesToDisplay;
      gamesToDisplay = this.state.videogameslist.filter(e => {
          if(e.name.includes(this.state.filterGames)){
              return e
          }
      }).map((e, i)=>{
         return (
           <div>
              <img className ="image" src ={e.image}/>
              <div className ="game-name">Title: {e.name}</div>
              <div className ="game-year">Released: {e.year}</div>
              <div className ="game-price">Cost: {e.price}</div>
              <div className ="game-review">Review: {e.review}</div>
           </div>
         ) 
         
        })
        this.setState({
          games: gamesToDisplay
        })
      }
      
      handleChange = (filter) => {
        this.setState({filterGames:filter})
      }
      
      render() {
        console.log(this.state)
        let games = this.state.videogameslist.map(e =>{
          
          return <div key={e.id} className = "border">
      <div className ="all">
      <img className ="image" src ={e.image}/>
      <div className ="game-name">Title: {e.name}</div>
      <div className ="game-year">Released: {e.year}</div>
      <div className ="game-price">Cost: {e.price}</div>
      <div className ="game-review">Review: {e.review}</div>
      
      <button className = "deleteButton" onClick = {()=> this.deleteGame(e.id)}>Delete</button>
      <button className = "updateButton" onClick = {()=> this.updateGame(e.id, this.state.updateReview)}>Update Review</button>
      <input className = "update" onChange = {e=>this.updateReview(e.target.value)}/>
      
      </div>
      </div>
      })
      return (
        <div className="App">
        <Header className = "header" change={this.handleChange} videogames={this.state.videogameslist} updategames={this.updateGames} filterGames={this.state.filterGames}/>
        <Weather className= 'weather'/>
      <div className='input-container'>
          Image: <input className = "image" onChange = {e=>this.createImage(e.target.value)}/>
          Title: <input className = "name" onChange = {e=>this.createName(e.target.value)}/>
          Released: <input className = "year" onChange = {e=>this.createYear(e.target.value)}/>
          Price: <input className = "price" onChange = {e=>this.createPrice(e.target.value)}/>
          Review: <input className = "review" onChange = {e=>this.createReview(e.target.value)}/>
         <button className = "create" onClick={this.createVideogame}>Create</button>
      </div>
      {this.state.games.length ? <div>{this.state.games}</div> : <div>{games}</div>}
      </div>
    );
  }
}
export default App;