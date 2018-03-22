class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person:Person) {
    console.log('hello')
    return "Hello" + person;
}

let user = new Student('Jane', 'M.', 'User')

document.body.innerHTML = greeter(user)