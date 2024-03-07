'use client'
import React, { useState, useEffect } from 'react';
import { cargarTareas } from '../callbackend/function';
import CardTask from './cardTask';

const ListTask = ({ onSelectItem, actualizar, setActualizar }) => {
    const [lista, setLista] = useState([]);
    const handleEdit = (item) => onSelectItem(item);

    useEffect(() => {
        const fetchData = async () => {
            const data = await cargarTareas();
            setLista(data);
        };
        fetchData();
    }, [actualizar]);

    return (
        <div className="container bg-slate-400 p-4 rounded-md">
            <h3 className="text-orange-400 font-bold mx-2 mt-2 mb-3">Lista de tareas </h3>
            <div className="overflow-y-auto max-h-80">
                {lista.map(item => (
                    <CardTask item={item} handleEdit={handleEdit} key={item.key} setActualizar={setActualizar} actualizar={actualizar} />
                ))}
            </div>
        </div>
    );
};

export default ListTask;