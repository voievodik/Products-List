import create from "zustand";

interface CommentStore {
  comment: string;
  isModalOpen: boolean;
  setComment: (newComment: string) => void;
  toggleModal: () => void;
  resetComment: () => void;
}

const useCommentStore = create<CommentStore>((set) => ({
  comment: "",
  isModalOpen: false,

  setComment: (newComment) => set({ comment: newComment }),

  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),

  resetComment: () => set({ comment: "", isModalOpen: false }),
}));

export default useCommentStore;
