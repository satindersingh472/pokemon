// function select pokemon dragon will stringify dragon object
// set cookies user pokemon to the value of stringify object
// set cookies user health to the value of object [health]
function select_pokemon_dragon(details){
    let user_pokemon_cookies_dragon = JSON.stringify(dragon);
    Cookies.set(`user_pokemon`,user_pokemon_cookies_dragon);
    Cookies.set(`user_health`, dragon[`health`]);

    // below code is doing same thing for enemy object as select pokemon function doing for dragon
    let enemy_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`enemy_pokemon`,enemy_pokemon_cookies_frog);
    Cookies.set(`enemy_health`, frog[`health`]);

    location.href = `battle.html`;

};
// function select pokemon frog will stringify frog object
// set cookies user pokemon to the value of stringify object
// set cookies user health to the value of object [health]
function select_pokemon_frog(details){
    let user_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`user_pokemon`,user_pokemon_cookies_frog);
    Cookies.set(`user_health`, frog[`health`]);
// doing same thing for frog as an enemy
    let enemy_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`enemy_pokemon`,enemy_pokemon_cookies_frog);
    Cookies.set(`enemy_health`,frog[`health`]);

    location.href = `battle.html`;
};
// function select pokemon pikachu will stringify pikachu object
// set cookies user pokemon to the value of stringify object
// set cookies user health to the value of object [health]
function select_pokemon_pikachu(details){
    let user_pokemon_cookies_pikachu = JSON.stringify(pikachu);
    Cookies.set(`user_pokemon`,user_pokemon_cookies_pikachu);
    Cookies.set(`user_health`, pikachu[`health`]);
// doing same thing for frog as an enemy
    let enemy_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`enemy_pokemon`,enemy_pokemon_cookies_frog);
    Cookies.set(`enemy_health`, frog[`health`]);

    location.href = `battle.html`;
};
// function select pokemon stone will stringify stone object
// set cookies user pokemon to the value of stringify object
// set cookies user health to the value of object [health]
function select_pokemon_stone(details){
    let user_pokemon_cookies_stone = JSON.stringify(stone);
    Cookies.set(`user_pokemon`,user_pokemon_cookies_stone);
    Cookies.set(`user_health`, stone[`health`]);
// doing same thing for frog as enemy
    let enemy_pokemon_cookies_frog = JSON.stringify(frog);
    Cookies.set(`enemy_pokemon`,enemy_pokemon_cookies_frog);
    Cookies.set(`enemy_health`, frog[`health`]);

    location.href = `battle.html`;
};

// dragon object with different keys and values
let dragon = {
    name: `Dragon`,
    health: 80,
    attacks: `punches`,
    img_url: `/images/dragon.gif`
};
// frog object with different keys and values
let frog = {
    name: `Frog`,
    health: 110,
    attacks: `poison`,
    img_url: `/images/frog.gif`
};
// pikachu object with different keys and values
let pikachu = {
    name: `Pikachu`,
    health: 100,
    attacks: `electricity`,
    img_url: `/images/pikachu.gif`
};
// stone object with different keys and values
let stone = {
    name: `Stone`,
    health: 90,
    attacks: `hitting`,
    img_url: `/images/stone.gif`
    
};
// grab an element choose dragon to attach event listener
let dragon_button = document.getElementById(`choose_dragon`);
dragon_button.addEventListener(`click`, select_pokemon_dragon);

// grab an element choose frog to attach event listener 
let frog_button = document.getElementById(`choose_frog`);
frog_button.addEventListener(`click`, select_pokemon_frog);

// grab an element choose pikachu to attach event listener
let pikachu_button = document.getElementById(`choose_pikachu`);
pikachu_button.addEventListener(`click`, select_pokemon_pikachu);

// grab an element choose dragon to attach event listener
let stone_button = document.getElementById(`choose_stone`);
stone_button.addEventListener(`click`,select_pokemon_stone);