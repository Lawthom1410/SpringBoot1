import React, {Component} from 'react';

class Message extends Component{
    render(){
        return (
            <div>
                {this.props.name} lives in {this.props.city}
            </div>
        )
    }
}
export default Message;