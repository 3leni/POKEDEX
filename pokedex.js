const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./image/Pokemon-Pokeball.png");
            pokeNam("No encontrado")
            pokeId("##");
            pWeight("#");
            pokeHeight("#");
            pExperience("#");
            const pokeTypes = document.getElementById("type");
            pokeTypes.innerHTML ="Type : ---";
            const pokeAbilities=document.getElementById("abilities");
            pokeAbilities.innerHTML="-----";
            const pokeStats = document.getElementById("stats");
             pokeStats.innerHTML ="----";

        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pname = data.name;
            let pid = data.id;
            let pweight = data.weight;
            let pheight = data.height;
            let pexperience = data.base_experience;
            let pokeType = data.types;
            let pokeAbil= data.abilities;
            let pokeStat = data.stats;
            pokeImage(pokeImg);
            pokeNam(pname);
            pokeId(pid);
            pWeight(pweight);
            pokeHeight(pheight);
            pExperience(pexperience);
            pokeData(pokeAbil);
            pokeInfo(pokeType);
            pokeSt(pokeStat);
            console.log(pokeImg);
            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeId = (id) => {
    const idScreen = document.getElementById('id-pokemon');
    idScreen.innerHTML =  `#${id}`;
}
const pokeNam = (names) => {
    const nameScreen = document.getElementById('name-pokemon');
    nameScreen.innerHTML = names;
}
const pWeight = (w) => {
    const pokeweight = document.getElementById('weight');
    pokeweight.innerHTML = `Weight: ${w / 10}kg`;
}
const pokeHeight = (h) => {
    const pokeHeight = document.getElementById("height");
    pokeHeight.innerHTML = `Height: ${h * 10}cm`;
}
const pExperience = (exp) => {
    const pokeBase = document.getElementById("bExperience"); 
    pokeBase.innerHTML = `Experience: ${exp}`;
}
const pokeData=(abilites)=>{
    const pokeAbilities=document.getElementById("abilities");
    const abilitiesName=abilites.map(item=>item.ability.name);
    pokeAbilities.innerHTML=">"+ abilitiesName[0]+"<br>"+">"+abilitiesName[1]+"<br>"+">"+abilitiesName[2];
}
const pokeInfo = (types) => {
    const pokeTypes = document.getElementById("type");
    const typesName = types.map(item => item.type.name);
    pokeTypes.innerHTML ="Type : "+ typesName[0]+"\n"+","+typesName[1];

}
const pokeSt = (contStats) => {
    const pokeStats = document.getElementById("stats");
    const statsName = contStats.map(item => item.stat.name);
    const statsNumber =contStats.map(item => item.base_stat);
    pokeStats.innerHTML =">"+statsName[0]+":"+statsNumber[0]+"<br>"+">"+statsName[1]+":"+statsNumber[1]+"<br>"+">"+
    statsName[2]+":"+statsNumber[2]+"<br>"+">"+statsName[5]+":"+statsNumber[5]+"<br>"+">"+statsName[3]+":"+statsNumber[3]+"<br>"+
    ">"+statsName[4]+":"+statsNumber[4];
}