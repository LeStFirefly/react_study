import React, {Component} from 'react';
import articles from './textContent';
import ArticleList from './components/ArticleList';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return(
      <div className = 'container'>
        <div className = 'jumbotron'>
          <h1 className='display-3' style = {{textAlign: 'center'}}>App Run</h1>
        </div>
        <ArticleList articles = {articles}/>
      </div>
    );
  }
}

export default App;
