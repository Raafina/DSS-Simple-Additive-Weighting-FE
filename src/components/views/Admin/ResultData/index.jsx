import TableData from '../../../UI/TableData';
import PropTypes from 'prop-types';
import { useDisclosure } from '@heroui/react';
import { useEffect } from 'react';
import { COLUMN_LISTS_RESULT_DATA } from './ResultData.constant';
import useResultData from './useResultData';
import SearchResultDataModal from './SearchResultDataModal';
import { BiMailSend } from 'react-icons/bi';

const ResultData = () => {
  const {
    ResultSAW_Data,
    totalPages,
    currentPage,
    month,
    year,
    loading,
    setMonth,
    setYear,
    fetchResults,
    handlePageChange,
    handleSearch,
  } = useResultData();

  const searchResultDataModal = useDisclosure();

  useEffect(() => {
    fetchResults(1);
  }, [month, year, fetchResults]);

  const renderCell = (item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case 'CV_score':
        return <p className="text-center">{cellValue}</p>;
      case 'motivation_letter_score':
        return <p className="text-center">{cellValue}</p>;
      case 'total_score':
        return <p className="text-center">{cellValue}</p>;
      case 'actions':
        return (
          <>
            <button
              type="button"
              className="bg-blue text-white p-2 rounded-xl hover:bg-opacity-80"
              // onClick={() => {
              //   setSelectedId(item.id);
              //   deleteApplicationDataModal.onOpen(item);
              // }}
            >
              <BiMailSend size={15} />
            </button>
          </>
        );
      default:
        return cellValue;
    }
  };

  return (
    <section>
      <TableData
        showDate
        buttonTopContentLabel="Ubah Periode"
        columns={COLUMN_LISTS_RESULT_DATA}
        data={ResultSAW_Data}
        emptyContent="Hasil seleksi tidak ditemukan"
        isLoading={loading}
        renderCell={renderCell}
        totalPages={totalPages}
        currentPage={currentPage}
        onClickButtonTopContent={searchResultDataModal.onOpen}
        onChangePage={handlePageChange}
        onChangeSearch={handleSearch}
      />
      <SearchResultDataModal
        {...searchResultDataModal}
        setMonth={setMonth}
        setYear={setYear}
      />
    </section>
  );
};

ResultData.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default ResultData;
