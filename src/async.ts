function greetSync(name: string): string {
  console.log("Synchronous greeting...");
  return `Hello, ${name}!`;
}

const message = greetSync("Student");
console.log(message); // Output: Synchronous greeting...
// Hello, Student!

function greetAsync(name: string): Promise<string> {
  return new Promise((resolve) => {
    console.log("Asynchronous greeting (simulated delay)...");
    setTimeout(() => {
      resolve(`Hello (after delay), ${name}!`);
    }, 1000); // Simulate a 1-second delay
  });
}

greetAsync("Student")
  .then((message) => {
    console.log(message); // Output: Asynchronous greeting (simulated delay)...
    // (after 1 second)
    // Hello (after delay), Student!
  })
  .catch((error) => {
    console.error("Error:", error); // Handle potential errors
  });
console.log("End of program");

async function greet() {
  try {
    const message = await greetAsync("Student");
    console.log(message);
  } catch (e) {
    //
  }
}
