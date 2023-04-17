import React, { useState } from "react";
import { useImmer } from "use-immer";
//!터미널에 npm add immer use-immer 해서 immer랑 use-immer 설치해야해 => 일반 npm add로 하면 배포할때도 이 라이브러리 사용=> 패키지 제이슨에 "dependencies"에서 확인가능
// npm add -d 옵션줘서 설치하면 개발용 라이브러리가 설치 됌 => 배포할때 이 라이브러리는 사용X => 패키지 제이슨에 "devDependencies"에서 확인
//!useImmer 쓰면 스프레드로 복사 안해도 그대로 객체고치듯이 고치는 것

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    updatePerson((person) => person.mentors.push({ name, title }));
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
      //해당 index를 1개 삭재
    });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
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
};
