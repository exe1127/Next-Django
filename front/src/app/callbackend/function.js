import { useState, useEffect } from 'react';


export const cargarTareas = async () => {
    const respuesta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/back/task/`);
    const data = await respuesta.json();
    return data;
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
        if (!respuesta.ok) throw new Error('Error en la solicitud');
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const sup = async (id, setActualizar, actualizar) => {
    try {
        if (window.confirm('¿Quieres eliminar esta tarea?')) {
            const respuesta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/back/task/${id}`, {
                method: 'DELETE',
            });
            if (!respuesta.ok) {
                throw new Error('Error en la solicitud');
            } else {
                setActualizar(!actualizar);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
};