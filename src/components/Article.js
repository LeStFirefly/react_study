import React, {Component} from 'react';


class Article extends Component {
/*     constructor(props) {
        super(props)
        this.state = {isOpen : true}
        this.clickButton = clickButton.bind(this)
    } */
    render(props) {
        const {article} = this.props;
        const body = <section className = 'content'>{article.text}</section>;
        return(
            <div className = 'wrapper'>
                <h2 className = 'title'>
                    {article.title}
                    {/* <button className='close_open' onClick = {clickButton}>{isOpen ? 'close' : 'open'}</button> */}
                </h2>
                {body}
                <h3 className = 'author'>{article.author}</h3>
                <h3 className = 'create-date'>{article.createTime}</h3>
            </div>           
        );
    }
/*     clickButton = () => {
        this.setState({isOpen : !this.state.isOpen})
    }; */
}

export default Article;