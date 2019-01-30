var object = {};
 
var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign({}, object, {[key]:value});
  
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  new Object({}, object, {[key]:"value"});
  return object;
}
function deleteFromObjectByKey(object, key){
  return object.assign({}, object, {key});
  return object
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}