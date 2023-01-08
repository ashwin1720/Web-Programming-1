function commonKeys1(obj1, obj2){
    let resObj={};
    if(typeof(obj1)==='undefined' || typeof(obj2)==='undefined') throw 'Error: Parameter not provided.'
    if(typeof(obj1)!='object') throw 'Error: First Parameter Not An Object.'
    if (typeof(obj1)==='object' && Array.isArray(obj1)===true && obj1 instanceof Array===true)  throw 'Error: First Parameter Not An Object.'
    if(typeof(obj2)!='object') throw 'Error: Second Parameter Not An Object.'
    if (typeof(obj2)==='object' && Array.isArray(obj2)===true && obj2 instanceof Array===true)  throw 'Error: Second Parameter Not An Object.'
    let keys1 = Object.keys(obj1);
    let value1 = Object.values(obj1);
    let keys2 = Object.keys(obj2);
    let value2 = Object.values(obj2);
    for(let i=0;i<keys1.length;i++){
        for(let j=0;j<keys2.length;j++){
                if(keys1[i]===keys2[j]){
                    //console.log(typeof(value1[i]))
                 if (value1[i]===value2[j] && typeof(value1[i])!='object'){
                    
                    resObj[keys1[i]]=value1[i];    
                }
            
            else if(typeof(value1[i])==='object' && Array.isArray(value1[i])===false && value1[i] instanceof Array===false){
                
                let tempObj = {}
                tempObj = commonKeys1(value1[i], value2[j]); //Recursion
                
                resObj[keys1[i]]=tempObj;
            }
        }
        
        }
    }
    return resObj; 
}

function flipObject1(object){
    if(typeof(object)==='undefined') throw 'Error: Parameter not provided.'
        if(typeof(object)==='object' && Array.isArray(object)===true && object instanceof Array===true) throw 'Error: Not an object.'
    else if(typeof(object)!='object') throw 'Error: Not an object.'
    
    else{
        let myObj={}
        let keysFlip = Object.keys(object);
        let valueFlip = Object.values(object);
        if(keysFlip.length===0) throw 'Error: No key present';
        if(valueFlip.length===0) throw 'Error: No value present';
        for(let i=0;i<keysFlip.length;i++){
            if(typeof(valueFlip[i])!='object'){
            myObj[valueFlip[i]]=keysFlip[i];
            }
            else if(typeof(valueFlip[i])==='object' && Array.isArray(valueFlip[i])===false && valueFlip[i] instanceof Array===false){
                resultObj = flipObject1(valueFlip[i]);
                myObj[keysFlip[i]]=resultObj;
            }
        }
        return myObj;
        
    }
}
module.exports = {
    
    computeObjects: (arrofObj, func)=>{

    
        
            if(arrofObj ===undefined || func===undefined) throw 'Error: Parameter not provided.'
            if(Array.isArray(arrofObj)===false && arrofObj instanceof Array===false) throw 'Error: Not an array'
            if(typeof(func)!='function') throw 'Error: Second Parameter Not A Function';
            for(let i=0;i<arrofObj.length;i++){
                if(typeof(arrofObj[i])!='object') throw 'Error: Not an object.'
                if(typeof(arrofObj[i])==='object' && Array.isArray(arrofObj[i])===true && arrofObj[i] instanceof Array===true) throw 'Error: Not an object.'
                let keys = Object.keys(arrofObj[i]);
                let value = Object.values(arrofObj[i]);
                if(keys.length===0) throw 'Error: Empty object.'
                midObj={}
                for(let j=0;j<value.length;j++){
                    if(isNaN(value[j])) throw 'Error: Value not a number.'
                    value[j]=func(value[j]); 
                        arrofObj[i][keys[j]] = value[j];
                }
        }
        let finalObj= {}
        for(let i=0;i<arrofObj.length;i++){
            let keys = Object.keys(arrofObj[i]);
            let value = Object.values(arrofObj[i]);
            for(let j=0;j<value.length;j++){
                if(!finalObj[keys[j]]){
                    finalObj[keys[j]] = value[j];
                }else{
                    finalObj[keys[j]] = finalObj[keys[j]]+value[j];
                }
            }
        }
        return finalObj;    
        
    },
    commonKeys: (obj1, obj2)=>{
    let res = commonKeys1(obj1,obj2);
    return res;
    },
    flipObject: (object)=>{
        let res1 = flipObject1(object);
        return res1;

    },
    sayHello: (firstName, lastName)=> {

        if (!firstName) throw 'You must supply the first name parameter'
      
        if (!lastName) throw 'You must supply the last name parameter'
      
        if (typeof firstName  != 'string') throw 'First Name Must Be A String';
      
        if (typeof lastName  != 'string') throw 'Last Name Must Be A String';
      
         return `Hello ${firstName} ${lastName}!  How are you?`;
      
      }
      
}