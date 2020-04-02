
const studentsClassA = [
    {
        name: "Ricardo", // [ array 0 ]
        grade: 10.00,  
    },
    {
        name: "Evandro", // [ array 1 ]
    grade: 8.5,
    },
    {
        name: "Karol",  // [ array 2 ]
        grade: 7.5,
    },
    {
        name: "Kátia",  // [ array 2 ]
        grade: 9.5,
    },
];

const studentsClassB = [
    {
        name: "José", // [ array 0 ]
        grade: 3.00,  
    },
    {
        name: "Pedro", // [ array 1 ]
    grade: 6.5,
    },
    {
        name: "Júlia",  // [ array 2 ]
        grade: 6.0,
    },
    {
        name: " Beto",  // [ array 2 ]
        grade: 5.0,
    },
];
// function to result the averages in the grades from the students:
function averageResult(students) {
    let sum = 0;                   
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

const average01 = averageResult(studentsClassA)
const average02 = averageResult(studentsClassB)

// function to send a message to the students if they are approved or disapproved.
function sentMessage(average, classes) {
    if(average > 7) {
        console.log(` The average of the ${classes} is ${average}. Congrats, you are approved.` ); // Template String 
    } else {
        console.log(` The average of the ${classes} is ${average}. Sorry, you are not approved.` ); // Template String 
    };
}
// function to mark the student disapproved
function markAsDisapproved(student) {
        student.disapproved = false;
        if(student.grade < 7) {
            student.disapproved = true;
        }   
}
// function to notify the student disapproved
function sendDisapprovedMessage(student) {
    if(student.disapproved) {
        console.log(`The ${student.name} is disapproved!`)
    }
}
// function to verify if the students are disapproved
function studentDisapproved(students) {
    for(let student of students) {
        markAsDisapproved(student)
        sendDisapprovedMessage(student)
    }
}

sentMessage(average01, 'classA')
sentMessage(average02, 'classB')

studentDisapproved(studentsClassA)
studentDisapproved(studentsClassB)