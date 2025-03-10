// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`

}

console.log(saturdayFun("sleep"))

mondayWork=function (activity = "go to the office"){
     return `This Monday, I will ${activity}.`
}
console.log(mondayWork("will work from home"))

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
const defaultPrompt = wrapAdjective();
console.log(defaultPrompt()); 