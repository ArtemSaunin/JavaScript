"use strict"
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

	function(dataSkills){
		dataSkills = _.union(_.flattenDepth(_.map(dataSkills, 'skills'))).sort();
		console.log('Массив скиллов: ', dataSkills);
	});

$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

	function(dataName){
		dataName = _.map(_.sortBy(dataName, function (obj){return obj.friends.length;}), 'name');
		console.log('Массив имен: ', dataName);
	});	
	
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",
	
	function(dataFriends){
		dataFriends = _.uniq(_.map(_.flattenDeep(_.map(dataFriends,'friends')),'name')).sort();
		console.log('Массив всех друзей: ', dataFriends);
	});	