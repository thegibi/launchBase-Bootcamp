/**
  LOGICAL OPERATORS / OPERADORES LÓGICOS
 
 && logical END / "E". As duas condições devem ser verdadeiras para que a consição final seja verdadeira.

 || logical OR / "OU". Uma das condições devem ser verdadeira para que a condição final seja verdadeira.

 ! logical NOT / "NÃO". Nega uma condição.

 */

// Verificar se a pessoa é maior ou igual a 18 anos.Se sim, deixar entrar, se não, bloquear a entrada.
// Check if the person is greater or equal to 18 years old. If so, let it in. If not, block the entrance.

// Se a pessoa tiver 17 anos, avisar para retornar quando fizer 18 anos.
 // If the person is 17 years old, notify it to return when will 18 years old.

const age = 17;

if(!(age >= 18) || age === 17) {
    console.log('Block the entrance. Came back when will 18 years old.')
} else {
     console.log('Let it in')
 } 
 