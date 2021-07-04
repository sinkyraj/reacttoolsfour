import { useState } from 'react'

import SongContext from './utils/SongContext'
import Card from './components/Card'
import Useless from './components/Useless'

const App = () =>{

const [songState, setSongState] = useState({
  title: '',
  artist: '',
  album: '',
  songs: []


})


songState.handleInputChange = ({ target }) => {
    setSongState({ ...songState, [target.name]: target.value })
  }


songState.handleInputSubmitSong = event => {
event.preventDefault()
//console.log()
//const songs = JSON.parse(JSON.stringify(songState.songs))  --> This is a way of create duplicate of Array

const songs = [...songState.songs]
songs.push ({
title: songState.title,
artist: songState.artist,
album: songState.album

})
setSongState({
...songState, 
songs,
title: '',
artist: '',
album: ''

})

}


return (

<>
<SongContext.provider value={songState}>
<h1>This is app Page</h1>

<Useless/>

<div>
{/* <Card /> */}
{
songState.songs.length ? 
songState.songs.map((song, i ) => <Card key= {i} song = {song}/> )
: null
}
</div>
</SongContext.provider>
</>

)


}

export default App