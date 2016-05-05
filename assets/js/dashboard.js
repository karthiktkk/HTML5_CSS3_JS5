define(['jquery','bootstrap'],function($){


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
	var responseFunction = function(data, status, xhr ){
        alert("Hi "+xhr);
        $("#toPanelBody").html(JSON.stringify(data));
    };
    $.get('https://api.github.com/users/mralexgray/repos',responseFunction);

});

});

/*
{OAuth oauth_consumer_key="DC0sePOBbQ8bYdC8r4Smg",
oauth_signature_method="HMAC-SHA1",
oauth_timestamp="1458092695",
oauth_nonce="3388829074",
oauth_version="1.0",
oauth_token="189560623-nnNaXNmM5hIfVmKZPdQrToCk66GNR04P5JygY1eB",
oauth_signature="7GNozBSRGYXJ89czIGyUUzt3nnc%3D"} */