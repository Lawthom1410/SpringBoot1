import React, {Component} from 'react';


class Fullname extends Component{
    render(){
        return(
            <div>
                <input placeholder = "First Name" /> 
                <input placeholder = "Middle Name(s)" />
                <input placeholder = "Last Name" />
            </div>
        )
    }
}
export default Fullname;