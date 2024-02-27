

const cargarTareas = async () => {
    /* const respuesta = await fetch(`${process.env.BACKEND_URL}/back/task/`); */
    const respuesta = await fetch(`${process.env.BACKEND_URL}/back/task/`);
    const data = await respuesta.json();
    return data;
}


const ListTask = () => {
    const lista = cargarTareas();
    
    return (
        <div className="container bg-slate-400">
            <h1 className="text-orange-400 font-bold mx-2 mt-2">Lista de tareas </h1>
        </div>

    )
}

export default ListTask