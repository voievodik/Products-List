import { useEffect, useMemo, useState } from "react";
import useProductStore from "../../store/useProductStore";
import { ProductItem } from "../ProductItem";

enum SORT_LABEL {
  NAME = "name",
  COUNT = "count",
}

export const ProductList = () => {
  const { products, loading, fetchProducts } = useProductStore();
  const [sortMethod, setSortMethod] = useState<SORT_LABEL>(SORT_LABEL.NAME);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSortMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMethod(e.target.value as SORT_LABEL);
  };

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortMethod === SORT_LABEL.NAME) {
        return a.name.localeCompare(b.name);
      } else if (sortMethod === SORT_LABEL.COUNT) {
        return a.count - b.count;
      }
      return 0;
    });
  }, [products, sortMethod]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <select
        onChange={handleSortMethodChange}
        value={sortMethod}
        className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="name">Name</option>
        <option value="count">Count</option>
      </select>

      <ul className="grid grid-cols-3 gap-[1rem]">
        {sortedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};
