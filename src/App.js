import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";

import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";


function App() {
  return (
      <>
        <div className={"App"}>
      <h1>Handbags & Purses</h1>
          <nav>
            <Button onClick={() => console.log("to the collection")}>
                to the collection
            </Button>
            <Button onClick={() => console.log("shop all bags")}>
                shop all bags
            </Button>
            <Button disabled={true} onClick={() => console.log("pre-orders")}>
                pre-orders
            </Button>
          </nav>
        </div>

          <main>
              <Product
                  span={"Best seller"}
                  img={bag_1} title={"The handy bag"}
                  price={"400"}

              />

              <Product
                  span={"Best seller"}
                  img={bag_2} title={"The stylish bag"}
                  price={"250"}

              />
              <Product
                  span={"New collection"}
                  img={bag_3} title={"The simple bag"}
                  price={"300"}

              />
              <Product
                  span={"New collection"}
                  img={bag_4} title={"The trendy bag"}
                  price={"150"}

              />

          </main>

          <footer>
              <Tile
                title={"THE BRAND"}
                text1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi incidunt nesciunt nisi omnis perspiciatis quia quidem sed, suscipit voluptates!"}
                text2={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi incidunt nesciunt nisi omnis perspiciatis quia quidem sed, suscipit voluptates!"}
                img={""}
              />

              <Tile
                title={""}
                text1={""}
                img={brand}
              />
              <Tile
                title={""}
                text1={""}
                img={our_story}
              />
              <Tile
                  title={"OUR STORY"}
                  text1={"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aperiam aspernatur at dolorem dolores eius fugit iure labore laborum libero, minima nesciunt numquam praesentium quasi quos reiciendis repudiandae veniam voluptate."}
                  text2={""}
                  img={""}
              />

          </footer>

      </>
  );
}

export default App;





