import React, { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import Webcam from '@uppy/webcam';
import { Dashboard } from '@uppy/react';
import DropTarget from '@uppy/drop-target';
import ImageEditor from '@uppy/image-editor';
import XHR from '@uppy/xhr-upload'

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';
import '@uppy/image-editor/dist/style.min.css'
import '@uppy/drop-target/dist/style.css';

import { Input } from "../@/components/ui/input"
import { Button } from '../@/components/ui/button';
import { sendFile } from './API/connectToWS';



const FileUploader = () => {

    const [uppy] = useState(() => new Uppy()
        .use(Webcam)
        .use(ImageEditor, {})
        .use(DropTarget, {
            target: document.body,
        })
        .use(XHR, {
            endpoint: 'http://localhost:3001/send',
            // bundle: true
        })
    );

    const [receiverId, setReceiverId] = useState('');
    const [isSharing, setIsSharing] = useState(false);

    const handleChange = (event: any) => {
        const inputValue = event.target.value;

        setReceiverId(inputValue);
    };


    async function handleSubmit(e: any) {
        e.preventDefault()

        sendFile()
const senderId = sessionStorage.getItem("id")

        if (uppy.getFiles().length) {
            uppy.setMeta({
                id: sessionStorage.getItem("id"),
                username: sessionStorage.getItem("username"),
                receiverId: receiverId
            })
            setIsSharing(true)
            if(senderId)
            uppy.upload()
            console.log("FORM SUBMITTED")
        } else {
            alert("Pease select files to share")
        }

    }

    uppy.on('complete', async (result: any) => {
        // console.log(result.failed.length)
        if (!result.failed.length) {
            // console.log('successful files:', result.successful);
            setIsSharing(false)
        } else {
            // console.log('failed files:', result.failed);
        }
    });

    uppy.on('error', (error) => {
        if (error) {
            setIsSharing(false)
            console.log(error);
        }
    });

    const [processedFiles, setProcessedFiles] = useState<string[]>([]);
    uppy.on('upload-success', async (file, response) => {
        if (file && response) {
            console.log("response");
            console.log(response);

            console.log(processedFiles.includes(file.name))

            if (!processedFiles.includes(file.name)) {
                setProcessedFiles(prevProcessedFiles => [...prevProcessedFiles, file.name]);
                console.log("processedFiles")
                console.log(processedFiles)

                const fileBuffer = response.body.data;

                const blob = new Blob([fileBuffer]);

                const url = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = file.name;
                a.innerText = file.name;

                const sendPageElement = document.getElementById("sendPage");
                if (sendPageElement) {
                    sendPageElement.appendChild(a);
                }   
            } else {
                // console.log(`Download link for file '${file.name}' already created`);
            }
        } else {
            // console.log("No response or file found");
        }
    });


    return (
        <>
            <div id="sendPage">
                <form onSubmit={handleSubmit}>
                    <div className='w-fit mx-auto flex lg:flex-row flex-col lg:gap-20 gap-10 lg:my-0'>
                        <div className='w-fit'>
                            <Dashboard className='lg:w-96 w-80' id='Dashboard' uppy={uppy} plugins={['Webcam']} showProgressDetails proudlyDisplayPoweredByUppy={false} theme='auto' width={400} height={400} hideUploadButton />
                        </div>
                        <div className="receiverName flex flex-col gap-10 self-center">
                            <div className="input flex flex-col gap-3">
                                <label className='text-md text-gray-600' htmlFor="receiverName">Receiver Id</label>
                                <input pattern='[0-9]{3}-[0-9]{3}' value={receiverId} onChange={handleChange} className='border-b-2 border-blue-500 outline-0' type="text" id='receiverName' placeholder='uag-t4h' title='eg. 123-456' name='receiverId' />
                            </div>
                            <div className="submit">
                                {
                                    isSharing ?
                                        <Button type='button' disabled>Sharing...</Button> :
                                        <Button type='submit' className='flex gap-3 text-lg'>
                                            Share
                                            <img src='/logo.svg' className='w-7' />
                                        </Button>

                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FileUploader