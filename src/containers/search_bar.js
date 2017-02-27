import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term : ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term : event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        //we need to search the weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term : ""});
    }

    render(){
        return(
            <div>
                <form className = "input-group" onSubmit = {this.onFormSubmit}>
                    <input className = "form-control"
                    placeholder = "Give a five-day forecast in your favourite cities.."
                    value = {this.state.term}
                    onChange = {this.onInputChange}/>
                    <span className = "input-group-btn">
                        <button className = "btn btn-primary" type="submit">Submit</button>
                    </span>
                </form>
            </div>
        );
    }
} 


const mapDispatchToProps= (dispatch) => {
    return(bindActionCreators({fetchWeather}, dispatch))
}

export default connect(null, mapDispatchToProps)(SearchBar);