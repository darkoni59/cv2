var wordsrandom = ['manger', 'dormir', 'cleptomane','prison','pomme','cliquer','vague',

    'sang','rage','antipode','capture','genocide'];


var random = wordsrandom[Math.floor(Math.random()*wordsrandom.length)];

var reponse = document.getElementById('mot_mystere');
var win=0;
var vie=5;



document.getElementById('send').addEventListener("click",

    function() {

        for (var i = 0; i < random.length; i++) {

            var mot = document.getElementById('answer').value;

            console.log(random);

            console.log(mot);

            if (mot == random[i])


            {


                if (document.getElementById('lettre'+i).innerHTML=="_")
                {
                    win++;
                    document.getElementById('lettre' + i).innerHTML=mot;

                }
            }

            }
            if (random.indexOf(mot)===-1){
                vie--;
                document.getElementById('indication').innerHTML='mauvaise lettre';
            }
            else{
                document.getElementById('indication').innerHTML=' ';
            }
            if (random.length===win) {

                document.getElementById('win').innerHTML='gg bolosse';
                var sons=document.createElement("audio");
                document.body.appendChild(sons);
                sons.src="https://www.memoclic.com/medias/sons-wav/2/727.mp3";
                sons.autoplay="false";
                sons.play();
            }

            if (vie==0){

                var sons2=document.createElement("audio");
                document.body.appendChild(sons2);
                sons2.src="http://s1download-universal-soundbank.com/mp3/sounds/7901.mp3";
                sons2.autoplay="false";
                sons2.play();
                alert('lol trop nul');
            }
            else {

                document.getElementById("ici").innerHTML="il te reste"+" "+ vie+"life";


            }


});
for (var i = 0; i < random.length; i++) {

    document.getElementById("lettre"+i).innerHTML="_";
}
document.getElementById('boutonreset').addEventListener('click',function reset() {
    window.location.reload(false);
});
