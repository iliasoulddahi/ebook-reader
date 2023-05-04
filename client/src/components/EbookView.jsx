import { useEffect } from "react"
import ViewSDKClient from "../pdfEmbedApi/ViewSDKClient";

export default function EbookView({ config }) {
    const renderPdf = (config)=> {
        const viewSDKClient = new ViewSDKClient(config);
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            viewSDKClient.previewFile("pdf-div", {
                /* Pass the embed mode option here */
                embedMode: "LIGHT_BOX"
            });
        });     
    }
    useEffect(()=>{
        if( config["show"] ){
            renderPdf(config)
        }
    }, [config])
    return (
        <div className="flex justify-center">
            <div id="pdf-div" className="" style={{height:"100vh", width:"30rem"}}/>
        </div>
    )
}