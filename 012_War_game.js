
let p1Cards = [];
let p2Cards = []; 
const cardsOrder = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

//utils
const cardValue = (card) => ((card[0] == '1')? card[0]+card[1] : card[0])

const GreatherThan = (c1,c2) => (cardsOrder.indexOf(cardValue(c1)) > cardsOrder.indexOf(cardValue(c2)))

const bothWithCards = (p1Cards, p2Cards) => ( p1Cards.length > 0 && p2Cards.length > 0)

const showCards = (p1Cards, p2Cards) => {
    const p1Card = p1Cards.shift();
    const p2Card = p2Cards.shift();
    return [p1Card, p2Card];
}

const reserveCards = (p1Card, p2Card, r1, r2) => {
    r1.push(p1Card)
    r2.push(p2Card)

}

const addReward = (playerCards, reward) => (
    [...playerCards, ...reward]
)
const addReserved = (playerCards, r1,r2) => (
    [...playerCards, ...r1, ...r2]
)
const showWinner = ( p1Cards ) => (
    //precondition: game finished
    (p1Cards.length > 0)? '1':'2'
)

const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const cardp1 = readline(); // the n cards of player 1
    p1Cards.push(cardp1)
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    const cardp2 = readline(); // the m cards of player 2
    p2Cards.push(cardp2)
}



//debug
console.error(cardValue("10S"))
console.error(cardValue("JS"))
console.error(cardValue("9S"))

console.error('3 > 2', GreatherThan('3','2'))
console.error('10 > 2', GreatherThan('10','2'))
console.error('10 > A', GreatherThan('10','A'))
console.error( p1Cards.map(card => cardValue(card)))
console.error( bothWithCards([],[]))
console.error( bothWithCards(["10S"],[]))
console.error( bothWithCards([],["10S"]))
console.error( bothWithCards(["8D"],["10S"]))
console.error(p1Cards, p2Cards)
let p1CardsT = [...p1Cards]
let p2CardsT = [...p2Cards]
const reward = showCards(p1CardsT,p2CardsT) //! it changes the arrays
console.error(reward)
console.error(p1CardsT,p2CardsT)
p1CardsT = addReward(p1CardsT,reward)
console.error(p1CardsT,p2CardsT)
console.error(p1Cards,p2Cards)

//play
let gameRound = 0
let outOfCarsInWar = false

let r1 = [] //reward from p1
let r2 = [] //reward from p2

while(bothWithCards(p1Cards, p2Cards)) {
    
    const [p1Card, p2Card] = showCards(p1Cards, p2Cards)
    reserveCards(p1Card,p2Card, r1,r2)
    if (GreatherThan(p1Card, p2Card)) {
        gameRound++
        p1Cards = addReserved(p1Cards, r1, r2)
        r1 = []
        r2 = []
    } else if (GreatherThan(p2Card, p1Card)) {
        gameRound++
        p2Cards = addReserved(p2Cards, r1, r2)
        r1 = []
        r2 = []        
    } else { //DRAW
        console.error('Draw',p1Card,p2Card,p1Cards,p2Cards,r1,r2)
        //add to the reserve the 2 draw cards
        //reserveCards(p1Card,p2Card, r1,r2) ???? I excluded that but I think was ok.

        //reserve 3 cards from both players, pay attention to a player out of cards
        for (let i = 0; i<3; i++){
            const [p1Card, p2Card] = showCards(p1Cards, p2Cards)
            reserveCards(p1Card,p2Card, r1,r2)
            if (!bothWithCards(p1Cards, p2Cards)){
                console.error('A player runs out of cards in the middle of a war')
                outOfCarsInWar = true
                break;
            }
        }
        

    }
    console.error(`round:${gameRound}`, p1Cards.length, p2Cards.length)
}

if (outOfCarsInWar) {
    console.log('PAT');
} else {
    console.log(`${showWinner(p1Cards)} ${gameRound}`)
}


