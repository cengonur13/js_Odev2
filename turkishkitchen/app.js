const menu = [
  {
    id: 1,
    title: "Adana Kebap",
    category: "Et_Yemekleri",
    price: 10.99,
    img:
      "https://cdn1.ntv.com.tr/gorsel/ptxaR0q1g06gjszfWE2UFQ.jpg?width=1060&height=795&mode=crop&scale=both&v=1597654609978&meta=square",
    desc: `Adana kebab is a spicy grilled dish made with seasoned beef or lamb, and it's a delicious part of Turkish cuisine.`,
  },
  {
    id: 2,
    title: "Inegol Kofte",
    category: "Et_Yemekleri",
    price: 7.99,
    img:
      "https://cdn.yemek.com/mnresize/4032/3024/uploads/2022/05/20220516053414894612.jpeg",
    desc: `"Inegöl köfte is a flavorful Turkish dish made from seasoned ground beef or lamb, and it's a delightful specialty in Turkish cuisine."`,
  },
  {
    id: 3,
    title: "Izgara",
    category: "Et_Yemekleri",
    price: 8.99,
    img:
      "https://i.nefisyemektarifleri.com/2023/01/23/barbeku-nedir-nasil-yapilir-mangal-ile-arasindaki-fark-2.jpg",
    desc: `"Grilled barbecue is a delicious way of preparing various meats, where they are seasoned and cooked over an open flame."`,
  },
  {
    id: 4,
    title: "Lahmacun",
    category: "Hamur_İşleri",
    price: 5.99,
    img:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/04/lahmacun-yemekcom-1.jpg",
    desc: `"Lahmacun is a savory Turkish flatbread topped with a seasoned mixture of minced meat, vegetables, and spices, making it a popular choice in Turkish cuisine."`,
  },
  {
    id: 5,
    title: "Etli Ekmek",
    category: "Hamur_İşleri",
    price: 12.99,
    img:
      "https://image.hurimg.com/i/hurriyet/75/750x422/5cc1c7fd67b0a9044044776d.jpg",
    desc: `Etli Ekmek is a Turkish dish, often referred to as 'meat bread,' consisting of a thin flatbread topped with a mixture of seasoned ground meat and spices.`,
  },
  {
    id: 6,
    title: "Pide",
    category: "Hamur_İşleri",
    price: 9.99,
    img:
      "https://images.deliveryhero.io/image/fd-tr/LH/c99x-hero.jpg",
    desc: `"Pide is a traditional Turkish dish, similar to pizza, consisting of a boat-shaped or oval flatbread topped with a seasoned mixture of various ingredients, often including minced meat, vegetables, and herbs."`,
  },
  {
    id: 7,
    title: "Dolma",
    category: "Sebze_Yemekleri",
    price: 15.99,
    img:
      "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/kymalbiberdolmas.webp",
    desc: `"Dolma is a popular Turkish dish made by stuffing vegetables, such as grape leaves or bell peppers, with a seasoned mixture of rice, ground meat, and various herbs and spices."`,
  },
  {
    id: 8,
    title: "Karniyarik",
    category: "Sebze_Yemekleri",
    price: 12.99,
    img:
      "https://i.ytimg.com/vi/9qIRv_m9aJY/sddefault.jpg",
    desc: `"Karnıyarık is a delicious Turkish dish made by stuffing eggplants with a seasoned mixture of minced meat, onions, tomatoes, and various spices, creating a flavorful and satisfying meal."`,
  },
  {
    id: 9,
    title: "Sarma",
    category: "Sebze_Yemekleri",
    price: 3.99,
    img:
      "https://image.hurimg.com/i/hurriyet/75/750x422/5b645cde66be5d25a0c1e13c.jpg",
    desc: `"Sarma is a classic Turkish dish, often known as 'stuffed grape leaves' or 'stuffed cabbage rolls,' made by filling grape leaves or cabbage leaves with a seasoned mixture of rice, minced meat, and a blend of herbs and spices, resulting in a tasty and aromatic dish."`,
  },
  {
    id: 10,
    title: "Baklava",
    category: "Tatlılar",
    price: 3.99,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png",
    desc: `"Baklava is a sweet and rich Turkish pastry made from layers of thin phyllo dough, filled with a sweet mixture of chopped nuts, sugar, and spices, and then soaked in a fragrant syrup."`,
  },
  {
    id: 11,
    title: "Muhallebi",
    category: "Tatlılar",
    price: 3.99,
    img:
      "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/10/klasik-muhallebi-resimli-yemek-tarifi(12).jpg?w=650&h=487",
    desc: `"Muhallebi is a traditional Turkish dessert, known for its creamy and velvety texture, made by cooking milk, sugar, and rice flour or cornstarch, often flavored with rose or orange blossom water, and topped with ground cinnamon or crushed pistachios."`,
  },
  {
    id: 12,
    title: "Sutlac",
    category: "Tatlılar",
    price: 3.99,
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2019/04/lokanta-usulu-sutlac-tarifi.jpg",
    desc: `Sütlaç, a popular Turkish dessert, is a creamy rice pudding made from ingredients like milk, rice, sugar, and often flavored with vanilla. It is typically topped with caramelized sugar for a delightful sweetness`,
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
