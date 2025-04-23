import { useEffect } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  Spinner,
} from '@heroui/react';
import PropTypes from 'prop-types';
import useDeleteApplicationDataModal from './useDeleteApplicationDataModal';

const DeleteApplicationDataModal = (props) => {
  const {
    isOpen,
    onOpenChange,
    onClose,
    fetchResults,
    selectedId,
    setSelectedId,
  } = props;

  const { loading, success, handleDelete, resetSuccess } =
    useDeleteApplicationDataModal();

  useEffect(() => {
    if (success) {
      onClose();
      setSelectedId('');
      fetchResults();
      resetSuccess();
    }
  }, [success, onClose, setSelectedId, fetchResults, resetSuccess]);

  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      placement="center"
      className="font-sans"
      scrollBehavior="inside"
    >
      <ModalContent className="m-4">
        <ModalHeader>Hapus Data Pendaftar</ModalHeader>
        <ModalBody>
          <p className="text-medium">
            Data yang telah dihapus tidak dapat dikembalikan. Apakah anda yakin
            untuk menghapus data pendaftar ini?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            type="submit"
            disabled={loading}
            onPress={() => handleDelete(selectedId)}
          >
            {loading ? <Spinner size="sm" color="white" /> : 'Hapus Data'}
          </Button>
          <Button
            color="primary"
            variant="bordered"
            onPress={() => {
              onClose();
            }}
            disabled={loading}
          >
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

DeleteApplicationDataModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
  setSelectedId: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DeleteApplicationDataModal;
