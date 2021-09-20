var Quotes = [
    {author: 'Oscar Wilde', 
     quote: 'Be yourself; everyone else is already taken..'
    },
    {author: 'Marilyn Monroe', 
     quote: 'I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.'
    },
    {author: 'Albert Einstein', 
     quote: 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
    },
    {author: 'Frank Zappa', 
     quote: 'So many books, so little time.'
    },
    {author: 'Marcus Tullius Cicero', 
     quote: 'A room without books is like a body without a soul.'
    },
    {author: 'Bernard M. Baruch', 
     quote: 'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.'
    },
    {author: 'Robert Frost', 
    quote: 'In three words I can sum up everything I have learned about life: it goes on.'
   }
];

function generateQuote(){
    var randomNumber = Math.floor(Math.random()*Quotes.length + 1);
    document.getElementById('quote').innerHTML = [Quotes[randomNumber].quote];
    document.getElementById('author').innerHTML = [Quotes[randomNumber].author];
    
}
