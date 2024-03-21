import * as React from 'react';
import SmCero from './SM/Cero';
import SmUno from './SM/Uno';

import ResCero from './Responsys/ResCero';
import ResUno from './Responsys/ResUno';
import ResDos from './Responsys/ResDos';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Generator from './Components/List_Generator_Sm';
import Generator_Res from './Components/List_Gen_Responsys';
import Generator_Push from './Components/List_Gen_Push';

//Para las listas
var lista = Generator();
var lista_2 = Generator_Res();
var lista_3 = Generator_Push();

    function Sales(){
        const listItems = lista.map(lisItem => <li class="list-group-item"><nav><Link to={lisItem.link} class="text-decoration-none fw-bold text-dark">{lisItem.name}</Link></nav></li>);
    return <ul class="list-group list-group-flush">{listItems}</ul>
    };

    function Res(){
        const listItems = lista_2.map(lisItem => <li class="list-group-item"><nav><Link to={lisItem.link} class="text-decoration-none fw-bold text-dark">{lisItem.name}</Link></nav></li>);
    return <ul class="list-group list-group-flush">{listItems}</ul>
    }

    function Push(){
        const listItems = lista_3.map(lisItem => <li class="list-group-item"><nav><Link to={lisItem.link} class="text-decoration-none fw-bold text-dark">{lisItem.name}</Link></nav></li>);
    return <ul class="list-group list-group-flush">{listItems}</ul>
    }

function Inicio() {

    return (
      <div className="Primer">
        <BrowserRouter>
        <div className="Header w-100">
        <div class="container">
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <Link to={"/"} class="text-decoration-none fw-bold text-dark"><strong>Andrea Content Analyst</strong></Link>
            </div>
            </nav>
        </div>
      </div>
        <div class="container mt-5 rem w-100">
            <div class="row">
                    <div class="col-4">
                    <div class="accordion accordion-flush" id="accordionFlush">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <strong>SalesManago</strong>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                                <div class="accordion-body">
                                    <Sales/>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <strong>Responsys</strong>
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                                <div class="accordion-body">
                                    <Res/>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <strong>Pushwoosh</strong>
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
                            <div class="accordion-body">
                                <Push/>
                            </div>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                    <div class="col-8">
                    <Routes>
                        <Route path="/" element={<h1>Home</h1>}/>
                        <Route path="/SM/Cero" element={<SmCero/>}/>
                        <Route path="/SM/Uno" element={<SmUno/>}/>

                        <Route path="/Responsys/ResCero" element={<ResCero/>}/>
                        <Route path="/Responsys/ResUno" element={<ResUno/>}/>
                        <Route path="/Responsys/ResDos" element={<ResDos/>}/>
                    </Routes>
                    </div>
                
            </div>
        </div>
        </BrowserRouter>
    </div>
    );
  }
  
  export default Inicio;