


var all_users = [
    'H E D',
    'I K2',
    'D K S',
    'Sa M'
];

const USER_COLORS = {
    'user_0' : 'green',
    'user_1' : 'blue',
    'user_2' : 'red',
    'user_3' : '#ff00ff',
    'user_4' : '#8b94e7',
    'user_5' : '#ade664',
    'user_6' : '#8d5073',
    'user_7' : '#ebdf7b',
}

const BASE_TACT_DOLLAR = 2500;
const ZERO_TACT_DOLLAR = 0;
const ROUND_BONUS      = 200;
const MAX_BOX_COUNT    = 40;

const user_wealth = {
    'user_0' : BASE_TACT_DOLLAR,
    'user_1' : BASE_TACT_DOLLAR,
    'user_2' : BASE_TACT_DOLLAR,
    'user_3' : BASE_TACT_DOLLAR,
    'user_4' : BASE_TACT_DOLLAR,
    'user_5' : BASE_TACT_DOLLAR,
    'user_6' : BASE_TACT_DOLLAR,
    'user_7' : BASE_TACT_DOLLAR,
}

const user_property_wealth = {
    'user_0' : ZERO_TACT_DOLLAR,
    'user_1' : ZERO_TACT_DOLLAR,
    'user_2' : ZERO_TACT_DOLLAR,
    'user_3' : ZERO_TACT_DOLLAR,
    'user_4' : ZERO_TACT_DOLLAR,
    'user_5' : ZERO_TACT_DOLLAR,
    'user_6' : ZERO_TACT_DOLLAR,
    'user_7' : ZERO_TACT_DOLLAR,
}

const user_total_wealth = {
    'user_0' : BASE_TACT_DOLLAR,
    'user_1' : BASE_TACT_DOLLAR,
    'user_2' : BASE_TACT_DOLLAR,
    'user_3' : BASE_TACT_DOLLAR,
    'user_4' : BASE_TACT_DOLLAR,
    'user_5' : BASE_TACT_DOLLAR,
    'user_6' : BASE_TACT_DOLLAR,
    'user_7' : BASE_TACT_DOLLAR,
}

var dict = {
    "x": 1,
    "y": 6,
    "z": 9,
    "a": 5,
    "b": 7,
    "c": 11,
    "d": 17,
    "t": 3
};

function sort_dict(c_dict){

    // Create items array
    var items = Object.keys(c_dict).map(function(key) {
        return [key, c_dict[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    return items;
}

function get_dict_keys(c_dict){
    var items = Object.keys(c_dict).map(function(key) {
        return [key, c_dict[key]];
    });

    return items
}

// new_items = sort_dict(dict)

// console.log(new_items);

/*
let scores = [
    {name: "Player 1", score: 5000},
    {name: "Player 2", score: 6500},
    {name: "Player 3", score: 3000},
    {name: "Player 4", score: 2670},
    {name: "Player 5", score: 1540},
];

function updateLeaderboardView() {
    let leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = "";

    scores.sort(function(a, b){ return b.score - a.score  });
    for(let i=0; i<scores.length; i++) {
        let name = document.createElement("div");
        let score = document.createElement("div");
        name.classList.add("name");
        score.classList.add("score");
        name.innerText = scores[i].name;
        score.innerText = scores[i].score;

        let scoreRow = document.createElement("div");
        scoreRow.classList.add("row");
        scoreRow.appendChild(name);
        scoreRow.appendChild(score);
        leaderboard.appendChild(scoreRow);
    }

}

updateLeaderboardView();

*/