const API= ("http://localhost:3000/characters")
//fetch the server 
fetch(API)
.then((res)=>res.json()) 
.then(characterList => renderCharacters(characterList));
//global click 
img.addEventListener('click',()=> loadVotesInfo(votes))

//use this to have an 'global' array to come back too 
;let loadCharacterData(CharacterData[0])
//elements and querySelectors
const InfoName = document.querySelector("#detailed-info #name");
const BoxName = document.getElementById("name");
const BoxImage = document.getElementById("image");
const characterBars = document.getElementById("character-bar");
const formVote = document.getElementById("votes-form");
const addCharacterForm = document.getElementById("character-form");
const detailBoxVotes = document.getElementById("vote-count");
const detailedInfoDiv = document.getElementById("image-container");
const filterBtnContainer = document.getElementById("filterBtnContainer");

function renderCharacters(characterList){
    characterList.forEach(characters=>renderCharacters(characters));
}
//grabbing info from db.json and giving them a route 
function renderDetail(characters){
const characterInfo = document.querySelector('.characterInfo')
characterInfo.textContent = characters.info

const characterName = document.querySelector('#name')
characterName.textContent = characters.name

const characterImage = document.querySelector('#image')
characterImage.src = characters.image
console.log("esssgetit")
const characterVotes = document.querySelector('#votes-form')
characterVotes.textContent = characters.votes
}
//Loading first child 
function loadFirstC(data) {
    detailBoxName.textContent = data[0].name;
    detailBoxImage.src = data[0].image;
    detailBoxVotes.textContent = data[0].votes;
    featuredCharacter = data[0];
    return featuredCharacter;
  }
  
  function displayCCharacter(data) {
    detailBoxName.textContent = data.name;
    detailBoxImage.src = data.image;
    detailBoxVotes.textContent = data.votes;
    featuredCharacter = data;
    return featuredCharacter;
  }
//adding names to characterInfo use (BASE_URL) makes it easier to callback 
function toggleButton() {
    getData(characterData);
    voteForm.addEventListener("submit", addVotes);
    toggleBtnsToCreate.forEach(createToggleBtns);
    addCharacterForm.addEventListener("submit", (event) => {
      event.preventDefault()
})
} //Attempting BONUS 
 //show featured character & info 
 function displayClickedChar(data) {
    detailBoxName.textContent = data.name;
    detailBoxImage.src = data.image;
    detailBoxVotes.textContent = data.votes;
    featuredCharacter = data;
    return featuredCharacter;
  }
// add a click btton for votes 
function addVotes(event) {
    event.preventDefault();
    let voteInput = document.getElementById("votes").value;
    //empty vote input so it knows to start with the input; I can only with of if/else for this 
    voteInput === ""
      if (voteInput = 1)
     /if else  (voteInput = document.getElementById("votes").value)

     initialVotesCount = parseInt(detailBoxVotes.textContent, 0);
    let newVoteCount = initialVotesCount + parseInt(voteInput, 0);
    detailBoxVotes.textContent = newVoteCount;
    let updateData = {
      id: `${featuredCharacter.id}`,
      votes: `${newVoteCount}`
    }// Got pretty lost right here, probably because I have a ton of unorgonized code. 

    //update votes on page without resetting the page 
    updateVotesToDB(updateData);
  updateHeaderDataAfterVotesChange(newVoteCount);
  event.target.reset();
}

