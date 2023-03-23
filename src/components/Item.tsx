import { ApiType } from "../ApiType";

type ItemProps = {
  item: ApiType;
  itemHeight: number;
};

const Item = ({ item, itemHeight }: ItemProps) => {
  return (
    <div
      key={item.login.uuid}
      style={{
        height: itemHeight,
        position: "absolute",
        top: `${item.idx * itemHeight}px`,
        width: "100%",
      }}
    >
      <p>
        {item.name.first} {item.name.last}
      </p>
      <img src={item.picture.medium} alt={item.name.first} />
    </div>
  );
};

export default Item;
