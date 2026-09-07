function printEmployees(arrInfo) {
    class Employees {
        constructor(name) {
            this.name = name;
        }
    }
    let result = [];
    for (let info of arrInfo) {
        let employees = new Employees(info);
        result.push(employees);
    }

    for (let employeesInfo of result) {
        console.log(
            `Name: ${employeesInfo.name} -- Personal Number: ${employeesInfo.name.length}`,
        );
    }
}
printEmployees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
