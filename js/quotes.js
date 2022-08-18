const quotes = [
    {
        quote: "방을 정리하라. 방은 당신의 머릿속의 혼란한 정도를 보여준다.",
        author: "조던 피터슨"
    },
    {
        quote: "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
        author: "랄프 왈도 에머슨"
    },
    {
        quote: "인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
        author: "나카무라 미츠루"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
