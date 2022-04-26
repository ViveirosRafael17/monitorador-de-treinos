import React from "react";
import { useState } from "react";
import { dataTraining } from "./Dados-dos-Treinos";
import './Training-style.css';

export const Treinos = () => {
    // value representa o indice na matriz dos dados dos treinos //
    const [value, setValue] = useState(0);
    // seelectTraining representa a variavel de banco de dados percorrendo o indice armazenado em value //
    const selectTraining = dataTraining[value];
    // a variavel grupos percore todas as propriedades "gruposMusulares" do indice atual//
    const grupos = selectTraining.gruposMusculares;
    // renderGroups percorre e retorna os dados do banco de dados //
    const renderGroups = grupos.map(data => {
        const treinosName = data.exercicios.map(treino => {
            let treinoRep = treino.rep;
            // verifica se o valor de rep é uma string se for elimina a necessidade de acrescentar um ' rep' ao final do texto //
                if (typeof treino.rep !== 'string') {
                    treinoRep = treino.rep + ' rep'
                }
            

            return (
                <div className="training-box">
                    <input type='checkbox' id={treino.name} />
                    <label for={treino.name} className="training-label" > 
                        {treino.name} {treino.séries} séries {treinoRep} 
                    </label>
                    <br/>
                </div>
            );
        }); 
        
        return (
            <div className="group-training-box">
                <h2 className="trainings-title-name" > {data.name} </h2>
                {treinosName}
            </div>
        )
    });

    return (
        <>
            <div className="header-trainings">
                <button onClick={() => setValue(0)} className="button-select-training" >Treino A</button>
                <button onClick={() => setValue(1)} className="button-select-training" >Treino B</button>
                <button onClick={() => setValue(2)} className="button-select-training" >Treino C</button>
            </div>
            <h1 className="title-day-training"> {selectTraining.name} </h1>
            {renderGroups}
        </>
    )
};