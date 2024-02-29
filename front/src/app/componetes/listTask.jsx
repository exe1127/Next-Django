'use client'
import React, { useState, useEffect } from 'react';
import { cargarTareas } from '../callbackend/function';

const ListTask = () => {
    const [editando, setEditando] = useState({});
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await cargarTareas();
            setLista(data);
        };
        fetchData();
    }, []);

    const toggleEdit = (id) => {
        setEditando({
            ...editando,
            [id]: !editando[id]
        });
    };

    return (
        <div className="container bg-slate-400 p-4 rounded-md">
            <h3 className="text-orange-400 font-bold mx-2 mt-2 mb-3">Lista de tareas </h3>
            <div className="overflow-y-auto max-h-128">
                {lista.map(item => (
                    <div key={item.id} className="bg-blue-500 px-4 py-3 mb-2 rounded-md flex justify-between items-center">
                        <div>
                            <h1> {item.title} </h1>
                            <p> {item.description} </p>
                        </div>
                        <div>
                            <button className="bg-green-500 hover:bg-green-300 text-white font-bold py-1 px-2 rounded mr-2"
                                onClick={() => toggleEdit(item.id)}> {editando[item.id] ? <p>Guardar</p> : <p>Editar</p>}</button>
                            <button className="bg-red-500 hover:bg-red-300 text-white font-bold py-1 px-2 rounded">Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListTask;