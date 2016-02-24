function check_values(viewerData){
	if(viewerData["phone"].length < 10 && viewerData["email"].length < 6 )
		return true;
	else
		return false;
}

module.exports.check_values = check_values;