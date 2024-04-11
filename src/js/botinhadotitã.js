// Criar o layout do header
function CreatMenu(){
    return`
    <nav> 
        <ul> 
            <li><a href="./index.html" class=""><img id="logo" src="./src/assets/logo/League of legends.svg"> </a></li>
            <li><a target="_blank" href="https://www.op.gg/summoners/br/FireguiQueen" alt="perfil no op.gg" class="infogeral">op.gg</a></li>
        </ul>

        <ul id="menu"> 
            <li><a href="./about.html" class="sublinhado">Sobre mim</a></li>
            <span class="square"> </span>
            <li><a href="./playing.html" class="sublinhado">Partida</a></li>
            <span class="square"> </span>
            <li><a href="./mains.html" class="sublinhado">Mains </a></li>
        </ul>
    </nav>
    `
}

// Diferentes partes da página 
const insercoes = [document.getElementById('mymains'), document.getElementsByTagName('header')[0]]
const [inserirMain, inserirHeader] = insercoes;

// inserir o header na página
inserirHeader.innerHTML = CreatMenu()


let atraso = 0;
function CreatChampionCard(champ){
    atraso += 0.14;
    return`
    <div class="champion-card" style="opacity: 0; filter:blue(100px); animation: appear .5s linear forwards ${atraso}s";>
        <a href="https://www.leagueoflegends.com/pt-br/champions/${champ}/">
            <img alt="${champ}'s image" src="./src/assets/champions/${champ}.jpg">
            <h2 id="macaco">${champ}</h2> 
        </a>
    </div>
    `
}


const mains = ['kassadin', 'akali', 'ekko', 'kled', 'neeko', 'caitlyn', 'fizz', 'veigar'];
for(let i = 0; i < mains.length; i++)
{
    inserirMain.innerHTML += CreatChampionCard(mains[i])
}
