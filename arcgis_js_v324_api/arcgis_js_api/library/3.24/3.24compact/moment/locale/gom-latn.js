//>>built
(function(c,b){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?b(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/gom-latn",["../moment"],b):b(c.moment)})(this,function(c){function b(a,b,c,d){a={s:["thodde secondanim","thodde second"],ss:[a+" secondanim",a+" second"],m:["eka mintan","ek minute"],mm:[a+" mintanim",a+" mintam"],h:["eka horan","ek hor"],hh:[a+" horanim",a+" hor"],d:["eka disan","ek dis"],dd:[a+" disanim",a+" dis"],
M:["eka mhoinean","ek mhoino"],MM:[a+" mhoineanim",a+" mhoine"],y:["eka vorsan","ek voros"],yy:[a+" vorsanim",a+" vorsam"]};return b?a[c][0]:a[c][1]}return c.defineLocale("gom-latn",{months:"Janer Febrer Mars Abril Mai Jun Julai Agost Setembr Otubr Novembr Dezembr".split(" "),monthsShort:"Jan. Feb. Mars Abr. Mai Jun Jul. Ago. Set. Otu. Nov. Dez.".split(" "),monthsParseExact:!0,weekdays:"Aitar Somar Mongllar Budvar Brestar Sukrar Son'var".split(" "),weekdaysShort:"Ait. Som. Mon. Bud. Bre. Suk. Son.".split(" "),
weekdaysMin:"Ai Sm Mo Bu Br Su Sn".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:b,ss:b,m:b,mm:b,h:b,hh:b,d:b,
dd:b,M:b,MM:b,y:b,yy:b},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(a,b){switch(b){case "D":return a+"er";default:case "M":case "Q":case "DDD":case "d":case "w":case "W":return a}},week:{dow:1,doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(a,b){12===a&&(a=0);if("rati"===b)return 4>a?a:a+12;if("sokalli"===b)return a;if("donparam"===b)return 12<a?a:a+12;if("sanje"===b)return a+12},meridiem:function(a,b,c){return 4>a?"rati":12>a?"sokalli":16>a?"donparam":20>a?"sanje":
"rati"}})});