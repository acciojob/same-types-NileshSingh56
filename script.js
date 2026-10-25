function isSameType(value1, value2) {
	if (Number.isNaN(value1)&&Number.isNaN(value2)) {
		return true;
	}else if (Number.isNaN(value1) || Number.isNaN(value2)) {
		return false;
	} 
	else{
		return typeof value1 === typeof value2;
	}
  //your js code hereb
}

// do not change the code below.


