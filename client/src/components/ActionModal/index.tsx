/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { useFormProductData } from "../../hooks/useFormProductData";
import { Field } from "../Field";
import { Controller, FieldValues } from "react-hook-form";
import { Button } from "../Button";
import { CloseIcon } from "../CloseIcon";
import useProductStore from "../../store/useProductStore";

type Props = {
  onClose: () => void;
};

export const ActionModal: FC<Props> = ({ onClose }) => {
  const { useProductDetailsForm, PRODUCT_DETAIL_FILED, update, create } =
    useFormProductData();
  const { handleSelectWaitingUpdateCard, waitingUpdate } = useProductStore();

  const handleClose = () => {
    onClose();
    handleSelectWaitingUpdateCard(null);
  };

  const handleSubmit = async (data: FieldValues) => {
    if (waitingUpdate) {
      update(data);
    } else {
      create(data);
    }

    handleClose();
  };

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 flex justify-center items-center"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-6" onClick={handleClose}>
          <CloseIcon />
        </button>

        <form
          onSubmit={useProductDetailsForm.handleSubmit(handleSubmit)}
          className="w-[400px] flex flex-col gap-2 mt-4"
        >
          {PRODUCT_DETAIL_FILED.map((item, k) => {
            return (
              <div key={k}>
                <Controller
                  control={useProductDetailsForm.control}
                  name={item.name as any}
                  defaultValue={item.value}
                  render={({ field }) => (
                    <Field
                      field={field as any}
                      placeholder={item.placeholder}
                      label={item.label}
                      name={item.name}
                      wLabel={140}
                      errors={useProductDetailsForm.formState.errors}
                    />
                  )}
                />
              </div>
            );
          })}

          <div className="flex justify-between gap-[1rem]">
            <Button title="Cancel" onClick={handleClose} />
            <Button title="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
