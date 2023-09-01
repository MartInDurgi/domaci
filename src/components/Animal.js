


const Animal = ({ species, name, birthdate, sector, remove, top }) => {

    return (
        <tr>
            <td>{species}</td>
            <td>{name}</td>
            <td>{birthdate}</td>
            <td>{sector}</td>
            <td>{remove}</td>
            <td>{top}</td>

        </tr>
    );
};

export default Animal;