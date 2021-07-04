
import { useContext } from 'react'
import SongContext from '../../utils/SongContext'

const Form = () =>{

const {
  title,
  artist,
  album,
  handleInputChange,
  handleInputSubmitSong

 } = useContext(SongContext)
return(
 
 
  <form>
<p>
 <label htmlFor="title">Title: </label>
 <input 
 type="text" 
 name="title" 
 value= {title}
 onChange={handleInputChange}
 />
</p>
<p>
<label htmlFor="artist">Artist: </label>
<input 
type="text" 
name="artist" 
value= {artist}
onChange={handleInputChange}
/>

</p>
<p>
<label htmlFor="album">Album: </label>
<input 
type="text" 
name="album" 
value={album}
onChange={handleInputChange}
/>
</p>
<p>
<button onClick={handleInputSubmitSong}>submit</button>

</p>

</form>
 
)


}

export default Form