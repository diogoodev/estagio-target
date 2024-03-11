let palavra = ""
    
function inverte(input) {
	  for (let index = input.length-1; index >= 0 ; index--) {
	        palavra += input[index]
	    }
	    console.log(palavra)
	}
	
	inverte("diogo")
