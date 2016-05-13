/* 
requirejs.config({
	baseUrl: 'assets/js',
	shim: { 'bootstrap': { deps: ['jquery']}},

	paths:{
		jquery: 'lib/jquery-2.2.3',
		bootstrap: 'lib/bootstrap',
		datatables:'lib/jquery.dataTables.min',
		cash:'cash',
		dashboard: 'dashboard',
		payment:'payment',
	}
	
}); */

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

/*

'datatables-css':'../../css/lib/jquery.dataTables.min',


requirejs.config({
	shim: { 'bs-js': { deps: ['jquery']}},
	deps: [ 'require-css' ],
	paths:{
		'require-css': '../lib/css.min',
		'bootstrap': '../../css/lib/bootstrap.min',
		jquery: '../lib/jquery-2.2.3',
		'bs-js': '../lib/bootstrap',
		'datatables.net':'../lib/jquery.dataTables.min',
		'datatables-bs': '../lib/dataTables.bootstrap.min',
		dashboard: '../dashboard',
	}
	
});  
	
});  */