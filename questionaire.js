
var data = {
    counter:-1,
    noCounts: 0,
    questions:[
        'did you make your bed today?',
        'is your desk neat and tidy?',
        'do you have a plan for today?',
        'do you have a plan for tomorrow?',
        'is your calendar organised?',
        'do you have a long term plan?',
        'does your diary or to-do-list reflect your long-term plan?', 
        'did you break down a big complicated job so that you would avoid procrastination?',
        'did you avoid procrastinating on a scary task?',
        'are you simplified so that you don\'t too much on your plate?',
        'did you do at least 4 hours of work before taking a break today?',
        'have you got rid of easily accessible temptations?',
        'are you eating clean?',
        'did you do your base minimal exercise today?',
        'was the last time you had contact with friends and external world less than 3 days?',
        'have you made a github commit today?',
        'did you read any news articles today? ignore if you had not.', // change no answer
        'did you take notes on the news articles? ignore if you had not.',
        'did you read any books today?',
        'did you take time to think about what you read today?',
        'did you control your emotions if any book or news article or video make you unnecessarily upset today?',
        'did you refrain from playing any video games today?',
        'did you go to sleep early last night?',
        'do you feel grateful to anyone?'],
    answers:{
        no:'change your no to a yes and carry on. Ready to move on?',
        
    },
    suggestions:{
        advice: [

        ],
        last: 'looks like you are on the right track! Keep moving forward, and if you run into any difficulties, just come back here!',
    },
    returnText:function(id){
        if (id === 'yes'){
            if (data.counter >= data.questions.length-1){
                // save noCount to external file with date.
                return data.suggestions.last;
            } else{
                data.counter++;
            }
            return data.questions[data.counter];
        } else{
            data.noCounts++;
            data.counter--; // so that you bounce back to where you were
            console.log(data.counter);
            return data.answers.no;
        }
    }
};

var handler = {
    // button listeners
    changeQuestion:function(id){
        var message = data.returnText(id);
        view.updateText(message);// update view        
    },
    hideNoButton:function(){

    }
};

var view = {
    // create buttons
    createButtons: function(id, parent){ 
        var newButton = document.createElement('button');
        newButton.id = id;
        newButton.textContent = id; 
        document.getElementById(parent).appendChild(newButton);
        newButton.onclick = function(){
            handler.changeQuestion(id);
        };
        return id;
    },
    updateText: function(message){
        document.getElementById('textQuestions').innerHTML = message; // this hardcoded textcontent stinks
    },
    createNoGraph: function(){

    },
    createMaxNoTable: function(){

    },

};


document.addEventListener('DOMContentLoaded', function(){
    // add buttons to placeButton
    view.createButtons('yes', 'placeButton');
    view.createButtons('no', 'placeButton');    
});

