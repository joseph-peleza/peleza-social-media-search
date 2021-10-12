import React from 'react'
import "antd/dist/antd.css";
import "./App.css";
import UserDetailsForm from './UserDetailsForm';


const SearchDetails = () => {
    return (
        <div className="App">
            <h1>Please Enter the Name of the Candidate to Search!</h1>
            <br/>
                <UserDetailsForm/>
            <br />
        </div>
    )
}

export default SearchDetails
