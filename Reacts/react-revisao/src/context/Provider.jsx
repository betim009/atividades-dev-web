import { useState } from "react";
import Context from "./Context";



function Provider({ children }) {
    const [valor, setValor] = useState(99)


    const contexValue = {
        valor,
        setValor
    };

    return (
        <Context.Provider value={contexValue}>
            {children}
        </Context.Provider>
    )

}

export default Provider;
