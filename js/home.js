$(document).ready(function(){
  $('#modsDD').popup({
  inline     : true,
  hoverable  : true,
  position   : 'bottom center',
  delay: {
    show: 300,
    hide: 800
  },
  transition :'fade down',
  });
  $('.ui.sticky').sticky({
    context: '#page'
  });
  $('#sidebar-toggle').click(function(){
    $('.ui.sidebar').sidebar('toggle');
  });
  $('#contact-button').click(function(){
    $('#contact-modal').modal({
      transition : 'fade right',
      autofocus  : 'true',
    }).modal('show');
  });
  $('#sidebar-toggle').popup({
    on: 'hover',
    transition: 'drop',
    position: 'right center'
  });
  $('#contact-button').popup({
    on: 'hover',
    transition: 'drop',
    position: 'left center'
  });
});
