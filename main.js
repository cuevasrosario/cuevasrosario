let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 80,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y escribo artículos sobre programación.')
  .pauseFor(250)
  .deleteChars(15)
  .start();