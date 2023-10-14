import React, { useEffect, useState } from "react";
import HeadAndDesc from "../components/HeadAndDesc";
import Menu from "../components/Menu";
import MenuPosition from "../components/MenuPosition";

function MenuPage() {
  const [category, setCategory] = useState(0);

  const pizzas = [
    {
      key: '0',
      name: "Margerita",
      ingredients: "oregano/bazylia/ser",
      priceSmall: "28,00 zł",
      priceBig: "32,00 zł",
    },
    {
      key: '1',
      name: "Margeriata",
      ingredients: "oregano/bazylia/ser",
      priceSmall: "28,00 zł",
      priceBig: "32,00 zł",
    },
  ];
  const fastFoods = [
    {
      key: '0',
      name: "RetroFrytka",
      ingredients: "oregano/bazylia/ser",
      priceBig: "32,00 zł",
    },
    {
      key: '1',
      name: "Kapsalon",
      ingredients: "oregano/bazylia/ser",
      priceBig: "32,00 zł",
    },
  ];

  const liquids = [
    {
        key: '0',
        name: "Pepsi/Mirinda/7UP",
        ingredients: "500ml",
        priceBig: "7,00 zł"
    },
    {
        key: '1',
        name: "Woda mineralna",
        ingredients: "500ml",
        priceBig: "4,00 zł"
    }
  ]
  useEffect(() => {
    document.getElementsByClassName("switch")[category].classList.add("active");
  }, [category]);

  const changeCategory = (param) => {
    setCategory(param);
    const table = document.getElementsByClassName("switch");
    for (let index = 0; index < table.length; index++) {
      if (index === param) table[index].classList.add("active");
      else table[index].classList.remove("active");
    }
  };

  return (
    <>
      <Menu />
      <div className="addict menu">
        <HeadAndDesc title="Menu" desc="Gotowy/a do złożenia zamówienia?" />
        <div className="switch-holder">
          <div
            className={`switch ${category === 0 ? "active" : ""}`}
            onClick={() => changeCategory(0)}
          >
            <p>Pizza</p>
          </div>
          <div
            className={`switch ${category === 1 ? "active" : ""}`}
            onClick={() => changeCategory(1)}
          >
            <p>Fast food</p>
          </div>
          <div
            className={`switch ${category === 2 ? "active" : ""}`}
            onClick={() => changeCategory(2)}
          >
            <p>Napoje</p>
          </div>
        </div>
        <div className="pizza-holder">
          {category === 0
            ? pizzas.map((e) => (
                <MenuPosition
                  name={e.name}
                  ingredients={e.ingredients}
                  priceSmall={e.priceSmall}
                  priceBig={e.priceBig}
                  key={e.key}
                  isPizza={true}
                />
              ))
            : null}

          {category === 1
            ? fastFoods.map((e) => (
                <MenuPosition
                  name={e.name}
                  ingredients={e.ingredients}
                  priceBig={e.priceBig} key={e.key}
                />
              ))
            : null}
            {category === 2
            ? liquids.map((e) => (
              <MenuPosition 
                name={e.name}
                ingredients={e.ingredients}
                priceBig={e.priceBig}
                key={e.key}
              />
            )) :null}

        </div>
      </div>
    </>
  );
}

export default MenuPage;
