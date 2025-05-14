import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import imagenSol from "./img/PersonaSol.png";
import triangulo from "./img/triangulo.png";
import formaCompleta from "./img/triangulo.png";

function App() {
  return (
    <>
      <div className="bg-[#f1dfbd]">
        <div className="flex flex-col items-center justify-between h-screen">
          <div className="mt-[150px] flex flex-col items-center  gap-2">
            <h1 className="font-[new-order] text-[150px] font-bold leading-none">
              Portfolio
            </h1>
            <h2 className="font-[new-order] text-[72px] font-semibold leading-none">
              Mateo Cutinella
            </h2>
          </div>
          <img src={imagenSol} alt="" className="mb-0" />
        </div>
        <div className="flex flex-col items-center justify-between h-screen">
          <div flex className="flex gap-2">
            <div>
              <h3 className="font-[new-order] text-[72px] font-semibold">
                Emocional
              </h3>
              <h3 className="font-[new-order] text-[72px] font-semibold ">
                Impactante
              </h3>
            </div>
            <img src={triangulo} alt="" className="mb-0" />
            <div>
              {" "}
              <h3 className="font-[new-order] text-[72px] font-semibold">
                Minimalista
              </h3>
              <h3
                className="font-[new-order] text-[72px] font-semibold 
"
              >
                Sensible
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
