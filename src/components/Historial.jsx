import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
import { getHistorial } from "../services/api"
import { AccionesApp } from "./AccionesApp"
import { HeaderApp } from "./HeaderApp"

export const Historial = () => {
    const [historial, setHistorial] = useState([])
    let i = 0;
    const peticionHistorial = () => {
        getHistorial()
            .then((datos) => {
                setHistorial(datos)
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        peticionHistorial();
    }, [])

    return (<>
        <HeaderApp />
        <Container>
            <AccionesApp></AccionesApp>
            <h1 className="text-center mb-3">Historial</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Log</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map((dato) => {
                        i++;
                        return <td key={i}>{dato}</td>
                    })}
                </tbody>
            </Table>
        </Container>
    </>

    )
}
