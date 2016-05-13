
require.config({
	deps: [ 'require-css' ],
	paths:{
		'require-css': 'assets/js/lib/css.min',
		 jquery: 'assets/js/lib/jquery-2.2.3',
		 bootstrap: 'lib/bootstrap'
	},
	
	map: { '*': { 'css': 'assets/js/lib/'}}
	
});  