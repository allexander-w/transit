class ModalSystem {
    constructor() {
        this.modals = document.querySelectorAll('.modal');
        this.activeModal = null;
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-modal]');
            if (trigger) {
                const modalId = trigger.dataset.modal;
                this.open(modalId);
            }

            if (e.target.closest('[data-close]')) {
                this.close();
            }

            if (e.target.classList.contains('modal')) {
                this.close();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.close();
            }
        });
    }

    open(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        this.activeModal = modal;
        document.body.style.overflow = 'hidden';

        modal.classList.add('active');
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    close() {
        if (!this.activeModal) return;

        this.activeModal.classList.remove('show');
        setTimeout(() => {
            this.activeModal.classList.remove('active');
            this.activeModal = null;
            document.body.style.overflow = '';
        }, 300);
    }

    closeAll() {
        this.modals.forEach(modal => {
            modal.classList.remove('show', 'active');
        });
        this.activeModal = null;
        document.body.style.overflow = '';
    }
}

const modalSystem = new ModalSystem();

window.Modal = {
    open: (id) => modalSystem.open(id),
    close: () => modalSystem.close(),
    closeAll: () => modalSystem.closeAll()
};