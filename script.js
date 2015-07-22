var timer;



main = function()
{
var audio = document.getElementById('background_audio');
document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);


        speed = document.getElementById("speed").value;
        var c = document.getElementById("test");
        var ctx = c.getContext("2d");
        var att =document.getElementById("attenuation").value;
        attOpt = "rgba(0,0,0,"+att+")";
        c.height = window.innerHeight;
        c.width = window.innerWidth;
                var chinese = "人爪甲1今g爪电甶a男甸爪町画k0甼爪甾甿人畁j畂1h畃畄爪g畇畈人 畊畋界畍爪人畐畑";
        chinese = chinese.split("");
        var font_size = document.getElementById("sizeFnt").value;
        fnt=font_size+"px cursive";
        var columns = c.width/font_size;
        var drops =[];
        for (var x = 0; x < columns; x++)
            drops[x]=1;

    function draw(){
        ctx.fillStyle = attOpt;
        ctx.fillRect(0,0,c.width,c.height);

        ctx.fillStyle= "#0F0";
        ctx.font = fnt;


        for(var i=0; i<drops.length;i++)
            {
        var text = chinese[Math.floor(Math.random()*chinese.length)];
        ctx.fillStyle = "#0F0";
        ctx.fillText(text, i*font_size, drops[i]*font_size);
         if(text===" " && Math.random()>0.50)
            drops[i] = drops[i]+10;
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            {
                drops[i] = 0;

                if (Math.random()>=0.98) {
                font_size++;
                fnt=font_size+"px cursive";
                columns = c.width/font_size;
            }


            }

       drops[i]++;

    };




    };

    timer = setInterval(draw,speed);
};

stopRain = function(){
    clearInterval(timer);
    main();
};

outputUpdate=function(vol) {
  document.querySelector('#speedOut').value = vol;
  stopRain();
};

outputUpdateFnt=function(vol) {
  document.querySelector('#sizeFntOut').value = vol;
  stopRain();
};

outputUpdateAt=function(vol) {
  document.querySelector('#attenuationOut').value = vol;
  stopRain();
};


