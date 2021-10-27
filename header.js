/* const div_del_menu = document.getElementById('menu'); */
const div_del_menu = document.querySelector('#menu');
const ul_del_menu = document.createElement('ul');


const secciones = [{
  seccion: 'Home ',
  ruta: 'MiPagina Index1.html'
  
}, {
  seccion: 'Planetas',
  ruta: 'pestaña de planetas.html'
}, {
  seccion: 'Constelaciones',
  ruta: 'pestaña de constelaciones.html'
},

{
  seccion: 'Cómo ser parte',
  ruta: 'Formulario.html'
},
{
  seccion: 'Contacto',
  ruta: '#Footer'
}]

const cascada1 = [{
  planeta: 'Mercurio',
  ruta: 'pestaña de planetas.html#Mercurio'
},{
  planeta: 'Venus',
  ruta: 'pestaña de planetas.html#Venus'
},{
  planeta: 'Tierra',
  ruta: 'pestaña de planetas.html#Tierra'
},{

planeta: 'Marte',
  ruta: 'pestaña de planetas.html#Marte'
},{
  
planeta: 'Jupiter',
  ruta: 'pestaña de planetas.html#Jupiter'
},{
  
planeta: 'Saturno',
  ruta: 'pestaña de planetas.html#Saturno'
},{
  
planeta: 'Urano',
  ruta: 'pestaña de planetas.html#Urano'
},
{
  planeta: 'Neptuno',
    ruta: 'pestaña de planetas.html#Neptuno'
  }
]

const cascada2 = [{
  constelacion: 'Orión',
  ruta: 'pestaña de constelaciones.html#Orion'
},{
  constelacion: 'Constelaciones del Zodiaco',
  ruta: 'pestaña de constelaciones.html#Zodiaco'
},{
  constelacion: 'Cruz del Sur',
  ruta: 'pestaña de constelaciones.html#Sur'
}]

var link;
var link2;
var link3;
var contenedor_menu;

const fontaw = document.createElement('i');
fontaw.className = 'fas fa-home';
const cascada_drop = document.createElement('div');
cascada_drop.id = 'asdasd';
cascada_drop.className = 'contenidocascada';
const cascada_drop2 = document.createElement('div');
cascada_drop2.id = 'asdasd2';
cascada_drop2.className = 'contenidocascada';



for (let i = 0; i< secciones.length; i++){
  contenedor_menu = document.createElement('li');
  contenedor_menu.id = 'mi_menu';
  contenedor_menu.className = 'cascada';
  link = document.createElement('a');
  link.textContent = secciones[i].seccion;
  link.setAttribute('href',secciones[i].ruta);
  link.className = 'cascadabtn';
  contenedor_menu.appendChild(link); 

  if (i == 0){
    link.appendChild(fontaw);
  }

  if( i == 1){
    

    for (let j = 0; j< cascada1.length; j++){
      link2 = document.createElement('a');
      link2.textContent = cascada1[j].planeta;
      link2.setAttribute('href',cascada1[j].ruta);
      link2.className = 'planetas';
      cascada_drop.appendChild(link2); 
      }

    contenedor_menu.appendChild(cascada_drop)
  }
  if( i == 2){
    

    for (let k = 0; k< cascada2.length; k++){
      link3 = document.createElement('a');
      link3.textContent = cascada2[k].constelacion;
      link3.setAttribute('href',cascada2[k].ruta);
      link3.className = 'const';
      cascada_drop2.appendChild(link3); 
      }

    contenedor_menu.appendChild(cascada_drop2);
  }
  ul_del_menu.appendChild(contenedor_menu);
  div_del_menu.appendChild(ul_del_menu);

}








