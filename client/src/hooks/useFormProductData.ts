import * as yup from "yup";
import { requiredFiled } from "../utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import useProductStore from "../store/useProductStore";
import { addProduct, updateProduct } from "../services/product";

export const useFormProductData = () => {
  const { waitingUpdate, fetchProducts } = useProductStore();

  const PRODUCT_DETAIL_SCHEMA = yup.object({
    imageUrl: yup.string().required(requiredFiled("Image")),
    name: yup.string().required(requiredFiled("Name")),
    count: yup.number().required(requiredFiled("Count")),
    height: yup.number().required(requiredFiled("Height")),
    weight: yup.number().required(requiredFiled("Weight")),
    width: yup.number().required(requiredFiled("Width")),
    // comments: yup.string().required(requiredFiled("Comment")),
  });

  const useProductDetailsForm = useForm({
    resolver: yupResolver(PRODUCT_DETAIL_SCHEMA),
  });

  const PRODUCT_DETAIL_FILED = [
    {
      className: "",
      name: "imageUrl",
      label: "Image",
      placeholder: "Image",
      required: true,
      value: waitingUpdate?.imageUrl,
    },
    {
      className: "",
      name: "name",
      label: "Name",
      placeholder: "Name",
      required: true,
      value: waitingUpdate?.name,
    },
    {
      className: "",
      name: "count",
      label: "count",
      placeholder: "Count",
      required: true,
      value: waitingUpdate?.count,
    },
    {
      className: "",
      name: "height",
      label: "Height",
      placeholder: "Height",
      required: true,
      value: waitingUpdate?.size.height,
    },
    {
      className: "",
      name: "width",
      label: "Width",
      placeholder: "Width",
      required: true,
      value: waitingUpdate?.size.width,
    },
    {
      className: "",
      name: "weight",
      label: "Weight",
      placeholder: "Weight",
      required: true,
      value: waitingUpdate?.weight,
    },
  ];

  const update = async (data: FieldValues) => {
    const card = {
      imageUrl: data.imageUrl,
      name: data.name,
      count: data.count,
      size: {
        width: data.width,
        height: data.height,
      },
      weight: data.weight,
    };

    if (waitingUpdate?.id) {
      const response = await updateProduct(waitingUpdate?.id, card);

      if (response.data.success) {
        fetchProducts();
      } else {
        console.log("error");
      }
    }
  };

  const create = async (data: FieldValues) => {
    const card = {
      imageUrl: data.imageUrl,
      name: data.name,
      count: data.count,
      size: {
        width: data.width,
        height: data.height,
      },
      weight: data.weight,
    };

    const response = await addProduct(card);

    if (response.data.success) {
      fetchProducts();
    } else {
      console.log("error");
    }
  };

  return {
    useProductDetailsForm,
    PRODUCT_DETAIL_SCHEMA,
    PRODUCT_DETAIL_FILED,
    update,
    create,
  };
};
