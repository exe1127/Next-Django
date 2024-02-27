'use client'
import { useState } from 'react';
function FormTask() {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handelSubmit = async (e) => {
        e.preventDefault();
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

    return (
        <div className="bg-slate-200 p-7">
            <form action="" onSubmit={handelSubmit} >
                <h1 className="text-green-700 font-bold mb-2">Añadir Tarea</h1>
                <input name="titulo" type="text" placeholder="titulo" className="bg-slate-300 rounded-md p-2 mb-3 w-full" onChange={(e) => setTitulo(e.target.value)} />
                <textarea name="descripcion" type="text" placeholder="descripcion" className="bg-slate-300 rounded-md p-2 mb-3 block w-full" onChange={(e) => setDescripcion(e.target.value)} />
                <button type="submit" className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded block">Guardar</button>
            </form>
        </div>
    )

}

export default FormTask