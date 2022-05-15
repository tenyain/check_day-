import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';

const CopyField = (props) => {

    const { currentDateTime, checkState } = props;
    const { userName } = useSelector(state => state.profileForm);
    const [copyText, setCopyText] = useState(null);
    const [copyState, setCopyState] = useState(false);

    const handleGetText = () => {
        copyText !== null &&
            console.log(copyText)
    }

    const handleCopyState = () => {
        setCopyState(true);
    }

    useEffect(() => {
        let textToCopy = document.querySelector('.copy-text-div');
        setCopyText(textToCopy?.innerText);
        setTimeout(() => handleGetText(), 100)
    }, [handleGetText])

    return (
        <>
            {
                userName !== '' &&
                <div className='text-center'>
                    <section className='bg-gray-100'>
                        <div className='container container-main copy-text-div text-left'>
                            <p className='text-color-black'>
                                <span>
                                    {currentDateTime.day} {currentDateTime.month} {currentDateTime.year} ( {currentDateTime.weekDay} )
                                    , ( {currentDateTime.time} )
                                </span>
                                <br />
                                <span>
                                    ___ _ ___ _ ___ _ ___ _ ___ _ ___
                                </span>
                                <br />
                                <br />
                                <span>
                                    {userName}
                                </span>
                                <br />
                                <br />
                                <span>
                                    Check {checkState ? 'In' : 'Out'}:
                                </span>
                            </p>
                        </div>
                    </section>
                    <CopyToClipboard text={copyText}>
                        <button className='btn__primary my-6' onClick={handleCopyState}>
                            {copyState ? 'Copied' : 'Copy'}
                        </button>
                    </CopyToClipboard>
                </div>
            }

        </>
    );
}

export default CopyField;
