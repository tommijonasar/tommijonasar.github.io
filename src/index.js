import { GoogleCharts } from "google-charts";

//Load the charts library with a callback
GoogleCharts.load(drawBarChart);
//GoogleCharts.load(drawLineChart);

function getPlayerData(player) {
  if (player === "albert") {
    return [["17.06", 20253], ["18.06", 22454], ["19.06", 24692]];
  } else if (player === "alfred") {
    return [["17.06", 76753], ["18.06", 81485], ["19.06", 85919]];
  } else if (player === "ari") {
    return [["17.06", 21628], ["18.06", 23612], ["19.06", 25529]];
  } else if (player === "arnor") {
    return [["17.06", 16976], ["18.06", 17355], ["19.06", 17586]];
  } else if (player === "aron") {
    return [["17.06", 96394], ["18.06", 101688], ["19.06", 107104]];
  } else if (player === "birkir_bjarna") {
    return [["17.06", 96515], ["18.06", 106054], ["19.06", 114103]];
  } else if (player === "birkir_mar") {
    return [["17.06", 7559], ["18.06", 7922], ["19.06", 8058]];
  } else if (player === "bjorn") {
    return [["17.06", 5651], ["18.06", 5741], ["19.06", 5354]];
  } else if (player === "emil") {
    return [["17.06", 14939], ["18.06", 15787], ["19.06", 17041]];
  } else if (player === "frederik") {
    return [["17.06", 6696], ["18.06", 7862], ["19.06", 9125]];
  } else if (player === "gylfi") {
    return [["17.06", 180146], ["18.06", 184401], ["19.06", 187716]];
  } else if (player === "hannes") {
    return [["17.06", 44568], ["18.06", 47966], ["19.06", 50839]];
  } else if (player === "holmar") {
    return [["17.06", 15207], ["18.06", 16176], ["19.06", 16731]];
  } else if (player === "hordur") {
    return [["17.06", 31407], ["18.06", 33751], ["19.06", 36159]];
  } else if (player === "johann") {
    return [["17.06", 36951], ["18.06", 39928], ["19.06", 42640]];
  } else if (player === "jon") {
    return [["17.06", 23314], ["18.06", 24732], ["19.06", 26013]];
  } else if (player === "kari") {
    return [["17.06", 567], ["18.06", 567], ["19.06", 1495]];
  } else if (player === "ragnar") {
    return [["17.06", 37182], ["18.06", 41012], ["19.06", 44148]];
  } else if (player === "runar") {
    return [["17.06", 6874], ["18.06", 7570], ["19.06", 8145]];
  } else if (player === "rurik") {
    return [["17.06", 319994], ["18.06", 428081], ["19.06", 577867]];
  } else if (player === "samuel") {
    return [["17.06", 9970], ["18.06", 10366], ["19.06", 10636]];
  } else if (player === "sverrir") {
    return [["17.06", 8257], ["18.06", 8833], ["19.06", 9380]];
  } else if (player === "olafur") {
    return [["17.06", 1501], ["18.06", 2588], ["19.06", 2874]];
  }
}

function drawBarChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Date");
  data.addColumn("number", "Follower count");

  data.addRows(getPlayerData("rurik"));

  var options = {
    title: "Player Name",
    hAxis: {
      title: "Date"
    },
    vAxis: {
      title: "Followers"
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart2")
  );

  chart.draw(data, options);
}

function drawBarChart2() {
  const col_1_data = GoogleCharts.api.visualization.arrayToDataTable([
    [
      "Chart 1",
      "Lorem ipsum",
      "Dolor sit",
      "Sit amet",
      "Sit amet",
      "Sit amet",
      "Sit amet"
    ],
    ["Chart 1", 22, 10, 68, 333, 377, 444]
  ]);

  const col_1_options = {
    legend: {
      position: "bottom"
      /*  textStyle: {
        color: "black",
        fontSize: 13,
        fontName: "EncodeSans"
      } */
    },
    //bar: { groupWidth: "25%" },
    //colors: ["#808e97", "#b9c3ca", "#dde4e8"],
    isStacked: false
    //chartArea: { left: 0, top: 0, width: "100%", height: "80%" },
    //axisTitlesPosition: "none"
    /*     hAxis: {
      textPosition: "none",
      gridlines: { color: "transparent" },
      baselineColor: "transparent"
    },
    vAxis: {
      textPosition: "none",
      gridlines: { color: "transparent" },
      baselineColor: "transparent"
    } */
  };

  const col_1_chart = new GoogleCharts.api.visualization.ColumnChart(
    document.getElementById("chart2")
  );
  col_1_chart.draw(col_1_data, col_1_options);
}

function drawLineChart() {
  /* var data = new google.visualization.DataTable();
  data.addColumn("number", "X");
  data.addColumn("number", "Dogs"); */
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Day");
  data.addColumn("number", "Followers");

  data.addRows(getPlayerData("gylfi"));

  var options = {
    width: 1500,
    height: 500
  };
  var chart = new google.visualization.LineChart(
    document.getElementById("chart2")
  );

  chart.draw(data, options);
}
