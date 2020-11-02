import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');

// fifaData.forEach( e => 
//     {
//         if (e['Win conditions'] !==' ') //!==' ' means: is not equal to empty
//         console.log(e['Win conditions'])
//     });
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

fifaData.forEach( function(item)
{
    if (item["Year"] === 2014 )
    {
        if (item["Stage"] === "Final")
        {
            console.log(item["Home Team Name"])
            console.log(item["Away Team Name"])
            console.log("Germany goals:", item["Home Team Goals"])
            console.log("Argentina goals:", item["Away Team Goals"])
           console.log(item["Win conditions"])
        }
    }
});


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data)
 {
    // let newArray1 = data.forEach( function (item) 
    // {
    //     if (item["Stage"] === "Final")
    //     {
    //         console.log(item)
    //     }
    // })

    let newArray1 = data.filter (function(item)
    {
        if (item["Stage"] === "Final")
        {
            return item
        }
    })

    return newArray1;
};
getFinals(fifaData)

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsCb) {
    let years = getFinalsCb.map (function(item)
        {
            if ( item['Year'] !== '')
            {
                return item['Year']
            }
        })

    return years;
}

getYears(getFinals(fifaData))
console.log(getYears(getFinals(fifaData)));


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsCb) {
        
    let winners = getFinalsCb.map(e => 
    {

             if (e["Home Team Goals"] > e["Away Team Goals"])
                {
                    // console.log(e["Home Team Name"])
                    return e["Home Team Name"]
                }
                else if (e["Home Team Goals"] < e["Away Team Goals"])
                {
                    // console.log(e["Away Team Name"])
                   return e["Away Team Name"]
                }
                else if (e["Home Team Goals"] === e["Away Team Goals"])
                {
                    return e["Win conditions"]
                }
    }
        );

    return winners;
};
getWinners(getFinals(fifaData))
console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

    function getWinnersByYear(getWinnersCb, getYearsCb) {

      let stringLoop = getYearsCb.forEach(function(item, index){
          console.log("In", item+",",getWinnersCb[index], "won the World Cup!");
      })

      return stringLoop;
}

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    
    let getHomeGoals = data.map(e => {return e["Home Team Goals"]})
    let getAwayGoals = data.map(e => {return e["Away Team Goals"]})

    const sum = getHomeGoals.reduce((acc, currVal) => acc + currVal);
    let avgHomeGoals = sum/getHomeGoals.length;

    const sum1 = getAwayGoals.reduce((acc, currVal) => acc + currVal);
    let avgAwayGoals = sum1/getAwayGoals.length;
    
    return console.log("This is Average Home Goals: ", avgHomeGoals, "This is Average Away Goals:", avgAwayGoals)
    // const sum = data.reduce((acc, currVal) => acc + currVal)
    // console.log(sum)
    // let avg = sum / data.length;
    // return avg;
};

getAverageGoals(fifaData)
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
