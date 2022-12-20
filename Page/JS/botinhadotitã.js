function CreatMenu(){
    return`
    <nav> 
        <ul> 
            <li><a href="./index.html" class="sublinhado"><img id="logo" src="./Page/Others/Logo/League of legends.svg"> </a></li> 
            <li><a target="_blank" href="https://www.op.gg/summoners/br/FireguiQueen" alt="perfil no op.gg" class="infogeral">op.gg</a></li>
        </ul>

        <ul id="menu"> 
            <li><a href="./about.html" class="sublinhado">Sobre mim</a></li>
            <span class="square"> </span>
            <li><a href="./playing.html" class="sublinhado">A partida</a></li>
            <span class="square"> </span>
            <li><a href="./mains.html" class="sublinhado">Mains </a></li>
        </ul>
    </nav>
    `
}

let atraso = 0;
function CreatChampionCard(champ){
    atraso += 0.14;
    return`
    <div class="champion-card" style="opacity: 0; filter:blue(100px); animation: appear .5s linear forwards ${atraso}s";>
        <a href="https://www.leagueoflegends.com/pt-br/champions/${champ}/">
            <img alt="${champ}'s image" src="./Page/Others/Champs/${champ}.jpg">
            <h2 id="macaco">${champ}</h2> 
        </a>
    </div>
    `
}



var cabeçalho = document.getElementsByTagName('header')[0];
cabeçalho.innerHTML = CreatMenu()

var campeoes = document.getElementById('mymains');
campeoes.innerHTML = 
CreatChampionCard('kassadin')+ 
CreatChampionCard('akali') + 
CreatChampionCard('ekko') + 
CreatChampionCard('kled') + 
CreatChampionCard('neeko') + 
CreatChampionCard('caitlyn') + 
CreatChampionCard('fizz') + 
CreatChampionCard('veigar') 




