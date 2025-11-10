"use client";

export default function Modal({ open, onClose, children }) {
    if (!open) return null;
    return (
        <div className="service-modal active" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="modal-content">
                <button aria-label="Cerrar" className="close-modal" onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}
