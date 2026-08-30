import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { menuItems } from "@/data/menu";

const MenuDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = menuItems.find((m) => m.id === id);

  if (!item) {
    return (
      <main className="pt-24 pb-16 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Work not found</h2>
          <Link to="/menu" className="text-muted-foreground hover:text-foreground underline transition-colors">
            Back to collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="rounded-lg overflow-hidden aspect-square">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="text-sm uppercase tracking-wide font-medium text-muted-foreground mb-2">
              {item.category.replace("-", " ")}
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              {item.name}
            </h1>
            <p className="text-2xl font-semibold text-foreground mb-6">${item.price.toLocaleString()}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">{item.longDescription}</p>

            {/* Details */}
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wide font-medium text-foreground mb-3">
                Details
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-sm px-3 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            {item.dietary.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-wide font-medium text-foreground mb-3">
                  Status
                </h3>
                <div className="flex gap-2">
                  {item.dietary.map((d) => (
                    <span
                      key={d}
                      className="text-sm px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Inquire button */}
            <Link
              to="/contact"
              className="mt-8 w-full sm:w-auto bg-foreground text-background font-medium py-3 px-8 rounded-md hover:opacity-90 transition-opacity text-sm text-center inline-block"
            >
              Inquire About This Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenuDetail;
