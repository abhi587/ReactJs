import { useContext } from 'react';
import './Video.css'
import ThemeContext from '../context/ThemeContext';

function Video({ title,id, channel, views, time, verified,children,dispatch,editVideo}) {
    console.log('render video')
    const theme = useContext(ThemeContext)

    return (
        <>
            <div className={`container ${theme}`}>
                <button className='close' onClick={()=>dispatch({ type: 'DELETE', payload: id })}>X</button>
                <button className='edit' onClick={()=>editVideo(id)}>Edit</button>
                <div className='pic'>
                    <img
                        src={`https://picsum.photos/id/${id}/160/90`}
                        alt="Not found"
                    />
                </div>
                <div className='title'> {title}</div>
                <div className='channel'> {channel}
                {verified ? "✅" : null} </div>
                <div className='views'>
                    {views} <span>.</span> {time}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Video;