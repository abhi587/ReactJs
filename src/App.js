
import './App.css'
import videoDB from "./data/data"
import AddVideo from './components/AddVideo';
import Counter from './components/counter';
import VideoList from './components/videoList';
import { useState } from 'react';

function App() {
  console.log('render app')

  const [videos, setVideos] = useState(videoDB);

  function addVideos(video){
      setVideos([
                ...videos,
                {...video, id: videos.length+1}
            ]);
  }

  return (
    // app is used to show event bubbling when an event occurs it will propogate till its parents,we need to stop it ,we can 
    // stop it by using event object
    <div className='App' onClick={() => console.log('App')}>
      <AddVideo addVideos= {addVideos}></AddVideo>
      <VideoList videos={videos}></VideoList>
    </div>
  )
}

export default App;