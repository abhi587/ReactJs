import './PlayButton.css';

function PlayButton({message,children,onPlay,onPause}){

    let playing = false;  
    // e is event object
    function handleClick(e){
        console.log(e)
        //to stop event bubbling we have a method called event propogation
        e.stopPropagation()

        e.preventDefault()// it is used to stop the default behaviour of the event that is going to happen in the html page ex- in form 
        // submit button is their and if we want to stop that button we use this

        if(playing) onPause();
        else onPlay();

        playing = !playing;
    }

    return (
            <button onClick={handleClick}>{children} : {playing ? '>':'||'}</button>
        )

    // return (
    //     <button onClick={()=>console.log('play')}>Play</button>
    // )

}

export default PlayButton;