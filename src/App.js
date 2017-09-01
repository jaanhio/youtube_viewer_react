import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import SearchBar from './components/search-bar';
import VideoSection from './components/video-section';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import Footer from './components/footer';
import APIKEY from './config';

const API_KEY = APIKEY.API_KEY;
// console.log(API_KEY);

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo: null,
      test: []
    }
    this.videoSearch('google');
  }

  videoSearch(term){
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${term}&key=${API_KEY}`)
    .then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        videos: data,
        selectedVideo: data.items[0]
      });
    }).catch(err => {
      console.log(err);
    });
  }

  // videoSearch(term){
  //     YTSearch({key: API_KEY, term:term}, (videos) => {
  //       this.setState({
  //         videos:videos,
  //         selectedVideo: videos[0]
  //       }); //equivalent to this.setState({videos:videos});
  //     });
  // }


  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);;

    let testDate = this.state.videos;
    console.log(testDate);
    return (
      <Container>
        <SearchBar onSearchInputChange={videoSearch} />
        <h1>{this.state.term}</h1>
        <VideoSection videos={this.state.videos.items} selectedVideo={this.state.selectedVideo} onVideoSelect={video => this.setState({selectedVideo: video})}/>
        <Footer />
      </Container>
    );
  }

}


export default App;
