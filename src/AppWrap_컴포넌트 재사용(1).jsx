import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          name="Bob"
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>

      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

// 원래는 컴포넌트 파일안에...

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
  //*Navbar 컴포넌트안에 <header style={{ backgroundColor: 'yellow' }}>만 두고 재사용하면서 각각 쓰이는 Navbar에 내가 쓰고 싶은 내용 추가 하고 싶어 즉 나머지는(내가 Navbar에 쓰고 싶은 내용) Navbar 컴포넌트밖에서 지정하자
  //! Navbar 컴포넌트안에 { children }을 props로 가져오고
  //  <Navbar> 요 사이에 쓰이는 값을 자동으로  { children }으로 가져온다. </Navbar>
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}'`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
