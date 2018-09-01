$(function(){
	 var myChart1 = echarts.init(document.getElementById('chart1'))  
  	var myChart1_ = document.getElementById('chart1')
  	 var myChart2 = echarts.init(document.getElementById('chart2'))  
  	var myChart2_ = document.getElementById('chart2')
  	 var myChart3 = echarts.init(document.getElementById('chart3'))  
  	var myChart3_ = document.getElementById('chart3')
  	 var myChart4 = echarts.init(document.getElementById('chart4'))  
  	var myChart4_ = document.getElementById('chart4')
  		 var myChart5 = echarts.init(document.getElementById('chart_'))  
  	var myChart5_ = document.getElementById('chart_')
  	  var myChartContainer = function () {
  	  	  var width1 = $(".left-bom-box .box-cont").width() + "px";
    var height1 = $(".left-bom-box .box-cont").height() + "px";
	
		  var width2 = $(".right-top-box .box-cont").width() + "px";
    var height2 = $(".right-top-box .box-cont").height() + "px";
   
	setTimeout(function(){
		 var frm = document.getElementById('hk');  
		$(frm).load(function(){                             //  等iframe加载完毕  
	$("#v1").attr('src','video1.html?ip=192.168.1.108&port=9000&user=system&password=Ieslab-123&chanel=1000113$1$0$7');
	var frm1 = document.getElementById('v1');  
	$(frm1).load(function(){
		$("#v2").attr('src','video.html?ip=192.168.1.108&port=9000&user=system&password=Ieslab-123&chanel=1000097$1$0$4');
	var frm2 = document.getElementById('v2');  
	$(frm2).load(function(){
		$("#v3").attr('src','video2.html?ip=192.168.1.108&port=9000&user=system&password=Ieslab-123&chanel=1000113$1$0$1');
	 
	})
	})
})
	},100)
//	setInterval(function(){
//		
//		$("#bigL,#lct").attr('src','http://124.133.250.98:8006/htmonitor.jsp?fileName=3fc1dd45-29bf-45cc-9e7c-b7bf05526ac2.txt')
//	},10000)
//  myChart1_.style.width = width1
//  myChart1_.style.height = height1
    myChart2_.style.width = width2
    myChart2_.style.height = height2
    myChart3_.style.width = width2
    myChart3_.style.height = height2
    myChart4_.style.width = width2
    myChart4_.style.height = height2
  	  }
  	  $("#qp").click(function(){
  	  	$("#bigL").fadeToggle()
  	  	
  	  	$("#sp1,#sp2,#sp3,#sp4").fadeToggle()
  	  	setTimeout(function(){
  	  		$("#bigL iframe").attr('src','http://124.133.250.98:8006/htmonitor.jsp?fileName=3fc1dd45-29bf-45cc-9e7c-b7bf05526ac2.txt')
  	  		if($("#bigL").is(":hidden")){
  	  		$("#close").hide()
  	  		$("#sx").hide()
  	  		$("#sp1,#sp2,#sp3,#sp4").show()
  	  	}else{
  	  		$("#close").show()
  	  		$("#sx").show()
  	  		$("#sx").unbind('click').click(function(){
  	  			
  	  $("#bigL iframe").attr('src','http://124.133.250.98:8006/htmonitor.jsp?fileName=3fc1dd45-29bf-45cc-9e7c-b7bf05526ac2.txt')
  	  })
  	  		$("#sp1,#sp2,#sp3,#sp4").hide()
  	  	}
  	  	},500)
  	  })
  	  $("#close").click(function(){
  	  	$("#bigL").fadeOut()
  	  	$("#sx").fadeOut()
  	  	$("#close").fadeOut()
  	  	$("#sp1,#sp2,#sp3,#sp4").fadeIn()
  	  })
		 
  	  var ylXdata = [];
  	  var ylYdata = [];
  	  var zdXdata =[];
  	  var zdYdata = [];
  	  var phXdata =[];
  	  var phYdata =[];
  	  var today = getDate(new Date().getTime())
  	  getData(myChart2,ylXdata,ylYdata,14,today,today)
  	   getData(myChart3,zdXdata,zdYdata,11,today,today)
  	    getData(myChart4,phXdata,phYdata,12,today,today)
  	   /* setInterval(function(){
  	    	 getData(myChart2,ylXdata,ylYdata,14)
  	   getData(myChart3,zdXdata,zdYdata,11)
  	    getData(myChart4,phXdata,phYdata,12)
  	    },1000*60*5)*/
  	  var appusage_data = [{
    name: "1",
    value: 1
}, {
    name: "3",
    value: 3
}, {
    name: "3",
    value: 3
}, {
    name: "3",
    value: 3
}, {
    name: "1",
    value: 1
}];
var appusage_data_ = [
	 {
    name: "2",
    value: 2
}, {
    name: "2",
    value: 2
}, {
    name: "1",
    value: 1
}
]
//var arr = appusage_data.sort(compare('value'))
	 myChart1.setOption(
	 	{
 "title": {
        "text": "机泵设备",
        "textStyle": {

	color:"#ffffff",
            "fontSize": 16
        },
        left: 'center',
    },

    "tooltip": {
        "trigger": "axis",
        "axisPointer": { // 坐标轴指示器，坐标轴触发有效
            "type": "shadow" // 默认为直线，可选为："line" | "shadow"
        },
          position: function (pos, params, dom, rect, size) {
      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
      var obj = {top: 60};
      obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
      return obj;
  },
        formatter:function(res){
        	
        	var int = '';
        	switch (res[0].name){
        		case 'NSC':
        		int=res[0].name+'</br>类型：机泵设备</br>型号：NSC250-200-430</br>品牌：湖南南方长河泵业有限公司</br>数量：1'
        		break;
        		case '增压泵':
        		int=res[0].name+'</br>类型：机泵设备</br>型号：YX3-315M4</br>品牌：山西电机制造有限公司</br>数量：3'
        		break;
        		case '深井泵':
        		int=res[0].name+'</br>类型：机泵设备</br>型号：YLB-250-1-4</br>品牌：上海人民电机厂</br>数量：3'
        		break;
        		case '深井泵':
        		int=res[0].name+'</br>类型：机泵设备</br>型号：YLB-250-2-4</br>品牌：上海人民电机厂</br>数量：3'
        		break;
        		case '单机清水离心泵':
        		int=res[0].name+'</br>类型：机泵设备</br>型号：I2SH-9A</br>品牌：山东双轮股份有限公司</br>数量：1'
        		break;
        	
        	}
        	return int
        }
    },
    "grid": {
       	y:40,
     	y2:0,
     	height:'80%',
        "containLabel": true
    },
    "yAxis": [{
        "type": "category",
        "data": ['NSC','增压泵','深井泵','深井泵','单机清水离心泵'],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false,
            "alignWithLabel": true
        },
        "axisLabel": {
            "textStyle": {
                "color": "#ffb069"
            }
        }
    }],
    "xAxis": [{
        "type": "value",
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],

    "series": [{
        "name": "设备个数",
        "type": "bar",
        "data": appusage_data,
        "barCategoryGap": "35%",
        "label": {
            "normal": {
                "show": true,
                "position": "right",
                "formatter": function(params) {
                	console.log(params)
                    return params.data.name;
                },
                "textStyle": {
                    "color": "#bcbfff" //color of value
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    "offset": 0,
                    "color": "#ffb069" // 0% 处的颜色
                }, {
                    "offset": 1,
                    "color": "#ec2e85" // 100% 处的颜色
                }], false)
            }
        }
    }]
}
	 )
	 myChart5.setOption(
	 	{
    "title": {
        "text": "水质设备",
        "textStyle": {
			color:"#ffffff",

            "fontSize": 16
        },
        left: 'center',
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": { // 坐标轴指示器，坐标轴触发有效
            "type": "shadow" // 默认为直线，可选为："line" | "shadow"
        },
          position: function (pos, params, dom, rect, size) {
      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
      var obj = {top: 60};
      obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
      return obj;
  },
        formatter:function(res){
        	
        	var int = '';
        	switch (res[0].name){
        		
        		case 'PH':
        		int=res[0].name+'</br>类型：水质设备</br>型号：PD1P1</br>品牌：哈希</br>数量：2'
        		break;
        		case '浊度':
        		int=res[0].name+'</br>类型：水质设备</br>型号：1720E</br>品牌：哈希</br>数量：2'
        		break;
        		case '二氧化氯':
        		int=res[0].name+'</br>类型：水质设备</br>型号：9187SC</br>品牌：哈希</br>数量：1'
        		break;
        	}
        	return int
        }
    },
    "grid": {
       	y:40,
     	y2:0,
     	x:64,
     		height:'80%',
        "containLabel": true
    },
    "yAxis": [{
        "type": "category",
        "data": ['PH','浊度','二氧化氯'],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false,
            "alignWithLabel": true
        },
        "axisLabel": {
            "textStyle": {
                "color": "#ffb069"
            }
        }
    }],
    "xAxis": [{
        "type": "value",
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],

    "series": [{
        "name": "设备个数",
        "type": "bar",
        "data": appusage_data_,

        barWidth:'65%',
        "label": {
            "normal": {
                "show": true,
                "position": "right",
                "formatter": function(params) {
                	console.log(params)
                    return params.data.name;
                },
                "textStyle": {
                    "color": "#bcbfff" //color of value
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    "offset": 0,
                    "color": "#ffb069" // 0% 处的颜色
                }, {
                    "offset": 1,
                    "color": "#ec2e85" // 100% 处的颜色
                }], false)
            }
        }
    }]
}
	 )
  	  myChartContainer();
  	  myChart1.resize()
  	   myChart2.resize()
  	    myChart3.resize()
  	     myChart4.resize()
  	       myChart5.resize()
})
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
function getDate(str) {
    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) ;//最后拼接时间
    return oTime;
};
function getData(chart,xData,yData,id,startTime,endTime){
		 $.ajax({
 	url:"http://124.133.250.98:8006/svg/svg-curve-history!curveList.action?ids="+id+"&begin_date="+startTime+"&end_date="+endTime+"&timestamp="+new Date().getTime()+"",
 	dataType:'json',
 	type:'get',
 	success:function(data){
// 			var res = data.data
 /*		var sum = 0
 		
 		sum = sum /3*/
 	/*	var val = 0
 		$.each(res, function(k,v) {
			val=parseFloat(v)
 			
 		});*/
 		var name = '';
 		var dw= ''
 		if(id==14){
 			name='出厂余氯'
 			dw = 'mg/L'
 		}else if(id==11){
 			name='出厂浊度'
 			dw='NTU'
 		}else{
 			name = ' 出厂PH'
 			dw = ''
 		}
 		  	for(var i =0;i<data.l1.length;i++){
				xData.push(getMyDate(data.l1[i].time).split(' ')[1]);
				yData.push(parseFloat(data.l1[i].value).toFixed(2))
			}
 	/*	yData.push(val.toFixed(2))
 		xData.push(getMyDate(new Date().getTime()))*/
 			chart.setOption(
 			{
//  color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    	/*	title:{
							    left: 'center',
        text: tit,
        textStyle:{
        	color:"#ffffff"
        }
    		},*/
 grid: {
              x:50,
            x2:50,
           y:40,
         	y2:40

            },
    xAxis : [
        {
            type : 'category',
            data : xData.map(function (str) {
                return str.replace(' ', '\n')
              }),
            axisTick: {
                alignWithLabel: true
            },
               axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: "#ffffff"
                        }
                    },
        }
    ],
    yAxis : [
        {
        	 name: dw,
                nameTextStyle: {
                  color: "#fff"
                },
            type : 'value',
               axisLine:{
                        lineStyle:{
                            color:'#ffffff',
//                            width:1,//这里是为了突出显示加上的
                        }
                    },
                    splitLine: {
                        show: false
                    },
        }
    ],
    series : [
        {
            name:name,
            type:'line',
                 smooth: true,
                                    symbol: 'none',
                                    sampling: 'average',
                                    areaStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: 'rgb(39,88,164)'
                                            }, {
                                                offset: 1,
                                                color: 'rgb(37,137,160)'
                                            }])
                                        }
                                    },
            data:yData,
     
        }
    ]
}
 		)
// 		avgZd(chart,xData,yData)
// 		console.log(sum)
 	/*	sortArr = newObj.sort(compare('name'))
		$.each(sortArr,function(k,v){
			yData.push(parseFloat(v.val).toFixed(2))
		})*/
 	}
 	})
}
  function getMyDate(str){  
            var oDate = new Date(str),  
            oYear = oDate.getFullYear(),  
            oMonth = oDate.getMonth()+1,  
            oDay = oDate.getDate(),  
            oHour = oDate.getHours(),  
            oMin = oDate.getMinutes(),  
            oSen = oDate.getSeconds(),  
            oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间  
            return oTime;  
        };  
        //补0操作  
        function getzf(num){  
            if(parseInt(num) < 10){  
                num = '0'+num;  
            }  
            return num;  
        } 
