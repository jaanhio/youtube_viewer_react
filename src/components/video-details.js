import React, { Component } from 'react';
import { Container, Segment, Loader } from 'semantic-ui-react';


const VideoDetail = (props) => {

  const selectedVideo = props.selectedVideo;

  if(!selectedVideo){
    return <Loader>Loading</Loader>
  }

  const videoId = selectedVideo.id.videoId;
  const description = selectedVideo.snippet.description;
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;


  return(
    <div>
      <Container textAlign='center'>
        <iframe src={youtubeUrl} width="80%" height="450" allowfullscreen />
      </Container>
      <Container textAlign='center'>
        <Segment><h5>{description}</h5></Segment>
      </Container>
    </div>
  )

}

export default VideoDetail;
