// Global variables
var video_block_overlay = false,
  video_embed_item = $('.embed-responsive-item'),
  video_embed_play = ('.video-play'),
  video_embed_pause = ('.video-pause');

// Accordion menu in navigation sidebar

$('.sidebar-nav li.dropdown a').click(function () {
  "use strict";
  if ($(this).parent().hasClass('open')) {
    $(this).parent().removeClass('open');
    $(this).next().velocity('slideUp', {
      duration: 230,
      easing: 'easeInOutCubic'
    });
  } else {
    $(this).parent().addClass('open');
    $(this).next().velocity('slideDown', {
      duration: 230,
      easing: 'easeInOutCubic'
    });
  }
});

// Malihu jQuery custom content scroller config

$('#sidebar-wrapper').mCustomScrollbar({
  scrollInertia: 150
});

// Component size switcher

$('.component-preview-nav-tabs a').click(function () {
  "use strict";
  var size = $(this).attr('href'),
    iframes = document.querySelectorAll('iframe');

  setTimeout(function () {
    Array.prototype.forEach.call(iframes, resizeIframe);
  });

  function resizeIframe(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.offsetHeight + 'px';
  }

  if (size === '#small') {
    $('.component-preview .tab-content').css('min-width', '480px');
  } else if (size === '#medium') {
    $('.component-preview .tab-content').css('min-width', '768px');
  } else if (size === '#large') {
    $('.component-preview .tab-content').css('min-width', '1200px');
  }
});

// Fix for Chrome Mobile Bug related to height: 100vh

function stabilizeVH() {
  var HEIGHT_CHANGE_TOLERANCE = 100; // Approximately URL bar height in Chrome on tablet

  var jumbotron = $(this);
  var viewportHeight = $(window).height();

  $(window).resize(function () {
    if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
      viewportHeight = $(window).height();
      update();
    }
  });

  function update() {
    jumbotron.css('height', viewportHeight + 'px');
  }

  update();
}

$('.splash').each(stabilizeVH);

// Clipboard.js

function setTooltip(btn, message) {
  "use strict";
  intervalId = null;
  setTimeout(function () {
    $(btn).find('.copy-message').text(message).addClass('show');
  }, 100);
}

var intervalId = null;

function hideTooltip(btn) {
  "use strict";
  if (intervalId !== null) {
    clearTimeout(intervalId);
  }
  intervalId = setTimeout(function () {
    $(btn).find('.copy-message').removeClass('show');
    intervalId = null;
  }, 1500);
}

var clipboard = new Clipboard('.copy-clipboard', {
  target: function (trigger) {
    return trigger.nextElementSibling;
  }
});

clipboard.on('success', function (e) {
  "use strict";
  setTooltip(e.trigger, 'Copied!');
  hideTooltip(e.trigger);
  e.clearSelection();
});

clipboard.on('error', function (e) {
  "use strict";
  setTooltip(e.trigger, 'Failed!');
  hideTooltip(e.trigger);
  e.clearSelection();
});

// Show more/less code block
$(window).load(function() {
  var codeBlockfullHeight = $('.code-block').outerHeight(),
    codeBlock = $('.code-block');

  if (codeBlockfullHeight > 441) {
    codeBlock.addClass('resizable');
    codeBlock.css({
      'max-height': '441px'
    });
  }

  $('.code-block .show-more').click(function () {
    "use strict";
    var $this = $(this).parent();

    if ($this.hasClass('open')) {
      $this.removeClass('open');
      $this.velocity({
        'max-height': '441px'
      }, {
        duration: 230,
        easing: 'easeInOutCubic'
      });
    } else {
      $this.addClass('open');
      $this.velocity({
        'max-height': codeBlockfullHeight + 5
      }, {
        duration: 230,
        easing: 'easeInOutCubic'
      });
    }
  });
});

// Navigation within content (table of contents)
function tableOfContents(pageTab) {
  var ToC =
    '<div class="table-of-contents__wrapper"><h4>Contents</h4>' +
    '<ul>';

  var newLine, el, title, link,
      pageTabSection = $('.tab-pane#' + pageTab + ' h2[id]'),
      tocElements;

  if (pageTab) {
    tocElements = pageTabSection;
  } else {
    tocElements = $('main h2[id]');
  }

  tocElements.each(function () {
    "use strict";
    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    newLine =
      "<li>" +
      "<a href='" + link + "'>" +
      title +
      "</a>" +
      "</li>";

    ToC += newLine;

  });

  ToC +=
    "</ul>";

  if (pageTab && $('.tab-pane#' + pageTab + ' h2').length > 1) {
    $( '#' + pageTab + " .table-of-contents").prepend(ToC);
  }

  if (pageTab == null) {
    $(".table-of-contents").prepend(ToC);
  }
};

$(document).ready(function() {
  if ($('.main h2').length > 1 && !$('header').hasClass('tabs-in')) {
    tableOfContents();
  };
  if ($('header').hasClass('tabs-in')) {
    $('.tab-pane').each(function(){
      var tabId = $(this).attr('id');
      tableOfContents(tabId);
    });
  }
});

// Sticky header

function stickyHeader() {
  "use strict";
  var tabsTopOffset,
      tabs = false,
      headerHeight = $('header').outerHeight(),
      search = $('.search'),
      headerWithTabs = $('header.tabs-in'),
      searchTopOffset = 52;

  if ($('header').hasClass('tabs-in')) {
    tabs = true;
    tabsTopOffset = $('header .nav-tabs').position().top + 17;
  }

  if ($('body').hasClass('page--icon') && tabs == false ) {
    search.addClass('search--transition-left');
  }

  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (tabs) {
      if (st > tabsTopOffset / 2) {
        headerWithTabs.css('top', '-' + tabsTopOffset + 'px');
        search.css('top', searchTopOffset + 'px');
      } else {
        headerWithTabs.css('top', '0px');
        search.css('top', headerHeight);
      }
    } else {
      if (st > headerHeight) {
        search.css('top', '0px');
      } else {
        search.css('top', headerHeight - st + 'px');
      }
    }
  });
};

$( document ).ready(function() {
  if (window.innerWidth > 1199) {
    if ($('header').hasClass('tabs-in') || $('body').hasClass('page--icon')) {
      $('main').addClass('sticky-header');
      stickyHeader();
    }
  }
  hamburgerColorWhenNoHeader();
});

// Change color of hamburger when scrolling below header

function hamburgerColorWhenNoHeader() {
  "use strict";
  var headerHeight = $('header').height();
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if ($('header').hasClass('sidebar--closed') && !$('header').hasClass('tabs-in') && window.innerWidth > 1199) {
      if (st > headerHeight) {
        $('.sidebar__hamburger').addClass('sidebar__hamburger--negative');
      } else {
        $('.sidebar__hamburger').removeClass('sidebar__hamburger--negative');
      }
    }
  });
}

// Custom video controls and playback

/// Click
video_embed_item.parent().click(function () {
  var video = $(this).children(video_embed_item).get(0);

  if (video.paused) {
    video.play();
    video_block_overlay = true;
    $(this).children().next(video_embed_play).fadeOut(150);
  } else {
    video.pause();
    video_block_overlay = false;
    $(this).children().next(video_embed_play).fadeIn(150);
    $(this).children().next(video_embed_pause).fadeOut(150);
  }

  return false;
});

/// Hover
video_embed_item.parent().mouseover(function () {
  var video = $(this).children(video_embed_item).get(0);

  if (video.paused) {
    // Do nothing
  } else {
    if (video_block_overlay) {
      // Do nothing
    } else {
      $(this).children().next(video_embed_pause).stop().fadeIn();

    }
  }
});

/// Mouse Out
video_embed_item.parent().mouseleave(function () {
  var video = $(this).children(video_embed_item).get(0);

  if (video.paused) {
    // Do nothing
  } else {
    $(this).children().next(video_embed_pause).stop().fadeOut(150);
    video_block_overlay = false;
  }
});

/// On video ended
video_embed_item.on('ended', function () {
  // Loop
  $(this).get(0).play();
});

// Search

var args = {
  valueNames: ['icon__text']
};

// Download icon with FileSaver.js

$('.download__link').click(function (e) {
  var iconPath = $(this).attr('data-href'),
    iconName = $(this).attr('data-icon-name');

  $('.svg-download').load(iconPath, function () {
    var iconCode = $('.svg-download').html();
    var blob = new Blob([iconCode], {
      type: "image/svg+xml;charset=utf-8"
    });
    saveAs(blob, iconName + ".svg");
  });
});

// Detect touch event

function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers
    ||
    navigator.maxTouchPoints; // works on IE10/11 and Surface
};

if (is_touch_device()) {
  $('html').addClass('is-touch');
} else {
  $('html').removeClass('is-touch');
}

// ScrollTo

$('a.splash__down-link').click(function () {
  $('#home-content').velocity('scroll', {
    duration: 800,
    easing: 'easeInOutQuad'
  });
});

$('.table-of-contents a').click(function () {
  var anchor = $(this).attr('href'),
    header = $('header'),
    windowWidth = $(window).width(),
    offsetSize = -32;

  if (header.hasClass('tabs-in')) {
    offsetSize = -86;

    if (windowWidth < 1200) {
      offsetSize = -120;
    }
  }

  $('h2' + anchor).velocity('scroll', {
    duration: 800,
    easing: 'easeInOutQuad',
    offset: offsetSize
  });
});

// Tabs with hash in url

var hash = window.location.hash;
hash && $('header ul.nav a[href="' + hash + '"]').tab('show');

$('header .nav-tabs a').click(function (e) {
  $(this).tab('show');
  var scrollmem = $('body').scrollTop();
  window.location.hash = this.hash;
  $('html,body').scrollTop(scrollmem);
});


// Detect safari
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  $('html').addClass('safari');
}

// Get real image size. source: https://css-tricks.com/snippets/jquery/get-an-images-native-width/#comment-1111293
jQuery.fn.realSize = function() {
  var i = $(this.filter('img')).first();
  if (i) {
    if (!i.data('realSize')) {
      var _w = i.width(),
        _h = i.height();
      i.width('auto').height('auto');
      i.data('realSize', {
        width: i.width(),
        height: i.height()
      });
      i.width(_w).height(_h);
    }
    return i.data('realSize');
  }
  return undefined;
};
jQuery.fn.realWidth = function(options) {
  var rs = this.realSize();
  return rs ? rs.width : undefined;
};
jQuery.fn.realHeight = function(options) {
  var rs = this.realSize();
  return rs ? rs.height : undefined;
};

// Component page usage do-and-dont section: align image height to the tallest one in the row.

function alignHeight(elementClass) {
  var maxheight = 0;
  $(elementClass + '__section .odd').each(function(i, obj) {
    var image = $(elementClass + '__image'),
        oddHeight = $(this).find(image).height(),
        evenHeight = $(this).next().find(image).height();

    if (oddHeight > evenHeight) {
      maxheight = oddHeight
    } else {
      maxheight = evenHeight
    }

    $(this).find(image).height(maxheight);
    $(this).next().find(image).height(maxheight);
  });
};

function imgSize() {
  $('.do-and-dont__section img').each(function(i, obj) {
    var nWidth = $(this).realWidth(),
        nHeight = $(this).realHeight();
    $(this).attr({ height: nHeight, width: nWidth })
  });
};

$(window).load(function() {
  if ($('body').hasClass('page--component') && $(window).outerWidth() >= 576 ) {
    if ($('.tab-pane#usage').hasClass('active')) {
      alignHeight('.do-and-dont');
      imgSize();
    } else {
      $('.tab-pane#usage').css({
        'display':'block',
        'visibility':'hidden'
      });
      alignHeight('.do-and-dont');
      imgSize();
      $('.tab-pane#usage').removeAttr("style");
    }
  }
});
