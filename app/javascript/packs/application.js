/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import 'amcharts3'
import 'amcharts3/amcharts/serial'
import 'amcharts3/amcharts/pie'
import 'amcharts3/amcharts/themes/light'

document.addEventListener("DOMContentLoaded",function(){
  const dataDiv = document.getElementById('line-graph')
  const data = JSON.parse(dataDiv.dataset.moods)
  console.log(data)
  var chart = AmCharts.makeChart('line-graph', {
      "type": "serial",
      "theme": "light",
      "marginRight": 40,
      "marginLeft": 40,
      "autoMarginOffset": 20,
      "mouseWheelZoomEnabled":true,
      "pathToImages": "../images/amcharts/",
      "dataDateFormat": "YYYY-MM-DD",
      "valueAxes": [{
          "id": "v1",
          "axisAlpha": 0,
          "position": "left",
          "integersOnly": true,
          "ignoreAxisWidth":true,
      }],
      "balloon": {
          "borderThickness": 1,
          "shadowAlpha": 0
      },
      "graphs": [{
          "id": "g1",
          "balloon":{
            "drop":true,
            "adjustBorderColor":false,
            "color":"#ffffff"
          },
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "title": "red line",
          "useLineColorForBulletBorder": true,
          "valueField": "value",
          "showBalloon": false,
          "balloonText": "<span style='font-size:18px;'>[[value]]</span>",

      }],
      "chartScrollbar": {
          "graph": "g1",
          "oppositeAxis":false,
          "offset":30,
          "scrollbarHeight": 80,
          "backgroundAlpha": 0,
          "selectedBackgroundAlpha": 0.1,
          "selectedBackgroundColor": "#888888",
          "graphFillAlpha": 0,
          "graphLineAlpha": 0.5,
          "selectedGraphFillAlpha": 0,
          "selectedGraphLineAlpha": 1,
          "autoGridCount":true,
          "color":"#AAAAAA"
      },
      "chartCursor": {
          "pan": true,
          "valueLineEnabled": false,
          "valueLineBalloonEnabled": false,
          "cursorAlpha":1,
          "cursorColor":"#258cbb",
          "limitToGraph":"g1",
          "valueLineAlpha":0.2,
          "valueZoomable":true
      },
      "categoryField": "date",
      "categoryAxis": {
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true
      },
      "export": {
          "enabled": false
      },
      "dataProvider": data
  });

  function modifyAxis(e) {
    var axes = e.chart.valueAxes;
    for (let i1 in axes) {
      var labels = axes[i1].allLabels;
      var parent = labels[0].node.parentNode;

      for (let i2 in labels) {
        var label = labels[i2].node;
        if(label.getAttribute('transform') !== '') {
          var group = document.createElementNS('http://www.w3.org/2000/svg', "g");
          var img = document.createElementNS('http://www.w3.org/2000/svg', "image");
          // Setup image
          img.setAttribute('x', '-25');
          img.setAttribute('y', '-17'); // half the height
          img.setAttribute('width', '34');
          img.setAttribute('height', '34');
          let number = label.children.item(0).innerHTML
          img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `/images/${number}.svg`);

          // Swap position to group; remove from label
          group.setAttribute('transform', label.getAttribute('transform'));
          label.setAttribute('transform', '');

          // Group axis labels
          group.appendChild(img);
          parent.appendChild(group);
        }

      }
    }
  }
  chart.addListener("drawn", modifyAxis);
  //chart.addListener("zoomed", modifyAxis);
  chart.addListener("rendered", zoomChart);
  var balloon = chart.balloon
  zoomChart();

  function zoomChart() {
      chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
  }

  const donutDataDiv = document.getElementById('donut-graph')
  const donutData = JSON.parse(donutDataDiv.dataset.moods)
  console.log(donutData)
  var donutChart = AmCharts.makeChart( "donut-graph", {
    "type": "pie",
    "theme": "light",
    "dataProvider": donutData,
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,

    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "export": {
      "enabled": true
    }
  })
})
