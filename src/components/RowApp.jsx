/* eslint-disable react/prop-types */
import { GrupoAccionesApp } from "./GrupoAccionesApp"
import { consumoIndividual } from "../services/api"

export const RowApp = ({ dato = null, getAll }) => {

    let consumo = dato == null ? 0 : dato.consumoW;

    const actualizarDispositivo = () => {
        consumoIndividual(dato.idDispositivo).then((res) => {
            consumo=res
        }).catch((er) => {
            console.log(er);
        })
    }

    return (
        <>
            {dato != null && <tr>
                <td>{dato.idDispositivo}</td>
                <td>{dato.puerto.id}</td>
                <td>{dato.nombreDispositivo}</td>
                <td>{dato.zona.nombreZona}</td>
                <td>{dato.zona.estadoZona}</td>
                <td>{dato.estado}</td>
                <td>{consumo}</td>
                <td>{dato.gastoEnergiaW}</td>
                <td>
                    <GrupoAccionesApp id={dato.idDispositivo} puerto={dato.puerto.id} getAll={getAll} consumo={actualizarDispositivo}/>
                </td>
            </tr>
            }

            {dato == null && <tr>
                <td>x</td>
                <td>x</td>
                <td>x</td>
                <td>x</td>
                <td>x</td>
                <td>x</td>
                <td>x</td>
                <td>x</td>
                <td>
                    <GrupoAccionesApp  getAll={getAll} />
                </td>
            </tr>
            }
        </>
    )
}
