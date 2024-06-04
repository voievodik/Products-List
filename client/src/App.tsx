import { useMemo } from "react";
import { ActionModal } from "./components/ActionModal";
import { Button } from "./components/Button";
import { DeleteModal } from "./components/DeleteModal";
import { ProductList } from "./components/ProductList";
import useVisible from "./hooks/useVisible";
import useProductStore from "./store/useProductStore";
import { ProductItemDetails } from "./components/ProductItemDetails";
import { CommentModal } from "./components/CommentModal";
import useCommentStore from "./store/useCommentStore";
import { Toaster } from "react-hot-toast";

function App() {
  const openModal = useVisible();
  const { waitingDeleteId, waitingUpdate, productDetails } = useProductStore();
  const { isModalOpen } = useCommentStore();

  const renderDetails = useMemo(() => {
    if (productDetails) {
      return <ProductItemDetails />;
    }

    return (
      <>
        <Button onClick={openModal.show} title="Add new" />
        <ProductList />
      </>
    );
  }, [productDetails]);

  return (
    <>
      <Toaster />
      {isModalOpen && <CommentModal />}
      {waitingDeleteId && <DeleteModal />}
      {(openModal.visible || waitingUpdate) && (
        <ActionModal onClose={openModal.hide} />
      )}
      <div className="p-12 space-y-12">{renderDetails}</div>
    </>
  );
}

export default App;
