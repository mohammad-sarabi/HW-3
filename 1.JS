function deleteArry(arry,index){
  if(index>-1){
  arry.splice(index-1, 1); 
  console.log(arry);
  }
}
deleteArry([0,1,2,3,4,5,6],2)