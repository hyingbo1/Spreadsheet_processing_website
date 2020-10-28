// JavaScript Document
window.onresize = function() {
    CsHeight();
    resizeImage();
}
function CsHeight() {
    $("#main").css("height", document.documentElement.clientHeight+"px");
}

function resizeImage()
{
    var H = parseInt(document.documentElement.clientHeight);
    var W = parseInt(document.documentElement.clientWidth);
    
    if (W <= 375)
    {
        $("#img1").css("width", "75px");
        $("#img2").css("width", "75px");
        $("#img3").css("width", "75px");
        $("#img4").css("width", "75px");
        $("#img5").css("width", "75px");
        $("#img6").css("width", "75px");
    }
    else
    {
        $("#img1").css("width", "auto");
        $("#img2").css("width", "auto");
        $("#img3").css("width", "auto");
        $("#img4").css("width", "auto");
        $("#img5").css("width", "auto");
        $("#img6").css("width", "auto");
    }
//    alert(H);
//    alert(W);
    
}

function coverlayer()
{
    $("#CoverLayer").css("width",document.documentElement.clientWidth+"px");
    $("#CoverLayer").css("height",document.documentElement.clientHeight+"px");
    $("#CoverLayer").css("z-Index","-20");
    $("#main").css("position","absolute");
    
    //$("#CoverLayer").style.Height = document.documentElement.clientHeight;
}

$(function() {
    check();
    $("#pageUp").click(function() {
        var pageIndex = $("#pageIndex").val();
        if (pageIndex != "1") {
            $("#pageIndex").val(parseInt(pageIndex) - 1);
        }
        check();
        $("form").submit();
    })
    $("#pageDown").click(function() {
        var pageIndex = parseInt($("#pageIndex").val());
        var pageCount = parseInt($("#pageCount").val()); 
        if (pageIndex < pageCount)
        {
            $("#pageIndex").val(pageIndex+1);
        }
        check();
        $("form").submit();
    })
    
    //seat.aspx  ajax刷新
    $("#pageUp1").click(function() {
        var pageIndex = $("#pageIndex").val();
        if (pageIndex != "1") {
            $("#pageIndex").val(parseInt(pageIndex) - 1);
        }

        check();
        seatrefresh();
    })
    $("#pageDown1").click(function() {
        var pageIndex = parseInt($("#pageIndex").val());
        var pageCount = parseInt($("#pageCount").val()); 
        if (pageIndex < pageCount)
        {
            $("#pageIndex").val(pageIndex+1);
        }
        check();
        seatrefresh();
    })
 
    $("#checkout").click(function(){
        if (!confirm("确认离馆(签出)？"))
        {
           return false;
        }
    })
    
    $("#tempcheckout").click(function(){
       $("#div1").fadeout(); 
    })
})

function check()
{           
    var pageIndex = parseInt($("#pageIndex").val());
    var pageCount = parseInt($("#pageCount").val());
    if (pageIndex == 1) {
        $("#pageUp").css("display", "none");
        $("#pageUp1").css("display", "none");
    }
    else if (pageIndex > 1)
    {
        $("#pageUp").css("display", "block");
        $("#pageUp1").css("display", "block");
    }
    if (pageIndex == pageCount)
    {
        $("#pageDown").css("display", "none");
        $("#pageDown1").css("display", "none");
    }
    else if (pageIndex < pageCount)
    {
        $("#pageDown").css("display", "block");
        $("#pageDown1").css("display", "block");
    }
    
}

function refresh()
{
    $("form").submit();
}

function goback()
{
    history.back();
}