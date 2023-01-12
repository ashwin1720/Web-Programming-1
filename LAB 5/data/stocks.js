const { default: axios } = require("axios");
const { json } = require("express");

async function getStocks(){
    const {data: stocksData} = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
    return stocksData;
    }

let exportedMethods = {

  async getAllStocks() {
    stockData = await getStocks();
    return stockData;
  },
  async getStocksById(id) {
    if(arguments.length<1) throw {Error: 'Less Parameters.'}
    if(arguments.length>1) throw {Error: 'Excess Parameters.'}
            if(typeof(id)==='undefined') throw {Error: 'ID Not Passed.'}
            let chkEmpty = 0
    if(typeof(id)!='string') throw {Error: 'Parameter Not A String.'}
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
    let flag=0
            stocksData = await getStocks();
            for(let i=0;i<stocksData.length;i++){
                if(stocksData[i].id.localeCompare(id)===0){
                    flag=1;
                    return stocksData[i];
                }
            }
            if(flag===0) throw {Error:'Stock Not Found.'}

    }
  
};

module.exports = exportedMethods;