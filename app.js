function myFunction(){
    var str1= document.getElementById('num1').value;
    var str2 = document.getElementById('num2').value;
    var num1 = parseInt(str1)
    var num2 = parseInt(str2)
    if((num1<2||num1>100)&&(num2<2||num2>100)){
        var x = document.getElementById("calcResult");
        x.style.color="#dc3545";
        x.value = "Number 1 input is not in range & Number 2 input is not in range"  

    }
    else if((num1>=2&&num1<=100)&&(num2<2||num2>100)){
        var x = document.getElementById("calcResult");
        x.style.color="#dc3545";
        x.value = "Number 2 input is not in range of 2 and 100"
    }
    else if((num1<2||num1>100)&&(num2>=2&&num2<=100)){
        var x = document.getElementById("calcResult");
        x.style.color="#dc3545";
        x.value = "Number 1 input is not in range of 2 and 100"
    }
    else{
        myArray=even(num1,num2);
        var x = document.getElementById("calcResult");
        x.style.color="blue";
        y="There are "+myArray.length + " even numbers: " + myArray
        x.value = y
    }
}

function even(numb1,numb2){
    var evenArray=[]
    if(numb1<numb2){
        for (i=numb1;i<=numb2;i++){
            if(isEven(i)){
               evenArray.push(i)
            }
        }
    }
    else if(numb1>numb2){
        for (i=numb2;i<=numb1;i++){
            if(isEven(i)){
               evenArray.push(i)
            }
        }
    }
    return evenArray
}

function isEven(n){
    {
      for(var x = 1; x < n; x++)
      {
        if(n % 2 === 0)
        {
          return true;
        }
      }
      return false;  
    }
}