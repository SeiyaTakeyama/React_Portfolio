import './App.css';
import ImageGallery from "./ImageGallery";
import { useRef,useState } from 'react';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(ref.current.value);
   
    const endpointURL=`https://pixabay.com/api/?key=29618373-6b237e60a938b5a91f40fb3be&q=${ref.current.value}&image_type=photo`
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
          setFetchData(data.hits);
      });
  };


  return (
    <div className="container">
      <h2>Pixabay Demo App</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='画像を検索' ref={ref}/>
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}
  // h2でタイトル表示
  //inputで文字列入力箇所作成
  //

export default App;