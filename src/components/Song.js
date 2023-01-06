

export const Song = ({currentSong}) => {
   
   console.log(currentSong.active)
    return (
        <div className="songContainer">
            <img src={currentSong.cover} alt={currentSong.name}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
         
        </div>
    )
}