function insertionSortReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        var val = arr[i];
        var j;
        for(j = i; j < arr.length && arr[j+1] < val;j++) {
            arr[j] = arr[j+1];
        }
        arr[j]= val;
    }
    return arr;
}
console.log(insertionSortReverse([10,20,4,-1,5,9,3,-190,40,21]));
// get some help from TA
