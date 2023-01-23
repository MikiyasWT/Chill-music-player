

export const Song = ({currentSong,toggle}) => {
   
   
    return (
        <div className={`songContainer ${toggle ? "toggled":""}`}>
            
            <img src={currentSong.cover} alt={currentSong.name}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
         
        </div>
    )
}