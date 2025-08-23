let tayoObj = {
    nationality : 'Nigerian',
    age : 15,
}

let peaceObj = {
    nationality : 'American',
    age : 17,
}

let peculiarObj = {
    nationality :'Nigerian',
    age : 25
}

if(tayoObj.nationality == 'Nigerian' && tayoObj.age >= 18) {
    console.log('tayo is eligible to vote')
}

else {
    console.log('tayo is not eligible to vote')
}

if(peaceObj.nationality == 'Nierian' || peaceObj.age >= 18){
    console.log ('peace is eligible to vote')
}

else{
    console.log('peace is not eligible to vote')
}

if(peculiarObj.nationality == 'Nigerian' || peculiarObj.age >= 18){
    console.log('peculiar is eligible to vote')
}

else{
    console.log('peculiar is not eligible to vote')
}
