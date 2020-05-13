function myFunction(){
    var str1= document.getElementById('num1').value;
    var str2 = document.getElementById('num2').value;
    var num1 = parseInt(str1)
    var num2 = parseInt(str2)
    if((num1<=2||num1>=100)&&(num2<=2||num2>=100)){
        var x = document.getElementById("calcResult");
        x.value = "Number 1 input is not in range & Number 2 input is not in range"    
    }
    else if((num1>=2&&num1<=100)&&(num2<=2||num2>=100)){
        var x = document.getElementById("calcResult");
        x.value = "Number 2 input is not in range of 2 and 100"
    }
    else if((num1<=2||num1>=100)&&(num2>=2&&num2<=100)){
        var x = document.getElementById("calcResult");
        x.value = "Number 1 input is not in range of 2 and 100"
    }
    else{
        myArray=prime(num1,num2)
        var x = document.getElementById("calcResult");
        x.value = myArray 
    }
}

