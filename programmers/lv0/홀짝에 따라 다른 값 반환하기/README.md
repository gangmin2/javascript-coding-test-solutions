# [Level 0] 홀짝에 따라 다른 값 반환하기

### 문제 설명
양의 정수 `n`이 매개변수로 주어질 때, `n`이 홀수라면 `n` 이하의 홀수인 모든 양의 정수의 합을 return 하고 `n`이 짝수라면 `n` 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

<br>

### 제한사항
* 1 ≤ `n` ≤ 100

<br>

### 입출력 예
|n|result|
|---|---|
|7|16|
|10|220|

<br>

### 입출력 예 설명
**입출력 예 #1**
* 예제 1번의 `n`은 7로 홀수입니다. 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.

**입출력 예 #2**
* 예제 2번의 `n`은 10으로 짝수입니다. 10 이하의 모든 양의 짝수는 2, 4, 6, 8, 10이고 이들의 제곱의 합인 2<span style="vertical-align: super">2</span> + 4<span style="vertical-align: super">2</span> + 6<span style="vertical-align: super">2</span> + 8<span style="vertical-align: super">2</span> + 10<span style="vertical-align: super">2</span> = 4 + 16 + 36 + 64 + 100 = 220을 return 합니다.

<br>

---
**[출처]** 프로그래머스 > 코딩테스트 연습 > 코딩 기초 트레이닝 > [홀짝에 따른 다른 값 반환하기](https://school.programmers.co.kr/learn/courses/30/lessons/181935)