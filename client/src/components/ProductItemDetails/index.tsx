import useCommentStore from "../../store/useCommentStore";
import useProductStore from "../../store/useProductStore";
import { Button } from "../Button";

export const ProductItemDetails = () => {
  const { productDetails, handleSelectWaitingUpdateCard, handleSelectProduct } =
    useProductStore();
  const { toggleModal } = useCommentStore();

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xl rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={productDetails?.imageUrl}
          alt={productDetails?.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{productDetails?.name}</div>
          <p className="text-gray-700 text-base">
            ID: {productDetails?.id}
            <br />
            Count: {productDetails?.count}
            <br />
            Size: {productDetails?.size.width} x {productDetails?.size.height}
            <br />
            Weight: {productDetails?.weight}
            <br />
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Comments:
          </span>
          {productDetails?.comments.map((comment, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {comment.description}
            </span>
          ))}
        </div>

        <div className="px-6 py-4 flex justify-between gap-[1rem]">
          <Button
            title="Back"
            className=""
            onClick={() => handleSelectProduct(null)}
          />
          <Button
            title="Edit"
            className=""
            onClick={() => handleSelectWaitingUpdateCard(productDetails)}
          />
          <Button
            title="Add Comment"
            className=""
            onClick={() => toggleModal()}
          />
        </div>
      </div>
    </div>
  );
};
