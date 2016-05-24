var page = require('webpage').create();
page.open('http://github.com', function() {
				page.render('gethub.png');
				phantom.exit();
});
