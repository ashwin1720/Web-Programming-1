const questionThree = function questionThree(arr) {
    let strObj = {};
    let newArr = [];
    let newestArr = [];
    if(arr!=undefined)
    {
        for(let i=0;i<arr.length;i++)
    {   
        let flag = 0;
        for(let j=0;j<=newArr.length;j++)
        {
        
        if (newArr[j]===arr[i])
        {
            flag = 0;
            break;
        }
        else{
            flag = 1;    
        }
        }
        if (flag==1){
            newArr.push(arr[i]);
        }
    }
    }
    for (let i=0;i<newArr.length;i++){
        newestArr.push(newArr[i].split('').sort().join('')); //Referred to StackOverflow to sort each element of the array.
    }
    for(let i=0;i<newestArr.length;i++){
        for (let j=i+1;j<newestArr.length;j++)
        {
            if(newestArr[i]==newestArr[j])
            {
                strObj[newestArr[i]] = [];
                strObj[newestArr[i]].push(newArr[i]);
                strObj[newestArr[i]].push(newArr[j]);
            }
        }
    }
    return strObj;
}

