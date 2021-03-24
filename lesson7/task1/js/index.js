const person = {};
person.firstName = 'Ivan';
person.secondName = 'Ivanov';
person.showData = function() {
  console.log(this.firstName , this.secondName);
};
const newPerson = {};
for(let key in person) {
  newPerson[key]= person[key];
}
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData();
