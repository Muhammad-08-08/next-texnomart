import { Card } from "antd";
import { CardPageType } from "./User.Type";
import Image from "next/image";

function CardPage({ item }: CardPageType) {
  return (
    <div>
      <Card style={{ width: 250 }}>
        <div>
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={300}
            className="object-cover"
          />
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
