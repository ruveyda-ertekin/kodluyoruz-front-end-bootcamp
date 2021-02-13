let ad="Rüveyda "
var resitYas="18"
var  ruhsatAlacagıYas=parseInt(prompt("Ne zaman ruhsat alacak?"));

for(var i=0;i<=45;i++){

    if(i===0){
       document.write( ad + "dogdu.");   
    }

    else if(i===18){
        document.write( ad + i +" yaşında reşit oldu." );
    }

    else if(i===19){
        document.write( ad + i +" yaşında üniversiteye girdi." );
    }

    else if(i===23){
        document.write( ad + i +" yaşında mezun oldu." );
    }

    else if(i===resitYas){
        document.write(ad +" "+ resitYas +" yaşında ruhsat aldın. ");
    }

    else if(i==30){
        document.write(ad +" "+ i +" yaşındasın 5 yıldır avukatsın mutlu musun?");
    }

    else if(i>=resitYas){
        document.write(ad +" "+ i + " yaşındasın mutlusun.");
    }

    else{
        document.write(ad +" "+ i + " yaşındasın.");
    }

}