const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('s8md1IRiey', uuidlib.v4());
	}

module.exports = generateId
