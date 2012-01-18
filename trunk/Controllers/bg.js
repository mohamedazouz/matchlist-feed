YallakoraBGObject=function(){
    var yallakoraBG={
        getMatchList:function(day,handler){
            data={
                'gmt': '1',
                'lang':'1',
                'tab':day,
                'tourid':'0',
                'RegionId':'1'
            }
            yallakoraProxy.getDataFeed(data,function(response){
                handler(response);
            });
        },
        prepareMatchToShow:function(response,handler){
            var data=response.matchObj;
            var out="";//?tourid=235&teamId=1468
            for(i=0;i<data.length;i++){
                out+="<tr>";
                out+='<td>';
                out+=data[i].Team1Name
                out+='</td>';
                out+='<td>';
                out+=data[i].Team2Name
                out+='</td>';
                out+="</tr>";
            }
            return out;
        },
        prepareDataToShow:function(response,handler){
            var data=response.d;
            var out="<table>";//?tourid=235&teamId=1468
            for(i=0;i<data.length;i++){
                out+="<th colspan='3'>"
                out+='<img src="'+data[i].TourLogo+'"/>'
                out+='<a href="'+yallakoraStaticData.LeagueURL+data[i].ID+'">';
                out+=data[i].Name;
                out+='<a href="">';
                out+="</th>";
                var matches=data[i].matchObj;
                for(j=0;j<matches.length;j++){
                    out+="<tr>";
                    out+='<td>';
                    out+='<img src="'+yallakoraStaticData.TeamLogoURL+matches[j].Team1Thumb+'"/>'
                    out+='<a href="'+yallakoraStaticData.TeamUrl+"?tourid="+data[i].ID+"&teamId="+matches[j].Team1+'">';
                    out+=matches[j].Team1Name
                    out+='<a href="">';
                    out+='</td>';
                    out+='<td>';
                    date=matches[j].Date;
                    date=date.substr(6);
                    date=date.substr(0,date.length-2);
                    d=new Date(parseInt(date));
                    now=new Date();
                    if(now>d.valueOf()){
                        out+=matches[j].Team1Score + " : " + matches[j].Team2Score;
                    }else{
                        out+=dateFormat(d, "HH:MM");
                    }
                    //out+=d.getHours() +":" +d.getMinutes();
                    out+='</td>';
                    out+='<td>';
                    out+='<img src="'+yallakoraStaticData.TeamLogoURL+matches[j].Team2Thumb+'"/>'
                    out+='<a href="'+yallakoraStaticData.TeamUrl+"?tourid="+data[i].ID+"&teamId="+matches[j].Team2+'">';
                    out+=matches[j].Team2Name
                    out+='<a href="">';
                    out+='</td>';
                    out+="</tr>";
                }
            }
            out+="</table>";
            handler(out);
        },
        getData:function(day,handler){
            yallakoraBG.getMatchList(day, function(matchList){
                yallakoraBG.prepareDataToShow(matchList,function(response){
                    handler(response);
                });
            })
        }
    };
    $(function(){
        //init
        
        })
    return yallakoraBG;
}


var yallakoraBG=new YallakoraBGObject();
