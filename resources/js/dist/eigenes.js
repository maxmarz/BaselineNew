if (typeof document.getElementById('kurztext') !== 'undefined'){
    	var obj = JSON.parse(document.getElementById('kurztext').innerHTML());
	var temp = obj[0].values.value.split(',');
}
