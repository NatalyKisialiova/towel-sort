
// You should implement your task here.

module.exports = function towelSort (matrix) {
    // let newArray = [];
    // let k = 1;
    
    // if (matrix) {
    //     for (let i = 0; i < matrix.length; i++){
    //         if(k % 2 == 0){
    //             newArray.push(matrix[i].reverse());
    //         }else{
    //             newArray.push(matrix[i]);
    //         }
    //         k++;
    //     }
    //     return newArray.flat();
    // } else { return [];};    

    if (matrix) {
        return matrix.reduce((element, current, index) => index % 2 == 0 ? (element.concat(current)) : (element.concat(current.reverse())), []);
    }else {
        return [];
    }
}
