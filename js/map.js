// Threading Histories - Interactive Map JavaScript
// This file handles all map functionality, markers, filters, and interactions

// ============================================
// COLOR SCHEMES (Global scope)
// ============================================

// Status-based color scheme (PRIMARY - used for marker colors)
const statusColors = {
    'Thriving': '#16736d',    // Teal
    'Stable': '#b8956a',      // Tan
    'Declining': '#d97655',   // Terracotta
    'Disappeared': '#6b6b6b'  // Gray
};

// SVG icons for each craft type
const craftIcons = {
    'Weaving': `
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="2" height="20" fill="COLOR"/>
            <rect x="10" y="6" width="2" height="20" fill="COLOR"/>
            <rect x="14" y="6" width="2" height="20" fill="COLOR"/>
            <rect x="18" y="6" width="2" height="20" fill="COLOR"/>
            <rect x="22" y="6" width="2" height="20" fill="COLOR"/>
            <rect x="6" y="6" width="20" height="2" fill="COLOR"/>
            <rect x="6" y="12" width="20" height="2" fill="COLOR"/>
            <rect x="6" y="18" width="20" height="2" fill="COLOR"/>
            <rect x="6" y="24" width="20" height="2" fill="COLOR"/>
        </svg>
    `,
    'Dyeing': `
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8 C12 8, 10 12, 10 16 C10 20, 12 24, 16 24 C20 24, 22 20, 22 16 C22 12, 20 8, 16 8 Z" fill="COLOR"/>
            <ellipse cx="16" cy="12" rx="3" ry="2" fill="white" opacity="0.3"/>
        </svg>
    `,
    'Embroidery': `
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <line x1="16" y1="6" x2="10" y2="26" stroke="COLOR" stroke-width="2"/>
            <circle cx="16" cy="6" r="2" fill="COLOR"/>
            <ellipse cx="10" cy="26" rx="2" ry="3" fill="COLOR"/>
            <path d="M12 14 Q16 16 14 20" stroke="COLOR" stroke-width="1.5" fill="none"/>
            <path d="M18 12 Q20 14 18 18" stroke="COLOR" stroke-width="1.5" fill="none"/>
        </svg>
    `,
    'Beadwork': `
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="10" r="3" fill="COLOR"/>
            <circle cx="10" cy="16" r="3" fill="COLOR"/>
            <circle cx="22" cy="16" r="3" fill="COLOR"/>
            <circle cx="16" cy="22" r="3" fill="COLOR"/>
            <circle cx="16" cy="16" r="2" fill="COLOR" opacity="0.5"/>
        </svg>
    `
};

// ============================================
// MAP INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Map script loaded - starting initialization...');

    // Nigeria's geographic bounds
    const nigeriaBounds = [
        [4.0, 2.5],    // Southwest corner
        [14.0, 15.0]   // Northeast corner
    ];

    // Initialize map centered on Nigeria with restricted bounds
    const map = L.map('map', {
        center: [9.0820, 8.6753],
        zoom: 7.5,
        minZoom: 6,
        maxZoom: 18,
        maxBounds: nigeriaBounds,
        maxBoundsViscosity: 1.0
    });

    console.log('Map object created with Nigeria bounds');

    // Add OpenStreetMap base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
        minZoom: 5
    }).addTo(map);
    console.log('Base layer added');

    // Force map to resize properly
    setTimeout(function() {
        map.invalidateSize();
        console.log('Map resized and ready');
    }, 100);

    // Store all markers
    let allMarkers = [];
    
    // Create marker cluster group
    let markerClusterGroup = L.markerClusterGroup({
        maxClusterRadius: 50,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        disableClusteringAtZoom: 10
    });

    // Function to create custom marker icons
    function createCustomMarker(coords, props) {
        const latLng = [coords[1], coords[0]];
        const statusColor = statusColors[props.status] || '#999999';
        
        let svgIcon = craftIcons[props.craft_type];
        
        if (!svgIcon) {
            console.warn(`No icon found for craft type: ${props.craft_type}`);
            svgIcon = `
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="10" fill="COLOR"/>
                </svg>
            `;
        }
        
        const coloredSvg = svgIcon.replace(/COLOR/g, statusColor);
        
        console.log(`Creating marker for ${props.location_name} (${props.craft_type} - ${props.status}) at [${latLng}]`);
        
        const customIcon = L.divIcon({
            className: 'custom-svg-marker',
            html: `
                <div style="position: relative; width: 32px; height: 32px;">
                    ${coloredSvg}
                    <div style="
                        position: absolute;
                        bottom: -8px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 0;
                        height: 0;
                        border-left: 6px solid transparent;
                        border-right: 6px solid transparent;
                        border-top: 8px solid ${statusColor};
                    "></div>
                </div>
            `,
            iconSize: [48, 58],
            iconAnchor: [24, 58],
            popupAnchor: [0, -58]
        });
        
        const marker = L.marker(latLng, { 
            icon: customIcon,
            title: props.location_name
        });
        
        const popupContent = `
            <div class="popup-content">
                <div class="popup-title">${props.location_name}</div>
                <div class="popup-info">
                    <strong>${props.craft_type}</strong> - ${props.specific_technique}<br>
                    <em>${props.ethnolinguistic_group}</em><br>
                    Period: ${props.time_period_start}-${props.time_period_end}<br>
                    Status: <span style="color: ${statusColor}; font-weight: bold;">${props.status}</span>
                </div>
                <a href="#" class="popup-link" onclick="window.showDetailSidebar('${props.location_id}'); return false;">
                    View Details →
                </a>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
        });
        
        marker.properties = props;
        return marker;
    }

    // Load GeoJSON data
    async function loadMapData() {
        try {
            console.log('Fetching GeoJSON data from: data/threading_histories_dataset.geojson');
            
            const response = await fetch('data/threading_histories_dataset.geojson');
            
            if (!response.ok) {
                throw new Error(`Failed to load data: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('GeoJSON data loaded successfully:', data);
            console.log(`Processing ${data.features.length} locations...`);
            
            data.features.forEach((feature, index) => {
                const props = feature.properties;
                const coords = feature.geometry.coordinates;
                
                console.log(`[${index + 1}] Creating marker for:`, props.location_name);
                
                const marker = createCustomMarker(coords, props);
                
                allMarkers.push({
                    marker: marker,
                    properties: props
                });
                
                markerClusterGroup.addLayer(marker);
            });
            
            map.addLayer(markerClusterGroup);
            
            console.log(`✓ Successfully loaded ${allMarkers.length} markers`);
            console.log('Marker cluster group added to map');
            
         if (allMarkers.length > 0) {
                map.setView([9.0820, 8.6753], 7);
            }
            
        } catch (error) {
            console.error('ERROR loading map data:', error);
            alert(`Error loading map data: ${error.message}`);
        }
    }

    // Show detail sidebar (GLOBAL FUNCTION)
    window.showDetailSidebar = function(locationId) {
        console.log('Opening detail sidebar for location:', locationId);
        
        const locationData = allMarkers.find(m => m.properties.location_id === locationId);
        
        if (!locationData) {
            console.error('Location not found:', locationId);
            return;
        }
        
        const props = locationData.properties;
        const statusColor = statusColors[props.status] || '#999999';
        
        const detailHTML = `
            <h3>${props.location_name}</h3>
            
            <div class="mb-3">
                <span class="badge" style="background-color: #2C5F5D; color: white;">
                    ${props.craft_type}
                </span>
                <span class="badge" style="background-color: ${statusColor}; color: white;">
                    ${props.status}
                </span>
            </div>
            
            <div class="detail-tabs">
                <button class="detail-tab active" onclick="window.switchTab('history')">History</button>
                <button class="detail-tab" onclick="window.switchTab('context')">Context</button>
                <button class="detail-tab" onclick="window.switchTab('impact')">Colonial Impact</button>
                <button class="detail-tab" onclick="window.switchTab('sources')">Sources</button>
            </div>
            
            <div id="history" class="tab-content active">
                <h5>Textile Tradition</h5>
                <p><strong>Technique:</strong> ${props.specific_technique}</p>
                <p><strong>Ethnic Group:</strong> ${props.ethnolinguistic_group}</p>
                <p><strong>Time Period:</strong> ${props.time_period_start}-${props.time_period_end}</p>
                <p>${props.description}</p>
            </div>
            
            <div id="context" class="tab-content">
                <h5>Historical Context</h5>
                <p>${props.historical_context}</p>
            </div>
            
            <div id="impact" class="tab-content">
                <h5>Colonial Impact</h5>
                <p>${props.colonial_impact}</p>
            </div>
            
            <div id="sources" class="tab-content">
                <h5>Sources</h5>
                <p>${props.source_citation}</p>
            </div>
        `;
        
        document.getElementById('detailContent').innerHTML = detailHTML;
        document.getElementById('detailSidebar').classList.add('active');
    };

    // Switch tabs (GLOBAL FUNCTION)
    window.switchTab = function(tabName) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        document.querySelectorAll('.detail-tab').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.getElementById(tabName).classList.add('active');
        event.target.classList.add('active');
    };

    // Close detail sidebar
    document.getElementById('closeSidebar').addEventListener('click', function() {
        document.getElementById('detailSidebar').classList.remove('active');
    });

    // Apply filters
    function applyFilters() {
        console.log('Applying filters...');
        
        const selectedCrafts = Array.from(document.querySelectorAll('.craft-filter:checked'))
            .map(cb => cb.value);
        const selectedEthnic = Array.from(document.querySelectorAll('.ethnic-filter:checked'))
            .map(cb => cb.value);
        
        markerClusterGroup.clearLayers();
        
        let visibleCount = 0;
        
        allMarkers.forEach(item => {
            const props = item.properties;
            let show = true;
            
            if (!selectedCrafts.includes(props.craft_type)) {
                show = false;
            }
            
            if (!selectedEthnic.includes(props.ethnolinguistic_group)) {
                show = false;
            }
            
            if (show) {
                markerClusterGroup.addLayer(item.marker);
                visibleCount++;
            }
        });
        
        console.log(`${visibleCount} of ${allMarkers.length} markers visible`);
    }

    // Event listeners for filters
    document.querySelectorAll('.craft-filter, .ethnic-filter').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Reset filters
    document.getElementById('resetFilters').addEventListener('click', function() {
        console.log('Resetting filters...');
        
        document.querySelectorAll('.craft-filter, .ethnic-filter').forEach(cb => {
            cb.checked = true;
        });
        
        applyFilters();
    });

    // Initialize the map
    loadMapData();
    
    console.log('✓ Map initialization complete');

}); // End DOMContentLoaded
