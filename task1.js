/* Создать функцию filterRange(arr, firstNumber, secondNumber), которая принимает массив чисел arr и возвращает новый массив, 
содержащий только числа из arr в диапазоне от firstNumber до  secondNumber. Функция не должна менять массив arr. */

function filterRange(arr, firstNumber, secondNumber) {
    let arrNew = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= firstNumber && secondNumber >= arr[i]) {
        arrNew[j] = arr[i];
        j++;
      }
    }
    return arrNew;
  }