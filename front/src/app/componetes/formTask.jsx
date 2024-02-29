'use client'
import { useState } from 'react';
import { sendTask } from '../callbackend/function';
function FormTask() {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handelSubmit = async (e) => {
        e.preventDefault();
        sendTask(titulo, descripcion);
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