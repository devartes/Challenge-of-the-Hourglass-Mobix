let n = 20; // row or column count
// defining an empty string
let string = "";


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


// printing the string
console.log(string);
