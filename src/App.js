import "./styles.css";
import { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
// const Row = ({ index, style }) => (
//   <div style={style} className="box">
//     <h1>image #{index}</h1>
//     <img src={bigList[index].url} alt={bigList[index].title} />
//   </div>
// );
export default function App() {
  const [bigList, setBigList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setBigList(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="App">
      <h1>Virtual List</h1>
      <List
        height={window.innerHeight - 100}
        itemCount={bigList.length}
        itemSize={150}
        width={window.innerWidth - 20}
      >
        {({ index, style }) => (
          <div style={style} className="box">
            <div className="card">
              <img src={bigList[index].url} alt={bigList[index].title} />
            </div>
          </div>
        )}
      </List>
    </div>
  );
}
