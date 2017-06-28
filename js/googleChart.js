/**
 * Created by ibbus on 28/06/2017.
 */

google.charts.load("current", {packages:["calendar"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({type: 'date', id: 'Date'});
    dataTable.addColumn({type: 'number', id: 'Won/Loss'});
    dataTable.addRows([
        [new Date(2017, 3, 13), 0],
        [new Date(2017, 3, 14), 1],
        [new Date(2017, 3, 15), 1],
        [new Date(2017, 3, 16), 2],
        [new Date(2017, 3, 17), 0],
        [new Date(2017, 3, 18), 1],
        [new Date(2017, 3, 19), 0],
        [new Date(2017, 3, 20), 1],
        [new Date(2017, 3, 21), 1],
        [new Date(2017, 3, 22), 2],
        [new Date(2017, 3, 23), 1],
        [new Date(2017, 3, 24), 2],
        [new Date(2017, 3, 25), 0],
        [new Date(2017, 3, 26), 2]
    ]);

    var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));
    var options = {
        title: 'Survey before training',
        height: 280,
        noDataPattern: {
            backgroundColor: '#fff',
            color: '#d4d4d4'
        },
        calendar: {
            cellColor: {
                stroke: '#76a7fa',
                strokeOpacity: 0.5,
                strokeWidth: 1,
            }
        }
    }

    /*google.visualization.events.addListener(chart, 'select', function () {
     document.getElementById('msg_div').innerHTML = JSON.stringify(chart.getSelection());
     console.log(JSON.stringify(chart.getSelection()));
     });*/

    chart.draw(dataTable, options);

    google.visualization.events.addListener(chart, 'select', selectionHandler);

    function selectionHandler() {
        try{
            var selectedData = chart.getSelection(), row, item;
            row = selectedData[0].row;
            item = dataTable.getValue(row, 0);
        }catch (err){
            item = " empty cell";
        }
        console.log("You selected :" + item);
    }

    deleteLegend();
}

function deleteLegend() {
    $('path[d*="M761,16L911,16L911,31L761,31Z"]').remove();
    $('text[x*="761"][y*="11.2"]').remove();
    $('text[x*="911"][y*="11.2"]').remove();
}