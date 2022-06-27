setInterval(function() {
    var date = new Date();
    document.getElementById('time').innerHTML = date.toLocaleTimeString();
},1000)


function startTimer(timerValue){
    var date = new Date();
    var targetDate = new Date();

    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)


    targetDate.setHours(0)
    targetDate.setMinutes(0)
    targetDate.setSeconds(timerValue)



    var currentInterval =  setInterval(function() {
        
        if(targetDate >= date) {
            document.getElementById('timer').innerHTML = targetDate.toLocaleTimeString();
            if(targetDate.getSeconds() < 5){
                document.getElementById('timer').style.color = 'red';
            }
            targetDate.setSeconds(targetDate.getSeconds() - 1);
        } else{
            alert('Timer is up')
            clearInterval(currentInterval);
        }
        
    },1000)


}