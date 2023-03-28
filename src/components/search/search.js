import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIoptions } from "../../api";

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    async function loadOptions(inputValue)
    {
        const response = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoAPIoptions);
        const responseJSON = await response.json();
        return {
            options: responseJSON.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                }
            })
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return(
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}



export default Search;