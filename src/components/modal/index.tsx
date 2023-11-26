import React, { ReactNode } from 'react';
import './modal.css'
import { success } from './assets';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  title?: string
  className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, className = 'w-[400px] p-[25px]' }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay"></div>
      <div className={`modal-container ${className} bg-white rounded-md shadow-lg z-50`}>
        <div className='flex justify-center items-center my-4'>
          <img src={success} alt='' className='' />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
