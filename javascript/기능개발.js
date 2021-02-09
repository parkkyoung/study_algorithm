/*
    기능개발
    코딩테스트 스택/큐 문제
    https://programmers.co.kr/learn/courses/30/lessons/42586
*/

function solution(progresses, speeds) {
    var answer = [];

    let i = 0, j = 1;

    while(i < progresses.length){

    	if (progresses[i] + speeds[i] * j >= 100) {

    		if (i == progresses.length-1) {
    			answer.push(1);
    			break;
    		}

    		let k, num = 1;

    		for(k=i+1; k<progresses.length; k++){
    			if (progresses[k] + speeds[k] * j >= 100) num++;
    			else break;
    		}

    		answer.push(num);
    		i = k;
    	}
    	else {
    		j++;
    	}
    }

    return answer;
}