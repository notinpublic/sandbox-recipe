import AlbumCard from "./components/AlbumCard";
import { AlbumCardSetup } from "./mappings/album-card-setup";

function App() {
  return (
    <>
    <AlbumCard props={AlbumCardSetup}/>
    </>
  );
}

export default App;