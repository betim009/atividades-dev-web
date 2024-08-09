import "../App.css"

function ListElements({items}) {
    return (

        <div className="elements" >
            {items.map((element, index) => (

                <div key={index}>
                    <p>{element.Title}</p>
                    <img src={element.Poster} alt="" />
                </div>

            ))}
        </div>
    )
}

export default ListElements