// Lab Equipment & Toolchains Component — Essential Hardware & Software Stack

export function renderLabEquipment(lab) {
  const topEquip = (lab.equipment || []).slice(0, 4);
  const topTech = (lab.technologies || []).slice(0, 2);

  return `
    <section class="lab-section lab-equipment-section" id="lab-equipment" aria-label="Equipment & Tools of ${lab.name}">
      <div class="lab-shell">
        
        <div class="lab-section-header reveal">
          <div class="lab-section-kicker">
            <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
            <span>02 &bull; HARDWARE &amp; SOFTWARE INFRASTRUCTURE</span>
          </div>
          <h2 class="lab-section-title">Major Testbenches &amp; Toolchains</h2>
          <p class="lab-section-subtitle">Core instrumentation, development boards, and industry-grade software suites mastered in this laboratory.</p>
        </div>

        <div class="lab-compact-equipment-grid">
          ${topEquip.map((item, index) => `
            <div class="lab-compact-equip-card reveal">
              <div class="compact-equip-top">
                <span class="compact-equip-badge">TESTBENCH 0${index + 1}</span>
                <span class="compact-equip-status">● Operational</span>
              </div>
              <h3 class="compact-equip-name">${item.name}</h3>
              <p class="compact-equip-desc">${item.desc}</p>
            </div>
          `).join('')}

          ${topTech.map(tech => `
            <div class="lab-compact-equip-card tech-suite reveal">
              <div class="compact-equip-top">
                <span class="compact-equip-badge software">${tech.category || 'SOFTWARE SUITE'}</span>
                <span class="compact-equip-status" style="color: ${lab.accentColor};">⚡ Industry Tool</span>
              </div>
              <h3 class="compact-equip-name">${tech.name}</h3>
              <p class="compact-equip-desc">${tech.desc}</p>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
