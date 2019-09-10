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

var circle = {
    circumference:circumference = (r) => {
        return 2 * Math.PI * r;
    },
    area:area = (r) => {
        return Math.PI * r * r;
    }
};
module.exports =circle;