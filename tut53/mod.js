console.log("This is modules");

function average(arr){
    let sum =0;
    arr.forEach(element =>{
        sum += element;
    });
    return sum/arr.length;
}
module.exports = {
    avg: average,
    name:"Gaurav",
    repo:"GitHub"
}
// module.export.name="gaurav"
//module.export is object