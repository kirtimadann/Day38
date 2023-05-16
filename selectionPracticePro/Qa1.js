// Function to generate a random 3-digit value
function generateRandomValue() {
    return Math.floor(Math.random() * 900) + 100; // Generates a random number between 100 and 999 (inclusive)
  }
  
  // Generate 5 random values
  const values = [];
  for (let i = 0; i < 5; i++) {
    const randomValue = generateRandomValue();
    values.push(randomValue);
  }
  
  // Find the minimum and maximum values
  let minValue = values[0];
  let maxValue = values[0];
  
for(let i = 1; i < values.length; i++) {
    const currentValue = values[i];
  
    if (currentValue < minValue) {
      minValue = currentValue;
    }
  
    if (currentValue > maxValue) {
      maxValue = currentValue;
    }
  }
  
  // Output the minimum and maximum values
  console.log('Generated values:', values);
  console.log('Minimum value:', minValue);
  console.log('Maximum value:', maxValue);