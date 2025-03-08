import { Card } from "antd";
import { CardPageType } from "./User.Type";

function CardPage({ item }: CardPageType) {
  return (
    <div>
      <Card style={{ width: 250 }}>
        <div>
          <img src={item.image} alt={item.name} />
        </div>
        <div>
          <p>{item.name}</p>
          <h4>{item.sale_price}</h4>
        </div>
      </Card>
    </div>
  );
}

export default CardPage;
