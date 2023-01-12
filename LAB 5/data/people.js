const { default: axios } = require("axios");

async function getAllPeople() {
    const {data: peopleData} = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
    return peopleData;
  }
  async function getPeopleById(id) {
    if(arguments.length<1) throw {Error: 'Less Parameters.'}
    if(arguments.length>1) throw {Error: 'Excess Parameters.'}
    if(typeof(id)!='string') throw {Error: 'Parameter Not A String.'}
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
    if (chkEmpty==0) throw {Error: 'Parameter Consists Of Only Empty Spaces.'}
    
    
    const {data: peopleData} = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
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
        console.log(peopleData[idx])
        return peopleData[idx];
    }
    else throw {Error: 'Person Not Found.'}

    }
  

module.exports = {
    getAllPeople,
    getPeopleById
}