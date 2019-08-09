import React, {Component} from 'react';

class Address extends Component{
    render(){
        return(
            <div>
                <input placeholder="House Number" />
                <input placeholder="Postcode" />
            </div>
        )
    }
}
export default Address;