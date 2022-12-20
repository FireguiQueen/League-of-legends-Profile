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


var cabeçalho = document.getElementsByTagName('header')[0];
cabeçalho.innerHTML = CreatMenu()




function CreatChampionCard(champ){
    return`
    <div class="champion-card">
        <a href="https://www.leagueoflegends.com/pt-br/champions/${champ}/">
            <img src="./Page/Others/Champs/${champ}">
            <h2 id="macaco">${champ}</h2> 
        </a>
    </div>
    `
}

var campeoes = document.getElementById('mymains');
campeoes.innerHTML = 
CreatChampionCard('kassadin') + 
CreatChampionCard('akali') + 
CreatChampionCard('ekko') + 
CreatChampionCard('kled') + 
CreatChampionCard('neeko') + 
CreatChampionCard('caitlyn') + 
CreatChampionCard('fizz') + 
CreatChampionCard('veigar') 




