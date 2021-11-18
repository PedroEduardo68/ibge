import { useState, useEffect } from "react";
import {fetchCitiesForState} from "../../helpers/ibge"


const DropdownBrazillianCity = (state) => {
    const [cities, setCities] =useState([])

    useEffect(( ) => {
        console.log(state.state)
        fetchCitiesForState(state.state).then((cities)=>{
            setCities(cities);
        })
    }, [state]);



    return (
        <>
            <select id="city" n>
                <option value="">Selecione um cidade... </option>
                {
                    cities.map((city)=>{
                        const {id,nome} = city;
                        return(<option value={id} key={id}>{nome}</option>)
                    })
                }
            </select>
        </>
    );

}

export default DropdownBrazillianCity;