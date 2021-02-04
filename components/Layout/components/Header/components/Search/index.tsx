import { useState } from 'react';
import { SearchInput, SearchWrapper } from './styled';

export default function Search() {
  // TODO add handler to search functionality
  const [focus, setFocus] = useState<boolean>(false);
  const handleToggleFocus: () => void = () => {
    setFocus(!focus);
  };

  return (
    <SearchWrapper focus={focus}>
      <SearchInput
        focus={focus}
        name="search"
        placeholder="Search"
        onBlur={handleToggleFocus}
        onFocus={handleToggleFocus}
      />
    </SearchWrapper>
  );
}
