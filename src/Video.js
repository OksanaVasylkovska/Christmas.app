import video from './assets/video/video.mp4';
function Video() {
  return (
    <div className='video-container'>
    <div>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  ); 
}

export default Video;
