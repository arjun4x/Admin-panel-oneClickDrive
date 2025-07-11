import { useState, useEffect } from "react";
import { listing, FilterValueType } from "@/types/DashBoardInterFace";

function usePagination(result: listing[], filterValue: FilterValueType) {

  const [paginationData, setPaginationData] = useState<listing[][] | []>([]);

  useEffect(() => {
    if (!result || result.length == 0) {
      setPaginationData([]);
    }

    let filteredResults = result;

    if (filterValue?.status && filterValue.status !== "All") {
      debugger;
      filteredResults = filteredResults.filter((item) => {
        console.log(item.status);
        debugger;
       const value :boolean =   item.status?.toLowerCase() == filterValue?.status?.toLowerCase()
        debugger
        return value;
      return
    //   if(item.status?.toLowerCase() == filterValue?.status?.toLowerCase()}
    //    return true;
    // }
      
      });
    }
    console.log(filteredResults);
    debugger

    if (filteredResults.length <= 10) {
      setPaginationData([filteredResults]);
    } else {
      const lengthVal: number = filteredResults.length / 10;
      let additionalPage: boolean = false;
      if (lengthVal * 10 != filteredResults.length) {
        additionalPage = true;
      }
      let pageStart: number = 0;
      const resultVal: listing[][] = [];
      //  const listings = result ?? [];
      const arrayLen = additionalPage ? lengthVal + 1 : lengthVal;

      Array.from({ length: arrayLen })?.map((_, index: number) => {
        const pageEnd: number = pageStart == 0 ? 10 : pageStart + 10;
        if (index == lengthVal - 1 && additionalPage) {
          const val: listing[] = filteredResults.slice(
            pageStart,
            result.length
          );
          resultVal.push(val);
        } else {
          const val: listing[] = filteredResults.slice(pageStart, pageEnd);
          resultVal.push(val);
        }
        pageStart = pageEnd;
      });
      setPaginationData(resultVal);
    }
  }, [result, filterValue]);
  return paginationData;
}

export default usePagination;
