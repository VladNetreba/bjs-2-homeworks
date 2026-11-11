function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) { 
    return false;
  }
  return arr1.every((value, i) => value === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  const human = users.filter(person => person.gender === gender)

  if (human.length === 0) {
    return 0;
  }

  const averageAge = human.reduce((sum, person) => sum + person.age, 0);

  return averageAge / human.length
}