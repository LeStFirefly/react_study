import React, {Component} from 'react';


class Article extends Component {
    state = {
        isOpen : true
    }
    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section className = 'card-text'>{article.text}</section>;
        return(
            <div className = 'card mx-auto' style = {{width : '60%'}}>
                <div className ='card-header'>
                    <h2>
                        {article.title}
                        <button className='btn btn-primary btn-lg float-right' onClick = {this.clickButton}>{this.state.isOpen ? 'close' : 'open'}</button>
                    </h2>
                </div>
                <div className='card-body'>
                    {body}
                    <h6 className = 'card-subtitle text-muted'>{article.author}</h6>
                    <h6 className = 'card-subtitle text-muted'>{article.createTime}</h6>
                </div>
            </div>           
        );
    }
    clickButton = () => {
        this.setState({isOpen : !this.state.isOpen})
    };
}

export default Article;