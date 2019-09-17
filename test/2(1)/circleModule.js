/**1 */
// function circleFun(r){

//     circumference = () => {
//         var circumference = 2 * Math.PI * r;
//         return circumference;
//     }
//     area = () => {
//         var area = Math.PI * r * r;
//         return area;
//     }
//     return {
//         circumference:circumference,
//         area:area
//     };
// }
// module.exports =circleFun;

/**2 */
// var circle = {
//     circumference:circumference = (r) => {
//         return 2 * Math.PI * r;
//     },
//     area:area = (r) => {
//         return Math.PI * r * r;
//     }
// };
// module.exports =circle;


/**demo */
function circleFun(r){
    function circumference(){
        return 2 * Math.PI * r;
    }
    function area(){
        return Math.PI * r * r;
    }
    return {
        circumference:circumference,
        area:area
    };
}
module.exports ={circleFun:circleFun};