"use client";
import React, { useState, createContext } from "react";
import {
  FetchListResult,
  listing,
  FilterValueType,
  ThemeContextType,
} from "@/types/DashBoardInterFace";
import PaginatedPage from "./PaginatedPage";
import NoResult from "./NoResult";
import DashBoardResultPage from "./DashBoardResultPage";
import FilterBlock from "./FilterBlock";
import EditBlock from "./EditBlock";
import usePagination from "@/Hooks/usePagination";

export const dashBoardContext = createContext<ThemeContextType>({
  currentIndex: 0,
  setCurrentIndex: () => {},
  showModal: false,
  setShowModal: () => {},
  editList: null,
  setEditList: () => {},
  paginationData: [],
  filterValue: {
    status: "All",
  },
  setFilterValue: () => {},
});

function DashBoard({ result }: { result: FetchListResult }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<FilterValueType>({
    status: "All",
  });
  const paginationData = usePagination(
    result?.data?.listings ?? [],
    filterValue
  );
  const [editList, setEditList] = useState<listing | null>(null);

  const contextVal = {
    currentIndex,
    setCurrentIndex,
    showModal,
    setShowModal,
    editList,
    setEditList,
    paginationData,
    setFilterValue,
    filterValue,
  };

  return (
    <dashBoardContext.Provider value={contextVal}>
      <title>Dashboard</title>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Dashboard - Listings</h1>
        {paginationData && paginationData.length > 0 ? (
          <>
            <FilterBlock />
            <DashBoardResultPage />
            <PaginatedPage />
          </>
        ) : (
           <NoResult setFilterValue={setFilterValue} />
        )}
        <EditBlock />
      </div>
    </dashBoardContext.Provider>
  );
}

export default DashBoard;
