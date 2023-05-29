import { Button, Col, Container, Row } from "react-bootstrap"
import {useNavigate } from 'react-router';

export const AccionesApp = () => {
    const navigate = useNavigate();

    const handleClick = (ruta) => {
        navigate(ruta);
    };
    return (
        <>
            <Container className="mb-4">
                <Row>
                    <Col>
                        <Button className="btn-custom" variant="outline-success"  onClick={() => {handleClick('/')}}>
                            Ver tabla <br />
                            <img className="img-button" src="/registro.png" />
                        </Button>
                    </Col>

                    <Col>
                        <Button className="btn-custom" variant="outline-success" onClick={() => {handleClick('/historial')}}>
                            Historial <br />
                            <img className="img-button" src="/dispositivo.png" />
                        </Button>
                    </Col>
                </Row>



            </Container>
        </>
    )
}
