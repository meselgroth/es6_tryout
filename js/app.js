(function(){
    'use strict';

    console.log(LiteralShortHand());

    let {hello, goodbye} = LiteralShortHand();
    console.log(hello);
    console.log(goodbye);
    
    function LiteralShortHand(){
        let hello = "hello";
        let goodbye = "goodbye";
        
        return { hello, goodbye };
    }

})();