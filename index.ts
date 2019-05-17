for (let i = 0; i < 10; i++) {
  setTimeout( () => {
    // console.log(i)
  }, 100*i) 
}

function f(input: boolean) {
  let a = 100 
  if (input) {
    let b = a + 1
    return b
  }
  return a
}

f(false)

function sumMatrix(matrix: number[][]) {
  let sum = 0 
  for (let i = 0; i < 2; i++) {
    let currentRow = matrix[i]
    for(let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i]
    }
  }
}

let matrix = [
  [1,2,3],
  [4,5,6]
]

sumMatrix(matrix)

let arr: [number, number] = [1,2]

function t([first, second]: [number, number]) {
  console.log(first, 'first')
  console.log(second, 'second')
}

// t(arr)

let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}

let {a: newName1, b: newName2} = o 
// console.log(newName1, newName2)

function keepWholeObject(wholeObject: {a: string, b?: number}) {
  let {a, b = 1001} = wholeObject
  console.log(a, b)
}

type C = {
  a: string,
  b?: number
}

function f2({a, b}: C): void{
  
}

let first = [1,2]
let second = [3,4]
let bothPlus = [0, ...first, ...second]
console.log(bothPlus, 'bothPlus')

let defauts = {
  foo: '',
  price: '$10',
  ambiance: 'noisy'
}

let search = { ...defauts, foo: 'rich'}
// console.log(search, 'search')

// 接口
interface Square {
  color: string,
  area: number
}

// 可选属性
interface SquareConfig {
  color?: string,
  width?: number
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color 
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color: 'black'})


// 只读属性
interface Point {
  readonly x: number,
  readonly y: number
}

let p1: Point = {x: 10, y: 20}
// p1.x = 30 报错

let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a 
// ro[0] = 12 只允许读取

interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj, 'labelledObj')
}

let myObj = {
  size: 10,
  label: 'Size 10 Object'
}

printLabel(myObj)

// 函数的类型
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc 

mySearch = function (src, sub): boolean {
  let result = src.search(sub)
  return result > -1
}

// 索引类型
interface StringArray {
  [index: number]: string
}

interface ClockInterface {
  tick():void
}

interface ClockContructor {
  new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockContructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {

  }

  tick() {
    console.log('AnalogClock')
  }
}

let digital = createClock(DigitalClock, 7, 10)
let analog = createClock(AnalogClock, 17, 14)







