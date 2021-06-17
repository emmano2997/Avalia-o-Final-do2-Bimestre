// 1º Questão

function someFun(p, callback) {
    callback(p.someProperty)
    return 1
  }
  
// 2º Questão
  
  function someFn(number) {
    const returnFunction = (value) => {
      switch (value) {
        case 3:
          return 4
        case 1:
          return 5
        case 5:
          return 10
      }
    }
    return returnFunction
  }
  
// 3º Questão
    function calculator(x, y) {
    return callback => callback(x, y)
  }
  
  // Quarta Questão
  
  /**
   * No console aparecera nessa ordem:
   * 4
   * 1
   * 5
   * 1
   */
  
  // Quinta Questão
  
  function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} X ${i} = ${num * i}`)
    }
  }