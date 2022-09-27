import { Pagination } from "@mui/material";
import s from "./Paginator.module.css";

export const Paginator = ({pageSize,totalItemsCount,currentPage,onPageChanged}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  return (
    <div className={s.search_result__block}>
      <Pagination  variant="outlined" shape="rounded" className={s.pageCounter} page = {currentPage} onChange={(_,num) => onPageChanged(num)} count={pagesCount} size="small" />
    </div>
    
  );
};

export default Paginator;
