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