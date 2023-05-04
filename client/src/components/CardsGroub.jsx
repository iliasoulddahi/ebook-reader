import { useSelector } from "react-redux";
import EbookCard from "./EbookCard";
export default function CardsGroub() {
    const ebooks = useSelector(state => state.ebooks.ebooks )
    return (
       <div className="flex flex-wrap justify-around">
        {
            ebooks?ebooks.map(ebook => {
                return <EbookCard ebook={ebook}/>
            }):null
        }
       </div>
    )
}