/**
 * Sri Shakthi Tech Park — 360° Interactive Panoramic Viewer
 * Modular, touch/mouse enabled panoramic explorer for techpark-hero-wide and techpark-local.
 */

export const TECHPARK_VIEWPOINTS = [
  {
    id: 'hero-skyline',
    tag: 'VIEWPOINT 01',
    badge: 'AERIAL SKYLINE',
    title: 'Sri Shakthi Tech Park — Campus Skyline',
    subtitle: 'Flagship Architecture, IT Towers & Palm Promenade',
    desc: 'Wide panoramic landscape showcasing the multi-storey Tech Park towers, smart infrastructure, and student plaza.',
    src: '/brand/techpark-hero-wide.png',
    aspect: 1672 / 940,
    hotspots: [
      {
        id: 'to-plaza',
        title: 'Step into Innovation Plaza',
        targetId: 'ground-plaza',
        x: 64,
        y: 68,
        icon: '📍'
      }
    ]
  },
  {
    id: 'ground-plaza',
    tag: 'VIEWPOINT 02',
    badge: 'GROUND PROMENADE',
    title: 'Sri Shakthi Tech Park — Innovation Plaza',
    subtitle: 'High-Resolution Research Pods, Department Labs & Concourse',
    desc: 'Ground-level perspective of the collaborative corridors, incubation centers, and student engineering workspaces.',
    src: '/brand/techpark-local.png',
    aspect: 2824 / 1472,
    hotspots: [
      {
        id: 'to-skyline',
        title: 'View Aerial Campus Skyline',
        targetId: 'hero-skyline',
        x: 32,
        y: 38,
        icon: '🏢'
      }
    ]
  }
];

let activeInstance = null;

export function openTechPark360(initialViewpointId = 'hero-skyline') {
  if (activeInstance) {
    activeInstance.close();
  }
  const headers = document.querySelectorAll('.institution-header-v4, .notice, #site-header');
  headers.forEach(el => {
    el.setAttribute('data-tp360-prev-vis', el.style.visibility || '');
    el.style.visibility = 'hidden';
  });

  activeInstance = new TechPark360Viewer(initialViewpointId);
  return activeInstance;
}

export function closeTechPark360() {
  if (activeInstance) {
    activeInstance.close();
    activeInstance = null;
  }
}

class TechPark360Viewer {
  constructor(initialId) {
    this.currentViewpoint = TECHPARK_VIEWPOINTS.find(v => v.id === initialId) || TECHPARK_VIEWPOINTS[0];
    this.panX = 0; // Offset in pixels
    this.panY = 0;
    this.zoom = 1.0;
    this.minZoom = 1.0;
    this.maxZoom = 2.4;

    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.vx = 0;
    this.vy = 0;
    this.animFrameId = null;

    this.autoPan = true;
    this.autoPanDirection = 1;
    this.autoPanSpeed = 0.35;
    this.lastUserInteraction = 0;

    // Multi-touch pinch zoom state
    this.initialPinchDistance = null;
    this.initialPinchZoom = 1.0;

    this.render();
    this.updateCanvasDimensions();
    this.bindEvents();
    this.updateView();
    this.startLoop();
  }

  render() {
    const v = this.currentViewpoint;
    const overlayHtml = `
      <div class="tp360-overlay" id="tp360-viewer" role="dialog" aria-modal="true" aria-label="Tech Park 360 Interactive View">
        <!-- Top Navigation Header -->
        <header class="tp360-header">
          <div class="tp360-header-info">
            <div class="tp360-brand-crest" aria-hidden="true">
              <img src="/brand/siet-logo.png" alt="SIET">
            </div>
            <div class="tp360-title-col">
              <div class="tp360-badge-row">
                <span class="tp360-pill-live">
                  <span class="tp360-dot-pulse" aria-hidden="true"></span>
                  360° Interactive Tour
                </span>
                <span class="tp360-tag" id="tp360-vp-tag">${v.tag} • ${v.badge}</span>
              </div>
              <h2 class="tp360-title" id="tp360-vp-title">${v.title}</h2>
            </div>
          </div>

          <div class="tp360-header-actions">
            <button type="button" class="tp360-btn-icon js-tp360-fullscreen" title="Toggle Fullscreen" aria-label="Toggle Fullscreen">
              <span class="ctrl-icon">⛶</span>
            </button>
            <button type="button" class="tp360-btn-close js-tp360-close" title="Exit 360° Viewer (Esc)" aria-label="Close 360 View">
              ✕
            </button>
          </div>
        </header>

        <!-- Panoramic Stage -->
        <main class="tp360-stage" id="tp360-stage" aria-label="Interactive Pan & Zoom Stage">
          <div class="tp360-canvas-wrap" id="tp360-canvas-wrap">
            <img 
              src="${v.src}" 
              alt="${v.title}" 
              class="tp360-image-layer fade-in" 
              id="tp360-image" 
              draggable="false"
            >
            <div class="tp360-hotspots-container" id="tp360-hotspots">
              ${this.renderHotspots(v)}
            </div>
          </div>

          <!-- Initial Helper Banner -->
          <div class="tp360-gesture-hint" aria-hidden="true">
            <span>🖱️ Drag to look around</span>
            <span>•</span>
            <span>🔍 Scroll / Pinch to zoom</span>
          </div>
        </main>

        <!-- Bottom Controls & Viewpoint Switcher -->
        <footer class="tp360-bottom-hud">
          <!-- Viewpoint Pill Tabs -->
          <div class="tp360-viewpoint-switcher" role="tablist" aria-label="Tech Park Viewpoints">
            ${TECHPARK_VIEWPOINTS.map(vp => `
              <button 
                type="button" 
                class="tp360-vp-btn ${vp.id === v.id ? 'is-active' : ''}" 
                data-vpid="${vp.id}"
                role="tab"
                aria-selected="${vp.id === v.id ? 'true' : 'false'}"
              >
                <span class="tp360-vp-icon">${vp.id === 'hero-skyline' ? '🏢' : '🚶'}</span>
                <span>${vp.id === 'hero-skyline' ? 'Skyline Overview' : 'Innovation Plaza'}</span>
              </button>
            `).join('')}
          </div>

          <!-- Zoom & Camera Toolbar -->
          <div class="tp360-controls-bar">
            <button type="button" class="tp360-ctrl-btn js-tp360-zoom-out" title="Zoom Out (-)" aria-label="Zoom Out">
              −
            </button>
            <span class="tp360-zoom-indicator" id="tp360-zoom-val">100%</span>
            <button type="button" class="tp360-ctrl-btn js-tp360-zoom-in" title="Zoom In (+)" aria-label="Zoom In">
              +
            </button>
            <button type="button" class="tp360-ctrl-btn js-tp360-reset" title="Reset View (R)" aria-label="Reset Camera View">
              ⟲
            </button>
            <button type="button" class="tp360-ctrl-btn js-tp360-autopan is-active" id="tp360-autopan-btn" title="Toggle Auto-Pan (Space)" aria-label="Toggle Auto-Pan">
              ⏸
            </button>
            <div class="tp360-compass-indicator" title="Current Heading">
              <span class="tp360-compass-arrow" id="tp360-compass" aria-hidden="true">↑</span>
              <span id="tp360-heading-text">360°</span>
            </div>
          </div>
        </footer>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', overlayHtml);
    document.body.style.overflow = 'hidden';

    this.overlay = document.getElementById('tp360-viewer');
    this.stage = document.getElementById('tp360-stage');
    this.canvasWrap = document.getElementById('tp360-canvas-wrap');
    this.image = document.getElementById('tp360-image');
    this.hotspotsContainer = document.getElementById('tp360-hotspots');
    this.zoomValEl = document.getElementById('tp360-zoom-val');
    this.compassEl = document.getElementById('tp360-compass');
    this.autoPanBtn = document.getElementById('tp360-autopan-btn');

    // Trigger entrance transition
    requestAnimationFrame(() => {
      this.overlay?.classList.add('is-open');
    });
  }

  renderHotspots(v) {
    if (!v.hotspots || !v.hotspots.length) return '';
    return v.hotspots.map(h => `
      <button 
        type="button" 
        class="tp360-hotspot js-tp360-hotspot" 
        data-target="${h.targetId}" 
        style="left: ${h.x}%; top: ${h.y}%;"
        title="${h.title}"
      >
        <span class="tp360-hotspot-pin" aria-hidden="true">${h.icon || '📍'}</span>
        <span>${h.title}</span>
      </button>
    `).join('');
  }

  switchViewpoint(id) {
    if (this.currentViewpoint.id === id) return;
    const next = TECHPARK_VIEWPOINTS.find(v => v.id === id);
    if (!next) return;

    this.currentViewpoint = next;
    this.panX = 0;
    this.panY = 0;
    this.zoom = 1.0;
    this.vx = 0;
    this.vy = 0;

    // Update Header Text
    const tagEl = document.getElementById('tp360-vp-tag');
    const titleEl = document.getElementById('tp360-vp-title');
    if (tagEl) tagEl.textContent = `${next.tag} • ${next.badge}`;
    if (titleEl) titleEl.textContent = next.title;

    // Update Switcher Buttons
    document.querySelectorAll('.tp360-vp-btn').forEach(btn => {
      const active = btn.dataset.vpid === next.id;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    // Crossfade Image
    if (this.image) {
      this.image.classList.remove('fade-in');
      this.image.classList.add('fade-out');
      setTimeout(() => {
        this.image.src = next.src;
        this.image.alt = next.title;
        this.image.onload = () => {
          this.image.classList.remove('fade-out');
          this.image.classList.add('fade-in');
          this.hotspotsContainer.innerHTML = this.renderHotspots(next);
          this.updateCanvasDimensions();
          this.updateView();
        };
      }, 200);
    }
  }

  bindEvents() {
    // Close events
    this.onCloseClick = () => this.close();
    this.overlay.querySelector('.js-tp360-close')?.addEventListener('click', this.onCloseClick);

    // Keyboard controls
    this.onKeyDown = e => {
      if (e.key === 'Escape') this.close();
      if (e.key === '+' || e.key === '=') this.zoomIn();
      if (e.key === '-' || e.key === '_') this.zoomOut();
      if (e.key === 'r' || e.key === 'R') this.resetView();
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        this.toggleAutoPan();
      }
      if (e.key === 'ArrowLeft') { this.panX += 40; this.updateView(); }
      if (e.key === 'ArrowRight') { this.panX -= 40; this.updateView(); }
      if (e.key === 'ArrowUp') { this.panY += 30; this.updateView(); }
      if (e.key === 'ArrowDown') { this.panY -= 30; this.updateView(); }
    };
    window.addEventListener('keydown', this.onKeyDown);

    // Viewpoint Switcher Tabs
    this.onSwitcherClick = e => {
      const btn = e.target.closest('.tp360-vp-btn');
      if (btn && btn.dataset.vpid) {
        this.switchViewpoint(btn.dataset.vpid);
      }
    };
    this.overlay.querySelector('.tp360-viewpoint-switcher')?.addEventListener('click', this.onSwitcherClick);

    // Hotspots in Canvas
    this.onHotspotClick = e => {
      const spot = e.target.closest('.js-tp360-hotspot');
      if (spot && spot.dataset.target) {
        this.switchViewpoint(spot.dataset.target);
      }
    };
    this.hotspotsContainer?.addEventListener('click', this.onHotspotClick);

    // Toolbar buttons
    this.overlay.querySelector('.js-tp360-zoom-in')?.addEventListener('click', () => this.zoomIn());
    this.overlay.querySelector('.js-tp360-zoom-out')?.addEventListener('click', () => this.zoomOut());
    this.overlay.querySelector('.js-tp360-reset')?.addEventListener('click', () => this.resetView());
    this.overlay.querySelector('.js-tp360-autopan')?.addEventListener('click', () => this.toggleAutoPan());

    // Fullscreen button
    this.overlay.querySelector('.js-tp360-fullscreen')?.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        this.overlay.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    });

    // Mouse Drag on Stage
    this.onMouseDown = e => {
      if (e.target.closest('.tp360-hotspot') || e.target.closest('button')) return;
      this.isDragging = true;
      this.stage.classList.add('is-dragging');
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      this.vx = 0;
      this.vy = 0;
      this.lastUserInteraction = Date.now();
    };

    this.onMouseMove = e => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;
      this.panX += dx;
      this.panY += dy;
      this.vx = dx;
      this.vy = dy;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      this.lastUserInteraction = Date.now();
      this.updateView();
    };

    this.onMouseUp = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.stage?.classList.remove('is-dragging');
      this.lastUserInteraction = Date.now();
    };

    this.stage.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);

    // Mouse Wheel Zoom
    this.onWheel = e => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.15 : -0.15;
      this.setZoom(this.zoom + delta);
      this.lastUserInteraction = Date.now();
    };
    this.stage.addEventListener('wheel', this.onWheel, { passive: false });

    // Touch Support (Single finger drag + Two finger pinch-to-zoom)
    this.onTouchStart = e => {
      if (e.target.closest('.tp360-hotspot') || e.target.closest('button')) return;
      this.lastUserInteraction = Date.now();

      if (e.touches.length === 1) {
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.lastX = e.touches[0].clientX;
        this.lastY = e.touches[0].clientY;
        this.vx = 0;
        this.vy = 0;
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        this.initialPinchDistance = Math.hypot(dx, dy);
        this.initialPinchZoom = this.zoom;
      }
    };

    this.onTouchMove = e => {
      this.lastUserInteraction = Date.now();
      if (this.isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - this.lastX;
        const dy = e.touches[0].clientY - this.lastY;
        this.panX += dx;
        this.panY += dy;
        this.vx = dx;
        this.vy = dy;
        this.lastX = e.touches[0].clientX;
        this.lastY = e.touches[0].clientY;
        this.updateView();
      } else if (e.touches.length === 2 && this.initialPinchDistance) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const scale = dist / this.initialPinchDistance;
        this.setZoom(this.initialPinchZoom * scale);
      }
    };

    this.onTouchEnd = e => {
      if (e.touches.length === 0) {
        this.isDragging = false;
        this.initialPinchDistance = null;
        this.lastUserInteraction = Date.now();
      }
    };

    this.stage.addEventListener('touchstart', this.onTouchStart, { passive: true });
    window.addEventListener('touchmove', this.onTouchMove, { passive: true });
    window.addEventListener('touchend', this.onTouchEnd, { passive: true });

    // Window resize handler
    this.onResize = () => {
      this.updateCanvasDimensions();
      this.updateView();
    };
    window.addEventListener('resize', this.onResize);

    // Double tap/click to zoom
    this.onDblClick = () => {
      this.setZoom(this.zoom > 1.3 ? 1.0 : 1.6);
      this.lastUserInteraction = Date.now();
    };
    this.stage.addEventListener('dblclick', this.onDblClick);
  }

  updateCanvasDimensions() {
    if (!this.stage || !this.canvasWrap) return;
    const stageW = this.stage.clientWidth || window.innerWidth;
    const stageH = this.stage.clientHeight || window.innerHeight;
    const aspect = this.currentViewpoint.aspect || (16 / 9);

    // Ensure the canvas fully covers the stage height and width with extra panoramic pan buffer
    let h = Math.max(stageH * 1.05, (stageW / aspect) * 1.05);
    let w = h * aspect;

    // Guarantee panoramic width (at least 1.35x stage width) for smooth drag
    if (w < stageW * 1.35) {
      w = stageW * 1.35;
      h = w / aspect;
    }

    this.canvasWidth = Math.round(w);
    this.canvasHeight = Math.round(h);

    this.canvasWrap.style.width = `${this.canvasWidth}px`;
    this.canvasWrap.style.height = `${this.canvasHeight}px`;

    this.clampBounds();
  }

  setZoom(val) {
    this.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, val));
    if (this.zoomValEl) {
      this.zoomValEl.textContent = `${Math.round(this.zoom * 100)}%`;
    }
    this.updateView();
  }

  zoomIn() {
    this.setZoom(this.zoom + 0.25);
  }

  zoomOut() {
    this.setZoom(this.zoom - 0.25);
  }

  resetView() {
    this.panX = 0;
    this.panY = 0;
    this.setZoom(1.0);
    this.vx = 0;
    this.vy = 0;
  }

  toggleAutoPan() {
    this.autoPan = !this.autoPan;
    if (this.autoPanBtn) {
      this.autoPanBtn.textContent = this.autoPan ? '⏸' : '▶';
      this.autoPanBtn.classList.toggle('is-active', this.autoPan);
    }
  }

  clampBounds() {
    if (!this.stage || !this.canvasWidth || !this.canvasHeight) return;
    const stageWidth = this.stage.clientWidth || window.innerWidth;
    const stageHeight = this.stage.clientHeight || window.innerHeight;

    const renderedW = this.canvasWidth * this.zoom;
    const renderedH = this.canvasHeight * this.zoom;

    // Maximum distance from center without revealing stage edges
    const maxBoundX = Math.max(0, (renderedW - stageWidth) / 2);
    const maxBoundY = Math.max(0, (renderedH - stageHeight) / 2);

    this.panX = Math.max(-maxBoundX, Math.min(maxBoundX, this.panX));
    this.panY = Math.max(-maxBoundY, Math.min(maxBoundY, this.panY));
  }

  updateView() {
    this.clampBounds();
    if (this.canvasWrap) {
      this.canvasWrap.style.transform = `translate(calc(-50% + ${this.panX.toFixed(1)}px), calc(-50% + ${this.panY.toFixed(1)}px)) scale(${this.zoom.toFixed(3)})`;
    }

    // Update compass orientation and heading readout
    if (this.compassEl) {
      const headingDeg = (this.panX * 0.3) % 360;
      this.compassEl.style.transform = `rotate(${headingDeg.toFixed(1)}deg)`;
    }
    const headingTextEl = document.getElementById('tp360-heading-text');
    if (headingTextEl) {
      let deg = Math.round(((-this.panX / (this.canvasWidth || 1000)) * 180 + 360) % 360);
      headingTextEl.textContent = `${deg}°`;
    }
  }

  startLoop() {
    const loop = () => {
      // Inertia drag decay
      if (!this.isDragging) {
        if (Math.abs(this.vx) > 0.1 || Math.abs(this.vy) > 0.1) {
          this.panX += this.vx;
          this.panY += this.vy;
          this.vx *= 0.92;
          this.vy *= 0.92;
          this.updateView();
        } else {
          this.vx = 0;
          this.vy = 0;

          // Ambient auto-pan when user is idle
          const idleTime = Date.now() - this.lastUserInteraction;
          if (this.autoPan && idleTime > 1800) {
            this.panX += this.autoPanSpeed * this.autoPanDirection;
            const stageWidth = this.stage ? this.stage.clientWidth : 1200;
            const renderedW = (this.canvasWidth || stageWidth * 1.35) * this.zoom;
            const maxBoundX = Math.max(0, (renderedW - stageWidth) / 2);
            const limit = Math.max(10, maxBoundX * 0.92);
            if (this.panX >= limit) {
              this.panX = limit;
              this.autoPanDirection = -1;
            } else if (this.panX <= -limit) {
              this.panX = -limit;
              this.autoPanDirection = 1;
            }
            this.updateView();
          }
        }
      }

      this.animFrameId = requestAnimationFrame(loop);
    };

    this.animFrameId = requestAnimationFrame(loop);
  }

  close() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }

    const headers = document.querySelectorAll('.institution-header-v4, .notice, #site-header');
    headers.forEach(el => {
      const prev = el.getAttribute('data-tp360-prev-vis');
      el.style.visibility = prev !== null ? prev : '';
      el.removeAttribute('data-tp360-prev-vis');
    });

    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('resize', this.onResize);

    if (this.overlay) {
      this.overlay.classList.remove('is-open');
      setTimeout(() => {
        this.overlay.remove();
        document.body.style.overflow = '';
      }, 250);
    }
  }
}
