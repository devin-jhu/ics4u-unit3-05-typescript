/**
 * The magic square program
 * 
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-12-04
 */

const MAGIC_NUMBER = 15
const NUMBER_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * The findDuplicates function.
 *
 *
 * @param {number[]} array - the array to find duplicates in.
 * @returns {number[]} - the array of duplicate values.
 */
function findDuplicates(array: number[]): number[] {
  const sortedArray = array.slice().sort(function (a, b) {
    return a - b
  })

  // (use slice to clone the array so the
  // original array won't be modified)
  const results = []
  for (let counter = 0; counter < sortedArray.length - 1; counter++) {
    if (sortedArray[counter + 1] === sortedArray[counter]) {
      results.push(sortedArray[counter])
    }
  }
  return results
}

/**
 * The printSquare function.
 *
 *
 * @param {number[]} array - the magic square array.
 */
function printSquare(array: number[]): void {
  console.log(
    `\n${array[0]} ${array[1]} ${array[2]}
${array[3]} ${array[4]} ${array[5]}\n${array[6]} ${array[7]} ${array[8]}`
  )
}

/**
 * The isMagic function.
 *
 * @param {number[]} square - the square array to be checked.
 * @returns {boolean} - if it's a magic square or not.
 */
function isMagic(square: number[]): boolean {
  // Booleans
  const hasDuplicates = findDuplicates(square).length === 0
  const rows =
    square[0] + square[1] + square[2] === MAGIC_NUMBER &&
    square[3] + square[4] + square[5] === MAGIC_NUMBER &&
    square[6] + square[7] + square[8] === MAGIC_NUMBER

  const columns =
    square[0] + square[3] + square[6] === MAGIC_NUMBER &&
    square[1] + square[4] + square[7] === MAGIC_NUMBER &&
    square[2] + square[5] + square[8] === MAGIC_NUMBER

  const diagonals =
    square[0] + square[4] + square[8] === MAGIC_NUMBER &&
    square[2] + square[4] + square[6] === MAGIC_NUMBER

  return rows && columns && diagonals && hasDuplicates
}

/**
 * The magicSquare function.
 *
 * @param {number[]} numbers - the list of numbers (1-9).
 * @param {number[]} square - the current square to be filled up.
 * @param {number} index - the index of the numbers list.
 */
function magicSquare(numbers: number[], square: number[], index: number): void {
  // Checks if the square is full and magic.
  if (index === 9 && isMagic(square)) {
    printSquare(square)
  } else {
    // Adds a number to the square if it's not full.
    if (index !== 9) {
      // Loops through each number from 1 to 9.
      for (let counter = 0; counter < 9; counter++) {
        square[index] = numbers[counter]
        magicSquare(numbers, square, index + 1)
      }
    }
  }
}

const array: number[] = []

console.log('every 3x3 magic square: ')
magicSquare(NUMBER_ARRAY, array, 0)

console.log('\nDone.')
