// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // join : string
  const result = fruits.join('^');
  console.log("join" + result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // separator, limit(number)
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  // reverse 배열 자체를 변환시킨다
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // splice  배열 자체를 수정
  const result = array.splice(0, 2);
  console.log(result);
  console.log(array);

  //slice 배열에서 원하는 부분만 리턴
  const result2 = array.slice(2, 5);
  console.log(result2);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // const result = students.find(function(student, index){
  //   return student.score === 90;
  // });
  const result = students.find((student) => student.score === 90);
  console.log("find" + result);
}

// Q6. make an array of enrolled students
// 수업에 등록한 학생들을 배열로 만들기
{
  const result = students.filter((student) => student.enrolled === true);
  console.log("filter : " + result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map : callback 함수를 호출하면서 새로운 값을 변환
  const result = students.map((student) => student.score);
  console.log("map : " + result);
}

// Q8. check if there is a student with the score lower than 50
{
  // some : true가 있는지 없는지
  const some = students.some((student) => student.score < 50);
  // 한명이라도 이 조건에 맞는 사람이 있다면 true
  const every = students.every((student) => student.score < 50);
  // 모든 사람이 이 조건에 맞는다면 true
  console.log('sonme : ' + some);
  console.log('every : ' + every);
}

// Q9. compute students' average score
{
  // const result = students.reduce((prev, curr)=>{
  //     console.log('-------');
  //     console.log(prev);
  //     console.log(curr);
  //     return prev+curr.score;
  // }, 0);

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log('students total score :' + result);
  console.log('students average score : ' + result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// 배열이 아닌 string으로 변경
{
  const result = students
  // 배열로 맞춰서 출력
  .map(student => student.score)
  // 50 이상 점수 출력
  .filter((score) => score >= 50)
  // string 으로 변환
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // const result = students
  // // 배열로 맞춰서 출력
  // .map(student => student.score)
  // // 오름차순으로 정렬
  // .sort()
  // // string 으로 변환
  // .join();
  // console.log(result);

  const result = students
  // 배열로 맞춰서 출력
  .map(student => student.score)
  // 내림차순으로 정렬
  .sort((a,b)=> b-a)
  // string 으로 변환
  .join();
  console.log(result);
}