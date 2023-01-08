function chkString(string){

    if(typeof(string)==='undefined') throw 'Error: Parameter missing.'
    if(string.length === 0) throw 'Error: Empty string.'
    if(typeof(string)!='string') throw 'Error: Not a string.'
    let flag=0;
    for(let i=0;i<string.length;i++){
        if(string[i]==" "){
            flag=1;
        }
        else{
            flag=0;
            break;
        }
    }
    if(flag===1) throw 'Error: String consists only empty spaces.'
}


module.exports = {
    
    sortString: (string)=>{

    chkString(string);
    var arr = string.split('');
    
    var sorted = arr.sort();
    
    var res=sorted.join('');
    
    let num="";
    let alpha="";
    let special = "";
    let space="";
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //Regular expression for special characters which I am using from my undergraduate, I don't know where I took this from.
    for (let i=0; i<res.length; i++)
    {
        if(res[i]==" ")
            space+=res[i];
        else if (!isNaN(res[i]))
            num+=res[i];
        else if((res[i] >= 'A' && res[i] <= 'Z') ||
            (res[i] >= 'a' && res[i] <= 'z'))
            alpha+=res[i];
        else if(format.test(res[i]))
            special+=res[i];
    }
    return (alpha+special+num+space);
    },
    replaceChar: (string, idx)=>{
    
    chkString(string);
    if(idx<0 || idx>(string.length-2)) throw 'Error: Index out of scope of the string.'
    if(typeof(idx)!='number') throw 'Error: Index not a number or missing.'
    mainChar=string[idx];
    beforeChar=string[idx-1];
    afterChar=string[idx+1];
    let flag = 0;
    for(let i=0;i<string.length;i++){
        if(i==idx){
            continue;
        }
        if(string[i]===mainChar)
        {
            if(flag==0){
                string = string.substring(0, i) + beforeChar + string.substring(i+1); //Referred to stackoverflow for this step.
                flag=1;
            }
            else{
                string = string.substring(0, i) + afterChar +string.substring(i + 1);
                flag=0;
            }
        }
        else{
            continue;
        }
    }
    return string;
    },
    mashUp: (string1, string2, char)=>{
    
    chkString(string1);
    chkString(string2);
    chkString(char);
    let res = '';
    if(string1.length < string2.length){
        let diff = string2.length-string1.length;
        string1 = string1.concat(char.repeat(diff));
    }

    else{
        let diff = string1.length-string2.length;
        string2=string2.concat(char.repeat(diff));
    }

    for(var i = 0; i < string1.length; i++) {  
       res+= string1[i];
       res+= string2[i];
    }
  return res;

    }
    
}