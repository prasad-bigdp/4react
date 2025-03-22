function Todos (props)
{
    console.log(props.data)
    return (
        <div>
            <h2>List of Tasks:</h2>
            {props.data.map(element => (
                  <>
                        <p> {element} <button>❎</button></p>     
                     </>
            ))}
        </div>
    )
}
export default Todos