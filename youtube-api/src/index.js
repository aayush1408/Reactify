import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
const API_KEY = 'AIzaSyBLaBl7fDzDst8Rm-3DVa_zpljrwx0CBKE';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {videos:[],selectedVideo:null};
        this.videoSearch('surfboards');
    }
    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos)=>{
        this.setState({ videos :videos ,selectedVideo:videos[0] });
});        
    }
    render(){
        return(
               <div>
               <SearchBar onSearchterm={term => this.videoSearch(term)} />
               <VideoDetail video={this.state.selectedVideo} />
               <VideoList videos ={this.state.videos} onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } />
               </div>
               );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

