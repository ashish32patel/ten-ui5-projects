sap.ui.define(
    ["com/akp/tenUI5Projects/controller/BaseController", "sap/ui/model/json/JSONModel"],

    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.akp.tenUI5Projects.controller.countdown.Countdown", {
            onInit: function () {
                let myTimer = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };

                let oTimer = new JSONModel(myTimer);

                // @ts-ignore
                this.getView().setModel(oTimer, "timerModel");
                // @ts-ignore
                this.calculateTime();
                // @ts-ignore
                setInterval(this.calculateTime.bind(this), 1000);
            },

            calculateTime: function () {
                let targetDate = new Date("November 21, 2022");
                let currentDate = new Date();
                let diff = targetDate.getTime() - currentDate.getTime();

                let myTimer = this.getView().getModel("timerModel").getData();

                myTimer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
                myTimer.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                myTimer.minutes = Math.floor((diff / (1000 * 60)) % 60);
                myTimer.seconds = Math.floor((diff / 1000) % 60);

                this.getView().getModel("timerModel").setData(myTimer);
            },
        });
    }
);
