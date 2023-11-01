var number = randomNum();
console.log(number)


$('.form').on('submit', function(e){
  e.preventDefault();
  var usernum = ($('.user-num').val()).toString();
  if (usernum.length>4 || usernum.length<4) {
    showError();
  }else{
    var cows = fijas(usernum)
    var bulls = picas(usernum)-cows;
    $('table').append('<tr><td>' + usernum + '</td><td>'+ bulls +'</td><td>'+ cows +'</td></tr>')
    $('.user-num').val('');
  }
  if (cows === 4) {
    $('.win').show();
  }
})

$('input').on('keyup', function(e){
    var key = e.which;
  if (key !=13) {
    $('span').removeClass('error');
    $('input').removeClass('error');
  }
})

//functions
function randomNum(){
  return shuffle( "0123456789".split('') ).join('').substring(0,4);
}

function shuffle(n){
    for(var j, x, i = n.length; i; j = Math.floor(Math.random() * i), x = n[--i], n[i] = n[j], n[j] = x);
    return n;
}
function fijas(num) {
  var fija = 0;
  for (var i = 0; i < num.length; i++) {
    if (num[i]===number[i]) {
       fija ++;
    }
  }
  return fija;
}

function picas(num) {
  var pica = 0;
  for (var i = 0; i < num.length; i++) {
    for (var j = 0; j < num.length; j++) {
      if (num[i]===number[j]) {
        pica ++;
      }
    }
  }
  return pica;
}

function showError() {
  $('span').addClass('error');
  $('input').addClass('error');
}
