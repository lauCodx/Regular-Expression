function ValidateCard(cardNumber){

    const visaPattern = /^(4[0-9]{12}(?:[0-9]{3})?)$/;
    const vervePattern = /^(506099[0-9]{10,13}|5061[0-9]{12,15}|5062[0-9]{12,15}|5063[0-9]{12,15}|65003[0-9]{10,13})$/;
    const masterCardPattern = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|720[0-9]{12}))$/;
    
    if (visaPattern.test(cardNumber) === true) return{
        message: 'exist',
        type:'VISA CARD'
    };

    if (vervePattern.test(cardNumber) === true) return {
        message: 'exist',
        type:'VERVE CARD'
    };

    if (masterCardPattern.test(cardNumber) === true) return {
        message: 'exist',
        type:'MASTER CARD'
    };

    return 'INVALID CARD NUMBER!' 
       
} 

const card = ValidateCard('5399237156039766')

console.log( {card} )