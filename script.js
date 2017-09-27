var buttons;
var fadeInDuration = 2000; 
var sideLength;
var widthFrame = $("#frame").width();
var heightFrame = $("#frame").height();
var howManyBlocksHor;
var howManyBlocksVer;
var color; 

var colorDistribution;
var colorDistribution2;
var colorDistribution3;
var colorDistribution4;
var colorDistribution5;
var colorDistribution6;
var colorDistribution7;



function main(){
color = colors[1];
$("#currentColor").css("background-color",color);
fadeBodyIn();
colorButtons(); 
//colorPic()
}

function colorPic(){
	for (i=0;i<29;i++) {
		for (j=0;j<33;j++) {
			var c = Number(buttons[i][j].text());
			switch(c){
				case 1: buttons[i][j].css({"background-color":colors[1],"border-color":colors[1]});
				        $("#frame").append(buttons[i][j]);
				        break; 
				case 2: buttons[i][j].css({"background-color":colors[2],"border-color":colors[2]});
				        $("#frame").append(buttons[i][j]);
						break; 
				case 3: buttons[i][j].css({"background-color":colors[3],"border-color":colors[3]});
				        $("#frame").append(buttons[i][j]);
						break; 
				case 4: buttons[i][j].css({"background-color":colors[4],"border-color":colors[4]});
				        $("#frame").append(buttons[i][j]);
						break;
				case 5: buttons[i][j].css({"background-color":colors[5],"border-color":colors[5]});
				        $("#frame").append(buttons[i][j]);
						break; 
				case 6: buttons[i][j].css({"background-color":colors[6],"border-color":colors[6]});
				        $("#frame").append(buttons[i][j]);
						break;
			}
		}
	}
}

function fadeBodyIn(){
	$("#body").hide();
	$("#body").css("visibility","visible");
	$("#background").css("border","1px solid black");
	$("#body").fadeIn(fadeInDuration);
}
 

function colorButtons(){
	$(".buttons").on("click", function(){
		$(this).css({"background-color":color, "border":"1px solid", "border-color":color, "box-sizing":"border-box"});
		$("#frame").append($(this));
	});
}
$(document).ready(main);