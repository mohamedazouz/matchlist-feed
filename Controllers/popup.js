var background=chrome.extension.getBackgroundPage();
YallakoraPopupObject=function(){
    var yallakoraPopup={
        addDays:function(){
            var out='<option value="">Choose Day</option>';
            days=background.yallakoraStaticData.Days;
            for(i=0;i<days.length;i++){
                out+='<option value="'+days[i].value+'">'+days[i].name+'</option>';
            }
            return out;
        },
        setOnreadyActions:function(){
            $("#days").html(yallakoraPopup.addDays());
            $("#days").change(function(){
                if($(this).val()){
                    background.yallakoraBG.getData($(this).val(),function(response){
                        $("#result").html(response);
                    });
                }
            });
        }
    };
    $(function(){
        yallakoraPopup.setOnreadyActions();
    });
    return yallakoraPopup;
}
var yallakoraPopup=new YallakoraPopupObject();

