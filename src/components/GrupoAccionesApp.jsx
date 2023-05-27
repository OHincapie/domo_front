import { useState } from "react";
import { Button } from "react-bootstrap";
import { cambiarZona, controlarDispositivo, deleteD, guardarDispositivo } from "../services/api";
import Swal from "sweetalert2";

export const GrupoAccionesApp = ({ id , puerto}) => {
    const [control, setControl] = useState(false);
    const obj = {
        uiltimoTiempoConsumo: 0.0,
        id: 0,
        idDispositivo: "",
        categoria: "",
        nombreDispositivo: "",
        zona: {
            idZona: null,
            nombreZona: "",
            estadoZona: true
        },
        estado: false,
        consumoW: 0.0,
        puerto: {
            id: 0,
            estado: true
        },
        gastoEnergiaW: 0.0
    }

    const encender = () => {
        controlarDispositivo(id).then(() => {
            setControl(!control);
        }).catch((er) => {
            console.log(er);
        })
    }

    const borrar = () => {
        deleteD(id).then(() => {
            
        }).catch((er) => {
            console.log(er);
        })
    }

    const asignar = (puerto) => {
        Swal.fire({
            title: 'Login Form',
            html: `<input type="text" id="id" class="swal2-input" placeholder="ID">
            <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
            <select id="zona">
                <option value="{"idZona": 0,"nombreZona": "Cocina","estadoZona": true}">Cocina</option>
                <option value="{"idZona": 1,"nombreZona": "Baño","estadoZona": true">Baño</option>
                <option value="{"idZona": 2,"nombreZona": "Sala","estadoZona": true}">Sala</option>
                <option value="{"idZona": 3,"nombreZona": "Cuarto1","estadoZona": true}">Cuarto</option>
            </select>`
            ,
            confirmButtonText: 'Registrar',
            focusConfirm: false,
            preConfirm: () => {
                const id = Swal.getPopup().querySelector('#id').value
                const nombre = Swal.getPopup().querySelector('#nombre').value
                const zona = Swal.getPopup().querySelector('#zona').value
                if (!id || !nombre || !zona) {
                    Swal.showValidationMessage(`Please enter values`)
                }
                obj.idDispositivo = id;
                obj.nombreDispositivo = nombre;
                obj.zona = JSON.stringify(zona);
                obj.puerto = puerto;
                return obj;
            }
        }).then((result) => {
            console.log(result.value);
            guardarDispositivo(result.value).then(() => {
                console.log('ok');
            }).catch((er) => {
                console.log(er);
            })
            Swal.fire(`Registrado`)
        })

    }


    const moverZona = (puerto) => {
        Swal.fire({
            title: 'Login Form',
            html: `Nueva zona:
            <select id="zona">
                <option value="{"idZona": 0,"nombreZona": "Cocina","estadoZona": true}">Cocina</option>
                <option value="{"idZona": 1,"nombreZona": "Baño","estadoZona": true">Baño</option>
                <option value="{"idZona": 2,"nombreZona": "Sala","estadoZona": true}">Sala</option>
                <option value="{"idZona": 3,"nombreZona": "Cuarto1","estadoZona": true}">Cuarto</option>
            </select>`
            ,
            confirmButtonText: 'Cambiar',
            focusConfirm: false,
            preConfirm: () => {
                const zona = Swal.getPopup().querySelector('#zona').value
                if ( !zona) {
                    Swal.showValidationMessage(`Please enter values`)
                }
                obj.idDispositivo = id;
                obj.zona = JSON.stringify(zona);
                obj.puerto = puerto;
                return obj;
            }
        }).then((result) => {
            console.log(result.value);
            cambiarZona(result.value.idDispositivo, result.value.zona.idZona).then(() => {
                console.log('ok');
            }).catch((er) => {
                console.log(er);
            })
            Swal.fire(`Registrado`)
        })

    }


    return (
        <div className="d-flex justify-content-evenly">
            {
                id == "" &&
                <Button variant="primary" size="sm" onClick={() => { asignar(puerto) }}>
                    Asignar dispositivo
                </Button>
            }
            <Button variant="primary" size="sm" onClick={() => { encender() }}>
                {control ? "OFF" : "ON"}
            </Button>

            <Button variant="primary" size="sm" onClick={() => { moverZona() }}>
                Mover zona
            </Button>

            <Button variant="primary" size="sm" onClick={() => { borrar() }}>
                Borrar
            </Button>
        </div>
    )
}
