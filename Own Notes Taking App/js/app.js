const addBtn = document.querySelector("#addBtn");
const main = document.querySelector(".main");

const saveNote = ()=>{
    const notes = document.querySelectorAll('.note textarea');
    // console.log(notes);
    const data = [];
    notes.forEach((note)=>{
        data.push(note.value)
    })
    // console.log(data);
    if(data.length === 0){
        localStorage.removeItem('notes');
    }else{
        localStorage.setItem('notes', JSON.stringify(data));
    }
}



addBtn.addEventListener('click', function (){
    addNote();
});

const addNote = (text = "")=>{
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
      <div class="tool">
           <i class="trash fa-solid fa-trash"></i>
           <i class="save fa-solid fa-floppy-disk"></i>
      </div>
      <textarea>${text}</textarea>
    `
    note.querySelector('.trash').addEventListener('click',function (){
        note.remove();
        saveNote();
    })
    note.querySelector('.save').addEventListener('click',function (){
        saveNote(); 
    })
    note.querySelector('textarea').addEventListener('focusout', function (){
        saveNote();
    })
    main.appendChild(note);
    saveNote();
}

(
    function () {
        const localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes === null){
             addNote();
        }else{
            localNotes.forEach((lNote)=>{
                addNote(lNote);
            }) 
        }
    }
)();