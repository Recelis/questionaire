
var data = {
    counter:-1,
    noCounts: 0,
    questions:[
        'did you make your bed today?',
        'is your desk neat and tidy? Such as clear of distractions especially electronics (except for Ultrabuddy in your bedroom)',
        'do you have a plan for today?',
        'do you have a plan for tomorrow?',
        'is your calendar organised?',
        'do you have a long term plan?',
        'does your diary or to-do-list reflect your long-term plan?', 
        'are you simplified so that you are only doing at most three projects?',
        'are you living healthy, eating well, sleeping well, and exercising well?',

        'was the last time you had contact with friends and external world less than 3 days?',

        'have you made a github commit today?',
        'did you read any books today?',

        'did you feel any self-pity for yourself today?',
        'have you made one change to make your life better?',

        'do you feel grateful to anyone?'],
    answers:{
        no:'Change your no to a yes and carry on. Ready to move on?',
        
    },
    suggestions:{
        advice: [
            'Make your bed so that you start off the day having completed one thing well.',
            'Having your desk neat and tidy means that you won\'t be easily distracted and you will be more focussed. Also electronics before bed is a bad idea.',
            'When you have a plan for the day, you\'ll easily focus and know exactly what you have to do.',
            'When you have plan for tomorrow, you will have a purpose for the next day, you will have anticipation and jump out of bed ready to conquer the world.',
            'When your calendar is organised, you will plan and be able to go to your events right on time, getting the most out of that event.',
            'When you have a long-term plan, then you strive through life with purpose and confidence.',
            'When your daily diary or to-do list reflects your long term plan, then your execution of your plan will be achieved.',
            'When you focus on a few things, you can get a lot done.',
            'Your health is extremely important, and eating well is a major part in living healthily. Stick away from junk food, high fat foods and sweets. Try to eat as much vegetables as possible. Get enough sleep! And make sure that you do some exercise everyday!',
            'Remember the PERMA model? Good relationships with friends and family are very important to keeping you happy and content with your life. Don\'t forget that.',
            'You\'re trying to become a software developer one day. And a good one too. So you\'ll need to practise. All the time, every day.',
            'Reading books is extremely important to furthering your knowledge base, and helping you become a faster learner and smarter person.',
            'There\'s a lot of media that makes a lot of money off the belief that you are not living a great life. Remember as long as you\'re alive, you\'re pretty lucky. Believe in yourself, and you can conquer anything.',
            'When you start making changes to your life to make it better, it slowly adds up, and sooner or later, you\'ve got a wonderful life. Plus, you\'ll become more optimistic and positive about life in general. Double Whammy!',
            'Gratefulness to others is a key to having a good temperament, and makes life a lot more enjoyable and rewarding. Try to thank people internally and externally.',
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


document.addEventListener('DOMContentLoaded', function(){
    // add buttons to placeButton
    view.createButtons('yes', 'placeButton');
    view.createButtons('no', 'placeButton');    
});

