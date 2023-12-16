import AlbumCard from "./components/AlbumCard";
import { AlbumCardSetup } from "./mappings/album-card-setup";
import DropdownDiv from "./components/DropdownDiv";

function App() {
  return (
    <>
    <AlbumCard props={AlbumCardSetup}/>
    </>
  );
}

export default App;