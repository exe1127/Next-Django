
import React from 'react';
import DeleteTaskButton from './deleteButton';
import { sup } from '../callbackend/function';
export default function CardTask({ item, handleEdit, key, actualizar, setActualizar }) {
    /* console.log(item) */
    return (
        <>
            <div key={key} className="bg-blue-500 px-4 py-3 mb-2 rounded-md flex justify-between items-center">
                <div>
                    <h1> {item.title} {item.done == true ? <span>✅</span> : <></>} </h1>
                    <p> {item.description} </p>
                </div>
                <div>
                    <button className="bg-green-500 hover:bg-green-300 text-white font-bold py-1 px-2 rounded mr-2"
                        onClick={() => handleEdit(item)}>Editar</button>
                    <button className="bg-red-500 hover:bg-red-300 text-white font-bold py-1 px-2 rounded"
                        onClick={() => { sup(item.id, setActualizar, actualizar) }}>
                        Eliminar
                    </button>
                    {/* <DeleteTaskButton taskId={item.id} /> */}
                </div>
            </div>
        </>
    )
}
