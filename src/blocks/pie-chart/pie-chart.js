/*am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.legend = new am4charts.Legend();

chart.data = [
  {
    country: "Lithuania",
    litres: 427
  },
  {
    country: "Czech Republic",
    litres: 9
  },
];

chart.innerRadius = 100;

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "litres";
series.dataFields.category = "country";

});
*/
