import React from 'react';
import CustomButton from './CustomButton';
import { InfinitySpin } from 'react-loader-spinner';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='Ask Ai for help...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
        style={{ color: 'white' }}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <div>
            <p style={{ textAlign: 'center' }} > A.I. is Creating... </p>
            <InfinitySpin 
              width='100'
              color="#000000"
            />
          </div>
        ) : (
          <>
            <CustomButton
              type='filled'
              title='AI Logo'
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs'
            />

            <CustomButton
              type='filled'
              title='AI Full'
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
