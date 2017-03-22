angular
    .module('ngSamples')
    .controller('requestController', function ($scope, $http, $log) {

        // setting message logic to false not display any message by default
        $scope.emailSent = false;
        // scope binding the form data
        var data = ({
            myName: $scope.myName,
            myEmail: $scope.myEmail,
            myUrl: $scope.myUrl,
            myDescription: $scope.myDescription
        });

        //The send button will call this method to make an API to a nodeJS app.
        $scope.sendMail = function () {
            // Simple POST request example (passing data) :
            $http.post('https://t-daniel-backend.eu-gb.mybluemix.net/contact-form', data)
                .then(function successCallback(data, config) {
                // this callback will be called asynchronously
                // when the response is available
                $log.log('Email Sent with ');
                $scope.emailSent = true;

                // Injecting success into the array of alerts
                $scope.alerts = [ {type: 'success', msg: ''} ];
                $scope.alerts[0].msg = 'Thanks, ' + $scope.myName + ' we have got your request, and we will be in touch. ';

                // After user sent the email, then clear the values to be empty
                $scope.myName = "";
                $scope.myEmail = "";
                $scope.myUrl = "";
                $scope.myDescription = "";

            }, function errorCallback(data, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $log.log("Error occurred: " + '' + config);
                $scope.emailSent = true;

                // if there was an error, then display this message
                $scope.alerts = [
                    {type: 'danger', msg: ''}
                ];
                $scope.alerts[0].msg = 'Oops there was a problem sending your request, please contact Twana Daniel at twanaazi@ie.ibm.com';
            });
        };



        // Remove alert message area
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

    });
