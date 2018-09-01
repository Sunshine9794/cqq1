$(function() {
	  initmap();
	$(".jj").mCustomScrollbar("destroy"); //清除滚动条
	setTimeout(function() {
		$(".jj").mCustomScrollbar({
			scrollButtons: {
				enable: false, //是否添加 滚动条两端按钮支持 值:true,false
				scrollType: "continuous", //滚动按钮滚动类型 值:”continuous”(当你点击滚动控制按钮时断断续续滚动) “pixels”(根据每次点击的像素数来滚动) 
				scrollSpeed: 50, //设置点击滚动按钮时候的滚动速度(默认 20)
				scrollAmount: 60 //设置点击滚动按钮时候每次滚动的数值 像素单位 默认 40像素
			},
			horizontalScroll: false, //是否创建一个水平滚动条 默认是垂直滚动条
			set_width: false, //：设置你内容的宽度 值可以是像素或者百分比
			set_height: false, //：设置你内容的高度 值可以是像素或者百分比
			mouseWheel: true, //鼠标滚动的支持 值为:true.false
			//mouseWheelPixels:10,//：鼠标滚动中滚动的像素数目(step) 值为以像素为单位的数值
		});
		
	
	}, 200)
/*	function addEvent(obj,xEvent,fn) {  
    if(obj.attachEvent){  
      obj.attachEvent('on'+xEvent,fn);  
    }else{  
      obj.addEventListener(xEvent,fn,false);  
    }  
}  
function onMouseWheel(){
	alert(1)
}
	setTimeout(function(){
	var maxT = -($(".mCSB_container").height()-$(".mCustomScrollBox").height())
	var scT = $(".mCSB_scrollTools").height()-$('.mCSB_dragger').height()
  var oDiv = document.getElementsByClassName('jj');  
  addEvent(oDiv,'mousewheel',onMouseWheel);  
		$(".jj").hover(function(){
		$('.mCSB_container').animate({'top':maxT+'px'},8000)
		$('.mCSB_dragger').animate({'top':scT+'px'},8000)
	},function(){
		$('.mCSB_container').stop()
		$(".mCSB_dragger").stop()
	})
	},1000)*/
	var myChart1 = echarts.init(document.getElementById('chart1'))
	var myChart1_ = document.getElementById('chart1')
	var myChart2 = echarts.init(document.getElementById('chart2'))
	var myChart2_ = document.getElementById('chart2')
	var myChart3 = echarts.init(document.getElementById('chart3'))
	var myChart3_ = document.getElementById('chart3')
		var myChart4 = echarts.init(document.getElementById('chart1_'))
	var myChart4_ = document.getElementById('chart1_')
		var myChart5 = echarts.init(document.getElementById('chart2_'))
	var myChart5_ = document.getElementById('chart2_')
		var myChart6 = echarts.init(document.getElementById('chart3_'))
	var myChart6_ = document.getElementById('chart3_')
	$.ajax({
		url: 'http://124.133.250.98:8006/svg/svg-realtime!realtime.action?measIds=80,11,14,12&types=1,1,1,1',
		type: 'get',
		dataType: 'json',
		success: function(data) {
			var res = data.data;
			$('.gsl').html(res.m80 + '<font>m³</font>');
			$(".left-top-box .now .now-cont:eq(1) span").text('浊度：'+parseFloat(res.m11).toFixed(2) + 'NTU')
			$(".left-top-box .now .now-cont:eq(2) span").text('余氯：'+parseFloat(res.m14).toFixed(2) + 'mg/L')
			$(".left-top-box .now .now-cont:eq(3) span").text('PH：'+parseFloat(res.m12).toFixed(2))
		}
	})
	var myChartContainer = function() {

		var width1 = $(".right-top-box .box-cont").width() + "px";
		var height1 = $(".right-top-box .box-cont").height() + "px";
		var width2 = $(".right-bom-box .box-cont").width() + "px";
		var height2 = $(".right-bom-box .box-cont").height() + "px";
		myChart1_.style.width = width1
		myChart1_.style.height = height1
		myChart2_.style.width = width1
		myChart2_.style.height = height1
		myChart3_.style.width = width2
		myChart3_.style.height = height2
	
		myChart4_.style.width = width1
		myChart4_.style.height = height1
		myChart5_.style.width = width1
		myChart5_.style.height = height1
		myChart6_.style.width = width2
		myChart6_.style.height = height2
		
	}
	myChartContainer()
	var key = '2a57b980008646f69a215ce7548a30d4'
	$.ajax({
		url: 'https://free-api.heweather.com/s6/weather/forecast?location=jinan&key=' + key + '',
		type: "get",
		dataType: 'json',
		success: function(data) {
			console.log(data)
			$(".weather img").attr('src', 'cond_icon_heweather/' + data.HeWeather6[0].daily_forecast[0].cond_code_d + '.png')
			$('.wd p:last').html(data.HeWeather6[0].daily_forecast[0].tmp_min + '~' + data.HeWeather6[0].daily_forecast[0].tmp_max + '°C')
		
		}

	})
	var page = 2;
	var num = 1;
	myChart1.resize()
	myChart2.resize()
	myChart3.resize()
	myChart4.resize()
	myChart5.resize()
	myChart6.resize()
	var ylXdata = [];
	var ykYdata = [];
	var llXdata = [];
	var llYdata = [];
	var zXdata = [];
	var zYdata = [];
	var timer = null
	var today = getDate(new Date().getTime())
	getNowData(myChart4,myChart5,myChart6)
	$(".toogle").click(function(){
		$('.toogle a').removeClass('act-tog');
		$(this).find('a').addClass('act-tog')
		if($(this).index()==0){
				$("#chart1,#chart2,#chart3").hide();
			$("#chart1_,#chart2_,#chart3_").show()
				getNowData(myChart4,myChart5,myChart6)
				if(timer){
					clearInterval(timer);
					 timer = setInterval(function () {
	     	getNowData(myChart4,myChart5,myChart6)
	  }, 5000)
				}else{
					 timer = setInterval(function () {
	     	getNowData(myChart4,myChart5,myChart6)
	  }, 5000)
				}
		}else{
			 ylXdata = [];
	 ykYdata = [];
	 llXdata = [];
	 llYdata = [];
	 zXdata = [];
	 zYdata = [];
			$("#chart1,#chart2,#chart3").show();
			$("#chart1_,#chart2_,#chart3_").hide()
				getData(myChart1, ylXdata, ykYdata, 4, today, today);
	getData(myChart2, llXdata, llYdata, 58, today, today)
	getData(myChart3, zXdata, zYdata, 79, today, today)
		}
	})
//	getData(myChart1, ylXdata, ykYdata, 4, today, today);
//	getData(myChart2, llXdata, llYdata, 58, today, today)
//	getData(myChart3, zXdata, zYdata, 79, today, today)
	//  llData(myChart3, zXdata, zYdata, 79)
 timer = setInterval(function () {
	     	getNowData(myChart4,myChart5,myChart6)
	  }, 5000)
	$(".next").click(function() {
		if(num < page) {
			$('.layer-control ul').animate({
				left: -$(".slider").width() + 'px'
			})
			num++
		} else {
			return
		}
	})
	$('.prev').click(function() {
		if(num > 1) {
			--num
			$('.layer-control ul').animate({
				left: (num - 1) * $(".slider").width() + 'px'
			})
		} else {
			num = 1
		}
	})
})

/********************************************************************************************************************************************************************/
function getMyDate(str) {
	var oDate = new Date(str),
		oYear = oDate.getFullYear(),
		oMonth = oDate.getMonth() + 1,
		oDay = oDate.getDate(),
		oHour = oDate.getHours(),
		oMin = oDate.getMinutes(),
		oSen = oDate.getSeconds(),
		oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSen); //最后拼接时间
	return oTime;
};

function getDate(str) {
	var oDate = new Date(str),
		oYear = oDate.getFullYear(),
		oMonth = oDate.getMonth() + 1,
		oDay = oDate.getDate(),
		oHour = oDate.getHours(),
		oMin = oDate.getMinutes(),
		oSen = oDate.getSeconds(),
		oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay); //最后拼接时间
	return oTime;
};

//补0操作
function getzf(num) {
	if(parseInt(num) < 10) {
		num = '0' + num;
	}
	return num;
}
function getNowData(chart1,chart2,chart3){
	var Code = '4,58,79';
	var Len = '1,1,1'
	
	var arr = arguments
	$.ajax({
        url: 'http://124.133.250.98:8006/svg/svg-realtime!realtime.action?measIds=' + Code + '&types=' + Len + '',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            var res = data.data
            /* 		var xData = [];
                     var yData = [];*/
            /*var newObj = [];
            var
            var sortArr = ''*/
            var sum = 0;
            var val = [];
            var dw = '';
            var max = '';
            var name = '';
            var show = true
            $.each(data.data, function (k, v) {
               val.push(v)
            	
				})
            val.reverse()
            for(var i =0;i<3;i++){
            	switch (i) {
            		case 0:
            		dw = 'Mpa';
								name = '水压力';
								max = 0.8;
								break;
								case 1:
								dw = 'm³/h';
								name = '瞬时流量';
   							max = 2500
   							break;
   							case 2 :
   							dw = 'm³';
								name = '总流量';
								max = 25000000;
								show = false
								break
            	}
//							if(i=0){
//								dw = 'Mpa';
//								name = '水压力';
//								max = 1
//							}else if(i==1){
//								dw = 'm³/h';
//								name = '瞬时流量';
//								max = 5000
//							}else{
//								dw = 'm³/h';
//								name = '总流量';
//								max = 500000000
//							}
            	arr[i].setOption({
				

    grid: {
      x:0,
      y:0,
      x2:0,
      y2:0,
    },
    series: [
      {
        name: name,
        type: 'gauge',
        detail: {formatter:'{value}'+dw+'',fontSize:20,
          color:'#fff',offsetCenter:[0,'100%'],
       
          width: 100
        },
        splitLine:{
          show:false
        },
        title:{
          show:false,
          color:"#fff"
        },
        axisLabel:{
          show:show,
          textStyle: {color: "#fff",}
        },
        pointer:{
          width:4
        },


        axisTick:{
          length:0,
          lineStyle:{
            color:"#ffffff"
          }
        },

        splitNumber:5,
        splitLine:{
          length:6,
          lineStyle: {
            width: 1,
            color:'#396797'
          },

        },
        min:0,
       	max:max,
        axisLine: {
          show: true,
          lineStyle: {
            width: 6,
            shadowBlur: 0,
            color: [[0.3, '#6ced91'],[0.7, '#06a8fd'],[1, '#E43F3D']]
          },
          width: 6
        },
        data: [{value: parseFloat(val[i]).toFixed(2),name:""}]
      }
    ]



                })
            }
      /*      $.each(data.data, function (k, v) {
               	console.log(v)
            	
				
				   	++sum
            });
             */
//          yData.push(sum.toFixed(2))
//          xData.push(getMyDate(new Date().getTime()))
//          avgll(chart, xData, yData)
// 		console.log(sum)
            /*	sortArr = newObj.sort(compare('name'))
               $.each(sortArr,function(k,v){
                   yData.push(parseFloat(v.val).toFixed(2))
               })*/
        }
    })
	
}
function getData(chart, xData, yData, id, startTime, endTime) {

	$.ajax({
		url: "http://124.133.250.98:8006/svg/svg-curve-history!curveList.action?ids=" + id + "&begin_date=" + startTime + "&end_date=" + endTime + "&timestamp=" + new Date().getTime() + "",
		dataType: 'json',
		type: 'get',
		success: function(data) {
			//          var res = data.data
			/*		var sum = 0

			        sum = sum /3*/
			var val = 0
			/*    $.each(res, function (k, v) {
			        val = parseFloat(v)

			    });*/
			var dw = '';
			var name = '';
			var colors = '';

			if(id == 4) {
				name = '出厂水压'
				dw = 'Mpa'
				colors =[{
                                                offset: 0,
                                                color: 'rgb(39,88,164)'
                                            }, {
                                                offset: 1,
                                                color: 'rgb(37,137,160)'
                                            }]
			} else if(id == 58) {
				name = '出厂瞬时流量'
				dw = 'm³/h'
				colors = [{
                                                offset: 0,
                                                color: 'rgb(255, 70, 131)'
                                            }, {
                                                offset: 1,
                                                color: 'rgb(255, 158, 68)'
                                            }]
			} else if(id == 79) {
				
				name = '出厂总流量';
				dw = 'm³',
					colors =  [{
                                                offset: 0,
                                                color: 'rgb(255, 70, 131)'
                                            }, {
                                                offset: 1,
                                                color: 'rgb(255, 158, 68)'
                                            }]
			}
			
			for(var i = 0; i < data.l1.length; i++) {
				xData.push(getMyDate(data.l1[i].time).split(' ')[1]);
				yData.push(parseFloat(data.l1[i].value).toFixed(2))
			}
			/* yData.push(val.toFixed(2))
			 xData.push(getMyDate(new Date().getTime()))*/
			chart.setOption({
//				color: ['#3398DB'],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'line' // 默认为直线，可选为：'line' | 'shadow'
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
					x: 70,
					x2: 50,
					y: 40,
					y2: 40
				},
				xAxis: [{
					type: 'category',
					data: xData.map(function(str) {
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
				}],
				yAxis: [{
					name: dw,
					nameTextStyle: {
						color: "#fff"
					},
					type: 'value',
					axisLine: {
						lineStyle: {
							color: '#ffffff',
							//                            width:1,//这里是为了突出显示加上的
						}
					},
					splitLine: {
						show: false
					},
				}],
				series: [{
					name: name,
					type: 'line',
            smooth: true,
                                    symbol: 'none',
                                    sampling: 'average',
                                    areaStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,colors )
                                        }
                                    },
					data: yData,

				}]
			})
			// 		avgZd(chart,xData,yData)
			// 		console.log(sum)
			/*	sortArr = newObj.sort(compare('name'))
			   $.each(sortArr,function(k,v){
			       yData.push(parseFloat(v.val).toFixed(2))
			   })*/
		}
	})
}

function llData(chart, xData, yData, id) {
	$.ajax({
		url: 'http://124.133.250.98:8006/svg/svg-realtime!realtime.action?measIds=' + id + '&types=1',
		dataType: "json",
		type: 'get',
		success: function(data) {
			var res = data.data;

			$.each(res, function(k, v) {
				xData.push({
					name: parseFloat(v).toFixed(2),
					value: parseFloat(v).toFixed(2)
				})
			});
			yData.push(getMyDate(new Date().getTime()).split(' ')[1])
			console.log(getMyDate(new Date().getTime()).split(' ')[1])


			chart.setOption({
				/* "title": {
				     "text": "应用总数：15",
				     "textStyle": {
				         "color": "#bcbfff",
				         "fontWeight": "bold",
				         "fontSize": 14
				     },
				     "top": "4%",
				     "left": "2.2%"
				 },*/
				"tooltip": {
					"trigger": "axis",
					"axisPointer": { // 坐标轴指示器，坐标轴触发有效
						"type": "shadow" // 默认为直线，可选为："line" | "shadow"
					}
				},
				"grid": {
					y: 0,
					y2: 0,
					x2: 80,
					"containLabel": true
				},
				"yAxis": [{
					"type": "category",
					"data": yData.map(function(str) {
						return str.replace(' ', '\n')
					}),
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
					"name": "总流量",
					"type": "bar",
					"data": xData,
					"barCategoryGap": "35%",
					"label": {
						"normal": {
							"show": true,
							"position": "right",
							"formatter": function(params) {
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
			})
		}
	})
}

/*******************************************************************地***图***模***块****************************************************************************/
var myMap, myLegend;

function initmap() {
	//地图初始化
	require(["esri/geometry/Extent",
			"esri/SpatialReference",
			"esri/map",
			"esri/config",
			"gislib/TianDiTuLayer",
//			"dojo/parser",
			"dojo/on",
			"dojo/_base/lang",
			"esri/layers/ArcGISDynamicMapServiceLayer",
			"config/Config",
			"esri/dijit/Legend",
			"dojo/domReady!"
		],
		function(Extent,
			SpatialReference,
			Map,
			esriConfig,
			TianDiTuLayer,
			parser,
			on,
			lang,
			ArcGISDynamicMapServiceLayer,
			Config,
			Legend) {
//			parser.parse();
			esriConfig.defaults.io.proxyUrl = "../Java/proxy.jsp";
			esriConfig.defaults.io.alwaysUseProxy = false;
			myMap = new Map("map", {
				logo: false,
				extent: new Extent(
					116.70669678720367,
					36.493362150906314,
					116.89902644307145,
					36.609582745093796,
					new SpatialReference({
						wkid: 4326
					}))
			});
            myMap.on("load",function () {
                layercontrol();
            });
			// 矢量底图
			var sllayer = new TianDiTuLayer("geo",
				"http://t0.tianditu.com/vec_c/wmts", "vec", {
					"displayLevels": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
						12, 13, 14, 15, 16, 17, 18, 19
					]
				});
			// 注记
			var zjlayer = new TianDiTuLayer("geo",
				"http://t0.tianditu.com/cva_c/wmts", "cva", {
					"displayLevels": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
						12, 13, 14, 15, 16, 17, 18, 19
					]
				});
			myMap.addLayers([sllayer, zjlayer]);
			myMap.infoWindow.resize(350, null);
			// myLegend = new Legend({
			//     map:myMap
			// },"legendDiv");
			// myLegend.startup();
		});
}

function layercontrol() { //图层控制函数
	require(["esri/InfoTemplate",
			"esri/layers/ArcGISDynamicMapServiceLayer",
			"config/Config",
			"esri/config",
		],
		function(InfoTemplate,
			ArcGISDynamicMapServiceLayer,
			Config,
			esriConfig) {
			// var layer = new ArcGISDynamicMapServiceLayer(Config.WaterPipe.substring(0, Config.WaterPipe.lastIndexOf('/')), {
			// 	id: "WaterPipe"
			// });
			// var template = new InfoTemplate();
			// template.setTitle(getpopTitle);
			// template.setContent(getpopContent);
			// var templates = {};
			// templates[0] = {
			// 	infoTemplate: template
			// };
			// layer.setInfoTemplates(templates);
			// layer.setVisibleLayers([0]);
			// layer.on("load", function(evt) {
			// 	var extent = evt.layer.fullExtent;
			// 	myMap.setExtent(extent, true);
			// 	myMap.addLayer(evt.layer);
			// });
			for (var i in $("#layerControl input")){
				if ($("#layerControl input").eq(i).attr("checked")=="checked"){
					console.log($("#layerControl input").eq(i).attr("name"))
					_addLayer($("#layerControl input").eq(i).attr("name"));
				}
			}
			$('#allCheck').change(function(){
				var inp = $("#layerControl input");
					if($(this).is(":checked")){
						for(var i=0;i<inp.length;i++){
							if(!inp.eq(i).is(':checked')){
								inp.eq(i).prop('checked',"checked")
								inp.eq(i).trigger('change')
							}
							
					}
				}else{
						for(var i=0;i<inp.length;i++){
							if(inp.eq(i).is(':checked')){
								inp.eq(i).removeAttr('checked')
								inp.eq(i).trigger('change')
							}
							
					}
				}
			})
			$("#layerControl input").on("change", function (e) {
                var layername = $(this).attr("name");
                _addLayer(layername);
            })
            function _addLayer(e) {
                var layerobj = e;
                var nowlayer = myMap.getLayer(layerobj);
                if(!nowlayer) {
                    var template = new InfoTemplate();
                    template.setTitle(getpopTitle);
                    template.setContent(getpopContent);
                    var baseurl = Config[layerobj].substring(0, Config[layerobj].lastIndexOf('/'));
                    var i = Config[layerobj].substring(Config[layerobj].lastIndexOf('/') + 1, Config[layerobj].length) * 1;
                    var selectLayer = new ArcGISDynamicMapServiceLayer(baseurl, {
                        id: layerobj
                    });
                    var templates = {};
                    templates[i] = {
                        infoTemplate: template
                    };
                    selectLayer.setInfoTemplates(templates);
                    selectLayer.setVisibleLayers([i]);
                    selectLayer.on("error", function(evt) {
                        var msg = evt.error.message;
                        alert(msg);
                    });
                    selectLayer.on("load", function(evt) {
                        var extent = evt.layer.fullExtent;
                        myMap.setExtent(extent, true);
                    });
                    myMap.addLayer(selectLayer);
                    myMap.infoWindow.resize(350, null)
                    // myLegend.refresh();
                } else {
                    myMap.removeLayer(nowlayer);
                }
            }
		})
}

function getpopTitle(e) { //设置弹窗标题
	var layer = e.getLayer();
	var title = e.attributes[layer.displayField];
	return title;
}

function getpopContent(e) { //设置弹窗内容
	var content = "<div class='con'>";
	var id = e.attributes.OBJECTID;
	var layer = e.getLayer();
	for(var a = 0; a < layer.fields.length; a++) {
		var ming = layer.fields[a].name;
		var ali = layer.fields[a].alias;
		if(ali != "OBJECTID" && e.attributes[ming]) {
			var regs = new RegExp("[\\u4E00-\\u9FFF]+", "g"); //移除纯别名是英文的字段
			// if (regs.test(ali)) {
			if(layer.fields[a].alias.indexOf("OBJ") == -1 && layer.fields[a].alias.indexOf("Sha") && layer.fields[a].alias.indexOf("SHA")) {
				if(layer.fields[a].type == "esriFieldTypeDate") {
					content += "<div>" + layer.fields[a].alias + ":<b>" + new Date(e.attributes[ming]).toLocaleDateString() + "</b></div>";
				} else {
					content += "<div>" + layer.fields[a].alias + ":<b>" + e.attributes[ming] + "</b></div>";
				}
			}
		}
	}
	return content;
}