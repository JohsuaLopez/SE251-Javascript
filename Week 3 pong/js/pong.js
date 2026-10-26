// Canvas and context
let c = document.querySelector(`#pong`)
let ctx = c.getContext(`2d`)

// Timer to make the game run at 60fps
let timer = setInterval(main, 1000/60)

// Global friction variable
let fy = .97

// Create an empty array to hold the players
let players = [];

// Create Player 1 at index 0
players[0] = new Player("Player 1", new Box());

// Create Player 2 at index 1
players[1] = new Player("Player 2", new Box());

let pads = [];

// Assign the pads of the players to the pads array
pads[0] = players[0].pad;
pads[1] = players[1].pad;

// Set the properties of the pads
pads[0].w = 20;
pads[0].h = 150;
pads[0].x = 0 + pads[0].w / 2;

pads[1].w = 20;
pads[1].h = 150;
pads[1].x = c.width - pads[1].w / 2;

console.log(players);

// Ball setup
let ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

const scoreDivs = document.querySelectorAll(`#score div`)


function main()
{
    // Erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    // p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       pads[0].vy += -pads[0].force
    }

    if(keys[`s`])
    {
        pads[0].vy += pads[0].force
    }
    if (keys["ArrowUp"]) {
        pads[1].vy -= pads[1].force;
    }

    if (keys["ArrowDown"]) {
        pads[1].vy += pads[1].force;
    }

    for (let i = 0; i < pads.length; i++) {
        pads[i].vy *= fy;
        pads[i].move();
    }
    

    // Ball movement
    ball.move()

    for (let i=0; i<pads.length; i++)
    {
        if (pads[i].y < pads[i].h / 2)
        {
            pads[i].y = pads[i].h / 2;
        }
        if (pads[i].y > c.height - pads[i].h / 2) {
            pads[i].y = c.height - pads[i].h / 2;
        }
    }
    // p1 collision
    if (pads[0].y < 0+pads[0].h/2)
    {
        pads[0].y = 0+pads[0].h/2
    }
    if (pads[0].y > c.height-pads[0].h/2)
    {
        pads[0].y = c.height-pads[0].h/2
    } 
    // p2 boundary collision
    if (pads[1].y < pads[1].h / 2) {
        pads[1].y = pads[1].h / 2;
    }

    if (pads[1].y > c.height - pads[1].h / 2) {
        pads[1].y = c.height - pads[1].h / 2;
    }

    // Ball collision 
    if (ball.x < 0)
    {
        players[1].score += 1;
        console.log(`${players[0].score} | ${players[1].score}`);
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if (ball.x > c.width)
    {
        players[0].score += 1;
        console.log(`${players[0].score} | ${players[1].score}`);
        ball.x = c.width / 2;
        ball.y = c.height / 2;
    }
    if (ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if (ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy       
    }

    // p1 with ball collision
    if (ball.collide(pads[0]))
    {
        ball.x = pads[0].x + pads[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    
    // p2 with ball collision
    if (ball.collide(pads[1]))
    {
        ball.x = pads[1].x - pads[1].w/2 - ball.w/2
        ball.vx = -Math.abs(ball.vx);
    }

    // Draw the objects
    pads[0].draw()
    ball.draw()
    pads[1].draw()

    for (let i=0; i < scoreDivs.length; i++)
    {
        scoreDivs[i].innerText = players[i].score
    }
}
