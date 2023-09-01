import React, { useState } from "react";
import Sector from "./Sector";

function Form({ addAnimal }) {
    const [species, setSpecies] = useState("");
    const [name, setName] = useState("");
    const [birthdate, setBirthday] = useState("");
    const [sector, setSector] = useState("");

    const [sectors, setSectors] = useState(['lizards', 'mammals', 'birds', 'fishes'])


    const handleSpeciesChange = (event) => {
        setSpecies(event.target.value);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleSectorChange = (event) => {
        setSector(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addAnimal({
            species,
            name,
            birthdate,
            sector

        });
        // You can do something with the first name and last name here, like sending them to a server or displaying them.
        console.log("Species:", species);
        console.log("Name:", name);
        console.log(birthdate)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="species">species:</label>
                <input type="text" id="species" value={species} onChange={handleSpeciesChange} />
            </div>
            <div>
                <label htmlFor="Name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleName} />
            </div>
            <div>
                <label>Date of Birth</label>
                <input type="date" value={birthdate} onChange={(event) => setBirthday(event.target.value)}
                    required
                />
            </div>
            <div>
                <label>Select Sector</label>
                <select value={sector} onChange={handleSectorChange}>
                    {sectors.map((element, index) => {
                        return (<option>{element}</option>)
                    })}
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;