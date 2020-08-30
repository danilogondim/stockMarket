// if the input is: [45, 24, 35, 31, 40, 38, 11] the program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made. If no profit could have been made, return -1.

// Strategy 1: Brute Force

const maxProfit = (stockPrices) => {
  let output = -1;
  let currentMin;

  stockPrices.forEach((elem, index, array) => {
    if (currentMin === undefined || currentMin > elem) {
      currentMin = elem;
    }

    for (let i = index + 1; i < array.length - index + 1; i++) {
      if (array[i] - currentMin > 0 && array[i] - currentMin > output) {
        output = array[i] - currentMin;
      }
    }

  });

  return output;
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11])); // 16
console.log(maxProfit([45, 40])); // -1
console.log(maxProfit([45, 24, 35, 31, 40, 38, 70])); // 46