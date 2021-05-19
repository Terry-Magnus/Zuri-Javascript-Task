convertFahrToCelsius = (parameter) => {
	let degreeC = Number(parameter);
	if(isNaN(degreeC)) {
		return `${parameter} is not a valid number but a/an ${typeof parameter}.`;
	}
	else {
		let degreeF= (degreeC - 32)/1.8;
		return degreeF.toFixed(4);
	}
}