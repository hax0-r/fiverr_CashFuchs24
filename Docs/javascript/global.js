const lenis = new Lenis({
  autoRaf: true,
});

// faq

function toggleAccordionFaq(index) {
  const contents = document.querySelectorAll('[id^="content-"]');
  const icons = document.querySelectorAll('[id^="icon-"]');

  contents.forEach((content, i) => {
    const icon = icons[i];
    if (i === index) {
      // Toggle the clicked one
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.classList.remove('rotate-180');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
      }
    } else {
      // Close all others
      content.style.maxHeight = '0';
      icon.classList.remove('rotate-180');
    }
  });
}