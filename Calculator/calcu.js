	var num,temp,show_var;
	var ope = "";
	num = 0;
	show_var = "";
	
	// Count Nubmer N Show ScreeN
	function count(n){
		document.getElementById("show").innerHTML += n ;
		show_var += n;
	}

	// +-x/ ko Operation Loat Ya Mal
	function Operation(x){
		if( x == "+"){
			if(show_var == "equal"){
				temp = parseInt(num);
				num=0;
			}
			if(show_var != "equal"){
				temp = parseInt(show_var);
			}
			show_var = "";
			if(num==0){ num = temp;}
			if(ope=="+"){ num += temp; }
			else if(ope=="-"){ num -= temp; }
			else if(ope=="x"){ num *= temp; }
			else if(ope=="÷"){ num /= temp; } 
			ope = "+";
			document.getElementById("show").innerHTML += "+";
			document.getElementById("demo1").innerHTML =  num;
		}
		if( x == "-"){
			if(show_var == "equal"){
				temp = parseInt(num);
				num=0;
			}
			if(show_var != "equal"){
				temp = parseInt(show_var);
			}
			show_var = "";
			if(num==0){ num = temp;}
			if(ope=="+"){ num += temp; }
			else if(ope=="-"){ num -= temp; }
			else if(ope=="x"){ num *= temp; }
			else if(ope=="÷"){ num /= temp; } 
			ope = "-";
			document.getElementById("show").innerHTML += "-";
			document.getElementById("demo1").innerHTML =  num;
		}
		if( x == "x"){
			if(show_var == "equal"){
				temp = parseInt(num);
				num=0;
			}
			if(show_var != "equal"){
				temp = parseInt(show_var);
			}
			show_var = "";
			if(num==0){ num = temp;}
			if(ope=="+"){ num += temp; }
			else if(ope=="-"){ num -= temp; }
			else if(ope=="x"){ num *= temp; }
			else if(ope=="÷"){ num /= temp; } 
			ope = "x";
			document.getElementById("show").innerHTML += "x";
			document.getElementById("demo1").innerHTML =  num;
		}
		if( x == "÷"){
			if(show_var == "equal"){
				temp = parseInt(num);
				num=0;
			}
			if(show_var != "equal"){
				temp = parseInt(show_var);
			}
			show_var = "";
			if(num==0){ num = temp;}
			if(ope=="+"){ num += temp; }
			else if(ope=="-"){ num -= temp; }
			else if(ope=="x"){ num *= temp; }
			else if(ope=="÷"){ num /= temp; } 
			ope = "÷";
			document.getElementById("show").innerHTML += "÷";
			document.getElementById("demo1").innerHTML =  num;
		}		
	}

	// Eqal ClicK ko Nhate Mi Thaw Akhar
	function equal_To(){
		// TEMP ko ayin Sone Pyan Yu Ya mal
		temp = parseInt(show_var);

			if(num==0){num=temp;}
			if(ope=="+"){ num += temp; }
			else if(ope=="-"){ num -= temp; }
			else if(ope=="x"){ num *= temp; }
			else if(ope=="÷"){ num /= temp; } 
		document.getElementById("demo1").innerHTML = num;		
		document.getElementById("show").innerHTML = num;
		ope = "";
		show_var = "equal";
	}

	// ARR LONE KO DEFAULT ZERO PYAN LOAT
	function Ce(){
		document.getElementById("show").innerHTML = "";
		document.getElementById("demo1").innerHTML = "";
		num = 0;
		ope = "";
		show_var = "";
	}