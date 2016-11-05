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

    function callFunction(callback){
        callback();
    };
    callFunction(() => { console.log(hello + ' again')});
    
    class Phrase{
        
        constructor(langA, langB){
            this._langA = langA;
            this._langB = langB;
        }
        get LangA(){
            return this._langA;
        }
        printMe(){
            console.log("printMe");
            console.log("langA" + this._langA);
            console.log("langB" + this._langB);
        }
    }
    
    let phrase = new Phrase("good day", "Guten Tag");
    console.log("1 langA" + phrase._langA);
    console.log("2 langA" + phrase.LangA);
    phrase._langB = "ciao"
    phrase.printMe();
})();