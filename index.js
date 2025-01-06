// Update the age of a person in an array of people
const updatePersonAge = (people, name, newAge) => {
  const updatedPeople = people.map((person) => {
    if (person.name === name) {
      return { ...person, age: newAge };
    }
    return person;
  });

  console.log(updatedPeople);
  return updatedPeople;
};


const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
];

updatePersonAge(people, "Jane", 35);


const sumEvenNumbers = (arr) => {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
};


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = sumEvenNumbers(numbers);
console.log(result);  


const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
};


const year = 2025;
console.log(isLeapYear(year));  



const removeDuplicates = (arr) => {
  return [...new Set(arr)];  
};

// Example usage:
const number = [1, 2, 3, 4, 4, 5, 2, 6, 7, 1];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);  


const sortStudentsByGrade = (students) => {
  return students.sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA; 
  });
};


const students = [
  { name: "John", grades: [85, 90, 92] },
  { name: "Jane", grades: [88, 79, 84] },
  { name: "Bob", grades: [92, 95, 98] },
  { name: "Alice", grades: [75, 80, 78] },
];

const sortedStudents = sortStudentsByGrade(students);
console.log(sortedStudents);


const calculateTotalValue = (items) => {
  return items.reduce((total, item) => {
    return total + (item.quantity * item.price);  
  }, 0);
};


const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 15 },
  { quantity: 1, price: 50 }
];

const totalValue = calculateTotalValue(items);
console.log(totalValue); 
