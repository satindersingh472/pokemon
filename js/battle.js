// function show enemy pokemon insert img tag for enemy
// also name for enemy and health points for enemy
function show_enemy_pokemon(details) {
    enemy_image[`innerHTML`] += `<img src="${enemy_parse_cookies_pokemon[`img_url`]}" alt="pokemon ${enemy_parse_cookies_pokemon[`name`]}" />`;
    enemy_description[`innerHTML`] += `<h2>${enemy_parse_cookies_pokemon[`name`]}</h2>  <h2 id ="enemy_health_points"> ${enemy_health_cookies}</h2> `;
}
// show user pokemon insert image for user pokemon
// and also user pokemon name and health points and button for attack
function show_user_pokemon(details) {
    user_image[`innerHTML`] += `<img src="${user_parse_cookies_pokemon["img_url"]}" alt ="pokemon ${user_parse_cookies_pokemon[`name`]}"/>`;
    user_description[`innerHTML`] += `<h2>${user_parse_cookies_pokemon[`name`]}</h2>  
    <h2 id ="user_health_points"> ${user_health_cookies} </h2> 
     <button id = "attack_from_${user_parse_cookies_pokemon[`name`]}">Attack </button> `;

}
// function decrease health will logically decrease numbers for enemy and user health points
// setting new cookies for enemy and user health
// changing the inner html for enemy and user health points 
function decrease_health(details) {

    if (enemy_health_cookies > 0 && user_health_cookies > 0) {
        enemy_health_cookies = enemy_health_cookies - Math.floor(Math.random() * 4);
        user_health_cookies = user_health_cookies - Math.floor(Math.random() * 3);

        Cookies.set(`enemy_health`, enemy_health_cookies);
        Cookies.set(`user_health`, user_health_cookies);

        enemy_health_number[`innerHTML`] = enemy_health_cookies;
        user_health_number[`innerHTML`] = user_health_cookies;

        // if enemy has 0 or less points  and user health is more than 0 then enemy will loose
    } else if (enemy_health_cookies <= 0 && user_health_cookies > 0) {
        result[`innerHTML`] = `<h2>Congratulations user won!!!</h2>`;
        // if enemy health is more than 0 and user health is 0 or below
    } else if (enemy_health_cookies > 0 && user_health_cookies <= 0) {
        result[`innerHTML`] = `<h2>Congratulations to the computer!!!!</h2>`;
    }
}

// setting enemy image to grab a div enemy pokemon image and use to put innerhtml
let enemy_image = document.getElementById(`enemy_pokemon_image`);
// setting enemy description to grab a div enemy pokemon description and use to put innerhtml 
let enemy_description = document.getElementById(`enemy_pokemon_description`);

// setting user image to grab a div user pokemon image and use to put innerhtml
let user_image = document.getElementById(`user_pokemon_image`);
// setting user description to grab a div user pokemon description and use to put innerhtml 
let user_description = document.getElementById(`user_pokemon_description`);

// get the cookies user pokemon cookies
let get_user_cookies_pokemon = Cookies.get(`user_pokemon`);
// parse the cookies grabed from above step
let user_parse_cookies_pokemon = JSON.parse(get_user_cookies_pokemon);
// get the cookies enemy pokemon cookies
let get_enemy_cookies_pokemon = Cookies.get(`enemy_pokemon`);
// parse the cookies grabbed from above step
let enemy_parse_cookies_pokemon = JSON.parse(get_enemy_cookies_pokemon);
// grabb user health cookies and store that in user health cookies no need to parse them because not a complex cookie data
let user_health_cookies = Cookies.get(`user_health`);
// grabb enemy health cookies and store in enemy health cookies no need to parse them because not a complex data
let enemy_health_cookies = Cookies.get(`enemy_health`);

// below loop will check the cookies for name and after finding the appropriate name it executes the two functions
if (user_parse_cookies_pokemon[`name`] === `Dragon`) {
    show_enemy_pokemon();
    show_user_pokemon();
// attack from dragon button shows up in a user side pokemon with specific id 
    let dragon_attack = document.getElementById(`attack_from_Dragon`);
    dragon_attack.addEventListener(`click`, decrease_health);
// if user cookies has frog in it then it will create a user pokemon frog and button with id attack from frog
} else if (user_parse_cookies_pokemon[`name`] === `Frog`) {
    show_enemy_pokemon();
    show_user_pokemon();

    let frog_attack = document.getElementById(`attack_from_Frog`);
    frog_attack.addEventListener(`click`, decrease_health);
// if user cookies has pikachu then pikachu will get displayed in user section and button named attack with id attack from pikachu
} else if (user_parse_cookies_pokemon[`name`] === `Pikachu`) {
    show_enemy_pokemon();
    show_user_pokemon();

    let pikachu_attack = document.getElementById(`attack_from_Pikachu`);
    pikachu_attack.addEventListener(`click`, decrease_health);

// if user cookies has stone, stone pokemon will get displayed in the battlefield and along with attack button
} else if (user_parse_cookies_pokemon[`name`] === `Stone`) {
    show_enemy_pokemon();
    show_user_pokemon();

    let stone_attack = document.getElementById(`attack_from_Stone`);
    stone_attack.addEventListener(`click`, decrease_health);

}


// grab a div to write innerhtml for enemy health points
let enemy_health_number = document.getElementById(`enemy_health_points`);
// grab a dic to write innerhtml for user health points
let user_health_number = document.getElementById(`user_health_points`);
// grab a result div to write innerhtml for showing result
let result = document.getElementById(`result`);
