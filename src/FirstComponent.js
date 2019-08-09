import React, {Component} from 'react';

class FirstComponent extends Component{
    constructor(){
        super();
        this.state = {
            A:1,
            name:"Peter",
            count:10
        }
        this.Boom = this.Boom.bind(this);
    }

    Boom(){
        this.setState(
            {
                count: this.state.count+1
            }
        )
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <input value={this.state.name} />
                <button type="button" onClick={this.Boom}>Click</button>
            </div>
        )
    }
}
export default FirstComponent;