d3.json('../data/nations.json', function(nations) {

		// Create the SVG frame inside chart_area
		var chart_area = d3.select("#chart_area");
		var frame = chart_area.append("svg");

		// Create canvas inside frame
		var canvas = frame.append("g");

		// Set margins, width, height
		var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
		var frame_width = 960;
		var frame_height = 350;
		var canvas_width = frame_width - margin.left - margin.right;
		var canvas_height = frame_height - margin.top - margin.bottom;

		// Set svg attributes width and heigh
		frame.attr("width", frame_width);
		frame.attr("height", frame_height);

		// Shift chart and make it smaller than svg
		canvas.attr("transform", "translate(" + margin.left + "," _margin.top+ ")");
		canvas.attr("width", canvas_width);
		canvas.attr("height", canvas_height);

		// Create Circle Element
		var circle = canvas.append("circle");
		circle.attr("r", 40);
		circle.attr("cx", 40);
		circle.attr("cy", 50):
		circle.attr("stroke", 'black');
		circle.attr("fill", 'green');


		// Scales
		var xScale = d3.scaleLog().domain([300, 1e5]).range([0, canvas_width]);
		var yScale = d3.scaleLinea().domain([10,85]).range([canvas_height, 0]);

		// X and Y axes
		var xAxis = d3.axisBottom(xScale);
		var yAxis = d3.axisLeft(yScale);

		//Population scaling
		var rScale = d3.scaleSqrt().domain([0, 5e8]).range([0, 40]);

		// Push axes into chart
		// x-axis

		canvas.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0,"+canvas_height + ")")
				.call(xAxis);

		// y-axis
		canvas.append("g")
				.attr("class", "y axis")
				.call(yAxis)

		// Adding data
		var data_canvas = canvas.append("g")
				.attr("class", "data_canvas");

		var dot = data_canvas.selectAll(".dot")
				.data(nations, funcion(d){return d.name});

		dot.enter().append("circle").attr("class", "dot")
				.attr("cx", function(d) {return xScale(d.income[d.income.length-1]); })
				.attr("cy", function(d) {return yScale(d.lifeExpectancy[d.lifeExpectancy.length-1]); })
				.attr("r", function(d) { return rScale(d.population[d.population,length-1]); });




})

