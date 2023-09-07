import { useState } from 'react';
import './PlayButton.css';

function PlayButton({message,children,onPlay,onPause}){
    console.log('render playButton')

    const [playing, setPlaying] = useState(false);  
    
    function handleClick(e){
        // console.log(e)

        e.stopPropagation()

        if(playing) onPause();
        else onPlay();

        setPlaying(!playing);
    }

    return (
            <button onClick={handleClick}>{children} : {playing ? '⏸️':'▶️'}</button>
        )

    // return (
    //     <button onClick={()=>console.log('play')}>Play</button>
    // )

}

export default PlayButton;