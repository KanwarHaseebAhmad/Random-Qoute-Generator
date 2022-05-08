var quotes=[
    {
        quote: "Verily, thy lord is ample in Forgivness.",
        source: "Allah",
        surah: "An-Najm",
        ayat: "32"
    },
  {
        quote: "Allah is with those who patiently persevere."
        source: "Allah",
        surah: "Al-Baqarah",
        ayat: "153"
    },
    {
        quote: "Allah Will create ease after hardship.",
        source: "Allah",
        surah: "At-Talaq",
        ayat: "7"
    },
    {
        quote: "No disaster strikes except by permission of Allah.",
        source: "Allah",
        surah: "At-Taghabun",
        ayat: "11"
    },
    {
        quote: "Wheresoever Ye are, Allah will bring you together.",
        source: "Allah",
        surah: "Al Baqarah",
        ayat: "148"
    },
    {
        quote: "and turn to us in grace. You are truly the Accepter of Repentance, Most Merciful.",
        source: "Allah",
        surah: "Al Baqarah",
        ayat: "128"
    },
    {
        quote: "for Allah (ever) watches over His Servants.",
        source: "Allah",
        surah: "Ghafir",
        ayat: "44"
    },
    {
        quote: "So let not their speech grieve you.",
        source: "Allah",
        surah: "Ya Seen",
        ayat: "76"
    },
    {
        quote: "but the evil plot does not encompass except its own people",
        source: "Allah",
        surah: "Fatir",
        ayat: "43"
    },
]
function getRandomquote() {
    var random = Math.floor(Math.random() * quotes.length);
    var randomquote = quotes[random];
    return randomquote;
}
function printquote() {
    var quotes = getRandomquote();
    var quoteContainer = document.getElementById("quote-box");
    var quoteString = `<p class="quote">${quotes.quote}</p>
    <p class="source">${quotes.source} <span class="surah">${quotes.surah}</span><span class="ayat">${quotes.ayat}</span></p>`
    quoteContainer.innerHTML = quoteString;
}
document.getElementById('loadQuote').addEventListener('click', printquote, false);
