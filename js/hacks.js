$(document.body).on('click', '.hack', function(e) {
  var hack = $(e.currentTarget).data('hack');

  switch (hack) {
    case 'miley': return new Miley();
    case 'goats': return new Goats();
    case 'zilla': return new Zilla();
  }
});

createjs.Sound.registerSound('mp3/hacks/miley.mp3', 'miley');
createjs.Sound.registerSound('mp3/hacks/goats.mp3', 'goats');
createjs.Sound.registerSound('mp3/hacks/zilla.mp3', 'zilla');

/**
 * Miley
 */
function Miley() {
  var self = this;
  this.mileys = $('img');
  this.setup();
  this.playSound();
  setTimeout(function() {
    self.teardown();
  }, 8000);
}

Miley.prototype.setup = function() {
  var self = this;
  this.mileys.each(function() {
    var image = $(this);

    if (image.data('src')) {
      return;
    }

    image.data('src', image.attr('width'));
    image.data('src', image.attr('height'));
    image.data('src', image.attr('src'));

    image.attr('width', image.width());
    image.attr('height', image.height());
    image.attr('src', self.getImage());
  });

  this.wreckingBall = $('<img>')
    .attr('src', '/images/hacks/miley/00.gif')
    .css({
      position: 'fixed',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, 0)'
    })
    .appendTo(document.body);
};

Miley.prototype.playSound = function() {
  createjs.Sound.play('miley');
};

Miley.prototype.teardown = function() {
  this.mileys.each(function() {
    var image = $(this);

    image.attr('width', image.data('width'));
    image.attr('height', image.data('height'));
    image.attr('src', image.data('src'));

    image.removeData('width');
    image.removeData('height');
    image.removeData('src');
  });

  this.wreckingBall.remove();
};

Miley.prototype.counter = 0;

Miley.prototype.images = [
  '/images/hacks/miley/01.gif',
  '/images/hacks/miley/02.gif',
  '/images/hacks/miley/03.gif',
  '/images/hacks/miley/04.gif'
];

Miley.prototype.getImage = function() {
  return this.images[this.counter++ % this.images.length];
};

/**
 * Goats
 */
function Goats() {
  var self = this;
  this.setup();
  this.playSound();
  setTimeout(function() {
    self.teardown();
  }, 8000);
}

Goats.prototype.images = [
  { src: '/images/hacks/goats/01.gif', x: 0.25, y: 0.25 },
  { src: '/images/hacks/goats/02.gif', x: 0.75, y: 0.25 },
  { src: '/images/hacks/goats/03.gif', x: 0.25, y: 0.75 },
  { src: '/images/hacks/goats/04.gif', x: 0.75, y: 0.75 }
];

Goats.prototype.setup = function() {
  this.goats = this.images.map(function(image) {
    return $('<img>')
      .attr('src', image.src)
      .css({
        position: 'fixed',
        width: 500,
        height: 281,
        top: window.innerHeight * image.y,
        left: window.innerWidth * image.x,
        transform: 'translate(-50%, -50%)'
      })
      .appendTo(document.body);
  });
};

Goats.prototype.playSound = function() {
  createjs.Sound.play('goats');
};

Goats.prototype.teardown = function() {
  this.goats.forEach(function(goat) {
    goat.remove();
  });
};

/**
 * Zilla
 */

function Zilla() {
  var self = this;
  this.setup();
  this.playSound();
  setTimeout(function() {
    self.teardown();
  }, 15000);
}

Zilla.prototype.setup = function() {
  this.zilla = $('<img>')
    .attr('src', '/images/hacks/zilla/00.gif')
    .css({
      position: 'fixed',
      top: '50%',
      left: '50%',
      maxWidth: '100%',
      maxHeight: '100%',
      width: 'auto',
      height: 'auto',
      transform: 'translate(-50%, -50%)'
    })
    .appendTo(document.body);
};

Zilla.prototype.playSound = function() {
  createjs.Sound.play('zilla');
};

Zilla.prototype.teardown = function() {
  this.zilla.remove();
};
