function findPrime(num)
{
    if (num == 2 || num == 3){
        return true;
    }
    let flag = false;
    for (let i=2;i<(num/2);i++)
    {
        if(num%i==0)
        {
            flag = false;
            break;
        }
        else
        {
            flag = true;
        }   
    }
    return flag;
}

function findFact(num){
    let fact = 1;
    for(let i=num;i>0;i--)
    {
        fact = fact * i;

    }
    return fact;
}

const questionOne = function questionOne(arr) {
    let NumObj = {};
    if(arr != undefined)
    {
    for(let i=0;i<arr.length;i++)
    {
        let x = Math.abs((arr[i]*arr[i])-7);
        
        
        let temp = findPrime(x);
        NumObj['' + x]=temp; //Referred to StackOverflow to prevent automatic sorting of the object.
    }
}
    return NumObj;
}

    const questionTwo = function questionTwo(arr) { 
    let compareArray = []
    if(arr!=undefined)
    {
    for(let i=0;i<arr.length;i++)
    {   
        let flag = 0;
        for(let j=0;j<=compareArray.length;j++)
        {
        
        if (compareArray[j]===arr[i])
        {
            flag = 0;
            break;
        }
        else{
            flag = 1;    
        }
        }
        if (flag==1){
            compareArray.push(arr[i]);
        }
    }
    }
return compareArray;
}

const questionThree = function questionThree(arr) {
    let strObj = {};
    let newArr = [];
    let newestArr = [];
    if(arr!=undefined)
    {
        newArr = questionTwo(arr);
        console.log(newArr)
    }
    for (let i=0;i<newArr.length;i++){
        newestArr.push(newArr[i].split('').sort().join('')); //Referred to StackOverflow to sort each element of the array.
    }
    console.log("Newest")
    console.log(newestArr)
    for(let i=0;i<newestArr.length;i++){
        for (let j=i+1;j<newestArr.length;j++)
        {
            if(newestArr[i]==newestArr[j])
            {
                strObj[newestArr[i]] = [];
                strObj[newestArr[i]].push(newArr[i]);
                console.log(newestArr)
                strObj[newestArr[i]].push(newArr[j]);
            }
        }
    }
    return strObj;
}

const questionFour = function questionFour(num1, num2, num3) {
    let sum = 0;
    let avg = 0;
    let result = 0;
    sum = findFact(num1) + findFact(num2) + findFact(num3);
    avg = (num1+num2+num3)/3;
    result = Math.floor(sum/avg);
    return result;
}

module.exports = {
    firstName: "ASHWIN", 
    lastName: "SURESH", 
    studentId: "20005197",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
