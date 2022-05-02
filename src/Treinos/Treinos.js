import React from "react";
import { dataTraining } from "./Dados-dos-Treinos-2";
import './Treino-Style.css';

const renderTraining = (index) => {
    const selectTraining = dataTraining[index];
    const grupos = selectTraining.gruposMusculares;
    const renderGroups = grupos.map(data => {
        const treinosName = data.exercicios.map(treino => {
            let treinoRep = treino.rep;
                if (typeof treino.rep !== 'string') {
                    treinoRep = treino.rep + ' rep'
                }
            return (
                <div className="training-box">
                    <input type='checkbox' id={treino.name} />
                    <label for={treino.name} className="training-label" > 
                        {treino.name} {treino.séries} séries {treinoRep} {treino.complemento}.
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
            <h1 className="title-day-training"> {selectTraining.name} </h1>
            {renderGroups}
        </>
    )
}

export const TreinoA = () => {
    return renderTraining(0)
};

export const TreinoB = () => {
    return renderTraining(1);
};

export const TreinoC = () => {
    return renderTraining(2)
};

export const TreinoD = () => {
    return renderTraining(3)
}