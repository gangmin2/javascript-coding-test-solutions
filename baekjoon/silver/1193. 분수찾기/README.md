# [Silver Ⅴ] 분수찾기 - 1193

|시간 제한|메모리 제한|
|---|---|
|0.5 초 (추가 시간 없음)|256 MB|

<br>

### 문제
무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

|||||||
|---|---|---|---|---|---|
|1/1|1/2|1/3|1/4|1/5|…|
|2/1|2/2|2/3|2/4|…|…|
|3/1|3/2|3/3|…|…|…|
|4/1|4/2|…|…|…|…|
|5/1|…|…|…|…|…|
|…|…|…|…|…|…|

이와 같이 나열된 분수들을 `1/1` → `1/2` → `2/1` → `3/1` → `2/2` → `…` 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

<br>

### 입력
첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

<br>

### 출력
첫째 줄에 분수를 출력한다.

<br>

|예제 입력|예제 출력|
|---|---|
|1|1/1|
|2|1/2|
|3|2/1|
|4|3/1|
|5|2/2|
|6|1/3|
|7|1/4|
|8|2/3|
|9|3/2|
|14|2/4|

<br>

### 알고리즘 분류
* 수학
* 구현

<br>

---
**[출처]** 백준 > 문제 > 단계별로 풀어보기 > 일반 수학 1 > [분수찾기](https://www.acmicpc.net/problem/1193)