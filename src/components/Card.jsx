import React, { useState } from "react";
import { Card } from "antd";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

const { Meta } = Card;

const CatalogueItem = ({ id, name, thumbnail, price }) => {
  const [hovered, setHovered] = useState(false);

  const flipCard = () => {
    setHovered(!hovered);
  };

  const image = (
    <ReactCardFlip isFlipped={hovered}>
      <div key="front">
        <ImgFullWidth alt="Product" src={thumbnail} style={{filter: "grayscale(100%)"}} />
      </div>
      <div key="back">
        <ImgFullWidth alt="Product" src={thumbnail} />
      </div>
    </ReactCardFlip>
  );

  return (
    <div
      className="react-transition fade-in"
      onMouseEnter={flipCard}
      onMouseLeave={flipCard}
    >
      <Card
        id={id}
        cover={image}
        bordered={false}
        bodyStyle={{ border: "1px solid #e8e8e8", borderTopWidth: 0 }}
      >
        <Meta title={name} description={price} />
      </Card>
    </div>
  );
};

const ImgFullWidth = styled.img`
  width: 100%;
`;

export default CatalogueItem;
