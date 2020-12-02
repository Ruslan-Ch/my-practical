"use strict"


//DZ 18.1
// Используя Promise написать код, который сформирует 2 последовательных запроса за различными файлами
// json (data.json, data2.json). В файлах лежат массивы подобные по структуре. Склеить 2 массива и вывести
// результат в консоль.

/*let getFile = (method, file) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, file, true);
        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status <= 400) {
                resolve(JSON.parse(xhr.responseText));
            }
        });
    });
};

getFile('GET', 'data.json')
    .then(
        (data) => {
            console.log(data);
            return new Promise((Response, Reject) => {
                getFile('GET', 'data2.json')
                    .then(
                        (data2) => {
                            console.log(data2);
                            let dataConcat = data.concat(data2);
                            //console.log(dataConcat);
                            Response(dataConcat)
                        }
                    )
            })
        }
    )
    .then(
        (dataConcat) => {
            console.log(dataConcat);
        }
    )*/

                 // Или так DZ 18.1
/*

let getFile = (method, file) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, file, true);
        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status <= 400) {
                resolve(JSON.parse(xhr.responseText));
            }
        });
    });
};

Promise
    .all([
        getFile('GET', 'data.json'),
        getFile('GET', 'data2.json'),
    ])
    .then(
        (data) => {
            let dataConcat = data[0].concat(data[1]);
            console.log(dataConcat);
        }
    )
*/



//--------------DZ 18.2------------

//DZ 18.2
//  Написать промис, который будет запрашивать ввод с клавиатуры чисел (использовать тэг input, с очисткой после каждого
//  ввода), которые сохранит в массив. Закончить запрос чисел необходимо тогда, когда закончится время. Время - 10 сек.
//  После этого - выполнить операцию, которая выведет массив в консоль.

/*let divGetNumber = document.createElement("div");
divGetNumber.className = "GetNumber";
let inputNumber = document.createElement("input");
inputNumber.className = "inputNumber";
inputNumber.placeholder = "Вводите числа";
inputNumber.disabled;
inputNumber.type = "number";
divGetNumber.appendChild(inputNumber);
//document.body.append(inputNumber);
let buttonNumber = document.createElement("button");
buttonNumber.className = "buttonNumber";
buttonNumber.innerHTML = "Push"
divGetNumber.appendChild(buttonNumber);
document.body.append(divGetNumber);

let willIGetNewPhone = new Promise(
    function (resolve, reject) {

        let items = [];
        let getInputNumber = document.querySelector(".inputNumber");
        let getFromInput = document.querySelector(".buttonNumber");

        getFromInput.onclick = function () {

            items.push(getInputNumber.value);
            getInputNumber.value = '';

            setTimeout(() => {
                resolve(items);
            }, 10000);
        }
    }
);
willIGetNewPhone.then(
    (arrResolve) => {
        let elem = document.querySelector('.inputNumber');
        elem.disabled = "enabled";
        console.log(arrResolve);
    },
    (arrReject) => {
        console.log(arrReject)
    }
);*/


                                   // Другие варианты 18,1

// let dataGlue = new Promise ((response, reject)=> {
//     let firstRequest = './data.json',
//     xhr = new XMLHttpRequest();
//     xhr.open('GET', firstRequest);
//     xhr.responseType = 'json';
//     xhr.send();
//     xhr.onload = () => {
//         if (xhr.status >= 400) {
//             console.error(xhr.response)
//
//         } else {
//             console.log(xhr.response);
//             let firstData=xhr.response;
//             firstData ? response(firstData) : reject(`something wrong, check it!!!`);
//
//         }
//     };
// }
// );
// dataGlue.then(
//     		(data) => {
//                 let secondRequest = './data2.json',
//                 xhr = new XMLHttpRequest();
//                 xhr.open('GET', secondRequest);
//                 xhr.responseType = 'json';
//                 xhr.send();
//                 xhr.onload = () => {
//                     if (xhr.status >= 400) {
//                         console.error(xhr.response)
//
//                     } else {
//                         console.log(xhr.response);
//                         let secondData=xhr.response,
//                         unitedObj={...data, ...secondData};
//                         console.log(unitedObj);
//                     }
//                 }
//     		},
// )


//----------------
/*async function getList (JSONfile) {

    let response = await fetch(JSONfile);


    if (response.ok) {

        let result = await response.json();

        return result;

    }

}

Promise.all([getList('data.json'), getList('data2.json')]).then((values) => {

    let list = values.reduce((sum, current) => sum + ',' + current).split(',');

    console.table(list)

} );*/







//ALTERNATIVE VARIANT 1

/* function getList (JSONfile) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', JSONfile);
		xhr.send();
		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 400) {

				resolve(JSON.parse(xhr.responseText))
			}
		}
	} )
}
Promise.all([getList('data.json'), getList('data2.json')]).then((values) => {
	let list = values.reduce((sum, current) => sum + ',' + current).split(',');
	console.log(list)
} );*/




//ALTERNATIVE VARIANT 2
/*
let listFinal;
let listConcat = new Promise(
	(resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'data.json');
		xhr.send();
		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 400) {
				resolve(JSON.parse(xhr.responseText))
			} else {
				reject(xhr.statusText)
			}
		}
	}
)
listConcat.then(
	(data) => {
		let listOne = data.slice();
			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'data2.json');
			xhr.send();
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 400) {
					let listTwo = JSON.parse(xhr.responseText);

					console.log(listOne);
					console.log(listTwo);
					listFinal = listOne.concat(listTwo);
				}
				console.log(listFinal);
			}
	}
)*/



//ALTERNATIVE VARIANT 3

/*function getList (JSONfile) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', JSONfile);
		xhr.send();
		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 400) {

				resolve(JSON.parse(xhr.responseText))
			}
		}
	} )
}
let listConcat = new Promise(
	(resolve, reject) => {

		resolve(getList('data.json'));
	}
)
listConcat.then(
	(data) => {
		let listOne = data.slice();
		getList('data2.json').then(
				(data) => {
					let listConcat = listOne.concat(data);
					console.log(listOne);
					console.log(data);
					console.log(listConcat);
				}
		);
	}
)
*/


// Другие варианты 18,2

/*let dataGlue = new Promise ((response, reject)=> {
        alert('Вводите числа в инпут в течении 10 сек');
        let dataStorage =[],
            inputElem = document.createElement("input");
        inputElem.style.height=`40px`;
        inputElem.style.fontSize=`36px`;
        inputElem.setAttribute('type','number');
        document.body.append(inputElem);
        document.onkeydown = function (event) {
            if (event.key === 'Enter' && inputElem.value !==''){
                dataStorage.push(inputElem.value);
                inputElem.value='';
                // console.log(inputElem.value);
                // console.log(dataStorage);
            }
        };
        setTimeout(()=>{
            inputElem.setAttribute('type','hidden');
            let inputResult = document.createElement('div');
            inputResult.innerHTML=`<h1>${dataStorage}</h1>`;
            document.body.append(inputResult);
            console.log(dataStorage);
        },10000)
    }
);*/


//----------------------
/*

let inputField = document.createElement('input');
document.body.appendChild(inputField);


let  getList = new Promise (
    (resolve, reject) => {

        inputField.onmousedown = event =>

            event? resolve() : reject();

    }
)

getList.then(
    data => {

        let list = [];

        inputField.addEventListener('keypress', function (event) {

            if (event.key == 'Enter') {

                list.push(inputField.value);

            }

            inputField.value = '';

        } )


        setTimeout( () => {

            console.log(list);

        }, 10000 )

    })

*/




