$('document').ready(() => {
  $('#cart').click(() => {
    $('#cartMenu').show();
  })
  $('#account').click(() => {
    $('#accountMenu').show();
  })
  $('#help').click(() => {
    $('#helpMenu').show();
  })
  $('.dropdown-menu').mouseleave(() => {
    $('.dropdown-menu').hide();
  })
})