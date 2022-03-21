//1. 액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//2. 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//3. 초기 상태 만들기
const initialState = {
  number: 0,
};

//4. 리듀서 만들기
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};
export default counterReducer;