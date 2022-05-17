import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';

const CopyField = (props) => {

    const { currentDateTime, checkState } = props;
    const { userName } = useSelector(state => state.profileForm);
    const { itemList } = useSelector(state => state.checkInForm);
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
                                    _____________________________________
                                </span>
                                <br />
                                <br />
                                <span>
                                    *{userName}*
                                </span>
                                <br />
                                <br />
                                <span>
                                    &#123;code&#125;Check {checkState ? 'In' : 'Out'}:&#123;code&#125;
                                </span>
                                <br/>
                                <div>
                                    {
                                        itemList.length > 0 &&
                                        itemList.map((item, index) => {
                                            return (
                                                <span key={index} className="flex">
                                                    {index+1}) {item}
                                                </span>
                                            )
                                        })
                                    }
                                </div>
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
