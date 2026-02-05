function counter(){
    let count=0;
    return  function(){
        count ++;
        console.log(count);
        
    };
}
const count = counter();

count();
count();
count();
count();
