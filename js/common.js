/* ============================================
   PDF Tools - Common JavaScript Utilities
   ============================================ */

// ============================================
// Theme Management
// ============================================
const ThemeManager = {
    init() {
        const savedTheme = localStorage.getItem('pdfTools_theme') || 'light';
        this.setTheme(savedTheme);
        this.bindToggle();
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('pdfTools_theme', theme);
        this.updateToggleIcon(theme);
    },

    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next);
    },

    updateToggleIcon(theme) {
        const toggleBtn = document.querySelector('.theme-toggle');
        if (!toggleBtn) return;

        if (theme === 'dark') {
            toggleBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            `;
        } else {
            toggleBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            `;
        }
    },

    bindToggle() {
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    }
};

// ============================================
// Mobile Menu
// ============================================
const MobileMenu = {
    init() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (toggle && navLinks) {
            toggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                toggle.classList.toggle('active');
            });

            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    toggle.classList.remove('active');
                });
            });
        }
    }
};

// ============================================
// Toast Notifications
// ============================================
const Toast = {
    container: null,

    init() {
        // Create toast container if it doesn't exist
        if (!document.querySelector('.toast-container')) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            document.body.appendChild(this.container);
        } else {
            this.container = document.querySelector('.toast-container');
        }
    },

    show(message, type = 'info', duration = 4000) {
        if (!this.container) this.init();

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;

        const icons = {
            success: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
            error: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
            warning: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>',
            info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
        };

        toast.innerHTML = `
            <span class="toast-icon">${icons[type] || icons.info}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.remove()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        `;

        this.container.appendChild(toast);

        // Auto remove after duration
        if (duration > 0) {
            setTimeout(() => {
                toast.classList.add('removing');
                setTimeout(() => toast.remove(), 200);
            }, duration);
        }

        return toast;
    },

    success(message, duration) { return this.show(message, 'success', duration); },
    error(message, duration) { return this.show(message, 'error', duration); },
    warning(message, duration) { return this.show(message, 'warning', duration); },
    info(message, duration) { return this.show(message, 'info', duration); }
};

// ============================================
// File Utilities
// ============================================
const FileUtils = {
    /**
     * Format file size to human readable string
     */
    formatSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    /**
     * Get file extension
     */
    getExtension(filename) {
        return filename.split('.').pop().toLowerCase();
    },

    /**
     * Check if file is PDF
     */
    isPDF(file) {
        return file.type === 'application/pdf' || this.getExtension(file.name) === 'pdf';
    },

    /**
     * Check if file is image
     */
    isImage(file) {
        const imageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/bmp'];
        return imageTypes.includes(file.type) || ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'].includes(this.getExtension(file.name));
    },

    /**
     * Read file as ArrayBuffer
     */
    readAsArrayBuffer(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsArrayBuffer(file);
        });
    },

    /**
     * Read file as Data URL
     */
    readAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    },

    /**
     * Download a blob as file
     */
    downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    /**
     * Download Uint8Array as file
     */
    downloadBytes(bytes, filename, mimeType = 'application/pdf') {
        const blob = new Blob([bytes], { type: mimeType });
        this.downloadBlob(blob, filename);
    }
};

// ============================================
// Drag & Drop Handler
// ============================================
const DragDrop = {
    init(element, onFiles) {
        if (!element) return;

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            element.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            element.addEventListener(eventName, () => {
                element.classList.add('dragover');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            element.addEventListener(eventName, () => {
                element.classList.remove('dragover');
            });
        });

        element.addEventListener('drop', (e) => {
            const files = Array.from(e.dataTransfer.files);
            if (onFiles) onFiles(files);
        });
    }
};

// ============================================
// Progress Handler
// ============================================
const ProgressHandler = {
    container: null,
    bar: null,
    text: null,

    init(containerId = 'progress-container') {
        this.container = document.getElementById(containerId);
        if (this.container) {
            this.bar = this.container.querySelector('.progress-bar');
            this.text = this.container.querySelector('.progress-text');
        }
    },

    show() {
        if (this.container) {
            this.container.classList.add('active');
            this.update(0, 'Preparing...');
        }
    },

    hide() {
        if (this.container) {
            this.container.classList.remove('active');
        }
    },

    update(percent, message) {
        if (this.bar) {
            this.bar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
        }
        if (this.text && message) {
            this.text.textContent = message;
        }
    }
};

// ============================================
// Result Handler
// ============================================
const ResultHandler = {
    container: null,

    init(containerId = 'result-section') {
        this.container = document.getElementById(containerId);
    },

    show(title, info, downloadFn) {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="result-card fade-in">
                <div class="result-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3>${title}</h3>
                <p class="result-info">${info}</p>
                <div class="result-actions">
                    <button class="btn btn-primary btn-lg" id="download-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                    </button>
                    <button class="btn btn-secondary btn-lg" onclick="location.reload()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Process Another
                    </button>
                </div>
            </div>
        `;

        this.container.classList.add('active');

        // Bind download button
        const downloadBtn = document.getElementById('download-btn');
        if (downloadBtn && downloadFn) {
            downloadBtn.addEventListener('click', downloadFn);
        }

        // Scroll to result
        this.container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    hide() {
        if (this.container) {
            this.container.classList.remove('active');
            this.container.innerHTML = '';
        }
    }
};

// ============================================
// PDF.js Initialization
// ============================================
const PDFjsInit = {
    init() {
        if (typeof pdfjsLib !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }
    }
};

// ============================================
// Utility Functions
// ============================================
const Utils = {
    /**
     * Generate unique ID
     */
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Sleep utility
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    /**
     * Get base URL for the site
     */
    getBaseUrl() {
        return window.location.origin;
    },

    /**
     * Copy text to clipboard
     */
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            Toast.success('Copied to clipboard!');
        } catch (err) {
            Toast.error('Failed to copy to clipboard');
        }
    }
};

// ============================================
// Initialize Common Components
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    MobileMenu.init();
    Toast.init();
    PDFjsInit.init();

    // Add fade-in animation to main content
    const main = document.querySelector('main, .tool-page, .hero');
    if (main) {
        main.classList.add('fade-in');
    }
});
