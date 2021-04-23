import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ProductList from '../data/ProductList'
import styled from "styled-components"


const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [productListDefault, setProductListDefault] = useState();
    const [productList, setProductList] = useState();

    // const fetchData = async () => {
    //     return await fetch('https://restcountries.eu/rest/v2/all')
    //         .then(response => response.json())
    //         .then(data => {
    //             setProductList(data)
    //             setProductListDefault(data)
    //         });
    // }

    const url = JSON.parse(localStorage.getItem("allProducts"))

    // console.log(JSON.parse(localStorage.getItem("allProducts")))
    const fetchData = async () => {
        setProductList(url)
        setProductListDefault(url)
    }

    //const fetchData = async () => {
    //    return await fetch(localStorage.getItem("allProducts"))
    //        .then(response => response.json())
    //        .then(data => {
    //            setProductList(data)
    //            setProductListDefault(data)
    //        });
    //}
    //

    const updateInput = async (input) => {
        const filtered = productListDefault.filter(product => {
            return product.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        if (input.length > 2) {
            setProductList(filtered);
        }

    }

    useEffect(() => { fetchData() }, []);

    return (
        <>
            <SearchBar
                input={input}
                onChange={updateInput}
                styles={{ marginLeft: "5em" }}
            />
            <ProductList input={input} productList={productList} />
        </>
    );
}


export default SearchPage