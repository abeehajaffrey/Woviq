'use strict';
// Progressive enhancement: content and direct contact links work without JS.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
if (menuButton && navigation) {
  document.documentElement.classList.add('nav-enhanced');
  menuButton.hidden = false;
  const closeMenu = () => { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  window.matchMedia('(min-width:851px)').addEventListener('change', closeMenu);
}

const tabs = [...document.querySelectorAll('.service-tab')];
const panels = [...document.querySelectorAll('.service-panel')];
if (tabs.length) {
  document.querySelector('.service-tabs').setAttribute('role', 'tablist');
  document.querySelector('.service-tabs').setAttribute('aria-label', 'Explore our capabilities');
  const selectTab = (index, focus = false) => {
    tabs.forEach((tab, i) => { tab.setAttribute('role', 'tab'); tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; });
    panels.forEach((panel, i) => { panel.hidden = i !== index; panel.setAttribute('role', 'tabpanel'); panel.setAttribute('tabindex', '0'); });
    if (focus) tabs[index].focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault(); selectTab(next, true);
    });
  });
  selectTab(0);
}

const orbitNodes = [...document.querySelectorAll('.orbit-node')];
const orbitMessages = ['A clearer website. An easier next step for customers.', 'From product discovery to checkout, connected.', 'Give your team software that fits the way they work.', 'Connect enquiries, people and repetitive workflows.'];
orbitNodes.forEach((node, index) => node.addEventListener('click', () => {
  orbitNodes.forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
  const readout = document.querySelector('.orbit-readout');
  if (readout) readout.textContent = orbitMessages[index];
}));

const demoReplies = {
  services: ['What can Woviq build for my business?', 'We build websites, commerce experiences, custom software and AI workflows. A project starts with your business needs.'],
  handoff: ['Can I speak to a person?', 'Absolutely. A real deployment can route the conversation to your team. This is a scripted concept, so use the project enquiry link to contact Woviq.'],
  scope: ['How much would a chatbot cost?', 'Scope depends on your channels, knowledge sources and integrations. We quote implementation separately from optional support and platform usage.']
};
document.querySelectorAll('[data-demo]').forEach(button => button.addEventListener('click', () => {
  const reply = demoReplies[button.dataset.demo];
  if (!reply) return;
  document.querySelectorAll('[data-demo]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('#demo-question').textContent = reply[0];
  document.querySelector('#demo-answer').textContent = reply[1];
}));

// Optional integration hook. No analytics SDK, storage or network calls by default.
function trackAction(name) { document.dispatchEvent(new CustomEvent('woviq:interaction', {detail:{name}})); }
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => link.addEventListener('click', () => trackAction('whatsapp_click')));
document.querySelectorAll('a[href^="mailto:"]').forEach(link => link.addEventListener('click', () => trackAction('email_click')));
document.querySelectorAll('[data-cta]').forEach(link => link.addEventListener('click', () => trackAction('main_cta_click')));

document.querySelectorAll('.enquiry-form').forEach(form => {
  let started = false;
  const review = form.querySelector('.review-message');
  const preview = form.querySelector('.message-preview');
  const sendLink = form.querySelector('.send-whatsapp');
  const status = form.querySelector('.form-status');
  const makeMessage = () => {
    const data = new FormData(form);
    const value = name => String(data.get(name) || '').trim();
    return ['Hello Woviq, I would like to discuss a project.', '', 'Name: ' + value('name'), value('business') ? 'Business: ' + value('business') : '', 'Contact: ' + value('contact'), 'Service: ' + value('service'), value('budget') ? 'Budget: ' + value('budget') : '', '', 'Project: ' + value('details')].filter((line, i, list) => line || (i && list[i-1])).join('\n');
  };
  form.addEventListener('focusin', () => { if (!started) { started = true; trackAction('form_start'); } });
  const invalidate = () => { review.hidden = true; sendLink.removeAttribute('href'); status.textContent = ''; };
  form.addEventListener('input', invalidate);
  form.addEventListener('change', invalidate);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const required = [...form.querySelectorAll('[required]')];
    required.forEach(field => field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.'));
    if (!form.reportValidity()) return;
    const message = makeMessage();
    preview.textContent = message;
    sendLink.href = 'https://wa.me/923015219002?text=' + encodeURIComponent(message);
    review.hidden = false;
    status.textContent = 'Your message is ready. Review it below, then open WhatsApp to send it.';
    review.focus({preventScroll:true});
  });
  form.querySelectorAll('[required]').forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
  sendLink.addEventListener('click', () => { trackAction('whatsapp_click'); status.textContent = 'WhatsApp will open with your draft. Your enquiry reaches us only after you press Send there.'; });
});
