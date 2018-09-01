$(function () {
    initmap();
    setTimeout(function () {
        gotolocation($('.selectpicker option:selected').attr('localtion').split(','));
          $(".filter-option").css('background',"#0074CD")
    },1000);
    $("#lunch").val(85)
  
    
    var myChart1_ = document.getElementById('bdmap')
    /*  var myChart1 = echarts.init(document.getElementById('bdmap'))
      var myChart1_ = document.getElementById('bdmap')*/
    var myChart2 = echarts.init(document.getElementById('chart1'))
    var myChart2_ = document.getElementById('chart1')
    var myChart3 = echarts.init(document.getElementById('chart2'))
    var myChart3_ = document.getElementById('chart2')
    var myChart4 = echarts.init(document.getElementById('chart3'))
    var myChart4_ = document.getElementById('chart3')
    var myChart5 = echarts.init(document.getElementById('chart4'))
    var myChart5_ = document.getElementById('chart4')
    var myChart6 = echarts.init(document.getElementById('chart5'))
    var myChart6_ = document.getElementById('chart5')
    var myChart7 = echarts.init(document.getElementById('chart6'))
    var myChart7_ = document.getElementById('chart6')
    var myChart8 = echarts.init(document.getElementById('chart7'))
    var myChart8_ = document.getElementById('chart7')
    var myChart9 = echarts.init(document.getElementById('chart8'))
    var myChart9_ = document.getElementById('chart8')
    var myChart10 = echarts.init(document.getElementById('chart9'))
    var myChart10_ = document.getElementById('chart9')
    var myChartContainer = function () {
        var width10 = $(".left-top-box .box-cont").width() + "px";
        var height10 = $(".left-top-box .box-cont").height() + "px";
        myChart1_.style.width = width10

        myChart1_.style.height = height10

        var width2 = $(".center-top-box .box-cont").width() + "px";
        var height2 = $(".center-top-box .box-cont").height() + "px";

        myChart2_.style.width = width2
        myChart2_.style.height = height2

        var width3 = $(".center-box .center-left-box .box-cont").width() + "px";
        var height3 = $(".center-box .center-left-box .box-cont").height() + "px";
        console.log(height3)
        myChart3_.style.width = width3
        myChart3_.style.height = height3
        myChart4_.style.width = width3
        myChart4_.style.height = height3

        var width4 = $(".center-bom-box .center-left-box .box-cont").width() + "px";
        var height4 = $(".center-bom-box .center-left-box .box-cont").height() + "px";
        myChart5_.style.width = width4
        myChart5_.style.height = height4
        myChart6_.style.width = width4
        myChart6_.style.height = height4
        myChart7_.style.width = width4
        myChart7_.style.height = height4

        var width5 = $(".right-top-box .box-cont").width() + "px";
        var height5 = $(".right-top-box .box-cont").height() + "px";
        myChart8_.style.width = width5
        myChart8_.style.height = height5
        myChart9_.style.width = width5
        myChart9_.style.height = height5
        myChart10_.style.width = width5
        myChart10_.style.height = height5
    }
    myChartContainer();
    var today = getday(new Date().getTime())
    $("#inpstart,#inpend").val(today)

    getData(85, 'a', today, today, '大学路-银丰公馆', myChart2)
    getData('101_102', 'b', today, today, '莲台山路', myChart3, myChart4)
    getData('130_131_132', 'c', today, today, '平安街道', myChart5, myChart6, myChart7)
    $("#lunch").change(function () {
        $(".left-bom-box img").attr('src', 'img/' + $('#lunch').val() + '.png')
        var start = $("#inpstart").val();
        var end = $("#inpend").val();
        var name = $('.selectpicker option:selected').text()
        var jwd = $('.selectpicker option:selected').attr('localtion').split(',')//每次点击定位取到的经纬度
        gotolocation(jwd);
        var type = $('.selectpicker option:selected').attr('type');
        var ids = '';
        switch (type) {
            case 'a':
                ids = $('#lunch').val();
                getData(ids, 'a', start, end, name, myChart2)
                break;
            case 'b':
                ids = $('#lunch').val() + '_' + $('.selectpicker option:selected').attr('lj');
                getData(ids, 'b', start, end, name, myChart3, myChart4)

                break;
            case 'c':
                ids = $('.selectpicker option:selected').attr('zd') + '_' + $('#lunch').val() + '_' + $('.selectpicker option:selected').attr('ph');
                getData(ids, 'c', start, end, name, myChart5, myChart6, myChart7)
                break;
        }

    })

    /* console.log(ylCode)
     console.log(ylLen)*/
    /* var ylCode = ''
    var ylLen = ''
    for(var i =85;i<=100;i++){
        ylCode+=i+','
        ylLen+='1,'
    }*/
    var ylXdata = [];
    var ylYdata = [];
    var zdXdata = [];
    var zdYdata = [];
    var llXdata = [];
    var llYdata = [];
    ylData(myChart8, ylXdata, ylYdata)
    zdData(myChart9, zdXdata, zdYdata)
    llData(myChart10, llXdata, llYdata)
//avgYl(myChart8,ylXdata,ylYdata)
//avgZd(myChart9)
    setInterval(function () {
        ylData(myChart8, ylXdata, ylYdata)
        zdData(myChart9, zdXdata, zdYdata)
        llData(myChart10, llXdata, llYdata)
//	avgZd(myChart9)
    }, 5000)
    $("#searches").click(function () {
        var type = $('.selectpicker option:selected').attr('type');
        var ids = '';
        var start = $("#inpstart").val();
        var end = $("#inpend").val();
        var name = $('.selectpicker option:selected').text()
        $(".left-bom-box img").attr('src', 'img/' + $('#lunch').val() + '.png')

        var jwd = $('.selectpicker option:selected').attr('localtion').split(',')
        /*  myChart1.setOption({
            bmap:{
              center:jwd
            },
            series:[
              {
                data:[{
                  name:name,
                  value:jwd
                }]
              }
            ]
          })*/
        switch (type) {
            case 'a':
                ids = $('#lunch').val();
                getData(ids, 'a', start, end, name, myChart2)
                break;
            case 'b':
                ids = $('#lunch').val() + '_' + $('.selectpicker option:selected').attr('lj');
                getData(ids, 'b', start, end, name, myChart3, myChart4)

                break;
            case 'c':
                ids = $('.selectpicker option:selected').attr('zd') + '_' + $('#lunch').val() + '_' + $('.selectpicker option:selected').attr('ph');
                getData(ids, 'c', start, end, name, myChart5, myChart6, myChart7)
                break;
        }
    })


    myChart2.resize()
    myChart3.resize()
    myChart4.resize()
    myChart5.resize()
    myChart6.resize()
    myChart7.resize()
    myChart8.resize()
    myChart9.resize()
    myChart10.resize()
})

function getMyDate(str) {
    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSen);//最后拼接时间
    return oTime;
};

//补0操作
function getzf(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}

function getday(str) {
    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) //最后拼接时间
    return oTime;
};

function getData(id, type, startTime, endTime, tit, chart1, chart2, chart3) {

    $.ajax({
        url: "http://124.133.250.98:8006/svg/svg-curve-history!curveList.action?ids=" + id + "&begin_date=" + startTime + "&end_date=" + endTime + "&timestamp=" + new Date().getTime() + "",
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            switch (type) {
                case 'a':
                    var xData = [];
                    var yData = [];
                    $(".filter-option").css('background',"#0074CD")
                    for (var i = 0; i < data.l1.length; i++) {
                        xData.push(getMyDate(data.l1[i].time));
                        yData.push(parseFloat(data.l1[i].value).toFixed(2))
                    }

                    chart1.setOption(
                        {


                            tooltip: {

                                trigger: 'axis',


                            },
                            title: {
                                left: 'center',
                                text: tit,
                                textStyle: {
                                    color: "#ffffff"
                                }
                            },
                            "grid": {
                                y: 40,
                                y2: 10,
                                x2: 40,
                                x: 40,

                                "containLabel": true
                            },
                            xAxis: [

                                {
                                    type: 'category',
                                    data: xData.map(function (str) {
                                        return str.replace(' ', '\n')
                                    }),
                                    boundaryGap: false,
                                    axisLine: {
                                        onZero: false,
                                        lineStyle: {
                                            color: "#ffffff"
                                        }
                                    },


                                }
                            ],

                            itemStyle: {

                                normal: {
                                    color: '#2C98A0'
                                }
                            },
                            yAxis: [
                                {
                                	  name: 'Mpa',
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
                                }
                            ],
                            series: [
                                {
                                    name: '监测点压力曲线',
                                    type: 'line',
//   smooth:true,
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
                                    data: yData
                                }

                            ]
                        }
                    )
                    break;
                case 'b':
                $(".filter-option").css('background',"#40BF4E")
                    var xData1 = [];
                    var yData1 = [];
                    var xData2 = [];
                    var yData2 = [];
                    for (var i = 0; i < data.l1.length; i++) {
                        xData1.push(getMyDate(data.l1[i].time));
                        yData1.push(parseFloat(data.l1[i].value).toFixed(2))
                    }
                    for (var q = 0; q < data.l2.length; q++) {
                        xData2.push(getMyDate(data.l2[q].time));
                        yData2.push(parseFloat(data.l2[q].value).toFixed(2))
                    }
                    chart1.setOption(
                        {


                            tooltip: {

                                trigger: 'axis',


                            },
                            title: {
                                left: 'center',
                                text: tit,
                                textStyle: {
                                    color: "#ffffff"
                                }
                            },
                            "grid": {
                                y: 40,
                                y2: 10,
                                "containLabel": true
                            },
                            xAxis: [

                                {
                                    type: 'category',
                                    data: xData1.map(function (str) {
                                        return str.replace(' ', '\n')
                                    }),
                                    boundaryGap: false,
                                    axisLine: {
                                        onZero: false,
                                        lineStyle: {
                                            color: "#ffffff"
                                        }
                                    },


                                }
                            ],

                            itemStyle: {
                                normal: {
                                    color: '#2C98A0'
                                }
                            },
                            yAxis: [
                                
                                	    {
                                	  name: 'm³/h',
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
                                }
                            ],
                            series: [
                                {
                                    name: '监测点瞬时流量',
                                    type: 'line',
//   smooth:true,
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
                                    data: yData1
                                }

                            ]
                        }
                    )
                    chart2.setOption(
                        {


                            tooltip: {

                                trigger: 'axis',


                            },
                            title: {
                                left: 'center',
                                text: tit,
                                textStyle: {
                                    color: "#ffffff"
                                }
                            },
                            "grid": {
                                y: 40,
                                y2: 10,
                                "containLabel": true
                            },
                            xAxis: [

                                {
                                    type: 'category',
                                    data: xData2.map(function (str) {
                                        return str.replace(' ', '\n')
                                    }),
                                    boundaryGap: false,
                                    axisLine: {
                                        onZero: false,
                                        lineStyle: {
                                            color: "#ffffff"
                                        }
                                    },


                                }
                            ],

                            itemStyle: {

                                normal: {
                                    color: '#2C98A0'
                                }
                            },
                            yAxis: [

                                	    {
                                	  name: 'm³',
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
                                }
                            ],
                            series: [
                                {
                                    name: '监测点累计流量',
                                    type: 'line',
//   smooth:true,
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
                                    data: yData2
                                }

                            ]
                        }
                    )
                    break;
                case 'c':
                  $(".filter-option").css('background',"#F79D30")
                    var xData1 = [];
                    var yData1 = [];
                    var xData2 = [];
                    var yData2 = [];
                    var xData3 = [];
                    var yData3 = [];
                    for (var i = 0; i < data.l1.length; i++) {
                        xData1.push(getMyDate(data.l1[i].time));
                        yData1.push(parseFloat(data.l1[i].value).toFixed(2))
                    }
                    for (var q = 0; q < data.l2.length; q++) {
                        xData2.push(getMyDate(data.l2[q].time));
                        yData2.push(parseFloat(data.l2[q].value).toFixed(2))
                    }
                    for (var z = 0; z < data.l3.length; z++) {
                        xData3.push(getMyDate(data.l3[z].time));
                        yData3.push(parseFloat(data.l3[z].value).toFixed(2))
                    }
                    chart1.setOption(
                        {


                            tooltip: {

                                trigger: 'axis',


                            },
                            title: {
                                left: 'center',
                                text: tit,
                                textStyle: {
                                    color: "#ffffff"
                                }
                            },
                            "grid": {
                                y: 40,
                                y2: 10,
                                "containLabel": true
                            },
                            xAxis: [

                                {
                                    type: 'category',
                                    data: xData1.map(function (str) {
                                        return str.replace(' ', '\n')
                                    }),
                                    boundaryGap: false,
                                    axisLine: {
                                        onZero: false,
                                        lineStyle: {
                                            color: "#ffffff"
                                        }
                                    },


                                }
                            ],

                            itemStyle: {
                                normal: {
                                    color: '#2C98A0'
                                }
                            },
                            yAxis: [

                                	    {
                                	  name: 'NTU',
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
                                }
                            ],
                            series: [
                                {
                                    name: '浊度',
                                    type: 'line',
//   smooth:true,
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
                                    data: yData1
                                }

                            ]
                        }
                    )
                    chart2.setOption(
                        {


                            tooltip: {

                                trigger: 'axis',


                            },
                            title: {
                                left: 'center',
                                text: tit,
                                textStyle: {
                                    color: "#ffffff"
                                }
                            },
                            "grid": {
                                y: 40,
                                y2: 10,
                                "containLabel": true
                            },
                            xAxis: [

                                {
                                    type: 'category',
                                    data: xData2.map(function (str) {
                                        return str.replace(' ', '\n')
                                    }),
                                    boundaryGap: false,
                                    axisLine: {
                                        onZero: false,
                                        lineStyle: {
                                            color: "#ffffff"
                                        }
                                    },


                                }
                            ],

                            itemStyle: {
                                normal: {
                                    color: '#2C98A0'
                                }
                            },
                            yAxis: [

                                	    {
                                	  name: 'mg/L',
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
                                }
                            ],
                            series: [
                                {
                                    name: '余氯',
                                    type: 'line',
//   smooth:true,
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
                                    data: yData2
                                }

                            ]
                        }
                    )
                    chart3.setOption(
                        {


                            tooltip: {

                                trigger: 'axis',


                            },
                            title: {
                                left: 'center',
                                text: tit,
                                textStyle: {
                                    color: "#ffffff"
                                }
                            },
                            "grid": {
                                y: 40,
                                y2: 10,
                                "containLabel": true
                            },
                            xAxis: [

                                {
                                    type: 'category',
                                    data: xData3.map(function (str) {
                                        return str.replace(' ', '\n')
                                    }),
                                    boundaryGap: false,
                                    axisLine: {
                                        onZero: false,
                                        lineStyle: {
                                            color: "#ffffff"
                                        }
                                    },


                                }
                            ],

                            itemStyle: {
                                normal: {
                                    color: '#2C98A0'
                                }
                            },
                            yAxis: [
                                {
                                	
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
                                }
                            ],
                            series: [
                                {
                                    name: 'PH',
                                    type: 'line',
//   smooth:true,
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
                                    data: yData3
                                }

                            ]
                        }
                    )
            }
        },

    })
}

function compare(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}

function zdData(chart, xData, yData) {
    var zdCode = '130,133,136';
    var ylLen = '1,1,1';

    $.ajax({
        url: 'http://124.133.250.98:8006/svg/svg-realtime!realtime.action?measIds=' + zdCode + '&types=' + ylLen + '',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            var res = data.data
            var sum = 0
            $.each(data.data, function (k, v) {
                sum += parseFloat(v)

            });
            sum = sum / 3
            yData.push(sum.toFixed(2))
            xData.push(getMyDate(new Date().getTime()))
            avgZd(chart, xData, yData)
// 		console.log(sum)
            /*	sortArr = newObj.sort(compare('name'))
               $.each(sortArr,function(k,v){
                   yData.push(parseFloat(v.val).toFixed(2))
               })*/
        }
    })
}

function avgZd(chart, xData, yData) {
    chart.setOption(
        {
//          color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
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
                x: 50,
                x2: 50,
                y: 40,
                y2: 40

            },
            xAxis: [
                {
                    type: 'category',
                    data: xData.map(function (str) {
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
            yAxis: [
                {
                	  
                                	  name: 'NTU',
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
                }
            ],
            series: [
                {
                    name: '浊度',
                    type: 'line',
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
                    data: yData,

                }
            ]
        }
    )
}

function ylData(chart, xData, yData) {
    //压力监测点
    var ylCode = ''
    var ylLen = ''
    for (var i = 85; i <= 100; i++) {
        ylCode += i + ','
        ylLen += '1,'
    }
    $.ajax({
        url: 'http://124.133.250.98:8006/svg/svg-realtime!realtime.action?measIds=' + ylCode + '&types=' + ylLen + '',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            var res = data.data
            /* 		var xData = [];
                     var yData = [];*/
            /*var newObj = [];
            var
            var sortArr = ''*/
            var sum = 0
            $.each(data.data, function (k, v) {
                sum += parseFloat(v)

            });
            sum = sum / 15
            yData.push(sum.toFixed(2))
            xData.push(getMyDate(new Date().getTime()))
            avgYl(chart, xData, yData)
// 		console.log(sum)
            /*	sortArr = newObj.sort(compare('name'))
               $.each(sortArr,function(k,v){
                   yData.push(parseFloat(v.val).toFixed(2))
               })*/
        }
    })

}

function llData(chart, xData, yData) {
    var llCode = '102,104,107,110,122,113,116,119,125,129'
    var llLen = '1,1,1,1,1,1,1,1,1,1'
    /* for(var i =85;i<=100;i++){
         ylCode+=i+','
         ylLen+='1,'
     }*/
    $.ajax({
        url: 'http://124.133.250.98:8006/svg/svg-realtime!realtime.action?measIds=' + llCode + '&types=' + llLen + '',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            var res = data.data
            /* 		var xData = [];
                     var yData = [];*/
            /*var newObj = [];
            var
            var sortArr = ''*/
            var sum = 0
            $.each(data.data, function (k, v) {
                sum += parseFloat(v)

            });
            sum = sum / 10
            yData.push(sum.toFixed(2))
            xData.push(getMyDate(new Date().getTime()))
            avgll(chart, xData, yData)
// 		console.log(sum)
            /*	sortArr = newObj.sort(compare('name'))
               $.each(sortArr,function(k,v){
                   yData.push(parseFloat(v.val).toFixed(2))
               })*/
        }
    })
}

function avgll(chart, xData, yData) {
    chart.setOption(
        {
//          color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
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
                x: 50,
                x2: 50,
                y: 40,
                y2: 40

            },
            xAxis: [
                {
                    type: 'category',
                    data: xData.map(function (str) {
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
            yAxis: [
                {
                	   	  name: 'm³',
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
                }
            ],
            series: [
                {
                    name: '总流量',
                    type: 'line',
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
                    data: yData,
                    /*  markLine: {
                           /* label: {
                 normal: {
                     formatter: '管网平均压力',
                     textStyle: {
                         align: 'right'
                     }
                 }
             },*/
                    /*  data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }*/
                }
            ]
        }
    )
}

function avgYl(chart, xData, yData) {

    chart.setOption(
        {
//          color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
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
                x: 50,
                x2: 50,
                y: 40,
                y2: 40

            },
            xAxis: [
                {
                    type: 'category',
                    data: xData.map(function (str) {
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
            yAxis: [
                {
                	   	  name: 'Mpa',
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
                }
            ],
            
            series: [
                {
                    name: '压力',
                    type: 'line',
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
                    data: yData,
                    /*  markLine: {
                           /* label: {
                 normal: {
                     formatter: '管网平均压力',
                     textStyle: {
                         align: 'right'
                     }
                 }
             },*/
                    /*  data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }*/
                }
            ]
        }
    )
}

/*******************************************************************地***图***模***块****************************************************************************/
var myMap;

function initmap() {
    //地图初始化
    require(["esri/geometry/Extent",
            "esri/SpatialReference",
            "esri/map",
            "esri/config",
            "gislib/TianDiTuLayer",
            "dojo/parser",
            "dojo/ready",
            "dojo/on",
            "dojo/_base/lang",
            "esri/layers/ArcGISDynamicMapServiceLayer",
            "config/Config",
            "esri/dijit/Legend"],
        function (Extent,
                  SpatialReference,
                  Map,
                  esriConfig,
                  TianDiTuLayer,
                  parser,
                  ready,
                  on,
                  lang,
                  ArcGISDynamicMapServiceLayer,
                  Config,
                  Legend) {
            parser.parse();
            esriConfig.defaults.io.proxyUrl = "../Java/proxy.jsp";
            esriConfig.defaults.io.alwaysUseProxy = false;
            ready(function () {
                myMap = new Map("bdmap", {
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
                // 矢量底图
                var sllayer = new TianDiTuLayer("geo",
                    "http://t0.tianditu.com/vec_c/wmts", "vec", {
                        "displayLevels": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                            12, 13, 14, 15, 16, 17, 18, 19]
                    });
                // 注记
                var zjlayer = new TianDiTuLayer("geo",
                    "http://t0.tianditu.com/cva_c/wmts", "cva", {
                        "displayLevels": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                            12, 13, 14, 15, 16, 17, 18, 19]
                    });
                myMap.addLayers([sllayer, zjlayer]);
//              myMap.infoWindow.resize(350,);
                // myLegend = new Legend({
                //     map:myMap
                // },"legendDiv");
                // myLegend.startup();
            });
        });
}

function gotolocation(e) {
    require(["esri/geometry/Extent",
            "esri/SpatialReference",
            "esri/config",
            "esri/geometry/Point",
            "esri/graphic",
            "esri/symbols/PictureMarkerSymbol"],
        function (Extent,
                  SpatialReference,
                  esriConfig,
                  Point,
                  Graphic,
                  PictureMarkerSymbol) {
            esriConfig.defaults.io.proxyUrl = "../Java/proxy.jsp";
            esriConfig.defaults.io.alwaysUseProxy = false;
            var point = new Point(e[0], e[1], new SpatialReference(4326));
            myMap.centerAt(point, 1);
            var pictureMarkerSymbol = new PictureMarkerSymbol('img/pt.png', 40, 40);
            pictureMarkerSymbol.yoffset= "20px";
            var graphic = new Graphic(point,pictureMarkerSymbol);
            myMap.graphics.clear();
            myMap.graphics.add(graphic);
        });
}