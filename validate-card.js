function ValidateCard(cardNumber){

    const visaPattern = /^(4[0-9]{12}(?:[0-9]{3})?)$/;
    const vervePattern = /^(506099[0-9]{10,13}|5061[0-9]{12,15}|5062[0-9]{12,15}|5063[0-9]{12,15}|65003[0-9]{10,13})$/;
    const masterCardPattern = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[01][0-9]{13}|720[0-9]{12}))$/;
    
    if (visaPattern.test(cardNumber) === true) return{
        message: true,
        type:'VISA CARD'
    };

    if (vervePattern.test(cardNumber) === true) return {
        message: true,
        type:'VERVE CARD'
    };

    if (masterCardPattern.test(cardNumber) === true) return {
        message: true,
        type:'MASTER CARD'
    };

    return 'INVALID CARD NUMBER!' 
       
} 

const card1 = ValidateCard('4909589907006')

console.log( {card1} )