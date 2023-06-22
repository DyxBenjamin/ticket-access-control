import React from 'react';
import Serverless from "@srclib/devclusters/ServerlessConector";
import FlexColumn from "@components/layouts/FlexColumn";


export default function CloudinaryWidgetWrapper ({children, onSuccess, path, publicId}) {
    const openWidget = async () => {
        const options = {
            folder: path,
            public_id: publicId,
            source: 'uw',
            timestamp: Math.round((new Date).getTime()/1000),
            upload_preset: "ml_default"
        };
        const parametersSigned = await Serverless.callAsync({
            route: 'users/cloudinarySignature',
            payload: {options}
        })

        const parameters = {
            ...parametersSigned.data,
            folder: path,
            public_id: publicId,
            cloudName: 'devclusters',
            clientAllowedFormats: ['jpg', 'png'],
            cropping: false,
            multiple: false,
            minImageWidth: 512,
            minImageHeight: 512,
            maxImageWidth: 2048,
            maxImageHeight: 2048,
            maxFileSize: 3000000,
            resourceType: 'image',
            sources: ["local", "camera"],
            upload_preset: "ml_default",
            uploadSignature: parametersSigned.data.signature,
        };

        const widget = window.cloudinary.createUploadWidget(parameters, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log("Done! Here is the image info: ", result.info);
                onSuccess(result.info);
            }
        });
        widget.open();
    }

    return (
        <FlexColumn fullWidth onClick={openWidget}>
            {children}
        </FlexColumn>
    )
}

