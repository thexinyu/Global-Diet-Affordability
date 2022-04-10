<<<<<<< HEAD
// Set dimensions and margins for plots
// const width = 1200;
// const height = 600;
// const margin = {left:250, right:50, bottom:50, top:50};
// const yTooltipOffset = 15;

=======
>>>>>>> f8c89fa7b1e50717e9052b371f6f8b4f1b4737e9
//Bar Chart
const widthbar = 1000;
const heightbar = 2500;
const marginbar = {left:150, right:50, bottom:50, top:50};
const yTooltipOffset2 = 15;

const svg1 = d3.select("#csv-bar")
              .append("svg")
              .attr("width", widthbar+marginbar.left+marginbar.right)
              .attr("height", heightbar + marginbar.top + marginbar.bottom)
              .append("g")
              .style("margin-top", "10px")
              .attr("transform", "translate("+marginbar.left + "," + marginbar.top + ")");


      // Add x-axis
<<<<<<< HEAD
let x = d3.scaleLinear()
                // .domain([0, d3.max(data, function(d) {return d.cost_nutrition})])
          .range([0, width]);
let xAxis = svg1.append("g")
                .attr("class", "myXaxis")
=======
      let x = d3.scaleLinear()
                .range([0, widthbar]);
      let xAxis = svg1.append("g")
                      .attr("class", "myXaxis")
>>>>>>> f8c89fa7b1e50717e9052b371f6f8b4f1b4737e9

       // Add y-axis
let y = d3.scaleBand()
          .range([0, heightbar])
          // .domain(data.map(function(d) {return d.country_name;}))
          .padding(.1);
let yAxis = svg1.append("g")
          .attr("transform", "translate(0," + heightbar + ")")


  function update(selectedVar) {

<<<<<<< HEAD
    d3.csv("/data/clean_nutrition_df.csv").then((data) => {
        y.domain(data.map(function(d) {return d.country_name; }))
        // yAxis.transition().duration(1000).call(d3.axisLeft(y))
=======
d3.csv("data/clean_nutrition_df.csv").then((data) => {
            y.domain(data.map(function(d) {return d.country_name; }))
            // yAxis.transition().duration(1000).call(d3.axisLeft(y))
>>>>>>> f8c89fa7b1e50717e9052b371f6f8b4f1b4737e9

        x.domain([0, d3.max(data, function(d) {return +d[selectedVar] }) ]);
        xAxis.transition().duration(1000).call(d3.axisTop(x));

const tooltip1 = d3.select("#csv-bar")
                .append("div")
                .attr("id", "tooltip1")
                .select("opacity", 0)
                .attr("class", "tooltip");



const mouseover1 = function(event, d) {
    tooltip1.html("Country:" + d.country_name + "<br>" + function(d) {return (d[selectedVar])} + "<br>")
            .style("opacity", 1);
};



const mousemove1 = function(event, d) {
    tooltip1.style("left", (event.pageX) + "px")
    .style("bottom", (event.pageY + yTooltipOffset2) + "px");
}



const mouseleave1 = function(event, d) {
    tooltip1.style("opacity", 0);
}
            

<<<<<<< HEAD
// const mouseleave1 = function(event, d) {
//     tooltip1.style("opacity", 0);
// }
        let u = svg1.selectAll("rect")
                    .data(data)


        u.enter()
         .append("rect")
         .merge(u)
         .transition()
         .duration(1000)
         .attr("y", function(d) {return y(d.country_name); })
         .attr("x", 0) //function(d) {return x(d[selectedVar]); })
         .attr("width", function(d) {return x(d[selectedVar]); }) //do i need to have width -
         .attr("height", y.bandwidth())
         .attr("fill", "#69b3a2")



        //  svg1.append("g")
        // .attr("class", "x axis")
        // .call(d3.axisBottom(x).ticks(5).tickFormat(function(d) { return parseInt(d / 1000); }).tickSizeInner([-heightbar]));

        svg1.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y));


       //tried to add labels but not working :(

        // u.append("text")
        //  .attr("class", "label")
        //  .attr("y", function(d) {
        //     return y(d.country_name) y.bandwidth() / 2 + 4;
        //  })
        //  .attr("x", function(d) {
        //     return x(d[selectedVar]) + 3;
        //  })
        //  .text(function(d) {
        //     return d[selectedVar];
        //  })

    })
  }
=======
let bars = svg1.selectAll("rect")
                        .data(data)


            bars.enter()
             .append("rect")
             .merge(bars)
             .transition()
             .duration(1000)
             .attr("y", function(d) {return y(d.country_name); })
             .attr("x", 0)
             .attr("width", function(d) {return x(d[selectedVar]); })
             .attr("height", y.bandwidth())
             .attr("fill", "#69b3a2")


            svg1.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(y));

            
          svg1.selectAll("rect")
            .on("mouseover", mouseover1)
            .on("mousemove", mousemove1)
            .on("mouseleave", mouseleave1);

             let text = svg1.append("text")
                            .data(data)

                            text.merge(text)
                            .transition()
                            .duration(1000)
                            .attr("x", function(d) {return x(d[selectedVar]);})
                            .attr("y", y.bandwidth())
                            .text(function(d) {
                              return d[selectedVar]
                            })
                            .style("fill", "black")


            // svg1
            // .append("text")
            // .data(data)
            // .attr("x", function(d) {return x(d[selectedVar]);})
            // .attr("y", y.bandwidth())
            // .text(function(d) {
            //   return d[selectedVar];
            // })
            // .style("fill", "black")
        })
      }
>>>>>>> f8c89fa7b1e50717e9052b371f6f8b4f1b4737e9

  update('cost_energy')

      // svg1.selectAll(".bar")
      //       .data(data)
      //       .enter()
      //       .append("rect")
      //       .attr("class", "bar")
      //       .attr("x", 0)
      //       .attr("height", y.bandwidth())
      //       .attr("y", function(d) {return y(d.country_name);})
      //       .attr("width", function(d) {return x(d.cost_nutrition);})
      //       .on("mouseover", mouseover1)
      //       .on("mousemove", mousemove1)
      //       .on("mouseleave", mouseleave1);

    

