import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

const ProductList = ({ input, productList = [] }) => {
    let search;
    if (input.length > 0) {
        search = productList.map((data, index) => {
            if (data) {
                return (
                    <SearchList key={data.name}>
                        <LeftColumn>
                            {/*<ItemLink to={`/produkt/${data.slug}`}>
                                <ItemImage src={data.images[0].url} />
                            </ItemLink>*/}
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

`

const SearchList = styled.div`
   // display: flex;
   // flex-direction: row;
   // background-color: #fff;
`

const SearchItem = styled(Link)`
    text-decoration: none;
    color: #373737;
    font-weight: bold;
    transition: 0.3s ease;
    &:hover {
        color: #877D70;
    }
`

const ItemImage = styled.img`
  //  width: 100px;
//
  //  border-radius: 5px;

`

const ItemLink = styled(Link)`
    transition: 0.3s ease;
    filter: brightness(80%);

    &:hover {
        filter: brightness(100%);
    }
`

const LeftColumn = styled.div`
   // display: flex;
   // flex-direction: row;
   // justify-items: flex-start;

`

const TitleWrapper = styled.div`


`

const RightColumn = styled.div`

`

export default ProductList