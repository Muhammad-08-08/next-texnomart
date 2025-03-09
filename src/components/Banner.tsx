import { Carousel } from "antd";

function Banner() {
  const banner = [
    "https://mini-io-api.texnomart.uz/newcontent/slider/358/KSYRhCxptMHkYI2hnHQEb8LNm3KUC7CuHX7fNk1D.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/357/I7IG0zZKE7slLOBmdZYIHpHmjrlr4kYpZB62G8Tq.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/353/xnoV6GH7LvFlDRpDpsshAaebZk9RQ4t6oVQLq83i.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/352/1KTJ8zmxnXMzBvjTk4jCuXcKPkd251n2Xx9GL4Xn.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/354/UUfhmmcJSCMtzLYELGhD9OgZdwWDaJm1kVTtuW6A.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/356/4lavHjB0DmCfBwJzIoabAP309zKfjTeydsdol063.webp",
    "https://mini-io-api.texnomart.uz/newcontent/slider/347/dyFPEw5MYDBCgQSopcXyBcpOE1HVhSugUCb7V3ad.webp",
  ];

  return (
    <div className="container mx-auto">
      <Carousel arrows autoplay pauseOnHover draggable>
        {banner.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              alt={`banner-${index}`}
              style={{
                width: "100%",
                borderRadius: 10,
                transition: "transform 0.3s ease-in-out",
                border: "5px solid transparent",
              }}
              className="hover:border-4 hover:border-blue-500 cursor-pointer select-none"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
