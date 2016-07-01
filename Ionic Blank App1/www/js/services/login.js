'use strict';

angular.module('starter.services',[])
    .factory('authenticationService', function ($http) {
      return {
        getToken: function () {
          var creds = {
            EMAIL_ID: "reginald.brown@hpe.com",
            SCOPE: "ZohoCRM/crmapi",
            PASSWORD: "b5X^H9vWO^k9PIx",
            DISPLAY_NAME: "Manager Dashboard App"
          };
          return $http({
            method: 'POST',
            url: 'https://accounts.zoho.com/apiauthtoken/nb/create',
            data: creds
          }).then(function success(response){
            return response;
          }, function error(response){
            return response;
          });
        }
      }
});