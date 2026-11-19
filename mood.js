
// Kylie P. 11-15-26
const buttons = document.querySelector('#buttons');
const moodquote = document.querySelector('#quote');

const moods = {
  happy: { bg: '#FFD700', text: '#bd26b0', quote: 'Warm smiles and the suns kisses!' },
  calm:  {bg: 'blue', text: 'white', quote: 'Peace and calm'},
  angry: {bg: 'red', text: 'orange', quote: 'AAAAAAHHHHH'},
  sleepy: {bg:'purple', text: 'gray', quote: 'Yawn'},
};

buttons.addEventListener('click', handleMoodButtonClick); // on click makes function

function handleMoodButtonClick(moodlick){//function
  if (moodlick.target.classList.contains('mood-btn')){
    const moodName = moodlick.target.getAttribute('data-mood');

    const moodSettings = moods[moodName];
    console.log("mood selected:", moodName);
    console.log("mood settings:", moodSettings);

    document.body.style.backgroundColor = moodSettings.bg;
    document.body.style.color = moodSettings.text;
    quote.textContent = moodSettings.quote;
  }
}