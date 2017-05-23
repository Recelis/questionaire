
var data = {
    counter:0,
    questions:[
        'did you make your bed today?',
        'is your desk neat and tidy?',
        'do you have a plan for today?',
        'do you have a plan for tomorrow?',
        'is your calendar organised?',
        'do you have a long term plan?',
        'does your diary or to-do-list reflect your long-term plan?', 
        'are you procrastinating on a big complicated job?',
        'are you procrastinating on a scary task?',
        'do you have too much on your plate?',
        'did you do at least 4 hours of work before taking a break today?',
        'are your temptations easily available to you?',
        'are you eating clean?',
        'did you do your base minimal exercise today?',
        'was the last time you had contact with friends and external world less than 3 days?',
        'have you made a github commit today?',
        'did you read any news articles today?', // change no answer
        'did you take notes on the news articles?',
        'did you read any books today?',
        'did you take time to think about what you read today?',
        'did any book or news article or video make you unnecessarily upset?',
        'did you play any video games today?',
        'did you go to sleep late last night?',
        'do you feel grateful to anyone?'],
    answers:[
        {no:'go and change this. Ready to move on?',
        }
    ],
    suggestions:[],
    changeCounter:function(id){
        if (id === 'yes'){
            data.counter++;
            if (data.counter > data.questions.length -1) return data.counter = 0;
            return data.counter;
        } else{
            data.counter--;
            if (data.counter < 0) return data.counter = data.questions.length -1;
            return data.counter;
        }
    }
};

var handler = {
    // button listeners
    buttonCreateListeners: function(id){
        document.getElementById('no').addEventListener("click",handler.changeQuestion(id));
    },
    changeQuestion:function(id){
        data.changeCounter(id);
        view.updateText();// update view
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
    updateText: function(){
        document.getElementById('textQuestions').innerHTML = data.questions[data.counter]; // this hardcoded textcontent stinks
    }

};


document.addEventListener('DOMContentLoaded', function(){
    // add buttons to placeButton
    view.createButtons('yes', 'placeButton');
    view.createButtons('no', 'placeButton');
    // create listeners for buttons
    // handler.buttonCreateListeners('yes');
    
});

