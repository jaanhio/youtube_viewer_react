import React, { Component } from 'react';
import { Grid, Rail, Segment, Container } from 'semantic-ui-react';
import VideoList from './video-list';
import VideoDetail from './video-details';

const VideoSection = (props) => {


  return(
    <div>
      <Container className='videoDetail'>
        <VideoDetail selectedVideo={props.selectedVideo}/>
      </Container>
      <Container>
        <VideoList videos={props.videos} onVideoSelect={props.onVideoSelect}/>
      </Container>
    </div>
  )
}

export default VideoSection;
