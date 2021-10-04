import Chance from "chance";

const chance = new Chance();

const dummy = {
    //user hash
    id : 1,
    password : 1234,
    userName : "jonadan",
    hasStock : [
        {
            stockName : "samsung",
            stockCount : "5",
            describe : "",
            price : chance.integer({min : 100, max : 1000}),
            memo : [
                {
                    time : "2021-08-24",
                    text : chance.sentence({ words: 5 }),
                    stock : "samsung"
                },
                {
                    time : "2021-08-24",
                    text : chance.sentence({ words: 5 }),
                    stock : "samsung"
                },
                {
                    time : "2021-08-24",
                    text : chance.sentence({ words: 5 }),
                    stock : "samsung"
                },
                {
                    time : "2021-08-24",
                    text : chance.sentence({ words: 5 }),
                    stock : "samsung"
                },
                {
                    time : "2021-08-24",
                    text : chance.sentence({ words: 5 }),
                    stock : "samsung"
                },
                {
                    time : "2021-08-24",
                    text : chance.sentence({ words: 5 }),
                    stock : "samsung"
                },
                {
                    time : "2021-08-24",
                    text : chance.sentence({ words: 5 }),
                    stock : "samsung"
                },
                {
                    time : "2021-08-24",
                    text : chance.sentence({ words: 5 }),
                    stock : "samsung"
                },
            ]
        },
        {
            stockName : "amazon",
            stockCount : "6",
            describe : "",
            price : chance.integer({min : 100, max : 1000}),
            memo : [
                {
                    time : "2021-08-26",
                    text : chance.sentence({ words: 5 }),
                    stock : "amazon",
                },
                {
                    time : "2021-08-26",
                    text : chance.sentence({ words: 5 }),
                    stock : "amazon",
                },
                {
                    time : "2021-08-26",
                    text : chance.sentence({ words: 5 }),
                    stock : "amazon",
                },
                {
                    time : "2021-08-26",
                    text : chance.sentence({ words: 5 }),
                    stock : "amazon",
                },
                {
                    time : "2021-08-26",
                    text : chance.sentence({ words: 5 }),
                    stock : "amazon",
                },
            ]
        },
        {
            stockName : "apple",
            stockCount : "7",
            describe : "",
            price : chance.integer({min : 100, max : 1000}),
            memo : [
                {
                    time : "2021-08-27",
                    text : chance.sentence({ words: 5 }),
                    stock : "apple",
                },
                {
                    time : "2021-08-27",
                    text : chance.sentence({ words: 5 }),
                    stock : "apple",
                },
                {
                    time : "2021-08-27",
                    text : chance.sentence({ words: 5 }),
                    stock : "apple",
                },
                {
                    time : "2021-08-27",
                    text : chance.sentence({ words: 5 }),
                    stock : "apple",
                },
                {
                    time : "2021-08-27",
                    text : chance.sentence({ words: 5 }),
                    stock : "apple",
                },
            ]
        },
        {
            stockName : "naver",
            stockCount : "8",
            describe : "",
            price : chance.integer({min : 100, max : 1000}),
            memo : [
                {
                    time : "2021-08-28",
                    text : chance.sentence({ words: 5 }),
                    stock : "naver",
                },
                {
                    time : "2021-08-28",
                    text : chance.sentence({ words: 5 }),
                    stock : "naver",
                },
                {
                    time : "2021-08-28",
                    text : chance.sentence({ words: 5 }),
                    stock : "naver",
                },
                {
                    time : "2021-08-28",
                    text : chance.sentence({ words: 5 }),
                    stock : "naver",
                },
                {
                    time : "2021-08-28",
                    text : chance.sentence({ words: 5 }),
                    stock : "naver",
                },
            ]
        },
        {
            stockName : "kakao",
            stockCount : "9",
            describe : "",
            price : chance.integer({min : 100, max : 1000}),
            memo : [
                {
                    time : "2021-08-29",
                    text : chance.sentence({ words: 5 }),
                    stock : "kakao",
                },
                {
                    time : "2021-08-29",
                    text : chance.sentence({ words: 5 }),
                    stock : "kakao",
                },
                {
                    time : "2021-08-29",
                    text : chance.sentence({ words: 5 }),
                    stock : "kakao",
                },
                {
                    time : "2021-08-29",
                    text : chance.sentence({ words: 5 }),
                    stock : "kakao",
                },
                {
                    time : "2021-08-29",
                    text : chance.sentence({ words: 5 }),
                    stock : "kakao",
                },
            ]
        },
    ],
}

export default dummy