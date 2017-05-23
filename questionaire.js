
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
        'did you get through a setback?',
        'did you take a step back from a setback and look at a bigger picture?',
        'are you simplified so that you don\'t too much on your plate?',
        'did you do at least 4 hours of work before taking a break today?',
        'have you got rid of easily accessible temptations?',
        'are you eating clean?',
        'did you do your base minimal exercise today?',
        'was the last time you had contact with friends and external world less than 3 days?',
        'have you made a github commit today?',
        'did you read any news articles today? ignore if you had not.', // change no answer
        'did you read any books today?',
        'did you take time to think about what you read today?',
        'did you control your emotions if any book or news article or video make you unnecessarily upset today?',
        'did you refrain from playing any video games today?',
        'did you go to sleep early last night?',
        'do you feel grateful to anyone?'],
    answers:{
        no:'Change your no to a yes and carry on. Ready to move on?',
        
    },
    suggestions:{
        advice: [
            'Make your bed so that you start off the day having completed one thing well.',
            'Having your desk neat and tidy means that you won\'t be easily distracted and you will be more focussed.',
            'When you have a plan for the day, you\'ll easily focus and know exactly what you have to do.',
            'When you have plan for tomorrow, you will have a purpose for the next day, you will have anticipation and jump out of bed ready to conquer the world.',
            'When your calendar is organised, you will plan and be able to go to your events right on time, getting the most out of that event.',
            'When you have a long-term plan, then you strive through life with purpose and confidence.',
            'When your daily diary or to-do list reflects your long term plan, then your execution of your plan will be achieved.',
            'When you break down a big complicated job into smaller manageable tasks, you will be able easily get through the big problems.',
            'When you get stuck on a task that requires heaps of courage, just know that these are challenges that help you grow to become more like a person who can conquer anything.',
            'When you carry through on a setback, you build resilience. A great characteristic to have!',
            'Sometimes when you have a setback, it\'s important to take a step back and look for solutions in a neighbouring field. Sometimes solutions are just another field away.',
            'When you focus on a few things, you can get a lot done.',
            'Try to maximise your achievements of the day before you take your first break. Breaks are times when you can get distracted and lose momentum. Try to do a fairly big amount of work before you take that first break.',
            'Distractions are everywhere, if you can clear out threats of distractions. Blocking out youtube, wiping your caches, you will be less inclined to be tempted to waste time. Life is pretty short.',
            'Your health is extremely important, and eating well is a major part in living healthily. Stick away from junk food, high fat foods and sweets. Try to eat as much vegetables as possible.',
            'Remember the PERMA model? Good relationships with friends and family are very important to keeping you happy and content with your life. Don\'t forget that.',
            'You\'re trying to become a software developer one day. And a good one too. So you\'ll need to practise. All the time, every day.',
            'Reading the news is very important, to keeping up with the things of interest and with the world. But remember to make sure that you read only if you are currently tracking what you are reading. Don\'t make the mistake of reading the news for the fun of it.',
            'Reading books is extremely important to furthering your knowledge base, and helping you become a faster learner and smarter person.',
            'Remember that  reading for pleasure is not very useful, unless you take the time out to think about how it helps with your life.',
            'Usually, books, news articles, and videos, especially the latter two types, are designed to keep you hooked and continually reading and watching content for as long as possible to generate ad views. Remember to distant yourself from the content. You must never take those things personally.',
            'Playing video games like Call of Duty, Age of Empires and other games that you enjoy can help improve your eyesight, but remember that it is not your core passion.',
            'Sleeping early and waking up early is extremely important to having good health and being mentally strong for the next day.',
            'Gratefulness to others is a key to having a good temperament, and makes life a lot more enjoyable and rewarding. Try to thank people internally and externally.',
        ],
        last: 'looks like you are on the right track! Keep moving forward, and if you run into any difficulties, just come back here!Your workflow analysis will be presented soon!',
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

