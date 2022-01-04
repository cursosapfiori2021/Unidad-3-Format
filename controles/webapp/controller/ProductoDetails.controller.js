sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ns/controles/utils/Formatter"

], function (Controller , Formatter) {
    
    return Controller.extend("ns.controles.controller.ProductoDetails", {

        Formatter:Formatter,


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