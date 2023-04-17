import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {/* 원래 배열의 인덱스를 키로 쓰는것은 추천하지 않는다 => 원래 멘토마다 고유 id를 지정해줘야 했어...*/}
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
        //! 왜 그냥
        //!person.mentors[0]= current;
        //! setPerson(person)
        //이런식은 안돼나요?? => 객체의 불변성때문에......
        //객체를 만들면 객체마다 고유한 참조값이 생기는데 리엑트는 새로운 참조값이 만들어져야지 변경됀걸 안다.
        //참조값이 같으면 안에 값을 아무리 수정해봤자 리엑트는 그냥 동일한 객체라고 생각해서 업데이트 안해줘

        /** setPerson((pre) => ({
            ...pre,
            mentors: pre.mentors.map((el) => {
              if (el.name === prev) return { ...el, name: current };
              return el; */

        //!리액트에서 사용하는 모든 state들은 불변성을 유지해야한다
        //!즉 리액트에서 사용하는 상태의 배열이나 객체의 내부내용을 직접적으로 건들면 안됀다
        //!즉 그래서 배열이나 객체를 ...를 써서 복사해서 새로운 배열이나 객체를 만들어서 쓴것
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
