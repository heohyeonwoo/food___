// 음식 데이터 배열
var foodData = [
    { classification: '한식', foodName: '김치찌개', price: '10,000원', info: '김치를 기반으로 하는 한국의 대표 음식입니다.' },
    { classification: '중식', foodName: '짜장면', price: '8,000원', info: '춘장,야채,고기를 식용유에 볶아서 만든걸 면에 비벼먹는 대표 중화요리입니다.' },
    { classification: '양식', foodName: '파스타', price: '15,000원', info: ' 물과 듀럼밀 세몰리나를 반죽하여 만드는 이탈리아의 면요리입니다.' },
    { classification: '분식', foodName: '떡볶이', price: '5,000원', info: '떡과 부재료를 양념에 볶거나 끓여서 먹는 대표 분식입니다.' },
    { classification: '일식', foodName: '초밥', price: '12,000원', info: ' 어패류의 살이나 유부·달걀·김 등의 식재료를 배합초에 절인 쌀밥 위에 올려 만드는 대표 일식입니다.' }
];

// 리스트에 항목 추가하는 함수
function addList() {
    var classification = document.getElementById('classification').value; // 분류 입력값 가져오기
    var foodName = document.getElementById('foodName').value; // 음식 이름 입력값 가져오기

    var table = document.getElementById('myTable');
    var row = table.insertRow(-1); // 테이블에 새로운 행 추가

    var cell1 = row.insertCell(0); // 분류 열
    var cell2 = row.insertCell(1); // 음식 이름 열
    var cell3 = row.insertCell(2); // 가격 열
    var cell4 = row.insertCell(3); // 음식 정보 열

    cell1.innerHTML = classification;
    cell2.innerHTML = foodName;
    cell3.innerHTML = getFoodPrice(classification); // 분류에 해당하는 가격 가져오기
    cell4.innerHTML = getFoodInfo(classification); // 분류에 해당하는 음식 정보 가져오기

    document.getElementById('classification').value = ''; // 입력 필드 초기화
    document.getElementById('foodName').value = ''; // 입력 필드 초기화
}

// 분류에 해당하는 가격 가져오는 함수
function getFoodPrice(classification) {
    for (var i = 0; i < foodData.length; i++) {
        if (foodData[i].classification === classification) {
            return foodData[i].price; // 분류에 해당하는 가격 반환
        }
    }
    return ''; // 일치하는 분류가 없을 경우 빈 문자열 반환
}

// 분류에 해당하는 음식 정보 가져오는 함수
function getFoodInfo(classification) {
    for (var i = 0; i < foodData.length; i++) {
        if (foodData[i].classification === classification) {
            return foodData[i].info; // 분류에 해당하는 음식 정보 반환
        }
    }
    return ''; // 일치하는 분류가 없을 경우 빈 문자열 반환
}

// 음식 검색을 수행하는 함수
function searchFood() {
    var classification = document.getElementById('classification').value; // 분류 입력값 가져오기
    var foodName = document.getElementById('foodName').value; // 음식 이름 입력값 가져오기

    var table = document.getElementById('myTable');
    var rowCount = table.rows.length;

    // 테이블 초기화
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    for (var i = 0; i < foodData.length; i++) {
        var item = foodData[i];
        if (item.classification === classification || item.foodName === foodName) {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = item.classification;
            cell2.innerHTML = item.foodName;
            cell3.innerHTML = item.price;
            cell4.innerHTML = item.info;
        }
    }
}