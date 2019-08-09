import React, {Component} from 'react';

class Results extends Component {
    
    render(){
        let total = parseInt(this.props.phys) + parseInt(this.props.math) + parseInt(this.props.chem);
        let percent = parseInt(100*(total)/(150*3));
        let pass;
        if (percent > 60) {
            pass = "Pass";
        } else {
            pass = "Fail";
        }
        return (
            <div>
                <h1>Name: {this.props.name} </h1>
                <h3>Physics: {this.props.phys}</h3>
                <h3>Maths: {this.props.math}</h3>
                <h3>Chemistry: {this.props.chem}</h3>
                <h2>Total: {total}</h2>
                <h2>Percent: {percent + "%"}</h2>
                <h2>Pass/Fail: {pass}</h2>
            </div>
        )
    }
}
export default Results;