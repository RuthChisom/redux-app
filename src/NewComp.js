import React, { Component } from "react";
import {connect} from "react-redux";

class NewComp extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         message: "Are you Happy?",
    //     };
    // }

        styles = {
            fontStyle: "italic",
            color: "purple",
        }

        // ButtonChange = () => {
        //     this.setState({
        //         message: "Yaay! Happiness is free!!"
        //     })
        // }

        render(){
            return(
                <div className="App">
                    <h3 style={this.styles}> {this.props.message} </h3>
                    <button onClick={this.props.ButtonChange}>Yesssss</button>
                </div>
            )
        }

    }
    const mapStatetoProps = state => {
        return{
            message: state.message
        }
    }

    const mapDispatchtoProps = dispatch => {
        return{
            ButtonChange: () => dispatch({type: 'Message change'})
        }
    }

export default connect( mapStatetoProps, mapDispatchtoProps )(NewComp);