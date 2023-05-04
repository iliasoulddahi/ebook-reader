import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneEbook } from "../stores/actions/actionsCreator";
import ViewSDKClient from "../pdfEmbedApi/ViewSDKClient";
import viewerConfig from "../pdfEmbedApi/viewerConfig";

export default function EbookViewPage() {
        const params = useParams();
        const dispatch = useDispatch();
        const ebook = useSelector(state=> state.ebooks.ebook);
        const renderPdf = (data)=>{
            const viewSDKClient = new ViewSDKClient(data);
            viewSDKClient.ready().then(() => {
                /* Invoke file preview */
                viewSDKClient.previewFile("pdf-div", viewerConfig);
            }); 
        }

    useEffect(()=>{
        dispatch(fetchOneEbook(params.id))
        if(ebook?.url){
            renderPdf({
                pdfUrl:ebook.url,
                metaDataFileName:ebook.name,
                metaDataId:"6d07d124-ac85-43b3-a867-36930f502ac6"
            })
        }
    }, [])    
    return (
        <div className="flex justify-center">
            <div id="pdf-div" className="" style={{height:"100vh"}}/>
        </div>
    )
}