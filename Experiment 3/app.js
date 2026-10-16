
const { useState } = React;
const h = React.createElement;

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0]);

  // Multiple filters chained together with .filter()
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesPrice =
      product.price >= priceRange.min &&
      product.price <= priceRange.max;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return h("div", { className: "page" }, [
    h("header", { className: "header", key: "header" }, [
      h("h1", { key: "h1" }, "Shopping Catalog"),
      h("p", { key: "p" }, "Find what you’re looking for."),
    ]),

    h("input", {
      key: "search",
      className: "search",
      type: "text",
      placeholder: "Search products by name...",
      value: search,
      onChange: (e) => setSearch(e.target.value),
    }),

    h("div", { className: "body", key: "body" }, [
      h("aside", { className: "sidebar", key: "sidebar" }, [
        h("div", { className: "filterBlock", key: "cat" }, [
          h("h4", { key: "h4" }, "Category"),

          ...CATEGORIES.map((cat) =>
            h(
              "button",
              {
                key: cat,
                className:
                  cat === category ? "sideBtn active" : "sideBtn",
                onClick: () => setCategory(cat),
              },
              cat
            )
          ),
        ]),

        h("div", { className: "filterBlock", key: "price" }, [
          h("h4", { key: "h4" }, "Price Range"),

          ...PRICE_RANGES.map((range) =>
            h(
              "button",
              {
                key: range.label,
                className:
                  range.label === priceRange.label
                    ? "sideBtn priceActive"
                    : "sideBtn",
                onClick: () => setPriceRange(range),
              },
              range.label
            )
          ),
        ]),
      ]),

      h("main", { className: "main", key: "main" }, [
        h("p", { className: "count", key: "count" }, [
          "Showing ",
          h("strong", { key: "n" }, filteredProducts.length),
          ` of ${PRODUCTS.length} products`,
        ]),

        filteredProducts.length === 0
          ? h(
              "div",
              { className: "empty", key: "empty" },
              "No products match your filters"
            )
          : h(
              "div",
              { className: "grid", key: "grid" },
              filteredProducts.map((product) => {
                const outOfStock = product.qty === 0;
                const hasDiscount = product.discount > 0;

                const finalPrice = Math.round(
                  product.price -
                    (product.price * product.discount) / 100
                );

                return h(
                  "div",
                  {
                    className: outOfStock
                      ? "card outOfStock"
                      : "card",
                    key: product.id,
                  },
                  [
                    hasDiscount &&
                      h(
                        "span",
                        { className: "discountBadge", key: "discount" },
                        `${product.discount}% OFF`
                      ),

                    h(
                      "span",
                      {
                        className: outOfStock ? "tag out" : "tag in",
                        key: "tag",
                      },
                      outOfStock ? "Out of Stock" : "In Stock"
                    ),

                    h("h3", { key: "name" }, product.name),

                    h(
                      "p",
                      { className: "cardCategory", key: "cat" },
                      product.category
                    ),

                    hasDiscount
                      ? h("p", { className: "cardPrice", key: "price" }, [
                          `₹${finalPrice} `,
                          h(
                            "span",
                            { className: "strike", key: "strike" },
                            `₹${product.price}`
                          ),
                        ])
                      : h(
                          "p",
                          { className: "cardPrice", key: "price" },
                          `₹${product.price}`
                        ),
                  ]
                );
              })
            ),
      ]),
    ]),
  ]);
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
