import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  Input,
} from '@heroui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchResultDataModal = (props) => {
  const { isOpen, onClose, setMonth, setYear } = props;

  const [localMonth, setLocalMonth] = useState('');
  const [localYear, setLocalYear] = useState('');

  const handleSearch = () => {
    setMonth(localMonth);
    setYear(localYear);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="font-sans">
      <ModalContent>
        <ModalHeader>Cari Hasil Seleksi</ModalHeader>
        <ModalBody className="flex flex-col gap-4">
          <Input
            type="text"
            label="Bulan"
            variant="faded"
            value={localMonth}
            onChange={(e) => setLocalMonth(e.target.value)}
            placeholder="Masukkan bulan (01-12)"
          />
          <Input
            type="text"
            label="Tahun"
            variant="faded"
            value={localYear}
            onChange={(e) => setLocalYear(e.target.value)}
            placeholder="Masukkan tahun"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" className="text-white" onPress={handleSearch}>
            Cari
          </Button>
          <Button color="primary" variant="bordered" onPress={onClose}>
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

SearchResultDataModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
};

export default SearchResultDataModal;
