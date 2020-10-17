import React, { useState } from "react";
import "./App.css";
import List from "./components/Movie-list";
import "antd/dist/antd.css";
import { Modal, Button, Rate } from "antd";

function App() {
  const [textInput, setTextInput] = useState("");
  const [url,setUrl] = useState("")
  const [films, setFilms] = useState([{
    name:"Matrix",
    img:"https://fr.web.img6.acsta.net/medias/04/34/49/043449_af.jpg",
    rate:1,
},
{
  name:"Pursuit of Happyness",
  img:"https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Poster-pursuithappyness.jpg/220px-Poster-pursuithappyness.jpg",
  rate:4,
},{
  name:"The Founder",
  img:"https://i.ytimg.com/vi/N_t5PGSJD9o/movieposter.jpg",
  rate:5,
},{
  name:"Spotlight",
  img:"https://img6.cdn.cinoche.com/images/59c6224ff11d5e29d5c4c9a9a4688698.jpg",
  rate:3,
},{
  name:"Forrest Gump",
  img:"https://www.lavisqteam.fr/wp-content/uploads/2013/12/18686566.jpg",
  rate:5,
},{
  name:"Postman",
  img:"https://images-na.ssl-images-amazon.com/images/I/5161QCDPTML._AC_.jpg",
  rate:2,
},{
  name:"Cast Away",
  img:"https://www.cinemaffiche.fr/3870-tm_large_default/seul-au-monde-cast-away.jpg",
  rate:5,
},{
  name:"1917",
  img:"https://lh3.googleusercontent.com/proxy/ISxbaNQOfgovZ0OhLrLOl3IH9o1ESMVEz4RAjQU4TN7ZvBeCKKE9uINx08YGIiTF5smJ8zb7zceSNszy--3wPSUhHzKKcxijNqo5C5-NI4_vRurB6YzEWt2QCkfSe1AoDSXOq7nNKINt15c",
  rate:5,
}]);
  const [rating, setRating] = useState({value:0})
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const handelOk = () => {
    setFilms([...films,{name:textInput,img:url,rate:rating}])
    setTextInput("")
    setUrl("")
    setRating(0)
    setVisible(false);
  };
  const handelCancel = () => {
    setVisible(false);
  };
  
  return (
    <div className="App">
      <nav className="nav-bar">Movie App</nav>
      <div className="movie-container">
        <Button style={{position:"sticky",top:"10vh"}} type="primary" onClick={show}>
          Add New film
        </Button>
        <Modal
        title="Add New Film"
          className="modal"
          visible={visible}
          onOk={handelOk}
          onCancel={handelCancel}
        >
          <label>
            Title:
            <br />
            <input className="film-name" value={textInput} onChange={(e)=>setTextInput(e.target.value)} placeholder="Film Title"/>
          </label>
          <br />
          <label>
            Image-URL:
            <br />
            <input className="link" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Add url image for the film"/>
          </label>
          <br />
          <div>
            Rating:
            <Rate onChange={(e)=>setRating(e)} value={rating}/>
          </div>
        </Modal>

        <List
          textInput={textInput}
          setTextInput={setTextInput}
          films={films}
          setFilms={setFilms}
        />
      </div>
    </div>
  );
}

export default App;
