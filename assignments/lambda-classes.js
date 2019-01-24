// CODE here for your Lambda Classes
class Person {
    constructor(stuff) {
        this.name = stuff.name;
        this.age = stuff.age;
        this.location = stuff.location;
        this.gender = stuff.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

const Fred = new Person({name: 'Fred', age: 23, location: 'Reading', gender: 'M'});

class Instructor extends Person {
    constructor(stuff) {
        super(stuff);
        this.specialty = stuff.specialty;
        this.favLanguage = stuff.favLanguage;
        this.catchPhrase = stuff.catchPhrase;
    }
    demo(subject) { //takes string
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) { //tales student object, subject string
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(stuff) {
        super(stuff);
        this.previousBackground = stuff.previousBackground;
        this.className = stuff.className;
        this.favSubjects = stuff.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element)});
    }
    PRAssignment()  {
        
    }
}

