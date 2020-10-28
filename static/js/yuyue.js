/**
 * Created by amyqx on 2017/5/29.
 */



    $(document).ready(function(){
        var fromhour;
        var fromminute;
        var stuid="巴拉巴拉";//传过来用户的值；
        $("#name").text(stuid);
        $('#beginhour').change(function(){

            fromhour=$(this).children('option:selected').val();
			//这就是selected
			
        })
        $('#beginminute').change(function(){

            fromminute=$(this).children('option:selected').val();
			

        })
        $('#yuyueshichang').change(function(){

            var timelong=$(this).children('option:selected').val();//这就是selected
        })


        var seatid;

        $(".checkout-button").click(function(){




           
				
                $(this).attr("name","yuyue");
				



            

            alert("确定预约？")//这里我正在研究




            $.post('/admin/Selected',{seatid:seatid,fromhour:fromhour,fromminute:fromminute,timelong:timelong},function(){
                alert("预约成功");},"json");//传回去预约的座位id和预约的时间。


        })


        var x=["0001"];//代表有人正在使用的座位数组

        for(var n=0;n<x.length;n++){

            $("input[data-uid = "+ x[n] +"]").css("background-color","red");
            $("input[data-uid = "+ x[n] +"]").attr("name","youren");
        }
        var y=["0002", "0005"];//代表预约状态的座位数组

        for(var n=0;n < y.length;n++){
            $("input[data-uid = "+ y[n] +"]").css("background-color","red");
            $("input[data-uid = "+ y[n] +"]").attr("name","youren");

        }
        var z=["0003"];//代表暂时离开状态的座位数组

        for(var n=0;n < z.length;n++){

            $("input[data-uid = "+ z[n] +"]").css("background-color","red");
            $("input[data-uid = "+ z[n] +"]").attr("name","youren");


        }


        var seletednum=0;
        $("div[class = 'chairs'] input").click(function(){

            if($(this).attr("name")=="youren"){
                alert("该座位正在被使用");
                return $(this).attr("name","youren");
            }
            else if($(this).attr("name")=="wuren"){


                seletednum=seletednum+1;



                if(seletednum>1)
                {
                    alert("你好，每个人只能选择一个位置");
                    return $(this).attr("name");
                }
                alert("确定选择?");
                $(this).css("background-color","pink");
				seatid=$(this).attr("data-uid");

                return $(this).attr("name","selected");
            }
            else if($(this).attr("name")=="yuyue"){
                alert("该座位已有人预约");
                return $(this).attr("name");
            }
            else if($(this).attr("nme")=="likai"){
                alert("该座位的人暂时离开");
                return $(this).attr("name");
            }
            else if($(this).attr("name")=="selected"){

                seletednum=0;

                alert("取消选择");
                $(this).css("background-color","#0F0");


                return $(this).attr("name","wuren");
            }


        })



    })
