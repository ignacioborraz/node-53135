type booleanOrString = boolean | string
type arrayOfNumber = Array<number>
type arrayOfStringsOrNumbers = Array<string | number>
type arrayOfProducts = Array<Product>
type Props = {
    title: string
    subtitle: string
    isOnline: boolean
}

const id: number = 35249552;
//const nombreVariable: tipoDeTato = valorDelDato
let lastname: string = "borraz";
let pets: booleanOrString;
pets = false;
pets = "true";
let born = 1990;

interface Product {
  _id?: string;
  title: string;
  price: number;
  stock: number;
  description?: string;
  updateStock?: (text: string) => Product
}
const prod1 = {
  id: "abc",
  title: "prod1",
  price: 100,
  stock: 1000,
  description: "",
};
const prod2: Product = { title: "prod2", price: 100, stock: 1000 };
const prod3: Product = { title: "prod3", price: 100, stock: 1000 };
const prod4 = { _id: "abcd", title: "produ4" };

const arrayNumbers: arrayOfNumber = [1, 2, 3, 4];
const arrayStrings: arrayOfStringsOrNumbers = ["", 1, "true"];
const arrayProducts: arrayOfProducts = [prod1, prod2, prod3];

const printResult = (num1: number, num2: number): string => {
  return "el resultado de la suma es: " + (num1 + num2);
};

const logInConsole = (text: string): void => {
  console.log(text);
  console.log(text);
  console.log(text);
};

function readProduct(product: Product): string {
  return `El producto ${product.title} cuesta ${product.price}`;
}

function createProduct(title: string, price: number, stock: number):Product {
    const product: Product = { title, price, stock }
    return product
}

function genericFunction1<T>(data:T): string {
    const type: string = typeof data
    return type
}

function genericFunction2<T>(data:T, text: string):void {
    const type: string = typeof data
    console.log(type)
}