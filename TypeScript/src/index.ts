function greeter(person: string) {
    return "Hello, " +person;
}

var Person = greeter('Person');
console.log(Person);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))