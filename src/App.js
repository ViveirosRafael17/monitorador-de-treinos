import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RandomMessage } from "./Treinos/Message-Home";
import { SuggestionTraining } from "./Treinos/Suggestion-Training";
import { NavHeader } from "./Treinos/NavHeader";
import { TreinoA, TreinoB, TreinoC } from "./Treinos/Treinos";

export const App = () => {
    return (
        <>
        <BrowserRouter>
          <header>
            <h1> Treino de hoje </h1>
            <RandomMessage />
            <SuggestionTraining />
            <NavHeader /> 
          </header>
          <main>
            <Routes>
              <Route path='/treino-a' element={ <TreinoA/> } />
              <Route path='/treino-b' element={ <TreinoB/> } />
              <Route path='/treino-c' element={ <TreinoC/> } />
            </Routes>
          </main>
        </BrowserRouter>
        </>
    )
}