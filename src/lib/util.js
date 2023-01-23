
export const playAudio = async (audioRef) => {
        
        const isPlayingPromise = await audioRef.current.play();
        if(isPlayingPromise !== undefined){
            isPlayingPromise.then((audio) => {
              audioRef.current.play()
              //setIsPlaying(!isPlaying)

            })
              
          
    }
    
}