import { StyledContainer } from './styles';

type Props = {
  colIdx: number;
  value: string;
  itemIdx: number;
  handleItemMove: (
    act: 'prev' | 'next',
    colIdx: number,
    idx: number,
    text: string,
  ) => void;
  handleItemInputText: (text: string, colIdx: number, itemIdx: number) => void;
  deleteItem: (colIdx: number, itemIdx: number) => void;
  isLastColumn?: boolean;
};

const Item = ({
  value,
  handleItemMove,
  handleItemInputText,
  itemIdx,
  colIdx,
  isLastColumn,
  deleteItem,
}: Props) => {
  return (
    <StyledContainer>
      {colIdx !== 0 && (
        <button onClick={() => handleItemMove('prev', colIdx, itemIdx, value)}>
          {'<'}
        </button>
      )}
      <input
        value={value}
        onChange={event =>
          handleItemInputText(event.currentTarget.value, colIdx, itemIdx)
        }
      />
      <button onClick={() => deleteItem(colIdx, itemIdx)}>삭제</button>
      {!isLastColumn && (
        <button onClick={() => handleItemMove('next', colIdx, itemIdx, value)}>
          {'>'}
        </button>
      )}
    </StyledContainer>
  );
};

export default Item;
