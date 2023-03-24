import { useState } from "react";
import { ApiType } from "../ApiType";
import Item from "./Item";

type OuterBoxProps = {
  items: ApiType[];
};

const OuterBox = ({ items }: OuterBoxProps) => {
  const [scrollTop, setScrollTop] = useState(0);
  const itemHeight = 120;
  const windowHeight = 500;
  const innerHeight = items.length * itemHeight;

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 3);
  const endIndex = Math.min(
    Math.floor((scrollTop + windowHeight) / itemHeight) + 3,
    items.length
  );

  console.log({ startIndex, endIndex, length: items.length });

  const displayUserList = () => {
    const displayItems = items.slice(startIndex, endIndex);
    const userList = displayItems.map((item) => {
      return <Item key={item.login.uuid} item={item} itemHeight={itemHeight} />;
    });

    return userList;
  };
  return (
    <div
      className='outerbox'
      style={{
        border: "1px solid tomato",
        width: "100%",
        height: windowHeight,
        overflowY: "scroll",
      }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div
        className='innerbox'
        style={{ height: innerHeight, position: "relative" }}
      >
        {displayUserList()}
      </div>
    </div>
  );
};

export default OuterBox;
