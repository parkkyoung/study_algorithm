/*
    나머지 한 점
    코딩테스트 알고리즘 문제
    https://programmers.co.kr/learn/courses/18/lessons/1878
*/

/*
    문제만 잘 이해한다면 머릿속으로 계산해 볼 때 쉬운 문제이다.
    주어지는 3개의 점들은 모두 각 x축과 y축에서 평행하기 때문에
    중복되지 않는 값이 답이다.
*/

function solution(v) {
    var answer = [];

    var n1 = v[0], n2 = v[1], n3 = v[2];
    
    // 1번째와 2번째가 같다면 3번째, 1번째와 3번째가 같다면 2번째, 아니면 1번째
    n1[0] == n2[0] ? answer.push(n3[0]) : n1[0] == n3[0] ? answer.push(n2[0]) : answer.push(n1[0]);
    n1[1] == n2[1] ? answer.push(n3[1]) : n1[1] == n3[1] ? answer.push(n2[1]) : answer.push(n1[1]);

    return answer;
}

/*
    비트연산자를 사용한다면 코드를 더 간단하게 작성할 수 있다.
*/

function solution(v) {
    return [v[0][0]^v[1][0]^v[2][0], v[0][1]^v[1][1]^v[2][1]];
}


