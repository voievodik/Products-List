import { useState } from "react";
import { Button } from "../Button";
import useCommentStore from "../../store/useCommentStore";
import { addComment } from "../../services/comment";
import useProductStore from "../../store/useProductStore";

export const CommentModal = () => {
  const [comment, setComment] = useState("");
  const { toggleModal } = useCommentStore();
  const { productDetails, fetchProducts } = useProductStore();

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleAddComment = async () => {
    if (productDetails?.id) {
      const data = {
        productId: productDetails?.id,
        description: comment,
        date: new Date().toString(),
      };

      const response = await addComment(data);

      if (response.data.success) {
        fetchProducts();
        toggleModal();
      }
    }
  };

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 flex justify-center items-center"
      onClick={toggleModal}
    >
      <div
        className="w-[400px] bg-white rounded-lg p-8 relative space-y-[0.5rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <p>Please write comment</p>
        <input
          className="w-full p-2.5 outline-none rounded-lg text-n-48 bg-n-8 truncate placeholder:text-n-4 border-n-167 border"
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="flex justify-between gap-[0.5rem]">
          <Button title="Cancel" onClick={toggleModal} />
          <Button title="Add comment" onClick={handleAddComment} />
        </div>
      </div>
    </div>
  );
};
