function DisplayTime(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let session = document.getElementById('session');
    if(hrs >11){
        session.innerText = 'PM';
    }
    else {
        session.innerText = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(DisplayTime,1000);

function setalaram(){
    let AlaramTime = document.getElementById('alarm');
        AlaramTime.innerText='Party Time';

       
    var time = new Date();    
    let hours=time.getHours();
    var a=document.getElementById('tiffin').value;    
    var b=document.getElementById('lunch').value;  
    var c=document.getElementById('teabraek').value;  
    var d=document.getElementById('sleepmode').value;  
   

    if(a >= hours){
        document.getElementById("mrng").innerHTML="GOOD MORNING";
        document.getElementById("brakefast").innerHTML="GRAB SOME HEALTHY";
        document.getElementById("image").style.backgroundImage="url('Component-1.svg')";
        document.getElementById("timechange1").innerText="10AM - 11AM";
    }

    if(b >= hours){
        document.getElementById("mrng").innerHTML="GOOD AFTERNOON !!";
        document.getElementById("brakefast").innerHTML="LET'S HAVE SOME LUNCH";
        document.getElementById("image").style.backgroundImage="url('Component-2.svg')";
        document.getElementById("timechange2").innerText="12PM - 01PM";
    }

    if(c >= hours){
        document.getElementById("mrng").innerHTML="GOOD EVENING !!";
        document.getElementById("brakefast").innerHTML=" STOP YAWING, GET SOME TEA";
        document.getElementById('image').style.backgroundImage="url('Component-3.png')";
        document.getElementById("timechange3").innerText="12PM - 05PM ";
    }

    if(d >= hours){
        document.getElementById("mrng").innerHTML="GOOD NIGHT !!";
        document.getElementById("brakefast").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById('image').style.backgroundImage="url('Component-4.svg')";
        document.getElementById("timechange4").innerText="08PM - 09PM";
    }
    }
