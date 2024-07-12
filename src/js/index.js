// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//Crea una funcion que rellene un array con 15 números que no se repitan del 1 al 20
const fillArray = () => {
  const numbers = [];

  while (numbers.length < 15) {
    const randomNumber = Math.floor(Math.random() * 20);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  console.log(numbers);
};

fillArray();

// Recursividad -> Es una funcion que se llama a sí misma

const numbers2 = [];

const fillArrayWithNoNumbers = () => {
  if (numbers2.length === 15) {
    console.log(numbers2);
    return;
  }

  const randomNumber2 = Math.ceil(Math.random() * 20);

  if (!numbers2.includes(randomNumber2)) {
    numbers2.push(randomNumber2);
  }

  return fillArrayWithNoNumbers();
};
