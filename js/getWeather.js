var openWeatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=Boston,MA&units=imperial&appid=e83c647ce00875018840ab990873d34a";



$.getJSON(openWeatherAPI, function(data) {

  var temp = document.getElementById('temp');
  temp.innerHTML = Math.round(data.main.temp) + '°';

  var description = document.getElementById('description');
  description.innerHTML = data.weather[0].description;

  

  var switchCount = 0;

  $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
    switchCount++;
    temp.innerHTML = Math.round(data.main.temp) + '°';
    if (switchCount % 2 !== 0) {
      temp.innerHTML = Math.round((data.main.temp - 32) * (5/9)) + '°'; 
    }
    

  }); 

});

$("[name='my-checkbox']").bootstrapSwitch();
$("[name='my-checkbox']").bootstrapSwitch('onColor', 'success');
$("[name='my-checkbox']").bootstrapSwitch('offColor', 'primary');
$("[name='my-checkbox']").bootstrapSwitch('onText', 'F°');
$("[name='my-checkbox']").bootstrapSwitch('offText', 'C°');

function formatDate(date) {
  
  var thisDate = new Date(date);
  
  var weekObj = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'    
  };
  
  var monthObj = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  };
    
  var weekday = weekObj[thisDate.getDay()];
  var month = monthObj[thisDate.getMonth()];
  var day = thisDate.getDate();
  var year = thisDate.getFullYear();
  var hours = thisDate.getHours();
  
  var minutes = thisDate.getMinutes();
  
  if (minutes < 10) {
    minutes = '0' + minutes;
  } 
  if (hours > 12) {
    minutes = minutes + ' PM';
    hours -= 12;
  }
 
  return weekday + ', ' + month + ' ' + day + ', ' + '\r' + hours + ':' + minutes;
  
}

document.getElementById("date").innerHTML = formatDate(Date.now());




