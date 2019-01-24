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
    PRAssignment(subject)  {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(stuff) {
        super(stuff);
        this.gradClassName = stuff.gradClassName;
        this.favInstructor = stuff.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}





const Fred = new Person({
    name: 'Fred',
    age: 23,
    location: 'Bedrock',
    gender: 'M'
});

const James = new Instructor({
    name: 'James',
    age: 32,
    location: 'London',
    gender: 'M',
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`
});

const Sean = new Student({
    name: 'Sean',
    age: 28,
    location: 'Reading',
    gender: 'M',
    previousBackground: 'Finance',
    className: 'WEBEU1',
    favSubjects: ['HTML', 'CSS', 'Javascript']
})


const Jane = new ProjectManager({
    name: 'Jane',
    age: 55,
    location: 'Southend',
    gender: 'F',
    specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: `What are you doing??`,
    gradClassName: 'CS1',
    favInstructor: 'James'    
})

