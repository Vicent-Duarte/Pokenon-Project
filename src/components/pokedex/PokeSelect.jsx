import React, { useEffect, useRef } from 'react'
import useFectch from '../../hooks/useFectch';

const PokeSelect = ({setSelectValue}) => {

    const [types, getTypes] = useFectch();

    useEffect(() => {

        const url = 'https://pokeapi.co/api/v2/type/';
        getTypes(url);
    }, []);

    const selectOption = useRef();

    const handleChange = () => {
        setSelectValue(selectOption.current.value);
    }
    
    return (
        <select ref={selectOption} onChange={handleChange}>
            <option value="">All Pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}

export default PokeSelect