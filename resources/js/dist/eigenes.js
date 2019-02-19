if (document.getElementById('kurztext').innerHTML){
    var obj = JSON.parse('${ currentVariation.variationProperties }');
	  var temp = obj[0].values.value.split(',');
}
