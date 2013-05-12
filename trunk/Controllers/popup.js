var background = chrome.extension.getBackgroundPage();
YallakoraPopupObject = function() {
    var yallakoraPopup = {
        addDays: function() {
            var out = '<option value="">اختر اليوم</option>';
            days = background.yallakoraStaticData.Days;
            for (i = 0; i < days.length; i++) {
                out += '<option value="' + days[i].value + '">' + days[i].name + '</option>';
            }
            return out;
        },
        addDates: function() {
            var out = '';
            dates = background.yallakoraStaticData.Dates;
            for (i = 0; i < dates.length; i++) {
                out += '<option value="' + dates[i].value + '">' + dates[i].name + '</option>';
            }
            return out;
        },
        setOnreadyActions: function() {
            $("img.imgimgimg").bind("error", function() {
                console.log("Asdasd");
//                this.onerror = "";
//                $(this).attr("src", "images/yallakora.png");
            });

            $("#days").html(yallakoraPopup.addDays());
            $("#dates").html(yallakoraPopup.addDates());
            $("#days").change(function() {
                if ($(this).val()) {
                    yallakoraPopup.getData()
                }
            });
            $("#dates").change(function() {
                if ($("#days").val()) {
                    yallakoraPopup.getData()
                }
            });

        },
        getData: function() {
            data = {
                'gmt': $("#dates").val(),
                'lang': '1',
                'tab': $("#days").val(),
                'tourid': '0',
                'RegionId': '1'
            }
            background.yallakoraBG.getData(data, function(response) {
                $("#result").html(response);
                $("img").error(function() {
                    yallakoraPopup.onErrorImageLoad($(this));
                });
            });
        }, onErrorImageLoad: function(element) {
            element.attr("src", "images/yallakora.png");
        }
    };
    $(function() {

        yallakoraPopup.setOnreadyActions();
    });
    return yallakoraPopup;
}
var yallakoraPopup = new YallakoraPopupObject();
