navContent = `
    <a class="navLogo" href="index.html"><img height="50" src="images/soleil.jpg"/></a>
    <a href="photovoltaique.html"><button class="navButton">Photovoltaique</button></a>
    <a href="thermique.html"><button class="navButton">Thermique</button></a>
    <a href="hybride.html"><button class="navButton">Hybride</button></a>
    <a href="aerovoltaique.html"><button class="navButton">Hybride aerovoltaiques</button></a>
    <a href="dualsun.html"><button class="navButton">Hybride dualsun</button></a>
    <a href="rentabilite.html"><button class="navButton">Simulateur</button></a>
    <div class="adContainer">
		<iframe data-aa="2176899" src="//acceptable.a-ads.com/2176899?size=Adaptive&background_color=230a0a&text_color=f2e9e9" style="border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;"></iframe>
	
        <!-- Pour mettre des pubs lol --!>
    </div>
`

function fillNavs(_content) {
    navs = document.getElementsByClassName("navBar");
    console.log(navs);
    for (i = 0; i<navs.length; i++) {
        navs[i].innerHTML = _content;
        console.log(navs[i]);
    }
}

fillNavs(navContent);