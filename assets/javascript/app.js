$(document).ready(function () {

    //Setting variables
    var time = 30;
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var cunanswered = 0;

    //Start the coundown 'shot clock'
    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    //Hide the questions and other contents until the start button is clicked
    $(window).on("load", hide);

    $('#start').on('click', function () {
        $(this).hide();
        show();
        run();
    });

    $('#done').on('click', function () {
        $('#start').hide();
        hide();
        rSummary();
        stop();
    });

    //Create result variables
    function rSummary() {
        var done = $('<h2>').html('Done!');
        var canswers = $('<p>').html('Correct answers: ' + correctCount);
        var wanswers = $('<p>').html('Incorrect answers: ' + wrongCount);
        var unanswered = $('<p>').html('Unanswered: ' + cunanswered);
        // creating new element so the result to appear in
        var newclass = $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
        //column so the results can exist in
        newclass.append(done);
        newclass.append(canswers);
        newclass.append(wanswers);
        newclass.append(unanswered);

        $('.row:nth(2)').append(newclass);
    }

    function decrement() {

        time--;

        //  Show the number in the #show-number tag.
        $("#timer").html(" " + time + " seconds");

      
        if (time === 1) {
            $("#timer").html(" " + time + " second");
        }
        
        else if (time === 0) {
            
            $('#start').hide();
            hide();
            rSummary();
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function hide() {
        $('.form-group').hide();
        $('#time').hide();
        $('#done').hide();
    }

    function show() {
        $('.form-group').show();
        $('#time').show();
        $('#done').show();
    }

    //calculate results summary
    $('input[type=radio]').on("change", function () {
        correctCount = $('input[value=right]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        cunanswered = (7 - (correctCount + wrongCount));
    });

});