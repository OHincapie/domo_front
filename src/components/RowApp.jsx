import { useEffect } from "react";
import { GrupoAccionesApp } from "./GrupoAccionesApp"

export const RowApp = ({dato}) => {
    useEffect(() => {
      console.log(dato);
    }, [dato])
    
    return (
        <tr>
            <td>{dato.idDispositivo}</td>
            <td>{dato.puerto.id}</td>
            <td>{dato.nombreDispositivo}</td>
            <td>{dato.zona.nombreZona}</td>
            <td>{dato.zona.estadoZona}</td>
            <td>{dato.zona.estado}</td>
            <td>{dato.zona.consumoW}</td>
            <td>{dato.zona.gastoEnergiaW}</td>
            <td>
                <GrupoAccionesApp id={dato.idDispositivo} puerto={dato.puerto.id}/>
            </td>
        </tr>
    )
}
