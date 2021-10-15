import React from 'react'
import "antd/dist/antd.css";
import CandidateDetailsForm from './CandidateDetailsForm';


const SearchDetails = () => {
    return (
        <div className="App">
            <h1>Please Enter the Name of the Candidate to Search!</h1>
            <br/>
                <CandidateDetailsForm/>
            <br />
        </div>
    )
}

export default SearchDetails
