YallakoraProxyObject=function(){
    var yallakoraProxy={
        getDataFeed:function(data,handler){
            $.ajax(
            {
                url:yallakoraStaticData.MatchListURL,
                data: JSON.stringify(data),
                type: 'POST',
                processData: true,
                cache: false,
                contentType: 'application/json; charset=utf-8',
                timeout: 5000,
                dataType: 'json',
                success: function(response){
                    handler(response);
                }
            })
        }
    };
    $(function(){
        //init

        })
    return yallakoraProxy;
}


var yallakoraProxy=new YallakoraProxyObject();



//data sample
[{
    "d":[{
        "__type":"YallakoraDAL.YKTour",
        "ID":252,
        "TourID":0,
        "Name":"كأس ملك اسبانيا",
        "LangID":0,
        "TourType":0,
        "Description":null,
        "Logo":null,
        "TourCode":null,
        "matchObj":[{
            "ID":25680,
            "StaduimID":0,
            "TourSeasonId":252,
            "TourSeasonGroupId":0,
            "TourSeasonRoundId":0,
            "Team1":392,
            "Team2":2386,
            "Date":"\/Date(1326830400000)\/",
            "Team1Score":3,
            "Team2Score":2,
            "Staduim":null,
            "HasDetails":false,
            "Team1Name":"اسبانيول",
            "Team2Name":"ميرانديس",
            "LangID":0,
            "Team1Logo":"Espanyol6-10-2010-21-8-5.gif",
            "Team2Logo":"Mirandes7024-12-2011-17-8-16.png",
            "Team1Thumb":"25_espanyol17-10-2010-14-45-21.gif",
            "Team2Thumb":"Mirandes2524-12-2011-17-8-55.png",
            "Team1Coach":null,
            "Team2Coach":null,
            "CityName":null,
            "GroupName":null,
            "TourSeasonName":null,
            "PredictTeam1WinCount":0,
            "PredictTeam1LoseCount":0,
            "PredictDrawCount":0,
            "TourSeasonRoundName":null,
            "TourSeasonGroupName":null,
            "isMinbyMin":false,
            "isPenalty":false,
            "Team1Penalty":0,
            "Team2Penalty":0,
            "ISActive1":false,
            "ISActive2":false,
            "TimeDiff":0,
            "Team1Scorers":null,
            "Team2Scorers":null,
            "TimeStatus":0,
            "TVChannelsString":null,
            "AnalysisId":0,
            "tourObj":null,
            "result":"2-3",
            "status":"",
            "analysisIcon":"",
            "tvIcon":"",
            "PredictionIcon":"",
            "MinbyMinIcon":"",
            "GMT":null,
            "DetailsLink":""
        }],
        "linkTitle":null,
        "IsStanding":0,
        "TourLogo":"http://www.yallakora.com/pictures/ChampLogos/spanishcup.png",
        "ForumsName":null,
        "ForumsURL":null
    }]
    }]