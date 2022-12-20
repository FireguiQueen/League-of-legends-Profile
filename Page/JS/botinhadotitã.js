function CreatMenu(){
    return`
    <nav> 
        <ul> 
            <li><a href="./index.html"><img id="logo" src="./Page/Others/Logo/League of legends.svg"> </a></li> 
        </ul>

    <ul id="menu"> 
        <li><a href="./about.html">Sobre mim  </a></li>
        <span class="square"> </span>
        <li><a href="./playing.html">Durante o game </a></li>
        <span class="square"> </span>
        <li><a href="./mains.html">Mains </a></li>
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
        <img src="./Page/Others/Champs/${champ}.jpg">
        <h2>${champ}</h2> 
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




