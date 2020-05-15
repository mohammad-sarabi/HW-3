function replaceItem(arr,item,replaceItem){
    let index=arr.indexOf(item);
    arr.splice(index,1,replaceItem);
    console.log(arr);
    }
    replaceItem([1,2,3,4,5,6],3,0)
    