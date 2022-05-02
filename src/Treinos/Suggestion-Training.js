import React from "react";
import { Link } from "react-router-dom";
import './Treino-Style.css';

const currentDate = new Date().getDay();
let treinoDeHoje = '';
let routeTraining = '/';
let titleTraining = '';

switch (currentDate) {
    case 0: 
        treinoDeHoje = 'descansar';
        break;
    case 1:
        treinoDeHoje = 'o treino';
        routeTraining = '/treino-a';
        titleTraining = 'Treino-A';
        break;
    case 2:
        treinoDeHoje = 'o treino:';
        routeTraining = '/treino-b';
        titleTraining = 'Treino-B'
        break;
    case 3:
        treinoDeHoje = 'o treino';
        routeTraining = '/treino-c';
        titleTraining = 'Treino-C';
        break;
    case 4:
        treinoDeHoje = 'o treino';
        routeTraining = '/treino-D';
        titleTraining = 'Treino-D'
        break;
    case 5:
        treinoDeHoje = 'descansar';
        break;
    case 6:
        treinoDeHoje = 'descansar';
        break;
    default:
        treinoDeHoje = '';
        break;
}

export const SuggestionTraining = () => {
    return (
        <>
          <h3 className="suggestion-training" >Que tal {treinoDeHoje} <Link to={routeTraining} > {titleTraining} </Link> hoje. </h3>
        </>
    )
};