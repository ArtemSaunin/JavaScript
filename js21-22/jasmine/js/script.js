"use strict";
var app	= {
	pow: function(x, n, k) {
		if (k !== 0) k = k || 1000000000;
		if(!check(x,n,k)) return NaN;
		return fastPow(x, n, k);
  
	function fastPow(x, n, k){
		if (n == 0) return 1;
		if (n % 2) return x*sqr(fastPow(x, (n/2>>0), k)) % k;
		else return sqr(fastPow(x, (n/2>>0), k)) % k;
		function sqr(x){
		return x*x;
		};
	}

  function check(x, n, k){
	return ((+x >> 0)== x) && ((+n >> 0)== n) && ((+k >> 0) == k) 
			&& (x > 0) && (n > 0) && (k >0);
	}
}};	
	

	
  
  