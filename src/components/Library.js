
import SongsLibrary from "./SongsLibrary";

const  Library = ({audioRef,songs,setSongs,currentSong,setCurrentSong,isPlaying,setIsPlaying}) => {

    return (
       <div className="library">
        <h3>Library</h3>
            <div className="library-songs ">
                {
                    songs.map(song => (
                        <SongsLibrary 
                           key={song.id} 
                           song={song}
                           songs={songs}
                           setSongs={setSongs}
                           id={song.id}
                           currentSong={currentSong}
                           setCurrentSong={setCurrentSong}
                           isPlaying={isPlaying}
                           setIsPlaying={setIsPlaying}
                           audioRef={audioRef}
                           />
                    ))
                }
                
            </div>
       </div>
    )
}

export default Library;