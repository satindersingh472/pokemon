function select_pokemon_dragon(details){
    let user_pokemon_cookies_dragon = JSON.stringify(dragon);
    Cookies.set(`user_pokemon`,user_pokemon_cookies_dragon);
    Cookies.set(`user_health`, dragon[`health`]);

    let enemy_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`enemy_pokemon`,enemy_pokemon_cookies_frog);
    Cookies.set(`enemy_health`, frog[`health`]);

    location.href = `battle.html`;

};

function select_pokemon_frog(details){
    let user_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`user_pokemon`,user_pokemon_cookies_frog);
    Cookies.set(`user_health`, frog[`health`]);

    let enemy_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`enemy_pokemon`,enemy_pokemon_cookies_frog);
    Cookies.set(`enemy_health`,frog[`health`]);

    location.href = `battle.html`;
};

function select_pokemon_pikachu(details){
    let user_pokemon_cookies_pikachu = JSON.stringify(pikachu);
    Cookies.set(`user_pokemon`,user_pokemon_cookies_pikachu);
    Cookies.set(`user_health`, pikachu[`health`]);

    let enemy_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`enemy_pokemon`,enemy_pokemon_cookies_frog);
    Cookies.set(`enemy_health`, frog[`health`]);

    location.href = `battle.html`;
};

function select_pokemon_stone(details){
    let user_pokemon_cookies_stone = JSON.stringify(stone);
    Cookies.set(`user_pokemon`,user_pokemon_cookies_stone);
    Cookies.set(`user_health`, stone[`health`]);

    let enemy_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`enemy_pokemon`,enemy_pokemon_cookies_frog);
    Cookies.set(`enemy_health`, frog[`health`]);

    location.href = `battle.html`;
};


let dragon = {
    name: `Dragon`,
    health: 80,
    attacks: `punches`,
    img_url: `/images/dragon.gif`
};

let frog = {
    name: `Frog`,
    health: 110,
    attacks: `poison`,
    img_url: `/images/frog.gif`
};

let pikachu = {
    name: `Pikachu`,
    health: 100,
    attacks: `electricity`,
    img_url: `/images/pikachu.gif`
};
let stone = {
    name: `Stone`,
    health: 90,
    attacks: `hitting`,
    img_url: `/images/stone.gif`
    
};

let dragon_button = document.getElementById(`choose_dragon`);
dragon_button.addEventListener(`click`, select_pokemon_dragon);
 
let frog_button = document.getElementById(`choose_frog`);
frog_button.addEventListener(`click`, select_pokemon_frog);

let pikachu_button = document.getElementById(`choose_pikachu`);
pikachu_button.addEventListener(`click`, select_pokemon_pikachu);

let stone_button = document.getElementById(`choose_stone`);
stone_button.addEventListener(`click`,select_pokemon_stone);