export function Formulario(props) {

    const { tarea,handleSubmit, handleChange } = props
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input-group"
                type="text"
                placeholder="Type here!"
                onChange={handleChange}
                value={tarea}
            />
            
            <input
                type="submit"
                className="add"
                value="Add"
                onClick={handleSubmit}
            />
        </form>
    );
}