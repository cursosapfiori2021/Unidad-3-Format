sap.ui.define([], function () {

    function DateFormat(date) {
      
        if (date) {

            var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({ 
                pattern: "yyyy/MM/dd" , 
                "UTC": true });
            var dateNew = new Date(date);
            var dateNowFormat = dateFormat.format(dateNew) ;
            return   dateNowFormat ;
        }
    }

    return {
        DateFormat: DateFormat
    }
});