import React from "react";
import { Link } from "react-router-dom";

const currentDate = new Date().getDay();
let treinoDeHoje = '';
let routeTraining = '/';
let titleTraining = '';

switch (currentDate) {
    case 0: 
        treinoDeHoje = 'descansar hoje.';
        break;
    case 1:
        treinoDeHoje = 'treinar costas hoje:';
        routeTraining = '/treino-a';
        titleTraining = 'Treino-A';
        break;
    case 2:
        treinoDeHoje = 'descansar hoje.';
        break;
    case 3:
        treinoDeHoje = 'treinar perna hoje:';
        routeTraining = '/treino-b';
        titleTraining = 'Treino-B';
        break;
    case 4:
        treinoDeHoje = 'descansar hoje.';
        break;
    case 5:
        treinoDeHoje = 'treinar peito hoje:';
        routeTraining = '/treino-c';
        titleTraining = 'Treino-C';
        break;
    case 6:
        treinoDeHoje = 'descansar hoje.';
        break;
    default:
        treinoDeHoje = '';
        break;
}

export const SuggestionTraining = () => {
    return (
        <>
          <h3>Que tal {treinoDeHoje} <Link to={routeTraining} > {titleTraining} </Link> </h3>
        </>
    )
};