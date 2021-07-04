 
 import './Card.css'
 
const Card = ({ song }) =>{

 return(
<div className="card">
<h1>Title: {song.title}</h1>
<h2>Artist: {song. artist}</h2>
<h2>Album: {song.album}</h2>
</div>
 )
}

 export default Card