// jeopardy
function includeJs(jsFilePath) {
    var js = document.createElement("script");
    js.src = jsFilePath;
    js.type = "text/javascript";
    document.head.appendChild(js);
}
includeJs("variable.js");
//do not modify
//do not modify
var doubtop = Math.floor(Math.random() * 3);
var doubpoi = Math.floor(Math.random() * 3);
var Stopic = "";
var Spoint = "";
var start = "0";
var t1 = "";
var t2 = "";
var t3 = "";
var t4 = "";
var p11 = 0;
var p12 = 0;
var p13 = 0;
var p14 = 0;
var z = Math.floor(Math.random() * 8) + 2;
var code = [];
var ans = [];
var num2 = 0;
var selec = false;
function debug() {
	num2++;
	var num = event.srcElement.id;
	ans.push(num);
	var check = code.length;
	if (num2 == check) {
		var a = 0;
		var num1 = ans.length;
		for (i = 0; i < check; i++) {
			if (code[i] == ans[i]) {
				a++;
			}
		}
		if (a == check && start == "1") {
			ans = [];
			a = 0;
			document.getElementById('points1').innerHTML = "<input type='number' id='t1' value ='" + variables[4][0][0] + "'>";
			document.getElementById('points2').innerHTML = "<input type='number' id='t2' value ='" + variables[4][0][1] + "'>";
			document.getElementById('points3').innerHTML = "<input type='number' id='t3' value ='" + variables[4][0][2] + "'>";
			document.getElementById('points4').innerHTML = "<input type='number' id='t4' value ='" + variables[4][0][3] + "'>";
			document.getElementById('finishbutton').innerHTML = "<input type='button' value='done' onclick='done()' >";
		} else {
			ans = [];
			a = 0;
		}
	}
}
function reset() {
	ans = [];
	num2 = 0;
}
function topic() {
	var p1 = startp;
	var p2 = startp;
	var p3 = startp;
	var p4 = startp;
	variables.push([]);
	variables[4].push([p1,p2,p3,p4]);
	variables[4].push([t1,t2,t3,t4]);
	variables[4].push([p11,p12,p13,p14]);


	var y = variables[2][0].length;
	var pointtable = "<table class='background'><tr><td><table border='1' class='table'><tr>";
	for (i = 1; i < y + 1; i++) {
		pointtable += "<td><div id='topic" + i + "'></div></td>";
	}
	pointtable = pointtable + "</tr><tr>"
	for (n = 0; n < variables[0][0].length; n++) { //currently baised off the first array
		for (i = 0; i < y; i++) {
			pointtable += "<td><div class='" + n + "' id='" + i + "'><input type='button' value='" + (n + 1) * 2 * ratio + "' name='" + n + "' id='" + (i + 1) + "' onClick='question()'></div></td>";
		}
		pointtable += "</tr><tr>";
	}
	pointtable += "</tr></table></td><td><table><tr><td><div id='question'></div></td></tr><tr><td><div id='button'></div></td></tr></table></td><td><table class='teams1'>";
	for (i = 1; i < 1 + variables[4][1].length; i++) {
		pointtable += "<tr><th><div id='team " + i + "'></div></th><td>points:<div id='points" + i + "'></div></td></tr>";
	}
	pointtable += "<tr><td colspan='2'><div id='finishbutton'><input type='button' value='finish' onclick='final1()'><div></td></tr></table> </td></tr></table>";
	document.getElementById('pointtable').innerHTML = pointtable;
	var placeholder = "topic";
	for (i = 0; i < y; i++) {
		placeholder = "topic";
		var topic = variables[2][0][i];
		placeholder += (i + 1);
		document.getElementById(placeholder).innerHTML = (topic);
	}
	for (i = 0; i < z; i++) {
		code[i] = Math.floor(Math.random() * 9) + 1;
		// unique evaluator
		var x = code.length;
		x = x - 1;
		for (y = 0; y < x; y++) {
			var t1 = code[y];
			var t2 = code[i]
			while (t1 == t2) {
				code[x] = Math.floor(Math.random() * 9) + 1;
				t1 = code[x];
				y = 0;
			}
		}
		// unuique evaluator
	}
	console.log(code);
	var dis = doubtop + 1;
	var dip = parseInt(doubpoi);
	dip += 1;
	dip *= 2;
	dip *= ratio;
	console.log("topic " + dis + "", dip);
}
function load() {
	var team1 = document.getElementById('team1').value;
	var team2 = document.getElementById('team2').value;
	var team3 = document.getElementById('team3').value;
	var team4 = document.getElementById('team4').value;
	if ((document.getElementById('team1').value != undefined && document.getElementById('team2').value != undefined && document.getElementById('team3').value != undefined && document.getElementById('team4').value != undefined) && (document.getElementById('team1').value != "" && document.getElementById('team2').value != "" && document.getElementById('team3').value != "" && document.getElementById('team4').value != "")) {
		var point = [];
		for (var i = 0; i < 4; i++) {
			variables[4][1][i] = document.getElementsByClassName('team')[i].value;
			point[i] = variables[4][0][i];
		}
		for (i = 0; i < 4; i++) {
			z = i + 1;
			var x = "team ";
			var y = "points";
			document.getElementById(x + z).innerHTML = variables[4][1][i];
			document.getElementById(y + z).innerHTML = point[i];
		}
		document.getElementById('start').innerHTML = "";
		start = "1";
	}
}
function question() {
	if (start == "1" && selec != true) {
		var topic = event.srcElement.id;
		topic = topic - 1;
		var point = event.target.name;
		Stopic = topic;
		Spoint = point;
		selec = true
		if (Spoint == doubpoi && Stopic == doubtop) {
			document.getElementById('question').innerHTML = "Double Jeopardy <br>" + variables[3][0][2];
			document.getElementById('button').innerHTML = "<table><tr><td><div id='answer'></div></td><td><table><tr><td><div id='button1'><input type='button' id='1' onmousedown='distributor()' value=" + variables[4][1][0] + " ></div></td><td><div id='button2'><input type='button' id='2' onmousedown='distributor()' value=" + variables[4][1][1] + " ></div></td></tr><tr><td><div id='button3'><input type='button' id='3' onmousedown='distributor()' value=" + variables[4][1][2] + " ></div></td><td><div id='button4'><input type='button' id='4' onmousedown='distributor()' value=" + variables[4][1][3] + " ></div></td></tr></table></td></tr></table>";
			document.getElementById('answer').innerHTML = "<input type='button' value='answer' onclick='answer()'>";
		} else {
			document.getElementById('question').innerHTML = variables[0][topic][point];
			document.getElementById('button').innerHTML = "<table><tr><td><div id='answer'></div></td><td><table><tr><td><div id='button1'><input type='button' id='1' onmousedown='distributor()' value=" + variables[4][1][0] + " ></div></td><td><div id='button2'><input type='button' id='2' onmousedown='distributor()' value=" + variables[4][1][1] + " ></div></td></tr><tr><td><div id='button3'><input type='button' id='3' onmousedown='distributor()' value=" + variables[4][1][2] + " ></div></td><td><div id='button4'><input type='button' id='4' onmousedown='distributor()' value=" + variables[4][1][3] + " ></div></td></tr></table></td></tr></table>";
			document.getElementById('answer').innerHTML = "<input type='button' value='answer' onclick='answer()'>";
		}
	}
}
function answer() {
	if (Spoint == doubpoi && Stopic == doubtop) {
		var answer = variables[3][0][3];
	} else {
		var answer = variables[1][Stopic][Spoint];
	}
	document.getElementById('answer').innerHTML = answer;
}
//point distributor
function distributor() {
	var point = Spoint;
	point = parseInt(point);
	point += 1;
	point *= 2;
	point *= ratio;
	var team = event.srcElement.id;
	var po1 = 'points';
	var butt1 = 'button';
	var x = team - 1;
	if (event.button == 2) {
		if (Spoint == doubpoi && Stopic == doubtop) {
			variables[4][0][x] = variables[4][0][x] - (point * 2);
			po1 += team;
			butt1 += team;
			document.getElementById(po1).innerHTML = variables[4][0][x];
			document.getElementById(butt1).innerHTML = "";
		} else {
			variables[4][0][x] = variables[4][0][x] - point;
			po1 += team;
			butt1 += team;
			document.getElementById(po1).innerHTML = variables[4][0][x];
			document.getElementById(butt1).innerHTML = "";
		}
	} else {
		if (Spoint == doubpoi && Stopic == doubtop) {
			variables[4][0][x] += (point * 2);
			po1 += team;
			butt1 += team;
			document.getElementById(po1).innerHTML = variables[4][0][x];
		} else {
			variables[4][0][x] += point;
			po1 += team;
			butt1 += team;
			document.getElementById(po1).innerHTML = variables[4][0][x];
		}
		var check = 1;
	}
	if (check == 1) {
		document.getElementById('question').innerHTML = "";
		document.getElementById('button').innerHTML = "";
		// eliminator
		var p = Spoint;
		var t = Stopic;
		var name = document.getElementsByClassName(Spoint)[Stopic];
		document.getElementsByClassName(Spoint)[Stopic].innerHTML = "<input type='button' class='claimed' value='1000'>";
		Stopic = "";
		Spoint = "";
		selec = false;
	}
}
//final jeopardy
function final1() {
	if (start == "1") {
		document.getElementById('finishbutton').innerHTML = "";
		document.getElementById('question').innerHTML = "FINAL JEOPARDY";
		var out = "<table><tr>";
		for(i=0;i<4;i++){
			out += "<td>"+variables[4][1][i]+"</td>";
		}
		out += "</tr><tr>";
		var str = "p1";
		var h = 0;
		for(i=0;i<4;i++){
			h = i+1;
			if(variables[4][0][i]<0){
				out += "<td><input type='number' id='p1"+h+"'min='0'max='0'onkeyup='counter()' onkeypress='counter()'></td>";

			}else{
				out += "<td><input type='number' id='p1"+h+"'min='0'max='"+ variables[4][0][i]+"'onkeyup='counter()' onkeypress='counter()'></td>";
			}
		}
		out += "</tr><tr><td><input type='button' value='submit' onclick='cal()'></td><tr></table>";
		document.getElementById('button').innerHTML = out;
	}
}
function counter() {
	var x = event.srcElement.id;
	var y = document.getElementById(x).value;
	for (i = 0; i < 4; i++) {
		var str = 'p1';
		var h = i + 1;
		str += h;
		if (x == str) {
			if(variables[4][0][i]>0){
				if (y > variables[4][0][i]) {
					document.getElementById(x).value = variables[4][0][i];
				}
				if(y < 0){
					document.getElementById(x).value = 0;
				}
			}else{
				if(y!=0){
					document.getElementById(x).value='0';
				}
			}
		}
	}
}
function cal() {
	for (i = 0; i < 4; i++) {
		var z = i + 1;
		variables[4][2][i] = document.getElementById('p1' + z).value;
	}
	if (variables[4][2][0] != "" && variables[4][2][1] != "" && variables[4][2][2] != "" && variables[4][2][3] != "") {
		document.getElementById('question').innerHTML = variables[3][0][0];
		document.getElementById('button').innerHTML = "<input type='button' value='final answer' onclick='answer1()'>";
	}
}
function answer1() {
	document.getElementById('question').innerHTML = variables[3][0][1];
	document.getElementById('button').innerHTML = "<table><tr><td>" + variables[4][1][0] + "</td><td>" + variables[4][1][1] + "</td><td>" + variables[4][1][2] + "</td><td>" + variables[4][1][3] + "</td></tr><tr><td><input type='checkbox' id='t11'></td><td><input type='checkbox' id='t12'></td><td><input type='checkbox' id='t13'></td><td><input type='checkbox' id='t14'></td></tr><tr><td colspan='4'><input type='button' onclick='finish()' value='the winner is...'></table>";
}
function finish() {
	for (var i = 0; i < 4; i++) {
		if (variables[4][2][i] > variables[4][0][i]) {
			variables[4][2][i] = variables[4][0][i];
		}else if(variables[4][2][i] < 0){
			variables[4][2][i] = 0;
		}
		
		variables[4][0][i] = parseInt(variables[4][0][i]);
		variables[4][2][i] = parseInt(variables[4][2][i]);
	}
	for (i = 0; i < 4; i++) {
		var z = i + 1;
		if (document.getElementById('t1' + z).checked == true) {
			variables[4][0][i] += variables[4][2][i];
			document.getElementById('points' + z).innerHTML = variables[4][0][i];
		} else {
			variables[4][0][i] = variables[4][0][i] - variables[4][2][i];
			document.getElementById('points' + z).innerHTML = variables[4][0][i];
		}
	}
	var winner = "";
	var display = "";
	var keep = "";
	for (i = 0; i < 4; i++) {
		if (variables[4][0][i] > keep) {
			keep = variables[4][0][i];
		}
	}
	var display = [];
	for (i = 0; i < 4; i++) {
		if (keep == variables[4][0][i]) {
			display.push(variables[4][1][i]);
		}
	}
	// display
	var count1 = display.length;
	var dis = display[0];
	if (count1 > 1) {
		count1 = count1 - 1;
		for (i = 1; i < count1; i++) {
			dis += ", " + display[i];
		}
		dis += " & " + display[count1];
	}
	if (count1 > 1) {
		var teamn = "teams";
	} else {
		var teamn = "team";
	}
	document.getElementById('question').innerHTML = "Congradulations " + teamn + " " + dis;
	document.getElementById('button').innerHTML = "to reset, <input type='button' value='click here' onclick='location.reload()' />"
}
function done() {
	for (i = 0; i < 4; i++) {
		var v = i + 1;
		var id = 'points';
		var teamt = 't';
		variables[4][0][i] = document.getElementById(teamt + v).value;
		var tes = variables[4][0][i]
		document.getElementById(id + v).innerHTML = tes;
	}
	document.getElementById('finishbutton').innerHTML = "<input type='button' onclick='final1()' value='finish' >";
	console.clear();
	for (i = 0; i < z; i++) {
		code[i] = Math.floor(Math.random() * 9) + 1;
		// unique evaluator
		var x = code.length;
		x = x - 1;
		for (y = 0; y < x; y++) {
			var t1 = code[y];
			var t2 = code[i]
			while (t1 == t2) {
				code[x] = Math.floor(Math.random() * 9) + 1;
				t1 = code[x];
				y = 0;
			}
		}
		// unuique evaluator
	}
	console.log(code);
	ans = [];
	a = 0;
}
// jeopardy
