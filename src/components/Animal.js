const Animal = ({ species, name, birthdate, remove, top }) => {

return (
<tr>
    <td>{species}</td>
    <td>{name}</td>
    <td>{birthdate}</td>
    <td>{remove}</td>
    <td>{top}</td>

</tr>
);
};

export default Animal;
