async function main()

{
    const peopleJs = require('./people');
    const stocksJs = require('./stocks');
    try{
        test0=await peopleJs.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10")
        console.log(test0)
    }
    catch(e){
        console.log(e)
    }
    try{
        test1=await peopleJs.getPersonById("")
        console.log(test1)
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await peopleJs.sameStreet("Sutherland", "Point"))
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await peopleJs.sameStreet())
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await peopleJs.manipulateSsn())
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await peopleJs.sameBirthday(9.0,'23'))
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await peopleJs.sameBirthday("ICE","BABE"))
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await stocksJs.listShareholders())
        
    }
    catch(e){
        console.log(e)
    }

    try{
        console.log(await stocksJs.topShareholder('Aeglea BioTherapeutics, Inc.'))
        
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await stocksJs.topShareholder())
        
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await stocksJs.listStocks('Ishwarya','Ashwin'))
        
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await stocksJs.listStocks("Grenville", "Pawelke"))
        
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await stocksJs.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0"))
        
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await stocksJs.getStockById())
        
    }
    catch(e){
        console.log(e)
    }


}

main();