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
    <div className="sticky top-0 bg-white z-10 p-4">
      <div className="flex items-center">
        <textarea
          className="flex-grow p-2 border rounded-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="検索..."
        ></textarea>
        <button className="ml-2 p-2 border rounded-md" aria-label="フィルターを表示">
          <span>条件絞り込み</span>
        </button>
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-md" onClick={handleSearch}>
          検索
        </button>
      </div>
    </div>
  );
};
