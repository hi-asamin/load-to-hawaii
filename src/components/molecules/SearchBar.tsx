import { useState } from 'react';
import { useRouter } from 'next/router';

/**
 * Search component that provides a text area for input, a filter button, and a search button.
 * The component will stick to the top of the screen when scrolling.
 *
 * @returns {React.ReactElement} Rendered search component
 */
export const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const router = useRouter();

  /**
   * Handles the search action.
   */
  const handleSearch = () => {
    router.push(`/search?query=${encodeURIComponent(searchText)}`);
  };

  return (
    <div className="">
      <div className="">
        <textarea
          className=""
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="検索..."
        ></textarea>
        <button className="">
          <span>条件絞り込み</span>
        </button>
        <button className="" onClick={handleSearch}>
          検索
        </button>
      </div>
    </div>
  );
};
