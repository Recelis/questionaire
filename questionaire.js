
var data = {
    counter:0,
    questions:['are you sure?','are you ready to begin?', 'do you like dogs?', 'do you like cats?'],
    answers:[],
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

