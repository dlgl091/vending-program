
function varBring(a) { // 투입금액을 현재 금액에 더함함
    const insertedCoin = document.getElementById(a).value;
    let idResult = document.getElementById("result").innerText;
	
    let insertedCount = parseInt(idResult.slice(0,-1));
    insertedCount += parseInt(insertedCoin.slice(0,-1));
    idResult = insertedCount.toString() + '원';
    document.getElementById("result").innerText = idResult;
    colorChange(insertedCount);
	
//     if (idResult == '0원') {
//         let insertedCount = 0
//         document.getElementById("result").innerText = insertedCoin;
//         insertedCount += parseInt(insertedCoin.slice(0,-1));
//         colorChange(insertedCount);
//     }
//     else {
//         let insertedCount = parseInt(idResult.slice(0,-1));
//         insertedCount += parseInt(insertedCoin.slice(0,-1));
//         idResult = insertedCount.toString() + '원';
//         document.getElementById("result").innerText = insertedCount.toString() + '원';
//         colorChange(insertedCount);
//     }
}

function colorChange(total) { // 현재 금액에 따라 뽑을 수 있는 음료 표시
    const tea = document.getElementById('1000');
    const coffee = document.getElementById('700');
    const water = document.getElementById('500');
    console.log("colorChange 호출!!", total);
    if (total >= 1000) {
        tea.setAttribute('class', 'done');
        coffee.setAttribute('class', 'done');
        water.setAttribute('class', 'done');
    }
    else if (total >= 700) {
        coffee.setAttribute('class', 'done');
        water.setAttribute('class', 'done');
    }
    else if (total >= 500) {
        water.setAttribute('class', 'done');
    }
    console.log('색작업 완료!')
}

function removeClass() { // 색상 원상복구
    document.getElementById('1000').classList.remove('done');
    document.getElementById('700').classList.remove('done');
    document.getElementById('500').classList.remove('done');
}

function buyDrink(b, dValue) { // 음료 구매
    const insertedCoin = parseInt(document.getElementById('result').innerText.slice(0,-1));
    const drinkPrice = parseInt(b);
    let exchange = 0

    try {
        exchange = insertedCoin - drinkPrice
        if (exchange < 0) {
            alert("돈이 모자랍니다! 바보!");
        }
        else {
            document.getElementById("result").innerText = exchange.toString() + '원';
            alert(dValue + '구매 완료!');
            addList(dValue);
        }
    }
    catch (err) {
        alert(err.name); // ReferenceError
        alert(err.message); // lalala is not defined
        alert(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)
    }
    removeClass();
    colorChange(exchange);
}

function addList(dValue) {
	const result = document.getElementById('buyList');
    const item = document.createElement('li');
    const txt = document.createTextNode(dValue);
    item.appendChild(txt);
    result.appendChild(item);
}
