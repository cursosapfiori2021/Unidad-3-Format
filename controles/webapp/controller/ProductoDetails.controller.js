sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    return Controller.extend("ns.controles.controller.ProductoDetails", {

        onInit: function () {

        },


        onShowTabMedidas: function () {
            var oJSONModelConfig = this.getView().getModel("jsonModelConfig");
            oJSONModelConfig.setProperty("/visibleTabMedidas", true);
            oJSONModelConfig.setProperty("/visiblebtnShowTabMedidas", false);
            oJSONModelConfig.setProperty("/visiblebtnHideTabMedidas", true);
          

        },

        onHideTabMedidas: function (){
            var oJSONModelConfig = this.getView().getModel("jsonModelConfig");
            oJSONModelConfig.setProperty("/visibleTabMedidas", false);
            oJSONModelConfig.setProperty("/visiblebtnShowTabMedidas",true);
            oJSONModelConfig.setProperty("/visiblebtnHideTabMedidas", false);
          
        },
    });
}); 