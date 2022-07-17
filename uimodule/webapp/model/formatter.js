sap.ui.define([], function () {
    "use strict";
    return {
        getDateState: function (input) {
            let currentDate = new Date().setHours(0, 0, 0, 0);
            let inputDate = new Date(input).setHours(0, 0, 0, 0);

            if (inputDate > currentDate) {
                // future
                return "Warning";
            } else if (inputDate < currentDate) {
                // past
                return "Success";
            } else {
                // today
                return "Error";
            }
        },

        getDateFormat: function(inputDate) {
            return new Date(inputDate) ;
        }

    };
});
