import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

type EventPaginationProps = {
  currentPage: number;
  totalPages: number;
};

function pageHref(page: number) {
  return `/events?page=${page}#event-archive`;
}

export default function EventPagination({ currentPage, totalPages }: EventPaginationProps) {
  return (
    <nav className="event-pagination" aria-label="Event archive pagination">
      {currentPage > 1 ? (
        <Link className="pagination-direction" href={pageHref(currentPage - 1)}>
          <ArrowLeft weight="bold" /> Previous
        </Link>
      ) : (
        <span className="pagination-direction pagination-disabled" aria-disabled="true">
          <ArrowLeft weight="bold" /> Previous
        </span>
      )}

      <div className="pagination-pages">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          page === currentPage ? (
            <span className="pagination-page pagination-current" aria-current="page" key={page}>{page}</span>
          ) : (
            <Link className="pagination-page" href={pageHref(page)} key={page} aria-label={`Go to archive page ${page}`}>
              {page}
            </Link>
          )
        ))}
      </div>

      {currentPage < totalPages ? (
        <Link className="pagination-direction" href={pageHref(currentPage + 1)}>
          Next <ArrowRight weight="bold" />
        </Link>
      ) : (
        <span className="pagination-direction pagination-disabled" aria-disabled="true">
          Next <ArrowRight weight="bold" />
        </span>
      )}
    </nav>
  );
}
