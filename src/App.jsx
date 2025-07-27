import "./App.css";

function App() {
  const name = "Максим";
  const welcomeText = "Ласкаво просимо до нашого сайту!";
  const image = {
    src: "https://www.svgviewer.dev/static-svgs/480770/react.svg",
    alt: "React logo",
  };
  const favSite = {
    title: "ULTRAKILL Speedrun",
    url: "https://www.speedrun.com/ru-RU/ultrakill",
  };
  const number1 = 10;
  const number2 = 5;
  const sum = number1 + number2;
  const colors = [
    ["Червоний", "red"],
    ["Синій", "blue"],
    ["Зелений", "green"],
  ];

  return (
    <div>
      <h1>{name}</h1>
      <p>{welcomeText}</p>
      <img src={image.src} className="logo" alt={image.alt} />
      <p>
        Улюблений сайт:{" "}
        <a href={favSite.url} target="_blank" rel="noopener noreferrer">
          {favSite.title}
        </a>
      </p>
      <p>
        Сума: {number1} + {number2} = {sum}
      </p>
      <ul>
        {colors.map((el, index) => (
          <li key={index} style={{ color: el[1] }}>
            {el[0]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
