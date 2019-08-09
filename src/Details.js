import React, {Component} from 'react';
import Address from "./Address";
import Fullname from "./Fullname";
import Message from './Message';
import Results from './Result';

class Details extends Component{
    render() {
        return (
            <div>
                {/* <form>
                    <Fullname />
                    <Address />
                    <button>Submit</button>
                </form>
                <Message name="Shafeeq" city="Manchester" />
                <Message name="Peter" city="London" /> */}
                <Results name="Scott" phys="100" math="140" chem="40" />
            </div>
        )
    }   
}
export default Details;