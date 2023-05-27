import axios from "axios";

const BASE_URL = 'http://localhost:8080'; // Reemplaza esto con tu URL base

export const listarDispositivos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const controlarDispositivo = async (idDispositivo) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/encenderDispositivo/${idDispositivo}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};


export const guardarDispositivo = async (dispositivo) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/crearDispositivo`, dispositivo);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const consumoIndividual = async (idDispositivo) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/dispositivo/consumo/${idDispositivo}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const consumoTotal = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/dispositivos/consumoTotal`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getZonas = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/zonas/`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const cambiarZona = async (idDispositivo, idZona) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/dispositivos/cambiar-zona/${idDispositivo}/${idZona}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};


export const getHistorial = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/dispositivos/historial/`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteD = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/Dispositivo/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};


