class Nav {
  constructor(el) {
    this._el = el;
    this.ham_open = this._el.querySelector('.nav_ham');
    this.ham_container = this._el.querySelector('.nav_list--container');
    this.ham_close = this._el.querySelector('.nav_ham--close');
    this.init();
  }
  
  init() {
    if (this.ham_open) {
      this.ham_open.addEventListener('click', (evt) => {
        if (!this.ham_container.classList.contains('active')) {
          this.ham_container.classList.add('active');
          document.documentElement.style.overflow = 'hidden';
        }
      });
    }
    if (this.ham_close) {
      this.ham_close.addEventListener('click', (evt) => {
        if (this.ham_container.classList.contains('active')) {
          this.ham_container.classList.remove('active');
          document.documentElement.style.overflow = 'unset';
        }
      });
    }
    window.addEventListener('scroll', (evt) => {
      if (window.scrollY != 0) {
        if (!this._el.classList.contains('sticky')) {
          this._el.classList.add('sticky');
        }
      } else {
        if (this._el.classList.contains('sticky')) {
          this._el.classList.remove('sticky');
        }
      }
    });
    window.addEventListener('load', (evt) => {
      if (window.scrollY > 0) {
        if (!this._el.classList.contains('sticky')) {
          this._el.classList.add('sticky');
        }
      }
    });
    window.addEventListener('resize', (evt) => {
      if (this.ham_container.classList.contains('active')) {
        this.ham_container.classList.remove('active');
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', (evt) => {
  const nav = document.querySelector('.nav');
  if (nav) {
    new Nav(nav);
  }
});