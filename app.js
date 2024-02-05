console.log("Froggy is the best! 🐸🤘");

const Application = PIXI.Application;
const Graphics = PIXI.Graphics;

const app = new Application({
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: false,
});

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const style = {
  fontSize: 48,
  fill: "green",
  stroke: "#ffffff",
  strokeThickness: 3,
  dropShadow: true,
  dropShadowDistance: 10,
  dropShadowAngle: Math.PI / 2,
  dropShadowBlue: 4,
  sropShadowColor: "0x000000",
};
const title = new PIXI.Text("Frog Crossing!", style);
app.stage.addChild(title);

const frog = PIXI.Sprite.from("/images/frog.png");

frog.x = app.screen.width / 2;
frog.y = app.screen.height / 2;
frog.anchor.set(0.5, 0.5);
frog.scale.set(0.5, 0.5);

app.stage.addChild(frog);

frog.interactive = true;
frog.buttonMode = true;
frog.on("pointerdown", () => {
  frog.scale.x += 0.1;
  frog.scale.y += 0.1;
});

app.ticker.add((delta) => main_loop(delta));
document.addEventListener("keydown", keyboard_listener);

function main_loop(delta) {
  if (Math.random() < 0.8) return;

  const rect = new Graphics();
  rect
    .beginFill(0xffffff)
    .drawRect(
      Math.random() * app.screen.width,
      Math.random() * app.screen.height,
      5,
      5
    )
    .endFill();

  app.stage.addChild(rect);
}

// e is the keydown event sent to our listener
function keyboard_listener(e) {
  if (e.key === "ArrowRight") {
    frog.x += 10;
  }
  if (e.key === "ArrowLeft") {
    frog.x -= 10;
  }
  if (e.key === "ArrowUp") {
    frog.y -= 10;
  }
  if (e.key === "ArrowDown") {
    frog.y += 10;
  }
}
