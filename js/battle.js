function show_enemy_pokemon(details){
enemy_image[`innerHTML`] += `<img src="${enemy_parse_cookies_pokemon[`img_url`]}" alt="pokemon ${enemy_parse_cookies_pokemon[`name`]}" />`;
enemy_description[`innerHTML`] += `<h2>${enemy_parse_cookies_pokemon[`name`]}</h2>  <h2 id ="enemy_health_points"> ${enemy_health_cookies}</h2> `;
}

function show_user_pokemon(details){
    user_image[`innerHTML`] += `<img src="${user_parse_cookies_pokemon["img_url"]}" alt ="pokemon ${user_parse_cookies_pokemon[`name`]}"/>` ;
    user_description[`innerHTML`] += `<h2>${user_parse_cookies_pokemon[`name`]}</h2>  
    <h2 id ="user_health_points"> ${user_health_cookies} </h2> 
     <button id = "attack_from_${user_parse_cookies_pokemon[`name`]}">Attack </button> `;

}

let enemy_image = document.getElementById(`enemy_pokemon_image`);
let enemy_description = document.getElementById(`enemy_pokemon_description`);

let user_image = document.getElementById(`user_pokemon_image`);
let user_description = document.getElementById(`user_pokemon_description`);

let get_user_cookies_pokemon = Cookies.get(`user_pokemon`);
let user_parse_cookies_pokemon = JSON.parse(get_user_cookies_pokemon);

let get_enemy_cookies_pokemon = Cookies.get(`enemy_pokemon`);
let enemy_parse_cookies_pokemon = JSON.parse(get_enemy_cookies_pokemon);

let user_health_cookies = Cookies.get(`user_health`);

let enemy_health_cookies = Cookies.get(`enemy_health`);



if(user_parse_cookies_pokemon[`name`] === `Dragon`){
    show_enemy_pokemon();
    show_user_pokemon();
} else if (user_parse_cookies_pokemon[`name`] === `Frog`){
    show_enemy_pokemon();
    show_user_pokemon();
} else if (user_parse_cookies_pokemon[`name`] === `Pikachu`){
    show_enemy_pokemon();
    show_user_pokemon();
} else if (user_parse_cookies_pokemon[`name`] === `Stone`){
    show_enemy_pokemon();
    show_user_pokemon();
}


function decrease_health(details){
    let enemy_health = Cookies.get(`enemy_health`);
     let new_health = enemy_health - 5;
     Cookies.set(`enemy_health`, new_health);
      health_number[`innerHTML`] = new_health;
}
let dragon_attack = document.getElementById(`attack_from_Dragon`);
dragon_attack.addEventListener(`click`,decrease_health);
 
// let frog_attack = document.getElementById(`attack_from_Frog`);
// frog_attack.addEventListener(`click`, decrease_health);

let health_number = document.getElementById(`enemy_health_points`);