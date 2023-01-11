const { default: axios } = require("axios")

async function getPeople(){
    const {data: peopleData} = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
    return peopleData;
    }

async function getPersonById(id){
    if(arguments.length<1) throw 'Error: Less Parameters.'
    if(arguments.length>1) throw 'Error: Excess Parameters.'
    let chkEmpty=0;
    for(let i=0;i<id.length;i++){
        if(id[i]==' '){
            chkEmpty=0;
        }
        else{
            chkEmpty=1
            break;
        }
    }
    if (chkEmpty==0) throw 'Error: Parameter Consists Of Only Empty Spaces.'
    
    if(typeof(id)!='string') throw 'Error: Parameter Not A String.'
    peopleData = await getPeople();
    let flag = 0;
    let idx = 0;
    for(let i = 0;i<peopleData.length;i++){

        if(peopleData[i].id === id){
        idx=i;
        flag=1;
        break;
        }
    }
    if(flag===1){
        return peopleData[idx];
    }
    else throw 'Error: Person Not Found.'

    }
async function sameStreet(streetName, streetSuffix){

    if(arguments.length<2) throw 'Error: Less Parameters.'
    if(arguments.length>2) throw 'Error: Excess Parameters.'
        if(typeof(streetName)==='undefined') throw 'Error: Street Name Missing'
        if(typeof(streetSuffix)==='undefined') throw 'Error: Street Suffix Missing'
        let chkEmpty=0;
    for(let i=0;i<streetName.length;i++){
        if(streetName[i]==' '){
            chkEmpty=0;
        }
        else{
            chkEmpty=1
            break;
        }
    }
    if (chkEmpty==0) throw 'Error: Parameter Consists Of Only Empty Spaces.'
    let chkEmpty1=0;
    for(let i=0;i<streetSuffix.length;i++){
        if(streetSuffix[i]==' '){
            chkEmpty1=0;
        }
        else{
            chkEmpty1=1
            break;
        }
    }
    if (chkEmpty1==0) throw 'Error: Parameter Consists Of Only Empty Spaces.'
        streetName = streetName.toUpperCase()
        streetSuffix = streetSuffix.toUpperCase()
        let finalArr = []
        peopleData = await getPeople();
        for(let i=0;i<peopleData.length;i++){
                chkHomeNameOfI=peopleData[i].address.home.street_name.toUpperCase();
                chkHomeSuffixOfI=peopleData[i].address.home.street_suffix.toUpperCase();
                chkWorkNameOfI=peopleData[i].address.work.street_name.toUpperCase();
                chkWorkSuffixOfI=peopleData[i].address.work.street_suffix.toUpperCase();
            for(let j=i+1;j<peopleData.length;j++){
                chkHomeNameOfJ=peopleData[j].address.home.street_name.toUpperCase();
                chkHomeSuffixOfJ=peopleData[j].address.home.street_suffix.toUpperCase();
                chkWorkNameOfJ=peopleData[j].address.work.street_name.toUpperCase();
                chkWorkSuffixOfJ=peopleData[j].address.work.street_suffix.toUpperCase();
    
                if(streetName===chkHomeNameOfI && streetName===chkHomeNameOfJ && streetSuffix===chkHomeSuffixOfI && streetSuffix===chkHomeSuffixOfJ)
                {
                        finalArr.push(peopleData[i]);
                        finalArr.push(peopleData[j]); 
                }
                else if(streetName===chkHomeNameOfI && streetName === chkWorkNameOfJ && streetSuffix===chkHomeSuffixOfI && streetSuffix===chkWorkSuffixOfJ)
                {
                    finalArr.push(peopleData[i]);
                        finalArr.push(peopleData[j]); 
                    
                }
                else if(streetName===chkWorkNameOfI && streetName === chkHomeNameOfJ && streetSuffix===chkWorkSuffixOfI && streetSuffix===chkHomeSuffixOfJ)
                {
                    finalArr.push(peopleData[i]);
                        finalArr.push(peopleData[j]); 
                    
                }
                else if(streetName===chkWorkNameOfI && streetName === chkWorkNameOfJ && streetSuffix===chkWorkSuffixOfI && streetSuffix===chkWorkSuffixOfJ)
                {
                    finalArr.push(peopleData[i]);
                    finalArr.push(peopleData[j]); 
                    
                }
            }
            
        }
        let returnArr = []
        returnArr.push(finalArr[0]);
        for(let i=0;i<finalArr.length;i++){
            let f=0;
            for(let j=0;j<returnArr.length;j++){
                if(returnArr[j]==finalArr[i]){
                    f = 0;
                    break;
                }
                else{
                    
                    f = 1;
                }
            }
            if(f===1){
                returnArr.push(finalArr[i])
            }
        }
        if(returnArr.length>=2){
            return returnArr;
        }
        else throw 'No Match Found'
        }
async function manipulateSsn(){
    if(arguments.length>0) throw 'Error: No Parameters Should Be Passed'
            peopleData = await getPeople();
        let ssnArr=[];
        for(let i = 0;i<peopleData.length;i++){
            ssnArr.push(peopleData[i].ssn)
        }
        for(let i=0;i<ssnArr.length;i++){
            ssnArr[i]=ssnArr[i].split('')
            for(let j=0;j<ssnArr[i].length;j++){
                if(ssnArr[i][j]!='-'){
                    ssnArr[i][j]=parseInt(ssnArr[i][j])
                }
            }
                for(let k=0;k<ssnArr[i].length;k++){
                    if(ssnArr[i][k]==='-'){
                        ssnArr[i].splice(k,1)
                    }
                }
                    ssnArr[i].sort(function(a,b){return a-b;})
                    ssnArr[i]=ssnArr[i].join('')
        }
    let finalSSN = []
    let finalObj = {}
    let highName = {}
    let lowName = {}
    for(let i=0;i<ssnArr.length;i++){
        finalSSN.push(ssnArr[i])
    }
    finalSSN.sort(function(a,b){return a-b;})
    let largeIndex = 0
    let smallIndex = 0
        for(let j=0;j<ssnArr.length;j++){
            if(finalSSN[0]===ssnArr[j]){
                smallIndex=j;
            }
            else if(finalSSN[finalSSN.length-1]===ssnArr[j]){
                largeIndex = j;
            }
        }
       
    highName["firstName"]=peopleData[largeIndex].first_name
    highName["lastName"]=peopleData[largeIndex].last_name
    lowName["firstName"]=peopleData[smallIndex].first_name
    lowName["lastName"]=peopleData[smallIndex].last_name
    finalObj["highest"] = highName
    
    finalObj["lowest"]=lowName
    
    let sum = 0;
    let avg=0;
    for(let i=0;i<finalSSN.length;i++){
        finalSSN[i]=parseInt(finalSSN[i])
        sum=sum+finalSSN[i]
    }
    avg=sum/finalSSN.length
    avg=Math.floor(avg)
    
    finalObj["average"]=avg
    
    return finalObj
        }
async function sameBirthday(month, day){
    if(arguments.length<2) throw 'Error: Less Parameters.'
    if(arguments.length>2) throw 'Error: Excess Parameters.'
            if(typeof(day)==='undefined' || typeof(month)==='undefined' ) throw 'Error: Parameter Missing'
        if(typeof(month)==='string'){
            
        let chkEmpty=0;
        for(let i=0;i<month.length;i++){
        if(month[i]==' '){
            chkEmpty=0;
        }
        else{
            chkEmpty=1
            break;
        }
    }
    if (chkEmpty==0) throw 'Error: Parameter Consists Of Only Empty Spaces.'
    else{
            month = parseInt(month);
    }
        }
        if(typeof(day)==='string'){
            let chkEmpty1=0;
    for(let i=0;i<day.length;i++){
        if(day[i]==' '){
            chkEmpty1=0;
        }
        else{
            chkEmpty1=1
            break;
        }
    }
    if (chkEmpty1==0) throw 'Error: Parameter Consists Of Only Empty Spaces.'
    else{
            day=parseInt(day);
    }
        }
        if(typeof(day)==='number' && typeof(month)==='number'){
            if(month>12) throw 'Error: Month>12'
            if(day>31) throw 'Error: Day>31'
            if(day>30 && month==4) throw 'Error: There Are No 31 Days In Apr'
            if(day>30 && month==6) throw 'Error: There Are No 31 Days In June'
            if(day>30 && month==9) throw 'Error: There Are No 31 Days In Sept'
            if(day>30 && month==11) throw 'Error: There Are No 31 Days In Nov'
            if(day>28 && month==2) throw 'Error: There Are No 29/30/31 Days In Feb'
            if((day>=1 && day<=31) && (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)){
                dateBool = true;
            }
            else if((day>=1 && day<=30) && (month==4 || month==6 || month==9 || month==11)){
                dateBool = true;
            }
            else if((day>=1 && day<=28) && (month==2)){
                dateBool = true;
            }
        }
        else throw 'Error: Parameter Missing Or Not A Number.'
    
        if(dateBool==true){
            //console.log("Inside if")
            peopleData = await getPeople();
            let finalArray = [];
            let dobArray=[];
            for(let i=0;i<peopleData.length;i++){
                dobArray.push(peopleData[i].date_of_birth)
            }
            let finalMonth = [], finalDay=[]
            let firstSlash=0
            for(let i=0;i<dobArray.length;i++){
                let tempMonthArray=[], tempDayArray=[];
                for(let j=0;j<dobArray[i].length;j++){
                    if(dobArray[i][j]!='/'){
                tempMonthArray.push(dobArray[i][j])
                    }
                    else{
                        firstSlash=j;
                        break;
                    }
                }
                for(let k=firstSlash+1;k<dobArray[i].length;k++){
                    if(dobArray[i][k]!='/'){
                        tempDayArray.push(dobArray[i][k])
                            }
                            else{
                                break;
                            }
                }
                finalDay.push(tempDayArray)
                finalMonth.push(tempMonthArray);
                
            }
            for(let i=0;i<finalMonth.length;i++){
                finalMonth[i]=finalMonth[i].join('')
                finalDay[i]=finalDay[i].join('')
                finalMonth[i]=parseInt(finalMonth[i])
                finalDay[i]=parseInt(finalDay[i])
            }
            let personIndex = [], personNames=[];
            for(let i=0;i<finalMonth.length;i++){
            
                if(month===finalMonth[i]&&day===finalDay[i]){
                    personIndex.push(i);
                }
            }
            
            for(let i=0;i<personIndex.length;i++){
                first_name = peopleData[personIndex[i]].first_name
                last_name = peopleData[personIndex[i]].last_name
                final_name = first_name+" "+last_name;
                personNames.push(final_name);
            }
            
            if(personNames.length<1) throw 'Error: No Match Found.'
            return personNames
        }
        }
module.exports = {

    getPersonById,
    sameStreet,
    manipulateSsn,
    sameBirthday
}