import React from "react";
import useFirestore from "../hooks/useFirestore";

 const ImageGrid = (props) => {

     const { docs } = useFirestore('images'); // Images is the name of the collection in firestore.
     console.log(docs);

     const handleSelectedImg = (event) => {
      props.setSelectedImg(event.id);
       // () => props.setSelectedImg(doc.url)
     };

     return (
         <div className="img-grid">
             { docs && docs.map(doc => (
                 <div className="img-wrap" key={doc.id} onClick={() => props.setSelectedImg(doc.url)}>
                     <img src={doc.url} alt="pic" />
                 </div>
             ))}
         </div>
     )
 }
 export default ImageGrid;