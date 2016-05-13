//define(['jquery'],function($){
define(['jquery','payment'],function ($,payment1) {
	return {
	
	cashinit : function(){
		console.log("Cash Module init method");
	},
	cashcallPayment : function(){
			console.log("cash Module is about to call Payment Module.... ");
			require('payment').paymentCallfromCash();	

	}
	};


});