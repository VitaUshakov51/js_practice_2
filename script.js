//### 1. Каталог товаров
const products = [
    {
        name: 'Шоколад Milka',
        price: 95,
        category: 'Сладости',
    },
    {
        name: 'Печенье Юбилейное',
        price: 75,
        category: 'Сладости',
    },
    {
        name: 'Йогурт клубничный',
        price: 55,
        category: 'Молочные продукты',
    },
    {
        name: 'Макароны',
        price: 90,
        category: 'Бакалея',
    },
    {
        name: 'Хлеб Белый',
        price: 55,
        category: 'Выпечка',
    },
    {
        name: 'Хлеб Черный',
        price: 50,
        category: 'Выпечка',
    },
]

const getTotalPriceByCategory = (category) => {
    const filterArr = products.filter(product => product.category === category)
    if (filterArr.length !== 0) {
        const result = filterArr.reduce((sum, product) => sum + product.price, 0)
        return `Общая стоимость товаров в категории "${category}" = ${result} рублей`;
    } else {
        return `Категории "${category}" - Нет в списке`
    }
};

// console.log(getTotalPriceByCategory('Сладости'));
// console.log(getTotalPriceByCategory('Выпечка'));
// console.log(getTotalPriceByCategory('Молочные продукты'));
// console.log(getTotalPriceByCategory('Бакалея'));
// console.log(getTotalPriceByCategory('Чай и Кофе'));


//#2 Список пользователей
const userList = [
    {
        id: 0,
        name: 'Виталий',
        email: 'v@1.ru'
    },
    {
        id: 1,
        name: 'Анна',
        email: 'а@1.ru'
    },
    {
        id: 2,
        name: 'Федор',
        email: 'f@1.ru'
    },
    {
        id: 3,
        name: 'Мария',
        email: 'm@1.ru'
    },
]

const findUserById = (users, id) => {
    const userId = users.find(user => user.id === id)
    return userId ? userId : null;
}

// console.log(findUserById(userList, 0));
// console.log(findUserById(userList, 1));
// console.log(findUserById(userList, 3));

//№3 Библиотека книг
const books = [
    {
        title: 'Разум чемпионов',
        author: 'Джим Афремов',
        genres: ['Психология', 'Спортивная психология'],
        isRead: false
    },
    {
        title: 'S.T.A.L.K.E.R - Полураспад',
        author: 'Александр Зорич',
        genres: ['Фантастика', 'Русское'],
        isRead: false
    },
    {
        title: 'Звездные войны - Эпизод 3',
        author: 'Джордж Лукас',
        genres: ['Фантастика', 'Зарубежное'],
        isRead: false
    },
    {
        title: 'Мануэль Нойер',
        author: 'Какой-то немец',
        genres: ['Автобиография', 'Психология', 'Спортивная психология'],
        isRead: false
    },
]

const getBooksByGenre = (genre) => {
    const bookByGenre = books.filter(book => {
        for (const element of book.genres) {
            if (element === genre) {
                return book
            }
        }
    })
    console.log(`Все из категории - ${genre}`);
    return bookByGenre;
}

// console.log(getBooksByGenre('Фантастика'));
// console.log(getBooksByGenre('Зарубежное'));
// console.log(getBooksByGenre('Автобиография'));
// console.log(getBooksByGenre('Психология'));
// console.log(getBooksByGenre('Русское'));
// console.log(getBooksByGenre('Зарубежное'));


//4 Поиск в дереве категорий
// Напиши функцию `findCategory(name, tree)`, которая:
// - Принимает название категории и дерево
// - Ищет нужную категорию **рекурсивно**
// - Возвращает объект категории, если найден, иначе `null`
// Для решения следует применить рекурсию

const categories = {
    name: "Electronics",
    subcategories: [
        {
            name: "Phones",
            subcategories: [
                { name: "Smartphones", subcategories: [] },
                { name: "Feature Phones", subcategories: [] }
            ]
        },
        {
            name: "Computers",
            subcategories: [
                { name: "Laptops", subcategories: [] },
                {
                    name: "Desktops",
                    subcategories: [
                        {
                            name: 'BigComp', subcategories: []
                        },
                    ]
                }
            ]
        },
    ]
}


const findCategory = (string, obj) => {
    if (obj.name !== string) {
        obj.subcategories.forEach(element => {
            if (element.name === string) {
                console.log(element);
            } else {
                findCategory(string, element)
            }
        });
    } else {
        console.log(obj);
    }
}

const findCategoryTwo = (string, obj) => {
    if (obj.name !== string) {
        const result = obj.subcategories.find(element => {
            if (element.name === string) {
                return element
            } else {
                return findCategory2(string, element)
            }
        })
        return result
    } else {
        return obj
    }
}

// findCategory('Smartphones', categories)
// findCategory('Desktops', categories)
// console.log(findCategory2('Desktops', categories));
// console.log(findCategory2('BigComp', categories));


//#5 Копирование объекта
const original = {
    name: "Alice",
    settings: {
        theme: "dark",
        languages: ["en", "ru"]
    }
};

const deepClone = (obj) => {
    const newObj = { ...obj }
    return newObj
}
// console.log(deepClone(original));







//№9 Преобразовать массив в объект
const array = [
    { name: 'width', value: 123 },
    { name: 'height', value: 222 }
];

const newObject = (arr) => {
    const result = {}
    arr.forEach(element => {
        result[element.name] = element.value
    });
    return result
}

// console.log(newObject(array));




// 10 Подсчёт количества товаров по категориям
const productsList = [
    { name: "Phone", category: "Electronics" },
    { name: "TV", category: "Electronics" },
    { name: "Jeans", category: "Clothing" },
    { name: "T-shirt", category: "Clothing" },
    { name: "Blender", category: "Home" }
];

const countByCategory = (array) => {
    const obj = {
        Electronics: 0,
        Clothing: 0,
        Home: 0
    }
    array.forEach(element => {
        if (element.category === 'Electronics') {
            obj.Electronics++
        } else if (element.category === 'Clothing') {
            obj.Clothing++
        } else {
            obj.Home++
        }
    });
    return obj
}
// console.log(countByCategory(productsList));

//№11 Сумма всех значений объекта
const salaries = {
    Alice: 500,
    Bob: 700,
    Charlie: 300
};


const getTotalSalary = (obj) => {
    let result = 0
    for (const key in obj) {
        result += obj[key]
    }
    return `Cумма всех значений = ${result}`
}

// console.log(getTotalSalary(salaries));




// 15 Задача с литкода
// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]

// const n1 = 10
// const calls1 = ["call", "call", "call"];
// const n2 = -2
// const calls2 = ["call", "call", "call","call", "call","call"];

// const createCounter = (num, arr) => {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(num++)
//     }
//     console.log(newArr);
// }

// createCounter(n1, calls1);
// createCounter(n2, calls2);

