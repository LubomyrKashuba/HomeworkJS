const person = {};
person.firstName = 'Ivan';
person.secondName = 'Ivanov';
person.showData = function(object) {
  console.log(object.firstName , object.secondName);
};
const newPerson = {};
for(let key in person) {
  newPerson[key]= person[key];
}
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData(person);
newPerson.showData(newPerson);
