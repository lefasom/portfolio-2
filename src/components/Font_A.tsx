import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface FontAProps {
  value?: string;
}

const Font_A: React.FC<FontAProps> = ({ value }) => {

  return (
    <div className='w-4 m-auto mr-1'>
      <FontAwesomeIcon
        icon={value == 'faCode' ? faCode : faLink}
      />
    </div>
  );
}

export default Font_A;