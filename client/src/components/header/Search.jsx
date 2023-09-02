import React from "react";
import { useState, useEffect } from "react";
import { InputBase,Box,styled,List,ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const BoxSearchBar = styled(Box)`
    background-color: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

const InputSearchBar = styled(InputBase)`
    padding: 2px 4px;
    padding-left: 10px;
    width: 100%;
    border-radius: 2px;
    font-size: unset;
    color: #212121;
`

const ListWrapper = styled(List)`
    position: absolute;
    background-color: #fff;
    color: #212121;
    margin-top: 36px;
`

const Search = () => {
    const [text, setText] = useState('');
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    const getText = (text) => {
        setText(text);
    }
    return (
        <BoxSearchBar>
            <InputSearchBar
                placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <Box>
                <SearchIcon style={{color: 'blue', padding: '5px'}} />
            </Box>
            {
                text !== '' &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (
                                <ListItem>
                                    <Link
                                        to={`/product/${product.id}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        onClick={() => setText('')}
                                    >
                                    {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </BoxSearchBar>
    )
};

export default Search;