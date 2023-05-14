const employee = {
    name: "Sam",
    streetAddress: "Bingbong Road",
};
function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newEmp = {...employee};
    newEmp[name] = value;
    return newEmp;
};
const changedEmp = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Bob"
);
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value

    return obj;
}
const kyle = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Kyle");

function deleteFromEmployeeByKey(employee, name, value) {
    const newEmp = {...employee};
    newEmp[name] = value;
    return newEmp;
};
const anotherNew = deleteFromEmployeeByKey(delete employee.name)

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value

    return obj;
}
const anotherOne = destructivelyDeleteFromEmployeeByKey(delete employee.name)
