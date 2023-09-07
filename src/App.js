import Video from './components/Video'
import './App.css'
import videoDB from "./data/data"
import PlayButton from './components/PlayButton';
import Counter from './components/counter';
import { useState } from 'react';

function App() {
  console.log('render app')

  const [videos, setVideos] = useState(videoDB);

  return (
    // app is used to show event bubbling when an event occurs it will propogate till its parents,we need to stop it ,we can 
    // stop it by using event object
    <div className='App' onClick={() => console.log('App')}>
      <div>
        <button onClick={() => {
          setVideos([...videos,{
            id: videos.length+1,
            title: "MongoDB Js tutor",
            views: "21B",
            time: "10 Year ago",
            channel: "Code lover",
            verified: true,
          }]);
        }}>Add Video</button>
      </div>
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
            onPlay={() => console.log('Playing..', video.title)}
            onPause={() => console.log('Paused..', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>)
      }

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}
        {/* <PlayButton name="pause" message="pause-msg" onSmash={()=>alert('PlayYY')}>Pause</PlayButton> */}
      </div>

      <Counter></Counter>

    </div>
  )
}

export default App;