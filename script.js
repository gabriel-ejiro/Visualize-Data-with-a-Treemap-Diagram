// Define SVG dimensions
const width = 800;
const height = 600;

// Load data
d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json").then(data => {
  // Your code for creating the treemap visualization goes here
}).catch(error => {
  console.log("Error loading data:", error);
});

// user story #3

// Append a group element for the tiles
const tileGroup = svg.append("g")
    .attr("class", "tiles");

// Create tiles for each data point
tileGroup.selectAll(".tile")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "tile")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)

// user story 4
// Define a color scale
const colorScale = d3.scaleOrdinal()
    .domain(data.map(d => d.category)) // Assuming your data has a "category" property
    .range(["#3366cc", "#dc3912", "#ff9900", "#109618"]); // Example colors, adjust as needed

// Append a group element for the tiles
const tileGroup = svg.append("g")
    .attr("class", "tiles");

// Create tiles for each data point
tileGroup.selectAll(".tile")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "tile")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .style("fill", d => colorScale(d.category)); // Fill color based on category

// user story #5
// Append a group element for the tiles
const tileGroup = svg.append("g")
    .attr("class", "tiles");

// Create tiles for each data point
tileGroup.selectAll(".tile")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "tile")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .style("fill", d => colorScale(d.category)) // Fill color based on category
    .attr("data-name", d => d.name) // Add data-name property
    .attr("data-category", d => d.category) // Add data-category property
    .attr("data-value", d => d.value); // Add data-value property

// user story #6
// Append a group element for the tiles
const tileGroup = svg.append("g")
    .attr("class", "tiles");

// Create tiles for each data point
tileGroup.selectAll(".tile")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "tile")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .style("fill", d => colorScale(d.category)) // Fill color based on category
    .attr("data-name", d => d.name) // Add data-name property
    .attr("data-category", d => d.category) // Add data-category property
    .attr("data-value", d => d.value); // Add data-value property

// Scale the width and height of each tile based on data-value
tileGroup.selectAll(".tile")
    .attr("width", d => (d.x1 - d.x0))
    .attr("height", d => (d.y1 - d.y0));

// user story #10 & #11

// Append a tooltip element to the body
const tooltip = d3.select("body")
  .append("div")
  .attr("id", "tooltip")
  .style("opacity", 0); // Initially hide the tooltip

// Create tiles for each data point
svg.selectAll(".tile")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "tile")
  .attr("x", d => d.x0)
  .attr("y", d => d.y0)
  .attr("width", d => d.x1 - d.x0)
  .attr("height", d => d.y1 - d.y0)
  .style("fill", d => colorScale(d.category)) // Fill color based on category
  .attr("data-name", d => d.name) // Add data-name property
  .attr("data-category", d => d.category) // Add data-category property
  .attr("data-value", d => d.value) // Add data-value property
  .on("mouseover", (event, d) => {
    // Show tooltip on mouseover
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.9);
    // Set tooltip content
    tooltip.html(`Name: ${d.name}<br>Category: ${d.category}<br>Value: ${d.value}`)
      .attr("data-value", d.value) // Set data-value property
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 28) + "px");
  })
  .on("mouseout", () => {
    // Hide tooltip on mouseout
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  });

