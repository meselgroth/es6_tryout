(function(){
    'use strict';

    let hello = "hello";
    let goodbye = "goodbye";

    console.log(LiteralShortHand());
    
    function LiteralShortHand(){
        return { hello, goodbye };
    }
})();