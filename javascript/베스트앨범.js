/*
    베스트앨범
    코딩테스트 해시 문제
    https://programmers.co.kr/learn/courses/30/lessons/42579
*/


/*
    파라미터는 장르, 재생 횟수 두 개의 배열이다.
    기본 값으로 알 수 있는 정보는 각 곡의 id(i), 장르, 횟수 이다.
    단순히 많이 재생된 곡들의 id값들을 리턴시키고 나머지 정보들을 버린다면 간단하겠지만
    정렬 방식으로 문제를 한 번 꼬았다.

    1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
    2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
    3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

    sort 첫 번째 조건으로 인하여 장르별 총 재생 횟수를 알아야 한다.
    sort 두 번째 조건으로 인하여 id별 재생 횟수를 정리해야 한다.
    
    이에 따라 내가 만들 로직은
    1. 정보를 담을 객체 Object를 생성하여 장르별 총 재생횟수와 아이디, 재생횟수 배열을 담아준다.
    2. Object를 총 재생 횟수 기준 배열로 정렬한다.
    3. 정렬된 배열 안의 정보들을 조회하여 리턴할 값을 만든다.
*/

function solution(genres, plays) {
    var answer = [];
    
    // 정보를 담을 그룹 객체 생성
    let gObj = {};
    // 장르 기준 루프
    for(let i in genres){
        // 생성된 장르 객체가 없다면
    	if (!gObj[genres[i]]) {
            // 장르 객체 생성
            gObj[genres[i]] = {};
            // 총 재생 횟수 생성
            gObj[genres[i]].tPlay = plays[i];
            // i번째 정보 배열로 생성하여 담기
    		gObj[genres[i]].arr = [[plays[i], parseInt(i)]];
        }
        // 생성된 장르 객체가 있다면
    	else {
            // 총 재생 횟수 더해주기
            gObj[genres[i]].tPlay += plays[i];
            // i번째 정보 배열로 담기
    		gObj[genres[i]].arr.push([plays[i], parseInt(i)]);
    	}
    }

    // 총 재생 횟수를 기준으로 배열로 정렬한다.
	const gSort = Object.values(gObj).sort((a, b) => {return b.tPlay - a.tPlay});
    
    // 장르별 루프
    for(let j in gSort){
        // 배열 안의 재생 횟수를 기준으로 정렬
    	(gSort[j].arr).sort(function(a,b){return b[0] == a[0] ? a[1]-b[1] : b[0]-a[0]});

        // 순서대로 2곡만 선별하여 answer에 id 담기
    	for(let k=0; k<gSort[j].arr.length && k < 2; k++){
    		answer.push(gSort[j].arr[k][1]);
    	}
    }
    
    return answer;
}
