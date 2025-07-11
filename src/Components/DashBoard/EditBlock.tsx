import React, { useContext, useEffect, useState } from "react";
import { dashBoardContext } from "./DashBoard";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { listing } from "@/types/DashBoardInterFace";
import { updateList } from "@/app/api/putItem/route";
function EditBlock() {
  const { editList, showModal, setShowModal } =
    useContext(dashBoardContext);

  type ListingFormData = {
    title: string;
    location: string;
    pricePerDay: number;
    status: string;
  };

  const [formState, setFormState] = useState({
    title: "",
    location: "",
    pricePerDay: 0,
    status: "",
  });

  useEffect(() => {
    if (editList) {
      setFormState({
        title: editList.title,
        location: editList.location,
        pricePerDay: editList.pricePerDay,
        status: editList.status,
      });
      setValue("title", editList?.title);
      setValue("location", editList?.location);
      setValue("pricePerDay", editList?.pricePerDay);
      setValue("status", editList?.status);
    }
  }, [editList]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ListingFormData>({
    defaultValues: {
      title: editList?.title || "",
      location: editList?.location || "",
      pricePerDay: editList?.pricePerDay || 0,
      status: editList?.status || "",
    },
  });

  const onSubmit = async () => {
    if (editList) {
      const listVal: listing = structuredClone(editList);
      listVal.title = formState.title;
      listVal.location = formState.location;
      listVal.pricePerDay = formState.pricePerDay;
      listVal.status = formState.status;

      const response = await updateList(listVal);
      setShowModal(!showModal);
      window.location.reload();
      console.log(response);
      // const result = await response.json();
    }
    // console.log(result);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: name == "pricePerDay" ? parseFloat(value ? value : "0") : value,
    }));
  };

  const handleCancel = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      id="modal"
      className={`fixed inset-0 ${
        !showModal ? "hidden" : ""
      } bg-black bg-opacity-50 flex items-center justify-center z-50 p-4`}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Edit Listing
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Title</span>
            <input
              type="text"
              // name="title"
              {...register("title", { required: "Title is required" })}
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter title"
              value={formState.title}
              onChange={handleChange}
              // required
            />
            {/* {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )} */}
            <ErrorMessage
              errors={errors}
              name="title"
              render={({ message }) => (
                <p className="text-red-500 text-sm">{message}</p>
              )}
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Location</span>
            <input
              type="text"
              // name="locat/ion"
              {...register("location", { required: "Location is required" })}
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter location"
              value={formState.location}
              onChange={handleChange}
              // required
            />
            <ErrorMessage
              errors={errors}
              name="location"
              render={({ message }) => (
                <p className="text-red-500 text-sm">{message}</p>
              )}
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">
              Price Per Day
            </span>
            <input
              type="number"
              {...register("pricePerDay", {
                required: "Price is required",
                min: 1,
              })}
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter price"
              value={formState.pricePerDay}
              onChange={handleChange}
              // required
            />
            <ErrorMessage
              errors={errors}
              name="pricePerDay"
              render={({ message }) => (
                <p className="text-red-500 text-sm">{message}</p>
              )}
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Status</span>
            <select
              name="status"
              className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={formState.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </label>

          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"

              // onClick={handleSave}
            >
              Save
            </button>
            <button
              type="reset"
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBlock;
