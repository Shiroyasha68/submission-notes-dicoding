import {useState} from 'react';
const Search = ({onSearch}) => {
    const [search, setSearch] = useState();
    const onSearchValue = (e) => {
        onSearch(event.target.value);
    }
    return (
        <div className="search-notes">
            <input type="text" name="serch-notes" id="search-notes" placeholder = "Cari Catatan..." onChange={onSearchValue} />
        </div>
    )
}

export default Search;