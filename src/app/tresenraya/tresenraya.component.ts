import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tresenraya',
  templateUrl: './tresenraya.component.html',
  styles: []
})
export class TresenrayaComponent implements OnInit {

  winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  humanArr = [];
  computerArr = [];
  turnoPC = true;
  casillasMarcadas = new Array(9).fill(false);
  start = false;
  empiezaHumano = false;
  quienGana: string;

  constructor() { }

  ngOnInit() {
    //this.bestPosib(this.puntuacion(this.humanArr, this.computerArr, this.turnoPC), this.computerArr, this.humanArr);
    ////console.log(this.bestPosib(this.puntuacion(this.humanArr, this.computerArr, this.turnoPC), this.computerArr, this.humanArr))

    for (let i = 0; i < this.humanArr.length; i++) {
      this.casillasMarcadas.push(this.humanArr[i])
    }
    for (let i = 0; i < this.humanArr.length; i++) {
      this.casillasMarcadas.push(this.computerArr[i])
    }

  }

  compare(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false
      }
    }
    return true;
  }

  sortNumber(a, b) {
    return a - b;
  }
  //ordena el array de puntuaciones
  sortFinal(a, b) {
    return b[1] - a[1];
  }

  checkWin(array) {
    let result = false;
    for (let i = 0; i < this.winCombos.length; i++) {
      let aciertos = 0;
      for (let j = 0; j < this.winCombos[i].length; j++) {
        if (array.indexOf(this.winCombos[i][j]) != -1)
          aciertos++;
      }
      result = result || aciertos >= 3;
    }
    return result;
  }
  //devuelve un array de casillas libres
  casillasLibres(arrhumano, arrcomputer) {
    let libres = [];
    let casillas = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    for (var i = 0; i < arrhumano.length; i++) {
      if (casillas.indexOf(arrhumano[i]) != -1) {
        casillas.splice(casillas.indexOf(arrhumano[i]), 1);
      }
    }
    for (var j = 0; j < arrcomputer.length; j++) {
      if (casillas.indexOf(arrcomputer[j]) != -1) {
        casillas.splice(casillas.indexOf(arrcomputer[j]), 1);
      }
    }
    return casillas;
  }


  posibilidades(arr1, arr2) {
    let libres = this.casillasLibres(arr1, arr2);
    let posibArr = [];

    for (let i = 0; i < libres.length; i++) {
      posibArr.push(arr1.concat(libres[i]));
    }
    return posibArr;
  }

  puntuacion(arrhumano, arrcomputer, turno) {
    let contador = 0;
    let posibilities = [];
    //console.log("Array humano: " + arrhumano);
    //console.log("Array computer: " + arrcomputer);
    let posibilidadesRonda1 = this.posibilidades(arrcomputer, arrhumano);
    ////console.log( posibilidadesRonda1)

    if (turno === true) {
      for (let i = 0; i < posibilidadesRonda1.length; i++) {
        //console.log("Posibilidad Ronda 1: (" + i + ") " + posibilidadesRonda1[i]);
        if (this.checkWin(posibilidadesRonda1[i])) {
          //console.log("Ganador Ronda 1: " + this.posibilidadesComputer(arrhumano, arrcomputer)[i]);
          posibilities.push([posibilidadesRonda1[i], 10000]);
        } else {
          let contador1 = 0;
          let posibilidadesRonda2 = this.posibilidades(arrhumano, posibilidadesRonda1[i]);
          for (let j = 0; j < posibilidadesRonda2.length; j++) {

            //console.log("Posibilidad Ronda 2: (" + j + ") " + posibilidadesRonda2[j]);
            if (this.checkWin(posibilidadesRonda2[j])) {
              contador1 -= 500;
              //console.log("Ganador ronda 2: " + posibilidadesRonda2[j]);

            }
            else {
              let posibilidadesRonda3 = this.posibilidades(posibilidadesRonda1[i], posibilidadesRonda2[j]);
              for (let k = 0; k < posibilidadesRonda3.length; k++) {
                //console.log("Posibilidades Ronda 3: (" + k + ") " + posibilidadesRonda3[k]);
                if (this.checkWin(posibilidadesRonda3[k])) {
                  contador1 += 10;
                  //console.log("Ganador Ronda 3: " + posibilidadesRonda3[k]);
                }
                else {
                  //console.log("no es ganador de Ronda 3: " + posibilidadesRonda3[k]);
                  let posibilidadesRonda4 = this.posibilidades(posibilidadesRonda2[j], posibilidadesRonda3[k]);
                  for (let l = 0; l < posibilidadesRonda4.length; l++) {
                    ////console.log(posibilidadesRonda4[l])
                    if (this.checkWin(posibilidadesRonda4[l])) {
                      //console.log("Ganador de Ronda 4: " + posibilidadesRonda4[l])
                      contador1 -= 5
                    }
                    else {
                      let posibilidadesRonda5 = this.posibilidades(posibilidadesRonda3[k], posibilidadesRonda4[l]);
                      for (let m = 0; m < posibilidadesRonda5.length; m++) {
                        if (this.checkWin(posibilidadesRonda5[m])) {
                          contador += 2
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          posibilities.push([this.posibilidades(arrcomputer, arrhumano)[i], contador1]);
        }
      }


      return posibilities.sort(this.sortFinal);
    }

  }
  bestPosib(array, arrPC, arrHuman) {
    if (arrPC.length === 0) {
      let libres = this.casillasLibres(arrHuman, arrPC);
      if (libres.indexOf(4) != -1) {
        return 4;
      } else if (libres.indexOf(0) != -1) {
        return 0;
      }
    }

    let best = array[0][0];
    let casilla;
    //console.log(best);
    for (let i = 0; i < best.length; i++) {
      if (this.computerArr.indexOf(best[i]) == -1) {
        casilla = best[i];
      }
    }
    return casilla;
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  marcar(cas: number) {
    if (this.start) {
      this.quienGana = ""
      this.start = true;

      if (this.casillasLibres(this.humanArr, this.computerArr).indexOf(cas) != -1) {
        this.humanArr.push(cas);


        if (((this.checkWin(this.humanArr) || this.checkWin(this.computerArr)) || this.casillasLibres(this.humanArr, this.computerArr).length == 0)) {

          console.log(this.casillasLibres(this.humanArr, this.computerArr).length)
          if (this.checkWin(this.humanArr)) {
            this.quienGana = "human"
          }
          else if (this.checkWin(this.computerArr)) {
            this.quienGana = "computer"
          }
          else {
            this.quienGana = "empate"
          }

          this.start = false;
          var flagPartidaAcabada = true
          this.empiezaHumano = false;

        }

        if (!flagPartidaAcabada) {

          this.computerArr.push(this.bestPosib(this.puntuacion(this.humanArr, this.computerArr, this.turnoPC), this.computerArr, this.humanArr))
          if (((this.checkWin(this.humanArr) || this.checkWin(this.computerArr)) || this.casillasLibres(this.humanArr, this.computerArr).length == 0)) {

            console.log(this.casillasLibres(this.humanArr, this.computerArr).length)
            if (this.checkWin(this.humanArr)) {
              this.quienGana = "human"
            }
            else if (this.checkWin(this.computerArr)) {
              this.quienGana = "computer"
            }
            else {
              this.quienGana = "empate"
            }

            this.start = false;
            var flagPartidaAcabada = true
            this.empiezaHumano = false;

          }

        }
        flagPartidaAcabada = false
      }
    }
  }
  empezarPC() {
    this.humanArr = []
    this.computerArr = []
    this.quienGana = ""
    this.start = true
    this.computerArr.push(this.bestPosib(this.puntuacion(this.humanArr, this.computerArr, this.turnoPC), this.computerArr, this.humanArr))
  }

  empezarHuman() {
    this.humanArr = []
    this.computerArr = []
    this.quienGana = ""
    this.empiezaHumano = true;
    this.start = true

  }

  fin() {
    this.humanArr = []
    this.computerArr = []
  }
}
