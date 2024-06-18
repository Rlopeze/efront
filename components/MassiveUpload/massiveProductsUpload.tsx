/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';
import { Data, RowHook, TableHook } from 'react-spreadsheet-import/types/types';

import { customTheme } from './customTheme';
import { productsFields } from './fields';
import { translations } from './translations';

interface IMassiveUploadProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnSubmit?: (data: any, file: any) => void;
}

function MassiveProductsUpload(props: IMassiveUploadProps) {
  const { isOpen, setIsOpen, handleOnSubmit } = props;

  const handleOnClose = () => setIsOpen(false);

  const tableHook: TableHook<any> = (
    table: Data<any>[]
    // addError: (rowIndex: number, fieldKey: any, error: Info) => void
  ): Data<any>[] => {
    const rowsNumber = table.length;
    for (let rowIndx = 0; rowIndx < rowsNumber; rowIndx++) {
      /* empty */
    }
    return table;
  };
  const rowHook: RowHook<any> = (
    row: Data<any>
    // addError: (fieldKey: any, error: Info) => void
  ) => row;
  return (
    <ReactSpreadsheetImport
      fields={productsFields}
      translations={translations}
      isOpen={isOpen}
      onClose={handleOnClose}
      onSubmit={handleOnSubmit}
      tableHook={tableHook}
      rowHook={rowHook}
      customTheme={customTheme}
    />
  );
}

export default MassiveProductsUpload;
