
var data = {
    counter:-1,
    noCounts: 0,
    questions:[
        "have you got a plan to do things?",
        "have you tried to slow down today?",
        "have you tried to be more careful today?",
        "have you sought out all relevant information regarding this problem?",
        "have you tried to stretch your limits today?",
    ],
    answers:{
        no:'Change your no to a yes and carry on. Ready to move on?',
        
    },
    suggestions:{
        advice: [
            "come on, a plan is the first thing you need",
            "trying to rush things will lead to big mistakes that you will need to account for later on. SLOW DOWN!",
            "careful means to be utterly focussed on the topic, whilst creating notes for you to go back to.",
            "try to gain a structure of the problem so that you can get an understanding of what's required to solve this.",
            "make a habit of stretching yourself so that you don't coast as much if you wish to become great."
        ],
        last: 'Looks like you\'re doing well! Life\'s good, keep moving forward, and if you run into any difficulties, just come back here! Good luck with tomorrow!',
    },
    returnText:function(id){
        if (id === 'yes'){
            if (data.counter >= data.questions.length-1){
                // save noCount to external file with date.

                // hide buttons
                document.getElementById('yes').style.display = 'none';
                document.getElementById('no').style.display = 'none';
                
                return data.suggestions.last;
            } else{
                data.counter++;
            }
            return data.questions[data.counter];
        } else{
            data.noCounts++;
            data.counter--; // so that you bounce back to where you were
            return data.suggestions.advice[data.counter+1] +' '+ data.answers.no;
        }
    }
};

var handler = {
    // button listeners
    changeQuestion:function(id){
        if (id === 'no'){
            document.getElementById(id).style.display = 'none';// hide button
        } else{
            document.getElementById('no').style.display = '';
        }  
        var message = data.returnText(id);
        view.updateText(message);// update view  
    },
};

var view = {
    // create buttons
    createButtons: function(id, parent){ 
        var newButton = document.createElement('button');
        newButton.id = id;
        newButton.textContent = id;
        newButton.classList.add('btn'); 
        newButton.classList.add('btn-primary');
        document.getElementById(parent).appendChild(newButton);
        if (id === 'no'){
            document.getElementById(id).style.display = 'none';// hide button initially, please refactor this
        }
        newButton.onclick = function(){
            handler.changeQuestion(id);
        };
        return id;
    },
    updateText: function(message){
        document.getElementById('content').textContent = message; // this hardcoded textcontent stinks
    },
    createNoGraph: function(){

    },
    createMaxNoTable: function(){

    },

};

function openWindow(){
    window.open("https://github.com/Recelis/questionaire",'_blank');
}

document.addEventListener('DOMContentLoaded', function(){
    // add buttons to placeButton
    view.createButtons('yes', 'placeButton');
    view.createButtons('no', 'placeButton');    
});

