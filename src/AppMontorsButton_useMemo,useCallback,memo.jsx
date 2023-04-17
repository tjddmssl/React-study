//! React.memo :종류 HOC, 클래스 또는 함수형 컴포넌트에서 사용가능, 단순 UI컴포넌트 리렌더링 방지
//! useMemo : 종류 hook, 함수형 컴포넌트만 , 함수의 연산량이 많아서 그 결과값의 재사용(결과값 보존)
//! useCallback : 종류 hook, 함수형 컴포넌트만, 함수의 재생성 막음
/**1. React.memo: 단순 UI 컴포넌트의 리렌더링 방지 (props가 들어가는 순간 리렌더링 된다)
2. useMemo: props로 전달받은 함수를 실행해서, 그 결과값을 보존 (deps=의존인자가 하나라도 변하면 함수를 다시 실행해서 그 결과값을 보존)
3. useCallback: props로 전달받은 함수를 보존 (deps가 하나라도 변하면 그에 맞는 새로운 함수를 리턴) */

import React, { memo, useCallback, useMemo, useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  }, []);

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
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="삭제하기" onClick={handleDelete} />
      <Button text="멘토 추가하기" onClick={handleAdd} />
    </div>
  );
}
//!정리하자면, 엘리쌤이 작성하신 예제를 보면 Button 컴포넌트는 React.memo로 감싸서, props로 들어온 함수는 useMemo로 감싸서 리렌더링을 방지, onClick은 useCallback으로 만들어 두었기 때문에 변경될 일이 없어//
const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering 😜");
  const result = useMemo(() => calculateSomething(), []); //useMemo를 따한번만 수행
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("😆");
  }
  return 10;
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

/**App 컴포넌트에 상태가 바뀌거나 뭐가 바뀌면... 그 자식요소들,,,(지금은 버튼 컴포넌트나 만약 버튼 컴포넌트 안에 다른 자식요소가 있다면,,그거까지 다) 그자식요소들이 바뀐게 없어도 다 리렌더링됀다... => 성능이 개떨어짐*/
