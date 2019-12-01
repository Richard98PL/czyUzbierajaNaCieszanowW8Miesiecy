window.setInterval(function(){
     

      let div = document.getElementById("ileTygodniowo");
      div.innerHTML = "Między datą ogłoszenia biletów " + '01.12.2019'.fontcolor('yellow') + ",<br />"
      div.innerHTML += "a festiwalem " +'20.08.2020'.fontcolor("yellow") + " <br /> jest dokładnie 263 dni. <br />";
      div.innerHTML += "Wystarczy więc, aby każdy odkładał" + ' 4.54PLN'.fontcolor("yellow") + " TYGODNIOWO. <br />";
      div.innerHTML += "Natomiast dzisiaj jest już " + formattedDateTime(new Date()).fontcolor("yellow") + "<br />";

      let dataCieszanowa = new Date(2020,7,20,18,0,0);
      let today = new Date();
      let timeDiff = dataCieszanowa - today;
      div.innerHTML += "Do festiwalu zostało: ";
      convertMilisecondsAndSetTime(timeDiff,"xD");
  }, 1000);

function formattedDateTime(givenDate){
  if(givenDate != null){
    let year = givenDate.getFullYear();
    let month = givenDate.getMonth();
    let day = givenDate.getDate();
    let hour = givenDate.getHours();
    let minute = givenDate.getMinutes();
    let seconds = givenDate.getSeconds();
    
    if( (givenDate.getMonth()+1) < 10 ) month = "0" + month;
    if( (givenDate.getDate()) < 10 ) day = "0" + day;
    if( (givenDate.getHours()) < 10 ) hour = "0" + hour;
    if( (givenDate.getMinutes()) < 10 ) minute = "0" + minute;
    if( (givenDate.getSeconds()+1) < 10 ) seconds = "0" + seconds;
    let formattedDateTime = day+"."+month+"."+year+" "+hour+":"+minute+":"+seconds;
    return formattedDateTime;
  }
}
  
function convertMilisecondsAndSetTime(miliseconds, format) {
  let days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
  
  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);

  if(hours <10) hours = "0" + hours;
  if(minutes < 10) minutes = "0" + minutes;
  if(seconds < 10) secodns = "0" + seconds;
  
  switch(format) {
	case 's':
		return total_seconds; 
	case 'm':
		return total_minutes; 
	case 'h':
		return total_hours;
	case 'd':
		return days;
	default:
        document.getElementById("ileZostalo").innerHTML = "";
        document.getElementById("ileZostalo").innerHTML = "Dni : " + days.toString().fontcolor("yellow") + "<br />";
        document.getElementById("ileZostalo").innerHTML += "Godzin : " + hours.toString().fontcolor("yellow") + "<br />";
        document.getElementById("ileZostalo").innerHTML += "Minut : " + minutes.toString().fontcolor("yellow") + "<br />";
        document.getElementById("ileZostalo").innerHTML += "Sekund : " + seconds.toString().fontcolor("yellow") + "<br />"; 
        document.getElementById("ileZostalo").innerHTML += "Oznacza to, że od dzisiaj trzeba zacząć odkładać <br />";
        document.getElementById("ileZostalo").innerHTML += ((170/(days/7)).toFixed(2) + "PLN").fontcolor("red") + " tygodniowo. ";

  }
}

let audio = new Audio('demo.mp3');
audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);


function btnFunction(){
  let btn = document.getElementById("btn");
  if(btn.className == "playBtn"){
    btn.className = "stopBtn";
    audio.play();
  } else {
    btn.className = "playBtn";
    audio.pause();
}
}






