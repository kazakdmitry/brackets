module.exports = function check(str, bracketsConfig) {
	regexp = /0-9/;
	t = Boolean('str'.match(regexp));
	if (t){
		return false;
	}
	arr = {
		'(':1,
		')': -1,
		'[': 2,
		']': -2,
		'{': 3,
		'}':-3
		}
	var s =0;
	arr1=[];
	
	for (var i=0; i<str.length;i++){
		str1='';
		s += arr[str[i]];
		if (s<0){
			return false;
		}
		if ((str[i]=='|')&&(str[i+1])=='|'){
			str1 = str.substring( i, i+2);
			str = str.replace(str1,'');
			
			return check(str);
		}
		if ((s == 0) && (arr[str[i]]<0)){
			
			str1 = str.substring( i-1, i+1);
			str = str.replace(str1,'');
			
			return check(str);
		}
		else if (s!=0){
			s = arr[str[i]];
		}
		
	}
	if (s==0){
		return true;
		
	}
	else {
		return false;
	}
}
