import React, {useState,useRef} from "react";
import {Player} from "./components/Player";
import { Song } from "./components/Song";
import "./styles/app.scss"
import data from "./lib/data"
import Library from "./components/Library";
import Nav from "./components/Nav";
import { playAudio } from "./lib/util";

function App() {
  const [songs,setSongs] = useState(data())
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime:0,
    duration:0
  })
  const [toggle,setToggle] = useState(true)
  const audioRef = useRef(null)

  const timeUpdateHander = (e) =>{
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo,currentTime:current,duration})
  }
 
  const onEndHandler = async () => {
    let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    
    audioRef.current.play();
    // await playAudio(audioRef)
      
    // if(!isPlaying){
    //   setIsPlaying(!isPlaying)
    // }
    // else{
    //   setIsPlaying(isPlaying)
    // }
    
}
 
  return (
    <div className={`App ${toggle ? "toggeld": ""}`}>
      <Nav 
       toggle={toggle}
       setToggle={setToggle}
       />
       <audio 
            onTimeUpdate={timeUpdateHander}
            onLoadedMetadata={timeUpdateHander}
            src={currentSong.audio}
            ref={audioRef}
            onEnded={onEndHandler}
            >
            
          </audio>
     <Song currentSong={currentSong} toggle={toggle} />
     <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
        audioRef={audioRef}
        toggle={toggle}
      
         />
     <Library
      songs={songs}
      toggle={toggle}
      setToggle={setToggle}
      setSongs={setSongs}
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      audioRef={audioRef}
      />
    </div>
  );
}

export default App;
