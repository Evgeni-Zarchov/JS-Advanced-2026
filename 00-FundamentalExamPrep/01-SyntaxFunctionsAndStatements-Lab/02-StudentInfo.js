function studentInfo(name, age, grade) {
  let studentObj = { name, age, grade };

  console.log(
    `Name: ${studentObj.name}, Age: ${studentObj.age}, Grade: ${studentObj.grade.toFixed(2)}`,
  );
}

studentInfo("John", 15, 5.54678);
