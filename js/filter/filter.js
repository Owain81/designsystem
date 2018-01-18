/* Icons filter */

function filter_icons() {
  var input, filter, ul, t, i, j, icons, section_match, global_match;
  input = document.getElementById('icons-filter');
  filter = input.value.toUpperCase();
  ul = $('ul.list');
  global_match = false;

  for (i = 0; i < ul.length; i++) {

    icons = $(ul[i]).children('li.icon');
    section_match = false;

    for (j = 0; j < icons.length; j++) {

      t = $(icons[j]).children('.icon__text').text();

      if (t.toUpperCase().indexOf(filter) > -1) {
        $(icons[j]).show();
        if (!section_match) section_match = true;
        if (!global_match)  global_match = true;
      } else {
        $(icons[j]).hide();
      }
    }
     
    if (!section_match) {
      $(ul[i]).parent().parent().hide();
    } else {
      $(ul[i]).parent().parent().show();
    }
  }

  if (!global_match) {
    $('.icon--no-result').show();
  } else {
    $('.icon--no-result').hide();
  }
}

$('document').ready(function() {
  $('#icons-filter').on('input', function() {
    filter_icons();
  });
});