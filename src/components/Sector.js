import React, { useState } from "react";

const Sector = () => {

    const [sectors, setSectors] = useState(['lizards', 'mammals', 'birds', 'fishes'])

    sectors.map((element, index) => {
        return (<select>element</select>)
    })

}
export default Sector;