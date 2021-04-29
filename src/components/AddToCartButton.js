import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import Loader from "react-loader-spinner";


const AddToCartButton = ({ product }) => {
    const [addItem, setAddItem] = useState([{}])
    const [isClicked, setIsClicked] = useState(false)
    const [clickedItem, setClickedItem] = useState(null)
    const [addQuantity, setAddQuantity] = useState(0)

    const handleAddToCart = (e) => {
        localStorage.setItem("productid", product.id)
        setIsClicked(true)
        setClickedItem(product.id)
        setAddItem(product.name)
    }

    const addToCart = (data) => {
        var a = [];
        a = JSON.parse(localStorage.getItem("products")) || [];
        a.push(data);
        localStorage.setItem("products", JSON.stringify(a))
    }

    useEffect(() => {
        if (isClicked === true && clickedItem === localStorage.getItem("productid")) {
            setTimeout(() => {
                setIsClicked(false)
            }, 1800)
        }

    }, [isClicked])

    return (
        <div>
            <Button style={{ width: "131px", height: "36px", margin: "0auto" }} primary={true} round={false} onClick={(e, i) => {
                handleAddToCart(e)
                addToCart(
                    {
                        id: product.id,
                        item: product.name,
                        img: product.images[0].url,
                        price: product.price,
                        category: product.categories[0].name,
                        qty: 1,
                    }
                )

            }}>{clickedItem == product.id && isClicked ?
                <div><Loader type="Oval" color="#cccccc" height={19} width={19} /></div> : <p style={{ marginBottom: "0", marginTop: "-3px" }}>KÖP</p>}</Button>

        </div>
    )
}

// <button onClick={() => localStorage.clear()}>Clear</button>

export default AddToCartButton