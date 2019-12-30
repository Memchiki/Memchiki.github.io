var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [{
    path: '/about/',
    url: 'about.html',
  }, ],

});

var $$ = Dom7;

var mainView = app.views.create('.view-main');

$$('#generate').click(function() {
  updateMem();
})

function updateMem() {
  var rand = selfRandom(1,75);
  var str = '<img src="mems/mem_' + rand + '.jpg"></img>';
  document.getElementById('mem').innerHTML = str;
}

function selfRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

updateMem();