import { Button } from "../Button";
import { deleteProduct } from "../../services/product";
import useProductStore from "../../store/useProductStore";

export const DeleteModal = () => {
  const { fetchProducts, waitingDeleteId, handleSelectWaitingDeleteId } =
    useProductStore();

  const handleClose = () => handleSelectWaitingDeleteId(null);

  const handleDelete = async () => {
    if (waitingDeleteId) {
      const response = await deleteProduct(waitingDeleteId);

      if (response.data.success) {
        fetchProducts();
        handleClose();
      }
    }
  };

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 flex justify-center items-center"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg p-8 relative space-y-[0.5rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Do you want to delete this card?</h3>

        <div className="flex justify-between gap-[1rem]">
          <Button title="Cancel" onClick={handleClose} />
          <Button
            title="Delete"
            onClick={handleDelete}
            className="bg-[red] m-0"
          />
        </div>
      </div>
    </div>
  );
};
