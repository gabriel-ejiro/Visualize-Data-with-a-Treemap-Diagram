// Define SVG dimensions
const width = 800;
const height = 600;

// Load data
d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json").then(data => {
  // Your code for creating the treemap visualization goes here
}).catch(error => {
  console.log("Error loading data:", error);
});
