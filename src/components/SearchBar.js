import React, { useState } from 'react';
import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {

    const BarStyling = { width: "100%", height: "43px", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    return (

        <div><SearchInput
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"Sök efter produkter här"}
            onChange={(e) => setKeyword(e.target.value)}
        />

        </div>
    );
}

const SearchInput = styled.input`
    position: absolute;
    top: calc(100% + 0.1px);
    left: 0;
    right: 0;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 0.03em;
    z-index: 998;
    text-indent: 25px;
`



export default SearchBar