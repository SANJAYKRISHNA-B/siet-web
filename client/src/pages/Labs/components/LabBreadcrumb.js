// Lab Breadcrumb & Back Navigation Component

export function renderLabBreadcrumb(lab) {
  return `
    <nav class="lab-breadcrumb-nav" aria-label="Breadcrumb">
      <div class="lab-shell">
        <div class="lab-breadcrumb-flex">
          <ol class="lab-breadcrumb-list">
            <li><a href="#/">Home</a></li>
            <li class="sep" aria-hidden="true">/</li>
            <li class="active" aria-current="page">${lab.name}</li>
          </ol>

          <a href="#/special-labs" class="lab-back-btn" aria-label="Return to laboratories section">
            <span class="back-arrow" aria-hidden="true">←</span>
            <span>Back to Labs</span>
          </a>
        </div>
      </div>
    </nav>
  `;
}
