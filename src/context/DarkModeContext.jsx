import { createContext, useState } from "react";

export const DarkModeContext = createContext();
//! createContext()는 우리가 필요한 데이터를 간직하고

export function DarkModeProvider({ children }) {
  //!DarkModeProvider는 데이터를 가지고 잘보여주고 있는 우산을 만드는것
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode); // 이전mode 받아와서 거꾸로
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {/* 자식 컴포넌트와 공유하고 싶은 값이 있다면 value에 지정, 
      즉 자식컴포넌트에서 darkMode인지 아닌지, 토글링 하는 것을 활용했음 좋겠으니까..  객체 {darkMode:darkMode,toggleDarkMode   } */}
      {children}
    </DarkModeContext.Provider>
  );
}

/**
Context란? 
- Prop Drillig..
- 모든 컴포넌트들이 필요하다면, 어플리케이션 전반적으로 필요한 경우 
Context API를 사용할수 있다. (예: 언어, 테마(다크모드),로그인 헸는지 안했는지)
단, Context API가 변경이 돼면, 이걸 사용하는 자식 컴포넌트들은 전부 리렌더링됀다.
그래서 빈번히 업데이트 되는 상태에는 X
- 빈번히 업데이트 되는 상태에는 Context API를 어플리케이션 전체에 사용하는게 아니라 
우리가 원하는 컴포넌트 트리중간에 사용해서 yellow Context API로 사용해야한다.
//! 즉 Context API를 사용할때는 어플리케이션 전체에 사용하기 보다는 정말 필요한곳 근접한 곳에서 우산을 씌어주면 됀다.즉 데이터가 어디까지 공유돼야 하는지 파악하는게 중요하다.

 */
