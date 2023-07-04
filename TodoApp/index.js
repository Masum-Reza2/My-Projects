let mynavbar = document.getElementById('mynavbar');
let menushow = document.getElementById('menushow');
// mynavbar.style.display = 'block';

menushow.addEventListener('click', () => {
    if (menushow) {
        mynavbar.classList.toggle('Change');
    }

})


//2nd phase
let inputeNote = document.getElementById('inputeNote');
let PushNote = document.getElementById('PushNote');
let Infobox = document.getElementById('Infobox');

let activebtn = document.getElementsByClassName('activebtn');
let Save = activebtn[0]
let Clear_msg = activebtn[1]
let Show_All = activebtn[2]

const displayAllNotes = () => {
    PushNote.innerHTML = ''; // Clear the current content
    //displaying all notes from localstorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const note = localStorage.getItem(key);

        // Append each note to the PushNote element
        const noteElement = document.createElement('p');    
        noteElement.textContent = `${key}.${note}`;
        PushNote.appendChild(noteElement);
        Infobox.innerHTML = 'Showing all notes!'
    }
};

//save function
let savefunc = () => {
    index = localStorage.length + 1;
    localStorage.setItem(index, `${inputeNote.value}`);
    inputeNote.value = ''
    Infobox.innerHTML = 'Note saved successfully!'
}
Save.addEventListener('click', savefunc)

Clear_msg.addEventListener('click', () => {
    localStorage.clear();
    PushNote.innerHTML = ' ';
    Infobox.innerHTML = 'All note\'s deleted!';
    inputeNote.value = '';
})

Show_All.addEventListener('click', displayAllNotes)