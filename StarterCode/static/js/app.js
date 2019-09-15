// from data.js
var tableData = data;

// Function to create table with data
function table(data) {
var tbody = d3.select("tbody");

//Add Data
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((value) => {
      var ufo = row.append("td");
        ufo.text(value);
      }
    );
  });
}

// cleaning the table for new data
function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };

// initial display of all UFO sightings
//console.log(tableData);


//Create filter button
function buttonClick() {

 d3.event.preventDefault();
  var date = d3.select("#datetime").property("value");
  var newData = tableData;
  if (date) {
    newData = newData.filter(row => row.datetime === date);
  }
  table(newData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);

 // display message if no records found
 if (newData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>Results Not Found</h4>");
  };