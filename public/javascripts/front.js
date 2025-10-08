let templateID;
let currChunk = 0;
let templatesAll;
let templatesShow;
let loading = false;
let selectTpl = false;
let resetModal = true;

document.getElementById("1660762288").addEventListener("click", (e) => {
  if (!e.target.closest("span[data-templateId]")) return;
  templateID = e.target.dataset.templateId;
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function filterTpl() {
  const search = document.querySelector('#search input').value.toLowerCase();
  const valueCategory = document.querySelector('#filter-caregories').value;
  const ids = valueCategory ? valueCategory.split(',') : []
  currChunk = 0;

  templatesShow = templatesAll;

  if (search) {
    templatesShow = templatesShow.filter(t => t.template_name.toLowerCase().indexOf(search) > -1);
  }
  if (ids.length > 0) {
    templatesShow = templatesShow.filter(t => ids.indexOf(t.template_id.toString()) > -1)
  }

  loadChunk(true);
}

function tplToHtml(tpl) {
  return `<div data-id="${tpl.template_id}"
          class="dmRespCol show tpl-on-page empty-column large-3 medium-6 small-12">
          <div
            class="u_1417806969 dmNewParagraph"
            data-dmtmpl="true"
            data-element-type="paragraph"
            data-version="5"
            style="transition: opacity 1s ease-in-out 0s"
            data-uialign="center"
          >
            <h3 class="m-size-19 text-align-center size-24">
              <span
                style="display: initial; font-weight: bold"
                class="m-font-size-19 font-size-24"
                no_space_b="true"
                no_space_e="true"
              >${tpl.template_name}</span>
            </h3>
          </div>
          <div
            class="u_1243433783 imageWidget align-center hasFullWidth"
            editablewidget="true"
            data-element-type="image"
            dmle_widget="image"
            data-widget-type="image"
          >
            <a
              target="_blank"
              dm_dont_rewrite_url="false"
              href="${tpl.preview_url}"
              file="false"
            >
              <img src="${tpl.desktop_thumbnail_url}" alt="" class="template-image" data-dm-image-path="${tpl.desktop_thumbnail_url}" />
            </a>
          </div>
          <div class="u_1597333175 dmRespRow">
            <div class="dmRespColsWrapper">
              <div class="dmRespCol  empty-column large-6 medium-6 small-12">
                <a
                  data-display-type="block"
                  data-tpl-id="${tpl.template_id}"
                  class="u_1853582545 show-popup align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient preview-link-button"
                  file="false"
                  dmle_widget="dudaButtonLinkId"
                  data-element-type="dButtonLinkId"
                  dm_dont_rewrite_url="false"
                >
                  <span class="iconBg" >
                    <span class="icon hasFontIcon icon-star"> </span>
                  </span>
                  <span class="text"> START NOW </span>
                </a>
              </div>
              <div class="dmRespCol empty-column large-6 medium-6 small-12">
                <a
                  data-display-type="block"
                  class="u_1853582545 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient preview-link-button"
                  file="false"
                  href="${tpl.preview_url}"
                  target="_blank"
                  dmle_widget="dudaButtonLinkId"
                  data-element-type="dButtonLinkId"
                  dm_dont_rewrite_url="false"
                >
                  <span class="iconBg" >
                    <span class="icon hasFontIcon icon-star"> </span>
                  </span>
                  <span class="text"> VIEW </span>
                </a>
              </div>
            </div>
          </div>
        </div>`
}

function loadChunk(fresh = false) {
  loading = true;

  if (fresh)
    document.getElementById("1957394266").innerHTML = '';

  const chunkSize = 12;
  const templatesChunks = [];
  for (let i = 0; i < templatesShow.length; i += chunkSize) {
    const chunk = templatesShow.slice(i, i + chunkSize);
    templatesChunks.push(chunk);
  }

  if (!templatesChunks[currChunk]) return;

  document
    .getElementById("1957394266")
    .insertAdjacentHTML("beforeend", templatesChunks[currChunk].map(tplToHtml).join(''));

  loading = false;
}

async function createDudaAccaunt(email, name, tplId) {
  const res = await fetch('https://payments.viib.ca/create-account', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name, tplId })
  }).then(res => res.json()).catch(console.error);
}

function modalMarkup() {
  if (!resetModal) return;

  resetModal = false;

  if (document.querySelector('#start-modal')) {
    document.querySelector('#start-modal').remove();
  }

  const markup = `
  <style>
    .model-wrapper {
      width:100%;
      height:100%;
      position: fixed;
      top:0;
      left:0;
      display:none;
      z-index: 999;
    }
    .model-wrapper.active {
      display:block;
    }
    .model-mask {
      width:100%;
      height:100%;
      background-color: rgba(0,0,0,0.6)
    }
    .model-block {
      width: 500px;
      height: 480px;
      max-width: 90%;
      padding: 25px;
      border-radius: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.8);
    }
    .model-block h3 {
      font-size: 25px;
      text-align: center;
      font-family: var(--btn-text-font-family);
      margin-top: 50px;
    }
    .model-block input.error {
      outline: 1px solid red;
    }
    .model-block input::placeholder {
      color: black;
    }
    .model-block label {
      font-size: 16px;
      font-family: var(--btn-text-font-family);
      margin-bottom: 5px;
    }
    .model-block input {
      display: block;
      outline: 2px solid black;
      border-radius: 10px;
      height: 30px;
      padding: 0 10px;
      color: black;
      background-color: transparent; 
      font-family: var(--btn-text-font-family);
      width: 100%;
    }
    .model-block button:hover {
      border: 1px solid var(--btn-hover-border-t-color);
      background-color: transparent;
      color: var(--btn-hover-border-t-color);;
      background-image: none;
    }
    .model-block button {
      margin: 20px auto;
      padding: 5px 20px;
      display: block;
      width: 100%;
      background-color: black;
      border: 1px solid black;
      font-family: var(--btn-text-font-family);
      color: white; 
      font-size: 16px;
      border-radius: 20px;
    }
    .model-block p {
      font-size: 14px;
      font-family: var(--btn-text-font-family);
      margin-bottom: 10px;
      text-align: center;
      max-width: 400px;
      margin: 0 auto;
    }
    .model-block-content {
      margin: 0 auto;
      max-width: 100%;
      width: 280px;
    }
    #sing-up-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    #sing-up-button svg {
      width: 20px;
      height: 20px;
      fill: white;
    }
    #sing-up-button:hover svg {
      fill: black;
    }
  </style>
  <div id="start-modal" class="model-wrapper">
      <div class="model-block">
        <h3>Sign Up</h3>
        <div class="model-block-content">
          <label for="sing-up-name">Name</label>
          <input name="name" type="text" id="sing-up-name" />
          <br>
          <label for="sing-up-email">E-mail</label>
          <input name="email" type="email" id="sing-up-email" />
          <button id="sing-up-button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V14Z" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8.12037C5.3161 8.53217 4 9.95979 4 11.7692V17.3077C4 19.973 6.31545 22 9 22H15C17.6846 22 20 19.973 20 17.3077V11.7692C20 9.95979 18.6839 8.53217 17 8.12037V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V8.12037ZM15 7V8H9V7C9 6.64936 9.06015 6.31278 9.17071 6C9.58254 4.83481 10.6938 4 12 4C13.3062 4 14.4175 4.83481 14.8293 6C14.9398 6.31278 15 6.64936 15 7ZM6 11.7692C6 10.866 6.81856 10 8 10H16C17.1814 10 18 10.866 18 11.7692V17.3077C18 18.7208 16.7337 20 15 20H9C7.26627 20 6 18.7208 6 17.3077V11.7692Z" />
          </svg>
          Submit
        </button>
        </div>
        
        <p>
          <b>No Charges Until You're Ready</b><br>
          Build your website with full access to your chosen template.
          Explore, customize, and make edits at your own pace. You won't be charged until you decide to publish your site live.
        </p>
      </div>
      <div class="model-mask"></div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', markup);

  document.querySelector('.model-mask').addEventListener('click', e => {
    document.querySelector('.model-wrapper').classList.remove('active');
    modalMarkup();
  });

  document.querySelector('#sing-up-button').addEventListener('click', e => {
    const email = document.querySelector('#sing-up-email').value;
    const name = document.querySelector('#sing-up-name').value;

    let valid = true;

    if (!(validateEmail(email) && selectTpl)) {
      document.querySelector('#sing-up-email').classList.add('error');
      valid = false;
    } else {
      document.querySelector('#sing-up-email').classList.remove('error');
    }

    if (valid) {
      document.querySelector('.model-block').innerHTML = '<h3 style="margin-top: 75px;">Thank you. Please check your inbox for login information.</h3>';
      createDudaAccaunt(email, name, selectTpl);
      resetModal = true;
    }

  });

}

(async function () {
  modalMarkup();

  document.querySelector('#search input').addEventListener('input', e => {
    filterTpl();
  });

  document.querySelector('#filters').addEventListener('change', e => {
    if (!e.target.closest('select')) return;
    filterTpl();
  });
  document.getElementById('1957394266').addEventListener('click', e => {
    if (!e.target.closest('.show-popup')) return;
    const tplId = e.target.closest('.show-popup').dataset.tplId;
    selectTpl = tplId;
    document.querySelector('.model-wrapper').classList.add('active');
  });

  window.addEventListener('scroll', e => {
    if (loading) return;
    if (window.scrollY >= document.querySelector('.tpl-on-page:last-child')?.offsetTop) {
      currChunk++;
      loadChunk();
    }
  });

  templatesAll = await fetch("https://payments.viib.ca/list-templates")
    .then((res) => res.json())
    .catch();
  templatesAll.reverse();

  templatesShow = templatesAll;

  const categories = await fetch("https://payments.viib.ca/list-categories")
    .then((res) => res.json())
    .catch();

  const onptionsMarkup = categories.map(ctg => `<option value="${ctg.templates.join()}">${ctg.name}</option>`).join('');

  document
    .getElementById("filters")
    .insertAdjacentHTML("afterbegin", `<p>Categories:</p> <select id="filter-caregories"><option value="">All templates</option>${onptionsMarkup}</select>`);

  loadChunk();
})();
