import { InputBase,Box,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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

const Search = () => {
    return (
        <BoxSearchBar>
            <InputSearchBar
                placeholder="Search for products, brands and more"
            />
            <Box>
                <SearchIcon style={{color: 'blue', padding: '5px'}} />
            </Box>
        </BoxSearchBar>

    )
};

export default Search;