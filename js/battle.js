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

function decrease_health(details){
    
    if(enemy_health_cookies > 0 && user_health_cookies > 0) {
        enemy_health_cookies = enemy_health_cookies - Math.floor(Math.random() * 4);
        user_health_cookies = user_health_cookies - Math.floor(Math.random()*3);
        Cookies.set(`enemy_health`, enemy_health_cookies);
        Cookies.set(`user_health`,user_health_cookies);
        enemy_health_number[`innerHTML`] = enemy_health_cookies;
        user_health_number[`innerHTML`] = user_health_cookies;
    } else if (enemy_health_cookies <= 0 && user_health_cookies > 0){
                result[`innerHTML`] = `<h2>Congratulations user won!!!</h2>`;
    }   else if (enemy_health_cookies > 0 && user_health_cookies <= 0){
        result[`innerHTML`] = `<h2>Congratulations to the computer!!!!</h2>`;
    }    
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

let dragon_attack = document.getElementById(`attack_from_Dragon`);
dragon_attack.addEventListener(`click`,decrease_health);
 
} else if (user_parse_cookies_pokemon[`name`] === `Frog`){
    show_enemy_pokemon();
    show_user_pokemon();
    let frog_attack = document.getElementById(`attack_from_Frog`);
frog_attack.addEventListener(`click`,decrease_health);

} else if (user_parse_cookies_pokemon[`name`] === `Pikachu`){
    show_enemy_pokemon();
    show_user_pokemon();

let pikachu_attack = document.getElementById(`attack_from_Pikachu`);
pikachu_attack.addEventListener(`click`,decrease_health);


} else if (user_parse_cookies_pokemon[`name`] === `Stone`){
    show_enemy_pokemon();
    show_user_pokemon();

let stone_attack = document.getElementById(`attack_from_Stone`);
stone_attack.addEventListener(`click`,decrease_health);

}



let enemy_health_number = document.getElementById(`enemy_health_points`);
let user_health_number = document.getElementById(`user_health_points`);
let result = document.getElementById(`result`);