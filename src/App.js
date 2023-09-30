
import './App.css'
import videoDB from "./data/data"
import AddVideo from './components/AddVideo';
import Counter from './components/counter';
import VideoList from './components/videoList';
import { useContext, useReducer, useState } from 'react';
import ThemeContext from './context/ThemeContext';

function App() {
  console.log('render app')
  const [editableVideo, seteditableVideo] = useState(null)

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...videos,
          { ...action.payload, id: videos.length + 1 }
        ]

      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)

      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        seteditableVideo(null);
        return newVideos;

      default:
        return videos
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB)

  // const themeContext = useContext(ThemeContext);

  const [mode, setMode] = useState('darkMode')


  function editVideo(id) {
    seteditableVideo(videos.find(video => video.id === id))
  }


  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App ${mode}`} onClick={() => console.log('App')}>
        <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Mode</button>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
        <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>

      </div >
    </ThemeContext.Provider>
  )
}

export default App;