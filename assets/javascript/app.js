$(document).ready(function() {

    //These are global variables
    var time = 30;
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var cunanswered = 0;
    
    //Start the coundown
    function run() {
        intervalId = setInterval(decrement, 1000);
    }
    
    //Hide the questions and other contents
    $(window).on("load", hide);
    
    $('#start').on('click', function(){
        $(this).hide();
        show();
        run();
    });
    
    $('#done').on('click', function(){
        $('#start').hide();
        hide();
        rSummary();
        stop();
    });
    
    //Create the elements for the result page
    function rSummary(){
        var alldone = $('<h2>').html('Done!');
        var canswers = $('<p>').html('Correct answers: ' + correctCount);
        var wanswers = $('<p>').html('Incorrect answers: ' + wrongCount);
        var unanswered = $('<p>').html('Unanswered: ' + cunanswered);
        var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
        newclass.append(alldone);
        newclass.append(canswers);
        newclass.append(wanswers);
        newclass.append(unanswered);
        $('.row:nth(2)').append(newclass);
    }
    
    function decrement() {
        //  Decrease number by one.
        time--;
         
         //  Show the number in the #show-number tag.
         $("#timer").html(" " + time + " seconds");
        
        //  Once number hits one...
        if (time === 1) {
            $("#timer").html(" " + time + " second");
        }
          //  Once number hits zero...
        else if (time === 0) {
            //  ...run the stop function.
            $('#start').hide();
            hide();
            rSummary();
            stop();
        }
    }
    
    function stop() {
        clearInterval(intervalId);
    }
    
    
    
    //This function will hide some contents
    function hide(){
        $('.form-group').hide();
        $('#time').hide();
        $('#done').hide();
    }
    
    //This function will hide some contents
    function show() {
        $('.form-group').show();
        $('#time').show();
        $('#done').show();
    }
    
    //Grab all radio buttons and calculate good and incorrect answers when a change occurs
    $('input[type=radio]').on("change", function() {
       correctCount =  $('input[value=right]:checked').length;
       wrongCount = $('input[value=wrong]:checked').length;
       cunanswered = (8-(correctCount + wrongCount));
    });
    
    });