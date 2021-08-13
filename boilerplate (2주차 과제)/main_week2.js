// 상품 데이터
const data = [
  //배열
  { name: "초콜렛", price: 2000 }, // 안에 객체
  { name: "아이스크림", price: 1000 },
  { name: "컵라면", price: 1600 },
  { name: "볼펜", price: 2500 },
  { name: "아메리카노", price: 4000 },
  { name: "과자", price: 3000 },
  { name: "탄산수", price: 1200 },
  { name: "떡볶이", price: 3500 },
  { name: "노트", price: 1500 },
  { name: "껌", price: 500 },
];

// 사용자 입력 받기
const line = prompt("최대 금액을 입력해주세요.");
const amount = +line; // 양수로 만드는 작업..?

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
// 함수 객체로 반환해야 함
const item = getItemByAmount(data, amount); //(배열, +금액)

const msg = item //조건문
  ? `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` //참
  : "살 수 있는 상품이 없습니다."; //거짓

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.

// < sudo code >
// if(사용자의 입력이 숫자가 맞는지) - Number.isNaN
//  ㄴ 숫자가 맞을경우
//    반복문을 data 배열 끝까지 한 번 돌림
//        반복문 안에서 if(amount >= item.price)
//          ㄴ 맞을 경우
//              onlyPriceArr : 가격만 뽑아 넣은 배열 생성.
//              priceArr라는 새로운 배열에 item.price 넣어놓고 작은 수 -> 큰 수 순으로 정렬
//              expensivePrice : 가장 큰 수 할당 (맨 뒤의 수)
//    indexNum :  가장 큰 수의 인덱스 번호 추출
//    data[indexNum] 객체 return.
//  ㄴ 숫자가 아닐 경우
//     return 'null';

// 함수 객체로 반환해야 함
function getItemByAmount(data, amount) {
  let priceArr = [];
  let onlyPriceArr = [];
  let expensivePrice;
  let indexNum;

  // amount가 숫자면
  if (Number.isNaN(amount) === false) {
    for (let i = 0; i < data.length; i++) {
      // 가격만 뽑아 넣은 배열
      onlyPriceArr.push(data[i].price);

      if (amount >= data[i].price) {
        //1. 조건에 맞는 가격만 모아진 배열 생성
        priceArr.push(data[i].price);
      } //if end

      //2. 배열 내부 오름차순으로 정렬
      // [5, 7, 10, 15 ....]
      priceArr.sort((a, b) => a - b);

      //3. 가장 큰 가격 선택. -> 2000원
      expensivePrice = priceArr[priceArr.length - 1];
    } //for end

    indexNum = onlyPriceArr.indexOf(expensivePrice);
    return data[indexNum];
  } //if end

  return "null";
} //함수 end
