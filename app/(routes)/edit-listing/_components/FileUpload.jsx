import Image from 'next/image';
import React, { useState } from 'react'
import { ImagePlus } from 'lucide-react';

function FileUpload({ setImages, imageList }) {

    const [imagePreview, setImagePreview] = useState([]);
    const handleFileUpload = (event) => {
        const files = event.target.files;
        setImages(files)
        const previews = Array.from(files).map((file) => URL.createObjectURL(file));
        setImagePreview(previews)
    }
    return (
        <div>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-primary/30 bg-white/65 transition hover:bg-primary/5">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <ImagePlus className="h-6 w-6" />
                        </span>
                        <p className="mb-2 text-sm text-slate-600"><span className="font-semibold text-slate-950">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-slate-500">PNG, JPG, or GIF property photos</p>
                    </div>
                    <input id="dropzone-file" type="file"
                        multiple className="hidden"
                        onChange={handleFileUpload}
                        accept="image/png, image/gif, image/jpeg"
                    />
                </label>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
        lg:grid-cols-7 xl:grid-cols-10 gap-3 mt-3'>
                {imagePreview.map((image, index) => (
                    <div key={index}>
                        <Image src={image} width={100} height={100}
                            className='rounded-lg object-cover h-[100px] w-[100px]'
                            alt={`Preview ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            {imageList && <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
        lg:grid-cols-7 xl:grid-cols-10 gap-3 mt-3'>
                {imageList.map((image, index) => (
                    <div key={index}>
                        <Image src={image?.url} width={100} height={100}
                            className='rounded-lg object-cover h-[100px] w-[100px]'
                            alt={`Listing ${index + 1}`}
                        />
                    </div>
                ))}
            </div>}
        </div>

    )
}

export default FileUpload
