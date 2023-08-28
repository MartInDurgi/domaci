import Animal from "./Animal";

const AnimalList = () => {
    let date = JSON.stringify(new Date());
    const animals = [
        { species: "dog", name: "rex", birthdate: JSON.stringify(new Date) },
        { species: "cat", name: "cica", birthdate: JSON.stringify(new Date) },
        { species: "donkey", name: "lole", birthdate: JSON.stringify(new Date) },
        { species: "horse", name: "john", birthdate: JSON.stringify(new Date) },
        { species: "tiger", name: "max", birthdate: JSON.stringify(new Date) },
    ];
    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >

            {/*  { {console.log(date.slice(1, 11))}} */}
            {animals.map((element, index) => {
                return (
                    <Animal
                        key={index}
                        species={element.species}
                        name={element.name}
                        birthdate={element.birthdate.slice(1, 11)}
                    />
                );
            })}
        </div>
    );
};

export default AnimalList;