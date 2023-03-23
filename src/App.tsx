import { useEffect, useState } from "react";
import { ApiType } from "./ApiType";
import "./App.css";
import OuterBox from "./components/OuterBox";

type Items = {
  index: number;
  name: string;
};

function App() {
  const [items, setItems] = useState<ApiType[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/?results=1000");
      const { results } = await res.json();

      let mutuatedResults = results.map((r: ApiType, i: number) => {
        r.idx = i + 1;
        return r;
      });
      console.log(mutuatedResults);

      setItems(mutuatedResults);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // const count = 1000;
  // const itemHeight = 30;
  // const windowHeight = 500;
  // const innerHeight = count * itemHeight;
  // const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 3);
  // const endIndex = Math.min(
  //   Math.floor((scrollTop + windowHeight) / itemHeight) + 3,
  //   count
  // );

  // function displayMovieItems() {
  //   const displayedItems = items.slice(startIndex, endIndex);
  //   console.log({ displayedItems, startIndex, endIndex });
  //   const movieList = displayedItems.map((item: ApiType, index) => {
  //     return (
  //       <div
  //         key={item.login.uuid}
  //         style={{
  //           height: itemHeight,
  //           position: "absolute",
  //           width: "100%",
  //           top: `${item.idx * itemHeight}px`,
  //         }}
  //       >
  //         movie-{index}
  //       </div>
  //     );
  //   });

  //   return movieList;
  // }

  // function onScroll(event: React.UIEvent<HTMLDivElement, UIEvent>) {
  //   setScrollTop(event.currentTarget.scrollTop);
  // }

  return (
    <div className='App' style={{ width: "min(90%, 600px)", margin: "0 auto" }}>
      <h1>React Virtualized</h1>

      <OuterBox items={items} />
    </div>
  );
}

export default App;

// console.log("rendering2", items.length);
