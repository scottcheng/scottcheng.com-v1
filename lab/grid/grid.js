$(function() {
  var $layer = $('#grid-layer');

  var layerW = $layer.width();
  var layerH = $layer.height();

  var gridW = 50;
  var gridH = gridW;
  var gridCol = layerW / gridW;
  var gridRow = layerH / gridH;

  var isInCoord = function(r, c, arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      if (r === arr[i][0] && c === arr[i][1]) {
        return true;
      }
    }
    return false;
  };

  var isBright = (function() {
    var brightCoord = [
      // G
      [3, 5], [3, 6], [3, 7],
      [4, 4], [5, 4], [6, 4], [7, 4],
      [8, 5], [8, 6], [8, 7],
      [7, 8], [6, 8], [6, 7],

      // r
      // [6, 10],
      [7, 10], [8, 10],
      [6, 11],

      // i
      [4, 13],
      [6, 13], [7, 13], [8, 13],

      // d
      [6, 16], [7, 15], [8, 16],
      [7, 17], [6, 17], [5, 17], [4, 17], [3, 17]  // , [2, 17], [1, 17], [0, 17]
    ];
    return function(r, c) {
      return isInCoord(r, c, brightCoord);
    }
  })();

  var isBack = (function() {
    var backCoord = [
      // <-
      [12, 4], [11, 5], [13, 5],
      [12, 6], [12, 7], [12, 8]
    ];
    return function(r, c) {
      return isInCoord(r, c, backCoord)
    }
  })();

  // var colors = ['FD9028', 'FCE033', 'FFF84B', 'FCFE57', 'FFFF4E', 'FEFD71', '49B44C', '8FDB6A', '006F52', '44B060', '1B939C', 'CFF9F7', '44B1DC', '96E1FB', '3CAAEC', '018AC5', '72ACEB', '245CB5', '122587', '131383', '110072', 'FFFEFF', 'F9FDFD', 'FEFEFF', 'FFFFFF', 'FEFEFE', 'FEFEFE', 'FAFAFA', 'FCFCFC', 'FEFE9F', 'F6A1B2', 'F75895', 'F11D60', 'F63137', 'FD236C', 'FFFEFE', 'AE439B', 'A961B0', '3B0061', 'FD124E', 'F02314', 'F61E19', 'FB2F14', 'F9851E'];
  var colors = ['#F1E6D4', '#BA3D49', '#791F33', '#9F9694', '#E3E1DC'];

  for (var row = 0; row < gridRow + 1; row++) {
    var $row = $('<div />').addClass('grid-row');
    for (var col = 0; col < gridCol + 1; col++) {
      var $grid = $('<div />')
        .addClass('grid')
        .width(gridW)
        .height(gridH)
        .css('backgroundColor', colors[Math.floor(Math.random() * 5)]);
      if (isBright(row, col)) {
        $grid.addClass('bright');
      }
      if (isBack(row, col)) {
        $grid.addClass('bright');
        var $a = $('<a href="../" />').append($grid).appendTo($row);
      }
      else {
        $grid.appendTo($row);
      }
    }
    $row.appendTo($layer);
  }

});