import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Model from "./comps/Model";
import {useState} from "react";

function App() {
    const [selectedImg, setSelectedImg] = useState(null);
  return (
      <div className="App">
          <Title/>
          <UploadForm/>
          <ImageGrid setSelectedImg={setSelectedImg}/>
          { selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      </div>
  );
}

export default App;
