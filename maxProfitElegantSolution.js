// Strategy 2: Elegant Solution
const maxProfit = (stockPrices, currentMin, currentOutput) => {
  let output = -1;
  if (currentMin) {
    stockPrices.forEach((elem, index, array) => {
      for (let i = index + 1; i < array.length - index + 1; i++) {
        if (array[i] - currentMin > 0 && array[i] - currentMin > currentOutput) {
          currentOutput = array[i] - currentMin;
        }
      }
    });
    if (currentOutput > output) {
      return currentOutput;
    }
  }

  stockPrices.forEach((elem, index) => {
    if (currentMin === undefined || currentMin > elem) {
      currentMin = elem;
      // if my currentMin change, then I need to evaluate for a possible new output that is bigger than the previous
      output = maxProfit(stockPrices.slice(index), currentMin, output);
    }
  });
  return output;
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11])); // 16
console.log(maxProfit([45, 40])); // -1
console.log(maxProfit([45, 24, 35, 31, 40, 38, 70])); // 46