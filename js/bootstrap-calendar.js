/**
 * Created by ibbus on 28/06/2017.
 */

$(function(){

  var currentYear = new Date().getFullYear();
  var orangeDate = new Date(currentYear, 2, 17).getTime();
  var dateStart = new Date(currentYear, 2, 10);
  var dateEnd = new Date(currentYear, 2, 13);

  $('#calendar').calendar({
      customDayRenderer: function (element, date) {
          if(date.getTime() >= dateStart && date.getTime() <= dateEnd || date.getTime() == orangeDate) {
            $(element).css('background-color', '#ed6900');
            $(element).css('color', 'white');
            $(element).css('border-radius', '15px');
          }
      }
  });

  $('#calendar').data('calendar').setMinDate(new Date(2017, 2, 8));
  $('#calendar').data('calendar').setMaxDate(new Date(2017, 2, 20));

});