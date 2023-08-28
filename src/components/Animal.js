const Animal = ({ species, name, birthdate }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                width: 700,
            }}
        >
            <p>{species}</p>
            <p>{name}</p>
            <p>{birthdate}</p>
        </div>
    );
};

export default Animal;