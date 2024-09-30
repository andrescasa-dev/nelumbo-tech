import ProductCardSklt from "./ProductCardSklt";

function ProductsGridSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-12">
      <ProductCardSklt />
      <ProductCardSklt />
      <ProductCardSklt />
      <ProductCardSklt />
      <ProductCardSklt />
    </div>
  );
}

export default ProductsGridSkeleton;
