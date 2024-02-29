import React, { useState, useEffect } from 'react';

export const cargarTareas = async () => {
    const respuesta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/back/task/`);
    const data = await respuesta.json();
    return data;
}

export const cargarElementos = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    return { titulo, setTitulo, descripcion, setDescripcion }
}

export const editar = (item) => {
    const { setDescripcion, setTitulo } = cargarElementos();
    setDescripcion(item.description);
    setTitulo(item.titulo);
}

export const sendTask = async (titulo, descripcion) => {

    try {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/back/task/`, {
            method: 'POST',
            body: JSON.stringify({ title: titulo, description: descripcion }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }

}

