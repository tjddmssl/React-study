import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
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
  };
  const handleAdd = () => {
    const newname = prompt(`추가할 이름은?`);
    const newtitle = prompt(`추가할 직함은?`);
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name: newname, title: newtitle }],
    }));
  };

  const handleDlete = () => {
    const deletename = prompt(`누구의 이름을 삭제 하고싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((m) => m.name !== deletename),
    }));
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
            {/* 원래 배열의 인덱스를 키로 쓰는것은 추천하지 않는다 => 원래 멘토마다 고유 id를 지정해줘야 했어...*/}
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      {/* 리액트에서 사용하는 모든 state들은 불변성을 유지해야한다 //즉 리액트에서
      사용하는 상태의 배열이나 객체의 내부내용을 직접적으로 건들면 안됀다 //!즉
      그래서 배열이나 객체를 ...를 써서 복사해서 새로운 배열이나 객체를 만들어서
      쓴것 */}
      <button onClick={handleUpdate}>멘토의 이름바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDlete}>멘토 삭제하기</button>
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
