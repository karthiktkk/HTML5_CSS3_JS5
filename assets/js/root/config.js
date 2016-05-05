
requirejs.config({
	baseUrl: 'assets/js',
	shim: { 'bootstrap': { deps: ['jquery']}},
	paths:{
		jquery: 'lib/jquery-2.2.3',
		bootstrap: 'lib/bootstrap',
		dashboard: 'dashboard'
	}
	
});