let templateID;
document.getElementById("1660762288").addEventListener("click", (e) => {
    if (!e.target.closest("span[data-templateId]")) return;
    templateID = e.target.dataset.templateId;
});
function filterTpl(ids) {
    document.querySelectorAll('.tpl-on-page').forEach(item => {
        if (!ids.length) {
            item.classList.remove('hidden');
            return;
        }
        if (ids.indexOf(item.dataset.id) > -1) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}
(async function () {
    document.querySelector('#search input').addEventListener('input', e => {
        const search = e.target.value.toLowerCase();
        document.querySelectorAll('div.dmRespCol[data-id]').forEach(el => {
            if (el.querySelector('h3').innerHTML.toLowerCase().indexOf(search) > -1) {
                if (!el.classList.contains('show')) {
                    el.classList.add('show');
                }
            } else {
                el.classList.remove('show');
            }
        })
    });
    document.querySelector('#filters').addEventListener('change', e => {
        if (!e.target.closest('select')) return;
        filterTpl(e.target.value ? e.target.value.split(',') : []);
    });
    const templates = await fetch("https://payments.viib.ca/list-templates")
        .then((res) => res.json())
        .catch();
    const categories = await fetch("https://payments.viib.ca/list-categories")
        .then((res) => res.json())
        .catch();
    const onptionsMarkup = categories.map(ctg => `<option value="${ctg.templates.join()}">${ctg.name}</option>`).join('');
    document.getElementById("filters")
        .insertAdjacentHTML("afterbegin", `
            <p>Categories:</p> <select id="filter-caregories"><option value="">All templates</option>${onptionsMarkup}</select>
          `);
    templates.forEach((tpl) => {
        const markup = ` <div data-id="${tpl.template_id}"
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
                  class="u_1242938565 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient"
                  target="_blank"
                  href="https://payments.viib.ca?template_id=${tpl.template_id}"
                >
                  <span class="iconBg">
                    <span class="icon hasFontIcon icon-star"> </span>
                  </span>
                  <span class="text buy-now-button" data-template-id="${tpl.template_id}">
                    BUY NOW
                  </span>
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
        </div>`;
        document
            .getElementById("1957394266")
            .insertAdjacentHTML("afterbegin", markup);
    });
})();
