[
    {
        "id":"1",
        "name": "fido",
        "image":"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        "age": "2",
        "description":"muy tranquilofido. Es un perro muy grande pero re cariñoso",
        "size": "grande",
        "animal": "perro",
        "healthBook":"true",
        "userID":"1",
        "sex": "femenino",
        "province": "BuenosAires",
        "location": "SanFernando",
        "date": ""
    },
    {
        "id":2,
        "name": "bugs bunny",
        "image":"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        "age": "11",
        "description":"re divertido",
        "size": "chico",
        "animal": "conejo",
        "healthBook": "false",
        "userID":"2",
        "sex": "masculino",
        "province": "Cordoba",
        "location": "Villa Warcalde",
        "date": ""
    },
    {
        "id":3,
        "name": "manuelita",
        "image":"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        "age": "20",
        "description":"como come!! lenta la pobre pero se la aguanta",
        "size": "chico",
        "animal": "conejo",
        "healthBook": "false",
        "userID":"2",
        "sex": "masculino",
        "province": "Mendoza",
        "location": "La Cieneguita",
        "date": ""
    },
    {
        "id":4,
        "name": "pepito",
        "image":"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        "age": 8,
        "description":"el mejor amigo del solitario",
        "size": "chico",
        "animal": "loro",
        "healthBook": "false",
        "userID":"2",
        "sex": "femenino",
        "province": "San Luis",
        "location": "Cerro de la Cruz",
    }
]
const ejemplos = [
    {
        id:1,
        name: "fido",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 2,
        description:"muy tranquilofido. Es un perro muy grande pero re cariñoso",
        size: "grande",
        animal: "perro",
        healthBook:true,
        UserId:1,
        sex: "femenino",
        province: "BuenosAires",
        location: "SanFernando",
        date: ""
    },
    {
        id:2,
        name: "bugs bunny",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 11,
        description:"re divertido",
        size: "chico",
        animal: "conejo",
        healthBook: false,
        UserId:2,
        sex: "masculino",
        province: "Cordoba",
        location: "Villa Warcalde",
        date: ""
    },
    {
        id:3,
        name: "manuelita",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 20,
        description:"como come!! lenta la pobre pero se la aguanta",
        size: "chico",
        animal: "conejo",
        healthBook: false,
        UserId:1,
        sex: "masculino",
        province: "Mendoza",
        location: "La Cieneguita",
        date: ""
    },
    {
        id:4,
        name: "pepito",
        image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
        age: 8,
        description:"el mejor amigo del solitario",
        size: "chico",
        animal: "loro",
        healthBook: false,
        UserId:2,
        sex: "femenino",
        province: "San Luis",
        location: "Cerro de la Cruz",
    }
]

//PET JS
const pet1 = [{
    name: "bugs bunny",
    image:"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
    age: 11,
    description:"re divertido",
    size: "chico",
    animal: "conejo",
    healthBook: false,
    sex: "masculino",
    province: "Cordoba",
    location: "Villa Warcalde",
    sex : "femenino"

}]
//USUARIO MODELO INSOMNIA
{
    "name":"lucas",
    "image":"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    "email":"pepe@gmail.com",
    "password": "12343",
    "rol": "administrador",
    "logged":"true"
    }

//PETS MODELO INSOMNIA
{
    "name": "leopoldo",
    "image":"https//i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
    "age": "2",
    "description":"muy tranquilofido. Es un perro muy grande pero re cariñoso",
    "size": "grande",
    "animal": "perro",
    "healthBook":"true",
    "province": "BuenosAires",
    "location": "SanFernando",
    "active":"false",
    "sex": "femenino",
    "idUser":"1"
}
//SQU

INSERT INTO "Users" (  name, image, email, password)
VALUES
('Harry', null, "harry@gmail.com", "harr54321" ),
('Chris', null, "chris@gmail.com", "chris87654" ),
('Tom', null, "tom@gmail.com", "tomm65432" );