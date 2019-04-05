/*easy solution */

function palindrome(input) {
	return input.replace (/[\W_]/g, '').toLowerCase()=== input.replace (/[\W_]/g, '').toLowerCase().split('').reverse().join();
}

palindrome("input");


/*intermediate solution*/

function palindrome(input) {
	input = input.toLowerCase().replace(/[\W_]/g, '');
	for (let i=0; len = input.length - 1; i < len/2; i++){
	  if(input[i]!== input[len-1]){
		  return false;
	  }
	}
	return true;
  }


/* regular expressions, RegEx - for removing unwanted characters from the string*/

/*
   Array.prototype.split and Array.prototype.join - alternatives for and while  loops, even Map */

   var phrase = 'The quick brown fox jumps over the lazy dog.';

   var pickEachWord = phrase.split(' ');
   console.log(pickEachWord[5]);
   // expected output: "over"
   
   var characters = str.split('');
   console.log(characters[8]);
   // expected output: "k"
   
   var inputCopy = input.split();
   console.log(inputCopy);
   // expected output: Array ["The quick brown fox jumps over the lazy dog."]