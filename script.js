function generateWorkout() {
let goal = document.getElementById("goal").value;
let result = document.getElementById("workoutResult");
if(goal === "weightloss"){
result.innerHTML = `
<h3>Weight Loss Plan</h3>
<ul>
<li>20 Min Treadmill</li>
<li>Jump Rope - 10 Min</li>
<li>Squats - 4 Sets</li>
<li>Mountain Climbers - 3 Sets</li>
<li>Plank - 60 Seconds</li>
</ul>
`;
}
else if(goal === "musclegain"){
result.innerHTML = `
<h3>Muscle Gain Plan</h3>
<ul>
<li>Bench Press - 4 Sets</li>
<li>Deadlift - 4 Sets</li>
<li>Pull Ups - 3 Sets</li>
<li>Shoulder Press - 4 Sets</li>
<li>Bicep Curls - 3 Sets</li>
</ul>
`;
}
else{
result.innerHTML = `
<h3>Strength Plan</h3>
<ul>
<li>Squats - 5 Sets</li>
<li>Deadlifts - 5 Sets</li>
<li>Bench Press - 5 Sets</li>
<li>Barbell Rows - 4 Sets</li>
<li>Farmer Walk - 3 Rounds</li>
</ul>
`;
}
}
function generateDiet() {
let goal = document.getElementById("dietGoal").value;
let result = document.getElementById("dietResult");
if(goal === "weightloss"){
result.innerHTML = `
<h3>Weight Loss Diet</h3>
<ul>
<li>Breakfast: Oats + Fruits</li>
<li>Lunch: Salad + Grilled Chicken</li>
<li>Snack: Green Tea</li>
<li>Dinner: Soup + Vegetables</li>
</ul>
`;
}
else{
result.innerHTML = `
<h3>Muscle Gain Diet</h3>
<ul>
<li>Breakfast: Eggs + Milk</li>
<li>Lunch: Rice + Chicken</li>
<li>Snack: Peanut Butter Sandwich</li>
<li>Dinner: Fish + Sweet Potato</li>
</ul>
`;
}
}
Javascript