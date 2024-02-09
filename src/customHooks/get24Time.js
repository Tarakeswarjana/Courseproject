import React from 'react'

function get24Time(number) {
    console.log(number);
    var decimalTimeString = number;
var decimalTime = parseFloat(decimalTimeString);
decimalTime = decimalTime * 60 * 60;
var hours = Math.floor((decimalTime / (60 * 60)));
decimalTime = decimalTime - (hours * 60 * 60);
var minutes = Math.floor((decimalTime / 60));
decimalTime = decimalTime - (minutes * 60);
var seconds = Math.round(decimalTime);
if(hours < 10)
{
	hours = "0" + hours;
}
if(minutes < 10)
{
	minutes = "0" + minutes;
}
if(seconds < 10)
{
	seconds = "0" + seconds;
}
  return (
    "" + hours + ":" + minutes 
  )
}

export default get24Time