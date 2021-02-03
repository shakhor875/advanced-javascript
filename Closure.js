function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

// closure ki
// kono akta function ar moddha ar akta function thaka call kro othoba return kori ta hola sa akta close enverment toiri kra...   