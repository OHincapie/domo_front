/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { consumoTotal, listarDispositivos } from "../services/api"
import { RowApp } from "./RowApp"

export const TablaApp = () => {

    const [datos, setDatos] = useState([])
    const [cT, setCT] = useState(0)


    const consumoTotalW = () => {
        consumoTotal()
            .then((d) => {
                setCT(d)
            })
    };

    const peticionDispositivos = () => {
        listarDispositivos()
            .then((datos) => {
                setDatos(datos)
            }).catch((error) => {
                console.log(error);
            })
        consumoTotalW();
    };

    useEffect(() => {
        peticionDispositivos();
    }, [])

    setInterval(() => {
        consumoTotalW();
    }, 8000);

    return (

        <>
            <h1 className="text-center mb-3">Dispositivos</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Puerto</th>
                        <th>Dispositivo</th>
                        <th>Zona</th>
                        <th>Estado Zona</th>
                        <th>Estado</th>
                        <th>Consumo W</th>
                        <th>Gasto Energia</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => {
                        return <RowApp key={dato.id} dato={dato} getAll={peticionDispositivos} />

                    })}
                </tbody>
            </Table>
            <p>Consumo total: {cT}</p>
        </>

    )
}
