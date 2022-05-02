import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RandomMessage } from "./Treinos/Message-Home";
import { SuggestionTraining } from "./Treinos/Suggestion-Training";
import { NavHeader } from "./Treinos/NavHeader";
import { TreinoA, TreinoB, TreinoC, TreinoD } from "./Treinos/Treinos";
import './Treinos/Treino-Style.css'

export const App = () => {
    return (
        <>
        <BrowserRouter>
          <header>
            <h1 className="title-header-page"> Treino de hoje </h1>
            <RandomMessage />
            <SuggestionTraining />
            <NavHeader /> 
          </header>
          <main>
            <Routes>
              <Route path='/treino-a' element={ <TreinoA/> } />
              <Route path='/treino-b' element={ <TreinoB/> } />
              <Route path='/treino-c' element={ <TreinoC/> } />
              <Route path='/treino-d' element={ <TreinoD/> } />
            </Routes>
          </main>
        </BrowserRouter>
        </>
    )
}