import './card.css'

function Cards(props) {
    return (
        <>
            <div className="card">
                <h1> {props.text} </h1>
                <h2> {props.name}</h2>
            </div>
        </>
    )
}
export default Cards