

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTowerBroadcast} from "@fortawesome/free-solid-svg-icons"
import { playAudio } from "../lib/util" 


const SongsLibrary = ({audioRef,song,songs,setSongs,setCurrentSong,isPlaying,setIsPlaying,id}) =>{

   
    const songSelectHandler = () => {
        
        setCurrentSong({...song,active:true})
        
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return {
                    ...song,
                    active:true,   
                }
               
             
            }
            else {
                return {
                    ...song,
                    active:false,   
                }
            }
        })

        setSongs(newSongs);

            const isPlayingPromise = audioRef.current.play();

            if(isPlayingPromise !==undefined){
              isPlayingPromise.then((audio) => {
                audioRef.current.play()
                setIsPlaying(true)
              })

            }
        playAudio(audioRef,setIsPlaying)



    }
   
    return (
        <div className={`library-song ${song.active ? "selected":"" } `} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
            <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
            </div>
            {
                song.active && isPlaying &&
                    <div className="icon">
                       <FontAwesomeIcon className="fa-beat" icon={faTowerBroadcast}/>
                       
                    </div>
            }
            
        </div>
    )
}
export default SongsLibrary;