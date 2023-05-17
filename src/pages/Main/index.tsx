import { ChangeEvent, useEffect, useState } from 'react';
import Column from '../../components/Column';
import StopWatch from '../../components/StopWatch';
import { StyledContainer } from './styles';

export type ItemType = {
  text: string;
  onClick: any;
};

export type ColumnType = {
  colName: string;
  itemArr: string[];
};

const Main = () => {
  const [columnArr, setColumnArr] = useState<ColumnType[]>([
    {
      colName: 'To Do',
      itemArr: [],
    },
    {
      colName: 'In Progress',
      itemArr: [],
    },
    {
      colName: 'Done',
      itemArr: [],
    },
    {
      colName: 'Backlog',
      itemArr: [],
    },
  ]);

  const deleteItem = (colIdx: number, itemIdx: number) => {
    const newArr = columnArr.map((prev, idx) =>
      idx === colIdx
        ? {
            ...prev,
            itemArr: prev.itemArr.filter((item, idx2) => idx2 !== itemIdx),
          }
        : prev,
    );

    setColumnArr(newArr);
  };

  const handleAddItem = (name: string) => {
    const text = window.prompt(`내용을 입력해주세요 [${name}]`);

    const newArr = columnArr.map(columnArr =>
      columnArr.colName === name
        ? {
            ...columnArr,
            itemArr: [...columnArr.itemArr, text ?? ''],
          }
        : columnArr,
    );
    setColumnArr(newArr);
  };

  const handleItemMove = (
    act: 'prev' | 'next',
    colIdx: number,
    itemIdx: number,
    text: string,
  ) => {
    if (act === 'prev' && colIdx === 0) return;
    if (act === 'next' && colIdx === columnArr.length - 1) return;
    const targetColumn = act === 'prev' ? colIdx - 1 : colIdx + 1;

    const targetItemArr = columnArr[colIdx].itemArr.filter(
      (_, idx) => itemIdx !== idx,
    );

    const newArr = columnArr.map((ele, eleIdx) => {
      if (eleIdx === targetColumn)
        return { ...ele, itemArr: [...ele.itemArr, text] };
      if (eleIdx === colIdx) return { ...ele, itemArr: targetItemArr };
      return ele;
    });
    setColumnArr(newArr);
  };

  const handleItemInputText = (
    text: string,
    colIdx: number,
    itemIdx: number,
  ) => {
    const newArr = columnArr.map((ele, eleIdx) => {
      if (eleIdx === colIdx) {
        return {
          ...ele,
          itemArr: ele.itemArr.map((ele2, idx2) =>
            idx2 === itemIdx ? text : ele2,
          ),
        };
      } else return ele;
    });

    setColumnArr(newArr);
  };

  return (
    <StyledContainer>
      {columnArr.map((column, idx) => (
        <Column
          key={column.colName}
          columnItem={column}
          colIdx={idx}
          handleAddItem={() => handleAddItem(column.colName)}
          handleItemMove={handleItemMove}
          handleItemInputText={handleItemInputText}
          deleteItem={deleteItem}
          isLastColumn={columnArr.length - 1 === idx}
        />
      ))}
    </StyledContainer>
  );
};

export default Main;
