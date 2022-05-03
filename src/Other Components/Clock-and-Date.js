import React from 'react';
import '../Treinos/Treino-Style.css';

export const Clock = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const addZero = (value) => {
        if (value <= 9) {
            return "0" + value;
        } else {
            return value
        }
    };

    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const getMonthString = mes[month];

    //const hours = date.toLocaleTimeString();
    
    
    
    return (
        <>
            <h3 className='date'> {addZero(day)} de {getMonthString}, {year}</h3>
        </>
    );

};