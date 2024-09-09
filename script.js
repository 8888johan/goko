// Example user data
const userData = {
    name: "John Doe",
    age: 25,
    gender: "Male",
    steps: 12450,
    calories: 500,
    exerciseDuration: 45
};

// Function to update the stats dynamically on the webpage
function updateFitnessStats() {
    document.getElementById('name').textContent = `Name: ${userData.name}`;
    document.getElementById('age').textContent = `Age: ${userData.age}`;
    document.getElementById('gender').textContent = `Gender: ${userData.gender}`;
    document.getElementById('steps').textContent = `Steps Today: ${userData.steps}`;
    document.getElementById('calories').textContent = `Calories Burned: ${userData.calories} kcal`;
    document.getElementById('exercise').textContent = `Exercise Duration: ${userData.exerciseDuration} min`;
}

// Call the function when the page loads
window.onload = updateFitnessStats;
