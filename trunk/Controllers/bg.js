YallakoraBGObject=function(){
    var yallakoraBG={
        getMatchList:function(data,handler){
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
            var out="";//?tourid=235&teamId=1468
            for(i=0;i<data.length;i++){
                out+="<h5>";
                out+='<a href="'+yallakoraStaticData.LeagueURL+data[i].ID+'" target="_blank">';
                out+='<span class="f-r league">';
                out+=data[i].Name;
                out+='</span>';
                out+='</a>';
                out+='<img alt="" class="f-r" src="'+data[i].TourLogo+'"/>';
                out+="</h5>";
                out+='<div class="MatchesList"><div class="list">';
                var matches=data[i].matchObj;
                for(j=0;j<matches.length;j++){
                    out+='<div class="teamA f-r ta-l">';
                    out+='<a href="'+yallakoraStaticData.TeamUrl+"?tourid="+data[i].ID+"&teamId="+matches[j].Team1+'" target="_blank">';
                    image=data[i].TourLogo;
                    out+='<img alt="" src="'+yallakoraStaticData.TeamLogoURL+matches[j].Team1Thumb+'" width="25" height="25" class="feature" srcsrc="'+image+'" onerror="yallakoraPopup.onErrorImageLoad(this)">';
                    out+=matches[j].Team1Name;
                    out+="</a></div>";
                    out+='<div class="result f-r">';
                    out+=matches[j].result;
                    out+='</div>';

                    out+='<div class="teamB f">';
                    out+='<a href="'+yallakoraStaticData.TeamUrl+"?tourid="+data[i].ID+"&teamId="+matches[j].Team2+'" target="_blank">';
                    out+='<img alt="" src="'+yallakoraStaticData.TeamLogoURL+matches[j].Team2Thumb+'" width="25" height="25" class="feature" srcsrc="'+image+'" onerror="yallakoraPopup.onErrorImageLoad(this)">';
                    out+=matches[j].Team2Name
                    out+="</a></div>";
                    out+='<div class="clearfix"></div>';
                    
                    out+='<div class="MatcheInfo">';
                    if(matches[j].status!=""){
                        out+='<div class="MatcheInfo_icons">';
                        out+='<img src="images/lliveicon.gif"/>';
                        out+='</div>';
                    }

                    out+='<div class="Matche_statues">';
                    out+='<a href="'+yallakoraStaticData.MatchDetail+matches[j].ID+"&tourid="+data[i].ID+'" target="_blank" >التفاصيل</a>';//25680
                    out+='</div>';
                    out+='<div class="clearfix"></div>';
                    
                    out+='</div>';
                }
                out+="</div></div>"
            }
            handler(out);
        },
        getData:function(data,handler){
            yallakoraBG.getMatchList(data, function(matchList){
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
