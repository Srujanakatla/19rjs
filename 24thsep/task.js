var car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
  };
  Object.freeze(car);
  car.model = 'Corolla';
  console.log("question 1:",car); 
  console.log("question 1:",Object.isFrozen(car));
  
  const user = {
    name: 'srujana',
    age: 21,
    email: "srujanakatla06@gmail.com"
  };
  const isFrozen = Object.isFrozen(user);
  branch = "cse";
  clg = "jntuhcej";
  console.log("question 2:",isFrozen); 
  
  let product = {
    name: 'Laptop',
    category: 'Electronics',
    price: 120000
  };
  let isSealed = Object.isSealed(product);
  console.log("question 3:",isSealed);

  var laptop = {
    brand: 'Dell',
    model: 'fxcqzp',
    price: 150000
  };
  var keys = Object.keys(laptop);
  console.log("question 4:",keys); 
  
  const house = {
    location: 'wgl',
    size: '2000 sqft',
    price: 500000
  };
  const values = Object.values(house);
  console.log("question 5:",values);
  
  var smartphone = {
    brand: 'Apple',
    model: 'iPhone 12',
    price: 99999
  };
  Object.seal("question 6:",smartphone);
  smartphone.price = 8999;
  var Seal = Object.isSealed(smartphone);
  
  console.log("question 6:",smartphone); 
  console.log("question 6:",Seal); 

  var book = {
    title: 'JavaScript: dynamic web page',
    author: 'srujana',
    publishedYear: 2008
  };
  Object.freeze(book);
  book.publishedYear = 1999;
  var Frozen = Object.isFrozen(book);
  
  console.log("question 7:",book);
  console.log("question 7:",Frozen); 
  
  let persons = {
    firstName: 'srujana',
    lastName: 'katla',
    age: 21
  };
  let Keys = Object.keys(persons);
  console.log("question 8:",Keys); 
  let Values = Object.values(persons);
  console.log("question 8:",Values);
  
  var course = {
    title: 'Web Development',
    instructor: 'srujana',
    duration: '3 months'
  };
  var entries = Object.entries(course);
  console.log("question 9:",entries); 
  delete course.duration;
  console.log("question 9:",course); 

  var employee = {
    name: 'srujana',
    position: 'Software Engineer',
    salary: 80000
  };
  Object.seal(employee);
  employee.position = 'Senior Software Engineer';
  employee.department = 'Engineering';
  var employeeKeys = Object.keys(employee);
  
  console.log("question 10:",employee); 
  console.log("question 10:",employeeKeys); 
  
  