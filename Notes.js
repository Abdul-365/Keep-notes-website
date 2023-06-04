const notesSection = document.querySelector('.notes-section');
const trashSection = document.querySelector('.trash-section');
const newNote = notesSection.querySelector('#new-note');

newNote.addEventListener('blur', () => {
    if (newNote.value.trim() == '') {
        newNote.value = '';
        return;
    }
    const note = document.createElement('div');
    const noteContent = document.createElement('textarea');
    const deleteNote = document.createElement('button');
    const editNote = document.createElement('button');
    const restoreNote = document.createElement('button');
    const permDelNote = document.createElement('button');

    noteContent.textContent = newNote.value;
    newNote.value = '';
    deleteNote.textContent = 'Delete';
    editNote.textContent = 'Edit';
    restoreNote.textContent = 'Restore';
    permDelNote.textContent = 'Delete permenantly';

    noteContent.classList.add('d-block', 'form-control', 'bg-secondary', 'text-white');
    noteContent.setAttribute('disabled', '')
    editNote.classList.add('rounded-5', 'bg-dark', 'text-white', 'me-3');
    deleteNote.classList.add('rounded-5', 'bg-dark', 'text-white');
    restoreNote.classList.add('rounded-5', 'bg-dark', 'text-white', 'me-3');
    permDelNote.classList.add('rounded-5', 'bg-dark', 'text-white');
    note.classList.add('notes', 'p-3', 'rounded-2', 'bg-secondary', 'mb-3');

    editNote.addEventListener('click', () => {
        if (editNote.textContent === 'Edit') {
            editNote.textContent = 'Save'
            noteContent.removeAttribute('disabled');
        }
        else {
            editNote.textContent = 'Edit'
            noteContent.setAttribute('disabled', '')
        }
    })

    restoreNote.addEventListener('click', () => {
        trashSection.removeChild(note);
        notesSection.appendChild(note);
        note.removeChild(restoreNote);
        note.removeChild(permDelNote);
        note.appendChild(editNote);
        note.appendChild(deleteNote);
    })

    permDelNote.addEventListener('click', () => {
        trashSection.removeChild(note);
    })

    deleteNote.addEventListener('click', () => {
        notesSection.removeChild(note);
        trashSection.appendChild(note);
        note.removeChild(editNote);
        note.removeChild(deleteNote);
        noteContent.setAttribute('disabled', '')
        note.appendChild(restoreNote);
        note.appendChild(permDelNote);
    })

    note.appendChild(noteContent);
    note.appendChild(editNote);
    note.appendChild(deleteNote);
    notesSection.appendChild(note);
})



