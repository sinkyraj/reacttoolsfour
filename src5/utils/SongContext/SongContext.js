import { createContext } from 'react'


const SongContext = createContext ({
title: '',
artist: '',
album: '',
songs: [],
handleInputChange: () => { },
handleInputSubmitSong: () => { }

})

export default SongContext