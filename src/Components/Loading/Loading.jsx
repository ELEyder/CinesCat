const Loading = () => {
    return (
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}> <img src={"./logo.svg"} alt="Cargando..." /> </div>
    )
}

export default Loading