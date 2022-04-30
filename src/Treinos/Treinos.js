import React from "react";
import { dataTraining } from "./Dados-dos-Treinos";
import './Treino-Style.css';

export const TreinoA = () => {
    const selectTraining = dataTraining[0];

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
            <h1 className="title-day-training"> {selectTraining.name} </h1>
            {renderGroups}
        </>
    )
};

export const TreinoB = () => {
    const selectTraining = dataTraining[1];

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
            <h1 className="title-day-training"> {selectTraining.name} </h1>
            {renderGroups}
        </>
    )
};

export const TreinoC = () => {
    const selectTraining = dataTraining[2];

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
            <h1 className="title-day-training"> {selectTraining.name} </h1>
            {renderGroups}
        </>
    )
};