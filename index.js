let botonReiniciar = document.getElementById ("restart")
const botonNuevo = document.getElementById ("new-game")
const grillaHTML = document.querySelector(".grilla")
const buscarMatches = document.querySelector("#buscarMatch")


// selectores 👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻



const frutas = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊','🥝','🥥','🍒', '🍋']
let dificultad = ''
let grilla = []
let matches =[]


// ======= >> grilla 

const obtenerFrutaAlAzar = (frutas) => {
  return frutas[Math.floor(Math.random() * frutas.length)]  
  }

const generarGrilla = (tamanio) => {
  grilla = [] // se deja vacio para poder modifiCAR EL TAMANIO DE LA GRILLA, TENER ESO EN CUENTA
  for (let i = 0; i < tamanio; i++) {
    grilla[i] = [ ]
    for (let j = 0; j < tamanio; j++) {
      grilla [i][j] = obtenerFrutaAlAzar (frutas)
    
    }
    
  }
  return grilla
}

const crearGrilla = (ancho) => {
  const anchoDeGrilla = 50 * ancho
  grillaHTML.style.width = `${anchoDeGrilla}px`

  const listaDeFrutas = generarGrilla(ancho)
  grillaHTML.innerHTML = ''
  for (let i = 0; i < listaDeFrutas.length; i++) {
    for (let j = 0; j < listaDeFrutas[i].length; j++) {
      grillaHTML.innerHTML += `<div data-fila="${i}" data-columna="${j}">${listaDeFrutas[i][j]}</div>`
    }
  }
}



const comienzoJuego = dificultad => {

      if (dificultad == 'facil') {
          crearGrilla(6)
      }
      if (dificultad == 'medio') {
          crearGrilla(8)
      }
      if (dificultad == 'dificil') {
          crearGrilla(10)
      }
  
  }

const usuarioSeleccionaDificultad = () => {
  const usuarioSeleccionaDificultad = prompt(`Selecciona una dificutad: Facil, medio o Dificil`)
  dificultad = usuarioSeleccionaDificultad
  comienzoJuego (dificultad)
}

botonNuevo.onclick = () =>  {usuarioSeleccionaDificultad()}

  
botonReiniciar.onclick = () => {comienzoJuego (dificultad)}

buscarMatches.onclick = () => {
  matches = []

  for (let i = 0; i < grilla.length; i++) {

    for (let j = 0; j < grilla[i].length; j++) {
     
  
         if (grilla [i][j] === grilla [i][j+1]  &&  grilla [i][j] === grilla [i][j+2]) {
          const primerCeldaHorizontal = document.querySelector(`div[data-fila = '${i}'][data-columna = '${j}']`)
          const segundaCeldaHorizontal = document.querySelector(`div[data-fila = '${i}'][data-columna = '${j + 1}']`)
          const tercerCeldaHorizontal = document.querySelector(`div[data-fila = '${i}'][data-columna = '${j + 2}']`)
          primerCeldaHorizontal.classList.add("match-fila")
          segundaCeldaHorizontal.classList.add("match-fila")
          tercerCeldaHorizontal.classList.add("match-fila")


          if (grilla [i][j] === grilla [i][i+1]  &&  grilla [i][j] === grilla [i][i+2]) {
            const primerCeldaVertical = document.querySelector(`div[data-fila = '${j}'][data-columna = '${i}']`)
            const segundaCeldaVertical = document.querySelector(`div[data-fila = '${j}'][data-columna = '${i + 1}']`)
            const tercerCeldaVertical = document.querySelector(`div[data-fila = '${j}'][data-columna = '${i + 2}']`)
            primerCeldaVertical.classList.add("match-columna")
            segundaCeldaVertical.classList.add("match-columna")
            tercerCeldaVertical.classList.add("match-columna")
         
       
      }
     
    }
    
  }
}


alert ('Bienvenidx!')
usuarioSeleccionaDificultad()