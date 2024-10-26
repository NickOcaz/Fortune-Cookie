document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new-quote').addEventListener('click', getQuote);

    const localQuotes = [

        "A beautiful, smart, and loving person will be coming into your life.",
        "A faithful friend is a strong defense.",
        "A fresh start will put you on your way.",
        "A friend asks only for your time not your money.",
        "A friend is a present you give yourself.",
        "A golden egg of opportunity falls into your lap this month.",
        "A good time to finish up old tasks.",
        "A lifetime of happiness lies ahead of you.",
        "A lifetime friend shall soon be made.",
        "A new perspective will come with the new year.",
        "A pleasant surprise is waiting for you.",
        "A short pencil is usually better than a long memory any day.",
        "A smooth long journey! Great expectations.",
        "A soft voice may be awfully persuasive.",
        "A stranger, is a friend you have not spoken to yet.",
        "Accept something that you cannot change, and you will feel better.",
        "Adventure can be real happiness.",
        "Advice is like kissing. It costs nothing and is a pleasant thing to do.",
        "All the effort you are making will ultimately pay off.",
        "All the troubles you have will pass away very quickly.",
        "All will go well with your new project.",
        "Allow compassion to guide your decisions.",
        "An acquaintance of the past will affect you in the near future.",
        "An agreeable romance might begin to take on the appearance.",
        "An important person will offer you support.",
        "An inch of time is an inch of gold.",
        "Any decision you have to make tomorrow is a good decision.",
        "At the touch of love, everyone becomes a poet.",
        "Be careful or you could fall for some tricks today.",
        "Beauty in its various forms appeals to you.",
        "Believe it can be done.",
        "Believe in yourself and others will too.",
        "Believe in yourself and you will succeed.",
        "Better ask twice than lose yourself once.",
        "Carve your name on your heart, and not on marble.",
        "Change is happening in your life, so go with the flow!",
        "Competence like yours is underrated.",
        "Conquer your fears or they will conquer you.",
        "Don’t just think, act!",
        "Don’t let friends impose on you. Work calmly and silently.",
        "Don’t let the past discourage you. The future is bright.",
        "Don’t worry; prosperity will knock on your door soon.",
        "Every flower blooms in its own sweet time.",
        "Every wise man started out by asking many questions.",
        "Everyday in your life is a special occasion.",
        "Failing to plan is planning to fail.",
        "Failure is the chance to do better next time.",
        "Focus on your long-term goal. Don’t hesitate to act now.",
        "Follow the middle path. Neither extreme will make you happy.",
        "For hate is never conquered by hate. Hate is conquered by love.",
        "Fortune favors the brave.",
        "Good news will be brought to you by mail.",
        "Good news will come to you by mail.",
        "Good to begin well, better to end well.",
        "Happiness begins with facing life with a smile and a wink.",
        "Happiness will bring you good luck.",
        "Happy life is just in front of you.",
        "Hard work pays off in the future. Laziness pays off now.",
        "Have a beautiful day.",
        "He who laughs at himself never runs out of things to laugh at.",
        "Hone your competitive instincts.",
        "If a true sense of value is to be yours, it must come through service.",
        "If certainty were truth, we would never be wrong.",
        "If you look in the right places, you can find some good offerings.",
        "If you love others, they will love you back.",
        "If you speak honestly, everyone will listen.",
        "If you want the rainbow, you have to tolerate the rain.",
        "If your desires are not extravagant, they will be granted.",
        "Impossible standards just make life difficult.",
        "In the end, all things will be known.",
        "It could be better, but it’s good enough.",
        "It’s impossible to please everybody. Please yourself first.",
        "It’s time to write a letter or email to one who is distant.",
        "It's your high talent that gets you through tough times.",
        "Keep your eye out for someone special.",
        "Let the deeds speak.",
        "Life is a dream. Realize it.",
        "Life is a series of choices. Today yours are good ones.",
        "Life is not measured by the breaths we take, but by the moments that take our breath away.",
        "Listen to everyone. Ideas come from everywhere.",
        "Living with a commitment to excellence shall take you far.",
        "Long life is in store for you.",
        "Love is a warm fire to keep the soul warm.",
        "Love lights up the world.",
        "Make a wise choice everyday.",
        "Make all you can, save all you can, give all you can.",
        "Nature, time and patience are the three great healers.",
        "Never fear! The end of something marks the start of something new.",
        "Nothing is so much to be feared as fear.",
        "Now is the time to try something new.",
        "Patience is a virtue, but don't waste your time.",
        "People find it difficult to resist your persuasive manner.",
        "People are naturally attracted to you.",
        "People see you as a friend.",
        "Practice makes perfect.",
        "Protect your spirit, for it is your unique treasure.",
        "Put your mind into planning today. Look into the future."
    ];

    function getQuote() {
        console.log('Button clicked!');
        const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        document.getElementById('quote').innerText = randomQuote;
    }
});

/*   one prediction per day
  function getQuote() {
        const today = new Date().toDateString();
        const lastPredictionDate = localStorage.getItem('lastPredictionDate');

        if (lastPredictionDate === today) {
            alert("You've already received your fortune for today. Come back tomorrow!");
            return;
        }

        const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        document.getElementById('quote').innerText = randomQuote;

        localStorage.setItem('lastPredictionDate', today);
    }
});

*/

function playMusic() {
    var music = new Audio('assets/sounds/click.mp3');
    music.play();
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = `${Math.random() * window.innerHeight}px`;
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    document.getElementById('sparkles-container').appendChild(sparkle);
    setTimeout(() => {
        sparkle.remove();
    }, 5000);
}

setInterval(createSparkle, 1000);