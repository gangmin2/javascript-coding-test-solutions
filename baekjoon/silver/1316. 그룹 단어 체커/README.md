# [Silver Ⅴ] 그룹 단어 체커 - 1316

|시간 제한|메모리 제한|
|---|---|
|2 초|128 MB|

<br>

### 문제
그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

<br>

### 입력
첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다. 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

<br>

### 출력
첫째 줄에 그룹 단어의 개수를 출력한다.

<br>

|예제 입력|예제 출력|
|---|---|
|3<br>happy<br>new<br>year|3|
|4<br>aba<br>abab<br>abcabc<br>a|1|
|5<br>ab<br>aa<br>aca<br>ba<br>bb|4|
|2<br>yzyzy<br>zyzyz|0|
|1<br>z|1|
|9<br>aaa<br>aaazbz<br>babb<br>aazz<br>azbz<br>aabbaa<br>abacc<br>aba<br>zzaz|2|

<br>

### 알고리즘 분류
* 구현
* 문자열

<br>

---
**[출처]** 백준 > 문제 > 단계별로 풀어보기 > 심화 1 > [그룹 단어 체커](https://www.acmicpc.net/problem/1316)