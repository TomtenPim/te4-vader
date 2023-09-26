import './Spinner.css'

function Spinner() {
    return (
        <>
            <h2> Loading... </h2>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </>
    )
}

export default Spinner