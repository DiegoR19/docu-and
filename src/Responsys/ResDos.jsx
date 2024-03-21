import * as React from 'react';
import image1 from '../img/2_1.png'

function ResDos() {
    return (
      <div className="Primer">
        <div class="container">
          <p class="fw-light m-t 4">Last edited on: <strong>20/03/2024</strong></p>
          <p class="h1 fw-bold">Responsys - Carga de Materiales</p>
          <p class="fw-light">Para cargar algún recurso de imagen en Responsys es necesario cumplir con el requerimiento de tamaño por elemento <strong>(menos de 200 kb)</strong>.</p>

          <div  className='fw-light bg-light p-2'>
            <p class="fw-bold h5" >Carga de recursos menores a 200kb</p>  
            <ul>
                <li><p class="fw-light" >Ir al menú lateral a la dirección <strong class="fw-bold">Content/Content Library.</strong></p></li>
                <li><p class="fw-light" >Esto te posicionará en el Gestor de Contenido.</p></li>
                <li><p class="fw-light" >En este punto es importante tomar en cuenta la nomencaltura y estructura en la que se organizan los archivos. Para carpetas es <strong class="fw-bold">2024-Materiales/Sem10.</strong> Cada semana se crea una nueva carpeta para seguir el orden a la numeración que le corresponda.</p></li>
                <li><p class="fw-light" >Una vez localizado/creado el espacio para los materiales, solo basta con dar clic en el botón superior lado derecho <strong className='fw-bold'>Upload</strong> y arrastrar los materiales previamente trabajados en diseño.</p>
                <img src={image1} alt="" className='w-50'/></li>
            </ul>
          </div>

          {/*<p class="fw-light bg-success bg-opacity-10" >Hola</p>*/}
        </div>
      </div>
    );
  }
  
  export default ResDos;