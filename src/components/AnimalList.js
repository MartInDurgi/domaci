import { useState } from "react";
import Animal from "./Animal";

const AnimalList = () => {
let date = JSON.stringify(new Date());

const [animals, setAnimals] = useState(() => {
return ([
{ species: "dog", name: "rex", birthdate: JSON.stringify(new Date) },
{ species: "cat", name: "cica", birthdate: JSON.stringify(new Date) },
{ species: "donkey", name: "lole", },
{ species: "horse", name: "john", birthdate: JSON.stringify(new Date) },
{ species: "tiger", name: "max", birthdate: JSON.stringify(new Date) },
])
}
);
/* setAnimals(animals.filter(animal => animal.index != index)) */
const removeAnimal = (index) => {
const temp = [...animals];
temp.splice(index, 1);
setAnimals(temp);
}
const thisToTop = (index) => {
const temp = [...animals];
const topAnimal = temp.splice(index, 1);
temp.unshift(topAnimal[0]);
setAnimals(temp);
}
/* console.log(removeAnimal()) */
/* console.log(animals[0]["name"]) */
/* removeAnimal('rex') */

return (

<div>
    <table>
        <tbody>
            <tr>
                <th> Species </th>
                <th> Name </th>
                <th> Birth </th>
                <th> Remove Animal</th>
                <th> Move to top</th>

            </tr>

            {/* { {console.log(date.slice(1, 11))}} */}
            {

            animals.map((element, index) => {
            return (
            <Animal key={index} remove={<button onClick={()=> removeAnimal(index)}>remove</button>}
                top = {<button onClick={()=> thisToTop(index)}>top</button>}
                species = {element.species}
                name = {element.name}

                birthdate = {element.birthdate ? element.birthdate.slice(1, 11) : "nepoznat"}

                />
                );
                })
                }
        </tbody>
    </table>
</div>
);
};

export default AnimalList;
