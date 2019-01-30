var object = {};
 
var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value){
  new Object({}, object, {[key]:value});
  return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
}