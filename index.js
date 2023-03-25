const names = ["Guadalupe", "Ollie", "Aki"];
function  writeCards(names, event){
    const messages =[];
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages
    
}
function countDown(n){
    for (let i = n; i > -1; i--){
        console.log(i);   
    }
}







