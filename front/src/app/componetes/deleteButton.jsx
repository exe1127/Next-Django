'use client'
import React from 'react';
import { useRouter } from 'next/router';

const DeleteTaskButton = ({ taskId }) => {
    const router = useRouter();

    const sup = async (id) => {
        try {
            if (window.confirm('¿Quieres eliminar esta tarea?')) {
                const respuesta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/back/task/${id}`, {
                    method: 'DELETE',
                });
                if (!respuesta.ok) {
                    throw new Error('Error en la solicitud');
                } else {
                    router.reload();
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <button className="bg-red-500 hover:bg-red-300 text-white font-bold py-1 px-2 rounded"
            onClick={() => { sup(taskId) }}>
            Eliminar
        </button>
    );
};

export default DeleteTaskButton;