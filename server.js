
var express = require('express');
var app = express();

// serve up CSS/JS/ other assets like images
// this is our static file server
// if user loads http://localhost:3000/some-img.png
// this line of code makes it work.
app.use(express.static(__dirname + '/public'));

// if the user goes to the homepage (which is /)
// http://localhost:3000/ then render the basic "index.html"
app.get('/', function(req, res, next) {

  var jobs = [
    {
      company: {
        name: 'Accenture'
      },
      position: {
        opening: 'Analyst'
      },
      location: {
        city: 'San Francisco',
        state: 'CA'
      },
      image: {
        url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdNSRm__TnppakEwirugckAo6mccdj_gI3qZsBOUVsDnsHQtQW' 
      }
    },
    {
      company: {
        name: 'Johnson & Johnson'
      },
      position: {
        opening: 'Analyst'
      },
      location: {
        city: 'Philadelphia',
        state: 'PA'
      },
      image: {
        url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaKja2K0QQqjap9juaRZ9PwleLcmR2xsdBU4C13-OIXAgm9_BN' 
      }
    },
    {
      company: {
        name: 'Sincerely'
      },
      position: {
        opening: 'Marketing'
      },
      location: {
        city: 'San Francisco',
        state: 'CA'
      },
      image: {
        url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaKja2K0QQqjap9juaRZ9PwleLcmR2xsdBU4C13-OIXAgm9_BN' 
      },
    }
  ];

  // this is like a traffic cop.  telling ppl where 2 go.
  res.render('index', {
    jobs: jobs
  }); // {} = locals (variables)

});


// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.


// whenever a .html file gets loaded --
// think of it as an EJS file and bring/render the view
// the view is just the  variables implemented with HTML
// so the dynamic stuff gets rendered
app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');



app.listen(3000);
