//커스텀 훅 만들기
//!훅은(함수들은) 값의 재사용이 아니라 로직의 재사용을 위한 것이다.
//만약 다른 컴포넌트에서 useProducts를 또 호출 했다면?
//그 컴포넌트에서 그들만의 products데이터가 설정이됀다.
//이 커스텀 훅을 사용하는 곳마다 완전 개별적으로 데이터가 만들어지는것! 서로 값을 공유하지 않는다.
import { useState } from "react";
import { useEffect } from "react";
//한파일 내에서 만들수도 있지만, 재사용가능하게 만들고 싶어
//훅은 그냥 함수야,  use라고 시작

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false); //로딩 중이니?
  const [error, setError] = useState(undefined); //에러났니?
  const [products, setProducts] = useState([]); //데이터 받아 오니?
  useEffect(() => {
    setLoading(true); //데이터 로딩 시작
    setError(undefined); //에러 초기화
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((e) => setError("에러가 발생했음"))
      .finally(() => setLoading(false));
    //데이터를 받아왔던 안받아왔던 로딩은 끝을 내야해
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [salesOnly]); //!salesOnly가 바뀌면 다시 렌더링 해줘

  return [loading, error, products];
}
//useState처럼 배열을 리턴하도록 만듬
