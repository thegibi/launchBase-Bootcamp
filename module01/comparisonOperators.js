/*

Operators: 

>   Maior / Greater than
<   Menor / Less than
>=  Maior ou equal a / Greater than or egual to
<=  Manor ou equal a / Less than or egual to
==  Igual a / Equal to
=== Igual e do mesmo tipo / Equal value and equal type
!=  Diferente de / Not equal
!== Diferente, inclusive do tipo / Not equal value or not equal type 

*/

const age = 17;

// Verificar se a pessoa é maior ou igual a 18 anos.Se sim, deixar entrar, se não, bloquear a entrada.
// Check if the person is greater or equal to 18 years old. If so, let it in. If not, block the entrance.

if(age >= 18) {
    console.log('Deixa entrar / let it in')
} else {
     console.log('Bloquear a entrada / Block the entrance')
 } 

 // Se a pessoa tiver 17 anos, avisar para retornar quando fizer 18 anos.
 // If the person is 17 years old, notify it to return when will 18 years old.

 if(age === 17) {
     console.log('Volte quando estiver com 18 anos / Came back when will 18 years old.')
 }
