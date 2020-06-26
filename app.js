function foo(a)
{
if(a=='square'){
	var square=document.getElementById('history').value;
	document.getElementById('result').value=square*square;
}else
if(a=='cube'){
	var cube=document.getElementById('history').value;
	document.getElementById('result').value=cube*cube*cube;
}else
if(a=='round'){
	var round=Math.round(document.getElementById('history').value);
	document.getElementById('result').value=round;
}else
if(a=='power'){
	var val=prompt("Enter number:");
	var pow=prompt("Enter power:");
	document.getElementById('result').value=Math.pow(val,pow);
}else







if(a=='sqrt'){
	var sq=Math.sqrt(document.getElementById('history').value);
	document.getElementById('result').value=sq;
}else	if(a=='sin'){
	var sin=Math.sin(document.getElementById('history').value);
	document.getElementById('result').value=sin;
}else
if(a=='cos'){
	var cos=Math.cos(document.getElementById('history').value);
	document.getElementById('result').value=cos;
}else
if(a=='tan'){
	var tan=Math.tan(document.getElementById('history').value);
	document.getElementById('result').value=tan;
}else
if(a=='asin'){
	var asin=Math.asin(document.getElementById('history').value);
	document.getElementById('result').value=asin;
}else
if(a=='acos'){
	var acos=Math.acos(document.getElementById('history').value);
	document.getElementById('result').value=acos;
}else
if(a=='atan'){
	var atan=Math.atan(document.getElementById('history').value);
	document.getElementById('result').value=atan;
}else
if(a=='cbrt'){

	var cb=Math.cbrt(document.getElementById('history').value);
	document.getElementById('result').value=cb;
}
else
if(a=='log'){

	var log=Math.log(document.getElementById('history').value);
	document.getElementById('result').value=log;
}
else
if(a=='e'){

	var e=Math.exp(document.getElementById('history').value);
	document.getElementById('result').value=e;
}
else
	if(a=='a')
	{
		var get=eval(document.getElementById('history').value);
		document.getElementById('result').value=get;
	

	}


	else

	 if(a=='c'){
var get=document.getElementById('history');
get.value="";
document.getElementById('result').value="";
	}



	else{
var his=document.getElementById('history');
var res=document.getElementById('result');
his.value +=a;}


}