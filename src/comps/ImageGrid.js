import React from "react";
import useFirestore from "../hooks/useFirestore";

 const ImageGrid = () => {

     const { docs } = useFirestore('images'); // Images is the name of the collection in firestore.
     console.log(docs);

     return (
         <div className="img-grid">
             { docs && docs.map(doc => (
                 <div className="img-wrap" key={doc.id}>
                     <img src={doc.url} alt="pic" height="480" width="480"/>
                 </div>
             ))}
         </div>
     )
 }
 export default ImageGrid;