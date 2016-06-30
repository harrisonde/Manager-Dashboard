angular
    .module('starter',[])
    .service('Login', function ($http) {
        this.getAppKey = function () {
            /*var data = $.param({
                EMAIL_ID: "reginald.brown@hpe.com",
                SCOPE: "ZohoCRM/crmapi",
                PASSWORD: "b5X^H9vWO^k9PIx",
                DISPLAY_NAME: "Manager Dashboard App"
            });

            $http.post('https://accounts.zoho.com/apiauthtoken/nb/create', data).then(function (respponse) {
                return response;
            });*/

            console.log("Hello");
        }
});