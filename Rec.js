const numbers = [[1, 2, 3, 4],[3, 6, [5, 6], 8, 2,[2, 4], 9],[4, 2, [6, 7, [2, 6, 1]]]]
  


const req = (numbers) => {
  if (numbers.length=== 1)
  return  numbers+= req(numbers)

  else  return numbers+=numbers
}


const Flatiin = (num) => numbers += numbers




console.log(Flatiin(numbers.flat()))