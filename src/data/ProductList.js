import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

const ProductList = ({ input, productList = [] }) => {
    let search;
    if (input.length > 0) {
        search = productList.map((data, index) => {
            if (data) {
                return (
                    <SearchList key={data.name} to={`/produkt/${data.slug}`}>
                        <LeftColumn>
                            <ItemLink to={`/produkt/${data.slug}`}>
                                <ItemImage src={data.images[0].url} alt="" />
                            </ItemLink>
                            <TitleWrapper>
                                <SearchItem to={`/produkt/${data.slug}`}>{data.name}</SearchItem>
                                <p>{data.categories[0].name}</p>
                            </TitleWrapper>
                        </LeftColumn>
                        <RightColumn>
                            <p>{data.price} kr</p>
                        </RightColumn>
                    </SearchList>
                )
            }
            return null
        })
    }
    return (
        <SearchWrapper>
            {search}
        </SearchWrapper>
    );
}

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 88px);
    left: 0;
    right: 0;
    border-radius: 5px;
    z-index: 20;
`

const SearchList = styled(Link)`

    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    margin-bottom: 0em;
    border-top: 1px solid #dbdbdb;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
    color: #373737;
    transition: 0.3s ease;
    filter: brightness(90%);
&:hover {
    filter: brightness(100%);
}

`

const SearchItem = styled.div`
    text-decoration: none;
    color: #373737;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        color: #877D70;
    }
`

const ItemImage = styled.img`
    width: 100px;
    height: auto;
    border-radius: 5px;

`

const ItemLink = styled(Link)`
    transition: 0.3s ease;
    filter: brightness(80%);

    &:hover {
        filter: brightness(100%);
    }
`

const LeftColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;

`

const TitleWrapper = styled.div`
    margin-left: 1em;
`

const RightColumn = styled.div`
    margin-left: 0.7em;
`

export default ProductList