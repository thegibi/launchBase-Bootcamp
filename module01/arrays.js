// ARRAYS / VETORES
// Todo vetor/array inicia-se com [0, 1, 2, 3...].

const students = [
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
        grade: 9.0,
    },
];

const averageFinal = (students[0].grade + students[1].grade + students[2].grade) / 3;

console.log(averageFinal);
