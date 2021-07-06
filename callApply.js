const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'kalam',
    salary: 23000
}

// const heroChargBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargBill(2000);
// console.log(heroPerson.salary);

// normalPerson.chargeBill(500);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson,900, 100, 10);
// console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 900, 50, 50);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);