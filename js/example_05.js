// индекс потребительских цен
// compute Consumer Price Index (CPI)
const stringBasket = '1 hamburger, 4 hotdog, 2 coke, 4 milk'

const data = { // YOU HAVE DATA WITH PRICES FOR PRODUCTS PER YEAR
  2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
  2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
  2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
};

// создаю функцию, приводящую массив объектов даты
// попробовать использовать только цикл и data[key] без создания массива?
const yearData = (data) => {
    let yearKey = [];
    for (const key of Object.keys(data)) {
      yearKey.push(data[key]);
      console.log(data[key]);
      // for (const name of data[key]) {
      //   console.log(name);
      // }
    }
    return yearKey;
};
const parseData = yearData(data);
console.log(parseData);

// принимает string, возвращает object запроса
const splitBasket = (basket) => {  
    const goods = basket.split(', '); // разбиваем string на arrow товаров
    const index = {}; // создаем object в который вписываем значения [count, name]
    for (const good of goods) {
        const [count, name] = good.split(' '); // good - string, split возвращает arrow, и элементам arrow сразу присваюваются key
            index[name] = Number(count); // присваиваю key(name) то, что хранится в value(count)
    }
    return index;
}
const parseBasket = splitBasket(stringBasket);
console.log(parseBasket);

const countYearBasket = (basket, data) => {
  const basketEntries = Object.entries(basket);
    let sum = 0;
    
    // for (const year of yearData) {
    //     const yearEntries = Object.entries(year);
    //     for (const yearEntrie of yearEntries) {
    //         const [name, count] = yearEntrie;
    //          console.log(year[name]);
    //     }
         
    //   }

  for (const basketEntry of basketEntries) {
      const [name, count] = basketEntry;
    // const priceFromYear = data[name];

    sum += priceFromYear * count;
  }
  return sum;
};

console.log(countYearBasket(parseBasket, parseData));
  // write some code to get solution 
  // use existing functions
  // YOU NEED TO CALCULATE OBJECT WITH COST OF BASKET PER YEAR
  // const prices = { 
  //     2014: 7.85 === 1 * 1,25 + 4 * 1 + 2 * 0.5 + 4 * 0.4
  //     2015: 9.65 === 1 * 1,25 + 4 * 1.25 + 2 * 0.7 + 4 * 0.5
  //     2016: 10.9 === 1 * 2.5 + 4 * 1 + 2 * 1 + 4 * 0.6
  // }




