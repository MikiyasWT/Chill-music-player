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
        playAudio(audioRef,setIsPlaying)
  
        

    }

   

    return (
        <div className={`library-song ${song.active ? "selected":"" } `} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
            <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
            </div>
            
        </div>
    )
}


export default SongsLibrary;