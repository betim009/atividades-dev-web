import { processadores } from "../data"


function Table() {
    return (
        <>
            <table>
                <thead>
                    <th>#</th>
                    <th>Modelo</th>
                    <th>Geração</th>
                    <th>Preço</th>
                </thead>
                <tbody>
                    {processadores.map((element, index) => (
                        <tr key={index}>
                            <td><img src={element.img} alt="" /></td>
                            <td>{element.nome}</td>
                            <td>{element.geracao}</td>
                            <td>{element.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table