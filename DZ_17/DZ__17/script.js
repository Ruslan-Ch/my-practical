
//  ДЗ 17. Получение файла users.json и рендеринг данных на основании полученных данных.
//  1.Скачать и сохранить в локальную папку файлы index_22_1.html, users.json и папку styles с
//  https://github.com/brightestsirius/users.
//  2.Сформировать запрос на получение файла users.json и отрендерить на странице карточку каждого юзера по примеру
//  верстки в index_22_1.html.


let xhr = new XMLHttpRequest();
xhr.open('GET', 'users.json', true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4){
        if(xhr.status <= 400){
            render( JSON.parse(xhr.responseText) );
        } else{
            console.log(xhr.status, xhr.statusText);
        }
    }
});

function render(data){
    // console.log( JSON.parse(xhr.responseText) );
    // console.log( data.rating.Satisfactory );
    // console.log( `${data.users[0].name}`);
    // console.log( '---------------');

    let users = data.users;
    for (let key in users) {

        let divCard = document.createElement("div");
        divCard.className = "card";


        let divCardInfo = document.createElement('div');
        divCardInfo.className = "card__info";
        divCard.appendChild(divCardInfo);

        let divCardInfoData = document.createElement('div');
        divCardInfoData.className = "card__info--data";
        divCardInfo.appendChild(divCardInfoData);

        let imgCardInfoData = document.createElement('img');
        imgCardInfoData.className = "data__img";
        imgCardInfoData.src = data.users[key].icon;
        imgCardInfoData.alt=data.users[key].name;
        imgCardInfoData.height=50;
        divCardInfoData.appendChild(imgCardInfoData);

        let divUserInfo = document.createElement('div');
        divUserInfo.className = "user__info";
        divCardInfoData.appendChild(divUserInfo);

        let pName = document.createElement('p');
        pName.innerHTML = 'Name: ';
        divUserInfo.appendChild(pName);

        let bName = document.createElement('b');
        bName.innerHTML = data.users[key].name;
        pName.appendChild(bName);

        let pAge = document.createElement('p');
        pAge.innerHTML = 'Age: ';
        divUserInfo.appendChild(pAge);

        let bAge = document.createElement('b');
        bAge.innerHTML = data.users[key].age;
        pAge.appendChild(bAge);

        let divCardInfoRole = document.createElement('div');
        divCardInfoRole.className = "card__info--role";
        divCardInfo.appendChild(divCardInfoRole);

        let imgCardInfoRole = document.createElement('img');

        if ( (data.users[key].position) === 'student'){
            imgCardInfoRole.src = data.roles.student;
            imgCardInfoRole.alt= data.users[key].position;
        } else if ( (data.users[key].position) === 'moderator'){
            imgCardInfoRole.src = data.roles.moderator;
            imgCardInfoRole.alt= data.users[key].position;
        }
        else if ( (data.users[key].position) === 'admin'){
            imgCardInfoRole.src = data.roles.admin;
            imgCardInfoRole.alt= data.users[key].position;
        }

        divCardInfoRole.appendChild(imgCardInfoRole);

        let spanCardInfoRole = document.createElement('span');
        spanCardInfoRole.innerHTML = data.users[key].position;
        divCardInfoRole.appendChild(spanCardInfoRole);

        let divCardCourses = document.createElement('div');
        divCardCourses.className = "card__courses";
        divCard.appendChild(divCardCourses);

        let courses = data.users[key].courses;

        for (let keyCourses in courses){
            let pExcellent = document.createElement('p');

            pExcellent.innerHTML = courses[keyCourses].name;
            divCardCourses.appendChild(pExcellent);

            let spanExcellent = document.createElement('span');

            pExcellent.appendChild(spanExcellent);

            if ((courses[keyCourses].rating) <=  (data.rating.Satisfactory)){
                console.log(courses[keyCourses].rating);
                pExcellent.className = "card__courses--course satisfactory";
                spanExcellent.innerHTML = 'Satisfactory';
            } else if ((courses[keyCourses].rating) > (data.rating.Satisfactory) && (courses[keyCourses].rating) <= (data.rating.Good) ){
                pExcellent.className = "card__courses--course good";
                spanExcellent.innerHTML = 'Good';
            } else if ((courses[keyCourses].rating) > (data.rating.Good) && (courses[keyCourses].rating) <= (data.rating['Very Good'])){
                pExcellent.className = "card__courses--course verygood";
                spanExcellent.innerHTML = 'Very Good';
            } else if ((courses[keyCourses].rating) > (data.rating['Very Good']) && (courses[keyCourses].rating) <=  (data.rating.Excellent)){
                //console.log(data.rating.Excellent);
                pExcellent.className = "card__courses--course excellent";
                spanExcellent.innerHTML = 'Excellent';
            }
        }
        document.body.append(divCard);
    }
};


//  DZ 17 делал Макс

/*
let requestUrl ='./users.json',
    xhr= new XMLHttpRequest();
xhr.open('GET',requestUrl);
xhr.responseType='json';

xhr.onload=()=>{
    if(xhr.status>=400){
        console.error(xhr.response)

    }
    else {
        console.log(xhr.response);
        let data = xhr.response.users,
            rating=xhr.response.rating,
            roles=xhr.response.roles;
        // console.log(roles);
        data.forEach((item) => {
            let satisfactory=item.courses;

            let cartDiv=document.createElement('div'),

                card__infoDiv=document.createElement('div'),
                card__info_dataDiv=document.createElement('div'),
                card__info_dataImg=document.createElement('img'),
                user__infoDiv=document.createElement('div'),
                user__info_div_p1=document.createElement('p'),
                user__info_div_p2=document.createElement('p'),
                card__info_roleDiv=document.createElement('div'),
                card__info_role_div_img=document.createElement('img'),
                card__info_role_div_span=document.createElement('span'),
                card__coursesDiv=document.createElement('div'),
                front_end_basic_p=document.createElement('p'),
                java_p=document.createElement('p'),
                UI_UX_p=document.createElement('p'),
                OOP_p=document.createElement('p');


            cartDiv.classList.add('card');
            card__infoDiv.classList.add('card__info');
            card__info_dataDiv.classList.add('card__info--data');
            card__info_dataImg.classList.add('data__img');

            card__info_roleDiv.classList.add('card__info--role');
            card__coursesDiv.classList.add('card__courses');
            front_end_basic_p.classList.add('card__courses--course');
            // front_end_basic_p.classList.add(classValue);
            java_p.classList.add('card__courses--course');
            UI_UX_p.classList.add('card__courses--course');
            OOP_p.classList.add('card__courses--course');

            /!*innerHTML etc*!/
            card__info_dataImg.innerHTML=item.icon;
            user__info_div_p1.innerHTML=`Name: <b>${item.name}</b>`;
            user__info_div_p2.innerHTML=`Age: <b>${item.age}</b>`;
            if(item.position==='admin')card__info_role_div_img.src=roles.admin;
            if(item.position==='student')card__info_role_div_img.src=roles.student;
            if(item.position==='moderator')card__info_role_div_img.src=roles.moderator;
            card__info_role_div_span.innerHTML=item.position;
            card__info_dataImg.src=item.icon;
            card__info_dataImg.height=50;

            document.body.append(cartDiv);
            cartDiv.appendChild(card__infoDiv);
            card__infoDiv.appendChild((card__info_dataDiv));
            card__info_dataDiv.appendChild(card__info_dataImg);
            card__info_dataDiv.appendChild(user__infoDiv);
            user__infoDiv.appendChild(user__info_div_p1);
            user__infoDiv.appendChild(user__info_div_p2);
            card__infoDiv.appendChild(card__info_roleDiv);
            card__info_roleDiv.appendChild(card__info_role_div_img);
            card__info_roleDiv.appendChild(card__info_role_div_span);
            if(satisfactory){
                cartDiv.appendChild(card__coursesDiv);
                card__coursesDiv.classList.add('card__courses');
                for(i=0;i<satisfactory.length;i++){
                    for (key in satisfactory[i]){
                        if (key==='name'){
                            universal_p=document.createElement('p');
                            universal_span=document.createElement('span');
                            card__coursesDiv.appendChild(universal_p);
                            universal_p.classList.add('card__courses--course');
                            universal_p.innerHTML=`${satisfactory[i][key]}: `;
                        }
                        if (key==='rating'){
                            if(satisfactory[i][key]<15){
                                universal_p.classList.add('satisfactory');
                                universal_p.appendChild(universal_span);
                                universal_span.innerHTML=' Satisfactory'
                            }
                        }
                        if (key==='rating'){
                            if(satisfactory[i][key]>=15 && satisfactory[i][key]<30){
                                universal_p.classList.add('good');
                                universal_p.appendChild(universal_span);
                                universal_span.innerHTML=' Good'
                            }
                        }
                        if (key==='rating'){
                            if(satisfactory[i][key]<80 && satisfactory[i][key]>=30){
                                universal_p.classList.add('verygood');
                                universal_p.appendChild(universal_span);
                                universal_span.innerHTML=' Very good'
                            }
                        }
                        if (key==='rating'){
                            if(satisfactory[i][key]>=80){
                                universal_p.classList.add('excellent');
                                universal_p.appendChild(universal_span);
                                universal_span.innerHTML=' Excellent'
                            }
                        }

                    }

                }
            }
        })
    }
};

xhr.onerror=()=>{
    console.log(xhr.response)
};
xhr.send();*/
