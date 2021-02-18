import React, {Component} from 'react';
import articles from './textContent';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return(
      <div className = 'container'>
        <h1>App Run</h1>
        <ArticleList articles = {articles}/>
      </div>
    );
  }
}

export default App;
