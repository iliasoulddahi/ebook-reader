import { FETCH_EBOOKS_SUCCESS, FETCH_ONE_EBOOK_SUCCESS } from '../actions/actionType';

const initialState = {
  ebooks:[],
  show: false,
  ebook:{},
  pdfUrl: "https://documentservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
  metaDataId: "6d07d124-ac85-43b3-a867-36930f502ac6",
  metaDataFileName: "Bodea Brochure.pdf"
};

const eBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EBOOKS_SUCCESS:
      return {
        ...state,
        ebooks : action.payload
      };
    case FETCH_ONE_EBOOK_SUCCESS:
      return {
        ...state,
        ebook : action.payload
      };
    default:
      return state;
  }
};

export default eBookReducer;
