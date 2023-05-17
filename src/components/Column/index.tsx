import Item from '../Item';
import { ColumnType } from '../../pages/Main';
import { StyledContainer } from './styles';

type Props = {
  columnItem: ColumnType;
  colIdx: number;
  handleAddItem: () => void;
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

const Column = ({
  columnItem,
  colIdx,
  handleAddItem,
  handleItemMove,
  handleItemInputText,
  isLastColumn,
  deleteItem,
}: Props) => {
  return (
    <StyledContainer>
      <header>{columnItem.colName}</header>
      {columnItem.itemArr.map((item, idx) => (
        <Item
          key={idx}
          colIdx={colIdx}
          value={item}
          itemIdx={idx}
          handleItemMove={handleItemMove}
          handleItemInputText={handleItemInputText}
          isLastColumn={isLastColumn}
          deleteItem={deleteItem}
        />
      ))}
      <button onClick={handleAddItem}> + </button>
    </StyledContainer>
  );
};

export default Column;
