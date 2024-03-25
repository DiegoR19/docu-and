import * as React from 'react';
import image1 from '../img/2_4.png'

function ResCuatro() {
    return (
      <div className="Primer mb-5">
        <div class="container">
            <p class="m-t 4">Last edited on: <strong>22/03/2024</strong></p>
            <p class="h1 fw-bold">Responsys - Visual Template Designer</p>
            <p>El editor de plantillas de Responsys no es una herramienta tan completa, por lo que sus opciones son límitadas.</p>
            <div>
                <table className='table table-bordered'>
                    <thead  className='text-center'>
                        <tr>
                            <th scope='col'>Elemento</th>
                            <th scope='col'>Descripción</th>
                            <th scope='col'>Referencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>Design Components</th>
                            <td>En este apartado se encuentran herramientas y funciones que permiten modificar el contenido de nuestra plantilla. Añadir imágenes, modificar el acomodo de los elementos, tamaños, añadir/modificar texto, etc.</td>
                            <td><img src={image1} alt="" className='w-75'/></td>
                        </tr>
                        <tr>
                            <th scope='row'>Content</th>
                            <td>
                                <p>La primera sección de Design Components, incluye los siguientes componentes.</p>
                                <ul>
                                    <li><p>Text: Agregar texto como bloque de contenido. Al hacer uso de este elemento tenemos opción a utilizar un editor de texto simple. Con algunas opciones muy generales como tamaño, fuente y color, además de algunas otras.</p></li>
                                    <li><p>Image: Añadir bloque de contenido dentro dle cual puede agregarse algún archivo de imagen (jpg, png, gif) previamente cargado.</p></li>
                                    <li><p>Button: Agregar un botón con texto dentro de este.</p></li>
                                    <li><p>Divider: Añadir una división con un grosor modificable para separar elementos según se necesite.</p></li>
                                    <li><p>Spacer: Separar elementos hasta por 30px.</p></li>
                                    <li><p>Custom Code: Agregar código dentro del bloque seleccionado.</p></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>Layout</th>
                            <td>
                                <p>Este apartado incluye una variedad de plantillas para el acomodo del cuerpo del mail. Esto incluye arreglos desde 2 hasta 4 columnas. Estos layouts son 100% responsivos, sin ninguna modificación en este aspecto. Es decir, siempre que sean más de 1 columna, en vista móvil, cada columna irá debajo de la anterior.</p>
                                <p>Esto puede ser benefico en algunos casos. Sin embargo, para el uso común de la comunicación que realizamos, con una columna basta, para mantener así el estilo visual del diseño original. Además, así se mantiene una vista uniforme en todas las plataformas donde se distribuye esta comunicación.</p>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>Email Style</th>
                            <td>
                            <p>La segunda sección de Design Components, incluye los siguientes componentes.</p>
                                <ul>
                                    <li><p>Background: Agregar texto como bloque de contenido. Al hacer uso de este elemento tenemos opción a utilizar un editor de texto simple. Con algunas opciones muy generales como tamaño, fuente y color, además de algunas otras.</p></li>
                                    <li><p>Text Defaults: Añadir bloque de contenido dentro dle cual puede agregarse algún archivo de imagen (jpg, png, gif) previamente cargado.</p></li>
                                    <li><p>Hyperlinks Defaults: Agregar un botón con texto dentro de este.</p></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope='row'>Cuerpo de la plantilla</th>
                            <td>
                                <p>En este apartado puede verse el cuerpo del mail completo, además de poder alternar entre las vistas desktop y mobile.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
  }
  
  export default ResCuatro;