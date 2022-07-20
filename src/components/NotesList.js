import React from 'react';
import NotesItem from './NotesItem';

const NotesList = ({ notes, onDelete, keyword, onArchive }) => {
  const isArchived = notes.some(note => note.archived === false);
  if (isArchived) {
    return (
      <div className='notes-list' key={+new Date()}>
        {notes
          .filter(note => {
            if (keyword) {
              return note.title.toLowerCase().includes(keyword.toLowerCase());
            }
            return note.archived === false;
          })
          .map(note => (
            <NotesItem
              key={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
      </div>
    );
  } else {
    return <p className='notes-list__empty-message'>Tidak Ada Catatan</p>;
  }
};

export default NotesList;
