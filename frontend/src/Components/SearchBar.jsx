import React from 'react';
import {
    Button,
  } from "react-bootstrap";

const SearchBar = ({keyword, handleClick, onSubmit:setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem", marginTop:"30px"};

    return (
        <div className="maincontainer">
            <input 
                style={BarStyling}
                type="text"
                value={keyword}
                placeholder={"address"}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button 
                variant="primary" 
                type="submit"
                onClick={handleClick}
            >
                Submit
            </Button>
        </div>
    );
}

export default SearchBar