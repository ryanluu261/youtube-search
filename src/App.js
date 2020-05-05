import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import debounce from 'lodash.debounce';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.search = debounce(this.search, 300)
    this.search('pixar')
  }

  search = (text) => {
    youtubeSearch(text).then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  // handleVidSelect = (selectedVideo) => {
  //   this.setState({
  //     selectedVideo: selectedVideo
  //   })
  // }
  
  render() {

    if (!this.state.selectedVideo) {
      return <div>Loading..</div>
    }

    return (
      <div className="App">
        <SearchBar id="search-bar" onChange={this.search} />
        <div id="video-section" >
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
        
      </div>
    );
  }
}

export default App;
