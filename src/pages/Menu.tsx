import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems, categories } from "@/data/menu";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-center mb-2">
          Collection
        </h1>
        <p className="text-muted-foreground text-center mb-10 text-lg">
          Currently available works from our represented artists.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat.id
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Works grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Link
              key={item.id}
              to={`/menu/${item.id}`}
              className="group block rounded-lg overflow-hidden bg-background border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-semibold text-foreground shrink-0">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {item.dietary.length > 0 && (
                  <div className="flex gap-2 mt-3">
                    {item.dietary.map((d) => (
                      <span
                        key={d}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Menu;
