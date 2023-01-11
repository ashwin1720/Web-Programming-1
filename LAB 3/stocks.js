const { default: axios } = require("axios");

function chkForstring(id){
    let chkEmpty = 0
    if(typeof(id)!='string') throw 'Error: Parameter Not A String.'
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
}
async function getStocks(){
    const {data: stocksData} = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json');
    return stocksData;
    }
async function getPeople(){
        const {data: peopleData} = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json');
        return peopleData;
        }
async function listShareholders(){
    
    if(arguments.length>0) throw 'Error: No Parameter Should Be Passed.'
            peopleData = await getPeople();
            stocksData = await getStocks();
            for(let i=0;i<stocksData.length;i++){
                for(let j=0;j<stocksData[i].shareholders.length;j++){
                    for(let k=0;k<peopleData.length;k++){
                        if(peopleData[k].id===stocksData[i].shareholders[j].userId){
                            stocksData[i].shareholders[j].first_name=peopleData[k].first_name;
                            stocksData[i].shareholders[j].last_name=peopleData[k].last_name;
                            let temp = stocksData[i].shareholders[j].number_of_shares;
                            delete stocksData[i].shareholders[j].number_of_shares;
                            stocksData[i].shareholders[j].number_of_shares=temp;
                            delete stocksData[i].shareholders[j].userId;
                        }
                    }
        
                }
                
            }
            return stocksData
            }
async function topShareholder(stockName){
    if(arguments.length<1) throw 'Error: Less Parameters.'
    if(arguments.length>1) throw 'Error: Excess Parameters.'
                if(typeof(stockName)==='undefined') throw 'Error: No parameter was passed.'
                let chkEmpty = 0
    if(typeof(stockName)!='string') throw 'Error: Parameter Not A String.'
    for(let i=0;i<stockName.length;i++){
        if(stockName[i]==' '){
            chkEmpty=0;
        }
        else{
            chkEmpty=1
            break;
        }
    }
    if (chkEmpty==0) throw 'Error: Parameter Consists Of Only Empty Spaces.'
    else{
        let flag=0;
        
                newStocksData = await listShareholders();
            
                for(let i=0;i<newStocksData.length;i++)
            
                {
                
                if(newStocksData[i].stock_name.localeCompare(stockName)===0){
                    flag=1
                    if(newStocksData[i].shareholders.length===0){
                        return `${stockName} currently has no shareholders.`
                    }
                    let max = newStocksData[i].shareholders[0].number_of_shares;
                    for(let j=0;j<newStocksData[i].shareholders.length;j++){
                        if(newStocksData[i].shareholders[j].number_of_shares>max){
                            max=newStocksData[i].shareholders[j].number_of_shares;
                            maxidx=j
                        }
                    }
                    for(let j=0;j<newStocksData[i].shareholders.length;j++){
                    if(newStocksData[i].shareholders[maxidx].number_of_shares===newStocksData[i].shareholders[j].number_of_shares)
                    {
                        return `With ${newStocksData[i].shareholders[j].number_of_shares} shares in ${stockName} ${newStocksData[i].shareholders[j].first_name} ${newStocksData[i].shareholders[j].last_name} is the top shareholder.`
                    }
            
                    }
                }
                else{
                    flag=0;
                }
            
                
            }
            if(flag===0) throw 'Error: No Such Stock Is Present.'
        }
        }
        
async function listStocks(firstName, lastName){
    if(arguments.length<2) throw 'Error: Less Parameters.'
    if(arguments.length>2) throw 'Error: Excess Parameters.'
            if(typeof(firstName)==='undefined') throw 'Error: First Name Was Not Passed.'
        if(typeof(lastName)==='undefined') throw 'Error: Last Name Was Not Passed.'
    let chkEmpty = 0
    if(typeof(firstName)!='string') throw 'Error: Parameter Not A String.'
    for(let i=0;i<firstName.length;i++){
        if(firstName[i]==' '){
            chkEmpty=0;
        }
        else{
            chkEmpty=1
            break;
        }
    }
    if (chkEmpty==0) throw 'Error: Parameter Consists Of Only Empty Spaces.'
    let chkEmpty1 = 0
    if(typeof(lastName)!='string') throw 'Error: Parameter Not A String.'
    for(let i=0;i<lastName.length;i++){
        if(lastName[i]==' '){
            chkEmpty1=0;
        }
        else{
            chkEmpty1=1
            break;
        }
    }
    if (chkEmpty1==0) throw 'Error: Parameter Consists Of Only Empty Spaces.'
        newStocksData = await listShareholders();
    
        finalArr=[]
        let flag=0
        for(let i = 0;i<newStocksData.length;i++){
            for(let j=0;j<newStocksData[i].shareholders.length;j++){
                
                if((newStocksData[i].shareholders[j].first_name.localeCompare(firstName)===0) && (newStocksData[i].shareholders[j].last_name.localeCompare(lastName)===0)){
                    flag=1  
                    let tempObj={}
                    tempObj["stock_name"]=newStocksData[i].stock_name;
                    finalArr.push(tempObj)
                    tempObj["number_of_shares"]=newStocksData[i].shareholders[j].number_of_shares
                }
            }
        }
        if(flag===0) throw 'Error: Person Not Found.'  
    
        return finalArr   
        }
async function getStockById(id){
        
    if(arguments.length<1) throw 'Error: Less Parameters.'
    if(arguments.length>1) throw 'Error: Excess Parameters.'
            if(typeof(id)==='undefined') throw 'Error: ID Not Passed.'
            let chkEmpty = 0
    if(typeof(id)!='string') throw 'Error: Parameter Not A String.'
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
            let flag=0
            stocksData = await getStocks();
            for(let i=0;i<stocksData.length;i++){
                if(stocksData[i].id.localeCompare(id)===0){
                    flag=1;
                    return stocksData[i];
                }
            }
            if(flag===0) throw 'Error: Stock Not Found'
        }
module.exports = {

    listShareholders,
    topShareholder,
    listStocks,
    getStockById
    


}