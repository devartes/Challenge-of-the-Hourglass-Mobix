
let string = "";
let n = window.prompt('Digite um tamanho para a ampulheta ');


for(let i=1;i<=n;i++)  
{  
    for(let j=1;j<=n;j++)  
    {  
        if(i==1 ||i==n||j==1||j==n-i+1||i==j||j==n)  
        {  
          string += "#";
        }  
        else  
        {  
              
          string += " ";
              }  
             
        }  
              
        string += "\n"; 
}  


console.log(string + "\n" + "n= " + n);

