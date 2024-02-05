console.log("Froggy is the best! 🐸🤘");

const Application = PIXI.Application;

const app = new Application({
  width: window.innerWidth,
  height: window.innerHeight,
  transparent: false,
});

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rect = new Graphics();
rect.beginFill(0xaa3333);
rect.drawRect(500, 500, 50, 50);

app.stage.addChild(rect);
