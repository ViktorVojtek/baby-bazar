import { SyntheticEvent, useState } from 'react';
import { SearchInput, SearchWrapper } from './Search.styled';

export default function Search() {
  // TODO add handler to search functionality
  const [focus, setFocus] = useState<boolean>(false);

  const handleToggleFocus: (event: SyntheticEvent) => void = (event) => {
    const { value } = event.target as HTMLInputElement;

    if (!value) {
      setFocus(!focus);
    }
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
