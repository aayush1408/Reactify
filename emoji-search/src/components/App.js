import React, { Component } from 'react';
import SearchBar from './search_bar';
import EmojiList from './emoji_list';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar/><br/>
        <EmojiList />
      </div>
    );
  }
}

export default App;
