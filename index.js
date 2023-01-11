// Iteration 1: Names and Input

let hacker1 = "john"
let hacker2 = "betsy"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else if (hacker1.length === hacker2.length) {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
hacker1 = hacker1.toUpperCase()
let hacker1Array = hacker1.split("")
console.log(hacker1Array.join(" "))

//uppercase with spaces

let hacker1 = "john"
let hacker2 = "betsy"
let newName = "";

for (i=0;i<hacker1.length;i++){
    newName += hacker1[i] + " ";
  }
console.log(newName.toUpperCase())

 //reversed
 
let hacker2Reversed= "";
for (i=hacker2.length-1; i>=0;i--){
 hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

// lexicographic order

let driver = "zaron"
let navigator = "othan"

if (driver < navigator){
  console.log("The driver's name goes first.")
} else if (navigator < driver) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}


// bonus 1
/*
let longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper tortor id vestibulum gravida. Aliquam luctus tincidunt diam, a tristique nisl semper sed. Mauris ultrices tellus placerat sem lobortis aliquet. Ut sit amet nisl facilisis, egestas dui ac, semper orci. Mauris pulvinar felis lectus, in dapibus massa commodo nec. Etiam quis leo et mauris dignissim ornare in eget risus. Etiam rhoncus pharetra semper. Aliquam in enim risus. Ut placerat elit in ante dictum pulvinar. Morbi feugiat consequat mi ac varius. Quisque urna urna, ornare eu urna at, elementum semper dui. Nulla nec dolor sit amet sem eleifend rutrum eu et enim. Aliquam eu egestas sem, vitae laoreet magna. In consequat, massa vitae tristique tempus, purus orci dictum sem, ac mattis eros odio non nibh. Sed tincidunt sollicitudin augue, sed scelerisque lacus vulputate vel. Morbi et posuere diam, sit amet aliquet ex. Cras ultrices quam nec enim euismod iaculis. Ut aliquam suscipit tortor non mattis. Ut vel vestibulum ante. Sed viverra pulvinar nibh, vel convallis arcu aliquet ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas at eros orci. Cras lobortis leo eget lorem pretium gravida. Proin tristique felis eget tortor commodo, vel egestas lorem facilisis. Sed interdum viverra rhoncus. Phasellus et semper neque, sit amet malesuada dolor. Nulla vestibulum nulla vitae commodo dictum. Mauris vel velit lacus. Donec vestibulum tincidunt tellus nec tristique. Proin quis leo varius, ornare leo eget, viverra justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

let wordCount = 0

for (i = 0; i < longText.length; i++)
if (longText[i] === " "){
  wordCount ++;
}

console.log(wordCount + 1)



let wordCount = 0

for (i = 0; i < longText.length; i++)
if (longText[i]+longText[i+1] === "et"){
  wordCount ++;
}

console.log(wordCount)

// bonus 2
*/
