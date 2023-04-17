import React, { useState } from "react";

export default function AppForm() {
  const [form, setFrom] = useState({ name: "", email: "" });
  //!리엑트는 모든 ui의 변경은 상태변경으로부터 발생해야해
  const handleSubmit = (e) => {
    e.preventDefault();
    //! e.preventDefault()안하면 submit누를때 마다(즉 handleSubmit 실행하면) 페이지 리프레쉬돼.... submit 눌러도 기존 페이지에 머무르려면 있어야해
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target; //e.target의 name과 value를 가져와서
    //여기서 e.target은 input안에 값들..즉 input안에 name,value
    //input의 name과 value의 값이 바뀌면
    setFrom({ ...form, [name]: value });
    //!이름에 onChange가 일어나면 name:value 이고
    //!이메일에 onChange가 일어나면 e-mail:value 이니까
    //!객체의 key값이 동적으로 할당될때는 [ ] 형식으로 써
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
