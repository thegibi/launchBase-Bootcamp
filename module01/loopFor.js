// LOOP FOR / ESTRUTURA DE REPETIÇÃO

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
        grade: 8.00,  
    },
    {
        name: "Pedro", // [ array 1 ]
    grade: 8.5,
    },
    {
        name: "Júlia",  // [ array 2 ]
        grade: 9.0,
    },
    {
        name: " Beto",  // [ array 2 ]
        grade: 7.0,
    },
];
// function:
function averageResult(students) {
    // loop for:  
    let sum = 0;                   
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

const average01 = averageResult(studentsClassA)
const average02 = averageResult(studentsClassB)

// function 
function sentMessage(average, classes) {
    if(average > 5) {
        console.log(` The average of the ${classes} is ${average}. Congrats, you are approved.` ); // Template String 
    } else {
        console.log(` The average of the ${classes} is ${average}. Sorry, you are not approved.` ); // Template String 
    };
}
// envia mensagem para o usuário
sentMessage(average01, 'classA')
sentMessage(average02, 'classB')

