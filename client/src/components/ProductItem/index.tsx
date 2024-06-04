import { FC } from "react";
import { Product } from "../../interfaces/product";
import { Button } from "../Button";
import useProductStore from "../../store/useProductStore";

type Props = {
  product: Product;
};

export const ProductItem: FC<Props> = ({ product }) => {
  const { handleSelectWaitingDeleteId, handleSelectProduct } =
    useProductStore();
  const { imageUrl, name, count, size, weight, comments } = product;

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden">
      <div
        onClick={() => handleSelectProduct(product)}
        className="cursor-pointer"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-[200px] object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{name}</h3>
          <p className="text-gray-500 mb-2">In Stock: {count}</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8l2-2m0 0l2 2m-4-4L8 4m0 0l-2 2m4 4v-a4 4 0 0 0-4-4H4m16 0a4 4 0 0 0-4 4v1"
              />
            </svg>
            <span className="text-gray-500">
              {size.width}x{size.height}
            </span>
            <div className="flex-grow ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0 -6v12h-3.055a.5.5 0 0 0-.495-.397v-10a.5.5 0 0 0-.495-.397z"
                />
              </svg>
              <span className="text-gray-500 ml-1">{weight}</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Comments:
            </span>
            {comments.map((comment, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {comment.description}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 mt-[1rem] flex justify-between gap-[0.5rem]">
        <Button
          title="Delete"
          className="bg-[red]"
          onClick={() => handleSelectWaitingDeleteId(product.id)}
        />
      </div>
    </div>
  );
};
