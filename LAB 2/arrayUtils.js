var sum = 0;

var cnt = 0;
function recursive(arrEle){

    for (let i=0;i<arrEle.length;i++){
        if(Array.isArray(arrEle[i])){
            if(arrEle[i].length === 0) throw 'Error: Empty array.'
            else{
            res = recursive(arrEle[i]);
            }
    }
        else{
            if(isNaN(arrEle[i])) throw 'Error: Only numbers numbers should be passed.'
            else{
                cnt = cnt+1;
                sum = sum+arrEle[i]  
            }
        }
        
    }
    return Math.round(sum/cnt);
}

function checkArray(chkArray){

    if(typeof(chkArray)==='undefined') throw 'Error: Parameter missing.'
    if(Array.isArray(chkArray)){
        lenArr = chkArray.length;
        if(lenArr===0) throw 'Error: Empty array.'
        
        else{
            return true;
        }
}
     else throw 'Error: Not an array'

}



module.exports = {

    average: (arrays)=>{
        
    var resultAvg;
    chkAvg = checkArray(arrays);
    if(chkAvg == true){
        for(let i=0;i<arrays.length;i++){
        if(typeof(arrays[i])!='object') throw 'Error: Not an array'
        if(typeof(arrays[i])==='object' && Array.isArray(arrays[i])===false && arrays[i] instanceof Array===false) throw 'Error: Not an array'
        }
    resultAvg = recursive(arrays);
    return resultAvg;
    }
    },
    modeSquared: (array)=>{
        let modeObj = {};
        let sizeObj = 0;
        chkMode = checkArray(array);
        if(chkMode == true){
        for(let i=0;i<array.length;i++){
            if(isNaN(array[i])) throw 'Error: Only Numbers Should Be Passed.';
            else{
                if(!modeObj[array[i]]){
                modeObj[array[i]] = 0;
                sizeObj+=1;
                }
                modeObj[array[i]]+=1;
            }
        }
        valArr = Object.values(modeObj);
        keyArr = Object.keys(modeObj);
        if(keyArr.length==1){
            return keyArr[0]*keyArr[0]; 
        }
        let maxVal = valArr[0];
        let maxKey = 0;
        var mode = 0;
        var idx;
        for(let i=0;i<keyArr.length;i++){
            if(maxVal<valArr[i]){
                maxVal=valArr[i];
                idx=i;
            }
            else{
                idx=-1;
            } 
        }
        if(idx!=-1){
        maxKey = parseInt(keyArr[idx]); 
        console.log(maxKey) 
        mode += maxKey*maxKey;
        }
        for(let j=0;j<keyArr.length;j++){
            if(valArr[j]===maxVal && idx!=j)
            {
                mode+=keyArr[j]*keyArr[j];
            }
        }
        return mode;

        }
            
        
    },
    medianElement: (array)=>{
            
        var resultMedian;
        var resultIndex;
        let sortedArr = []
        let finalObj = {};
            chkMed = checkArray(array);
            if(chkMed == true){
                lengthArr=array.length
                for(let i=0;i<lengthArr;i++){
                    if(isNaN(array[i])) throw 'Error: Only numbers are accepted.'
                    else{
                    sortedArr[i]=array[i];
                    }
                }
                sortedArr.sort(function(a,b){return a-b;})
                //console.log(sortedArr)
                if(lengthArr%2==0){
                    
                    resultMedian = (sortedArr[lengthArr/2] + sortedArr[(lengthArr/2) - 1])/2;
                    resultIndex=lengthArr/2;
                    finalObj[resultMedian]=resultIndex;
                    console.log(resultMedian);
                    console.log(resultIndex)
    
                }
                else
                {
                    //console.log(sortedArr)
                        resultMedian=sortedArr[Math.floor(lengthArr/2)]
                        for(let i=0;i<lengthArr;i++){
                            if(array[i]==resultMedian){
                                resultIndex=i;
                                break;
                            }
                        }
                        finalObj[resultMedian]=resultIndex;
                }
            
                
            }
            return finalObj;

    },
    merge: (arrayOne, arrayTwo)=>{
            
    chkMerge1 = checkArray(arrayOne);
    chkMerge3 = checkArray(arrayTwo);
    if(chkMerge1 == true && chkMerge3==true){
        let a=0, b=0, c=0;
        let res = [];
        let salpha=[];
        let balpha=[];
        let num=[];
        for(let i=0;i<arrayOne.length;i++){
            if(arrayOne[i]===null) throw 'Error: Null element';
        }   
        for (let i=0;i<arrayTwo.length;i++){
            if(arrayTwo[i]===null) throw 'Error: Null element';
        }
        res = arrayOne.concat(arrayTwo);
        res = res.sort();
        for(let i=0; i< res.length; i++)
        {
            if(!isNaN(res[i]))
            {
                num[a]=res[i];
                a++
            }
            else if(res[i]>='a' && res[i]<='z'){
                salpha[b]=res[i];
                b++;
            }
            else if(res[i]>='A' && res[i]<='Z'){
                balpha[c]=res[i];
                c++;
            }
            else throw 'Error: Only numbers and alphabets allowed.'
        }
        res=salpha.concat(balpha.concat(num));
        return res;
    }
    }
}