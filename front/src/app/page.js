'use client'
import React, { useState } from 'react';
import FormTask from './componetes/formTask';
import ListTask from './componetes/listTask';

export default function Home() {
    const [selectedItem, setSelectedItem] = useState();
    const [actualizar, setActualizar] = useState(false);

    return (
        <div className="container mx-auto my-3">
            <div className="flex gap-x-10">
                <FormTask
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    actualizar={actualizar}
                    setActualizar={setActualizar}
                />
                <ListTask
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    actualizar={actualizar}
                    setActualizar={setActualizar}
                />
            </div>
        </div>
    );
}