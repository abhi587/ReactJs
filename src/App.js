import Video from './components/Video'
import './App.css'
import videos from "./data/data"
import PlayButton from './components/PlayButton';

function App() {
  return (
    // app is used to show event bubbling when an event occurs it will propogate till its parents,we need to stop it ,we can 
    // stop it by using event object
    <div className='App' onClick={()=>console.log('App')}> 
      <div>Videos</div>
      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>)
      }

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}
        {/* <PlayButton name="pause" message="pause-msg" onSmash={()=>alert('PlayYY')}>Pause</PlayButton> */}
      </div>

    </div>
  )
}

export default App;