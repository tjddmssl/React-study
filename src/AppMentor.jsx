import React, { useState } from "react";

//!설명부분
const obj = {
  name: "엘리",
  title: "개발자",
  mentor: {
    name: "밥",
    title: "시니어개발자",
  },
};

const name = "업데이트됄 이름";
const update = {
  ...obj,
  mentor: { ...obj.mentor, name: name },
}; //...obj 낱개로 obj풀고, 뒤에꺼가 덮어 씌어진다
//!설명부분

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          /**Window.prompt() : 사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화 상자를 띄웁니다.*/
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name: name },
            //리액트에서 사용하는 모든 state들은 불변성을 유지해야한다
            //즉 리액트에서 사용하는 상태의 배열이나 객체의 내부내용을 직접적으로 건들면 안됀다
            //!즉 그래서 배열이나 객체를 ...를 써서 동일한 객체를 복사해서 새로운 배열이나 객체를 만들어서 쓴것
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title: title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
