// Write your solution in this file!
const employee = {}
function updateEmployeeWithKeyAndValue
(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(peter, key, value) {
  peter[key] = value;

  return peter;
}

function deleteFromEmployeeByKey(peter, key) {
  const NEW_OBJ =  Object.assign({}, peter);
  delete NEW_OBJ[key];
  return NEW_OBJ;
}

function destructivelyDeleteFromEmployeeByKey(peter, key) {
  Object.assign({}, peter);
  delete peter[key];
  return peter;
  }