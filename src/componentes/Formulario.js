export function Formulario(props) {

    const { tarea,handleSubmit, handleChange } = props
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add"
                onChange={handleChange}
                value={tarea}
            />
            
            <input
                type="submit"
                className="btn"
                value="ADD"
                onClick={handleSubmit}
            />
        </form>
    );
}