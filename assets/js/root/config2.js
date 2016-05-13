requirejs.config({
	shim: { 'bs-js': { deps: ['jquery']}},
	deps: [ 'require-css' ],
	paths:{
		'require-css': '../lib/css.min',
		'bootstrap': '../../css/lib/bootstrap.min',
		'datatables-css': '../../css/lib/dataTables.bootstrap.min',
		jquery: '../lib/jquery-2.2.3',
		'bs-js': '../lib/bootstrap',
		'datatables.net':'../lib/jquery.dataTables.min',
		'datatables-bs': ['../lib/dataTables.bootstrap.min'],		
		dashboard: '../dashboard',
	}
	
});  
