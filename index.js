// code your solution here
function saturdayFun (activity){
    switch(activity){
        default:
            return "This Saturday, I want to roller-skate!"
        case "bathe my dog":
            return "This Saturday, I want to bathe my dog!"
    }
}

function mondayWork (work){
    switch(work){
        default:
            return "This Monday, I will go to the office."
        case "work from home":
            return "This Monday, I will work from home."
    }
}


function wrapAdjective (var2 = "*"){
    return function(var1 = "special"){
        return `You are ${var2}${var1}${var2}!`;
        };

    }


