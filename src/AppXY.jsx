import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  //! 좌표라는 하나의 연관된 상태인데 하나의 객체로 묶어서 관리해보자.
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  return (
    <div //"container"안에 이벤트 핸들러 놓고 하자.
      //on에 관련한건 이벤트가 명확해서 event대신에 e로합니다.
      className="container"
      onPointerMove={(e) => {
        /*console.log(e.clientX, e.clientY);
        setX(e.clientX);
        setY(e.clientY);*/
        /* setPosition({ x: e.clientX, y: e.clientY })*/
        /* 수평으로만 이동이 가능하게 구현
         setPosition((prev) => ({ x: e.clientX, y: prev.y }))*/
        //수평으로만 이동이 가능하게 구현
        setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
