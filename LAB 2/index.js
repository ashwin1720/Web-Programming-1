const arrayUtils = require('./arrayUtils');

const stringUtils = require('./stringUtils');
const objUtils = require('./objUtils');
try{
    console.log(arrayUtils.average([[1],[3],[6]]))
}
catch(e){
    console.log(e)
}
try{
    console.log(arrayUtils.average([[1,2,3], ["Hi",4,5,6]]))
}
catch(e){
    console.log(e);
}
try{
    console.log(arrayUtils.modeSquared([1,2,3,3,4]))
}
catch(e){
    console.log(e);
}
try{
    console.log(arrayUtils.modeSquared("Banana"))
}
catch(e){
    console.log(e);
}

try{
    console.log(arrayUtils.medianElement([3,20,6,8,9]))
}
catch(e){
    console.log(e);
}
try{
    console.log(arrayUtils.medianElement([1,2,3,"Nope"]))
}
catch(e){
    console.log(e);
}

try{
    console.log(arrayUtils.merge(['A', 'B', 'a'], [1, 2, 'Z']))
}
catch(e){
    console.log(e);
}
try{
    console.log(arrayUtils.merge())
}
catch(e){
    console.log(e);
}



try{
    console.log(stringUtils.sortString('123 FOO BAR!'))
    
}
catch(e){
    console.log(e)
}
try{
    console.log(stringUtils.sortString(["Hello", "World"]))
}
catch(e){
    console.log(e)
}

try{
    console.log(stringUtils.replaceChar("Daddy",3))
}
catch(e){
    console.log(e)
}
try{
    console.log(stringUtils.replaceChar(" "))
}
catch(e){
    console.log(e)
}
try{
    console.log(stringUtils.mashUp("Patrick", "Hill", "$"))
}
catch(e){
    console.log(e)
}
try{
    console.log(stringUtils.mashUp("Hello", "World", 8))
}
catch(e){
    console.log(e)
}
try{
    console.log(objUtils.computeObjects([{x:2},{y:4}], x=>x*2));
}
catch(e){
    console.log(e)
}
try{
    console.log(objUtils.computeObjects())
}
catch(e){
    console.log(e)
}
try{
    console.log(objUtils.commonKeys({a: 2, b: {x: 7}}, {a: 3, b: {x: 7, y: 10}}))
}
catch(e){
    console.log(e)
}
try{
    console.log(objUtils.commonKeys({"a":1}, "abc"))
}
catch(e){
    console.log(e)
}
try{
    console.log(objUtils.flipObject({ a: 3, b: 7, c: { x: 1 } }))
}
catch(e){
    console.log(e)
}
try{
    console.log(objUtils.flipObject({}))
}
catch(e){
    console.log(e)
}