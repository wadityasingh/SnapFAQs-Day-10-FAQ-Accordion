/**
 * SnapFAQs – Day 10 FAQ Accordion
 * Veda Technology Web Development Internship
 * Vanilla JavaScript implementation for single-open accordion,
 * keyboard accessibility, category filtering, and mobile navigation.
 */

function initSnapFAQs() {
  // 1. Select DOM Elements
  const accordionItems = Array.from(document.querySelectorAll('.accordion-item'));
  const accordionTriggers = Array.from(document.querySelectorAll('.accordion-trigger'));
  const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  const searchInput = document.getElementById('faq-search');
  const countText = document.getElementById('faq-count-text');
  const emptyState = document.getElementById('faq-empty-state');
  const resetSearchBtn = document.getElementById('reset-search-btn');
  const collapseAllBtn = document.getElementById('collapse-all-btn');

  // Mobile Menu Elements
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const currentYearSpan = document.getElementById('current-year');

  // Set current year in footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear().toString();
  }

  /**
   * 2. Single-Open Accordion Logic using classList.toggle()
   * Clicking an item toggles its open/closed state and automatically closes
   * any other open item so only one answer remains expanded at a time.
   */
  function toggleAccordionItem(clickedItem) {
    const clickedButton = clickedItem.querySelector('.accordion-trigger');
    const isCurrentlyOpen = clickedItem.classList.contains('active');

    // First, close all other accordion items (Single-Open Behavior)
    accordionItems.forEach((item) => {
      if (item !== clickedItem) {
        item.classList.remove('active');
        const btn = item.querySelector('.accordion-trigger');
        if (btn) {
          btn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Toggle the clicked item's active class using classList.toggle()
    const isNowOpen = clickedItem.classList.toggle('active', !isCurrentlyOpen);

    // Update aria-expanded attribute to match the new state
    if (clickedButton) {
      clickedButton.setAttribute('aria-expanded', String(isNowOpen));
    }
  }

  // Attach click and keyboard event listeners to every question button
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.closest('.accordion-item');
      if (parentItem) {
        toggleAccordionItem(parentItem);
      }
    });

    // Support WAI-ARIA keyboard arrow navigation between visible accordion triggers
    trigger.addEventListener('keydown', (event) => {
      const visibleTriggers = accordionTriggers.filter(
        (btn) => !btn.closest('.accordion-item').hidden
      );
      const currentIndex = visibleTriggers.indexOf(trigger);
      if (currentIndex === -1) return;

      let targetIndex = null;

      if (event.key === 'ArrowDown') {
        targetIndex = (currentIndex + 1) % visibleTriggers.length;
      } else if (event.key === 'ArrowUp') {
        targetIndex = (currentIndex - 1 + visibleTriggers.length) % visibleTriggers.length;
      } else if (event.key === 'Home') {
        targetIndex = 0;
      } else if (event.key === 'End') {
        targetIndex = visibleTriggers.length - 1;
      }

      if (targetIndex !== null) {
        event.preventDefault();
        visibleTriggers[targetIndex].focus();
      }
    });
  });

  // Collapse Open Answer Button
  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', () => {
      accordionItems.forEach((item) => {
        item.classList.remove('active');
        const btn = item.querySelector('.accordion-trigger');
        if (btn) {
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  /**
   * 3. Category Filtering & Live Search
   */
  let activeCategory = 'all';
  let searchQuery = '';

  function filterFAQs() {
    let visibleCount = 0;

    accordionItems.forEach((item) => {
      const itemCategory = item.getAttribute('data-category') || '';
      const questionText = item.querySelector('.q-text')?.textContent.toLowerCase() || '';
      const answerText = item.querySelector('.accordion-panel-inner')?.textContent.toLowerCase() || '';

      const matchesCategory = activeCategory === 'all' || itemCategory === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        questionText.includes(searchQuery) ||
        answerText.includes(searchQuery);

      const isVisible = matchesCategory && matchesSearch;
      item.hidden = !isVisible;

      if (isVisible) {
        visibleCount++;
      }
    });

    // Update live status count
    if (countText) {
      if (visibleCount === accordionItems.length) {
        countText.innerHTML = `Showing all <strong>${visibleCount}</strong> questions · Click any question to expand`;
      } else {
        countText.innerHTML = `Showing <strong>${visibleCount}</strong> of ${accordionItems.length} questions`;
      }
    }

    // Toggle empty state message
    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  }

  // Category tab button clicks
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.getAttribute('data-category') || 'all';

      filterButtons.forEach((btn) => {
        const isSelected = btn === button;
        btn.classList.toggle('active', isSelected);
        btn.setAttribute('aria-selected', String(isSelected));
      });

      filterFAQs();
    });
  });

  // Live search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      searchQuery = event.target.value.trim().toLowerCase();
      filterFAQs();
    });
  }

  // Reset search & filter button
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      activeCategory = 'all';
      searchQuery = '';
      if (searchInput) {
        searchInput.value = '';
      }
      filterButtons.forEach((btn) => {
        const isAll = btn.getAttribute('data-category') === 'all';
        btn.classList.toggle('active', isAll);
        btn.setAttribute('aria-selected', String(isAll));
      });
      filterFAQs();
    });
  }

  /**
   * 4. Responsive Mobile Navigation Menu
   */
  function closeMobileMenu() {
    if (!mobileMenuToggle || !navMenu) return;
    navMenu.classList.remove('is-open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  }

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when any navigation link or CTA inside it is clicked
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close mobile menu when pressing Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeMobileMenu();
        mobileMenuToggle.focus();
      }
    });
  }

  /**
   * 5. Active Navigation Highlight on Scroll
   */
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  function updateActiveNavOnScroll() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          const isMatch = link.getAttribute('href') === `#${sectionId}`;
          link.classList.toggle('active', isMatch);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSnapFAQs);
} else {
  initSnapFAQs();
}
