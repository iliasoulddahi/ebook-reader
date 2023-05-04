import { useEffect, useState } from "react";
import CardsGroub from "../components/CardsGroub";
import EbookView from "../components/EbookView";
import { useDispatch, useSelector } from "react-redux";
import { fetchEbooks,fetchOneEbook } from "../stores/actions/actionsCreator";
import { useSearchParams } from "react-router-dom";

export default function YourEbooksPage() {
    
  const dispatch = useDispatch();
  const ebooks = useSelector((state) => state.ebooks.ebooks);

  useEffect(() => {
    dispatch(fetchEbooks());
  }, []);
  return (
    <div>
      <CardsGroub ebooks={ebooks} />
    </div>
  );
}
