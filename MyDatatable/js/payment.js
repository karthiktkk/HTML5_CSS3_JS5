/*
define(
module_id  #optional, 
[dependencies]  #optional, 
definition function  - function for instantiating the module or object
);
*/
//define(['jquery'],function($){
define(['jquery','cash'],function ( $,cash1 ) {
	var cash = require('cash');
		var my_module = {};
		my_module.paymentinit = function(){
			console.log("Payment Module Init Method.... ");
			cash.cashinit();
			cash.cashcallPayment();
		};
	
		my_module.paymentCallfromCash = function(){
		console.log("Cash Module is calling Payment Module.... ");
		};

		return my_module;
/* 	return {
	
	paymentinit : function(){
		console.log("Payment Module Init Method.... ");
		require(['cash'],function(cash){
			cash.cashinit();
			cash.cashcallPayment();
		});
	},
	
	paymentCallfromCash: function(){
		console.log("Cash Module is calling Payment Module.... ");
	}
	}; */

});