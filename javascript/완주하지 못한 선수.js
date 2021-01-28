/*
    완주하지 못한 선수
    코딩테스트 해시 문제
    https://programmers.co.kr/learn/courses/30/lessons/42576
*/


/*
    배열간의 비교 문제다.
    참가자 배열 중에 완주자 배열에 없는 놈을 검색해본다.
*/

function solution(participant, completion) {
    var answer = '';

    answer = participant.filter(item => !completion.includes(item))[0];

    return answer;
}

/*
    1줄의 코드로 심플하지만 틀린 답안이다.
    완주하지 못한 선수의 이름이 중복일 경우에 undefined를 리턴한다.

    그렇다면 하나씩 차근차근 비교를 해보자.
    participant 배열을 포문 돌려서 completion 안의 해당 매칭 값들을 하나씩 지워
    매칭이 안되면 그놈이 완주하지 못한놈이다.
*/

function solution(participant, completion) {
    var answer = '';

    // 완주자 수 만큼 반복문
    for(let i=0; i<participant.length; i++){

        // i번째 선수
        let num = completion.indexOf(participant[i]);
        // 선수가 완주 목록에 있다면 완주자 목록에서 제거
        if (num > -1) completion.splice(num, 1);
        // 선수가 완주 목록에 없다면 요놈이 답이다.
        else {
            answer = participant[i];
            break;
        }
    }

    return answer;
}

/*
    정답이다.
    하지만 효율성이 떨어진다.
    1. 완주자 배열에서 i번째 선수 이름을 가져온다.
    2. 참가자 배열에서 i번째 선수 이름이 있는지 찾아본다.
    3-1. 있다 : 참가자 배열에서 해당 선수를 삭제하고 1번으로 가시오
    3-2. 없다 : i번째 선수 이 녀석이 낙오자다

    이 기능이 효율이 떨어지는 이유가 뭘까.
    배열 최대 길이는 10만이라 잘못 꼬이면 검색을 10만 x 5만 즉 50억번 하게 된다.
    거기에 배열에서 지우는 작업 또한 10만번이다.
    함수 사용을 최대한 자제할 방법을 찾아야한다.

    문제 속에 힌트가 있다.
    '완주하지 못한 선수는 단 한명이다.'
*/

function solution(participant, completion) {
    var answer = '';

    // 참여자와 완주자 배열을 정렬
    participant.sort();
    completion.sort();

    // 순서대로 하나씩 비교
    for (var i=0; i<participant.length; i++){
        if(participant[i] != completion[i]) {
            answer = participant[i];
            break;
        }
    }

    return answer;
}

/*
    정확성과 효율성 모두 옳은 정답이다.
    반복문을 돌릴 횟수는 위에 답과 경우의 수가 비슷할 순 있지만
    위에 답은 횟수만큼 indexOf 함수를 쓰는데 반해
    아래 답은 10명이든 10만명이든 sort 함수 두번 호출 이후 String 비교로 정답을 찾아낸다.
*/