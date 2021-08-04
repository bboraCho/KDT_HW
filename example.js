let a = 123;
const b = 0;
{
  const b = 10;
  console.log("1: " + a);
  console.log("2: " + b);
  a = 321;
}
console.log("3: " + a);
console.log("4: " + b);
