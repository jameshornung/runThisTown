var fivekIntermediate = [
	{week: ["Rest", "3 Mile Run", "5 x 400", "3 Mile Run", "Rest", "3 Mile Run", "5 m run"]},
	{week: ["Rest", "3 Mile Run", "30 Min Tempo", "3 Mile Run", "Rest", "3 Mile Fast", "5 Mile Run"]},
	{week: ["Rest", "3 Mile Run", "6 x 400", "3 Mile Run", "Rest", "4 Mile Run", "6 Mile Run"]},
	{week: ["Rest", "3 Mile Run", "35 Min Tempo", "3 Mile Run", "Rest", "Rest", "5-K Test"]},
	{week: ["Rest", "3 Mile Run", "7 x 400", "3 Mile Run", "Rest" "4 Mile Fast", "6 Mile Run"]},
	{week: ["Rest", "3 Mile Run", "40 Min Tempo", "3 Mile Run", "Rest", "5 Mile Run", "7 Mile Run"]},
	{week: ["Rest", "3 Mile Run", "8 x 400", "3 Mile Run", "Rest", "5 Mile Fast", "7 Mile Run"]},
	{week: ["Rest", "3 Mile Run", "30 Min Tempo", "2 Mile Run", "Rest", "Rest", "5-K Race"]}
];

var tenkIntermediate = [
	{week: ["3 Mile Run",	"3 Mile Run",	"35 Min Tempo Run",	"3 Mile Run", "Rest", "60 Min Cross", "4 Mile Run",]},
	{week: ["3 Mile Run",	3."5 Mile Run",	"8 x 400 5-K Pace",	"4 Mile Run", "Rest", "60 Min Cross", "5 Mile Run"]},
	{week: ["3 Mile Run",	"4 Mile Run",	"40 Min Tempo Run",	"3 Mile Run", "Rest", "60 Min Cross", "6 Mile Run",]},
	{week: ["3 Mile Run",	4."5 Mile Run",	"9 x 400 5-K Pace",	"4 Mile Run", "Rest", "Rest", "5-K Race"]},
	{week: ["3 Mile Run",	"5 Mile Run",	"45 Min Tempo Run",	"3 Mile Run", "Rest", "60 Min Cross", "6 Mile Run",]},
	{week: ["3 Mile Run",	5."5 Mile Run",	"10 x 400 5-K Pace", "4 Mile Run", "Rest", "60 Min Cross", "7 Mile Run",]},
	{week: ["3 Mile Run",	"6 Mile Run",	"50 Min Tempo Run",	"4 Mile Run", "Rest", "60 Min Cross", "8 Mile Run",]},
	{week: ["3 Mile Run", 	"3 Mile Run",	 "5 x 400 5-K Pace", "1-3 Mile Run", "Rest", "Rest", "10-K Race"]}
];

var halfNovice = [
	{week: ["Rest",	"3 Mile Run",	"2 Mile Run or Cross",	"3 Mile Run",	"Rest",	"30 Min Cross",	"4 Mile Run",]},
	{week: ["Rest",	"3 Mile Run",	"2 Mile Run or Cross",	"3 Mile Run",	"Rest",	"30 Min Cross",	"4 Mile Run",]},
	{week: ["Rest",	"3.5 Mile Run",	"2 Mile Run or Cross",	"3.5 Mile Run",	"Rest",	"40 Min Cross",	"5 Mile Run",]},
	{week: ["Rest",	"3.5 Mile Run",	"2 Mile Run or Cross",	"3.5 Mile Run",	"Rest",	"40 Min Cross",	"5 Mile Run",]},
	{week: ["Rest",	"4 Mile Run",	"2 Mile Run or Cross",	"4 Mile Run",	"Rest",	"40 Min Cross",	"6 Mile Run",]},
	{week: ["Rest",	"4 Mile Run",	"2 Mile Run or Cross",	"4 Mile Run",	"Rest or Easy Run",	"Rest",	"5-K Race"]},
	{week: ["Rest",	"4.5 Mile Run",	"3 Mile Run or Cross",	"4.5 Mile Run",	"Rest",	"50 Min Cross",	"7 Mile Run",]},
	{week: ["Rest",	"4.5 Mile Run",	"3 Mile Run or Cross",	"4.5 Mile Run",	"Rest",	"50 Min Cross",	"8 Mile Run",]},
	{week: ["Rest",	"5 Mile Run",	"3 Mile Run or Cross",	"5 Mile Run",	"Rest or Easy Run",	"Rest",	"10-K Race"]},
	{week: ["Rest",	"5 Mile Run",	"3 Mile Run or Cross",	"5 Mile Run",	"Rest",	"60 Min Cross",	"9 Mile Run"]},
	{week: ["Rest",	"5 Mile Run",	"3 Mile Run or Cross",	"5 Mile Run", 	"Rest",	"60 Min Cross",	"10 Mile Run"]},
	{week: ["Rest",	"4 Mile Run",	"3 Mile Run or Cross",	"2 Mile Run",	"Rest",	"Rest",	"Half Marathon"]}
];

var halfIntermediate = [
	{week: ["30 Min Cross", "3 Mile Run", "4 Mile Run", "3 Mile Run", "Rest", "3 Mile Run","4 Mile Run"]},
	{week: ["30 Min Cross", "3 Mile Run", "4 Mile Pace", "3 Mile Run", "Rest", "3 Mile Pace","5 Mile Run"]},
	{week: ["40 Min Cross", "3.5 Mile Run", "5 Mile Run", "3.5 Mile Run", "Rest", "Rest","6 Mile Run"]},
	{week: ["40 Min Cross", "3.5 Mile Run", "5 Mile Pace", "3.5 Mile Run", "Rest", "3 Mile Run","7 Mile Run"]},
	{week: ["40 Min Cross",	"4 Mile Run", "6 Mile Run",	"4 Mile Run", "Rest", "3 Mile Pace", "8 Mile Run"]},
	{week: ["50 Min cross", "4 Mile Run", "6 Mile Pace", "4 Mile Run", "Rest or Easy Run", "Rest", "5-K Race"]},
	{week: ["Rest", "4.5 Mile Run", "7 Mile Run", "4.5 Mile Run", "Rest", "4 Mile Pace", "9 Mile Run"]},
	{week: ["50 Min cross", "4.5 Mile Run", "7 Mile Pace", "4.5 Mile Run", "Rest", "5 Mile Pace", "10 Mile Run"]},
	{week: ["60 Min cross", "5 Mile Run", "8 Mile Run", "5 Mile Run", "Rest or Easy Run", "Rest", "10-K Race"]},
	{week: ["Rest", "5 Mile Run", "8 Mile Pace", "5 Mile Run", "Rest", "5 Mile Pace", "11 Mile Run"]},
	{week: ["60 Min cross", "5 Mile Run", "6 Mile Run", "4 Mile Run", "Rest", "3 Mile Pace", "12 Mile Run"]},
	{week: ["Rest", "4 Mile Run", "4 Mile Pace", "2 Mile Run", "Rest", "Rest", "Half Marathon"]}
];

var marathonNovice = [
	{week: ["Rest",	"3 Mile Run",	"5 Mile Pace",	"3 Mile Run",	"Rest",	"8 Mile Run", "Cross"]},
	{week: ["Rest",	"3 Mile Run",	"5 Mile Run",	"3 Mile Run",	"Rest",	"9 Mile Run", "Cross"]},
	{week: ["Rest",	"3 Mile Run",	"5 Mile Pace",	"3 Mile Run",	"Rest",	"6 Mile Run", "Cross"]},
	{week: ["Rest",	"3 Mile Run",	"6 Mile Pace",	"3 Mile Run",	"Rest",	"11 Mile Run", "Cross"]},
	{week: ["Rest",	"3 Mile Run",	"6 Mile Run",	"3 Mile Run",	"Rest",	"12 Mile Run", "Cross"]},
	{week: ["Rest",	"3 Mile Run",	"6 Mile Pace",	"3 Mile Run",	"Rest",	"9 Mile Run", "Cross"]},
	{week: ["Rest",	"4 Mile Run",	"7 Mile Pace",	"4 Mile Run",	"Rest",	"14 Mile Run", "Cross"]},
	{week: ["Rest",	"4 Mile Run",	"7 Mile Run",	"4 Mile Run",	"Rest",	"15 Mile Run", "Cross"]},
	{week: ["Rest",	"4 Mile Run",	"7 Mile Pace",	"4 Mile Run",	"Rest",	"Rest",	"Half Marathon"]},
	{week: ["Rest",	"4 Mile Run",	"8 Mile Pace",	"4 Mile Run",	"Rest",	"17 Mile Run", "Cross"]},
	{week: ["Rest",	"5 Mile Run",	"8 Mile Run",	"5 Mile Run",	"Rest",	"18 Mile Run", "Cross"]},
	{week: ["Rest",	"5 Mile Run",	"8 Mile Pace",	"5 Mile Run",	"Rest",	"13 Mile Run", "Cross"]},
	{week: ["Rest",	"5 Mile Run",	"5 Mile Pace",	"5 Mile Run",	"Rest",	"19 Mile Run", "Cross"]},
	{week: ["Rest",	"5 Mile Run",	"8 Mile Run",	"5 Mile Run",	"Rest",	"12 Mile Run", "Cross"]},
	{week: ["Rest",	"5 Mile Run",	"5 Mile Pace",	"5 Mile Run",	"Rest",	"20 Mile Run", "Cross"]},
	{week: ["Rest",	"5 Mile Run",	"4 Mile Pace",	"5 Mile Run",	"Rest",	"12 Mile Run", "Cross"]},
	{week: ["Rest",	"4 Mile Run",	"3 Mile Run",	"4 Mile Run",	"Rest",	"8 Mile Run", "Cross"]},
	{week: ["Rest",	"3 Mile Run",	"2 Mile Run",	"Rest",	"Rest",	"2 Mile Run", "Marathon"]}
];

