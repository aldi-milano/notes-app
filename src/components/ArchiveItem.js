import React from 'react';
import { showFormattedDate } from '../utils';
import DeleteButton from './DeleteButton';
import UnArchiveButton from './UnArchiveButton';

const ArchiveItem = ({ title, body, createdAt, id, onDelete, unArchive }) => {
  return (
    <div className='note-item' id={+new Date()} key={title}>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        <DeleteButton onDelete={onDelete} id={id} />
        <UnArchiveButton unArchive={unArchive} id={id} />
      </div>
    </div>
  );
};

export default ArchiveItem;
