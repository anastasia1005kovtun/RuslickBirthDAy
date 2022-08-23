 export const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)
//
// const getRandomColor = () => {
//     // return colors[getRandom(0, colors.length - 1)]
//
//
// const getRandomColor = () => {
//     // return colors[getRandom(0, colors.length - 1)]
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }