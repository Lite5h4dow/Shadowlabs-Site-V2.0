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
});
