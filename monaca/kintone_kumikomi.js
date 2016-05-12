(function() {

    "use strict";

    var myApp = angular.module('myApp', []);

    myApp.controller("myController", function($scope, $http) {
        alert("angular ON!");

        $scope.pageSW = 'd';

        $scope.FormShow = function() {
            alert($scope.pageSW+" to a");
            $scope.pageSW = 'a';
        };
        $scope.SrialFormShow = function() {
            alert($scope.pageSW+" to b");
            $scope.pageSW = 'b';
        };
        $scope.QRReaderShow = function() {
            alert($scope.pageSW+" to c");
            $scope.pageSW = 'c';
        };
    });

    // 一覧画面を開いた時に実行します
    function indexShow(event) {
        htmlSet();
    }

    // 一覧画面を開いた時に実行します
    function htmlSet(event) {
        var button = $('<button style="margin-left: 5px">');
        var angular=$('<div ng-app="myApp"><div ng-controller="myController"><button ng-click="FormShow()">Create QR from Form</button><button ng-click="SrialFormShow()">Create QR from Srial No.</button><button ng-click="QRReaderShow()">QRcode sample</button><!--1変数SrialFormSWのtrue／falseに応じてフォームを表示／非表示--><div ng-show="pageSW=='+"'a'"+'"' +'style="border:solid 1px #000; width: 400px; padding: 10px;"><hr /><table border=1><tr><th>Srial No.</th><th><input placeholder="00000000" type="text" ng-model="srial"></th></tr><tr><th>Item name</th><th><input placeholder="item name" type="text" ng-model="itemName"></th></tr></table>    <button ng-click="CheckForm()">QRcode Create</button>  </div>  <!--1変数SrialFormSWのtrue／falseに応じてフォームを表示／非表示--><div ng-show="pageSW =='+"'b'"+'"' +' style="border:solid 1px #000; width: 400px; padding: 10px;">    <table border=1>      <tr><th>Srial No.</th><th><input placeholder="00000000" type="text" ng-model="Srial"></th></tr>    </table>    <button ng-click="CheckSrialForm()">QRcode Create</button>  </div>  <!--1変数QRReaderShowのtrue／falseに応じてフォームを表示／非表示--><div ng-show="pageSW=='+"'c'"+'"' +' style="border:solid 1px #000; width: 400px; padding: 10px;">    <div id="QRarea"></div>    <button ng-click="SaveQR()">QRcode Reader</button>  </div></div></div>');
        button.prop('id', 'button');
        button.html('QR繧ｳ繝ｼ繝�');

        $(kintone.app.getHeaderSpaceElement()).append(button);
        $(kintone.app.getHeaderSpaceElement()).append(angular);
        $('#button').bind('click', jump);
        return event;
    }

    function jump() {
        document.location = 'http://zxing.appspot.com/scan?ret=https://bfg0d.cybozu.com/k/m/125/edit%3Fcode%3D%7BCODE%7D';
    }


    // 一覧画面が開いた時のイベント
    kintone.events.on('app.record.index.show', indexShow);
})();

$(document).ready(function($){
    $('#QRarea').empty();
    $('#QRarea').qrcode({
        width   : 200,
        height  : 200,
        text : 'itemname1:itemcode:itemname2:itemcode'
    });
});