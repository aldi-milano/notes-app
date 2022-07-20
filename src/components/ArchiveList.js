import React from 'react';
import ArchiveItem from './ArchiveItem';

const ArchiveList = ({ notes, onDelete, unArchive }) => {
  const isArchived = notes.some(note => note.archived === true);
  if (isArchived) {
    return (
      <div className='notes-list'>
        {notes
          .filter(note => note.archived === true)
          .map(note => (
            <ArchiveItem
              onDelete={onDelete}
              unArchive={unArchive}
              {...note}
              key={note.id}
            />
          ))}
      </div>
    );
  } else {
    return <p className='notes-list__empty-message'>Tidak Ada Catatan</p>;
  }
};

export default ArchiveList;
