$(document).ready(function(){

  // 一覧画面を開いた時に実行します
  function indexShow(event) {
    htmlSet();
  }

  // 一覧画面を開いた時に実行します
  function htmlSet(event) {
    var angular=$('<button id="FormShowA">Create QR from Form</button><button id="FormShowB">Read QR</button><button id="FormShowC">Sample</button><hr><div id="formA"  style="border:solid 1px #000; width: 400px; padding: 10px;">  <table border=1>    <tr><th>Srial No.</th><th><input name="srial" type="text" placeholder="00000000"></th></tr>    <tr><th>Item Name</th><th><input name="itemName" type="text" placeholder="item name"></th></tr>  </table>  <button id="buttonA">QRcode Creater</button>  <div id="zoneA">    <div id="QRarea"></div>    <a id="DownloadQR" href="#" download="image.png">SAVE QRcode</button>  </div></div><div id="formB"  style="border:solid 1px #000; width: 400px; padding: 10px;">  <form>    <input type="file" id="file" onchange="loadFile()"><br>  </form>  <p id="result_block">【読み込み結果】    <p id="result"></p>    <p id="info"></p>  </p>  <canvas id="qr-canvas"></canvas></div><div id="formC"  style="border:solid 1px #000; width: 400px; padding: 10px;">  <button id="buttonC">Sample</button></div>');
    $(kintone.app.getHeaderSpaceElement()).append(angular);
//initial set
    $('#formA').hide();
    $('#formB').hide();
    $('#formC').hide();

    $('#zoneA').hide();

//binding button and function
    //First-Menu elect button
    $('#FormShowA').bind('click', showA);
    $('#FormShowB').bind('click', showB);
    $('#FormShowC').bind('click', showC);

    //for A
    $('#buttonA').bind('click', formCheck);
    
    //for B
    $('#buttonB').bind('click', QRReader);

    return event;
  }

  function showA() {
    $('#formA').toggle();
    $('#formB').hide();
    $('#formC').hide();
  }
  function showB() {
    $('#formB').toggle();
    $('#formA').hide();
    $('#formC').hide();
  }
  function showC() {
    $('#formC').toggle();
    $('#formA').hide();
    $('#formB').hide();
  }

  function formCheck() {
    var srial = $('#formA [name=srial]').val();
    var itemName = $('#formA [name=itemName]').val();
    var codeData = srial +":"+itemName;

//    alert(codeData);

    $('#zoneA').show();
    
    $('#QRarea').empty();
    $('#QRarea').qrcode({
        width   : 200,
        height  : 200,
        text : codeData
    });

    alert("wey");
    var div = document.getElementById("QRarea");
    var cvs = document.getElementsByTagName("canvas")[0];
    var base64 = cvs.toDataURL('image/png');
    alert(base64);
    document.getElementById("DownloadQR").href = base64;
  }

  function QRReader() {
    alert("now developing ...")
  }

  // 一覧画面が開いた時のイベント
  kintone.events.on('app.record.index.show', indexShow);
});