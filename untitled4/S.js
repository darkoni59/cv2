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


            }

            if (vie==0){
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
