(()=>{
    var t = {
        2582: ()=>{
            window.addEventListener("load", (function() {
                for (var t = document.getElementsByClassName("accordion-menu-content"), e = 0; e < t.length; e++)
                    t[e].querySelector("h4").addEventListener("click", (function() {
                        this.parentElement.parentElement.classList.toggle("open")
                    }
                    ))
            }
            ))
        }
        ,
        1725: ()=>{
            var t = document.getElementById("allow")
              , e = document.getElementById("send_btn");
            null !== t && null !== e && (t.checked ? e.disabled = !1 : e.disabled = !0,
            t.addEventListener("change", (function(t) {
                !0 === t.target.checked ? e.disabled = !1 : e.disabled = !0
            }
            )))
        }
        ,
        1820: ()=>{
            window.addEventListener("load", (function() {
                try {
                    for (var t = document.querySelector(".nav-menu-mobile").querySelectorAll(".nav-elem:not(.secondary-menu-anchor)"), e = 0; e < t.length; e++)
                        t[e].addEventListener("click", (function() {
                            document.getElementById("menuToggle").querySelector("input").checked = !1,
                            document.body.style.overflowY = "auto"
                        }
                        ));
                    document.getElementById("menuToggle").querySelector("input").addEventListener("change", (function() {
                        this.checked ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "auto"
                    }
                    ))
                } catch (t) {
                    console.log("mobile menu not found")
                }
                try {
                    for (var i = document.querySelectorAll(".secondary-menu-anchor"), o = 0; o < i.length; o++)
                        i[o].addEventListener("click", (function(t) {
                            "A" === t.target.tagName ? (t.target.classList.toggle("open"),
                            console.log(t.target.parentElement.nextElementSibling),
                            t.target.nextElementSibling.classList.toggle("open")) : (t.target.parentElement.classList.toggle("open"),
                            console.log(t.target.parentElement.nextElementSibling),
                            t.target.parentElement.nextElementSibling.classList.toggle("open"))
                        }
                        ))
                } catch (t) {
                    console.log("secondary menu not found")
                }
                var n = document.querySelectorAll(".stylyzed-input");
                if (n.length > 0)
                    for (var s = 0; s < n.length; s++)
                        n[s].querySelector("input").addEventListener("change", (function() {
                            "" == this.value ? this.classList.remove("valid") : this.classList.add("valid")
                        }
                        ));
                document.cookie.split("; ").find((function(t) {
                    return t.startsWith("enable-contrast")
                }
                )) && (document.querySelector("body").classList.toggle("contrast-enable"),
                document.querySelector(".accessibility").querySelector("p").innerHTML = "Стандартна версія");
                try {
                    document.querySelector(".accessibility").addEventListener("click", (function() {
                        document.querySelector("body").classList.toggle("contrast-enable"),
                        document.querySelector("body").classList.contains("contrast-enable") ? (document.querySelector(".accessibility").querySelector("p").innerHTML = "Стандартна версія",
                        document.cookie = "enable-contrast=true; path=/;") : (document.querySelector(".accessibility").querySelector("p").innerHTML = "Людям із порушенням зору",
                        document.cookie = "enable-contrast=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")
                    }
                    ))
                } catch (t) {
                    console.log("accessibility menu not found")
                }
                for (var a = document.querySelectorAll(".close"), r = 0; r < a.length; r++)
                    a[r].addEventListener("click", (function(t) {
                        t.target.parentElement.classList.remove("active")
                    }
                    ));
                var h = document.querySelector(".search-icon");
                null != h && h.addEventListener("click", (function(t) {
                    t.target.parentElement.parentElement.querySelector(".search-window").classList.add("active")
                }
                ));
                var l = document.querySelector("#scroll-top");
                null != l && (window.onscroll = function() {
                    window.scrollY > 1200 ? l.classList.add("show") : l.classList.remove("show")
                }
                )
            }
            ))
        }
        ,
        2217: ()=>{
            window.addEventListener("load", (function() {
                if (null != document.querySelector("#hromada-info-map")) {
                    var t = L.map("hromada-info-map").setView(setView.coord, setView.zoom);
                    L.tileLayer("https://tiles.openstreetmap.org.ua/osm/{z}/{x}/{y}.png", {
                        attribution: '<a href="https://www.minregion.gov.ua/" rel="nofollow" target="_blank">Мінрегіон</a>; <a href="https://github.com/tomchadwin/qgis2web" target="_blank" rel="nofollow">qgis2web</a> &middot; <a href="https://qgis.org" rel="nofollow" target="_blank">QGIS</a> &copy; <a href="https://tiles.openstreetmap.org.ua/#6/48.959/32.311" rel="nofollow" target="_blank">OSM UA volunteer\'s server</a>'
                    }).addTo(t);
                    var e = L.icon({
                        iconUrl: "https://api.tiles.mapbox.com/v3/marker/pin-m-warehouse+1BCFC4.png",
                        iconSize: [30, 70]
                    })
                      , i = L.icon({
                        iconUrl: "https://api.tiles.mapbox.com/v3/marker/pin-l-town-hall+FF831A.png",
                        iconSize: [35, 90]
                    });
                    L.marker([mainLocaton.lat, mainLocaton.lon], {
                        icon: i,
                        riseOnHover: !0,
                        draggable: !1
                    }).addTo(t).bindPopup(mainLocaton.description, {
                        closeOnClick: !1,
                        autoClose: !1
                    }),
                    geoAreas.forEach((function(e) {
                        L.polygon(e, {
                            weight: 5,
                            color: "#1699B4",
                            fill: !0,
                            fillColor: "#1ACEC4"
                        }).addTo(t)
                    }
                    ));
                    for (var o = 0; o < locations.length; o++)
                        L.marker([locations[o].lat, locations[o].lon], {
                            icon: e,
                            riseOnHover: !0,
                            draggable: !1
                        }).addTo(t).bindPopup(locations[o].description, {
                            closeOnClick: !1,
                            autoClose: !1
                        })
                }
                if (null != document.querySelector("#cnap-map")) {
                    var n = L.map("cnap-map").setView(setView.coord, setView.zoom);
                    L.tileLayer("https://tiles.openstreetmap.org.ua/osm/{z}/{x}/{y}.png", {
                        attribution: '<a href="https://www.minregion.gov.ua/" rel="nofollow" target="_blank">Мінрегіон</a>; <a href="https://github.com/tomchadwin/qgis2web" target="_blank" rel="nofollow">qgis2web</a> &middot; <a href="https://qgis.org" rel="nofollow" target="_blank">QGIS</a> &copy; <a href="https://tiles.openstreetmap.org.ua/#6/48.959/32.311" rel="nofollow" target="_blank">OSM UA volunteer\'s server</a>'
                    }).addTo(n);
                    for (var s = L.icon({
                        iconUrl: "https://api.tiles.mapbox.com/v3/marker/pin-m-warehouse+1BCFC4.png",
                        iconSize: [30, 70]
                    }), a = 0; a < locations.length; a++)
                        L.marker([locations[a].lat, locations[a].lon], {
                            icon: s,
                            riseOnHover: !0,
                            draggable: !1
                        }).addTo(n).bindPopup(locations[a].description, {
                            closeOnClick: !1,
                            autoClose: !1
                        })
                }
                if (null != document.querySelector("#rozdil-info-map")) {
                    var r = L.map("rozdil-info-map").setView(setView.coord, setView.zoom);
                    L.tileLayer("https://tiles.openstreetmap.org.ua/osm/{z}/{x}/{y}.png", {
                        attribution: '<a href="https://www.minregion.gov.ua/" rel="nofollow" target="_blank">Мінрегіон</a>; <a href="https://github.com/tomchadwin/qgis2web" target="_blank" rel="nofollow">qgis2web</a> &middot; <a href="https://qgis.org" rel="nofollow" target="_blank">QGIS</a> &copy; <a href="https://tiles.openstreetmap.org.ua/#6/48.959/32.311" rel="nofollow" target="_blank">OSM UA volunteer\'s server</a>'
                    }).addTo(r);
                    for (var h = L.icon({
                        iconUrl: "https://api.tiles.mapbox.com/v3/marker/pin-s-building+0BBFFF.png",
                        iconSize: [30, 70]
                    }), l = 0; l < locations.length; l++)
                        L.marker([locations[l].lat, locations[l].lon], {
                            icon: h,
                            riseOnHover: !0,
                            draggable: !1
                        }).addTo(r).bindPopup(locations[l].description, {
                            closeOnClick: !1,
                            autoClose: !1
                        })
                }
            }
            ))
        }
        ,
        3648: ()=>{
            function t(t) {
                for (var e = "", i = Object.keys(t), o = "", n = "", s = 0; s < i.length; s++)
                    n = o,
                    o = "",
                    0 == t[i[s]][0] ? o = "<p>".concat(i[s], "</p><p>Вихідний</p>") : (o += "<p>".concat(i[s], "</p><div><p>").concat(t[i[s]][1], " - ").concat(t[i[s]][2], "</p>"),
                    null != t[i[s]][3] && (o += "<br><p>Перерва</p><p>".concat(t[i[s]][3], " - ").concat(t[i[s]][4], "</p>")),
                    o += "</div>"),
                    o.substring(5) != n.substring(5) ? e += '<div class="content-entry">' + o + "</div>" : e = e.replace(n.substring(3, 5), n.substring(3, 5) + ", " + o.substring(3, 5));
                return e = (e = (e = (e = (e = (e = (e = (e = e.replace("Пн,Вт,Ср,Чт,Пт", "Пн-Пт")).replace("Пн", "Понеділок")).replace("Вт", "Вівторок")).replace("Ср", "Середа")).replace("Чт", "Четвер")).replace("Пт", "П'ятниця")).replace("Сб", "Субота")).replace("Нд", "Неділя")
            }
            window.addEventListener("load", (function() {
                if ("undefined" != typeof schedule) {
                    for (var e = 0; e < schedule.length; e++) {
                        var i = document.getElementById("institution-".concat(schedule[e].id));
                        try {
                            i.querySelector(".schedule").innerHTML = t(schedule[e].schedule)
                        } catch (t) {}
                    }
                    for (var o = document.getElementsByClassName("schedule-accordion"), n = 0; n < o.length; n++)
                        o[n].querySelector("h5").addEventListener("click", (function() {
                            this.parentElement.classList.toggle("open")
                        }
                        ))
                }
            }
            ))
        }
        ,
        1771: ()=>{
            window.addEventListener("load", (function() {
                var t = document.getElementById("vulyk-form");
                if (t)
                    for (var e = function(t) {
                        t.target.checkValidity() || "" == t.target.value ? (t.target.classList.remove("invalid"),
                        !0) : (t.target.classList.add("invalid"),
                        !1)
                    }, i = t.querySelectorAll("input"), o = 0; o < i.length; o++)
                        i[o].addEventListener("change", e)
            }
            ))
        }
        ,
        1787: ()=>{
            var t, e;
            t = window,
            e = document,
            L.drawVersion = "1.0.4",
            L.Draw = {},
            L.drawLocal = {
                draw: {
                    toolbar: {
                        actions: {
                            title: "Cancel drawing",
                            text: "Cancel"
                        },
                        finish: {
                            title: "Finish drawing",
                            text: "Finish"
                        },
                        undo: {
                            title: "Delete last point drawn",
                            text: "Delete last point"
                        },
                        buttons: {
                            polyline: "Draw a polyline",
                            polygon: "Draw a polygon",
                            rectangle: "Draw a rectangle",
                            circle: "Draw a circle",
                            marker: "Draw a marker",
                            circlemarker: "Draw a circlemarker"
                        }
                    },
                    handlers: {
                        circle: {
                            tooltip: {
                                start: "Click and drag to draw circle."
                            },
                            radius: "Radius"
                        },
                        circlemarker: {
                            tooltip: {
                                start: "Click map to place circle marker."
                            }
                        },
                        marker: {
                            tooltip: {
                                start: "Click map to place marker."
                            }
                        },
                        polygon: {
                            tooltip: {
                                start: "Click to start drawing shape.",
                                cont: "Click to continue drawing shape.",
                                end: "Click first point to close this shape."
                            }
                        },
                        polyline: {
                            error: "<strong>Error:</strong> shape edges cannot cross!",
                            tooltip: {
                                start: "Click to start drawing line.",
                                cont: "Click to continue drawing line.",
                                end: "Click last point to finish line."
                            }
                        },
                        rectangle: {
                            tooltip: {
                                start: "Click and drag to draw rectangle."
                            }
                        },
                        simpleshape: {
                            tooltip: {
                                end: "Release mouse to finish drawing."
                            }
                        }
                    }
                },
                edit: {
                    toolbar: {
                        actions: {
                            save: {
                                title: "Save changes",
                                text: "Save"
                            },
                            cancel: {
                                title: "Cancel editing, discards all changes",
                                text: "Cancel"
                            },
                            clearAll: {
                                title: "Clear all layers",
                                text: "Clear All"
                            }
                        },
                        buttons: {
                            edit: "Edit layers",
                            editDisabled: "No layers to edit",
                            remove: "Delete layers",
                            removeDisabled: "No layers to delete"
                        }
                    },
                    handlers: {
                        edit: {
                            tooltip: {
                                text: "Drag handles or markers to edit features.",
                                subtext: "Click cancel to undo changes."
                            }
                        },
                        remove: {
                            tooltip: {
                                text: "Click on a feature to remove."
                            }
                        }
                    }
                }
            },
            L.Draw.Event = {},
            L.Draw.Event.CREATED = "draw:created",
            L.Draw.Event.EDITED = "draw:edited",
            L.Draw.Event.DELETED = "draw:deleted",
            L.Draw.Event.DRAWSTART = "draw:drawstart",
            L.Draw.Event.DRAWSTOP = "draw:drawstop",
            L.Draw.Event.DRAWVERTEX = "draw:drawvertex",
            L.Draw.Event.EDITSTART = "draw:editstart",
            L.Draw.Event.EDITMOVE = "draw:editmove",
            L.Draw.Event.EDITRESIZE = "draw:editresize",
            L.Draw.Event.EDITVERTEX = "draw:editvertex",
            L.Draw.Event.EDITSTOP = "draw:editstop",
            L.Draw.Event.DELETESTART = "draw:deletestart",
            L.Draw.Event.DELETESTOP = "draw:deletestop",
            L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened",
            L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed",
            L.Draw.Event.MARKERCONTEXT = "draw:markercontext",
            L.Draw = L.Draw || {},
            L.Draw.Feature = L.Handler.extend({
                initialize: function(t, e) {
                    this._map = t,
                    this._container = t._container,
                    this._overlayPane = t._panes.overlayPane,
                    this._popupPane = t._panes.popupPane,
                    e && e.shapeOptions && (e.shapeOptions = L.Util.extend({}, this.options.shapeOptions, e.shapeOptions)),
                    L.setOptions(this, e);
                    var i = L.version.split(".");
                    1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events)
                },
                enable: function() {
                    this._enabled || (L.Handler.prototype.enable.call(this),
                    this.fire("enabled", {
                        handler: this.type
                    }),
                    this._map.fire(L.Draw.Event.DRAWSTART, {
                        layerType: this.type
                    }))
                },
                disable: function() {
                    this._enabled && (L.Handler.prototype.disable.call(this),
                    this._map.fire(L.Draw.Event.DRAWSTOP, {
                        layerType: this.type
                    }),
                    this.fire("disabled", {
                        handler: this.type
                    }))
                },
                addHooks: function() {
                    var t = this._map;
                    t && (L.DomUtil.disableTextSelection(),
                    t.getContainer().focus(),
                    this._tooltip = new L.Draw.Tooltip(this._map),
                    L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this))
                },
                removeHooks: function() {
                    this._map && (L.DomUtil.enableTextSelection(),
                    this._tooltip.dispose(),
                    this._tooltip = null,
                    L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this))
                },
                setOptions: function(t) {
                    L.setOptions(this, t)
                },
                _fireCreatedEvent: function(t) {
                    this._map.fire(L.Draw.Event.CREATED, {
                        layer: t,
                        layerType: this.type
                    })
                },
                _cancelDrawing: function(t) {
                    27 === t.keyCode && (this._map.fire("draw:canceled", {
                        layerType: this.type
                    }),
                    this.disable())
                }
            }),
            L.Draw.Polyline = L.Draw.Feature.extend({
                statics: {
                    TYPE: "polyline"
                },
                Poly: L.Polyline,
                options: {
                    allowIntersection: !0,
                    repeatMode: !1,
                    drawError: {
                        color: "#b00b00",
                        timeout: 2500
                    },
                    icon: new L.DivIcon({
                        iconSize: new L.Point(8,8),
                        className: "leaflet-div-icon leaflet-editing-icon"
                    }),
                    touchIcon: new L.DivIcon({
                        iconSize: new L.Point(20,20),
                        className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
                    }),
                    guidelineDistance: 20,
                    maxGuideLineLength: 4e3,
                    shapeOptions: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 4,
                        opacity: .5,
                        fill: !1,
                        clickable: !0
                    },
                    metric: !0,
                    feet: !0,
                    nautic: !1,
                    showLength: !0,
                    zIndexOffset: 2e3,
                    factor: 1,
                    maxPoints: 0
                },
                initialize: function(t, e) {
                    L.Browser.touch && (this.options.icon = this.options.touchIcon),
                    this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error,
                    e && e.drawError && (e.drawError = L.Util.extend({}, this.options.drawError, e.drawError)),
                    this.type = L.Draw.Polyline.TYPE,
                    L.Draw.Feature.prototype.initialize.call(this, t, e)
                },
                addHooks: function() {
                    L.Draw.Feature.prototype.addHooks.call(this),
                    this._map && (this._markers = [],
                    this._markerGroup = new L.LayerGroup,
                    this._map.addLayer(this._markerGroup),
                    this._poly = new L.Polyline([],this.options.shapeOptions),
                    this._tooltip.updateContent(this._getTooltipText()),
                    this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                        icon: L.divIcon({
                            className: "leaflet-mouse-marker",
                            iconAnchor: [20, 20],
                            iconSize: [40, 40]
                        }),
                        opacity: 0,
                        zIndexOffset: this.options.zIndexOffset
                    })),
                    this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map),
                    this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this))
                },
                removeHooks: function() {
                    L.Draw.Feature.prototype.removeHooks.call(this),
                    this._clearHideErrorTimeout(),
                    this._cleanUpShape(),
                    this._map.removeLayer(this._markerGroup),
                    delete this._markerGroup,
                    delete this._markers,
                    this._map.removeLayer(this._poly),
                    delete this._poly,
                    this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this),
                    this._map.removeLayer(this._mouseMarker),
                    delete this._mouseMarker,
                    this._clearGuides(),
                    this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this)
                },
                deleteLastVertex: function() {
                    if (!(this._markers.length <= 1)) {
                        var t = this._markers.pop()
                          , e = this._poly
                          , i = e.getLatLngs()
                          , o = i.splice(-1, 1)[0];
                        this._poly.setLatLngs(i),
                        this._markerGroup.removeLayer(t),
                        e.getLatLngs().length < 2 && this._map.removeLayer(e),
                        this._vertexChanged(o, !1)
                    }
                },
                addVertex: function(t) {
                    this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(t) ? this._showErrorTooltip() : (this._errorShown && this._hideErrorTooltip(),
                    this._markers.push(this._createMarker(t)),
                    this._poly.addLatLng(t),
                    2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly),
                    this._vertexChanged(t, !0))
                },
                completeShape: function() {
                    this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(),
                    this.disable(),
                    this.options.repeatMode && this.enable())
                },
                _finishShape: function() {
                    var t = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs()
                      , e = this._poly.newLatLngIntersects(t[t.length - 1]);
                    !this.options.allowIntersection && e || !this._shapeIsValid() ? this._showErrorTooltip() : (this._fireCreatedEvent(),
                    this.disable(),
                    this.options.repeatMode && this.enable())
                },
                _shapeIsValid: function() {
                    return !0
                },
                _onZoomEnd: function() {
                    null !== this._markers && this._updateGuide()
                },
                _onMouseMove: function(t) {
                    var e = this._map.mouseEventToLayerPoint(t.originalEvent)
                      , i = this._map.layerPointToLatLng(e);
                    this._currentLatLng = i,
                    this._updateTooltip(i),
                    this._updateGuide(e),
                    this._mouseMarker.setLatLng(i),
                    L.DomEvent.preventDefault(t.originalEvent)
                },
                _vertexChanged: function(t, e) {
                    this._map.fire(L.Draw.Event.DRAWVERTEX, {
                        layers: this._markerGroup
                    }),
                    this._updateFinishHandler(),
                    this._updateRunningMeasure(t, e),
                    this._clearGuides(),
                    this._updateTooltip()
                },
                _onMouseDown: function(t) {
                    if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
                        this._onMouseMove(t),
                        this._clickHandled = !0,
                        this._disableNewMarkers();
                        var e = t.originalEvent
                          , i = e.clientX
                          , o = e.clientY;
                        this._startPoint.call(this, i, o)
                    }
                },
                _startPoint: function(t, e) {
                    this._mouseDownOrigin = L.point(t, e)
                },
                _onMouseUp: function(t) {
                    var e = t.originalEvent
                      , i = e.clientX
                      , o = e.clientY;
                    this._endPoint.call(this, i, o, t),
                    this._clickHandled = null
                },
                _endPoint: function(e, i, o) {
                    if (this._mouseDownOrigin) {
                        var n = L.point(e, i).distanceTo(this._mouseDownOrigin)
                          , s = this._calculateFinishDistance(o.latlng);
                        this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(o.latlng),
                        this._finishShape()) : s < 10 && L.Browser.touch ? this._finishShape() : Math.abs(n) < 9 * (t.devicePixelRatio || 1) && this.addVertex(o.latlng),
                        this._enableNewMarkers()
                    }
                    this._mouseDownOrigin = null
                },
                _onTouch: function(t) {
                    var e, i, o = t.originalEvent;
                    !o.touches || !o.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = o.touches[0].clientX,
                    i = o.touches[0].clientY,
                    this._disableNewMarkers(),
                    this._touchHandled = !0,
                    this._startPoint.call(this, e, i),
                    this._endPoint.call(this, e, i, t),
                    this._touchHandled = null),
                    this._clickHandled = null
                },
                _onMouseOut: function() {
                    this._tooltip && this._tooltip._onMouseOut.call(this._tooltip)
                },
                _calculateFinishDistance: function(t) {
                    var e;
                    if (this._markers.length > 0) {
                        var i;
                        if (this.type === L.Draw.Polyline.TYPE)
                            i = this._markers[this._markers.length - 1];
                        else {
                            if (this.type !== L.Draw.Polygon.TYPE)
                                return 1 / 0;
                            i = this._markers[0]
                        }
                        var o = this._map.latLngToContainerPoint(i.getLatLng())
                          , n = new L.Marker(t,{
                            icon: this.options.icon,
                            zIndexOffset: 2 * this.options.zIndexOffset
                        })
                          , s = this._map.latLngToContainerPoint(n.getLatLng());
                        e = o.distanceTo(s)
                    } else
                        e = 1 / 0;
                    return e
                },
                _updateFinishHandler: function() {
                    var t = this._markers.length;
                    t > 1 && this._markers[t - 1].on("click", this._finishShape, this),
                    t > 2 && this._markers[t - 2].off("click", this._finishShape, this)
                },
                _createMarker: function(t) {
                    var e = new L.Marker(t,{
                        icon: this.options.icon,
                        zIndexOffset: 2 * this.options.zIndexOffset
                    });
                    return this._markerGroup.addLayer(e),
                    e
                },
                _updateGuide: function(t) {
                    var e = this._markers ? this._markers.length : 0;
                    e > 0 && (t = t || this._map.latLngToLayerPoint(this._currentLatLng),
                    this._clearGuides(),
                    this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t))
                },
                _updateTooltip: function(t) {
                    var e = this._getTooltipText();
                    t && this._tooltip.updatePosition(t),
                    this._errorShown || this._tooltip.updateContent(e)
                },
                _drawGuide: function(t, e) {
                    var i, o, n, s = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))), a = this.options.guidelineDistance, r = this.options.maxGuideLineLength, h = s > r ? s - r : a;
                    for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); h < s; h += this.options.guidelineDistance)
                        i = h / s,
                        o = {
                            x: Math.floor(t.x * (1 - i) + i * e.x),
                            y: Math.floor(t.y * (1 - i) + i * e.y)
                        },
                        (n = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer)).style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color,
                        L.DomUtil.setPosition(n, o)
                },
                _updateGuideColor: function(t) {
                    if (this._guidesContainer)
                        for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++)
                            this._guidesContainer.childNodes[e].style.backgroundColor = t
                },
                _clearGuides: function() {
                    if (this._guidesContainer)
                        for (; this._guidesContainer.firstChild; )
                            this._guidesContainer.removeChild(this._guidesContainer.firstChild)
                },
                _getTooltipText: function() {
                    var t, e, i = this.options.showLength;
                    return 0 === this._markers.length ? t = {
                        text: L.drawLocal.draw.handlers.polyline.tooltip.start
                    } : (e = i ? this._getMeasurementString() : "",
                    t = 1 === this._markers.length ? {
                        text: L.drawLocal.draw.handlers.polyline.tooltip.cont,
                        subtext: e
                    } : {
                        text: L.drawLocal.draw.handlers.polyline.tooltip.end,
                        subtext: e
                    }),
                    t
                },
                _updateRunningMeasure: function(t, e) {
                    var i, o, n = this._markers.length;
                    1 === this._markers.length ? this._measurementRunningTotal = 0 : (i = n - (e ? 2 : 1),
                    o = L.GeometryUtil.isVersion07x() ? t.distanceTo(this._markers[i].getLatLng()) * (this.options.factor || 1) : this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1),
                    this._measurementRunningTotal += o * (e ? 1 : -1))
                },
                _getMeasurementString: function() {
                    var t, e = this._currentLatLng, i = this._markers[this._markers.length - 1].getLatLng();
                    return t = L.GeometryUtil.isVersion07x() ? i && e && e.distanceTo ? this._measurementRunningTotal + e.distanceTo(i) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : i && e ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1) : this._measurementRunningTotal || 0,
                    L.GeometryUtil.readableDistance(t, this.options.metric, this.options.feet, this.options.nautic, this.options.precision)
                },
                _showErrorTooltip: function() {
                    this._errorShown = !0,
                    this._tooltip.showAsError().updateContent({
                        text: this.options.drawError.message
                    }),
                    this._updateGuideColor(this.options.drawError.color),
                    this._poly.setStyle({
                        color: this.options.drawError.color
                    }),
                    this._clearHideErrorTimeout(),
                    this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
                },
                _hideErrorTooltip: function() {
                    this._errorShown = !1,
                    this._clearHideErrorTimeout(),
                    this._tooltip.removeError().updateContent(this._getTooltipText()),
                    this._updateGuideColor(this.options.shapeOptions.color),
                    this._poly.setStyle({
                        color: this.options.shapeOptions.color
                    })
                },
                _clearHideErrorTimeout: function() {
                    this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout),
                    this._hideErrorTimeout = null)
                },
                _disableNewMarkers: function() {
                    this._disableMarkers = !0
                },
                _enableNewMarkers: function() {
                    setTimeout(function() {
                        this._disableMarkers = !1
                    }
                    .bind(this), 50)
                },
                _cleanUpShape: function() {
                    this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this)
                },
                _fireCreatedEvent: function() {
                    var t = new this.Poly(this._poly.getLatLngs(),this.options.shapeOptions);
                    L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
                }
            }),
            L.Draw.Polygon = L.Draw.Polyline.extend({
                statics: {
                    TYPE: "polygon"
                },
                Poly: L.Polygon,
                options: {
                    showArea: !1,
                    showLength: !1,
                    shapeOptions: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 4,
                        opacity: .5,
                        fill: !0,
                        fillColor: null,
                        fillOpacity: .2,
                        clickable: !0
                    },
                    metric: !0,
                    feet: !0,
                    nautic: !1,
                    precision: {}
                },
                initialize: function(t, e) {
                    L.Draw.Polyline.prototype.initialize.call(this, t, e),
                    this.type = L.Draw.Polygon.TYPE
                },
                _updateFinishHandler: function() {
                    var t = this._markers.length;
                    1 === t && this._markers[0].on("click", this._finishShape, this),
                    t > 2 && (this._markers[t - 1].on("dblclick", this._finishShape, this),
                    t > 3 && this._markers[t - 2].off("dblclick", this._finishShape, this))
                },
                _getTooltipText: function() {
                    var t, e;
                    return 0 === this._markers.length ? t = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (t = L.drawLocal.draw.handlers.polygon.tooltip.cont,
                    e = this._getMeasurementString()) : (t = L.drawLocal.draw.handlers.polygon.tooltip.end,
                    e = this._getMeasurementString()),
                    {
                        text: t,
                        subtext: e
                    }
                },
                _getMeasurementString: function() {
                    var t = this._area
                      , e = "";
                    return t || this.options.showLength ? (this.options.showLength && (e = L.Draw.Polyline.prototype._getMeasurementString.call(this)),
                    t && (e += "<br>" + L.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)),
                    e) : null
                },
                _shapeIsValid: function() {
                    return this._markers.length >= 3
                },
                _vertexChanged: function(t, e) {
                    var i;
                    !this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(),
                    this._area = L.GeometryUtil.geodesicArea(i)),
                    L.Draw.Polyline.prototype._vertexChanged.call(this, t, e)
                },
                _cleanUpShape: function() {
                    var t = this._markers.length;
                    t > 0 && (this._markers[0].off("click", this._finishShape, this),
                    t > 2 && this._markers[t - 1].off("dblclick", this._finishShape, this))
                }
            }),
            L.SimpleShape = {},
            L.Draw.SimpleShape = L.Draw.Feature.extend({
                options: {
                    repeatMode: !1
                },
                initialize: function(t, e) {
                    this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end,
                    L.Draw.Feature.prototype.initialize.call(this, t, e)
                },
                addHooks: function() {
                    L.Draw.Feature.prototype.addHooks.call(this),
                    this._map && (this._mapDraggable = this._map.dragging.enabled(),
                    this._mapDraggable && this._map.dragging.disable(),
                    this._container.style.cursor = "crosshair",
                    this._tooltip.updateContent({
                        text: this._initialLabelText
                    }),
                    this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this),
                    e.addEventListener("touchstart", L.DomEvent.preventDefault, {
                        passive: !1
                    }))
                },
                removeHooks: function() {
                    L.Draw.Feature.prototype.removeHooks.call(this),
                    this._map && (this._mapDraggable && this._map.dragging.enable(),
                    this._container.style.cursor = "",
                    this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this),
                    L.DomEvent.off(e, "mouseup", this._onMouseUp, this),
                    L.DomEvent.off(e, "touchend", this._onMouseUp, this),
                    e.removeEventListener("touchstart", L.DomEvent.preventDefault),
                    this._shape && (this._map.removeLayer(this._shape),
                    delete this._shape)),
                    this._isDrawing = !1
                },
                _getTooltipText: function() {
                    return {
                        text: this._endLabelText
                    }
                },
                _onMouseDown: function(t) {
                    this._isDrawing = !0,
                    this._startLatLng = t.latlng,
                    L.DomEvent.on(e, "mouseup", this._onMouseUp, this).on(e, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent)
                },
                _onMouseMove: function(t) {
                    var e = t.latlng;
                    this._tooltip.updatePosition(e),
                    this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()),
                    this._drawShape(e))
                },
                _onMouseUp: function() {
                    this._shape && this._fireCreatedEvent(),
                    this.disable(),
                    this.options.repeatMode && this.enable()
                }
            }),
            L.Draw.Rectangle = L.Draw.SimpleShape.extend({
                statics: {
                    TYPE: "rectangle"
                },
                options: {
                    shapeOptions: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 4,
                        opacity: .5,
                        fill: !0,
                        fillColor: null,
                        fillOpacity: .2,
                        clickable: !0
                    },
                    showArea: !0,
                    metric: !0
                },
                initialize: function(t, e) {
                    this.type = L.Draw.Rectangle.TYPE,
                    this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start,
                    L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
                },
                disable: function() {
                    this._enabled && (this._isCurrentlyTwoClickDrawing = !1,
                    L.Draw.SimpleShape.prototype.disable.call(this))
                },
                _onMouseUp: function(t) {
                    this._shape || this._isCurrentlyTwoClickDrawing ? this._isCurrentlyTwoClickDrawing && !function(t, e) {
                        for (; (t = t.parentElement) && !t.classList.contains(e); )
                            ;
                        return t
                    }(t.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this) : this._isCurrentlyTwoClickDrawing = !0
                },
                _drawShape: function(t) {
                    this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng,t)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng,t),this.options.shapeOptions),
                    this._map.addLayer(this._shape))
                },
                _fireCreatedEvent: function() {
                    var t = new L.Rectangle(this._shape.getBounds(),this.options.shapeOptions);
                    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
                },
                _getTooltipText: function() {
                    var t, e, i, o = L.Draw.SimpleShape.prototype._getTooltipText.call(this), n = this._shape, s = this.options.showArea;
                    return n && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(),
                    e = L.GeometryUtil.geodesicArea(t),
                    i = s ? L.GeometryUtil.readableArea(e, this.options.metric) : ""),
                    {
                        text: o.text,
                        subtext: i
                    }
                }
            }),
            L.Draw.Marker = L.Draw.Feature.extend({
                statics: {
                    TYPE: "marker"
                },
                options: {
                    icon: new L.Icon.Default,
                    repeatMode: !1,
                    zIndexOffset: 2e3
                },
                initialize: function(t, e) {
                    this.type = L.Draw.Marker.TYPE,
                    this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start,
                    L.Draw.Feature.prototype.initialize.call(this, t, e)
                },
                addHooks: function() {
                    L.Draw.Feature.prototype.addHooks.call(this),
                    this._map && (this._tooltip.updateContent({
                        text: this._initialLabelText
                    }),
                    this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                        icon: L.divIcon({
                            className: "leaflet-mouse-marker",
                            iconAnchor: [20, 20],
                            iconSize: [40, 40]
                        }),
                        opacity: 0,
                        zIndexOffset: this.options.zIndexOffset
                    })),
                    this._mouseMarker.on("click", this._onClick, this).addTo(this._map),
                    this._map.on("mousemove", this._onMouseMove, this),
                    this._map.on("click", this._onTouch, this))
                },
                removeHooks: function() {
                    L.Draw.Feature.prototype.removeHooks.call(this),
                    this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this),
                    this._marker && (this._marker.off("click", this._onClick, this),
                    this._map.removeLayer(this._marker),
                    delete this._marker),
                    this._mouseMarker.off("click", this._onClick, this),
                    this._map.removeLayer(this._mouseMarker),
                    delete this._mouseMarker,
                    this._map.off("mousemove", this._onMouseMove, this))
                },
                _onMouseMove: function(t) {
                    var e = t.latlng;
                    this._tooltip.updatePosition(e),
                    this._mouseMarker.setLatLng(e),
                    this._marker ? (e = this._mouseMarker.getLatLng(),
                    this._marker.setLatLng(e)) : (this._marker = this._createMarker(e),
                    this._marker.on("click", this._onClick, this),
                    this._map.on("click", this._onClick, this).addLayer(this._marker))
                },
                _createMarker: function(t) {
                    return new L.Marker(t,{
                        icon: this.options.icon,
                        zIndexOffset: this.options.zIndexOffset
                    })
                },
                _onClick: function() {
                    this._fireCreatedEvent(),
                    this.disable(),
                    this.options.repeatMode && this.enable()
                },
                _onTouch: function(t) {
                    this._onMouseMove(t),
                    this._onClick()
                },
                _fireCreatedEvent: function() {
                    var t = new L.Marker.Touch(this._marker.getLatLng(),{
                        icon: this.options.icon
                    });
                    L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
                }
            }),
            L.Draw.CircleMarker = L.Draw.Marker.extend({
                statics: {
                    TYPE: "circlemarker"
                },
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0,
                    zIndexOffset: 2e3
                },
                initialize: function(t, e) {
                    this.type = L.Draw.CircleMarker.TYPE,
                    this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start,
                    L.Draw.Feature.prototype.initialize.call(this, t, e)
                },
                _fireCreatedEvent: function() {
                    var t = new L.CircleMarker(this._marker.getLatLng(),this.options);
                    L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
                },
                _createMarker: function(t) {
                    return new L.CircleMarker(t,this.options)
                }
            }),
            L.Draw.Circle = L.Draw.SimpleShape.extend({
                statics: {
                    TYPE: "circle"
                },
                options: {
                    shapeOptions: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 4,
                        opacity: .5,
                        fill: !0,
                        fillColor: null,
                        fillOpacity: .2,
                        clickable: !0
                    },
                    showRadius: !0,
                    metric: !0,
                    feet: !0,
                    nautic: !1
                },
                initialize: function(t, e) {
                    this.type = L.Draw.Circle.TYPE,
                    this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start,
                    L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
                },
                _drawShape: function(t) {
                    if (L.GeometryUtil.isVersion07x())
                        var e = this._startLatLng.distanceTo(t);
                    else
                        e = this._map.distance(this._startLatLng, t);
                    this._shape ? this._shape.setRadius(e) : (this._shape = new L.Circle(this._startLatLng,e,this.options.shapeOptions),
                    this._map.addLayer(this._shape))
                },
                _fireCreatedEvent: function() {
                    var t = new L.Circle(this._startLatLng,this._shape.getRadius(),this.options.shapeOptions);
                    L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
                },
                _onMouseMove: function(t) {
                    var e, i = t.latlng, o = this.options.showRadius, n = this.options.metric;
                    if (this._tooltip.updatePosition(i),
                    this._isDrawing) {
                        this._drawShape(i),
                        e = this._shape.getRadius().toFixed(1);
                        var s = "";
                        o && (s = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(e, n, this.options.feet, this.options.nautic)),
                        this._tooltip.updateContent({
                            text: this._endLabelText,
                            subtext: s
                        })
                    }
                }
            }),
            L.Edit = L.Edit || {},
            L.Edit.Marker = L.Handler.extend({
                initialize: function(t, e) {
                    this._marker = t,
                    L.setOptions(this, e)
                },
                addHooks: function() {
                    var t = this._marker;
                    t.dragging.enable(),
                    t.on("dragend", this._onDragEnd, t),
                    this._toggleMarkerHighlight()
                },
                removeHooks: function() {
                    var t = this._marker;
                    t.dragging.disable(),
                    t.off("dragend", this._onDragEnd, t),
                    this._toggleMarkerHighlight()
                },
                _onDragEnd: function(t) {
                    var e = t.target;
                    e.edited = !0,
                    this._map.fire(L.Draw.Event.EDITMOVE, {
                        layer: e
                    })
                },
                _toggleMarkerHighlight: function() {
                    var t = this._marker._icon;
                    t && (t.style.display = "none",
                    L.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(t, "leaflet-edit-marker-selected"),
                    this._offsetMarker(t, -4)) : (L.DomUtil.addClass(t, "leaflet-edit-marker-selected"),
                    this._offsetMarker(t, 4)),
                    t.style.display = "")
                },
                _offsetMarker: function(t, e) {
                    var i = parseInt(t.style.marginTop, 10) - e
                      , o = parseInt(t.style.marginLeft, 10) - e;
                    t.style.marginTop = i + "px",
                    t.style.marginLeft = o + "px"
                }
            }),
            L.Marker.addInitHook((function() {
                L.Edit.Marker && (this.editing = new L.Edit.Marker(this),
                this.options.editable && this.editing.enable())
            }
            )),
            L.Edit = L.Edit || {},
            L.Edit.Poly = L.Handler.extend({
                initialize: function(t) {
                    this.latlngs = [t._latlngs],
                    t._holes && (this.latlngs = this.latlngs.concat(t._holes)),
                    this._poly = t,
                    this._poly.on("revert-edited", this._updateLatLngs, this)
                },
                _defaultShape: function() {
                    return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs
                },
                _eachVertexHandler: function(t) {
                    for (var e = 0; e < this._verticesHandlers.length; e++)
                        t(this._verticesHandlers[e])
                },
                addHooks: function() {
                    this._initHandlers(),
                    this._eachVertexHandler((function(t) {
                        t.addHooks()
                    }
                    ))
                },
                removeHooks: function() {
                    this._eachVertexHandler((function(t) {
                        t.removeHooks()
                    }
                    ))
                },
                updateMarkers: function() {
                    this._eachVertexHandler((function(t) {
                        t.updateMarkers()
                    }
                    ))
                },
                _initHandlers: function() {
                    this._verticesHandlers = [];
                    for (var t = 0; t < this.latlngs.length; t++)
                        this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly,this.latlngs[t],this._poly.options.poly))
                },
                _updateLatLngs: function(t) {
                    this.latlngs = [t.layer._latlngs],
                    t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes))
                }
            }),
            L.Edit.PolyVerticesEdit = L.Handler.extend({
                options: {
                    icon: new L.DivIcon({
                        iconSize: new L.Point(8,8),
                        className: "leaflet-div-icon leaflet-editing-icon"
                    }),
                    touchIcon: new L.DivIcon({
                        iconSize: new L.Point(20,20),
                        className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
                    }),
                    drawError: {
                        color: "#b00b00",
                        timeout: 1e3
                    }
                },
                initialize: function(t, e, i) {
                    L.Browser.touch && (this.options.icon = this.options.touchIcon),
                    this._poly = t,
                    i && i.drawError && (i.drawError = L.Util.extend({}, this.options.drawError, i.drawError)),
                    this._latlngs = e,
                    L.setOptions(this, i)
                },
                _defaultShape: function() {
                    return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs
                },
                addHooks: function() {
                    var t = this._poly
                      , e = t._path;
                    t instanceof L.Polygon || (t.options.fill = !1,
                    t.options.editing && (t.options.editing.fill = !1)),
                    e && t.options.editing && t.options.editing.className && (t.options.original.className && t.options.original.className.split(" ").forEach((function(t) {
                        L.DomUtil.removeClass(e, t)
                    }
                    )),
                    t.options.editing.className.split(" ").forEach((function(t) {
                        L.DomUtil.addClass(e, t)
                    }
                    ))),
                    t.setStyle(t.options.editing),
                    this._poly._map && (this._map = this._poly._map,
                    this._markerGroup || this._initMarkers(),
                    this._poly._map.addLayer(this._markerGroup))
                },
                removeHooks: function() {
                    var t = this._poly
                      , e = t._path;
                    e && t.options.editing && t.options.editing.className && (t.options.editing.className.split(" ").forEach((function(t) {
                        L.DomUtil.removeClass(e, t)
                    }
                    )),
                    t.options.original.className && t.options.original.className.split(" ").forEach((function(t) {
                        L.DomUtil.addClass(e, t)
                    }
                    ))),
                    t.setStyle(t.options.original),
                    t._map && (t._map.removeLayer(this._markerGroup),
                    delete this._markerGroup,
                    delete this._markers)
                },
                updateMarkers: function() {
                    this._markerGroup.clearLayers(),
                    this._initMarkers()
                },
                _initMarkers: function() {
                    this._markerGroup || (this._markerGroup = new L.LayerGroup),
                    this._markers = [];
                    var t, e, i, o, n, s, a = this._defaultShape();
                    for (t = 0,
                    i = a.length; t < i; t++)
                        (o = this._createMarker(a[t], t)).on("click", this._onMarkerClick, this),
                        o.on("contextmenu", this._onContextMenu, this),
                        this._markers.push(o);
                    for (t = 0,
                    e = i - 1; t < i; e = t++)
                        (0 !== t || L.Polygon && this._poly instanceof L.Polygon) && (n = this._markers[e],
                        s = this._markers[t],
                        this._createMiddleMarker(n, s),
                        this._updatePrevNext(n, s))
                },
                _createMarker: function(t, e) {
                    var i = new L.Marker.Touch(t,{
                        draggable: !0,
                        icon: this.options.icon
                    });
                    return i._origLatLng = t,
                    i._index = e,
                    i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this),
                    this._markerGroup.addLayer(i),
                    i
                },
                _onMarkerDragStart: function() {
                    this._poly.fire("editstart")
                },
                _spliceLatLngs: function() {
                    var t = this._defaultShape()
                      , e = [].splice.apply(t, arguments);
                    return this._poly._convertLatLngs(t, !0),
                    this._poly.redraw(),
                    e
                },
                _removeMarker: function(t) {
                    var e = t._index;
                    this._markerGroup.removeLayer(t),
                    this._markers.splice(e, 1),
                    this._spliceLatLngs(e, 1),
                    this._updateIndexes(e, -1),
                    t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this)
                },
                _fireEdit: function() {
                    this._poly.edited = !0,
                    this._poly.fire("edit"),
                    this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
                        layers: this._markerGroup,
                        poly: this._poly
                    })
                },
                _onMarkerDrag: function(t) {
                    var e = t.target
                      , i = this._poly
                      , o = L.LatLngUtil.cloneLatLng(e._origLatLng);
                    if (L.extend(e._origLatLng, e._latlng),
                    i.options.poly) {
                        var n = i._map._editTooltip;
                        if (!i.options.poly.allowIntersection && i.intersects()) {
                            L.extend(e._origLatLng, o),
                            e.setLatLng(o);
                            var s = i.options.color;
                            i.setStyle({
                                color: this.options.drawError.color
                            }),
                            n && n.updateContent({
                                text: L.drawLocal.draw.handlers.polyline.error
                            }),
                            setTimeout((function() {
                                i.setStyle({
                                    color: s
                                }),
                                n && n.updateContent({
                                    text: L.drawLocal.edit.handlers.edit.tooltip.text,
                                    subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                                })
                            }
                            ), 1e3)
                        }
                    }
                    e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)),
                    e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)),
                    this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0),
                    this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
                    var a = this._poly.getLatLngs();
                    this._poly._convertLatLngs(a, !0),
                    this._poly.redraw(),
                    this._poly.fire("editdrag")
                },
                _onMarkerClick: function(t) {
                    var e = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3
                      , i = t.target;
                    this._defaultShape().length < e || (this._removeMarker(i),
                    this._updatePrevNext(i._prev, i._next),
                    i._middleLeft && this._markerGroup.removeLayer(i._middleLeft),
                    i._middleRight && this._markerGroup.removeLayer(i._middleRight),
                    i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null,
                    this._fireEdit())
                },
                _onContextMenu: function(t) {
                    var e = t.target;
                    this._poly,
                    this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, {
                        marker: e,
                        layers: this._markerGroup,
                        poly: this._poly
                    }),
                    L.DomEvent.stopPropagation
                },
                _onTouchMove: function(t) {
                    var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0])
                      , i = this._map.layerPointToLatLng(e)
                      , o = t.target;
                    L.extend(o._origLatLng, i),
                    o._middleLeft && o._middleLeft.setLatLng(this._getMiddleLatLng(o._prev, o)),
                    o._middleRight && o._middleRight.setLatLng(this._getMiddleLatLng(o, o._next)),
                    this._poly.redraw(),
                    this.updateMarkers()
                },
                _updateIndexes: function(t, e) {
                    this._markerGroup.eachLayer((function(i) {
                        i._index > t && (i._index += e)
                    }
                    ))
                },
                _createMiddleMarker: function(t, e) {
                    var i, o, n, s = this._getMiddleLatLng(t, e), a = this._createMarker(s);
                    a.setOpacity(.6),
                    t._middleRight = e._middleLeft = a,
                    o = function() {
                        a.off("touchmove", o, this);
                        var n = e._index;
                        a._index = n,
                        a.off("click", i, this).on("click", this._onMarkerClick, this),
                        s.lat = a.getLatLng().lat,
                        s.lng = a.getLatLng().lng,
                        this._spliceLatLngs(n, 0, s),
                        this._markers.splice(n, 0, a),
                        a.setOpacity(1),
                        this._updateIndexes(n, 1),
                        e._index++,
                        this._updatePrevNext(t, a),
                        this._updatePrevNext(a, e),
                        this._poly.fire("editstart")
                    }
                    ,
                    n = function() {
                        a.off("dragstart", o, this),
                        a.off("dragend", n, this),
                        a.off("touchmove", o, this),
                        this._createMiddleMarker(t, a),
                        this._createMiddleMarker(a, e)
                    }
                    ,
                    i = function() {
                        o.call(this),
                        n.call(this),
                        this._fireEdit()
                    }
                    ,
                    a.on("click", i, this).on("dragstart", o, this).on("dragend", n, this).on("touchmove", o, this),
                    this._markerGroup.addLayer(a)
                },
                _updatePrevNext: function(t, e) {
                    t && (t._next = e),
                    e && (e._prev = t)
                },
                _getMiddleLatLng: function(t, e) {
                    var i = this._poly._map
                      , o = i.project(t.getLatLng())
                      , n = i.project(e.getLatLng());
                    return i.unproject(o._add(n)._divideBy(2))
                }
            }),
            L.Polyline.addInitHook((function() {
                this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this),
                this.options.editable && this.editing.enable()),
                this.on("add", (function() {
                    this.editing && this.editing.enabled() && this.editing.addHooks()
                }
                )),
                this.on("remove", (function() {
                    this.editing && this.editing.enabled() && this.editing.removeHooks()
                }
                )))
            }
            )),
            L.Edit = L.Edit || {},
            L.Edit.SimpleShape = L.Handler.extend({
                options: {
                    moveIcon: new L.DivIcon({
                        iconSize: new L.Point(8,8),
                        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
                    }),
                    resizeIcon: new L.DivIcon({
                        iconSize: new L.Point(8,8),
                        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
                    }),
                    touchMoveIcon: new L.DivIcon({
                        iconSize: new L.Point(20,20),
                        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
                    }),
                    touchResizeIcon: new L.DivIcon({
                        iconSize: new L.Point(20,20),
                        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
                    })
                },
                initialize: function(t, e) {
                    L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon,
                    this.options.resizeIcon = this.options.touchResizeIcon),
                    this._shape = t,
                    L.Util.setOptions(this, e)
                },
                addHooks: function() {
                    var t = this._shape;
                    this._shape._map && (this._map = this._shape._map,
                    t.setStyle(t.options.editing),
                    t._map && (this._map = t._map,
                    this._markerGroup || this._initMarkers(),
                    this._map.addLayer(this._markerGroup)))
                },
                removeHooks: function() {
                    var t = this._shape;
                    if (t.setStyle(t.options.original),
                    t._map) {
                        this._unbindMarker(this._moveMarker);
                        for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
                            this._unbindMarker(this._resizeMarkers[e]);
                        this._resizeMarkers = null,
                        this._map.removeLayer(this._markerGroup),
                        delete this._markerGroup
                    }
                    this._map = null
                },
                updateMarkers: function() {
                    this._markerGroup.clearLayers(),
                    this._initMarkers()
                },
                _initMarkers: function() {
                    this._markerGroup || (this._markerGroup = new L.LayerGroup),
                    this._createMoveMarker(),
                    this._createResizeMarker()
                },
                _createMoveMarker: function() {},
                _createResizeMarker: function() {},
                _createMarker: function(t, e) {
                    var i = new L.Marker.Touch(t,{
                        draggable: !0,
                        icon: e,
                        zIndexOffset: 10
                    });
                    return this._bindMarker(i),
                    this._markerGroup.addLayer(i),
                    i
                },
                _bindMarker: function(t) {
                    t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
                },
                _unbindMarker: function(t) {
                    t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this)
                },
                _onMarkerDragStart: function(t) {
                    t.target.setOpacity(0),
                    this._shape.fire("editstart")
                },
                _fireEdit: function() {
                    this._shape.edited = !0,
                    this._shape.fire("edit")
                },
                _onMarkerDrag: function(t) {
                    var e = t.target
                      , i = e.getLatLng();
                    e === this._moveMarker ? this._move(i) : this._resize(i),
                    this._shape.redraw(),
                    this._shape.fire("editdrag")
                },
                _onMarkerDragEnd: function(t) {
                    t.target.setOpacity(1),
                    this._fireEdit()
                },
                _onTouchStart: function(t) {
                    if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t),
                    "function" == typeof this._getCorners) {
                        var e = this._getCorners()
                          , i = t.target
                          , o = i._cornerIndex;
                        i.setOpacity(0),
                        this._oppositeCorner = e[(o + 2) % 4],
                        this._toggleCornerMarkers(0, o)
                    }
                    this._shape.fire("editstart")
                },
                _onTouchMove: function(t) {
                    var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0])
                      , i = this._map.layerPointToLatLng(e);
                    return t.target === this._moveMarker ? this._move(i) : this._resize(i),
                    this._shape.redraw(),
                    !1
                },
                _onTouchEnd: function(t) {
                    t.target.setOpacity(1),
                    this.updateMarkers(),
                    this._fireEdit()
                },
                _move: function() {},
                _resize: function() {}
            }),
            L.Edit = L.Edit || {},
            L.Edit.Rectangle = L.Edit.SimpleShape.extend({
                _createMoveMarker: function() {
                    var t = this._shape.getBounds().getCenter();
                    this._moveMarker = this._createMarker(t, this.options.moveIcon)
                },
                _createResizeMarker: function() {
                    var t = this._getCorners();
                    this._resizeMarkers = [];
                    for (var e = 0, i = t.length; e < i; e++)
                        this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)),
                        this._resizeMarkers[e]._cornerIndex = e
                },
                _onMarkerDragStart: function(t) {
                    L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
                    var e = this._getCorners()
                      , i = t.target._cornerIndex;
                    this._oppositeCorner = e[(i + 2) % 4],
                    this._toggleCornerMarkers(0, i)
                },
                _onMarkerDragEnd: function(t) {
                    var e, i = t.target;
                    i === this._moveMarker && (e = this._shape.getBounds().getCenter(),
                    i.setLatLng(e)),
                    this._toggleCornerMarkers(1),
                    this._repositionCornerMarkers(),
                    L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
                },
                _move: function(t) {
                    for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), o = this._shape.getBounds().getCenter(), n = [], s = 0, a = i.length; s < a; s++)
                        e = [i[s].lat - o.lat, i[s].lng - o.lng],
                        n.push([t.lat + e[0], t.lng + e[1]]);
                    this._shape.setLatLngs(n),
                    this._repositionCornerMarkers(),
                    this._map.fire(L.Draw.Event.EDITMOVE, {
                        layer: this._shape
                    })
                },
                _resize: function(t) {
                    var e;
                    this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)),
                    e = this._shape.getBounds(),
                    this._moveMarker.setLatLng(e.getCenter()),
                    this._map.fire(L.Draw.Event.EDITRESIZE, {
                        layer: this._shape
                    })
                },
                _getCorners: function() {
                    var t = this._shape.getBounds();
                    return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
                },
                _toggleCornerMarkers: function(t) {
                    for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
                        this._resizeMarkers[e].setOpacity(t)
                },
                _repositionCornerMarkers: function() {
                    for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++)
                        this._resizeMarkers[e].setLatLng(t[e])
                }
            }),
            L.Rectangle.addInitHook((function() {
                L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this),
                this.options.editable && this.editing.enable())
            }
            )),
            L.Edit = L.Edit || {},
            L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
                _createMoveMarker: function() {
                    var t = this._shape.getLatLng();
                    this._moveMarker = this._createMarker(t, this.options.moveIcon)
                },
                _createResizeMarker: function() {
                    this._resizeMarkers = []
                },
                _move: function(t) {
                    if (this._resizeMarkers.length) {
                        var e = this._getResizeMarkerPoint(t);
                        this._resizeMarkers[0].setLatLng(e)
                    }
                    this._shape.setLatLng(t),
                    this._map.fire(L.Draw.Event.EDITMOVE, {
                        layer: this._shape
                    })
                }
            }),
            L.CircleMarker.addInitHook((function() {
                L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this),
                this.options.editable && this.editing.enable()),
                this.on("add", (function() {
                    this.editing && this.editing.enabled() && this.editing.addHooks()
                }
                )),
                this.on("remove", (function() {
                    this.editing && this.editing.enabled() && this.editing.removeHooks()
                }
                ))
            }
            )),
            L.Edit = L.Edit || {},
            L.Edit.Circle = L.Edit.CircleMarker.extend({
                _createResizeMarker: function() {
                    var t = this._shape.getLatLng()
                      , e = this._getResizeMarkerPoint(t);
                    this._resizeMarkers = [],
                    this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon))
                },
                _getResizeMarkerPoint: function(t) {
                    var e = this._shape._radius * Math.cos(Math.PI / 4)
                      , i = this._map.project(t);
                    return this._map.unproject([i.x + e, i.y - e])
                },
                _resize: function(t) {
                    var e = this._moveMarker.getLatLng();
                    L.GeometryUtil.isVersion07x() ? radius = e.distanceTo(t) : radius = this._map.distance(e, t),
                    this._shape.setRadius(radius),
                    this._map.editTooltip && this._map._editTooltip.updateContent({
                        text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text,
                        subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic)
                    }),
                    this._shape.setRadius(radius),
                    this._map.fire(L.Draw.Event.EDITRESIZE, {
                        layer: this._shape
                    })
                }
            }),
            L.Circle.addInitHook((function() {
                L.Edit.Circle && (this.editing = new L.Edit.Circle(this),
                this.options.editable && this.editing.enable())
            }
            )),
            L.Map.mergeOptions({
                touchExtend: !0
            }),
            L.Map.TouchExtend = L.Handler.extend({
                initialize: function(t) {
                    this._map = t,
                    this._container = t._container,
                    this._pane = t._panes.overlayPane
                },
                addHooks: function() {
                    L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this),
                    L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this),
                    L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this),
                    this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this),
                    L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this),
                    L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this),
                    L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this),
                    L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this))
                },
                removeHooks: function() {
                    L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this),
                    L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this),
                    L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this),
                    this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this),
                    L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this),
                    L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this),
                    L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this),
                    L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this))
                },
                _touchEvent: function(t, e) {
                    var i = {};
                    if (void 0 !== t.touches) {
                        if (!t.touches.length)
                            return;
                        i = t.touches[0]
                    } else {
                        if ("touch" !== t.pointerType)
                            return;
                        if (i = t,
                        !this._filterClick(t))
                            return
                    }
                    var o = this._map.mouseEventToContainerPoint(i)
                      , n = this._map.mouseEventToLayerPoint(i)
                      , s = this._map.layerPointToLatLng(n);
                    this._map.fire(e, {
                        latlng: s,
                        layerPoint: n,
                        containerPoint: o,
                        pageX: i.pageX,
                        pageY: i.pageY,
                        originalEvent: t
                    })
                },
                _filterClick: function(t) {
                    var e = t.timeStamp || t.originalEvent.timeStamp
                      , i = L.DomEvent._lastClick && e - L.DomEvent._lastClick;
                    return i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? (L.DomEvent.stop(t),
                    !1) : (L.DomEvent._lastClick = e,
                    !0)
                },
                _onTouchStart: function(t) {
                    this._map._loaded && this._touchEvent(t, "touchstart")
                },
                _onTouchEnd: function(t) {
                    this._map._loaded && this._touchEvent(t, "touchend")
                },
                _onTouchCancel: function(t) {
                    if (this._map._loaded) {
                        var e = "touchcancel";
                        this._detectIE() && (e = "pointercancel"),
                        this._touchEvent(t, e)
                    }
                },
                _onTouchLeave: function(t) {
                    this._map._loaded && this._touchEvent(t, "touchleave")
                },
                _onTouchMove: function(t) {
                    this._map._loaded && this._touchEvent(t, "touchmove")
                },
                _detectIE: function() {
                    var e = t.navigator.userAgent
                      , i = e.indexOf("MSIE ");
                    if (i > 0)
                        return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
                    if (e.indexOf("Trident/") > 0) {
                        var o = e.indexOf("rv:");
                        return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10)
                    }
                    var n = e.indexOf("Edge/");
                    return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
                }
            }),
            L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend),
            L.Marker.Touch = L.Marker.extend({
                _initInteraction: function() {
                    return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy()
                },
                _initInteractionLegacy: function() {
                    if (this.options.clickable) {
                        var t = this._icon
                          , e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
                        this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]),
                        L.DomUtil.addClass(t, "leaflet-clickable"),
                        L.DomEvent.on(t, "click", this._onMouseClick, this),
                        L.DomEvent.on(t, "keypress", this._onKeyPress, this);
                        for (var i = 0; i < e.length; i++)
                            L.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                        L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this),
                        this.options.draggable && this.dragging.enable())
                    }
                },
                _detectIE: function() {
                    var e = t.navigator.userAgent
                      , i = e.indexOf("MSIE ");
                    if (i > 0)
                        return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
                    if (e.indexOf("Trident/") > 0) {
                        var o = e.indexOf("rv:");
                        return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10)
                    }
                    var n = e.indexOf("Edge/");
                    return n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
                }
            }),
            L.LatLngUtil = {
                cloneLatLngs: function(t) {
                    for (var e = [], i = 0, o = t.length; i < o; i++)
                        Array.isArray(t[i]) ? e.push(L.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i]));
                    return e
                },
                cloneLatLng: function(t) {
                    return L.latLng(t.lat, t.lng)
                }
            },
            function() {
                var t = {
                    km: 2,
                    ha: 2,
                    m: 0,
                    mi: 2,
                    ac: 2,
                    yd: 0,
                    ft: 0,
                    nm: 2
                };
                L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
                    geodesicArea: function(t) {
                        var e, i, o = t.length, n = 0, s = Math.PI / 180;
                        if (o > 2) {
                            for (var a = 0; a < o; a++)
                                e = t[a],
                                n += ((i = t[(a + 1) % o]).lng - e.lng) * s * (2 + Math.sin(e.lat * s) + Math.sin(i.lat * s));
                            n = 6378137 * n * 6378137 / 2
                        }
                        return Math.abs(n)
                    },
                    formattedNumber: function(t, e) {
                        var i = parseFloat(t).toFixed(e)
                          , o = L.drawLocal.format && L.drawLocal.format.numeric
                          , n = o && o.delimiters
                          , s = n && n.thousands
                          , a = n && n.decimal;
                        if (s || a) {
                            var r = i.split(".");
                            i = s ? r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + s) : r[0],
                            a = a || ".",
                            r.length > 1 && (i = i + a + r[1])
                        }
                        return i
                    },
                    readableArea: function(e, i, o) {
                        var n, s;
                        return o = L.Util.extend({}, t, o),
                        i ? (s = ["ha", "m"],
                        type = typeof i,
                        "string" === type ? s = [i] : "boolean" !== type && (s = i),
                        n = e >= 1e6 && -1 !== s.indexOf("km") ? L.GeometryUtil.formattedNumber(1e-6 * e, o.km) + " km²" : e >= 1e4 && -1 !== s.indexOf("ha") ? L.GeometryUtil.formattedNumber(1e-4 * e, o.ha) + " ha" : L.GeometryUtil.formattedNumber(e, o.m) + " m²") : n = (e /= .836127) >= 3097600 ? L.GeometryUtil.formattedNumber(e / 3097600, o.mi) + " mi²" : e >= 4840 ? L.GeometryUtil.formattedNumber(e / 4840, o.ac) + " acres" : L.GeometryUtil.formattedNumber(e, o.yd) + " yd²",
                        n
                    },
                    readableDistance: function(e, i, o, n, s) {
                        var a;
                        switch (s = L.Util.extend({}, t, s),
                        i ? "string" == typeof i ? i : "metric" : o ? "feet" : n ? "nauticalMile" : "yards") {
                        case "metric":
                            a = e > 1e3 ? L.GeometryUtil.formattedNumber(e / 1e3, s.km) + " km" : L.GeometryUtil.formattedNumber(e, s.m) + " m";
                            break;
                        case "feet":
                            e *= 3.28083,
                            a = L.GeometryUtil.formattedNumber(e, s.ft) + " ft";
                            break;
                        case "nauticalMile":
                            e *= .53996,
                            a = L.GeometryUtil.formattedNumber(e / 1e3, s.nm) + " nm";
                            break;
                        default:
                            a = (e *= 1.09361) > 1760 ? L.GeometryUtil.formattedNumber(e / 1760, s.mi) + " miles" : L.GeometryUtil.formattedNumber(e, s.yd) + " yd"
                        }
                        return a
                    },
                    isVersion07x: function() {
                        var t = L.version.split(".");
                        return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10)
                    }
                })
            }(),
            L.Util.extend(L.LineUtil, {
                segmentsIntersect: function(t, e, i, o) {
                    return this._checkCounterclockwise(t, i, o) !== this._checkCounterclockwise(e, i, o) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, o)
                },
                _checkCounterclockwise: function(t, e, i) {
                    return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x)
                }
            }),
            L.Polyline.include({
                intersects: function() {
                    var t, e, i, o = this._getProjectedPoints(), n = o ? o.length : 0;
                    if (this._tooFewPointsForIntersection())
                        return !1;
                    for (t = n - 1; t >= 3; t--)
                        if (e = o[t - 1],
                        i = o[t],
                        this._lineSegmentsIntersectsRange(e, i, t - 2))
                            return !0;
                    return !1
                },
                newLatLngIntersects: function(t, e) {
                    return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e)
                },
                newPointIntersects: function(t, e) {
                    var i = this._getProjectedPoints()
                      , o = i ? i.length : 0
                      , n = i ? i[o - 1] : null
                      , s = o - 2;
                    return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(n, t, s, e ? 1 : 0)
                },
                _tooFewPointsForIntersection: function(t) {
                    var e = this._getProjectedPoints()
                      , i = e ? e.length : 0;
                    return !e || (i += t || 0) <= 3
                },
                _lineSegmentsIntersectsRange: function(t, e, i, o) {
                    var n, s, a = this._getProjectedPoints();
                    o = o || 0;
                    for (var r = i; r > o; r--)
                        if (n = a[r - 1],
                        s = a[r],
                        L.LineUtil.segmentsIntersect(t, e, n, s))
                            return !0;
                    return !1
                },
                _getProjectedPoints: function() {
                    if (!this._defaultShape)
                        return this._originalPoints;
                    for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++)
                        t.push(this._map.latLngToLayerPoint(e[i]));
                    return t
                }
            }),
            L.Polygon.include({
                intersects: function() {
                    var t, e, i, o, n = this._getProjectedPoints();
                    return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (t = n.length,
                    e = n[0],
                    i = n[t - 1],
                    o = t - 2,
                    this._lineSegmentsIntersectsRange(i, e, o, 1)))
                }
            }),
            L.Control.Draw = L.Control.extend({
                options: {
                    position: "topleft",
                    draw: {},
                    edit: !1
                },
                initialize: function(t) {
                    if (L.version < "0.7")
                        throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
                    var e;
                    L.Control.prototype.initialize.call(this, t),
                    this._toolbars = {},
                    L.DrawToolbar && this.options.draw && (e = new L.DrawToolbar(this.options.draw),
                    this._toolbars[L.DrawToolbar.TYPE] = e,
                    this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
                    L.EditToolbar && this.options.edit && (e = new L.EditToolbar(this.options.edit),
                    this._toolbars[L.EditToolbar.TYPE] = e,
                    this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
                    L.toolbar = this
                },
                onAdd: function(t) {
                    var e, i = L.DomUtil.create("div", "leaflet-draw"), o = !1;
                    for (var n in this._toolbars)
                        this._toolbars.hasOwnProperty(n) && (e = this._toolbars[n].addToolbar(t)) && (o || (L.DomUtil.hasClass(e, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(e.childNodes[0], "leaflet-draw-toolbar-top"),
                        o = !0),
                        i.appendChild(e));
                    return i
                },
                onRemove: function() {
                    for (var t in this._toolbars)
                        this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar()
                },
                setDrawingOptions: function(t) {
                    for (var e in this._toolbars)
                        this._toolbars[e]instanceof L.DrawToolbar && this._toolbars[e].setOptions(t)
                },
                _toolbarEnabled: function(t) {
                    var e = t.target;
                    for (var i in this._toolbars)
                        this._toolbars[i] !== e && this._toolbars[i].disable()
                }
            }),
            L.Map.mergeOptions({
                drawControlTooltips: !0,
                drawControl: !1
            }),
            L.Map.addInitHook((function() {
                this.options.drawControl && (this.drawControl = new L.Control.Draw,
                this.addControl(this.drawControl))
            }
            )),
            L.Toolbar = L.Class.extend({
                initialize: function(t) {
                    L.setOptions(this, t),
                    this._modes = {},
                    this._actionButtons = [],
                    this._activeMode = null;
                    var e = L.version.split(".");
                    1 === parseInt(e[0], 10) && parseInt(e[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events)
                },
                enabled: function() {
                    return null !== this._activeMode
                },
                disable: function() {
                    this.enabled() && this._activeMode.handler.disable()
                },
                addToolbar: function(t) {
                    var e, i = L.DomUtil.create("div", "leaflet-draw-section"), o = 0, n = this._toolbarClass || "", s = this.getModeHandlers(t);
                    for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"),
                    this._map = t,
                    e = 0; e < s.length; e++)
                        s[e].enabled && this._initModeHandler(s[e].handler, this._toolbarContainer, o++, n, s[e].title);
                    if (o)
                        return this._lastButtonIndex = --o,
                        this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"),
                        i.appendChild(this._toolbarContainer),
                        i.appendChild(this._actionsContainer),
                        i
                },
                removeToolbar: function() {
                    for (var t in this._modes)
                        this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler),
                        this._modes[t].handler.disable(),
                        this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
                    this._modes = {};
                    for (var e = 0, i = this._actionButtons.length; e < i; e++)
                        this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
                    this._actionButtons = [],
                    this._actionsContainer = null
                },
                _initModeHandler: function(t, e, i, o, n) {
                    var s = t.type;
                    this._modes[s] = {},
                    this._modes[s].handler = t,
                    this._modes[s].button = this._createButton({
                        type: s,
                        title: n,
                        className: o + "-" + s,
                        container: e,
                        callback: this._modes[s].handler.enable,
                        context: this._modes[s].handler
                    }),
                    this._modes[s].buttonIndex = i,
                    this._modes[s].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
                },
                _detectIOS: function() {
                    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream
                },
                _createButton: function(t) {
                    var e = L.DomUtil.create("a", t.className || "", t.container)
                      , i = L.DomUtil.create("span", "sr-only", t.container);
                    e.href = "#",
                    e.appendChild(i),
                    t.title && (e.title = t.title,
                    i.innerHTML = t.title),
                    t.text && (e.innerHTML = t.text,
                    i.innerHTML = t.text);
                    var o = this._detectIOS() ? "touchstart" : "click";
                    return L.DomEvent.on(e, "click", L.DomEvent.stopPropagation).on(e, "mousedown", L.DomEvent.stopPropagation).on(e, "dblclick", L.DomEvent.stopPropagation).on(e, "touchstart", L.DomEvent.stopPropagation).on(e, "click", L.DomEvent.preventDefault).on(e, o, t.callback, t.context),
                    e
                },
                _disposeButton: function(t, e) {
                    var i = this._detectIOS() ? "touchstart" : "click";
                    L.DomEvent.off(t, "click", L.DomEvent.stopPropagation).off(t, "mousedown", L.DomEvent.stopPropagation).off(t, "dblclick", L.DomEvent.stopPropagation).off(t, "touchstart", L.DomEvent.stopPropagation).off(t, "click", L.DomEvent.preventDefault).off(t, i, e)
                },
                _handlerActivated: function(t) {
                    this.disable(),
                    this._activeMode = this._modes[t.handler],
                    L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
                    this._showActionsToolbar(),
                    this.fire("enable")
                },
                _handlerDeactivated: function() {
                    this._hideActionsToolbar(),
                    L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
                    this._activeMode = null,
                    this.fire("disable")
                },
                _createActions: function(t) {
                    var e, i, o, n, s = this._actionsContainer, a = this.getActions(t), r = a.length;
                    for (i = 0,
                    o = this._actionButtons.length; i < o; i++)
                        this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback);
                    for (this._actionButtons = []; s.firstChild; )
                        s.removeChild(s.firstChild);
                    for (var h = 0; h < r; h++)
                        "enabled"in a[h] && !a[h].enabled || (e = L.DomUtil.create("li", "", s),
                        n = this._createButton({
                            title: a[h].title,
                            text: a[h].text,
                            container: e,
                            callback: a[h].callback,
                            context: a[h].context
                        }),
                        this._actionButtons.push({
                            button: n,
                            callback: a[h].callback
                        }))
                },
                _showActionsToolbar: function() {
                    var t = this._activeMode.buttonIndex
                      , e = this._lastButtonIndex
                      , i = this._activeMode.button.offsetTop - 1;
                    this._createActions(this._activeMode.handler),
                    this._actionsContainer.style.top = i + "px",
                    0 === t && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
                    L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")),
                    t === e && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
                    L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")),
                    this._actionsContainer.style.display = "block",
                    this._map.fire(L.Draw.Event.TOOLBAROPENED)
                },
                _hideActionsToolbar: function() {
                    this._actionsContainer.style.display = "none",
                    L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
                    L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
                    L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"),
                    L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"),
                    this._map.fire(L.Draw.Event.TOOLBARCLOSED)
                }
            }),
            L.Draw = L.Draw || {},
            L.Draw.Tooltip = L.Class.extend({
                initialize: function(t) {
                    this._map = t,
                    this._popupPane = t._panes.popupPane,
                    this._visible = !1,
                    this._container = t.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null,
                    this._singleLineLabel = !1,
                    this._map.on("mouseout", this._onMouseOut, this)
                },
                dispose: function() {
                    this._map.off("mouseout", this._onMouseOut, this),
                    this._container && (this._popupPane.removeChild(this._container),
                    this._container = null)
                },
                updateContent: function(t) {
                    return this._container ? (t.subtext = t.subtext || "",
                    0 !== t.subtext.length || this._singleLineLabel ? t.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"),
                    this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"),
                    this._singleLineLabel = !0),
                    this._container.innerHTML = (t.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>",
                    t.text || t.subtext ? (this._visible = !0,
                    this._container.style.visibility = "inherit") : (this._visible = !1,
                    this._container.style.visibility = "hidden"),
                    this) : this
                },
                updatePosition: function(t) {
                    var e = this._map.latLngToLayerPoint(t)
                      , i = this._container;
                    return this._container && (this._visible && (i.style.visibility = "inherit"),
                    L.DomUtil.setPosition(i, e)),
                    this
                },
                showAsError: function() {
                    return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"),
                    this
                },
                removeError: function() {
                    return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"),
                    this
                },
                _onMouseOut: function() {
                    this._container && (this._container.style.visibility = "hidden")
                }
            }),
            L.DrawToolbar = L.Toolbar.extend({
                statics: {
                    TYPE: "draw"
                },
                options: {
                    polyline: {},
                    polygon: {},
                    rectangle: {},
                    circle: {},
                    marker: {},
                    circlemarker: {}
                },
                initialize: function(t) {
                    for (var e in this.options)
                        this.options.hasOwnProperty(e) && t[e] && (t[e] = L.extend({}, this.options[e], t[e]));
                    this._toolbarClass = "leaflet-draw-draw",
                    L.Toolbar.prototype.initialize.call(this, t)
                },
                getModeHandlers: function(t) {
                    return [{
                        enabled: this.options.polyline,
                        handler: new L.Draw.Polyline(t,this.options.polyline),
                        title: L.drawLocal.draw.toolbar.buttons.polyline
                    }, {
                        enabled: this.options.polygon,
                        handler: new L.Draw.Polygon(t,this.options.polygon),
                        title: L.drawLocal.draw.toolbar.buttons.polygon
                    }, {
                        enabled: this.options.rectangle,
                        handler: new L.Draw.Rectangle(t,this.options.rectangle),
                        title: L.drawLocal.draw.toolbar.buttons.rectangle
                    }, {
                        enabled: this.options.circle,
                        handler: new L.Draw.Circle(t,this.options.circle),
                        title: L.drawLocal.draw.toolbar.buttons.circle
                    }, {
                        enabled: this.options.marker,
                        handler: new L.Draw.Marker(t,this.options.marker),
                        title: L.drawLocal.draw.toolbar.buttons.marker
                    }, {
                        enabled: this.options.circlemarker,
                        handler: new L.Draw.CircleMarker(t,this.options.circlemarker),
                        title: L.drawLocal.draw.toolbar.buttons.circlemarker
                    }]
                },
                getActions: function(t) {
                    return [{
                        enabled: t.completeShape,
                        title: L.drawLocal.draw.toolbar.finish.title,
                        text: L.drawLocal.draw.toolbar.finish.text,
                        callback: t.completeShape,
                        context: t
                    }, {
                        enabled: t.deleteLastVertex,
                        title: L.drawLocal.draw.toolbar.undo.title,
                        text: L.drawLocal.draw.toolbar.undo.text,
                        callback: t.deleteLastVertex,
                        context: t
                    }, {
                        title: L.drawLocal.draw.toolbar.actions.title,
                        text: L.drawLocal.draw.toolbar.actions.text,
                        callback: this.disable,
                        context: this
                    }]
                },
                setOptions: function(t) {
                    for (var e in L.setOptions(this, t),
                    this._modes)
                        this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e])
                }
            }),
            L.EditToolbar = L.Toolbar.extend({
                statics: {
                    TYPE: "edit"
                },
                options: {
                    edit: {
                        selectedPathOptions: {
                            dashArray: "10, 10",
                            fill: !0,
                            fillColor: "#fe57a1",
                            fillOpacity: .1,
                            maintainColor: !1
                        }
                    },
                    remove: {},
                    poly: null,
                    featureGroup: null
                },
                initialize: function(t) {
                    t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions),
                    t.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)),
                    t.remove && (t.remove = L.extend({}, this.options.remove, t.remove)),
                    t.poly && (t.poly = L.extend({}, this.options.poly, t.poly)),
                    this._toolbarClass = "leaflet-draw-edit",
                    L.Toolbar.prototype.initialize.call(this, t),
                    this._selectedFeatureCount = 0
                },
                getModeHandlers: function(t) {
                    var e = this.options.featureGroup;
                    return [{
                        enabled: this.options.edit,
                        handler: new L.EditToolbar.Edit(t,{
                            featureGroup: e,
                            selectedPathOptions: this.options.edit.selectedPathOptions,
                            poly: this.options.poly
                        }),
                        title: L.drawLocal.edit.toolbar.buttons.edit
                    }, {
                        enabled: this.options.remove,
                        handler: new L.EditToolbar.Delete(t,{
                            featureGroup: e
                        }),
                        title: L.drawLocal.edit.toolbar.buttons.remove
                    }]
                },
                getActions: function(t) {
                    var e = [{
                        title: L.drawLocal.edit.toolbar.actions.save.title,
                        text: L.drawLocal.edit.toolbar.actions.save.text,
                        callback: this._save,
                        context: this
                    }, {
                        title: L.drawLocal.edit.toolbar.actions.cancel.title,
                        text: L.drawLocal.edit.toolbar.actions.cancel.text,
                        callback: this.disable,
                        context: this
                    }];
                    return t.removeAllLayers && e.push({
                        title: L.drawLocal.edit.toolbar.actions.clearAll.title,
                        text: L.drawLocal.edit.toolbar.actions.clearAll.text,
                        callback: this._clearAllLayers,
                        context: this
                    }),
                    e
                },
                addToolbar: function(t) {
                    var e = L.Toolbar.prototype.addToolbar.call(this, t);
                    return this._checkDisabled(),
                    this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this),
                    e
                },
                removeToolbar: function() {
                    this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this),
                    L.Toolbar.prototype.removeToolbar.call(this)
                },
                disable: function() {
                    this.enabled() && (this._activeMode.handler.revertLayers(),
                    L.Toolbar.prototype.disable.call(this))
                },
                _save: function() {
                    this._activeMode.handler.save(),
                    this._activeMode && this._activeMode.handler.disable()
                },
                _clearAllLayers: function() {
                    this._activeMode.handler.removeAllLayers(),
                    this._activeMode && this._activeMode.handler.disable()
                },
                _checkDisabled: function() {
                    var t, e = 0 !== this.options.featureGroup.getLayers().length;
                    this.options.edit && (t = this._modes[L.EditToolbar.Edit.TYPE].button,
                    e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"),
                    t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)),
                    this.options.remove && (t = this._modes[L.EditToolbar.Delete.TYPE].button,
                    e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"),
                    t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled))
                }
            }),
            L.EditToolbar.Edit = L.Handler.extend({
                statics: {
                    TYPE: "edit"
                },
                initialize: function(t, e) {
                    if (L.Handler.prototype.initialize.call(this, t),
                    L.setOptions(this, e),
                    this._featureGroup = e.featureGroup,
                    !(this._featureGroup instanceof L.FeatureGroup))
                        throw new Error("options.featureGroup must be a L.FeatureGroup");
                    this._uneditedLayerProps = {},
                    this.type = L.EditToolbar.Edit.TYPE;
                    var i = L.version.split(".");
                    1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events)
                },
                enable: function() {
                    !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
                        handler: this.type
                    }),
                    this._map.fire(L.Draw.Event.EDITSTART, {
                        handler: this.type
                    }),
                    L.Handler.prototype.enable.call(this),
                    this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this))
                },
                disable: function() {
                    this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this),
                    L.Handler.prototype.disable.call(this),
                    this._map.fire(L.Draw.Event.EDITSTOP, {
                        handler: this.type
                    }),
                    this.fire("disabled", {
                        handler: this.type
                    }))
                },
                addHooks: function() {
                    var t = this._map;
                    t && (t.getContainer().focus(),
                    this._featureGroup.eachLayer(this._enableLayerEdit, this),
                    this._tooltip = new L.Draw.Tooltip(this._map),
                    this._tooltip.updateContent({
                        text: L.drawLocal.edit.handlers.edit.tooltip.text,
                        subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                    }),
                    t._editTooltip = this._tooltip,
                    this._updateTooltip(),
                    this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
                },
                removeHooks: function() {
                    this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this),
                    this._uneditedLayerProps = {},
                    this._tooltip.dispose(),
                    this._tooltip = null,
                    this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
                },
                revertLayers: function() {
                    this._featureGroup.eachLayer((function(t) {
                        this._revertLayer(t)
                    }
                    ), this)
                },
                save: function() {
                    var t = new L.LayerGroup;
                    this._featureGroup.eachLayer((function(e) {
                        e.edited && (t.addLayer(e),
                        e.edited = !1)
                    }
                    )),
                    this._map.fire(L.Draw.Event.EDITED, {
                        layers: t
                    })
                },
                _backupLayer: function(t) {
                    var e = L.Util.stamp(t);
                    this._uneditedLayerProps[e] || (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? this._uneditedLayerProps[e] = {
                        latlngs: L.LatLngUtil.cloneLatLngs(t.getLatLngs())
                    } : t instanceof L.Circle ? this._uneditedLayerProps[e] = {
                        latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()),
                        radius: t.getRadius()
                    } : (t instanceof L.Marker || t instanceof L.CircleMarker) && (this._uneditedLayerProps[e] = {
                        latlng: L.LatLngUtil.cloneLatLng(t.getLatLng())
                    }))
                },
                _getTooltipText: function() {
                    return {
                        text: L.drawLocal.edit.handlers.edit.tooltip.text,
                        subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                    }
                },
                _updateTooltip: function() {
                    this._tooltip.updateContent(this._getTooltipText())
                },
                _revertLayer: function(t) {
                    var e = L.Util.stamp(t);
                    t.edited = !1,
                    this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof L.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng),
                    t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof L.Marker || t instanceof L.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng),
                    t.fire("revert-edited", {
                        layer: t
                    }))
                },
                _enableLayerEdit: function(t) {
                    var e, i, o = t.layer || t.target || t;
                    this._backupLayer(o),
                    this.options.poly && (i = L.Util.extend({}, this.options.poly),
                    o.options.poly = i),
                    this.options.selectedPathOptions && ((e = L.Util.extend({}, this.options.selectedPathOptions)).maintainColor && (e.color = o.options.color,
                    e.fillColor = o.options.fillColor),
                    o.options.original = L.extend({}, o.options),
                    o.options.editing = e),
                    o instanceof L.Marker ? (o.editing && o.editing.enable(),
                    o.dragging.enable(),
                    o.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : o.editing.enable()
                },
                _disableLayerEdit: function(t) {
                    var e = t.layer || t.target || t;
                    e.edited = !1,
                    e.editing && e.editing.disable(),
                    delete e.options.editing,
                    delete e.options.original,
                    this._selectedPathOptions && (e instanceof L.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions),
                    delete e.options.previousOptions)),
                    e instanceof L.Marker ? (e.dragging.disable(),
                    e.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : e.editing.disable()
                },
                _onMouseMove: function(t) {
                    this._tooltip.updatePosition(t.latlng)
                },
                _onMarkerDragEnd: function(t) {
                    var e = t.target;
                    e.edited = !0,
                    this._map.fire(L.Draw.Event.EDITMOVE, {
                        layer: e
                    })
                },
                _onTouchMove: function(t) {
                    var e = t.originalEvent.changedTouches[0]
                      , i = this._map.mouseEventToLayerPoint(e)
                      , o = this._map.layerPointToLatLng(i);
                    t.target.setLatLng(o)
                },
                _hasAvailableLayers: function() {
                    return 0 !== this._featureGroup.getLayers().length
                }
            }),
            L.EditToolbar.Delete = L.Handler.extend({
                statics: {
                    TYPE: "remove"
                },
                initialize: function(t, e) {
                    if (L.Handler.prototype.initialize.call(this, t),
                    L.Util.setOptions(this, e),
                    this._deletableLayers = this.options.featureGroup,
                    !(this._deletableLayers instanceof L.FeatureGroup))
                        throw new Error("options.featureGroup must be a L.FeatureGroup");
                    this.type = L.EditToolbar.Delete.TYPE;
                    var i = L.version.split(".");
                    1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events)
                },
                enable: function() {
                    !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
                        handler: this.type
                    }),
                    this._map.fire(L.Draw.Event.DELETESTART, {
                        handler: this.type
                    }),
                    L.Handler.prototype.enable.call(this),
                    this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this))
                },
                disable: function() {
                    this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this),
                    L.Handler.prototype.disable.call(this),
                    this._map.fire(L.Draw.Event.DELETESTOP, {
                        handler: this.type
                    }),
                    this.fire("disabled", {
                        handler: this.type
                    }))
                },
                addHooks: function() {
                    var t = this._map;
                    t && (t.getContainer().focus(),
                    this._deletableLayers.eachLayer(this._enableLayerDelete, this),
                    this._deletedLayers = new L.LayerGroup,
                    this._tooltip = new L.Draw.Tooltip(this._map),
                    this._tooltip.updateContent({
                        text: L.drawLocal.edit.handlers.remove.tooltip.text
                    }),
                    this._map.on("mousemove", this._onMouseMove, this))
                },
                removeHooks: function() {
                    this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this),
                    this._deletedLayers = null,
                    this._tooltip.dispose(),
                    this._tooltip = null,
                    this._map.off("mousemove", this._onMouseMove, this))
                },
                revertLayers: function() {
                    this._deletedLayers.eachLayer((function(t) {
                        this._deletableLayers.addLayer(t),
                        t.fire("revert-deleted", {
                            layer: t
                        })
                    }
                    ), this)
                },
                save: function() {
                    this._map.fire(L.Draw.Event.DELETED, {
                        layers: this._deletedLayers
                    })
                },
                removeAllLayers: function() {
                    this._deletableLayers.eachLayer((function(t) {
                        this._removeLayer({
                            layer: t
                        })
                    }
                    ), this),
                    this.save()
                },
                _enableLayerDelete: function(t) {
                    (t.layer || t.target || t).on("click", this._removeLayer, this)
                },
                _disableLayerDelete: function(t) {
                    var e = t.layer || t.target || t;
                    e.off("click", this._removeLayer, this),
                    this._deletedLayers.removeLayer(e)
                },
                _removeLayer: function(t) {
                    var e = t.layer || t.target || t;
                    this._deletableLayers.removeLayer(e),
                    this._deletedLayers.addLayer(e),
                    e.fire("deleted")
                },
                _onMouseMove: function(t) {
                    this._tooltip.updatePosition(t.latlng)
                },
                _hasAvailableLayers: function() {
                    return 0 !== this._deletableLayers.getLayers().length
                }
            })
        }
        ,
        5243: function(t, e) {
            /* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
            !function(t) {
                "use strict";
                var e = "1.9.4";
                function i(t) {
                    var e, i, o, n;
                    for (i = 1,
                    o = arguments.length; i < o; i++)
                        for (e in n = arguments[i])
                            t[e] = n[e];
                    return t
                }
                var o = Object.create || function() {
                    function t() {}
                    return function(e) {
                        return t.prototype = e,
                        new t
                    }
                }();
                function n(t, e) {
                    var i = Array.prototype.slice;
                    if (t.bind)
                        return t.bind.apply(t, i.call(arguments, 1));
                    var o = i.call(arguments, 2);
                    return function() {
                        return t.apply(e, o.length ? o.concat(i.call(arguments)) : arguments)
                    }
                }
                var s = 0;
                function a(t) {
                    return "_leaflet_id"in t || (t._leaflet_id = ++s),
                    t._leaflet_id
                }
                function r(t, e, i) {
                    var o, n, s, a;
                    return a = function() {
                        o = !1,
                        n && (s.apply(i, n),
                        n = !1)
                    }
                    ,
                    s = function() {
                        o ? n = arguments : (t.apply(i, arguments),
                        setTimeout(a, e),
                        o = !0)
                    }
                    ,
                    s
                }
                function h(t, e, i) {
                    var o = e[1]
                      , n = e[0]
                      , s = o - n;
                    return t === o && i ? t : ((t - n) % s + s) % s + n
                }
                function l() {
                    return !1
                }
                function c(t, e) {
                    if (!1 === e)
                        return t;
                    var i = Math.pow(10, void 0 === e ? 6 : e);
                    return Math.round(t * i) / i
                }
                function u(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }
                function d(t) {
                    return u(t).split(/\s+/)
                }
                function _(t, e) {
                    for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? o(t.options) : {}),
                    e)
                        t.options[i] = e[i];
                    return t.options
                }
                function p(t, e, i) {
                    var o = [];
                    for (var n in t)
                        o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
                    return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&")
                }
                var m = /\{ *([\w_ -]+) *\}/g;
                function f(t, e) {
                    return t.replace(m, (function(t, i) {
                        var o = e[i];
                        if (void 0 === o)
                            throw new Error("No value provided for variable " + t);
                        return "function" == typeof o && (o = o(e)),
                        o
                    }
                    ))
                }
                var g = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
                ;
                function v(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === e)
                            return i;
                    return -1
                }
                var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                function w(t) {
                    return window["webkit" + t] || window["moz" + t] || window["ms" + t]
                }
                var b = 0;
                function x(t) {
                    var e = +new Date
                      , i = Math.max(0, 16 - (e - b));
                    return b = e + i,
                    window.setTimeout(t, i)
                }
                var k = window.requestAnimationFrame || w("RequestAnimationFrame") || x
                  , T = window.cancelAnimationFrame || w("CancelAnimationFrame") || w("CancelRequestAnimationFrame") || function(t) {
                    window.clearTimeout(t)
                }
                ;
                function M(t, e, i) {
                    if (!i || k !== x)
                        return k.call(window, n(t, e));
                    t.call(e)
                }
                function P(t) {
                    t && T.call(window, t)
                }
                var E = {
                    __proto__: null,
                    extend: i,
                    create: o,
                    bind: n,
                    get lastId() {
                        return s
                    },
                    stamp: a,
                    throttle: r,
                    wrapNum: h,
                    falseFn: l,
                    formatNum: c,
                    trim: u,
                    splitWords: d,
                    setOptions: _,
                    getParamString: p,
                    template: f,
                    isArray: g,
                    indexOf: v,
                    emptyImageUrl: y,
                    requestFn: k,
                    cancelFn: T,
                    requestAnimFrame: M,
                    cancelAnimFrame: P
                };
                function C() {}
                function S(t) {
                    if ("undefined" != typeof L && L && L.Mixin) {
                        t = g(t) ? t : [t];
                        for (var e = 0; e < t.length; e++)
                            t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
                    }
                }
                C.extend = function(t) {
                    var e = function() {
                        _(this),
                        this.initialize && this.initialize.apply(this, arguments),
                        this.callInitHooks()
                    }
                      , n = e.__super__ = this.prototype
                      , s = o(n);
                    for (var a in s.constructor = e,
                    e.prototype = s,
                    this)
                        Object.prototype.hasOwnProperty.call(this, a) && "prototype" !== a && "__super__" !== a && (e[a] = this[a]);
                    return t.statics && i(e, t.statics),
                    t.includes && (S(t.includes),
                    i.apply(null, [s].concat(t.includes))),
                    i(s, t),
                    delete s.statics,
                    delete s.includes,
                    s.options && (s.options = n.options ? o(n.options) : {},
                    i(s.options, t.options)),
                    s._initHooks = [],
                    s.callInitHooks = function() {
                        if (!this._initHooksCalled) {
                            n.callInitHooks && n.callInitHooks.call(this),
                            this._initHooksCalled = !0;
                            for (var t = 0, e = s._initHooks.length; t < e; t++)
                                s._initHooks[t].call(this)
                        }
                    }
                    ,
                    e
                }
                ,
                C.include = function(t) {
                    var e = this.prototype.options;
                    return i(this.prototype, t),
                    t.options && (this.prototype.options = e,
                    this.mergeOptions(t.options)),
                    this
                }
                ,
                C.mergeOptions = function(t) {
                    return i(this.prototype.options, t),
                    this
                }
                ,
                C.addInitHook = function(t) {
                    var e = Array.prototype.slice.call(arguments, 1)
                      , i = "function" == typeof t ? t : function() {
                        this[t].apply(this, e)
                    }
                    ;
                    return this.prototype._initHooks = this.prototype._initHooks || [],
                    this.prototype._initHooks.push(i),
                    this
                }
                ;
                var D = {
                    on: function(t, e, i) {
                        if ("object" == typeof t)
                            for (var o in t)
                                this._on(o, t[o], e);
                        else
                            for (var n = 0, s = (t = d(t)).length; n < s; n++)
                                this._on(t[n], e, i);
                        return this
                    },
                    off: function(t, e, i) {
                        if (arguments.length)
                            if ("object" == typeof t)
                                for (var o in t)
                                    this._off(o, t[o], e);
                            else {
                                t = d(t);
                                for (var n = 1 === arguments.length, s = 0, a = t.length; s < a; s++)
                                    n ? this._off(t[s]) : this._off(t[s], e, i)
                            }
                        else
                            delete this._events;
                        return this
                    },
                    _on: function(t, e, i, o) {
                        if ("function" == typeof e) {
                            if (!1 === this._listens(t, e, i)) {
                                i === this && (i = void 0);
                                var n = {
                                    fn: e,
                                    ctx: i
                                };
                                o && (n.once = !0),
                                this._events = this._events || {},
                                this._events[t] = this._events[t] || [],
                                this._events[t].push(n)
                            }
                        } else
                            console.warn("wrong listener type: " + typeof e)
                    },
                    _off: function(t, e, i) {
                        var o, n, s;
                        if (this._events && (o = this._events[t]))
                            if (1 !== arguments.length)
                                if ("function" == typeof e) {
                                    var a = this._listens(t, e, i);
                                    if (!1 !== a) {
                                        var r = o[a];
                                        this._firingCount && (r.fn = l,
                                        this._events[t] = o = o.slice()),
                                        o.splice(a, 1)
                                    }
                                } else
                                    console.warn("wrong listener type: " + typeof e);
                            else {
                                if (this._firingCount)
                                    for (n = 0,
                                    s = o.length; n < s; n++)
                                        o[n].fn = l;
                                delete this._events[t]
                            }
                    },
                    fire: function(t, e, o) {
                        if (!this.listens(t, o))
                            return this;
                        var n = i({}, e, {
                            type: t,
                            target: this,
                            sourceTarget: e && e.sourceTarget || this
                        });
                        if (this._events) {
                            var s = this._events[t];
                            if (s) {
                                this._firingCount = this._firingCount + 1 || 1;
                                for (var a = 0, r = s.length; a < r; a++) {
                                    var h = s[a]
                                      , l = h.fn;
                                    h.once && this.off(t, l, h.ctx),
                                    l.call(h.ctx || this, n)
                                }
                                this._firingCount--
                            }
                        }
                        return o && this._propagateEvent(n),
                        this
                    },
                    listens: function(t, e, i, o) {
                        "string" != typeof t && console.warn('"string" type argument expected');
                        var n = e;
                        "function" != typeof e && (o = !!e,
                        n = void 0,
                        i = void 0);
                        var s = this._events && this._events[t];
                        if (s && s.length && !1 !== this._listens(t, n, i))
                            return !0;
                        if (o)
                            for (var a in this._eventParents)
                                if (this._eventParents[a].listens(t, e, i, o))
                                    return !0;
                        return !1
                    },
                    _listens: function(t, e, i) {
                        if (!this._events)
                            return !1;
                        var o = this._events[t] || [];
                        if (!e)
                            return !!o.length;
                        i === this && (i = void 0);
                        for (var n = 0, s = o.length; n < s; n++)
                            if (o[n].fn === e && o[n].ctx === i)
                                return n;
                        return !1
                    },
                    once: function(t, e, i) {
                        if ("object" == typeof t)
                            for (var o in t)
                                this._on(o, t[o], e, !0);
                        else
                            for (var n = 0, s = (t = d(t)).length; n < s; n++)
                                this._on(t[n], e, i, !0);
                        return this
                    },
                    addEventParent: function(t) {
                        return this._eventParents = this._eventParents || {},
                        this._eventParents[a(t)] = t,
                        this
                    },
                    removeEventParent: function(t) {
                        return this._eventParents && delete this._eventParents[a(t)],
                        this
                    },
                    _propagateEvent: function(t) {
                        for (var e in this._eventParents)
                            this._eventParents[e].fire(t.type, i({
                                layer: t.target,
                                propagatedFrom: t.target
                            }, t), !0)
                    }
                };
                D.addEventListener = D.on,
                D.removeEventListener = D.clearAllEventListeners = D.off,
                D.addOneTimeEventListener = D.once,
                D.fireEvent = D.fire,
                D.hasEventListeners = D.listens;
                var z = C.extend(D);
                function O(t, e, i) {
                    this.x = i ? Math.round(t) : t,
                    this.y = i ? Math.round(e) : e
                }
                var I = Math.trunc || function(t) {
                    return t > 0 ? Math.floor(t) : Math.ceil(t)
                }
                ;
                function A(t, e, i) {
                    return t instanceof O ? t : g(t) ? new O(t[0],t[1]) : null == t ? t : "object" == typeof t && "x"in t && "y"in t ? new O(t.x,t.y) : new O(t,e,i)
                }
                function Z(t, e) {
                    if (t)
                        for (var i = e ? [t, e] : t, o = 0, n = i.length; o < n; o++)
                            this.extend(i[o])
                }
                function B(t, e) {
                    return !t || t instanceof Z ? t : new Z(t,e)
                }
                function R(t, e) {
                    if (t)
                        for (var i = e ? [t, e] : t, o = 0, n = i.length; o < n; o++)
                            this.extend(i[o])
                }
                function N(t, e) {
                    return t instanceof R ? t : new R(t,e)
                }
                function H(t, e, i) {
                    if (isNaN(t) || isNaN(e))
                        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                    this.lat = +t,
                    this.lng = +e,
                    void 0 !== i && (this.alt = +i)
                }
                function U(t, e, i) {
                    return t instanceof H ? t : g(t) && "object" != typeof t[0] ? 3 === t.length ? new H(t[0],t[1],t[2]) : 2 === t.length ? new H(t[0],t[1]) : null : null == t ? t : "object" == typeof t && "lat"in t ? new H(t.lat,"lng"in t ? t.lng : t.lon,t.alt) : void 0 === e ? null : new H(t,e,i)
                }
                O.prototype = {
                    clone: function() {
                        return new O(this.x,this.y)
                    },
                    add: function(t) {
                        return this.clone()._add(A(t))
                    },
                    _add: function(t) {
                        return this.x += t.x,
                        this.y += t.y,
                        this
                    },
                    subtract: function(t) {
                        return this.clone()._subtract(A(t))
                    },
                    _subtract: function(t) {
                        return this.x -= t.x,
                        this.y -= t.y,
                        this
                    },
                    divideBy: function(t) {
                        return this.clone()._divideBy(t)
                    },
                    _divideBy: function(t) {
                        return this.x /= t,
                        this.y /= t,
                        this
                    },
                    multiplyBy: function(t) {
                        return this.clone()._multiplyBy(t)
                    },
                    _multiplyBy: function(t) {
                        return this.x *= t,
                        this.y *= t,
                        this
                    },
                    scaleBy: function(t) {
                        return new O(this.x * t.x,this.y * t.y)
                    },
                    unscaleBy: function(t) {
                        return new O(this.x / t.x,this.y / t.y)
                    },
                    round: function() {
                        return this.clone()._round()
                    },
                    _round: function() {
                        return this.x = Math.round(this.x),
                        this.y = Math.round(this.y),
                        this
                    },
                    floor: function() {
                        return this.clone()._floor()
                    },
                    _floor: function() {
                        return this.x = Math.floor(this.x),
                        this.y = Math.floor(this.y),
                        this
                    },
                    ceil: function() {
                        return this.clone()._ceil()
                    },
                    _ceil: function() {
                        return this.x = Math.ceil(this.x),
                        this.y = Math.ceil(this.y),
                        this
                    },
                    trunc: function() {
                        return this.clone()._trunc()
                    },
                    _trunc: function() {
                        return this.x = I(this.x),
                        this.y = I(this.y),
                        this
                    },
                    distanceTo: function(t) {
                        var e = (t = A(t)).x - this.x
                          , i = t.y - this.y;
                        return Math.sqrt(e * e + i * i)
                    },
                    equals: function(t) {
                        return (t = A(t)).x === this.x && t.y === this.y
                    },
                    contains: function(t) {
                        return t = A(t),
                        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                    },
                    toString: function() {
                        return "Point(" + c(this.x) + ", " + c(this.y) + ")"
                    }
                },
                Z.prototype = {
                    extend: function(t) {
                        var e, i;
                        if (!t)
                            return this;
                        if (t instanceof O || "number" == typeof t[0] || "x"in t)
                            e = i = A(t);
                        else if (e = (t = B(t)).min,
                        i = t.max,
                        !e || !i)
                            return this;
                        return this.min || this.max ? (this.min.x = Math.min(e.x, this.min.x),
                        this.max.x = Math.max(i.x, this.max.x),
                        this.min.y = Math.min(e.y, this.min.y),
                        this.max.y = Math.max(i.y, this.max.y)) : (this.min = e.clone(),
                        this.max = i.clone()),
                        this
                    },
                    getCenter: function(t) {
                        return A((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                    },
                    getBottomLeft: function() {
                        return A(this.min.x, this.max.y)
                    },
                    getTopRight: function() {
                        return A(this.max.x, this.min.y)
                    },
                    getTopLeft: function() {
                        return this.min
                    },
                    getBottomRight: function() {
                        return this.max
                    },
                    getSize: function() {
                        return this.max.subtract(this.min)
                    },
                    contains: function(t) {
                        var e, i;
                        return (t = "number" == typeof t[0] || t instanceof O ? A(t) : B(t))instanceof Z ? (e = t.min,
                        i = t.max) : e = i = t,
                        e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                    },
                    intersects: function(t) {
                        t = B(t);
                        var e = this.min
                          , i = this.max
                          , o = t.min
                          , n = t.max
                          , s = n.x >= e.x && o.x <= i.x
                          , a = n.y >= e.y && o.y <= i.y;
                        return s && a
                    },
                    overlaps: function(t) {
                        t = B(t);
                        var e = this.min
                          , i = this.max
                          , o = t.min
                          , n = t.max
                          , s = n.x > e.x && o.x < i.x
                          , a = n.y > e.y && o.y < i.y;
                        return s && a
                    },
                    isValid: function() {
                        return !(!this.min || !this.max)
                    },
                    pad: function(t) {
                        var e = this.min
                          , i = this.max
                          , o = Math.abs(e.x - i.x) * t
                          , n = Math.abs(e.y - i.y) * t;
                        return B(A(e.x - o, e.y - n), A(i.x + o, i.y + n))
                    },
                    equals: function(t) {
                        return !!t && (t = B(t),
                        this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()))
                    }
                },
                R.prototype = {
                    extend: function(t) {
                        var e, i, o = this._southWest, n = this._northEast;
                        if (t instanceof H)
                            e = t,
                            i = t;
                        else {
                            if (!(t instanceof R))
                                return t ? this.extend(U(t) || N(t)) : this;
                            if (e = t._southWest,
                            i = t._northEast,
                            !e || !i)
                                return this
                        }
                        return o || n ? (o.lat = Math.min(e.lat, o.lat),
                        o.lng = Math.min(e.lng, o.lng),
                        n.lat = Math.max(i.lat, n.lat),
                        n.lng = Math.max(i.lng, n.lng)) : (this._southWest = new H(e.lat,e.lng),
                        this._northEast = new H(i.lat,i.lng)),
                        this
                    },
                    pad: function(t) {
                        var e = this._southWest
                          , i = this._northEast
                          , o = Math.abs(e.lat - i.lat) * t
                          , n = Math.abs(e.lng - i.lng) * t;
                        return new R(new H(e.lat - o,e.lng - n),new H(i.lat + o,i.lng + n))
                    },
                    getCenter: function() {
                        return new H((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
                    },
                    getSouthWest: function() {
                        return this._southWest
                    },
                    getNorthEast: function() {
                        return this._northEast
                    },
                    getNorthWest: function() {
                        return new H(this.getNorth(),this.getWest())
                    },
                    getSouthEast: function() {
                        return new H(this.getSouth(),this.getEast())
                    },
                    getWest: function() {
                        return this._southWest.lng
                    },
                    getSouth: function() {
                        return this._southWest.lat
                    },
                    getEast: function() {
                        return this._northEast.lng
                    },
                    getNorth: function() {
                        return this._northEast.lat
                    },
                    contains: function(t) {
                        t = "number" == typeof t[0] || t instanceof H || "lat"in t ? U(t) : N(t);
                        var e, i, o = this._southWest, n = this._northEast;
                        return t instanceof R ? (e = t.getSouthWest(),
                        i = t.getNorthEast()) : e = i = t,
                        e.lat >= o.lat && i.lat <= n.lat && e.lng >= o.lng && i.lng <= n.lng
                    },
                    intersects: function(t) {
                        t = N(t);
                        var e = this._southWest
                          , i = this._northEast
                          , o = t.getSouthWest()
                          , n = t.getNorthEast()
                          , s = n.lat >= e.lat && o.lat <= i.lat
                          , a = n.lng >= e.lng && o.lng <= i.lng;
                        return s && a
                    },
                    overlaps: function(t) {
                        t = N(t);
                        var e = this._southWest
                          , i = this._northEast
                          , o = t.getSouthWest()
                          , n = t.getNorthEast()
                          , s = n.lat > e.lat && o.lat < i.lat
                          , a = n.lng > e.lng && o.lng < i.lng;
                        return s && a
                    },
                    toBBoxString: function() {
                        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                    },
                    equals: function(t, e) {
                        return !!t && (t = N(t),
                        this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
                    },
                    isValid: function() {
                        return !(!this._southWest || !this._northEast)
                    }
                },
                H.prototype = {
                    equals: function(t, e) {
                        return !!t && (t = U(t),
                        Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
                    },
                    toString: function(t) {
                        return "LatLng(" + c(this.lat, t) + ", " + c(this.lng, t) + ")"
                    },
                    distanceTo: function(t) {
                        return j.distance(this, U(t))
                    },
                    wrap: function() {
                        return j.wrapLatLng(this)
                    },
                    toBounds: function(t) {
                        var e = 180 * t / 40075017
                          , i = e / Math.cos(Math.PI / 180 * this.lat);
                        return N([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
                    },
                    clone: function() {
                        return new H(this.lat,this.lng,this.alt)
                    }
                };
                var G, F = {
                    latLngToPoint: function(t, e) {
                        var i = this.projection.project(t)
                          , o = this.scale(e);
                        return this.transformation._transform(i, o)
                    },
                    pointToLatLng: function(t, e) {
                        var i = this.scale(e)
                          , o = this.transformation.untransform(t, i);
                        return this.projection.unproject(o)
                    },
                    project: function(t) {
                        return this.projection.project(t)
                    },
                    unproject: function(t) {
                        return this.projection.unproject(t)
                    },
                    scale: function(t) {
                        return 256 * Math.pow(2, t)
                    },
                    zoom: function(t) {
                        return Math.log(t / 256) / Math.LN2
                    },
                    getProjectedBounds: function(t) {
                        if (this.infinite)
                            return null;
                        var e = this.projection.bounds
                          , i = this.scale(t);
                        return new Z(this.transformation.transform(e.min, i),this.transformation.transform(e.max, i))
                    },
                    infinite: !1,
                    wrapLatLng: function(t) {
                        var e = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng;
                        return new H(this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat,e,t.alt)
                    },
                    wrapLatLngBounds: function(t) {
                        var e = t.getCenter()
                          , i = this.wrapLatLng(e)
                          , o = e.lat - i.lat
                          , n = e.lng - i.lng;
                        if (0 === o && 0 === n)
                            return t;
                        var s = t.getSouthWest()
                          , a = t.getNorthEast();
                        return new R(new H(s.lat - o,s.lng - n),new H(a.lat - o,a.lng - n))
                    }
                }, j = i({}, F, {
                    wrapLng: [-180, 180],
                    R: 6371e3,
                    distance: function(t, e) {
                        var i = Math.PI / 180
                          , o = t.lat * i
                          , n = e.lat * i
                          , s = Math.sin((e.lat - t.lat) * i / 2)
                          , a = Math.sin((e.lng - t.lng) * i / 2)
                          , r = s * s + Math.cos(o) * Math.cos(n) * a * a
                          , h = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
                        return this.R * h
                    }
                }), W = 6378137, V = {
                    R: W,
                    MAX_LATITUDE: 85.0511287798,
                    project: function(t) {
                        var e = Math.PI / 180
                          , i = this.MAX_LATITUDE
                          , o = Math.max(Math.min(i, t.lat), -i)
                          , n = Math.sin(o * e);
                        return new O(this.R * t.lng * e,this.R * Math.log((1 + n) / (1 - n)) / 2)
                    },
                    unproject: function(t) {
                        var e = 180 / Math.PI;
                        return new H((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,t.x * e / this.R)
                    },
                    bounds: (G = W * Math.PI,
                    new Z([-G, -G],[G, G]))
                };
                function q(t, e, i, o) {
                    if (g(t))
                        return this._a = t[0],
                        this._b = t[1],
                        this._c = t[2],
                        void (this._d = t[3]);
                    this._a = t,
                    this._b = e,
                    this._c = i,
                    this._d = o
                }
                function Y(t, e, i, o) {
                    return new q(t,e,i,o)
                }
                q.prototype = {
                    transform: function(t, e) {
                        return this._transform(t.clone(), e)
                    },
                    _transform: function(t, e) {
                        return e = e || 1,
                        t.x = e * (this._a * t.x + this._b),
                        t.y = e * (this._c * t.y + this._d),
                        t
                    },
                    untransform: function(t, e) {
                        return e = e || 1,
                        new O((t.x / e - this._b) / this._a,(t.y / e - this._d) / this._c)
                    }
                };
                var K = i({}, j, {
                    code: "EPSG:3857",
                    projection: V,
                    transformation: function() {
                        var t = .5 / (Math.PI * V.R);
                        return Y(t, .5, -t, .5)
                    }()
                })
                  , X = i({}, K, {
                    code: "EPSG:900913"
                });
                function J(t) {
                    return document.createElementNS("http://www.w3.org/2000/svg", t)
                }
                function $(t, e) {
                    var i, o, n, s, a, r, h = "";
                    for (i = 0,
                    n = t.length; i < n; i++) {
                        for (o = 0,
                        s = (a = t[i]).length; o < s; o++)
                            h += (o ? "L" : "M") + (r = a[o]).x + " " + r.y;
                        h += e ? Rt.svg ? "z" : "x" : ""
                    }
                    return h || "M0 0"
                }
                var Q, tt = document.documentElement.style, et = "ActiveXObject"in window, it = et && !document.addEventListener, ot = "msLaunchUri"in navigator && !("documentMode"in document), nt = Bt("webkit"), st = Bt("android"), at = Bt("android 2") || Bt("android 3"), rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), ht = st && Bt("Google") && rt < 537 && !("AudioNode"in window), lt = !!window.opera, ct = !ot && Bt("chrome"), ut = Bt("gecko") && !nt && !lt && !et, dt = !ct && Bt("safari"), _t = Bt("phantom"), pt = "OTransition"in tt, mt = 0 === navigator.platform.indexOf("Win"), ft = et && "transition"in tt, gt = "WebKitCSSMatrix"in window && "m11"in new window.WebKitCSSMatrix && !at, vt = "MozPerspective"in tt, yt = !window.L_DISABLE_3D && (ft || gt || vt) && !pt && !_t, Lt = "undefined" != typeof orientation || Bt("mobile"), wt = Lt && nt, bt = Lt && gt, xt = !window.PointerEvent && window.MSPointerEvent, kt = !(!window.PointerEvent && !xt), Tt = "ontouchstart"in window || !!window.TouchEvent, Mt = !window.L_NO_TOUCH && (Tt || kt), Pt = Lt && lt, Et = Lt && ut, Ct = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, St = function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("testPassiveEventSupport", l, e),
                        window.removeEventListener("testPassiveEventSupport", l, e)
                    } catch (t) {}
                    return t
                }(), Dt = !!document.createElement("canvas").getContext, zt = !(!document.createElementNS || !J("svg").createSVGRect), Ot = !!zt && ((Q = document.createElement("div")).innerHTML = "<svg/>",
                "http://www.w3.org/2000/svg" === (Q.firstChild && Q.firstChild.namespaceURI)), It = !zt && function() {
                    try {
                        var t = document.createElement("div");
                        t.innerHTML = '<v:shape adj="1"/>';
                        var e = t.firstChild;
                        return e.style.behavior = "url(#default#VML)",
                        e && "object" == typeof e.adj
                    } catch (t) {
                        return !1
                    }
                }(), At = 0 === navigator.platform.indexOf("Mac"), Zt = 0 === navigator.platform.indexOf("Linux");
                function Bt(t) {
                    return navigator.userAgent.toLowerCase().indexOf(t) >= 0
                }
                var Rt = {
                    ie: et,
                    ielt9: it,
                    edge: ot,
                    webkit: nt,
                    android: st,
                    android23: at,
                    androidStock: ht,
                    opera: lt,
                    chrome: ct,
                    gecko: ut,
                    safari: dt,
                    phantom: _t,
                    opera12: pt,
                    win: mt,
                    ie3d: ft,
                    webkit3d: gt,
                    gecko3d: vt,
                    any3d: yt,
                    mobile: Lt,
                    mobileWebkit: wt,
                    mobileWebkit3d: bt,
                    msPointer: xt,
                    pointer: kt,
                    touch: Mt,
                    touchNative: Tt,
                    mobileOpera: Pt,
                    mobileGecko: Et,
                    retina: Ct,
                    passiveEvents: St,
                    canvas: Dt,
                    svg: zt,
                    vml: It,
                    inlineSvg: Ot,
                    mac: At,
                    linux: Zt
                }
                  , Nt = Rt.msPointer ? "MSPointerDown" : "pointerdown"
                  , Ht = Rt.msPointer ? "MSPointerMove" : "pointermove"
                  , Ut = Rt.msPointer ? "MSPointerUp" : "pointerup"
                  , Gt = Rt.msPointer ? "MSPointerCancel" : "pointercancel"
                  , Ft = {
                    touchstart: Nt,
                    touchmove: Ht,
                    touchend: Ut,
                    touchcancel: Gt
                }
                  , jt = {
                    touchstart: te,
                    touchmove: Qt,
                    touchend: Qt,
                    touchcancel: Qt
                }
                  , Wt = {}
                  , Vt = !1;
                function qt(t, e, i) {
                    return "touchstart" === e && $t(),
                    jt[e] ? (i = jt[e].bind(this, i),
                    t.addEventListener(Ft[e], i, !1),
                    i) : (console.warn("wrong event specified:", e),
                    l)
                }
                function Yt(t, e, i) {
                    Ft[e] ? t.removeEventListener(Ft[e], i, !1) : console.warn("wrong event specified:", e)
                }
                function Kt(t) {
                    Wt[t.pointerId] = t
                }
                function Xt(t) {
                    Wt[t.pointerId] && (Wt[t.pointerId] = t)
                }
                function Jt(t) {
                    delete Wt[t.pointerId]
                }
                function $t() {
                    Vt || (document.addEventListener(Nt, Kt, !0),
                    document.addEventListener(Ht, Xt, !0),
                    document.addEventListener(Ut, Jt, !0),
                    document.addEventListener(Gt, Jt, !0),
                    Vt = !0)
                }
                function Qt(t, e) {
                    if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
                        for (var i in e.touches = [],
                        Wt)
                            e.touches.push(Wt[i]);
                        e.changedTouches = [e],
                        t(e)
                    }
                }
                function te(t, e) {
                    e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Ke(e),
                    Qt(t, e)
                }
                function ee(t) {
                    var e, i, o = {};
                    for (i in t)
                        e = t[i],
                        o[i] = e && e.bind ? e.bind(t) : e;
                    return t = o,
                    o.type = "dblclick",
                    o.detail = 2,
                    o.isTrusted = !1,
                    o._simulated = !0,
                    o
                }
                var ie = 200;
                function oe(t, e) {
                    t.addEventListener("dblclick", e);
                    var i, o = 0;
                    function n(t) {
                        if (1 === t.detail) {
                            if ("mouse" !== t.pointerType && (!t.sourceCapabilities || t.sourceCapabilities.firesTouchEvents)) {
                                var n = Je(t);
                                if (!n.some((function(t) {
                                    return t instanceof HTMLLabelElement && t.attributes.for
                                }
                                )) || n.some((function(t) {
                                    return t instanceof HTMLInputElement || t instanceof HTMLSelectElement
                                }
                                ))) {
                                    var s = Date.now();
                                    s - o <= ie ? 2 == ++i && e(ee(t)) : i = 1,
                                    o = s
                                }
                            }
                        } else
                            i = t.detail
                    }
                    return t.addEventListener("click", n),
                    {
                        dblclick: e,
                        simDblclick: n
                    }
                }
                function ne(t, e) {
                    t.removeEventListener("dblclick", e.dblclick),
                    t.removeEventListener("click", e.simDblclick)
                }
                var se, ae, re, he, le, ce = Pe(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ue = Pe(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), de = "webkitTransition" === ue || "OTransition" === ue ? ue + "End" : "transitionend";
                function _e(t) {
                    return "string" == typeof t ? document.getElementById(t) : t
                }
                function pe(t, e) {
                    var i = t.style[e] || t.currentStyle && t.currentStyle[e];
                    if ((!i || "auto" === i) && document.defaultView) {
                        var o = document.defaultView.getComputedStyle(t, null);
                        i = o ? o[e] : null
                    }
                    return "auto" === i ? null : i
                }
                function me(t, e, i) {
                    var o = document.createElement(t);
                    return o.className = e || "",
                    i && i.appendChild(o),
                    o
                }
                function fe(t) {
                    var e = t.parentNode;
                    e && e.removeChild(t)
                }
                function ge(t) {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild)
                }
                function ve(t) {
                    var e = t.parentNode;
                    e && e.lastChild !== t && e.appendChild(t)
                }
                function ye(t) {
                    var e = t.parentNode;
                    e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
                }
                function Le(t, e) {
                    if (void 0 !== t.classList)
                        return t.classList.contains(e);
                    var i = ke(t);
                    return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                }
                function we(t, e) {
                    if (void 0 !== t.classList)
                        for (var i = d(e), o = 0, n = i.length; o < n; o++)
                            t.classList.add(i[o]);
                    else if (!Le(t, e)) {
                        var s = ke(t);
                        xe(t, (s ? s + " " : "") + e)
                    }
                }
                function be(t, e) {
                    void 0 !== t.classList ? t.classList.remove(e) : xe(t, u((" " + ke(t) + " ").replace(" " + e + " ", " ")))
                }
                function xe(t, e) {
                    void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
                }
                function ke(t) {
                    return t.correspondingElement && (t = t.correspondingElement),
                    void 0 === t.className.baseVal ? t.className : t.className.baseVal
                }
                function Te(t, e) {
                    "opacity"in t.style ? t.style.opacity = e : "filter"in t.style && Me(t, e)
                }
                function Me(t, e) {
                    var i = !1
                      , o = "DXImageTransform.Microsoft.Alpha";
                    try {
                        i = t.filters.item(o)
                    } catch (t) {
                        if (1 === e)
                            return
                    }
                    e = Math.round(100 * e),
                    i ? (i.Enabled = 100 !== e,
                    i.Opacity = e) : t.style.filter += " progid:" + o + "(opacity=" + e + ")"
                }
                function Pe(t) {
                    for (var e = document.documentElement.style, i = 0; i < t.length; i++)
                        if (t[i]in e)
                            return t[i];
                    return !1
                }
                function Ee(t, e, i) {
                    var o = e || new O(0,0);
                    t.style[ce] = (Rt.ie3d ? "translate(" + o.x + "px," + o.y + "px)" : "translate3d(" + o.x + "px," + o.y + "px,0)") + (i ? " scale(" + i + ")" : "")
                }
                function Ce(t, e) {
                    t._leaflet_pos = e,
                    Rt.any3d ? Ee(t, e) : (t.style.left = e.x + "px",
                    t.style.top = e.y + "px")
                }
                function Se(t) {
                    return t._leaflet_pos || new O(0,0)
                }
                if ("onselectstart"in document)
                    se = function() {
                        Ne(window, "selectstart", Ke)
                    }
                    ,
                    ae = function() {
                        Ue(window, "selectstart", Ke)
                    }
                    ;
                else {
                    var De = Pe(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                    se = function() {
                        if (De) {
                            var t = document.documentElement.style;
                            re = t[De],
                            t[De] = "none"
                        }
                    }
                    ,
                    ae = function() {
                        De && (document.documentElement.style[De] = re,
                        re = void 0)
                    }
                }
                function ze() {
                    Ne(window, "dragstart", Ke)
                }
                function Oe() {
                    Ue(window, "dragstart", Ke)
                }
                function Ie(t) {
                    for (; -1 === t.tabIndex; )
                        t = t.parentNode;
                    t.style && (Ae(),
                    he = t,
                    le = t.style.outlineStyle,
                    t.style.outlineStyle = "none",
                    Ne(window, "keydown", Ae))
                }
                function Ae() {
                    he && (he.style.outlineStyle = le,
                    he = void 0,
                    le = void 0,
                    Ue(window, "keydown", Ae))
                }
                function Ze(t) {
                    do {
                        t = t.parentNode
                    } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
                    return t
                }
                function Be(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        x: e.width / t.offsetWidth || 1,
                        y: e.height / t.offsetHeight || 1,
                        boundingClientRect: e
                    }
                }
                var Re = {
                    __proto__: null,
                    TRANSFORM: ce,
                    TRANSITION: ue,
                    TRANSITION_END: de,
                    get: _e,
                    getStyle: pe,
                    create: me,
                    remove: fe,
                    empty: ge,
                    toFront: ve,
                    toBack: ye,
                    hasClass: Le,
                    addClass: we,
                    removeClass: be,
                    setClass: xe,
                    getClass: ke,
                    setOpacity: Te,
                    testProp: Pe,
                    setTransform: Ee,
                    setPosition: Ce,
                    getPosition: Se,
                    get disableTextSelection() {
                        return se
                    },
                    get enableTextSelection() {
                        return ae
                    },
                    disableImageDrag: ze,
                    enableImageDrag: Oe,
                    preventOutline: Ie,
                    restoreOutline: Ae,
                    getSizedParentNode: Ze,
                    getScale: Be
                };
                function Ne(t, e, i, o) {
                    if (e && "object" == typeof e)
                        for (var n in e)
                            je(t, n, e[n], i);
                    else
                        for (var s = 0, a = (e = d(e)).length; s < a; s++)
                            je(t, e[s], i, o);
                    return this
                }
                var He = "_leaflet_events";
                function Ue(t, e, i, o) {
                    if (1 === arguments.length)
                        Ge(t),
                        delete t[He];
                    else if (e && "object" == typeof e)
                        for (var n in e)
                            We(t, n, e[n], i);
                    else if (e = d(e),
                    2 === arguments.length)
                        Ge(t, (function(t) {
                            return -1 !== v(e, t)
                        }
                        ));
                    else
                        for (var s = 0, a = e.length; s < a; s++)
                            We(t, e[s], i, o);
                    return this
                }
                function Ge(t, e) {
                    for (var i in t[He]) {
                        var o = i.split(/\d/)[0];
                        e && !e(o) || We(t, o, null, null, i)
                    }
                }
                var Fe = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    wheel: !("onwheel"in window) && "mousewheel"
                };
                function je(t, e, i, o) {
                    var n = e + a(i) + (o ? "_" + a(o) : "");
                    if (t[He] && t[He][n])
                        return this;
                    var s = function(e) {
                        return i.call(o || t, e || window.event)
                    }
                      , r = s;
                    !Rt.touchNative && Rt.pointer && 0 === e.indexOf("touch") ? s = qt(t, e, s) : Rt.touch && "dblclick" === e ? s = oe(t, s) : "addEventListener"in t ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e ? t.addEventListener(Fe[e] || e, s, !!Rt.passiveEvents && {
                        passive: !1
                    }) : "mouseenter" === e || "mouseleave" === e ? (s = function(e) {
                        e = e || window.event,
                        ei(t, e) && r(e)
                    }
                    ,
                    t.addEventListener(Fe[e], s, !1)) : t.addEventListener(e, r, !1) : t.attachEvent("on" + e, s),
                    t[He] = t[He] || {},
                    t[He][n] = s
                }
                function We(t, e, i, o, n) {
                    n = n || e + a(i) + (o ? "_" + a(o) : "");
                    var s = t[He] && t[He][n];
                    if (!s)
                        return this;
                    !Rt.touchNative && Rt.pointer && 0 === e.indexOf("touch") ? Yt(t, e, s) : Rt.touch && "dblclick" === e ? ne(t, s) : "removeEventListener"in t ? t.removeEventListener(Fe[e] || e, s, !1) : t.detachEvent("on" + e, s),
                    t[He][n] = null
                }
                function Ve(t) {
                    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
                    this
                }
                function qe(t) {
                    return je(t, "wheel", Ve),
                    this
                }
                function Ye(t) {
                    return Ne(t, "mousedown touchstart dblclick contextmenu", Ve),
                    t._leaflet_disable_click = !0,
                    this
                }
                function Ke(t) {
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    this
                }
                function Xe(t) {
                    return Ke(t),
                    Ve(t),
                    this
                }
                function Je(t) {
                    if (t.composedPath)
                        return t.composedPath();
                    for (var e = [], i = t.target; i; )
                        e.push(i),
                        i = i.parentNode;
                    return e
                }
                function $e(t, e) {
                    if (!e)
                        return new O(t.clientX,t.clientY);
                    var i = Be(e)
                      , o = i.boundingClientRect;
                    return new O((t.clientX - o.left) / i.x - e.clientLeft,(t.clientY - o.top) / i.y - e.clientTop)
                }
                var Qe = Rt.linux && Rt.chrome ? window.devicePixelRatio : Rt.mac ? 3 * window.devicePixelRatio : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
                function ti(t) {
                    return Rt.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Qe : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
                }
                function ei(t, e) {
                    var i = e.relatedTarget;
                    if (!i)
                        return !0;
                    try {
                        for (; i && i !== t; )
                            i = i.parentNode
                    } catch (t) {
                        return !1
                    }
                    return i !== t
                }
                var ii = {
                    __proto__: null,
                    on: Ne,
                    off: Ue,
                    stopPropagation: Ve,
                    disableScrollPropagation: qe,
                    disableClickPropagation: Ye,
                    preventDefault: Ke,
                    stop: Xe,
                    getPropagationPath: Je,
                    getMousePosition: $e,
                    getWheelDelta: ti,
                    isExternalTarget: ei,
                    addListener: Ne,
                    removeListener: Ue
                }
                  , oi = z.extend({
                    run: function(t, e, i, o) {
                        this.stop(),
                        this._el = t,
                        this._inProgress = !0,
                        this._duration = i || .25,
                        this._easeOutPower = 1 / Math.max(o || .5, .2),
                        this._startPos = Se(t),
                        this._offset = e.subtract(this._startPos),
                        this._startTime = +new Date,
                        this.fire("start"),
                        this._animate()
                    },
                    stop: function() {
                        this._inProgress && (this._step(!0),
                        this._complete())
                    },
                    _animate: function() {
                        this._animId = M(this._animate, this),
                        this._step()
                    },
                    _step: function(t) {
                        var e = +new Date - this._startTime
                          , i = 1e3 * this._duration;
                        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1),
                        this._complete())
                    },
                    _runFrame: function(t, e) {
                        var i = this._startPos.add(this._offset.multiplyBy(t));
                        e && i._round(),
                        Ce(this._el, i),
                        this.fire("step")
                    },
                    _complete: function() {
                        P(this._animId),
                        this._inProgress = !1,
                        this.fire("end")
                    },
                    _easeOut: function(t) {
                        return 1 - Math.pow(1 - t, this._easeOutPower)
                    }
                })
                  , ni = z.extend({
                    options: {
                        crs: K,
                        center: void 0,
                        zoom: void 0,
                        minZoom: void 0,
                        maxZoom: void 0,
                        layers: [],
                        maxBounds: void 0,
                        renderer: void 0,
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4,
                        fadeAnimation: !0,
                        markerZoomAnimation: !0,
                        transform3DLimit: 8388608,
                        zoomSnap: 1,
                        zoomDelta: 1,
                        trackResize: !0
                    },
                    initialize: function(t, e) {
                        e = _(this, e),
                        this._handlers = [],
                        this._layers = {},
                        this._zoomBoundLayers = {},
                        this._sizeChanged = !0,
                        this._initContainer(t),
                        this._initLayout(),
                        this._onResize = n(this._onResize, this),
                        this._initEvents(),
                        e.maxBounds && this.setMaxBounds(e.maxBounds),
                        void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                        e.center && void 0 !== e.zoom && this.setView(U(e.center), e.zoom, {
                            reset: !0
                        }),
                        this.callInitHooks(),
                        this._zoomAnimated = ue && Rt.any3d && !Rt.mobileOpera && this.options.zoomAnimation,
                        this._zoomAnimated && (this._createAnimProxy(),
                        Ne(this._proxy, de, this._catchTransitionEnd, this)),
                        this._addLayers(this.options.layers)
                    },
                    setView: function(t, e, o) {
                        return e = void 0 === e ? this._zoom : this._limitZoom(e),
                        t = this._limitCenter(U(t), e, this.options.maxBounds),
                        o = o || {},
                        this._stop(),
                        this._loaded && !o.reset && !0 !== o && (void 0 !== o.animate && (o.zoom = i({
                            animate: o.animate
                        }, o.zoom),
                        o.pan = i({
                            animate: o.animate,
                            duration: o.duration
                        }, o.pan)),
                        this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, o.zoom) : this._tryAnimatedPan(t, o.pan)) ? (clearTimeout(this._sizeTimer),
                        this) : (this._resetView(t, e, o.pan && o.pan.noMoveStart),
                        this)
                    },
                    setZoom: function(t, e) {
                        return this._loaded ? this.setView(this.getCenter(), t, {
                            zoom: e
                        }) : (this._zoom = t,
                        this)
                    },
                    zoomIn: function(t, e) {
                        return t = t || (Rt.any3d ? this.options.zoomDelta : 1),
                        this.setZoom(this._zoom + t, e)
                    },
                    zoomOut: function(t, e) {
                        return t = t || (Rt.any3d ? this.options.zoomDelta : 1),
                        this.setZoom(this._zoom - t, e)
                    },
                    setZoomAround: function(t, e, i) {
                        var o = this.getZoomScale(e)
                          , n = this.getSize().divideBy(2)
                          , s = (t instanceof O ? t : this.latLngToContainerPoint(t)).subtract(n).multiplyBy(1 - 1 / o)
                          , a = this.containerPointToLatLng(n.add(s));
                        return this.setView(a, e, {
                            zoom: i
                        })
                    },
                    _getBoundsCenterZoom: function(t, e) {
                        e = e || {},
                        t = t.getBounds ? t.getBounds() : N(t);
                        var i = A(e.paddingTopLeft || e.padding || [0, 0])
                          , o = A(e.paddingBottomRight || e.padding || [0, 0])
                          , n = this.getBoundsZoom(t, !1, i.add(o));
                        if ((n = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, n) : n) === 1 / 0)
                            return {
                                center: t.getCenter(),
                                zoom: n
                            };
                        var s = o.subtract(i).divideBy(2)
                          , a = this.project(t.getSouthWest(), n)
                          , r = this.project(t.getNorthEast(), n);
                        return {
                            center: this.unproject(a.add(r).divideBy(2).add(s), n),
                            zoom: n
                        }
                    },
                    fitBounds: function(t, e) {
                        if (!(t = N(t)).isValid())
                            throw new Error("Bounds are not valid.");
                        var i = this._getBoundsCenterZoom(t, e);
                        return this.setView(i.center, i.zoom, e)
                    },
                    fitWorld: function(t) {
                        return this.fitBounds([[-90, -180], [90, 180]], t)
                    },
                    panTo: function(t, e) {
                        return this.setView(t, this._zoom, {
                            pan: e
                        })
                    },
                    panBy: function(t, e) {
                        if (e = e || {},
                        !(t = A(t).round()).x && !t.y)
                            return this.fire("moveend");
                        if (!0 !== e.animate && !this.getSize().contains(t))
                            return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
                            this;
                        if (this._panAnim || (this._panAnim = new oi,
                        this._panAnim.on({
                            step: this._onPanTransitionStep,
                            end: this._onPanTransitionEnd
                        }, this)),
                        e.noMoveStart || this.fire("movestart"),
                        !1 !== e.animate) {
                            we(this._mapPane, "leaflet-pan-anim");
                            var i = this._getMapPanePos().subtract(t).round();
                            this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                        } else
                            this._rawPanBy(t),
                            this.fire("move").fire("moveend");
                        return this
                    },
                    flyTo: function(t, e, i) {
                        if (!1 === (i = i || {}).animate || !Rt.any3d)
                            return this.setView(t, e, i);
                        this._stop();
                        var o = this.project(this.getCenter())
                          , n = this.project(t)
                          , s = this.getSize()
                          , a = this._zoom;
                        t = U(t),
                        e = void 0 === e ? a : e;
                        var r = Math.max(s.x, s.y)
                          , h = r * this.getZoomScale(a, e)
                          , l = n.distanceTo(o) || 1
                          , c = 1.42
                          , u = c * c;
                        function d(t) {
                            var e = (h * h - r * r + (t ? -1 : 1) * u * u * l * l) / (2 * (t ? h : r) * u * l)
                              , i = Math.sqrt(e * e + 1) - e;
                            return i < 1e-9 ? -18 : Math.log(i)
                        }
                        function _(t) {
                            return (Math.exp(t) - Math.exp(-t)) / 2
                        }
                        function p(t) {
                            return (Math.exp(t) + Math.exp(-t)) / 2
                        }
                        function m(t) {
                            return _(t) / p(t)
                        }
                        var f = d(0);
                        function g(t) {
                            return r * (p(f) / p(f + c * t))
                        }
                        function v(t) {
                            return r * (p(f) * m(f + c * t) - _(f)) / u
                        }
                        function y(t) {
                            return 1 - Math.pow(1 - t, 1.5)
                        }
                        var L = Date.now()
                          , w = (d(1) - f) / c
                          , b = i.duration ? 1e3 * i.duration : 1e3 * w * .8;
                        function x() {
                            var i = (Date.now() - L) / b
                              , s = y(i) * w;
                            i <= 1 ? (this._flyToFrame = M(x, this),
                            this._move(this.unproject(o.add(n.subtract(o).multiplyBy(v(s) / l)), a), this.getScaleZoom(r / g(s), a), {
                                flyTo: !0
                            })) : this._move(t, e)._moveEnd(!0)
                        }
                        return this._moveStart(!0, i.noMoveStart),
                        x.call(this),
                        this
                    },
                    flyToBounds: function(t, e) {
                        var i = this._getBoundsCenterZoom(t, e);
                        return this.flyTo(i.center, i.zoom, e)
                    },
                    setMaxBounds: function(t) {
                        return t = N(t),
                        this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds),
                        t.isValid() ? (this.options.maxBounds = t,
                        this._loaded && this._panInsideMaxBounds(),
                        this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
                        this)
                    },
                    setMinZoom: function(t) {
                        var e = this.options.minZoom;
                        return this.options.minZoom = t,
                        this._loaded && e !== t && (this.fire("zoomlevelschange"),
                        this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                    },
                    setMaxZoom: function(t) {
                        var e = this.options.maxZoom;
                        return this.options.maxZoom = t,
                        this._loaded && e !== t && (this.fire("zoomlevelschange"),
                        this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                    },
                    panInsideBounds: function(t, e) {
                        this._enforcingBounds = !0;
                        var i = this.getCenter()
                          , o = this._limitCenter(i, this._zoom, N(t));
                        return i.equals(o) || this.panTo(o, e),
                        this._enforcingBounds = !1,
                        this
                    },
                    panInside: function(t, e) {
                        var i = A((e = e || {}).paddingTopLeft || e.padding || [0, 0])
                          , o = A(e.paddingBottomRight || e.padding || [0, 0])
                          , n = this.project(this.getCenter())
                          , s = this.project(t)
                          , a = this.getPixelBounds()
                          , r = B([a.min.add(i), a.max.subtract(o)])
                          , h = r.getSize();
                        if (!r.contains(s)) {
                            this._enforcingBounds = !0;
                            var l = s.subtract(r.getCenter())
                              , c = r.extend(s).getSize().subtract(h);
                            n.x += l.x < 0 ? -c.x : c.x,
                            n.y += l.y < 0 ? -c.y : c.y,
                            this.panTo(this.unproject(n), e),
                            this._enforcingBounds = !1
                        }
                        return this
                    },
                    invalidateSize: function(t) {
                        if (!this._loaded)
                            return this;
                        t = i({
                            animate: !1,
                            pan: !0
                        }, !0 === t ? {
                            animate: !0
                        } : t);
                        var e = this.getSize();
                        this._sizeChanged = !0,
                        this._lastCenter = null;
                        var o = this.getSize()
                          , s = e.divideBy(2).round()
                          , a = o.divideBy(2).round()
                          , r = s.subtract(a);
                        return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r),
                        this.fire("move"),
                        t.debounceMoveend ? (clearTimeout(this._sizeTimer),
                        this._sizeTimer = setTimeout(n(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
                        this.fire("resize", {
                            oldSize: e,
                            newSize: o
                        })) : this
                    },
                    stop: function() {
                        return this.setZoom(this._limitZoom(this._zoom)),
                        this.options.zoomSnap || this.fire("viewreset"),
                        this._stop()
                    },
                    locate: function(t) {
                        if (t = this._locateOptions = i({
                            timeout: 1e4,
                            watch: !1
                        }, t),
                        !("geolocation"in navigator))
                            return this._handleGeolocationError({
                                code: 0,
                                message: "Geolocation not supported."
                            }),
                            this;
                        var e = n(this._handleGeolocationResponse, this)
                          , o = n(this._handleGeolocationError, this);
                        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, o, t) : navigator.geolocation.getCurrentPosition(e, o, t),
                        this
                    },
                    stopLocate: function() {
                        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
                        this._locateOptions && (this._locateOptions.setView = !1),
                        this
                    },
                    _handleGeolocationError: function(t) {
                        if (this._container._leaflet_id) {
                            var e = t.code
                              , i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                            this._locateOptions.setView && !this._loaded && this.fitWorld(),
                            this.fire("locationerror", {
                                code: e,
                                message: "Geolocation error: " + i + "."
                            })
                        }
                    },
                    _handleGeolocationResponse: function(t) {
                        if (this._container._leaflet_id) {
                            var e = new H(t.coords.latitude,t.coords.longitude)
                              , i = e.toBounds(2 * t.coords.accuracy)
                              , o = this._locateOptions;
                            if (o.setView) {
                                var n = this.getBoundsZoom(i);
                                this.setView(e, o.maxZoom ? Math.min(n, o.maxZoom) : n)
                            }
                            var s = {
                                latlng: e,
                                bounds: i,
                                timestamp: t.timestamp
                            };
                            for (var a in t.coords)
                                "number" == typeof t.coords[a] && (s[a] = t.coords[a]);
                            this.fire("locationfound", s)
                        }
                    },
                    addHandler: function(t, e) {
                        if (!e)
                            return this;
                        var i = this[t] = new e(this);
                        return this._handlers.push(i),
                        this.options[t] && i.enable(),
                        this
                    },
                    remove: function() {
                        if (this._initEvents(!0),
                        this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
                        this._containerId !== this._container._leaflet_id)
                            throw new Error("Map container is being reused by another instance");
                        try {
                            delete this._container._leaflet_id,
                            delete this._containerId
                        } catch (t) {
                            this._container._leaflet_id = void 0,
                            this._containerId = void 0
                        }
                        var t;
                        for (t in void 0 !== this._locationWatchId && this.stopLocate(),
                        this._stop(),
                        fe(this._mapPane),
                        this._clearControlPos && this._clearControlPos(),
                        this._resizeRequest && (P(this._resizeRequest),
                        this._resizeRequest = null),
                        this._clearHandlers(),
                        this._loaded && this.fire("unload"),
                        this._layers)
                            this._layers[t].remove();
                        for (t in this._panes)
                            fe(this._panes[t]);
                        return this._layers = [],
                        this._panes = [],
                        delete this._mapPane,
                        delete this._renderer,
                        this
                    },
                    createPane: function(t, e) {
                        var i = me("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                        return t && (this._panes[t] = i),
                        i
                    },
                    getCenter: function() {
                        return this._checkIfLoaded(),
                        this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint())
                    },
                    getZoom: function() {
                        return this._zoom
                    },
                    getBounds: function() {
                        var t = this.getPixelBounds();
                        return new R(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))
                    },
                    getMinZoom: function() {
                        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
                    },
                    getMaxZoom: function() {
                        return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                    },
                    getBoundsZoom: function(t, e, i) {
                        t = N(t),
                        i = A(i || [0, 0]);
                        var o = this.getZoom() || 0
                          , n = this.getMinZoom()
                          , s = this.getMaxZoom()
                          , a = t.getNorthWest()
                          , r = t.getSouthEast()
                          , h = this.getSize().subtract(i)
                          , l = B(this.project(r, o), this.project(a, o)).getSize()
                          , c = Rt.any3d ? this.options.zoomSnap : 1
                          , u = h.x / l.x
                          , d = h.y / l.y
                          , _ = e ? Math.max(u, d) : Math.min(u, d);
                        return o = this.getScaleZoom(_, o),
                        c && (o = Math.round(o / (c / 100)) * (c / 100),
                        o = e ? Math.ceil(o / c) * c : Math.floor(o / c) * c),
                        Math.max(n, Math.min(s, o))
                    },
                    getSize: function() {
                        return this._size && !this._sizeChanged || (this._size = new O(this._container.clientWidth || 0,this._container.clientHeight || 0),
                        this._sizeChanged = !1),
                        this._size.clone()
                    },
                    getPixelBounds: function(t, e) {
                        var i = this._getTopLeftPoint(t, e);
                        return new Z(i,i.add(this.getSize()))
                    },
                    getPixelOrigin: function() {
                        return this._checkIfLoaded(),
                        this._pixelOrigin
                    },
                    getPixelWorldBounds: function(t) {
                        return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
                    },
                    getPane: function(t) {
                        return "string" == typeof t ? this._panes[t] : t
                    },
                    getPanes: function() {
                        return this._panes
                    },
                    getContainer: function() {
                        return this._container
                    },
                    getZoomScale: function(t, e) {
                        var i = this.options.crs;
                        return e = void 0 === e ? this._zoom : e,
                        i.scale(t) / i.scale(e)
                    },
                    getScaleZoom: function(t, e) {
                        var i = this.options.crs;
                        e = void 0 === e ? this._zoom : e;
                        var o = i.zoom(t * i.scale(e));
                        return isNaN(o) ? 1 / 0 : o
                    },
                    project: function(t, e) {
                        return e = void 0 === e ? this._zoom : e,
                        this.options.crs.latLngToPoint(U(t), e)
                    },
                    unproject: function(t, e) {
                        return e = void 0 === e ? this._zoom : e,
                        this.options.crs.pointToLatLng(A(t), e)
                    },
                    layerPointToLatLng: function(t) {
                        var e = A(t).add(this.getPixelOrigin());
                        return this.unproject(e)
                    },
                    latLngToLayerPoint: function(t) {
                        return this.project(U(t))._round()._subtract(this.getPixelOrigin())
                    },
                    wrapLatLng: function(t) {
                        return this.options.crs.wrapLatLng(U(t))
                    },
                    wrapLatLngBounds: function(t) {
                        return this.options.crs.wrapLatLngBounds(N(t))
                    },
                    distance: function(t, e) {
                        return this.options.crs.distance(U(t), U(e))
                    },
                    containerPointToLayerPoint: function(t) {
                        return A(t).subtract(this._getMapPanePos())
                    },
                    layerPointToContainerPoint: function(t) {
                        return A(t).add(this._getMapPanePos())
                    },
                    containerPointToLatLng: function(t) {
                        var e = this.containerPointToLayerPoint(A(t));
                        return this.layerPointToLatLng(e)
                    },
                    latLngToContainerPoint: function(t) {
                        return this.layerPointToContainerPoint(this.latLngToLayerPoint(U(t)))
                    },
                    mouseEventToContainerPoint: function(t) {
                        return $e(t, this._container)
                    },
                    mouseEventToLayerPoint: function(t) {
                        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                    },
                    mouseEventToLatLng: function(t) {
                        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                    },
                    _initContainer: function(t) {
                        var e = this._container = _e(t);
                        if (!e)
                            throw new Error("Map container not found.");
                        if (e._leaflet_id)
                            throw new Error("Map container is already initialized.");
                        Ne(e, "scroll", this._onScroll, this),
                        this._containerId = a(e)
                    },
                    _initLayout: function() {
                        var t = this._container;
                        this._fadeAnimated = this.options.fadeAnimation && Rt.any3d,
                        we(t, "leaflet-container" + (Rt.touch ? " leaflet-touch" : "") + (Rt.retina ? " leaflet-retina" : "") + (Rt.ielt9 ? " leaflet-oldie" : "") + (Rt.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                        var e = pe(t, "position");
                        "absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"),
                        this._initPanes(),
                        this._initControlPos && this._initControlPos()
                    },
                    _initPanes: function() {
                        var t = this._panes = {};
                        this._paneRenderers = {},
                        this._mapPane = this.createPane("mapPane", this._container),
                        Ce(this._mapPane, new O(0,0)),
                        this.createPane("tilePane"),
                        this.createPane("overlayPane"),
                        this.createPane("shadowPane"),
                        this.createPane("markerPane"),
                        this.createPane("tooltipPane"),
                        this.createPane("popupPane"),
                        this.options.markerZoomAnimation || (we(t.markerPane, "leaflet-zoom-hide"),
                        we(t.shadowPane, "leaflet-zoom-hide"))
                    },
                    _resetView: function(t, e, i) {
                        Ce(this._mapPane, new O(0,0));
                        var o = !this._loaded;
                        this._loaded = !0,
                        e = this._limitZoom(e),
                        this.fire("viewprereset");
                        var n = this._zoom !== e;
                        this._moveStart(n, i)._move(t, e)._moveEnd(n),
                        this.fire("viewreset"),
                        o && this.fire("load")
                    },
                    _moveStart: function(t, e) {
                        return t && this.fire("zoomstart"),
                        e || this.fire("movestart"),
                        this
                    },
                    _move: function(t, e, i, o) {
                        void 0 === e && (e = this._zoom);
                        var n = this._zoom !== e;
                        return this._zoom = e,
                        this._lastCenter = t,
                        this._pixelOrigin = this._getNewPixelOrigin(t),
                        o ? i && i.pinch && this.fire("zoom", i) : ((n || i && i.pinch) && this.fire("zoom", i),
                        this.fire("move", i)),
                        this
                    },
                    _moveEnd: function(t) {
                        return t && this.fire("zoomend"),
                        this.fire("moveend")
                    },
                    _stop: function() {
                        return P(this._flyToFrame),
                        this._panAnim && this._panAnim.stop(),
                        this
                    },
                    _rawPanBy: function(t) {
                        Ce(this._mapPane, this._getMapPanePos().subtract(t))
                    },
                    _getZoomSpan: function() {
                        return this.getMaxZoom() - this.getMinZoom()
                    },
                    _panInsideMaxBounds: function() {
                        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                    },
                    _checkIfLoaded: function() {
                        if (!this._loaded)
                            throw new Error("Set map center and zoom first.")
                    },
                    _initEvents: function(t) {
                        this._targets = {},
                        this._targets[a(this._container)] = this;
                        var e = t ? Ue : Ne;
                        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this),
                        this.options.trackResize && e(window, "resize", this._onResize, this),
                        Rt.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                    },
                    _onResize: function() {
                        P(this._resizeRequest),
                        this._resizeRequest = M((function() {
                            this.invalidateSize({
                                debounceMoveend: !0
                            })
                        }
                        ), this)
                    },
                    _onScroll: function() {
                        this._container.scrollTop = 0,
                        this._container.scrollLeft = 0
                    },
                    _onMoveEnd: function() {
                        var t = this._getMapPanePos();
                        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                    },
                    _findEventTargets: function(t, e) {
                        for (var i, o = [], n = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s; ) {
                            if ((i = this._targets[a(s)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
                                r = !0;
                                break
                            }
                            if (i && i.listens(e, !0)) {
                                if (n && !ei(s, t))
                                    break;
                                if (o.push(i),
                                n)
                                    break
                            }
                            if (s === this._container)
                                break;
                            s = s.parentNode
                        }
                        return o.length || r || n || !this.listens(e, !0) || (o = [this]),
                        o
                    },
                    _isClickDisabled: function(t) {
                        for (; t && t !== this._container; ) {
                            if (t._leaflet_disable_click)
                                return !0;
                            t = t.parentNode
                        }
                    },
                    _handleDOMEvent: function(t) {
                        var e = t.target || t.srcElement;
                        if (!(!this._loaded || e._leaflet_disable_events || "click" === t.type && this._isClickDisabled(e))) {
                            var i = t.type;
                            "mousedown" === i && Ie(e),
                            this._fireDOMEvent(t, i)
                        }
                    },
                    _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                    _fireDOMEvent: function(t, e, o) {
                        if ("click" === t.type) {
                            var n = i({}, t);
                            n.type = "preclick",
                            this._fireDOMEvent(n, n.type, o)
                        }
                        var s = this._findEventTargets(t, e);
                        if (o) {
                            for (var a = [], r = 0; r < o.length; r++)
                                o[r].listens(e, !0) && a.push(o[r]);
                            s = a.concat(s)
                        }
                        if (s.length) {
                            "contextmenu" === e && Ke(t);
                            var h = s[0]
                              , l = {
                                originalEvent: t
                            };
                            if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                                var c = h.getLatLng && (!h._radius || h._radius <= 10);
                                l.containerPoint = c ? this.latLngToContainerPoint(h.getLatLng()) : this.mouseEventToContainerPoint(t),
                                l.layerPoint = this.containerPointToLayerPoint(l.containerPoint),
                                l.latlng = c ? h.getLatLng() : this.layerPointToLatLng(l.layerPoint)
                            }
                            for (r = 0; r < s.length; r++)
                                if (s[r].fire(e, l, !0),
                                l.originalEvent._stopped || !1 === s[r].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, e))
                                    return
                        }
                    },
                    _draggableMoved: function(t) {
                        return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                    },
                    _clearHandlers: function() {
                        for (var t = 0, e = this._handlers.length; t < e; t++)
                            this._handlers[t].disable()
                    },
                    whenReady: function(t, e) {
                        return this._loaded ? t.call(e || this, {
                            target: this
                        }) : this.on("load", t, e),
                        this
                    },
                    _getMapPanePos: function() {
                        return Se(this._mapPane) || new O(0,0)
                    },
                    _moved: function() {
                        var t = this._getMapPanePos();
                        return t && !t.equals([0, 0])
                    },
                    _getTopLeftPoint: function(t, e) {
                        return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
                    },
                    _getNewPixelOrigin: function(t, e) {
                        var i = this.getSize()._divideBy(2);
                        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
                    },
                    _latLngToNewLayerPoint: function(t, e, i) {
                        var o = this._getNewPixelOrigin(i, e);
                        return this.project(t, e)._subtract(o)
                    },
                    _latLngBoundsToNewLayerBounds: function(t, e, i) {
                        var o = this._getNewPixelOrigin(i, e);
                        return B([this.project(t.getSouthWest(), e)._subtract(o), this.project(t.getNorthWest(), e)._subtract(o), this.project(t.getSouthEast(), e)._subtract(o), this.project(t.getNorthEast(), e)._subtract(o)])
                    },
                    _getCenterLayerPoint: function() {
                        return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                    },
                    _getCenterOffset: function(t) {
                        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                    },
                    _limitCenter: function(t, e, i) {
                        if (!i)
                            return t;
                        var o = this.project(t, e)
                          , n = this.getSize().divideBy(2)
                          , s = new Z(o.subtract(n),o.add(n))
                          , a = this._getBoundsOffset(s, i, e);
                        return Math.abs(a.x) <= 1 && Math.abs(a.y) <= 1 ? t : this.unproject(o.add(a), e)
                    },
                    _limitOffset: function(t, e) {
                        if (!e)
                            return t;
                        var i = this.getPixelBounds()
                          , o = new Z(i.min.add(t),i.max.add(t));
                        return t.add(this._getBoundsOffset(o, e))
                    },
                    _getBoundsOffset: function(t, e, i) {
                        var o = B(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i))
                          , n = o.min.subtract(t.min)
                          , s = o.max.subtract(t.max);
                        return new O(this._rebound(n.x, -s.x),this._rebound(n.y, -s.y))
                    },
                    _rebound: function(t, e) {
                        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                    },
                    _limitZoom: function(t) {
                        var e = this.getMinZoom()
                          , i = this.getMaxZoom()
                          , o = Rt.any3d ? this.options.zoomSnap : 1;
                        return o && (t = Math.round(t / o) * o),
                        Math.max(e, Math.min(i, t))
                    },
                    _onPanTransitionStep: function() {
                        this.fire("move")
                    },
                    _onPanTransitionEnd: function() {
                        be(this._mapPane, "leaflet-pan-anim"),
                        this.fire("moveend")
                    },
                    _tryAnimatedPan: function(t, e) {
                        var i = this._getCenterOffset(t)._trunc();
                        return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e),
                        0))
                    },
                    _createAnimProxy: function() {
                        var t = this._proxy = me("div", "leaflet-proxy leaflet-zoom-animated");
                        this._panes.mapPane.appendChild(t),
                        this.on("zoomanim", (function(t) {
                            var e = ce
                              , i = this._proxy.style[e];
                            Ee(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                            i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                        }
                        ), this),
                        this.on("load moveend", this._animMoveEnd, this),
                        this._on("unload", this._destroyAnimProxy, this)
                    },
                    _destroyAnimProxy: function() {
                        fe(this._proxy),
                        this.off("load moveend", this._animMoveEnd, this),
                        delete this._proxy
                    },
                    _animMoveEnd: function() {
                        var t = this.getCenter()
                          , e = this.getZoom();
                        Ee(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                    },
                    _catchTransitionEnd: function(t) {
                        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                    },
                    _nothingToAnimate: function() {
                        return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                    },
                    _tryAnimatedZoom: function(t, e, i) {
                        if (this._animatingZoom)
                            return !0;
                        if (i = i || {},
                        !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                            return !1;
                        var o = this.getZoomScale(e)
                          , n = this._getCenterOffset(t)._divideBy(1 - 1 / o);
                        return !(!0 !== i.animate && !this.getSize().contains(n) || (M((function() {
                            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0)
                        }
                        ), this),
                        0))
                    },
                    _animateZoom: function(t, e, i, o) {
                        this._mapPane && (i && (this._animatingZoom = !0,
                        this._animateToCenter = t,
                        this._animateToZoom = e,
                        we(this._mapPane, "leaflet-zoom-anim")),
                        this.fire("zoomanim", {
                            center: t,
                            zoom: e,
                            noUpdate: o
                        }),
                        this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
                        this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                        setTimeout(n(this._onZoomTransitionEnd, this), 250))
                    },
                    _onZoomTransitionEnd: function() {
                        this._animatingZoom && (this._mapPane && be(this._mapPane, "leaflet-zoom-anim"),
                        this._animatingZoom = !1,
                        this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                        this._tempFireZoomEvent && this.fire("zoom"),
                        delete this._tempFireZoomEvent,
                        this.fire("move"),
                        this._moveEnd(!0))
                    }
                });
                function si(t, e) {
                    return new ni(t,e)
                }
                var ai = C.extend({
                    options: {
                        position: "topright"
                    },
                    initialize: function(t) {
                        _(this, t)
                    },
                    getPosition: function() {
                        return this.options.position
                    },
                    setPosition: function(t) {
                        var e = this._map;
                        return e && e.removeControl(this),
                        this.options.position = t,
                        e && e.addControl(this),
                        this
                    },
                    getContainer: function() {
                        return this._container
                    },
                    addTo: function(t) {
                        this.remove(),
                        this._map = t;
                        var e = this._container = this.onAdd(t)
                          , i = this.getPosition()
                          , o = t._controlCorners[i];
                        return we(e, "leaflet-control"),
                        -1 !== i.indexOf("bottom") ? o.insertBefore(e, o.firstChild) : o.appendChild(e),
                        this._map.on("unload", this.remove, this),
                        this
                    },
                    remove: function() {
                        return this._map ? (fe(this._container),
                        this.onRemove && this.onRemove(this._map),
                        this._map.off("unload", this.remove, this),
                        this._map = null,
                        this) : this
                    },
                    _refocusOnMap: function(t) {
                        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                    }
                })
                  , ri = function(t) {
                    return new ai(t)
                };
                ni.include({
                    addControl: function(t) {
                        return t.addTo(this),
                        this
                    },
                    removeControl: function(t) {
                        return t.remove(),
                        this
                    },
                    _initControlPos: function() {
                        var t = this._controlCorners = {}
                          , e = "leaflet-"
                          , i = this._controlContainer = me("div", e + "control-container", this._container);
                        function o(o, n) {
                            var s = e + o + " " + e + n;
                            t[o + n] = me("div", s, i)
                        }
                        o("top", "left"),
                        o("top", "right"),
                        o("bottom", "left"),
                        o("bottom", "right")
                    },
                    _clearControlPos: function() {
                        for (var t in this._controlCorners)
                            fe(this._controlCorners[t]);
                        fe(this._controlContainer),
                        delete this._controlCorners,
                        delete this._controlContainer
                    }
                });
                var hi = ai.extend({
                    options: {
                        collapsed: !0,
                        position: "topright",
                        autoZIndex: !0,
                        hideSingleBase: !1,
                        sortLayers: !1,
                        sortFunction: function(t, e, i, o) {
                            return i < o ? -1 : o < i ? 1 : 0
                        }
                    },
                    initialize: function(t, e, i) {
                        for (var o in _(this, i),
                        this._layerControlInputs = [],
                        this._layers = [],
                        this._lastZIndex = 0,
                        this._handlingClick = !1,
                        this._preventClick = !1,
                        t)
                            this._addLayer(t[o], o);
                        for (o in e)
                            this._addLayer(e[o], o, !0)
                    },
                    onAdd: function(t) {
                        this._initLayout(),
                        this._update(),
                        this._map = t,
                        t.on("zoomend", this._checkDisabledLayers, this);
                        for (var e = 0; e < this._layers.length; e++)
                            this._layers[e].layer.on("add remove", this._onLayerChange, this);
                        return this._container
                    },
                    addTo: function(t) {
                        return ai.prototype.addTo.call(this, t),
                        this._expandIfNotCollapsed()
                    },
                    onRemove: function() {
                        this._map.off("zoomend", this._checkDisabledLayers, this);
                        for (var t = 0; t < this._layers.length; t++)
                            this._layers[t].layer.off("add remove", this._onLayerChange, this)
                    },
                    addBaseLayer: function(t, e) {
                        return this._addLayer(t, e),
                        this._map ? this._update() : this
                    },
                    addOverlay: function(t, e) {
                        return this._addLayer(t, e, !0),
                        this._map ? this._update() : this
                    },
                    removeLayer: function(t) {
                        t.off("add remove", this._onLayerChange, this);
                        var e = this._getLayer(a(t));
                        return e && this._layers.splice(this._layers.indexOf(e), 1),
                        this._map ? this._update() : this
                    },
                    expand: function() {
                        we(this._container, "leaflet-control-layers-expanded"),
                        this._section.style.height = null;
                        var t = this._map.getSize().y - (this._container.offsetTop + 50);
                        return t < this._section.clientHeight ? (we(this._section, "leaflet-control-layers-scrollbar"),
                        this._section.style.height = t + "px") : be(this._section, "leaflet-control-layers-scrollbar"),
                        this._checkDisabledLayers(),
                        this
                    },
                    collapse: function() {
                        return be(this._container, "leaflet-control-layers-expanded"),
                        this
                    },
                    _initLayout: function() {
                        var t = "leaflet-control-layers"
                          , e = this._container = me("div", t)
                          , i = this.options.collapsed;
                        e.setAttribute("aria-haspopup", !0),
                        Ye(e),
                        qe(e);
                        var o = this._section = me("section", t + "-list");
                        i && (this._map.on("click", this.collapse, this),
                        Ne(e, {
                            mouseenter: this._expandSafely,
                            mouseleave: this.collapse
                        }, this));
                        var n = this._layersLink = me("a", t + "-toggle", e);
                        n.href = "#",
                        n.title = "Layers",
                        n.setAttribute("role", "button"),
                        Ne(n, {
                            keydown: function(t) {
                                13 === t.keyCode && this._expandSafely()
                            },
                            click: function(t) {
                                Ke(t),
                                this._expandSafely()
                            }
                        }, this),
                        i || this.expand(),
                        this._baseLayersList = me("div", t + "-base", o),
                        this._separator = me("div", t + "-separator", o),
                        this._overlaysList = me("div", t + "-overlays", o),
                        e.appendChild(o)
                    },
                    _getLayer: function(t) {
                        for (var e = 0; e < this._layers.length; e++)
                            if (this._layers[e] && a(this._layers[e].layer) === t)
                                return this._layers[e]
                    },
                    _addLayer: function(t, e, i) {
                        this._map && t.on("add remove", this._onLayerChange, this),
                        this._layers.push({
                            layer: t,
                            name: e,
                            overlay: i
                        }),
                        this.options.sortLayers && this._layers.sort(n((function(t, e) {
                            return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                        }
                        ), this)),
                        this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
                        t.setZIndex(this._lastZIndex)),
                        this._expandIfNotCollapsed()
                    },
                    _update: function() {
                        if (!this._container)
                            return this;
                        ge(this._baseLayersList),
                        ge(this._overlaysList),
                        this._layerControlInputs = [];
                        var t, e, i, o, n = 0;
                        for (i = 0; i < this._layers.length; i++)
                            o = this._layers[i],
                            this._addItem(o),
                            e = e || o.overlay,
                            t = t || !o.overlay,
                            n += o.overlay ? 0 : 1;
                        return this.options.hideSingleBase && (t = t && n > 1,
                        this._baseLayersList.style.display = t ? "" : "none"),
                        this._separator.style.display = e && t ? "" : "none",
                        this
                    },
                    _onLayerChange: function(t) {
                        this._handlingClick || this._update();
                        var e = this._getLayer(a(t.target))
                          , i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                        i && this._map.fire(i, e)
                    },
                    _createRadioElement: function(t, e) {
                        var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>"
                          , o = document.createElement("div");
                        return o.innerHTML = i,
                        o.firstChild
                    },
                    _addItem: function(t) {
                        var e, i = document.createElement("label"), o = this._map.hasLayer(t.layer);
                        t.overlay ? ((e = document.createElement("input")).type = "checkbox",
                        e.className = "leaflet-control-layers-selector",
                        e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers_" + a(this), o),
                        this._layerControlInputs.push(e),
                        e.layerId = a(t.layer),
                        Ne(e, "click", this._onInputClick, this);
                        var n = document.createElement("span");
                        n.innerHTML = " " + t.name;
                        var s = document.createElement("span");
                        return i.appendChild(s),
                        s.appendChild(e),
                        s.appendChild(n),
                        (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
                        this._checkDisabledLayers(),
                        i
                    },
                    _onInputClick: function() {
                        if (!this._preventClick) {
                            var t, e, i = this._layerControlInputs, o = [], n = [];
                            this._handlingClick = !0;
                            for (var s = i.length - 1; s >= 0; s--)
                                t = i[s],
                                e = this._getLayer(t.layerId).layer,
                                t.checked ? o.push(e) : t.checked || n.push(e);
                            for (s = 0; s < n.length; s++)
                                this._map.hasLayer(n[s]) && this._map.removeLayer(n[s]);
                            for (s = 0; s < o.length; s++)
                                this._map.hasLayer(o[s]) || this._map.addLayer(o[s]);
                            this._handlingClick = !1,
                            this._refocusOnMap()
                        }
                    },
                    _checkDisabledLayers: function() {
                        for (var t, e, i = this._layerControlInputs, o = this._map.getZoom(), n = i.length - 1; n >= 0; n--)
                            t = i[n],
                            e = this._getLayer(t.layerId).layer,
                            t.disabled = void 0 !== e.options.minZoom && o < e.options.minZoom || void 0 !== e.options.maxZoom && o > e.options.maxZoom
                    },
                    _expandIfNotCollapsed: function() {
                        return this._map && !this.options.collapsed && this.expand(),
                        this
                    },
                    _expandSafely: function() {
                        var t = this._section;
                        this._preventClick = !0,
                        Ne(t, "click", Ke),
                        this.expand();
                        var e = this;
                        setTimeout((function() {
                            Ue(t, "click", Ke),
                            e._preventClick = !1
                        }
                        ))
                    }
                })
                  , li = function(t, e, i) {
                    return new hi(t,e,i)
                }
                  , ci = ai.extend({
                    options: {
                        position: "topleft",
                        zoomInText: '<span aria-hidden="true">+</span>',
                        zoomInTitle: "Zoom in",
                        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                        zoomOutTitle: "Zoom out"
                    },
                    onAdd: function(t) {
                        var e = "leaflet-control-zoom"
                          , i = me("div", e + " leaflet-bar")
                          , o = this.options;
                        return this._zoomInButton = this._createButton(o.zoomInText, o.zoomInTitle, e + "-in", i, this._zoomIn),
                        this._zoomOutButton = this._createButton(o.zoomOutText, o.zoomOutTitle, e + "-out", i, this._zoomOut),
                        this._updateDisabled(),
                        t.on("zoomend zoomlevelschange", this._updateDisabled, this),
                        i
                    },
                    onRemove: function(t) {
                        t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                    },
                    disable: function() {
                        return this._disabled = !0,
                        this._updateDisabled(),
                        this
                    },
                    enable: function() {
                        return this._disabled = !1,
                        this._updateDisabled(),
                        this
                    },
                    _zoomIn: function(t) {
                        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                    },
                    _zoomOut: function(t) {
                        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                    },
                    _createButton: function(t, e, i, o, n) {
                        var s = me("a", i, o);
                        return s.innerHTML = t,
                        s.href = "#",
                        s.title = e,
                        s.setAttribute("role", "button"),
                        s.setAttribute("aria-label", e),
                        Ye(s),
                        Ne(s, "click", Xe),
                        Ne(s, "click", n, this),
                        Ne(s, "click", this._refocusOnMap, this),
                        s
                    },
                    _updateDisabled: function() {
                        var t = this._map
                          , e = "leaflet-disabled";
                        be(this._zoomInButton, e),
                        be(this._zoomOutButton, e),
                        this._zoomInButton.setAttribute("aria-disabled", "false"),
                        this._zoomOutButton.setAttribute("aria-disabled", "false"),
                        (this._disabled || t._zoom === t.getMinZoom()) && (we(this._zoomOutButton, e),
                        this._zoomOutButton.setAttribute("aria-disabled", "true")),
                        (this._disabled || t._zoom === t.getMaxZoom()) && (we(this._zoomInButton, e),
                        this._zoomInButton.setAttribute("aria-disabled", "true"))
                    }
                });
                ni.mergeOptions({
                    zoomControl: !0
                }),
                ni.addInitHook((function() {
                    this.options.zoomControl && (this.zoomControl = new ci,
                    this.addControl(this.zoomControl))
                }
                ));
                var ui = function(t) {
                    return new ci(t)
                }
                  , di = ai.extend({
                    options: {
                        position: "bottomleft",
                        maxWidth: 100,
                        metric: !0,
                        imperial: !0
                    },
                    onAdd: function(t) {
                        var e = "leaflet-control-scale"
                          , i = me("div", e)
                          , o = this.options;
                        return this._addScales(o, e + "-line", i),
                        t.on(o.updateWhenIdle ? "moveend" : "move", this._update, this),
                        t.whenReady(this._update, this),
                        i
                    },
                    onRemove: function(t) {
                        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                    },
                    _addScales: function(t, e, i) {
                        t.metric && (this._mScale = me("div", e, i)),
                        t.imperial && (this._iScale = me("div", e, i))
                    },
                    _update: function() {
                        var t = this._map
                          , e = t.getSize().y / 2
                          , i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                        this._updateScales(i)
                    },
                    _updateScales: function(t) {
                        this.options.metric && t && this._updateMetric(t),
                        this.options.imperial && t && this._updateImperial(t)
                    },
                    _updateMetric: function(t) {
                        var e = this._getRoundNum(t)
                          , i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                        this._updateScale(this._mScale, i, e / t)
                    },
                    _updateImperial: function(t) {
                        var e, i, o, n = 3.2808399 * t;
                        n > 5280 ? (e = n / 5280,
                        i = this._getRoundNum(e),
                        this._updateScale(this._iScale, i + " mi", i / e)) : (o = this._getRoundNum(n),
                        this._updateScale(this._iScale, o + " ft", o / n))
                    },
                    _updateScale: function(t, e, i) {
                        t.style.width = Math.round(this.options.maxWidth * i) + "px",
                        t.innerHTML = e
                    },
                    _getRoundNum: function(t) {
                        var e = Math.pow(10, (Math.floor(t) + "").length - 1)
                          , i = t / e;
                        return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
                    }
                })
                  , _i = function(t) {
                    return new di(t)
                }
                  , pi = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>'
                  , mi = ai.extend({
                    options: {
                        position: "bottomright",
                        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Rt.inlineSvg ? pi + " " : "") + "Leaflet</a>"
                    },
                    initialize: function(t) {
                        _(this, t),
                        this._attributions = {}
                    },
                    onAdd: function(t) {
                        for (var e in t.attributionControl = this,
                        this._container = me("div", "leaflet-control-attribution"),
                        Ye(this._container),
                        t._layers)
                            t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                        return this._update(),
                        t.on("layeradd", this._addAttribution, this),
                        this._container
                    },
                    onRemove: function(t) {
                        t.off("layeradd", this._addAttribution, this)
                    },
                    _addAttribution: function(t) {
                        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()),
                        t.layer.once("remove", (function() {
                            this.removeAttribution(t.layer.getAttribution())
                        }
                        ), this))
                    },
                    setPrefix: function(t) {
                        return this.options.prefix = t,
                        this._update(),
                        this
                    },
                    addAttribution: function(t) {
                        return t ? (this._attributions[t] || (this._attributions[t] = 0),
                        this._attributions[t]++,
                        this._update(),
                        this) : this
                    },
                    removeAttribution: function(t) {
                        return t ? (this._attributions[t] && (this._attributions[t]--,
                        this._update()),
                        this) : this
                    },
                    _update: function() {
                        if (this._map) {
                            var t = [];
                            for (var e in this._attributions)
                                this._attributions[e] && t.push(e);
                            var i = [];
                            this.options.prefix && i.push(this.options.prefix),
                            t.length && i.push(t.join(", ")),
                            this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ')
                        }
                    }
                });
                ni.mergeOptions({
                    attributionControl: !0
                }),
                ni.addInitHook((function() {
                    this.options.attributionControl && (new mi).addTo(this)
                }
                ));
                var fi = function(t) {
                    return new mi(t)
                };
                ai.Layers = hi,
                ai.Zoom = ci,
                ai.Scale = di,
                ai.Attribution = mi,
                ri.layers = li,
                ri.zoom = ui,
                ri.scale = _i,
                ri.attribution = fi;
                var gi = C.extend({
                    initialize: function(t) {
                        this._map = t
                    },
                    enable: function() {
                        return this._enabled || (this._enabled = !0,
                        this.addHooks()),
                        this
                    },
                    disable: function() {
                        return this._enabled ? (this._enabled = !1,
                        this.removeHooks(),
                        this) : this
                    },
                    enabled: function() {
                        return !!this._enabled
                    }
                });
                gi.addTo = function(t, e) {
                    return t.addHandler(e, this),
                    this
                }
                ;
                var vi = {
                    Events: D
                }
                  , yi = Rt.touch ? "touchstart mousedown" : "mousedown"
                  , Li = z.extend({
                    options: {
                        clickTolerance: 3
                    },
                    initialize: function(t, e, i, o) {
                        _(this, o),
                        this._element = t,
                        this._dragStartTarget = e || t,
                        this._preventOutline = i
                    },
                    enable: function() {
                        this._enabled || (Ne(this._dragStartTarget, yi, this._onDown, this),
                        this._enabled = !0)
                    },
                    disable: function() {
                        this._enabled && (Li._dragging === this && this.finishDrag(!0),
                        Ue(this._dragStartTarget, yi, this._onDown, this),
                        this._enabled = !1,
                        this._moved = !1)
                    },
                    _onDown: function(t) {
                        if (this._enabled && (this._moved = !1,
                        !Le(this._element, "leaflet-zoom-anim")))
                            if (t.touches && 1 !== t.touches.length)
                                Li._dragging === this && this.finishDrag();
                            else if (!(Li._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Li._dragging = this,
                            this._preventOutline && Ie(this._element),
                            ze(),
                            se(),
                            this._moving))) {
                                this.fire("down");
                                var e = t.touches ? t.touches[0] : t
                                  , i = Ze(this._element);
                                this._startPoint = new O(e.clientX,e.clientY),
                                this._startPos = Se(this._element),
                                this._parentScale = Be(i);
                                var o = "mousedown" === t.type;
                                Ne(document, o ? "mousemove" : "touchmove", this._onMove, this),
                                Ne(document, o ? "mouseup" : "touchend touchcancel", this._onUp, this)
                            }
                    },
                    _onMove: function(t) {
                        if (this._enabled)
                            if (t.touches && t.touches.length > 1)
                                this._moved = !0;
                            else {
                                var e = t.touches && 1 === t.touches.length ? t.touches[0] : t
                                  , i = new O(e.clientX,e.clientY)._subtract(this._startPoint);
                                (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x,
                                i.y /= this._parentScale.y,
                                Ke(t),
                                this._moved || (this.fire("dragstart"),
                                this._moved = !0,
                                we(document.body, "leaflet-dragging"),
                                this._lastTarget = t.target || t.srcElement,
                                window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
                                we(this._lastTarget, "leaflet-drag-target")),
                                this._newPos = this._startPos.add(i),
                                this._moving = !0,
                                this._lastEvent = t,
                                this._updatePosition()))
                            }
                    },
                    _updatePosition: function() {
                        var t = {
                            originalEvent: this._lastEvent
                        };
                        this.fire("predrag", t),
                        Ce(this._element, this._newPos),
                        this.fire("drag", t)
                    },
                    _onUp: function() {
                        this._enabled && this.finishDrag()
                    },
                    finishDrag: function(t) {
                        be(document.body, "leaflet-dragging"),
                        this._lastTarget && (be(this._lastTarget, "leaflet-drag-target"),
                        this._lastTarget = null),
                        Ue(document, "mousemove touchmove", this._onMove, this),
                        Ue(document, "mouseup touchend touchcancel", this._onUp, this),
                        Oe(),
                        ae();
                        var e = this._moved && this._moving;
                        this._moving = !1,
                        Li._dragging = !1,
                        e && this.fire("dragend", {
                            noInertia: t,
                            distance: this._newPos.distanceTo(this._startPos)
                        })
                    }
                });
                function wi(t, e, i) {
                    var o, n, s, a, r, h, l, c, u, d = [1, 4, 2, 8];
                    for (n = 0,
                    l = t.length; n < l; n++)
                        t[n]._code = Ii(t[n], e);
                    for (a = 0; a < 4; a++) {
                        for (c = d[a],
                        o = [],
                        n = 0,
                        s = (l = t.length) - 1; n < l; s = n++)
                            r = t[n],
                            h = t[s],
                            r._code & c ? h._code & c || ((u = Oi(h, r, c, e, i))._code = Ii(u, e),
                            o.push(u)) : (h._code & c && ((u = Oi(h, r, c, e, i))._code = Ii(u, e),
                            o.push(u)),
                            o.push(r));
                        t = o
                    }
                    return t
                }
                function bi(t, e) {
                    var i, o, n, s, a, r, h, l, c;
                    if (!t || 0 === t.length)
                        throw new Error("latlngs not passed");
                    Bi(t) || (console.warn("latlngs are not flat! Only the first ring will be used"),
                    t = t[0]);
                    var u = U([0, 0])
                      , d = N(t);
                    d.getNorthWest().distanceTo(d.getSouthWest()) * d.getNorthEast().distanceTo(d.getNorthWest()) < 1700 && (u = xi(t));
                    var _ = t.length
                      , p = [];
                    for (i = 0; i < _; i++) {
                        var m = U(t[i]);
                        p.push(e.project(U([m.lat - u.lat, m.lng - u.lng])))
                    }
                    for (r = h = l = 0,
                    i = 0,
                    o = _ - 1; i < _; o = i++)
                        n = p[i],
                        s = p[o],
                        a = n.y * s.x - s.y * n.x,
                        h += (n.x + s.x) * a,
                        l += (n.y + s.y) * a,
                        r += 3 * a;
                    c = 0 === r ? p[0] : [h / r, l / r];
                    var f = e.unproject(A(c));
                    return U([f.lat + u.lat, f.lng + u.lng])
                }
                function xi(t) {
                    for (var e = 0, i = 0, o = 0, n = 0; n < t.length; n++) {
                        var s = U(t[n]);
                        e += s.lat,
                        i += s.lng,
                        o++
                    }
                    return U([e / o, i / o])
                }
                var ki, Ti = {
                    __proto__: null,
                    clipPolygon: wi,
                    polygonCenter: bi,
                    centroid: xi
                };
                function Mi(t, e) {
                    if (!e || !t.length)
                        return t.slice();
                    var i = e * e;
                    return t = Ci(t = Di(t, i), i)
                }
                function Pi(t, e, i) {
                    return Math.sqrt(Zi(t, e, i, !0))
                }
                function Ei(t, e, i) {
                    return Zi(t, e, i)
                }
                function Ci(t, e) {
                    var i = t.length
                      , o = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
                    o[0] = o[i - 1] = 1,
                    Si(t, o, e, 0, i - 1);
                    var n, s = [];
                    for (n = 0; n < i; n++)
                        o[n] && s.push(t[n]);
                    return s
                }
                function Si(t, e, i, o, n) {
                    var s, a, r, h = 0;
                    for (a = o + 1; a <= n - 1; a++)
                        (r = Zi(t[a], t[o], t[n], !0)) > h && (s = a,
                        h = r);
                    h > i && (e[s] = 1,
                    Si(t, e, i, o, s),
                    Si(t, e, i, s, n))
                }
                function Di(t, e) {
                    for (var i = [t[0]], o = 1, n = 0, s = t.length; o < s; o++)
                        Ai(t[o], t[n]) > e && (i.push(t[o]),
                        n = o);
                    return n < s - 1 && i.push(t[s - 1]),
                    i
                }
                function zi(t, e, i, o, n) {
                    var s, a, r, h = o ? ki : Ii(t, i), l = Ii(e, i);
                    for (ki = l; ; ) {
                        if (!(h | l))
                            return [t, e];
                        if (h & l)
                            return !1;
                        r = Ii(a = Oi(t, e, s = h || l, i, n), i),
                        s === h ? (t = a,
                        h = r) : (e = a,
                        l = r)
                    }
                }
                function Oi(t, e, i, o, n) {
                    var s, a, r = e.x - t.x, h = e.y - t.y, l = o.min, c = o.max;
                    return 8 & i ? (s = t.x + r * (c.y - t.y) / h,
                    a = c.y) : 4 & i ? (s = t.x + r * (l.y - t.y) / h,
                    a = l.y) : 2 & i ? (s = c.x,
                    a = t.y + h * (c.x - t.x) / r) : 1 & i && (s = l.x,
                    a = t.y + h * (l.x - t.x) / r),
                    new O(s,a,n)
                }
                function Ii(t, e) {
                    var i = 0;
                    return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
                    t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
                    i
                }
                function Ai(t, e) {
                    var i = e.x - t.x
                      , o = e.y - t.y;
                    return i * i + o * o
                }
                function Zi(t, e, i, o) {
                    var n, s = e.x, a = e.y, r = i.x - s, h = i.y - a, l = r * r + h * h;
                    return l > 0 && ((n = ((t.x - s) * r + (t.y - a) * h) / l) > 1 ? (s = i.x,
                    a = i.y) : n > 0 && (s += r * n,
                    a += h * n)),
                    r = t.x - s,
                    h = t.y - a,
                    o ? r * r + h * h : new O(s,a)
                }
                function Bi(t) {
                    return !g(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
                }
                function Ri(t) {
                    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
                    Bi(t)
                }
                function Ni(t, e) {
                    var i, o, n, s, a, r, h, l;
                    if (!t || 0 === t.length)
                        throw new Error("latlngs not passed");
                    Bi(t) || (console.warn("latlngs are not flat! Only the first ring will be used"),
                    t = t[0]);
                    var c = U([0, 0])
                      , u = N(t);
                    u.getNorthWest().distanceTo(u.getSouthWest()) * u.getNorthEast().distanceTo(u.getNorthWest()) < 1700 && (c = xi(t));
                    var d = t.length
                      , _ = [];
                    for (i = 0; i < d; i++) {
                        var p = U(t[i]);
                        _.push(e.project(U([p.lat - c.lat, p.lng - c.lng])))
                    }
                    for (i = 0,
                    o = 0; i < d - 1; i++)
                        o += _[i].distanceTo(_[i + 1]) / 2;
                    if (0 === o)
                        l = _[0];
                    else
                        for (i = 0,
                        s = 0; i < d - 1; i++)
                            if (a = _[i],
                            r = _[i + 1],
                            (s += n = a.distanceTo(r)) > o) {
                                h = (s - o) / n,
                                l = [r.x - h * (r.x - a.x), r.y - h * (r.y - a.y)];
                                break
                            }
                    var m = e.unproject(A(l));
                    return U([m.lat + c.lat, m.lng + c.lng])
                }
                var Hi = {
                    __proto__: null,
                    simplify: Mi,
                    pointToSegmentDistance: Pi,
                    closestPointOnSegment: Ei,
                    clipSegment: zi,
                    _getEdgeIntersection: Oi,
                    _getBitCode: Ii,
                    _sqClosestPointOnSegment: Zi,
                    isFlat: Bi,
                    _flat: Ri,
                    polylineCenter: Ni
                }
                  , Ui = {
                    project: function(t) {
                        return new O(t.lng,t.lat)
                    },
                    unproject: function(t) {
                        return new H(t.y,t.x)
                    },
                    bounds: new Z([-180, -90],[180, 90])
                }
                  , Gi = {
                    R: 6378137,
                    R_MINOR: 6356752.314245179,
                    bounds: new Z([-20037508.34279, -15496570.73972],[20037508.34279, 18764656.23138]),
                    project: function(t) {
                        var e = Math.PI / 180
                          , i = this.R
                          , o = t.lat * e
                          , n = this.R_MINOR / i
                          , s = Math.sqrt(1 - n * n)
                          , a = s * Math.sin(o)
                          , r = Math.tan(Math.PI / 4 - o / 2) / Math.pow((1 - a) / (1 + a), s / 2);
                        return o = -i * Math.log(Math.max(r, 1e-10)),
                        new O(t.lng * e * i,o)
                    },
                    unproject: function(t) {
                        for (var e, i = 180 / Math.PI, o = this.R, n = this.R_MINOR / o, s = Math.sqrt(1 - n * n), a = Math.exp(-t.y / o), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, l = .1; h < 15 && Math.abs(l) > 1e-7; h++)
                            e = s * Math.sin(r),
                            e = Math.pow((1 - e) / (1 + e), s / 2),
                            r += l = Math.PI / 2 - 2 * Math.atan(a * e) - r;
                        return new H(r * i,t.x * i / o)
                    }
                }
                  , Fi = {
                    __proto__: null,
                    LonLat: Ui,
                    Mercator: Gi,
                    SphericalMercator: V
                }
                  , ji = i({}, j, {
                    code: "EPSG:3395",
                    projection: Gi,
                    transformation: function() {
                        var t = .5 / (Math.PI * Gi.R);
                        return Y(t, .5, -t, .5)
                    }()
                })
                  , Wi = i({}, j, {
                    code: "EPSG:4326",
                    projection: Ui,
                    transformation: Y(1 / 180, 1, -1 / 180, .5)
                })
                  , Vi = i({}, F, {
                    projection: Ui,
                    transformation: Y(1, 0, -1, 0),
                    scale: function(t) {
                        return Math.pow(2, t)
                    },
                    zoom: function(t) {
                        return Math.log(t) / Math.LN2
                    },
                    distance: function(t, e) {
                        var i = e.lng - t.lng
                          , o = e.lat - t.lat;
                        return Math.sqrt(i * i + o * o)
                    },
                    infinite: !0
                });
                F.Earth = j,
                F.EPSG3395 = ji,
                F.EPSG3857 = K,
                F.EPSG900913 = X,
                F.EPSG4326 = Wi,
                F.Simple = Vi;
                var qi = z.extend({
                    options: {
                        pane: "overlayPane",
                        attribution: null,
                        bubblingMouseEvents: !0
                    },
                    addTo: function(t) {
                        return t.addLayer(this),
                        this
                    },
                    remove: function() {
                        return this.removeFrom(this._map || this._mapToAdd)
                    },
                    removeFrom: function(t) {
                        return t && t.removeLayer(this),
                        this
                    },
                    getPane: function(t) {
                        return this._map.getPane(t ? this.options[t] || t : this.options.pane)
                    },
                    addInteractiveTarget: function(t) {
                        return this._map._targets[a(t)] = this,
                        this
                    },
                    removeInteractiveTarget: function(t) {
                        return delete this._map._targets[a(t)],
                        this
                    },
                    getAttribution: function() {
                        return this.options.attribution
                    },
                    _layerAdd: function(t) {
                        var e = t.target;
                        if (e.hasLayer(this)) {
                            if (this._map = e,
                            this._zoomAnimated = e._zoomAnimated,
                            this.getEvents) {
                                var i = this.getEvents();
                                e.on(i, this),
                                this.once("remove", (function() {
                                    e.off(i, this)
                                }
                                ), this)
                            }
                            this.onAdd(e),
                            this.fire("add"),
                            e.fire("layeradd", {
                                layer: this
                            })
                        }
                    }
                });
                ni.include({
                    addLayer: function(t) {
                        if (!t._layerAdd)
                            throw new Error("The provided object is not a Layer.");
                        var e = a(t);
                        return this._layers[e] || (this._layers[e] = t,
                        t._mapToAdd = this,
                        t.beforeAdd && t.beforeAdd(this),
                        this.whenReady(t._layerAdd, t)),
                        this
                    },
                    removeLayer: function(t) {
                        var e = a(t);
                        return this._layers[e] ? (this._loaded && t.onRemove(this),
                        delete this._layers[e],
                        this._loaded && (this.fire("layerremove", {
                            layer: t
                        }),
                        t.fire("remove")),
                        t._map = t._mapToAdd = null,
                        this) : this
                    },
                    hasLayer: function(t) {
                        return a(t)in this._layers
                    },
                    eachLayer: function(t, e) {
                        for (var i in this._layers)
                            t.call(e, this._layers[i]);
                        return this
                    },
                    _addLayers: function(t) {
                        for (var e = 0, i = (t = t ? g(t) ? t : [t] : []).length; e < i; e++)
                            this.addLayer(t[e])
                    },
                    _addZoomLimit: function(t) {
                        isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[a(t)] = t,
                        this._updateZoomLevels())
                    },
                    _removeZoomLimit: function(t) {
                        var e = a(t);
                        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e],
                        this._updateZoomLevels())
                    },
                    _updateZoomLevels: function() {
                        var t = 1 / 0
                          , e = -1 / 0
                          , i = this._getZoomSpan();
                        for (var o in this._zoomBoundLayers) {
                            var n = this._zoomBoundLayers[o].options;
                            t = void 0 === n.minZoom ? t : Math.min(t, n.minZoom),
                            e = void 0 === n.maxZoom ? e : Math.max(e, n.maxZoom)
                        }
                        this._layersMaxZoom = e === -1 / 0 ? void 0 : e,
                        this._layersMinZoom = t === 1 / 0 ? void 0 : t,
                        i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                        void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
                        void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
                    }
                });
                var Yi = qi.extend({
                    initialize: function(t, e) {
                        var i, o;
                        if (_(this, e),
                        this._layers = {},
                        t)
                            for (i = 0,
                            o = t.length; i < o; i++)
                                this.addLayer(t[i])
                    },
                    addLayer: function(t) {
                        var e = this.getLayerId(t);
                        return this._layers[e] = t,
                        this._map && this._map.addLayer(t),
                        this
                    },
                    removeLayer: function(t) {
                        var e = t in this._layers ? t : this.getLayerId(t);
                        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
                        delete this._layers[e],
                        this
                    },
                    hasLayer: function(t) {
                        return ("number" == typeof t ? t : this.getLayerId(t))in this._layers
                    },
                    clearLayers: function() {
                        return this.eachLayer(this.removeLayer, this)
                    },
                    invoke: function(t) {
                        var e, i, o = Array.prototype.slice.call(arguments, 1);
                        for (e in this._layers)
                            (i = this._layers[e])[t] && i[t].apply(i, o);
                        return this
                    },
                    onAdd: function(t) {
                        this.eachLayer(t.addLayer, t)
                    },
                    onRemove: function(t) {
                        this.eachLayer(t.removeLayer, t)
                    },
                    eachLayer: function(t, e) {
                        for (var i in this._layers)
                            t.call(e, this._layers[i]);
                        return this
                    },
                    getLayer: function(t) {
                        return this._layers[t]
                    },
                    getLayers: function() {
                        var t = [];
                        return this.eachLayer(t.push, t),
                        t
                    },
                    setZIndex: function(t) {
                        return this.invoke("setZIndex", t)
                    },
                    getLayerId: function(t) {
                        return a(t)
                    }
                })
                  , Ki = function(t, e) {
                    return new Yi(t,e)
                }
                  , Xi = Yi.extend({
                    addLayer: function(t) {
                        return this.hasLayer(t) ? this : (t.addEventParent(this),
                        Yi.prototype.addLayer.call(this, t),
                        this.fire("layeradd", {
                            layer: t
                        }))
                    },
                    removeLayer: function(t) {
                        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]),
                        t.removeEventParent(this),
                        Yi.prototype.removeLayer.call(this, t),
                        this.fire("layerremove", {
                            layer: t
                        })) : this
                    },
                    setStyle: function(t) {
                        return this.invoke("setStyle", t)
                    },
                    bringToFront: function() {
                        return this.invoke("bringToFront")
                    },
                    bringToBack: function() {
                        return this.invoke("bringToBack")
                    },
                    getBounds: function() {
                        var t = new R;
                        for (var e in this._layers) {
                            var i = this._layers[e];
                            t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                        }
                        return t
                    }
                })
                  , Ji = function(t, e) {
                    return new Xi(t,e)
                }
                  , $i = C.extend({
                    options: {
                        popupAnchor: [0, 0],
                        tooltipAnchor: [0, 0],
                        crossOrigin: !1
                    },
                    initialize: function(t) {
                        _(this, t)
                    },
                    createIcon: function(t) {
                        return this._createIcon("icon", t)
                    },
                    createShadow: function(t) {
                        return this._createIcon("shadow", t)
                    },
                    _createIcon: function(t, e) {
                        var i = this._getIconUrl(t);
                        if (!i) {
                            if ("icon" === t)
                                throw new Error("iconUrl not set in Icon options (see the docs).");
                            return null
                        }
                        var o = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                        return this._setIconStyles(o, t),
                        (this.options.crossOrigin || "" === this.options.crossOrigin) && (o.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                        o
                    },
                    _setIconStyles: function(t, e) {
                        var i = this.options
                          , o = i[e + "Size"];
                        "number" == typeof o && (o = [o, o]);
                        var n = A(o)
                          , s = A("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
                        t.className = "leaflet-marker-" + e + " " + (i.className || ""),
                        s && (t.style.marginLeft = -s.x + "px",
                        t.style.marginTop = -s.y + "px"),
                        n && (t.style.width = n.x + "px",
                        t.style.height = n.y + "px")
                    },
                    _createImg: function(t, e) {
                        return (e = e || document.createElement("img")).src = t,
                        e
                    },
                    _getIconUrl: function(t) {
                        return Rt.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                    }
                });
                function Qi(t) {
                    return new $i(t)
                }
                var to = $i.extend({
                    options: {
                        iconUrl: "marker-icon.png",
                        iconRetinaUrl: "marker-icon-2x.png",
                        shadowUrl: "marker-shadow.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        tooltipAnchor: [16, -28],
                        shadowSize: [41, 41]
                    },
                    _getIconUrl: function(t) {
                        return "string" != typeof to.imagePath && (to.imagePath = this._detectIconPath()),
                        (this.options.imagePath || to.imagePath) + $i.prototype._getIconUrl.call(this, t)
                    },
                    _stripUrl: function(t) {
                        var e = function(t, e, i) {
                            var o = e.exec(t);
                            return o && o[i]
                        };
                        return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1)
                    },
                    _detectIconPath: function() {
                        var t = me("div", "leaflet-default-icon-path", document.body)
                          , e = pe(t, "background-image") || pe(t, "backgroundImage");
                        if (document.body.removeChild(t),
                        e = this._stripUrl(e))
                            return e;
                        var i = document.querySelector('link[href$="leaflet.css"]');
                        return i ? i.href.substring(0, i.href.length - 11 - 1) : ""
                    }
                })
                  , eo = gi.extend({
                    initialize: function(t) {
                        this._marker = t
                    },
                    addHooks: function() {
                        var t = this._marker._icon;
                        this._draggable || (this._draggable = new Li(t,t,!0)),
                        this._draggable.on({
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).enable(),
                        we(t, "leaflet-marker-draggable")
                    },
                    removeHooks: function() {
                        this._draggable.off({
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).disable(),
                        this._marker._icon && be(this._marker._icon, "leaflet-marker-draggable")
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved
                    },
                    _adjustPan: function(t) {
                        var e = this._marker
                          , i = e._map
                          , o = this._marker.options.autoPanSpeed
                          , n = this._marker.options.autoPanPadding
                          , s = Se(e._icon)
                          , a = i.getPixelBounds()
                          , r = i.getPixelOrigin()
                          , h = B(a.min._subtract(r).add(n), a.max._subtract(r).subtract(n));
                        if (!h.contains(s)) {
                            var l = A((Math.max(h.max.x, s.x) - h.max.x) / (a.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (a.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (a.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (a.min.y - h.min.y)).multiplyBy(o);
                            i.panBy(l, {
                                animate: !1
                            }),
                            this._draggable._newPos._add(l),
                            this._draggable._startPos._add(l),
                            Ce(e._icon, this._draggable._newPos),
                            this._onDrag(t),
                            this._panRequest = M(this._adjustPan.bind(this, t))
                        }
                    },
                    _onDragStart: function() {
                        this._oldLatLng = this._marker.getLatLng(),
                        this._marker.closePopup && this._marker.closePopup(),
                        this._marker.fire("movestart").fire("dragstart")
                    },
                    _onPreDrag: function(t) {
                        this._marker.options.autoPan && (P(this._panRequest),
                        this._panRequest = M(this._adjustPan.bind(this, t)))
                    },
                    _onDrag: function(t) {
                        var e = this._marker
                          , i = e._shadow
                          , o = Se(e._icon)
                          , n = e._map.layerPointToLatLng(o);
                        i && Ce(i, o),
                        e._latlng = n,
                        t.latlng = n,
                        t.oldLatLng = this._oldLatLng,
                        e.fire("move", t).fire("drag", t)
                    },
                    _onDragEnd: function(t) {
                        P(this._panRequest),
                        delete this._oldLatLng,
                        this._marker.fire("moveend").fire("dragend", t)
                    }
                })
                  , io = qi.extend({
                    options: {
                        icon: new to,
                        interactive: !0,
                        keyboard: !0,
                        title: "",
                        alt: "Marker",
                        zIndexOffset: 0,
                        opacity: 1,
                        riseOnHover: !1,
                        riseOffset: 250,
                        pane: "markerPane",
                        shadowPane: "shadowPane",
                        bubblingMouseEvents: !1,
                        autoPanOnFocus: !0,
                        draggable: !1,
                        autoPan: !1,
                        autoPanPadding: [50, 50],
                        autoPanSpeed: 10
                    },
                    initialize: function(t, e) {
                        _(this, e),
                        this._latlng = U(t)
                    },
                    onAdd: function(t) {
                        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
                        this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
                        this._initIcon(),
                        this.update()
                    },
                    onRemove: function(t) {
                        this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
                        this.dragging.removeHooks()),
                        delete this.dragging,
                        this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
                        this._removeIcon(),
                        this._removeShadow()
                    },
                    getEvents: function() {
                        return {
                            zoom: this.update,
                            viewreset: this.update
                        }
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setLatLng: function(t) {
                        var e = this._latlng;
                        return this._latlng = U(t),
                        this.update(),
                        this.fire("move", {
                            oldLatLng: e,
                            latlng: this._latlng
                        })
                    },
                    setZIndexOffset: function(t) {
                        return this.options.zIndexOffset = t,
                        this.update()
                    },
                    getIcon: function() {
                        return this.options.icon
                    },
                    setIcon: function(t) {
                        return this.options.icon = t,
                        this._map && (this._initIcon(),
                        this.update()),
                        this._popup && this.bindPopup(this._popup, this._popup.options),
                        this
                    },
                    getElement: function() {
                        return this._icon
                    },
                    update: function() {
                        if (this._icon && this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng).round();
                            this._setPos(t)
                        }
                        return this
                    },
                    _initIcon: function() {
                        var t = this.options
                          , e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide")
                          , i = t.icon.createIcon(this._icon)
                          , o = !1;
                        i !== this._icon && (this._icon && this._removeIcon(),
                        o = !0,
                        t.title && (i.title = t.title),
                        "IMG" === i.tagName && (i.alt = t.alt || "")),
                        we(i, e),
                        t.keyboard && (i.tabIndex = "0",
                        i.setAttribute("role", "button")),
                        this._icon = i,
                        t.riseOnHover && this.on({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        }),
                        this.options.autoPanOnFocus && Ne(i, "focus", this._panOnFocus, this);
                        var n = t.icon.createShadow(this._shadow)
                          , s = !1;
                        n !== this._shadow && (this._removeShadow(),
                        s = !0),
                        n && (we(n, e),
                        n.alt = ""),
                        this._shadow = n,
                        t.opacity < 1 && this._updateOpacity(),
                        o && this.getPane().appendChild(this._icon),
                        this._initInteraction(),
                        n && s && this.getPane(t.shadowPane).appendChild(this._shadow)
                    },
                    _removeIcon: function() {
                        this.options.riseOnHover && this.off({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        }),
                        this.options.autoPanOnFocus && Ue(this._icon, "focus", this._panOnFocus, this),
                        fe(this._icon),
                        this.removeInteractiveTarget(this._icon),
                        this._icon = null
                    },
                    _removeShadow: function() {
                        this._shadow && fe(this._shadow),
                        this._shadow = null
                    },
                    _setPos: function(t) {
                        this._icon && Ce(this._icon, t),
                        this._shadow && Ce(this._shadow, t),
                        this._zIndex = t.y + this.options.zIndexOffset,
                        this._resetZIndex()
                    },
                    _updateZIndex: function(t) {
                        this._icon && (this._icon.style.zIndex = this._zIndex + t)
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                        this._setPos(e)
                    },
                    _initInteraction: function() {
                        if (this.options.interactive && (we(this._icon, "leaflet-interactive"),
                        this.addInteractiveTarget(this._icon),
                        eo)) {
                            var t = this.options.draggable;
                            this.dragging && (t = this.dragging.enabled(),
                            this.dragging.disable()),
                            this.dragging = new eo(this),
                            t && this.dragging.enable()
                        }
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t,
                        this._map && this._updateOpacity(),
                        this
                    },
                    _updateOpacity: function() {
                        var t = this.options.opacity;
                        this._icon && Te(this._icon, t),
                        this._shadow && Te(this._shadow, t)
                    },
                    _bringToFront: function() {
                        this._updateZIndex(this.options.riseOffset)
                    },
                    _resetZIndex: function() {
                        this._updateZIndex(0)
                    },
                    _panOnFocus: function() {
                        var t = this._map;
                        if (t) {
                            var e = this.options.icon.options
                              , i = e.iconSize ? A(e.iconSize) : A(0, 0)
                              , o = e.iconAnchor ? A(e.iconAnchor) : A(0, 0);
                            t.panInside(this._latlng, {
                                paddingTopLeft: o,
                                paddingBottomRight: i.subtract(o)
                            })
                        }
                    },
                    _getPopupAnchor: function() {
                        return this.options.icon.options.popupAnchor
                    },
                    _getTooltipAnchor: function() {
                        return this.options.icon.options.tooltipAnchor
                    }
                });
                function oo(t, e) {
                    return new io(t,e)
                }
                var no = qi.extend({
                    options: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 3,
                        opacity: 1,
                        lineCap: "round",
                        lineJoin: "round",
                        dashArray: null,
                        dashOffset: null,
                        fill: !1,
                        fillColor: null,
                        fillOpacity: .2,
                        fillRule: "evenodd",
                        interactive: !0,
                        bubblingMouseEvents: !0
                    },
                    beforeAdd: function(t) {
                        this._renderer = t.getRenderer(this)
                    },
                    onAdd: function() {
                        this._renderer._initPath(this),
                        this._reset(),
                        this._renderer._addPath(this)
                    },
                    onRemove: function() {
                        this._renderer._removePath(this)
                    },
                    redraw: function() {
                        return this._map && this._renderer._updatePath(this),
                        this
                    },
                    setStyle: function(t) {
                        return _(this, t),
                        this._renderer && (this._renderer._updateStyle(this),
                        this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()),
                        this
                    },
                    bringToFront: function() {
                        return this._renderer && this._renderer._bringToFront(this),
                        this
                    },
                    bringToBack: function() {
                        return this._renderer && this._renderer._bringToBack(this),
                        this
                    },
                    getElement: function() {
                        return this._path
                    },
                    _reset: function() {
                        this._project(),
                        this._update()
                    },
                    _clickTolerance: function() {
                        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0)
                    }
                })
                  , so = no.extend({
                    options: {
                        fill: !0,
                        radius: 10
                    },
                    initialize: function(t, e) {
                        _(this, e),
                        this._latlng = U(t),
                        this._radius = this.options.radius
                    },
                    setLatLng: function(t) {
                        var e = this._latlng;
                        return this._latlng = U(t),
                        this.redraw(),
                        this.fire("move", {
                            oldLatLng: e,
                            latlng: this._latlng
                        })
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setRadius: function(t) {
                        return this.options.radius = this._radius = t,
                        this.redraw()
                    },
                    getRadius: function() {
                        return this._radius
                    },
                    setStyle: function(t) {
                        var e = t && t.radius || this._radius;
                        return no.prototype.setStyle.call(this, t),
                        this.setRadius(e),
                        this
                    },
                    _project: function() {
                        this._point = this._map.latLngToLayerPoint(this._latlng),
                        this._updateBounds()
                    },
                    _updateBounds: function() {
                        var t = this._radius
                          , e = this._radiusY || t
                          , i = this._clickTolerance()
                          , o = [t + i, e + i];
                        this._pxBounds = new Z(this._point.subtract(o),this._point.add(o))
                    },
                    _update: function() {
                        this._map && this._updatePath()
                    },
                    _updatePath: function() {
                        this._renderer._updateCircle(this)
                    },
                    _empty: function() {
                        return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                    },
                    _containsPoint: function(t) {
                        return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                    }
                });
                function ao(t, e) {
                    return new so(t,e)
                }
                var ro = so.extend({
                    initialize: function(t, e, o) {
                        if ("number" == typeof e && (e = i({}, o, {
                            radius: e
                        })),
                        _(this, e),
                        this._latlng = U(t),
                        isNaN(this.options.radius))
                            throw new Error("Circle radius cannot be NaN");
                        this._mRadius = this.options.radius
                    },
                    setRadius: function(t) {
                        return this._mRadius = t,
                        this.redraw()
                    },
                    getRadius: function() {
                        return this._mRadius
                    },
                    getBounds: function() {
                        var t = [this._radius, this._radiusY || this._radius];
                        return new R(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))
                    },
                    setStyle: no.prototype.setStyle,
                    _project: function() {
                        var t = this._latlng.lng
                          , e = this._latlng.lat
                          , i = this._map
                          , o = i.options.crs;
                        if (o.distance === j.distance) {
                            var n = Math.PI / 180
                              , s = this._mRadius / j.R / n
                              , a = i.project([e + s, t])
                              , r = i.project([e - s, t])
                              , h = a.add(r).divideBy(2)
                              , l = i.unproject(h).lat
                              , c = Math.acos((Math.cos(s * n) - Math.sin(e * n) * Math.sin(l * n)) / (Math.cos(e * n) * Math.cos(l * n))) / n;
                            (isNaN(c) || 0 === c) && (c = s / Math.cos(Math.PI / 180 * e)),
                            this._point = h.subtract(i.getPixelOrigin()),
                            this._radius = isNaN(c) ? 0 : h.x - i.project([l, t - c]).x,
                            this._radiusY = h.y - a.y
                        } else {
                            var u = o.unproject(o.project(this._latlng).subtract([this._mRadius, 0]));
                            this._point = i.latLngToLayerPoint(this._latlng),
                            this._radius = this._point.x - i.latLngToLayerPoint(u).x
                        }
                        this._updateBounds()
                    }
                });
                function ho(t, e, i) {
                    return new ro(t,e,i)
                }
                var lo = no.extend({
                    options: {
                        smoothFactor: 1,
                        noClip: !1
                    },
                    initialize: function(t, e) {
                        _(this, e),
                        this._setLatLngs(t)
                    },
                    getLatLngs: function() {
                        return this._latlngs
                    },
                    setLatLngs: function(t) {
                        return this._setLatLngs(t),
                        this.redraw()
                    },
                    isEmpty: function() {
                        return !this._latlngs.length
                    },
                    closestLayerPoint: function(t) {
                        for (var e, i, o = 1 / 0, n = null, s = Zi, a = 0, r = this._parts.length; a < r; a++)
                            for (var h = this._parts[a], l = 1, c = h.length; l < c; l++) {
                                var u = s(t, e = h[l - 1], i = h[l], !0);
                                u < o && (o = u,
                                n = s(t, e, i))
                            }
                        return n && (n.distance = Math.sqrt(o)),
                        n
                    },
                    getCenter: function() {
                        if (!this._map)
                            throw new Error("Must add layer to map before using getCenter()");
                        return Ni(this._defaultShape(), this._map.options.crs)
                    },
                    getBounds: function() {
                        return this._bounds
                    },
                    addLatLng: function(t, e) {
                        return e = e || this._defaultShape(),
                        t = U(t),
                        e.push(t),
                        this._bounds.extend(t),
                        this.redraw()
                    },
                    _setLatLngs: function(t) {
                        this._bounds = new R,
                        this._latlngs = this._convertLatLngs(t)
                    },
                    _defaultShape: function() {
                        return Bi(this._latlngs) ? this._latlngs : this._latlngs[0]
                    },
                    _convertLatLngs: function(t) {
                        for (var e = [], i = Bi(t), o = 0, n = t.length; o < n; o++)
                            i ? (e[o] = U(t[o]),
                            this._bounds.extend(e[o])) : e[o] = this._convertLatLngs(t[o]);
                        return e
                    },
                    _project: function() {
                        var t = new Z;
                        this._rings = [],
                        this._projectLatlngs(this._latlngs, this._rings, t),
                        this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t,
                        this._updateBounds())
                    },
                    _updateBounds: function() {
                        var t = this._clickTolerance()
                          , e = new O(t,t);
                        this._rawPxBounds && (this._pxBounds = new Z([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]))
                    },
                    _projectLatlngs: function(t, e, i) {
                        var o, n, s = t[0]instanceof H, a = t.length;
                        if (s) {
                            for (n = [],
                            o = 0; o < a; o++)
                                n[o] = this._map.latLngToLayerPoint(t[o]),
                                i.extend(n[o]);
                            e.push(n)
                        } else
                            for (o = 0; o < a; o++)
                                this._projectLatlngs(t[o], e, i)
                    },
                    _clipPoints: function() {
                        var t = this._renderer._bounds;
                        if (this._parts = [],
                        this._pxBounds && this._pxBounds.intersects(t))
                            if (this.options.noClip)
                                this._parts = this._rings;
                            else {
                                var e, i, o, n, s, a, r, h = this._parts;
                                for (e = 0,
                                o = 0,
                                n = this._rings.length; e < n; e++)
                                    for (i = 0,
                                    s = (r = this._rings[e]).length; i < s - 1; i++)
                                        (a = zi(r[i], r[i + 1], t, i, !0)) && (h[o] = h[o] || [],
                                        h[o].push(a[0]),
                                        a[1] === r[i + 1] && i !== s - 2 || (h[o].push(a[1]),
                                        o++))
                            }
                    },
                    _simplifyPoints: function() {
                        for (var t = this._parts, e = this.options.smoothFactor, i = 0, o = t.length; i < o; i++)
                            t[i] = Mi(t[i], e)
                    },
                    _update: function() {
                        this._map && (this._clipPoints(),
                        this._simplifyPoints(),
                        this._updatePath())
                    },
                    _updatePath: function() {
                        this._renderer._updatePoly(this)
                    },
                    _containsPoint: function(t, e) {
                        var i, o, n, s, a, r, h = this._clickTolerance();
                        if (!this._pxBounds || !this._pxBounds.contains(t))
                            return !1;
                        for (i = 0,
                        s = this._parts.length; i < s; i++)
                            for (o = 0,
                            n = (a = (r = this._parts[i]).length) - 1; o < a; n = o++)
                                if ((e || 0 !== o) && Pi(t, r[n], r[o]) <= h)
                                    return !0;
                        return !1
                    }
                });
                function co(t, e) {
                    return new lo(t,e)
                }
                lo._flat = Ri;
                var uo = lo.extend({
                    options: {
                        fill: !0
                    },
                    isEmpty: function() {
                        return !this._latlngs.length || !this._latlngs[0].length
                    },
                    getCenter: function() {
                        if (!this._map)
                            throw new Error("Must add layer to map before using getCenter()");
                        return bi(this._defaultShape(), this._map.options.crs)
                    },
                    _convertLatLngs: function(t) {
                        var e = lo.prototype._convertLatLngs.call(this, t)
                          , i = e.length;
                        return i >= 2 && e[0]instanceof H && e[0].equals(e[i - 1]) && e.pop(),
                        e
                    },
                    _setLatLngs: function(t) {
                        lo.prototype._setLatLngs.call(this, t),
                        Bi(this._latlngs) && (this._latlngs = [this._latlngs])
                    },
                    _defaultShape: function() {
                        return Bi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                    },
                    _clipPoints: function() {
                        var t = this._renderer._bounds
                          , e = this.options.weight
                          , i = new O(e,e);
                        if (t = new Z(t.min.subtract(i),t.max.add(i)),
                        this._parts = [],
                        this._pxBounds && this._pxBounds.intersects(t))
                            if (this.options.noClip)
                                this._parts = this._rings;
                            else
                                for (var o, n = 0, s = this._rings.length; n < s; n++)
                                    (o = wi(this._rings[n], t, !0)).length && this._parts.push(o)
                    },
                    _updatePath: function() {
                        this._renderer._updatePoly(this, !0)
                    },
                    _containsPoint: function(t) {
                        var e, i, o, n, s, a, r, h, l = !1;
                        if (!this._pxBounds || !this._pxBounds.contains(t))
                            return !1;
                        for (n = 0,
                        r = this._parts.length; n < r; n++)
                            for (s = 0,
                            a = (h = (e = this._parts[n]).length) - 1; s < h; a = s++)
                                i = e[s],
                                o = e[a],
                                i.y > t.y != o.y > t.y && t.x < (o.x - i.x) * (t.y - i.y) / (o.y - i.y) + i.x && (l = !l);
                        return l || lo.prototype._containsPoint.call(this, t, !0)
                    }
                });
                function _o(t, e) {
                    return new uo(t,e)
                }
                var po = Xi.extend({
                    initialize: function(t, e) {
                        _(this, e),
                        this._layers = {},
                        t && this.addData(t)
                    },
                    addData: function(t) {
                        var e, i, o, n = g(t) ? t : t.features;
                        if (n) {
                            for (e = 0,
                            i = n.length; e < i; e++)
                                ((o = n[e]).geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
                            return this
                        }
                        var s = this.options;
                        if (s.filter && !s.filter(t))
                            return this;
                        var a = mo(t, s);
                        return a ? (a.feature = bo(t),
                        a.defaultOptions = a.options,
                        this.resetStyle(a),
                        s.onEachFeature && s.onEachFeature(t, a),
                        this.addLayer(a)) : this
                    },
                    resetStyle: function(t) {
                        return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = i({}, t.defaultOptions),
                        this._setLayerStyle(t, this.options.style),
                        this)
                    },
                    setStyle: function(t) {
                        return this.eachLayer((function(e) {
                            this._setLayerStyle(e, t)
                        }
                        ), this)
                    },
                    _setLayerStyle: function(t, e) {
                        t.setStyle && ("function" == typeof e && (e = e(t.feature)),
                        t.setStyle(e))
                    }
                });
                function mo(t, e) {
                    var i, o, n, s, a = "Feature" === t.type ? t.geometry : t, r = a ? a.coordinates : null, h = [], l = e && e.pointToLayer, c = e && e.coordsToLatLng || go;
                    if (!r && !a)
                        return null;
                    switch (a.type) {
                    case "Point":
                        return fo(l, t, i = c(r), e);
                    case "MultiPoint":
                        for (n = 0,
                        s = r.length; n < s; n++)
                            i = c(r[n]),
                            h.push(fo(l, t, i, e));
                        return new Xi(h);
                    case "LineString":
                    case "MultiLineString":
                        return o = vo(r, "LineString" === a.type ? 0 : 1, c),
                        new lo(o,e);
                    case "Polygon":
                    case "MultiPolygon":
                        return o = vo(r, "Polygon" === a.type ? 1 : 2, c),
                        new uo(o,e);
                    case "GeometryCollection":
                        for (n = 0,
                        s = a.geometries.length; n < s; n++) {
                            var u = mo({
                                geometry: a.geometries[n],
                                type: "Feature",
                                properties: t.properties
                            }, e);
                            u && h.push(u)
                        }
                        return new Xi(h);
                    case "FeatureCollection":
                        for (n = 0,
                        s = a.features.length; n < s; n++) {
                            var d = mo(a.features[n], e);
                            d && h.push(d)
                        }
                        return new Xi(h);
                    default:
                        throw new Error("Invalid GeoJSON object.")
                    }
                }
                function fo(t, e, i, o) {
                    return t ? t(e, i) : new io(i,o && o.markersInheritOptions && o)
                }
                function go(t) {
                    return new H(t[1],t[0],t[2])
                }
                function vo(t, e, i) {
                    for (var o, n = [], s = 0, a = t.length; s < a; s++)
                        o = e ? vo(t[s], e - 1, i) : (i || go)(t[s]),
                        n.push(o);
                    return n
                }
                function yo(t, e) {
                    return void 0 !== (t = U(t)).alt ? [c(t.lng, e), c(t.lat, e), c(t.alt, e)] : [c(t.lng, e), c(t.lat, e)]
                }
                function Lo(t, e, i, o) {
                    for (var n = [], s = 0, a = t.length; s < a; s++)
                        n.push(e ? Lo(t[s], Bi(t[s]) ? 0 : e - 1, i, o) : yo(t[s], o));
                    return !e && i && n.length > 0 && n.push(n[0].slice()),
                    n
                }
                function wo(t, e) {
                    return t.feature ? i({}, t.feature, {
                        geometry: e
                    }) : bo(e)
                }
                function bo(t) {
                    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                        type: "Feature",
                        properties: {},
                        geometry: t
                    }
                }
                var xo = {
                    toGeoJSON: function(t) {
                        return wo(this, {
                            type: "Point",
                            coordinates: yo(this.getLatLng(), t)
                        })
                    }
                };
                function ko(t, e) {
                    return new po(t,e)
                }
                io.include(xo),
                ro.include(xo),
                so.include(xo),
                lo.include({
                    toGeoJSON: function(t) {
                        var e = !Bi(this._latlngs);
                        return wo(this, {
                            type: (e ? "Multi" : "") + "LineString",
                            coordinates: Lo(this._latlngs, e ? 1 : 0, !1, t)
                        })
                    }
                }),
                uo.include({
                    toGeoJSON: function(t) {
                        var e = !Bi(this._latlngs)
                          , i = e && !Bi(this._latlngs[0])
                          , o = Lo(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                        return e || (o = [o]),
                        wo(this, {
                            type: (i ? "Multi" : "") + "Polygon",
                            coordinates: o
                        })
                    }
                }),
                Yi.include({
                    toMultiPoint: function(t) {
                        var e = [];
                        return this.eachLayer((function(i) {
                            e.push(i.toGeoJSON(t).geometry.coordinates)
                        }
                        )),
                        wo(this, {
                            type: "MultiPoint",
                            coordinates: e
                        })
                    },
                    toGeoJSON: function(t) {
                        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                        if ("MultiPoint" === e)
                            return this.toMultiPoint(t);
                        var i = "GeometryCollection" === e
                          , o = [];
                        return this.eachLayer((function(e) {
                            if (e.toGeoJSON) {
                                var n = e.toGeoJSON(t);
                                if (i)
                                    o.push(n.geometry);
                                else {
                                    var s = bo(n);
                                    "FeatureCollection" === s.type ? o.push.apply(o, s.features) : o.push(s)
                                }
                            }
                        }
                        )),
                        i ? wo(this, {
                            geometries: o,
                            type: "GeometryCollection"
                        }) : {
                            type: "FeatureCollection",
                            features: o
                        }
                    }
                });
                var To = ko
                  , Mo = qi.extend({
                    options: {
                        opacity: 1,
                        alt: "",
                        interactive: !1,
                        crossOrigin: !1,
                        errorOverlayUrl: "",
                        zIndex: 1,
                        className: ""
                    },
                    initialize: function(t, e, i) {
                        this._url = t,
                        this._bounds = N(e),
                        _(this, i)
                    },
                    onAdd: function() {
                        this._image || (this._initImage(),
                        this.options.opacity < 1 && this._updateOpacity()),
                        this.options.interactive && (we(this._image, "leaflet-interactive"),
                        this.addInteractiveTarget(this._image)),
                        this.getPane().appendChild(this._image),
                        this._reset()
                    },
                    onRemove: function() {
                        fe(this._image),
                        this.options.interactive && this.removeInteractiveTarget(this._image)
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t,
                        this._image && this._updateOpacity(),
                        this
                    },
                    setStyle: function(t) {
                        return t.opacity && this.setOpacity(t.opacity),
                        this
                    },
                    bringToFront: function() {
                        return this._map && ve(this._image),
                        this
                    },
                    bringToBack: function() {
                        return this._map && ye(this._image),
                        this
                    },
                    setUrl: function(t) {
                        return this._url = t,
                        this._image && (this._image.src = t),
                        this
                    },
                    setBounds: function(t) {
                        return this._bounds = N(t),
                        this._map && this._reset(),
                        this
                    },
                    getEvents: function() {
                        var t = {
                            zoom: this._reset,
                            viewreset: this._reset
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom),
                        t
                    },
                    setZIndex: function(t) {
                        return this.options.zIndex = t,
                        this._updateZIndex(),
                        this
                    },
                    getBounds: function() {
                        return this._bounds
                    },
                    getElement: function() {
                        return this._image
                    },
                    _initImage: function() {
                        var t = "IMG" === this._url.tagName
                          , e = this._image = t ? this._url : me("img");
                        we(e, "leaflet-image-layer"),
                        this._zoomAnimated && we(e, "leaflet-zoom-animated"),
                        this.options.className && we(e, this.options.className),
                        e.onselectstart = l,
                        e.onmousemove = l,
                        e.onload = n(this.fire, this, "load"),
                        e.onerror = n(this._overlayOnError, this, "error"),
                        (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                        this.options.zIndex && this._updateZIndex(),
                        t ? this._url = e.src : (e.src = this._url,
                        e.alt = this.options.alt)
                    },
                    _animateZoom: function(t) {
                        var e = this._map.getZoomScale(t.zoom)
                          , i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                        Ee(this._image, i, e)
                    },
                    _reset: function() {
                        var t = this._image
                          , e = new Z(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast()))
                          , i = e.getSize();
                        Ce(t, e.min),
                        t.style.width = i.x + "px",
                        t.style.height = i.y + "px"
                    },
                    _updateOpacity: function() {
                        Te(this._image, this.options.opacity)
                    },
                    _updateZIndex: function() {
                        this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
                    },
                    _overlayOnError: function() {
                        this.fire("error");
                        var t = this.options.errorOverlayUrl;
                        t && this._url !== t && (this._url = t,
                        this._image.src = t)
                    },
                    getCenter: function() {
                        return this._bounds.getCenter()
                    }
                })
                  , Po = function(t, e, i) {
                    return new Mo(t,e,i)
                }
                  , Eo = Mo.extend({
                    options: {
                        autoplay: !0,
                        loop: !0,
                        keepAspectRatio: !0,
                        muted: !1,
                        playsInline: !0
                    },
                    _initImage: function() {
                        var t = "VIDEO" === this._url.tagName
                          , e = this._image = t ? this._url : me("video");
                        if (we(e, "leaflet-image-layer"),
                        this._zoomAnimated && we(e, "leaflet-zoom-animated"),
                        this.options.className && we(e, this.options.className),
                        e.onselectstart = l,
                        e.onmousemove = l,
                        e.onloadeddata = n(this.fire, this, "load"),
                        t) {
                            for (var i = e.getElementsByTagName("source"), o = [], s = 0; s < i.length; s++)
                                o.push(i[s].src);
                            this._url = i.length > 0 ? o : [e.src]
                        } else {
                            g(this._url) || (this._url = [this._url]),
                            !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"),
                            e.autoplay = !!this.options.autoplay,
                            e.loop = !!this.options.loop,
                            e.muted = !!this.options.muted,
                            e.playsInline = !!this.options.playsInline;
                            for (var a = 0; a < this._url.length; a++) {
                                var r = me("source");
                                r.src = this._url[a],
                                e.appendChild(r)
                            }
                        }
                    }
                });
                function Co(t, e, i) {
                    return new Eo(t,e,i)
                }
                var So = Mo.extend({
                    _initImage: function() {
                        var t = this._image = this._url;
                        we(t, "leaflet-image-layer"),
                        this._zoomAnimated && we(t, "leaflet-zoom-animated"),
                        this.options.className && we(t, this.options.className),
                        t.onselectstart = l,
                        t.onmousemove = l
                    }
                });
                function Do(t, e, i) {
                    return new So(t,e,i)
                }
                var zo = qi.extend({
                    options: {
                        interactive: !1,
                        offset: [0, 0],
                        className: "",
                        pane: void 0,
                        content: ""
                    },
                    initialize: function(t, e) {
                        t && (t instanceof H || g(t)) ? (this._latlng = U(t),
                        _(this, e)) : (_(this, t),
                        this._source = e),
                        this.options.content && (this._content = this.options.content)
                    },
                    openOn: function(t) {
                        return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this),
                        this
                    },
                    close: function() {
                        return this._map && this._map.removeLayer(this),
                        this
                    },
                    toggle: function(t) {
                        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source,
                        this._prepareOpen(),
                        this.openOn(t._map)),
                        this
                    },
                    onAdd: function(t) {
                        this._zoomAnimated = t._zoomAnimated,
                        this._container || this._initLayout(),
                        t._fadeAnimated && Te(this._container, 0),
                        clearTimeout(this._removeTimeout),
                        this.getPane().appendChild(this._container),
                        this.update(),
                        t._fadeAnimated && Te(this._container, 1),
                        this.bringToFront(),
                        this.options.interactive && (we(this._container, "leaflet-interactive"),
                        this.addInteractiveTarget(this._container))
                    },
                    onRemove: function(t) {
                        t._fadeAnimated ? (Te(this._container, 0),
                        this._removeTimeout = setTimeout(n(fe, void 0, this._container), 200)) : fe(this._container),
                        this.options.interactive && (be(this._container, "leaflet-interactive"),
                        this.removeInteractiveTarget(this._container))
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setLatLng: function(t) {
                        return this._latlng = U(t),
                        this._map && (this._updatePosition(),
                        this._adjustPan()),
                        this
                    },
                    getContent: function() {
                        return this._content
                    },
                    setContent: function(t) {
                        return this._content = t,
                        this.update(),
                        this
                    },
                    getElement: function() {
                        return this._container
                    },
                    update: function() {
                        this._map && (this._container.style.visibility = "hidden",
                        this._updateContent(),
                        this._updateLayout(),
                        this._updatePosition(),
                        this._container.style.visibility = "",
                        this._adjustPan())
                    },
                    getEvents: function() {
                        var t = {
                            zoom: this._updatePosition,
                            viewreset: this._updatePosition
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom),
                        t
                    },
                    isOpen: function() {
                        return !!this._map && this._map.hasLayer(this)
                    },
                    bringToFront: function() {
                        return this._map && ve(this._container),
                        this
                    },
                    bringToBack: function() {
                        return this._map && ye(this._container),
                        this
                    },
                    _prepareOpen: function(t) {
                        var e = this._source;
                        if (!e._map)
                            return !1;
                        if (e instanceof Xi) {
                            e = null;
                            var i = this._source._layers;
                            for (var o in i)
                                if (i[o]._map) {
                                    e = i[o];
                                    break
                                }
                            if (!e)
                                return !1;
                            this._source = e
                        }
                        if (!t)
                            if (e.getCenter)
                                t = e.getCenter();
                            else if (e.getLatLng)
                                t = e.getLatLng();
                            else {
                                if (!e.getBounds)
                                    throw new Error("Unable to get source layer LatLng.");
                                t = e.getBounds().getCenter()
                            }
                        return this.setLatLng(t),
                        this._map && this.update(),
                        !0
                    },
                    _updateContent: function() {
                        if (this._content) {
                            var t = this._contentNode
                              , e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                            if ("string" == typeof e)
                                t.innerHTML = e;
                            else {
                                for (; t.hasChildNodes(); )
                                    t.removeChild(t.firstChild);
                                t.appendChild(e)
                            }
                            this.fire("contentupdate")
                        }
                    },
                    _updatePosition: function() {
                        if (this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng)
                              , e = A(this.options.offset)
                              , i = this._getAnchor();
                            this._zoomAnimated ? Ce(this._container, t.add(i)) : e = e.add(t).add(i);
                            var o = this._containerBottom = -e.y
                              , n = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                            this._container.style.bottom = o + "px",
                            this._container.style.left = n + "px"
                        }
                    },
                    _getAnchor: function() {
                        return [0, 0]
                    }
                });
                ni.include({
                    _initOverlay: function(t, e, i, o) {
                        var n = e;
                        return n instanceof t || (n = new t(o).setContent(e)),
                        i && n.setLatLng(i),
                        n
                    }
                }),
                qi.include({
                    _initOverlay: function(t, e, i, o) {
                        var n = i;
                        return n instanceof t ? (_(n, o),
                        n._source = this) : (n = e && !o ? e : new t(o,this)).setContent(i),
                        n
                    }
                });
                var Oo = zo.extend({
                    options: {
                        pane: "popupPane",
                        offset: [0, 7],
                        maxWidth: 300,
                        minWidth: 50,
                        maxHeight: null,
                        autoPan: !0,
                        autoPanPaddingTopLeft: null,
                        autoPanPaddingBottomRight: null,
                        autoPanPadding: [5, 5],
                        keepInView: !1,
                        closeButton: !0,
                        autoClose: !0,
                        closeOnEscapeKey: !0,
                        className: ""
                    },
                    openOn: function(t) {
                        return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup),
                        t._popup = this,
                        zo.prototype.openOn.call(this, t)
                    },
                    onAdd: function(t) {
                        zo.prototype.onAdd.call(this, t),
                        t.fire("popupopen", {
                            popup: this
                        }),
                        this._source && (this._source.fire("popupopen", {
                            popup: this
                        }, !0),
                        this._source instanceof no || this._source.on("preclick", Ve))
                    },
                    onRemove: function(t) {
                        zo.prototype.onRemove.call(this, t),
                        t.fire("popupclose", {
                            popup: this
                        }),
                        this._source && (this._source.fire("popupclose", {
                            popup: this
                        }, !0),
                        this._source instanceof no || this._source.off("preclick", Ve))
                    },
                    getEvents: function() {
                        var t = zo.prototype.getEvents.call(this);
                        return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close),
                        this.options.keepInView && (t.moveend = this._adjustPan),
                        t
                    },
                    _initLayout: function() {
                        var t = "leaflet-popup"
                          , e = this._container = me("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")
                          , i = this._wrapper = me("div", t + "-content-wrapper", e);
                        if (this._contentNode = me("div", t + "-content", i),
                        Ye(e),
                        qe(this._contentNode),
                        Ne(e, "contextmenu", Ve),
                        this._tipContainer = me("div", t + "-tip-container", e),
                        this._tip = me("div", t + "-tip", this._tipContainer),
                        this.options.closeButton) {
                            var o = this._closeButton = me("a", t + "-close-button", e);
                            o.setAttribute("role", "button"),
                            o.setAttribute("aria-label", "Close popup"),
                            o.href = "#close",
                            o.innerHTML = '<span aria-hidden="true">&#215;</span>',
                            Ne(o, "click", (function(t) {
                                Ke(t),
                                this.close()
                            }
                            ), this)
                        }
                    },
                    _updateLayout: function() {
                        var t = this._contentNode
                          , e = t.style;
                        e.width = "",
                        e.whiteSpace = "nowrap";
                        var i = t.offsetWidth;
                        i = Math.min(i, this.options.maxWidth),
                        i = Math.max(i, this.options.minWidth),
                        e.width = i + 1 + "px",
                        e.whiteSpace = "",
                        e.height = "";
                        var o = t.offsetHeight
                          , n = this.options.maxHeight
                          , s = "leaflet-popup-scrolled";
                        n && o > n ? (e.height = n + "px",
                        we(t, s)) : be(t, s),
                        this._containerWidth = this._container.offsetWidth
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
                          , i = this._getAnchor();
                        Ce(this._container, e.add(i))
                    },
                    _adjustPan: function() {
                        if (this.options.autoPan)
                            if (this._map._panAnim && this._map._panAnim.stop(),
                            this._autopanning)
                                this._autopanning = !1;
                            else {
                                var t = this._map
                                  , e = parseInt(pe(this._container, "marginBottom"), 10) || 0
                                  , i = this._container.offsetHeight + e
                                  , o = this._containerWidth
                                  , n = new O(this._containerLeft,-i - this._containerBottom);
                                n._add(Se(this._container));
                                var s = t.layerPointToContainerPoint(n)
                                  , a = A(this.options.autoPanPadding)
                                  , r = A(this.options.autoPanPaddingTopLeft || a)
                                  , h = A(this.options.autoPanPaddingBottomRight || a)
                                  , l = t.getSize()
                                  , c = 0
                                  , u = 0;
                                s.x + o + h.x > l.x && (c = s.x + o - l.x + h.x),
                                s.x - c - r.x < 0 && (c = s.x - r.x),
                                s.y + i + h.y > l.y && (u = s.y + i - l.y + h.y),
                                s.y - u - r.y < 0 && (u = s.y - r.y),
                                (c || u) && (this.options.keepInView && (this._autopanning = !0),
                                t.fire("autopanstart").panBy([c, u]))
                            }
                    },
                    _getAnchor: function() {
                        return A(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                    }
                })
                  , Io = function(t, e) {
                    return new Oo(t,e)
                };
                ni.mergeOptions({
                    closePopupOnClick: !0
                }),
                ni.include({
                    openPopup: function(t, e, i) {
                        return this._initOverlay(Oo, t, e, i).openOn(this),
                        this
                    },
                    closePopup: function(t) {
                        return (t = arguments.length ? t : this._popup) && t.close(),
                        this
                    }
                }),
                qi.include({
                    bindPopup: function(t, e) {
                        return this._popup = this._initOverlay(Oo, this._popup, t, e),
                        this._popupHandlersAdded || (this.on({
                            click: this._openPopup,
                            keypress: this._onKeyPress,
                            remove: this.closePopup,
                            move: this._movePopup
                        }),
                        this._popupHandlersAdded = !0),
                        this
                    },
                    unbindPopup: function() {
                        return this._popup && (this.off({
                            click: this._openPopup,
                            keypress: this._onKeyPress,
                            remove: this.closePopup,
                            move: this._movePopup
                        }),
                        this._popupHandlersAdded = !1,
                        this._popup = null),
                        this
                    },
                    openPopup: function(t) {
                        return this._popup && (this instanceof Xi || (this._popup._source = this),
                        this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)),
                        this
                    },
                    closePopup: function() {
                        return this._popup && this._popup.close(),
                        this
                    },
                    togglePopup: function() {
                        return this._popup && this._popup.toggle(this),
                        this
                    },
                    isPopupOpen: function() {
                        return !!this._popup && this._popup.isOpen()
                    },
                    setPopupContent: function(t) {
                        return this._popup && this._popup.setContent(t),
                        this
                    },
                    getPopup: function() {
                        return this._popup
                    },
                    _openPopup: function(t) {
                        if (this._popup && this._map) {
                            Xe(t);
                            var e = t.layer || t.target;
                            this._popup._source !== e || e instanceof no ? (this._popup._source = e,
                            this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng)
                        }
                    },
                    _movePopup: function(t) {
                        this._popup.setLatLng(t.latlng)
                    },
                    _onKeyPress: function(t) {
                        13 === t.originalEvent.keyCode && this._openPopup(t)
                    }
                });
                var Ao = zo.extend({
                    options: {
                        pane: "tooltipPane",
                        offset: [0, 0],
                        direction: "auto",
                        permanent: !1,
                        sticky: !1,
                        opacity: .9
                    },
                    onAdd: function(t) {
                        zo.prototype.onAdd.call(this, t),
                        this.setOpacity(this.options.opacity),
                        t.fire("tooltipopen", {
                            tooltip: this
                        }),
                        this._source && (this.addEventParent(this._source),
                        this._source.fire("tooltipopen", {
                            tooltip: this
                        }, !0))
                    },
                    onRemove: function(t) {
                        zo.prototype.onRemove.call(this, t),
                        t.fire("tooltipclose", {
                            tooltip: this
                        }),
                        this._source && (this.removeEventParent(this._source),
                        this._source.fire("tooltipclose", {
                            tooltip: this
                        }, !0))
                    },
                    getEvents: function() {
                        var t = zo.prototype.getEvents.call(this);
                        return this.options.permanent || (t.preclick = this.close),
                        t
                    },
                    _initLayout: function() {
                        var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                        this._contentNode = this._container = me("div", t),
                        this._container.setAttribute("role", "tooltip"),
                        this._container.setAttribute("id", "leaflet-tooltip-" + a(this))
                    },
                    _updateLayout: function() {},
                    _adjustPan: function() {},
                    _setPosition: function(t) {
                        var e, i, o = this._map, n = this._container, s = o.latLngToContainerPoint(o.getCenter()), a = o.layerPointToContainerPoint(t), r = this.options.direction, h = n.offsetWidth, l = n.offsetHeight, c = A(this.options.offset), u = this._getAnchor();
                        "top" === r ? (e = h / 2,
                        i = l) : "bottom" === r ? (e = h / 2,
                        i = 0) : "center" === r ? (e = h / 2,
                        i = l / 2) : "right" === r ? (e = 0,
                        i = l / 2) : "left" === r ? (e = h,
                        i = l / 2) : a.x < s.x ? (r = "right",
                        e = 0,
                        i = l / 2) : (r = "left",
                        e = h + 2 * (c.x + u.x),
                        i = l / 2),
                        t = t.subtract(A(e, i, !0)).add(c).add(u),
                        be(n, "leaflet-tooltip-right"),
                        be(n, "leaflet-tooltip-left"),
                        be(n, "leaflet-tooltip-top"),
                        be(n, "leaflet-tooltip-bottom"),
                        we(n, "leaflet-tooltip-" + r),
                        Ce(n, t)
                    },
                    _updatePosition: function() {
                        var t = this._map.latLngToLayerPoint(this._latlng);
                        this._setPosition(t)
                    },
                    setOpacity: function(t) {
                        this.options.opacity = t,
                        this._container && Te(this._container, t)
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                        this._setPosition(e)
                    },
                    _getAnchor: function() {
                        return A(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                    }
                })
                  , Zo = function(t, e) {
                    return new Ao(t,e)
                };
                ni.include({
                    openTooltip: function(t, e, i) {
                        return this._initOverlay(Ao, t, e, i).openOn(this),
                        this
                    },
                    closeTooltip: function(t) {
                        return t.close(),
                        this
                    }
                }),
                qi.include({
                    bindTooltip: function(t, e) {
                        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
                        this._tooltip = this._initOverlay(Ao, this._tooltip, t, e),
                        this._initTooltipInteractions(),
                        this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
                        this
                    },
                    unbindTooltip: function() {
                        return this._tooltip && (this._initTooltipInteractions(!0),
                        this.closeTooltip(),
                        this._tooltip = null),
                        this
                    },
                    _initTooltipInteractions: function(t) {
                        if (t || !this._tooltipHandlersAdded) {
                            var e = t ? "off" : "on"
                              , i = {
                                remove: this.closeTooltip,
                                move: this._moveTooltip
                            };
                            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip,
                            i.mouseout = this.closeTooltip,
                            i.click = this._openTooltip,
                            this._map ? this._addFocusListeners() : i.add = this._addFocusListeners),
                            this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
                            this[e](i),
                            this._tooltipHandlersAdded = !t
                        }
                    },
                    openTooltip: function(t) {
                        return this._tooltip && (this instanceof Xi || (this._tooltip._source = this),
                        this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map),
                        this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))),
                        this
                    },
                    closeTooltip: function() {
                        if (this._tooltip)
                            return this._tooltip.close()
                    },
                    toggleTooltip: function() {
                        return this._tooltip && this._tooltip.toggle(this),
                        this
                    },
                    isTooltipOpen: function() {
                        return this._tooltip.isOpen()
                    },
                    setTooltipContent: function(t) {
                        return this._tooltip && this._tooltip.setContent(t),
                        this
                    },
                    getTooltip: function() {
                        return this._tooltip
                    },
                    _addFocusListeners: function() {
                        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this)
                    },
                    _addFocusListenersOnLayer: function(t) {
                        var e = "function" == typeof t.getElement && t.getElement();
                        e && (Ne(e, "focus", (function() {
                            this._tooltip._source = t,
                            this.openTooltip()
                        }
                        ), this),
                        Ne(e, "blur", this.closeTooltip, this))
                    },
                    _setAriaDescribedByOnLayer: function(t) {
                        var e = "function" == typeof t.getElement && t.getElement();
                        e && e.setAttribute("aria-describedby", this._tooltip._container.id)
                    },
                    _openTooltip: function(t) {
                        if (this._tooltip && this._map)
                            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                                this._openOnceFlag = !0;
                                var e = this;
                                this._map.once("moveend", (function() {
                                    e._openOnceFlag = !1,
                                    e._openTooltip(t)
                                }
                                ))
                            } else
                                this._tooltip._source = t.layer || t.target,
                                this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)
                    },
                    _moveTooltip: function(t) {
                        var e, i, o = t.latlng;
                        this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent),
                        i = this._map.containerPointToLayerPoint(e),
                        o = this._map.layerPointToLatLng(i)),
                        this._tooltip.setLatLng(o)
                    }
                });
                var Bo = $i.extend({
                    options: {
                        iconSize: [12, 12],
                        html: !1,
                        bgPos: null,
                        className: "leaflet-div-icon"
                    },
                    createIcon: function(t) {
                        var e = t && "DIV" === t.tagName ? t : document.createElement("div")
                          , i = this.options;
                        if (i.html instanceof Element ? (ge(e),
                        e.appendChild(i.html)) : e.innerHTML = !1 !== i.html ? i.html : "",
                        i.bgPos) {
                            var o = A(i.bgPos);
                            e.style.backgroundPosition = -o.x + "px " + -o.y + "px"
                        }
                        return this._setIconStyles(e, "icon"),
                        e
                    },
                    createShadow: function() {
                        return null
                    }
                });
                function Ro(t) {
                    return new Bo(t)
                }
                $i.Default = to;
                var No = qi.extend({
                    options: {
                        tileSize: 256,
                        opacity: 1,
                        updateWhenIdle: Rt.mobile,
                        updateWhenZooming: !0,
                        updateInterval: 200,
                        zIndex: 1,
                        bounds: null,
                        minZoom: 0,
                        maxZoom: void 0,
                        maxNativeZoom: void 0,
                        minNativeZoom: void 0,
                        noWrap: !1,
                        pane: "tilePane",
                        className: "",
                        keepBuffer: 2
                    },
                    initialize: function(t) {
                        _(this, t)
                    },
                    onAdd: function() {
                        this._initContainer(),
                        this._levels = {},
                        this._tiles = {},
                        this._resetView()
                    },
                    beforeAdd: function(t) {
                        t._addZoomLimit(this)
                    },
                    onRemove: function(t) {
                        this._removeAllTiles(),
                        fe(this._container),
                        t._removeZoomLimit(this),
                        this._container = null,
                        this._tileZoom = void 0
                    },
                    bringToFront: function() {
                        return this._map && (ve(this._container),
                        this._setAutoZIndex(Math.max)),
                        this
                    },
                    bringToBack: function() {
                        return this._map && (ye(this._container),
                        this._setAutoZIndex(Math.min)),
                        this
                    },
                    getContainer: function() {
                        return this._container
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t,
                        this._updateOpacity(),
                        this
                    },
                    setZIndex: function(t) {
                        return this.options.zIndex = t,
                        this._updateZIndex(),
                        this
                    },
                    isLoading: function() {
                        return this._loading
                    },
                    redraw: function() {
                        if (this._map) {
                            this._removeAllTiles();
                            var t = this._clampZoom(this._map.getZoom());
                            t !== this._tileZoom && (this._tileZoom = t,
                            this._updateLevels()),
                            this._update()
                        }
                        return this
                    },
                    getEvents: function() {
                        var t = {
                            viewprereset: this._invalidateAll,
                            viewreset: this._resetView,
                            zoom: this._resetView,
                            moveend: this._onMoveEnd
                        };
                        return this.options.updateWhenIdle || (this._onMove || (this._onMove = r(this._onMoveEnd, this.options.updateInterval, this)),
                        t.move = this._onMove),
                        this._zoomAnimated && (t.zoomanim = this._animateZoom),
                        t
                    },
                    createTile: function() {
                        return document.createElement("div")
                    },
                    getTileSize: function() {
                        var t = this.options.tileSize;
                        return t instanceof O ? t : new O(t,t)
                    },
                    _updateZIndex: function() {
                        this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                    },
                    _setAutoZIndex: function(t) {
                        for (var e, i = this.getPane().children, o = -t(-1 / 0, 1 / 0), n = 0, s = i.length; n < s; n++)
                            e = i[n].style.zIndex,
                            i[n] !== this._container && e && (o = t(o, +e));
                        isFinite(o) && (this.options.zIndex = o + t(-1, 1),
                        this._updateZIndex())
                    },
                    _updateOpacity: function() {
                        if (this._map && !Rt.ielt9) {
                            Te(this._container, this.options.opacity);
                            var t = +new Date
                              , e = !1
                              , i = !1;
                            for (var o in this._tiles) {
                                var n = this._tiles[o];
                                if (n.current && n.loaded) {
                                    var s = Math.min(1, (t - n.loaded) / 200);
                                    Te(n.el, s),
                                    s < 1 ? e = !0 : (n.active ? i = !0 : this._onOpaqueTile(n),
                                    n.active = !0)
                                }
                            }
                            i && !this._noPrune && this._pruneTiles(),
                            e && (P(this._fadeFrame),
                            this._fadeFrame = M(this._updateOpacity, this))
                        }
                    },
                    _onOpaqueTile: l,
                    _initContainer: function() {
                        this._container || (this._container = me("div", "leaflet-layer " + (this.options.className || "")),
                        this._updateZIndex(),
                        this.options.opacity < 1 && this._updateOpacity(),
                        this.getPane().appendChild(this._container))
                    },
                    _updateLevels: function() {
                        var t = this._tileZoom
                          , e = this.options.maxZoom;
                        if (void 0 !== t) {
                            for (var i in this._levels)
                                i = Number(i),
                                this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i),
                                this._onUpdateLevel(i)) : (fe(this._levels[i].el),
                                this._removeTilesAtZoom(i),
                                this._onRemoveLevel(i),
                                delete this._levels[i]);
                            var o = this._levels[t]
                              , n = this._map;
                            return o || ((o = this._levels[t] = {}).el = me("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
                            o.el.style.zIndex = e,
                            o.origin = n.project(n.unproject(n.getPixelOrigin()), t).round(),
                            o.zoom = t,
                            this._setZoomTransform(o, n.getCenter(), n.getZoom()),
                            l(o.el.offsetWidth),
                            this._onCreateLevel(o)),
                            this._level = o,
                            o
                        }
                    },
                    _onUpdateLevel: l,
                    _onRemoveLevel: l,
                    _onCreateLevel: l,
                    _pruneTiles: function() {
                        if (this._map) {
                            var t, e, i = this._map.getZoom();
                            if (i > this.options.maxZoom || i < this.options.minZoom)
                                this._removeAllTiles();
                            else {
                                for (t in this._tiles)
                                    (e = this._tiles[t]).retain = e.current;
                                for (t in this._tiles)
                                    if ((e = this._tiles[t]).current && !e.active) {
                                        var o = e.coords;
                                        this._retainParent(o.x, o.y, o.z, o.z - 5) || this._retainChildren(o.x, o.y, o.z, o.z + 2)
                                    }
                                for (t in this._tiles)
                                    this._tiles[t].retain || this._removeTile(t)
                            }
                        }
                    },
                    _removeTilesAtZoom: function(t) {
                        for (var e in this._tiles)
                            this._tiles[e].coords.z === t && this._removeTile(e)
                    },
                    _removeAllTiles: function() {
                        for (var t in this._tiles)
                            this._removeTile(t)
                    },
                    _invalidateAll: function() {
                        for (var t in this._levels)
                            fe(this._levels[t].el),
                            this._onRemoveLevel(Number(t)),
                            delete this._levels[t];
                        this._removeAllTiles(),
                        this._tileZoom = void 0
                    },
                    _retainParent: function(t, e, i, o) {
                        var n = Math.floor(t / 2)
                          , s = Math.floor(e / 2)
                          , a = i - 1
                          , r = new O(+n,+s);
                        r.z = +a;
                        var h = this._tileCoordsToKey(r)
                          , l = this._tiles[h];
                        return l && l.active ? (l.retain = !0,
                        !0) : (l && l.loaded && (l.retain = !0),
                        a > o && this._retainParent(n, s, a, o))
                    },
                    _retainChildren: function(t, e, i, o) {
                        for (var n = 2 * t; n < 2 * t + 2; n++)
                            for (var s = 2 * e; s < 2 * e + 2; s++) {
                                var a = new O(n,s);
                                a.z = i + 1;
                                var r = this._tileCoordsToKey(a)
                                  , h = this._tiles[r];
                                h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0),
                                i + 1 < o && this._retainChildren(n, s, i + 1, o))
                            }
                    },
                    _resetView: function(t) {
                        var e = t && (t.pinch || t.flyTo);
                        this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
                    },
                    _animateZoom: function(t) {
                        this._setView(t.center, t.zoom, !0, t.noUpdate)
                    },
                    _clampZoom: function(t) {
                        var e = this.options;
                        return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
                    },
                    _setView: function(t, e, i, o) {
                        var n = Math.round(e);
                        n = void 0 !== this.options.maxZoom && n > this.options.maxZoom || void 0 !== this.options.minZoom && n < this.options.minZoom ? void 0 : this._clampZoom(n);
                        var s = this.options.updateWhenZooming && n !== this._tileZoom;
                        o && !s || (this._tileZoom = n,
                        this._abortLoading && this._abortLoading(),
                        this._updateLevels(),
                        this._resetGrid(),
                        void 0 !== n && this._update(t),
                        i || this._pruneTiles(),
                        this._noPrune = !!i),
                        this._setZoomTransforms(t, e)
                    },
                    _setZoomTransforms: function(t, e) {
                        for (var i in this._levels)
                            this._setZoomTransform(this._levels[i], t, e)
                    },
                    _setZoomTransform: function(t, e, i) {
                        var o = this._map.getZoomScale(i, t.zoom)
                          , n = t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(e, i)).round();
                        Rt.any3d ? Ee(t.el, n, o) : Ce(t.el, n)
                    },
                    _resetGrid: function() {
                        var t = this._map
                          , e = t.options.crs
                          , i = this._tileSize = this.getTileSize()
                          , o = this._tileZoom
                          , n = this._map.getPixelWorldBounds(this._tileZoom);
                        n && (this._globalTileRange = this._pxBoundsToTileRange(n)),
                        this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], o).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], o).x / i.y)],
                        this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], o).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], o).y / i.y)]
                    },
                    _onMoveEnd: function() {
                        this._map && !this._map._animatingZoom && this._update()
                    },
                    _getTiledPixelBounds: function(t) {
                        var e = this._map
                          , i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom()
                          , o = e.getZoomScale(i, this._tileZoom)
                          , n = e.project(t, this._tileZoom).floor()
                          , s = e.getSize().divideBy(2 * o);
                        return new Z(n.subtract(s),n.add(s))
                    },
                    _update: function(t) {
                        var e = this._map;
                        if (e) {
                            var i = this._clampZoom(e.getZoom());
                            if (void 0 === t && (t = e.getCenter()),
                            void 0 !== this._tileZoom) {
                                var o = this._getTiledPixelBounds(t)
                                  , n = this._pxBoundsToTileRange(o)
                                  , s = n.getCenter()
                                  , a = []
                                  , r = this.options.keepBuffer
                                  , h = new Z(n.getBottomLeft().subtract([r, -r]),n.getTopRight().add([r, -r]));
                                if (!(isFinite(n.min.x) && isFinite(n.min.y) && isFinite(n.max.x) && isFinite(n.max.y)))
                                    throw new Error("Attempted to load an infinite number of tiles");
                                for (var l in this._tiles) {
                                    var c = this._tiles[l].coords;
                                    c.z === this._tileZoom && h.contains(new O(c.x,c.y)) || (this._tiles[l].current = !1)
                                }
                                if (Math.abs(i - this._tileZoom) > 1)
                                    this._setView(t, i);
                                else {
                                    for (var u = n.min.y; u <= n.max.y; u++)
                                        for (var d = n.min.x; d <= n.max.x; d++) {
                                            var _ = new O(d,u);
                                            if (_.z = this._tileZoom,
                                            this._isValidTile(_)) {
                                                var p = this._tiles[this._tileCoordsToKey(_)];
                                                p ? p.current = !0 : a.push(_)
                                            }
                                        }
                                    if (a.sort((function(t, e) {
                                        return t.distanceTo(s) - e.distanceTo(s)
                                    }
                                    )),
                                    0 !== a.length) {
                                        this._loading || (this._loading = !0,
                                        this.fire("loading"));
                                        var m = document.createDocumentFragment();
                                        for (d = 0; d < a.length; d++)
                                            this._addTile(a[d], m);
                                        this._level.el.appendChild(m)
                                    }
                                }
                            }
                        }
                    },
                    _isValidTile: function(t) {
                        var e = this._map.options.crs;
                        if (!e.infinite) {
                            var i = this._globalTileRange;
                            if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                                return !1
                        }
                        if (!this.options.bounds)
                            return !0;
                        var o = this._tileCoordsToBounds(t);
                        return N(this.options.bounds).overlaps(o)
                    },
                    _keyToBounds: function(t) {
                        return this._tileCoordsToBounds(this._keyToTileCoords(t))
                    },
                    _tileCoordsToNwSe: function(t) {
                        var e = this._map
                          , i = this.getTileSize()
                          , o = t.scaleBy(i)
                          , n = o.add(i);
                        return [e.unproject(o, t.z), e.unproject(n, t.z)]
                    },
                    _tileCoordsToBounds: function(t) {
                        var e = this._tileCoordsToNwSe(t)
                          , i = new R(e[0],e[1]);
                        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)),
                        i
                    },
                    _tileCoordsToKey: function(t) {
                        return t.x + ":" + t.y + ":" + t.z
                    },
                    _keyToTileCoords: function(t) {
                        var e = t.split(":")
                          , i = new O(+e[0],+e[1]);
                        return i.z = +e[2],
                        i
                    },
                    _removeTile: function(t) {
                        var e = this._tiles[t];
                        e && (fe(e.el),
                        delete this._tiles[t],
                        this.fire("tileunload", {
                            tile: e.el,
                            coords: this._keyToTileCoords(t)
                        }))
                    },
                    _initTile: function(t) {
                        we(t, "leaflet-tile");
                        var e = this.getTileSize();
                        t.style.width = e.x + "px",
                        t.style.height = e.y + "px",
                        t.onselectstart = l,
                        t.onmousemove = l,
                        Rt.ielt9 && this.options.opacity < 1 && Te(t, this.options.opacity)
                    },
                    _addTile: function(t, e) {
                        var i = this._getTilePos(t)
                          , o = this._tileCoordsToKey(t)
                          , s = this.createTile(this._wrapCoords(t), n(this._tileReady, this, t));
                        this._initTile(s),
                        this.createTile.length < 2 && M(n(this._tileReady, this, t, null, s)),
                        Ce(s, i),
                        this._tiles[o] = {
                            el: s,
                            coords: t,
                            current: !0
                        },
                        e.appendChild(s),
                        this.fire("tileloadstart", {
                            tile: s,
                            coords: t
                        })
                    },
                    _tileReady: function(t, e, i) {
                        e && this.fire("tileerror", {
                            error: e,
                            tile: i,
                            coords: t
                        });
                        var o = this._tileCoordsToKey(t);
                        (i = this._tiles[o]) && (i.loaded = +new Date,
                        this._map._fadeAnimated ? (Te(i.el, 0),
                        P(this._fadeFrame),
                        this._fadeFrame = M(this._updateOpacity, this)) : (i.active = !0,
                        this._pruneTiles()),
                        e || (we(i.el, "leaflet-tile-loaded"),
                        this.fire("tileload", {
                            tile: i.el,
                            coords: t
                        })),
                        this._noTilesToLoad() && (this._loading = !1,
                        this.fire("load"),
                        Rt.ielt9 || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(n(this._pruneTiles, this), 250)))
                    },
                    _getTilePos: function(t) {
                        return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                    },
                    _wrapCoords: function(t) {
                        var e = new O(this._wrapX ? h(t.x, this._wrapX) : t.x,this._wrapY ? h(t.y, this._wrapY) : t.y);
                        return e.z = t.z,
                        e
                    },
                    _pxBoundsToTileRange: function(t) {
                        var e = this.getTileSize();
                        return new Z(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1, 1]))
                    },
                    _noTilesToLoad: function() {
                        for (var t in this._tiles)
                            if (!this._tiles[t].loaded)
                                return !1;
                        return !0
                    }
                });
                function Ho(t) {
                    return new No(t)
                }
                var Uo = No.extend({
                    options: {
                        minZoom: 0,
                        maxZoom: 18,
                        subdomains: "abc",
                        errorTileUrl: "",
                        zoomOffset: 0,
                        tms: !1,
                        zoomReverse: !1,
                        detectRetina: !1,
                        crossOrigin: !1,
                        referrerPolicy: !1
                    },
                    initialize: function(t, e) {
                        this._url = t,
                        (e = _(this, e)).detectRetina && Rt.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2),
                        e.zoomReverse ? (e.zoomOffset--,
                        e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++,
                        e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)),
                        e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom),
                        "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
                        this.on("tileunload", this._onTileRemove)
                    },
                    setUrl: function(t, e) {
                        return this._url === t && void 0 === e && (e = !0),
                        this._url = t,
                        e || this.redraw(),
                        this
                    },
                    createTile: function(t, e) {
                        var i = document.createElement("img");
                        return Ne(i, "load", n(this._tileOnLoad, this, e, i)),
                        Ne(i, "error", n(this._tileOnError, this, e, i)),
                        (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                        "string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy),
                        i.alt = "",
                        i.src = this.getTileUrl(t),
                        i
                    },
                    getTileUrl: function(t) {
                        var e = {
                            r: Rt.retina ? "@2x" : "",
                            s: this._getSubdomain(t),
                            x: t.x,
                            y: t.y,
                            z: this._getZoomForUrl()
                        };
                        if (this._map && !this._map.options.crs.infinite) {
                            var o = this._globalTileRange.max.y - t.y;
                            this.options.tms && (e.y = o),
                            e["-y"] = o
                        }
                        return f(this._url, i(e, this.options))
                    },
                    _tileOnLoad: function(t, e) {
                        Rt.ielt9 ? setTimeout(n(t, this, null, e), 0) : t(null, e)
                    },
                    _tileOnError: function(t, e, i) {
                        var o = this.options.errorTileUrl;
                        o && e.getAttribute("src") !== o && (e.src = o),
                        t(i, e)
                    },
                    _onTileRemove: function(t) {
                        t.tile.onload = null
                    },
                    _getZoomForUrl: function() {
                        var t = this._tileZoom
                          , e = this.options.maxZoom;
                        return this.options.zoomReverse && (t = e - t),
                        t + this.options.zoomOffset
                    },
                    _getSubdomain: function(t) {
                        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                        return this.options.subdomains[e]
                    },
                    _abortLoading: function() {
                        var t, e;
                        for (t in this._tiles)
                            if (this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = l,
                            e.onerror = l,
                            !e.complete)) {
                                e.src = y;
                                var i = this._tiles[t].coords;
                                fe(e),
                                delete this._tiles[t],
                                this.fire("tileabort", {
                                    tile: e,
                                    coords: i
                                })
                            }
                    },
                    _removeTile: function(t) {
                        var e = this._tiles[t];
                        if (e)
                            return e.el.setAttribute("src", y),
                            No.prototype._removeTile.call(this, t)
                    },
                    _tileReady: function(t, e, i) {
                        if (this._map && (!i || i.getAttribute("src") !== y))
                            return No.prototype._tileReady.call(this, t, e, i)
                    }
                });
                function Go(t, e) {
                    return new Uo(t,e)
                }
                var Fo = Uo.extend({
                    defaultWmsParams: {
                        service: "WMS",
                        request: "GetMap",
                        layers: "",
                        styles: "",
                        format: "image/jpeg",
                        transparent: !1,
                        version: "1.1.1"
                    },
                    options: {
                        crs: null,
                        uppercase: !1
                    },
                    initialize: function(t, e) {
                        this._url = t;
                        var o = i({}, this.defaultWmsParams);
                        for (var n in e)
                            n in this.options || (o[n] = e[n]);
                        var s = (e = _(this, e)).detectRetina && Rt.retina ? 2 : 1
                          , a = this.getTileSize();
                        o.width = a.x * s,
                        o.height = a.y * s,
                        this.wmsParams = o
                    },
                    onAdd: function(t) {
                        this._crs = this.options.crs || t.options.crs,
                        this._wmsVersion = parseFloat(this.wmsParams.version);
                        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                        this.wmsParams[e] = this._crs.code,
                        Uo.prototype.onAdd.call(this, t)
                    },
                    getTileUrl: function(t) {
                        var e = this._tileCoordsToNwSe(t)
                          , i = this._crs
                          , o = B(i.project(e[0]), i.project(e[1]))
                          , n = o.min
                          , s = o.max
                          , a = (this._wmsVersion >= 1.3 && this._crs === Wi ? [n.y, n.x, s.y, s.x] : [n.x, n.y, s.x, s.y]).join(",")
                          , r = Uo.prototype.getTileUrl.call(this, t);
                        return r + p(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + a
                    },
                    setParams: function(t, e) {
                        return i(this.wmsParams, t),
                        e || this.redraw(),
                        this
                    }
                });
                function jo(t, e) {
                    return new Fo(t,e)
                }
                Uo.WMS = Fo,
                Go.wms = jo;
                var Wo = qi.extend({
                    options: {
                        padding: .1
                    },
                    initialize: function(t) {
                        _(this, t),
                        a(this),
                        this._layers = this._layers || {}
                    },
                    onAdd: function() {
                        this._container || (this._initContainer(),
                        we(this._container, "leaflet-zoom-animated")),
                        this.getPane().appendChild(this._container),
                        this._update(),
                        this.on("update", this._updatePaths, this)
                    },
                    onRemove: function() {
                        this.off("update", this._updatePaths, this),
                        this._destroyContainer()
                    },
                    getEvents: function() {
                        var t = {
                            viewreset: this._reset,
                            zoom: this._onZoom,
                            moveend: this._update,
                            zoomend: this._onZoomEnd
                        };
                        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
                        t
                    },
                    _onAnimZoom: function(t) {
                        this._updateTransform(t.center, t.zoom)
                    },
                    _onZoom: function() {
                        this._updateTransform(this._map.getCenter(), this._map.getZoom())
                    },
                    _updateTransform: function(t, e) {
                        var i = this._map.getZoomScale(e, this._zoom)
                          , o = this._map.getSize().multiplyBy(.5 + this.options.padding)
                          , n = this._map.project(this._center, e)
                          , s = o.multiplyBy(-i).add(n).subtract(this._map._getNewPixelOrigin(t, e));
                        Rt.any3d ? Ee(this._container, s, i) : Ce(this._container, s)
                    },
                    _reset: function() {
                        for (var t in this._update(),
                        this._updateTransform(this._center, this._zoom),
                        this._layers)
                            this._layers[t]._reset()
                    },
                    _onZoomEnd: function() {
                        for (var t in this._layers)
                            this._layers[t]._project()
                    },
                    _updatePaths: function() {
                        for (var t in this._layers)
                            this._layers[t]._update()
                    },
                    _update: function() {
                        var t = this.options.padding
                          , e = this._map.getSize()
                          , i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                        this._bounds = new Z(i,i.add(e.multiplyBy(1 + 2 * t)).round()),
                        this._center = this._map.getCenter(),
                        this._zoom = this._map.getZoom()
                    }
                })
                  , Vo = Wo.extend({
                    options: {
                        tolerance: 0
                    },
                    getEvents: function() {
                        var t = Wo.prototype.getEvents.call(this);
                        return t.viewprereset = this._onViewPreReset,
                        t
                    },
                    _onViewPreReset: function() {
                        this._postponeUpdatePaths = !0
                    },
                    onAdd: function() {
                        Wo.prototype.onAdd.call(this),
                        this._draw()
                    },
                    _initContainer: function() {
                        var t = this._container = document.createElement("canvas");
                        Ne(t, "mousemove", this._onMouseMove, this),
                        Ne(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
                        Ne(t, "mouseout", this._handleMouseOut, this),
                        t._leaflet_disable_events = !0,
                        this._ctx = t.getContext("2d")
                    },
                    _destroyContainer: function() {
                        P(this._redrawRequest),
                        delete this._ctx,
                        fe(this._container),
                        Ue(this._container),
                        delete this._container
                    },
                    _updatePaths: function() {
                        if (!this._postponeUpdatePaths) {
                            for (var t in this._redrawBounds = null,
                            this._layers)
                                this._layers[t]._update();
                            this._redraw()
                        }
                    },
                    _update: function() {
                        if (!this._map._animatingZoom || !this._bounds) {
                            Wo.prototype._update.call(this);
                            var t = this._bounds
                              , e = this._container
                              , i = t.getSize()
                              , o = Rt.retina ? 2 : 1;
                            Ce(e, t.min),
                            e.width = o * i.x,
                            e.height = o * i.y,
                            e.style.width = i.x + "px",
                            e.style.height = i.y + "px",
                            Rt.retina && this._ctx.scale(2, 2),
                            this._ctx.translate(-t.min.x, -t.min.y),
                            this.fire("update")
                        }
                    },
                    _reset: function() {
                        Wo.prototype._reset.call(this),
                        this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
                        this._updatePaths())
                    },
                    _initPath: function(t) {
                        this._updateDashArray(t),
                        this._layers[a(t)] = t;
                        var e = t._order = {
                            layer: t,
                            prev: this._drawLast,
                            next: null
                        };
                        this._drawLast && (this._drawLast.next = e),
                        this._drawLast = e,
                        this._drawFirst = this._drawFirst || this._drawLast
                    },
                    _addPath: function(t) {
                        this._requestRedraw(t)
                    },
                    _removePath: function(t) {
                        var e = t._order
                          , i = e.next
                          , o = e.prev;
                        i ? i.prev = o : this._drawLast = o,
                        o ? o.next = i : this._drawFirst = i,
                        delete t._order,
                        delete this._layers[a(t)],
                        this._requestRedraw(t)
                    },
                    _updatePath: function(t) {
                        this._extendRedrawBounds(t),
                        t._project(),
                        t._update(),
                        this._requestRedraw(t)
                    },
                    _updateStyle: function(t) {
                        this._updateDashArray(t),
                        this._requestRedraw(t)
                    },
                    _updateDashArray: function(t) {
                        if ("string" == typeof t.options.dashArray) {
                            var e, i, o = t.options.dashArray.split(/[, ]+/), n = [];
                            for (i = 0; i < o.length; i++) {
                                if (e = Number(o[i]),
                                isNaN(e))
                                    return;
                                n.push(e)
                            }
                            t.options._dashArray = n
                        } else
                            t.options._dashArray = t.options.dashArray
                    },
                    _requestRedraw: function(t) {
                        this._map && (this._extendRedrawBounds(t),
                        this._redrawRequest = this._redrawRequest || M(this._redraw, this))
                    },
                    _extendRedrawBounds: function(t) {
                        if (t._pxBounds) {
                            var e = (t.options.weight || 0) + 1;
                            this._redrawBounds = this._redrawBounds || new Z,
                            this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                            this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                        }
                    },
                    _redraw: function() {
                        this._redrawRequest = null,
                        this._redrawBounds && (this._redrawBounds.min._floor(),
                        this._redrawBounds.max._ceil()),
                        this._clear(),
                        this._draw(),
                        this._redrawBounds = null
                    },
                    _clear: function() {
                        var t = this._redrawBounds;
                        if (t) {
                            var e = t.getSize();
                            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                        } else
                            this._ctx.save(),
                            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                            this._ctx.clearRect(0, 0, this._container.width, this._container.height),
                            this._ctx.restore()
                    },
                    _draw: function() {
                        var t, e = this._redrawBounds;
                        if (this._ctx.save(),
                        e) {
                            var i = e.getSize();
                            this._ctx.beginPath(),
                            this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
                            this._ctx.clip()
                        }
                        this._drawing = !0;
                        for (var o = this._drawFirst; o; o = o.next)
                            t = o.layer,
                            (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                        this._drawing = !1,
                        this._ctx.restore()
                    },
                    _updatePoly: function(t, e) {
                        if (this._drawing) {
                            var i, o, n, s, a = t._parts, r = a.length, h = this._ctx;
                            if (r) {
                                for (h.beginPath(),
                                i = 0; i < r; i++) {
                                    for (o = 0,
                                    n = a[i].length; o < n; o++)
                                        s = a[i][o],
                                        h[o ? "lineTo" : "moveTo"](s.x, s.y);
                                    e && h.closePath()
                                }
                                this._fillStroke(h, t)
                            }
                        }
                    },
                    _updateCircle: function(t) {
                        if (this._drawing && !t._empty()) {
                            var e = t._point
                              , i = this._ctx
                              , o = Math.max(Math.round(t._radius), 1)
                              , n = (Math.max(Math.round(t._radiusY), 1) || o) / o;
                            1 !== n && (i.save(),
                            i.scale(1, n)),
                            i.beginPath(),
                            i.arc(e.x, e.y / n, o, 0, 2 * Math.PI, !1),
                            1 !== n && i.restore(),
                            this._fillStroke(i, t)
                        }
                    },
                    _fillStroke: function(t, e) {
                        var i = e.options;
                        i.fill && (t.globalAlpha = i.fillOpacity,
                        t.fillStyle = i.fillColor || i.color,
                        t.fill(i.fillRule || "evenodd")),
                        i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
                        t.globalAlpha = i.opacity,
                        t.lineWidth = i.weight,
                        t.strokeStyle = i.color,
                        t.lineCap = i.lineCap,
                        t.lineJoin = i.lineJoin,
                        t.stroke())
                    },
                    _onClick: function(t) {
                        for (var e, i, o = this._map.mouseEventToLayerPoint(t), n = this._drawFirst; n; n = n.next)
                            (e = n.layer).options.interactive && e._containsPoint(o) && ("click" !== t.type && "preclick" !== t.type || !this._map._draggableMoved(e)) && (i = e);
                        this._fireEvent(!!i && [i], t)
                    },
                    _onMouseMove: function(t) {
                        if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                            var e = this._map.mouseEventToLayerPoint(t);
                            this._handleMouseHover(t, e)
                        }
                    },
                    _handleMouseOut: function(t) {
                        var e = this._hoveredLayer;
                        e && (be(this._container, "leaflet-interactive"),
                        this._fireEvent([e], t, "mouseout"),
                        this._hoveredLayer = null,
                        this._mouseHoverThrottled = !1)
                    },
                    _handleMouseHover: function(t, e) {
                        if (!this._mouseHoverThrottled) {
                            for (var i, o, s = this._drawFirst; s; s = s.next)
                                (i = s.layer).options.interactive && i._containsPoint(e) && (o = i);
                            o !== this._hoveredLayer && (this._handleMouseOut(t),
                            o && (we(this._container, "leaflet-interactive"),
                            this._fireEvent([o], t, "mouseover"),
                            this._hoveredLayer = o)),
                            this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
                            this._mouseHoverThrottled = !0,
                            setTimeout(n((function() {
                                this._mouseHoverThrottled = !1
                            }
                            ), this), 32)
                        }
                    },
                    _fireEvent: function(t, e, i) {
                        this._map._fireDOMEvent(e, i || e.type, t)
                    },
                    _bringToFront: function(t) {
                        var e = t._order;
                        if (e) {
                            var i = e.next
                              , o = e.prev;
                            i && (i.prev = o,
                            o ? o.next = i : i && (this._drawFirst = i),
                            e.prev = this._drawLast,
                            this._drawLast.next = e,
                            e.next = null,
                            this._drawLast = e,
                            this._requestRedraw(t))
                        }
                    },
                    _bringToBack: function(t) {
                        var e = t._order;
                        if (e) {
                            var i = e.next
                              , o = e.prev;
                            o && (o.next = i,
                            i ? i.prev = o : o && (this._drawLast = o),
                            e.prev = null,
                            e.next = this._drawFirst,
                            this._drawFirst.prev = e,
                            this._drawFirst = e,
                            this._requestRedraw(t))
                        }
                    }
                });
                function qo(t) {
                    return Rt.canvas ? new Vo(t) : null
                }
                var Yo = function() {
                    try {
                        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function(t) {
                            return document.createElement("<lvml:" + t + ' class="lvml">')
                        }
                    } catch (t) {}
                    return function(t) {
                        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                    }
                }()
                  , Ko = {
                    _initContainer: function() {
                        this._container = me("div", "leaflet-vml-container")
                    },
                    _update: function() {
                        this._map._animatingZoom || (Wo.prototype._update.call(this),
                        this.fire("update"))
                    },
                    _initPath: function(t) {
                        var e = t._container = Yo("shape");
                        we(e, "leaflet-vml-shape " + (this.options.className || "")),
                        e.coordsize = "1 1",
                        t._path = Yo("path"),
                        e.appendChild(t._path),
                        this._updateStyle(t),
                        this._layers[a(t)] = t
                    },
                    _addPath: function(t) {
                        var e = t._container;
                        this._container.appendChild(e),
                        t.options.interactive && t.addInteractiveTarget(e)
                    },
                    _removePath: function(t) {
                        var e = t._container;
                        fe(e),
                        t.removeInteractiveTarget(e),
                        delete this._layers[a(t)]
                    },
                    _updateStyle: function(t) {
                        var e = t._stroke
                          , i = t._fill
                          , o = t.options
                          , n = t._container;
                        n.stroked = !!o.stroke,
                        n.filled = !!o.fill,
                        o.stroke ? (e || (e = t._stroke = Yo("stroke")),
                        n.appendChild(e),
                        e.weight = o.weight + "px",
                        e.color = o.color,
                        e.opacity = o.opacity,
                        o.dashArray ? e.dashStyle = g(o.dashArray) ? o.dashArray.join(" ") : o.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "",
                        e.endcap = o.lineCap.replace("butt", "flat"),
                        e.joinstyle = o.lineJoin) : e && (n.removeChild(e),
                        t._stroke = null),
                        o.fill ? (i || (i = t._fill = Yo("fill")),
                        n.appendChild(i),
                        i.color = o.fillColor || o.color,
                        i.opacity = o.fillOpacity) : i && (n.removeChild(i),
                        t._fill = null)
                    },
                    _updateCircle: function(t) {
                        var e = t._point.round()
                          , i = Math.round(t._radius)
                          , o = Math.round(t._radiusY || i);
                        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + o + " 0,23592600")
                    },
                    _setPath: function(t, e) {
                        t._path.v = e
                    },
                    _bringToFront: function(t) {
                        ve(t._container)
                    },
                    _bringToBack: function(t) {
                        ye(t._container)
                    }
                }
                  , Xo = Rt.vml ? Yo : J
                  , Jo = Wo.extend({
                    _initContainer: function() {
                        this._container = Xo("svg"),
                        this._container.setAttribute("pointer-events", "none"),
                        this._rootGroup = Xo("g"),
                        this._container.appendChild(this._rootGroup)
                    },
                    _destroyContainer: function() {
                        fe(this._container),
                        Ue(this._container),
                        delete this._container,
                        delete this._rootGroup,
                        delete this._svgSize
                    },
                    _update: function() {
                        if (!this._map._animatingZoom || !this._bounds) {
                            Wo.prototype._update.call(this);
                            var t = this._bounds
                              , e = t.getSize()
                              , i = this._container;
                            this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
                            i.setAttribute("width", e.x),
                            i.setAttribute("height", e.y)),
                            Ce(i, t.min),
                            i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
                            this.fire("update")
                        }
                    },
                    _initPath: function(t) {
                        var e = t._path = Xo("path");
                        t.options.className && we(e, t.options.className),
                        t.options.interactive && we(e, "leaflet-interactive"),
                        this._updateStyle(t),
                        this._layers[a(t)] = t
                    },
                    _addPath: function(t) {
                        this._rootGroup || this._initContainer(),
                        this._rootGroup.appendChild(t._path),
                        t.addInteractiveTarget(t._path)
                    },
                    _removePath: function(t) {
                        fe(t._path),
                        t.removeInteractiveTarget(t._path),
                        delete this._layers[a(t)]
                    },
                    _updatePath: function(t) {
                        t._project(),
                        t._update()
                    },
                    _updateStyle: function(t) {
                        var e = t._path
                          , i = t.options;
                        e && (i.stroke ? (e.setAttribute("stroke", i.color),
                        e.setAttribute("stroke-opacity", i.opacity),
                        e.setAttribute("stroke-width", i.weight),
                        e.setAttribute("stroke-linecap", i.lineCap),
                        e.setAttribute("stroke-linejoin", i.lineJoin),
                        i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"),
                        i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
                        i.fill ? (e.setAttribute("fill", i.fillColor || i.color),
                        e.setAttribute("fill-opacity", i.fillOpacity),
                        e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
                    },
                    _updatePoly: function(t, e) {
                        this._setPath(t, $(t._parts, e))
                    },
                    _updateCircle: function(t) {
                        var e = t._point
                          , i = Math.max(Math.round(t._radius), 1)
                          , o = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 "
                          , n = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + 2 * i + ",0 " + o + 2 * -i + ",0 ";
                        this._setPath(t, n)
                    },
                    _setPath: function(t, e) {
                        t._path.setAttribute("d", e)
                    },
                    _bringToFront: function(t) {
                        ve(t._path)
                    },
                    _bringToBack: function(t) {
                        ye(t._path)
                    }
                });
                function $o(t) {
                    return Rt.svg || Rt.vml ? new Jo(t) : null
                }
                Rt.vml && Jo.include(Ko),
                ni.include({
                    getRenderer: function(t) {
                        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                        return e || (e = this._renderer = this._createRenderer()),
                        this.hasLayer(e) || this.addLayer(e),
                        e
                    },
                    _getPaneRenderer: function(t) {
                        if ("overlayPane" === t || void 0 === t)
                            return !1;
                        var e = this._paneRenderers[t];
                        return void 0 === e && (e = this._createRenderer({
                            pane: t
                        }),
                        this._paneRenderers[t] = e),
                        e
                    },
                    _createRenderer: function(t) {
                        return this.options.preferCanvas && qo(t) || $o(t)
                    }
                });
                var Qo = uo.extend({
                    initialize: function(t, e) {
                        uo.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                    },
                    setBounds: function(t) {
                        return this.setLatLngs(this._boundsToLatLngs(t))
                    },
                    _boundsToLatLngs: function(t) {
                        return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                    }
                });
                function tn(t, e) {
                    return new Qo(t,e)
                }
                Jo.create = Xo,
                Jo.pointsToPath = $,
                po.geometryToLayer = mo,
                po.coordsToLatLng = go,
                po.coordsToLatLngs = vo,
                po.latLngToCoords = yo,
                po.latLngsToCoords = Lo,
                po.getFeature = wo,
                po.asFeature = bo,
                ni.mergeOptions({
                    boxZoom: !0
                });
                var en = gi.extend({
                    initialize: function(t) {
                        this._map = t,
                        this._container = t._container,
                        this._pane = t._panes.overlayPane,
                        this._resetStateTimeout = 0,
                        t.on("unload", this._destroy, this)
                    },
                    addHooks: function() {
                        Ne(this._container, "mousedown", this._onMouseDown, this)
                    },
                    removeHooks: function() {
                        Ue(this._container, "mousedown", this._onMouseDown, this)
                    },
                    moved: function() {
                        return this._moved
                    },
                    _destroy: function() {
                        fe(this._pane),
                        delete this._pane
                    },
                    _resetState: function() {
                        this._resetStateTimeout = 0,
                        this._moved = !1
                    },
                    _clearDeferredResetState: function() {
                        0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
                        this._resetStateTimeout = 0)
                    },
                    _onMouseDown: function(t) {
                        if (!t.shiftKey || 1 !== t.which && 1 !== t.button)
                            return !1;
                        this._clearDeferredResetState(),
                        this._resetState(),
                        se(),
                        ze(),
                        this._startPoint = this._map.mouseEventToContainerPoint(t),
                        Ne(document, {
                            contextmenu: Xe,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                    },
                    _onMouseMove: function(t) {
                        this._moved || (this._moved = !0,
                        this._box = me("div", "leaflet-zoom-box", this._container),
                        we(this._container, "leaflet-crosshair"),
                        this._map.fire("boxzoomstart")),
                        this._point = this._map.mouseEventToContainerPoint(t);
                        var e = new Z(this._point,this._startPoint)
                          , i = e.getSize();
                        Ce(this._box, e.min),
                        this._box.style.width = i.x + "px",
                        this._box.style.height = i.y + "px"
                    },
                    _finish: function() {
                        this._moved && (fe(this._box),
                        be(this._container, "leaflet-crosshair")),
                        ae(),
                        Oe(),
                        Ue(document, {
                            contextmenu: Xe,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                    },
                    _onMouseUp: function(t) {
                        if ((1 === t.which || 1 === t.button) && (this._finish(),
                        this._moved)) {
                            this._clearDeferredResetState(),
                            this._resetStateTimeout = setTimeout(n(this._resetState, this), 0);
                            var e = new R(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));
                            this._map.fitBounds(e).fire("boxzoomend", {
                                boxZoomBounds: e
                            })
                        }
                    },
                    _onKeyDown: function(t) {
                        27 === t.keyCode && (this._finish(),
                        this._clearDeferredResetState(),
                        this._resetState())
                    }
                });
                ni.addInitHook("addHandler", "boxZoom", en),
                ni.mergeOptions({
                    doubleClickZoom: !0
                });
                var on = gi.extend({
                    addHooks: function() {
                        this._map.on("dblclick", this._onDoubleClick, this)
                    },
                    removeHooks: function() {
                        this._map.off("dblclick", this._onDoubleClick, this)
                    },
                    _onDoubleClick: function(t) {
                        var e = this._map
                          , i = e.getZoom()
                          , o = e.options.zoomDelta
                          , n = t.originalEvent.shiftKey ? i - o : i + o;
                        "center" === e.options.doubleClickZoom ? e.setZoom(n) : e.setZoomAround(t.containerPoint, n)
                    }
                });
                ni.addInitHook("addHandler", "doubleClickZoom", on),
                ni.mergeOptions({
                    dragging: !0,
                    inertia: !0,
                    inertiaDeceleration: 3400,
                    inertiaMaxSpeed: 1 / 0,
                    easeLinearity: .2,
                    worldCopyJump: !1,
                    maxBoundsViscosity: 0
                });
                var nn = gi.extend({
                    addHooks: function() {
                        if (!this._draggable) {
                            var t = this._map;
                            this._draggable = new Li(t._mapPane,t._container),
                            this._draggable.on({
                                dragstart: this._onDragStart,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this),
                            this._draggable.on("predrag", this._onPreDragLimit, this),
                            t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
                            t.on("zoomend", this._onZoomEnd, this),
                            t.whenReady(this._onZoomEnd, this))
                        }
                        we(this._map._container, "leaflet-grab leaflet-touch-drag"),
                        this._draggable.enable(),
                        this._positions = [],
                        this._times = []
                    },
                    removeHooks: function() {
                        be(this._map._container, "leaflet-grab"),
                        be(this._map._container, "leaflet-touch-drag"),
                        this._draggable.disable()
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved
                    },
                    moving: function() {
                        return this._draggable && this._draggable._moving
                    },
                    _onDragStart: function() {
                        var t = this._map;
                        if (t._stop(),
                        this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                            var e = N(this._map.options.maxBounds);
                            this._offsetLimit = B(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
                            this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                        } else
                            this._offsetLimit = null;
                        t.fire("movestart").fire("dragstart"),
                        t.options.inertia && (this._positions = [],
                        this._times = [])
                    },
                    _onDrag: function(t) {
                        if (this._map.options.inertia) {
                            var e = this._lastTime = +new Date
                              , i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                            this._positions.push(i),
                            this._times.push(e),
                            this._prunePositions(e)
                        }
                        this._map.fire("move", t).fire("drag", t)
                    },
                    _prunePositions: function(t) {
                        for (; this._positions.length > 1 && t - this._times[0] > 50; )
                            this._positions.shift(),
                            this._times.shift()
                    },
                    _onZoomEnd: function() {
                        var t = this._map.getSize().divideBy(2)
                          , e = this._map.latLngToLayerPoint([0, 0]);
                        this._initialWorldOffset = e.subtract(t).x,
                        this._worldWidth = this._map.getPixelWorldBounds().getSize().x
                    },
                    _viscousLimit: function(t, e) {
                        return t - (t - e) * this._viscosity
                    },
                    _onPreDragLimit: function() {
                        if (this._viscosity && this._offsetLimit) {
                            var t = this._draggable._newPos.subtract(this._draggable._startPos)
                              , e = this._offsetLimit;
                            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                            this._draggable._newPos = this._draggable._startPos.add(t)
                        }
                    },
                    _onPreDragWrap: function() {
                        var t = this._worldWidth
                          , e = Math.round(t / 2)
                          , i = this._initialWorldOffset
                          , o = this._draggable._newPos.x
                          , n = (o - e + i) % t + e - i
                          , s = (o + e + i) % t - e - i
                          , a = Math.abs(n + i) < Math.abs(s + i) ? n : s;
                        this._draggable._absPos = this._draggable._newPos.clone(),
                        this._draggable._newPos.x = a
                    },
                    _onDragEnd: function(t) {
                        var e = this._map
                          , i = e.options
                          , o = !i.inertia || t.noInertia || this._times.length < 2;
                        if (e.fire("dragend", t),
                        o)
                            e.fire("moveend");
                        else {
                            this._prunePositions(+new Date);
                            var n = this._lastPos.subtract(this._positions[0])
                              , s = (this._lastTime - this._times[0]) / 1e3
                              , a = i.easeLinearity
                              , r = n.multiplyBy(a / s)
                              , h = r.distanceTo([0, 0])
                              , l = Math.min(i.inertiaMaxSpeed, h)
                              , c = r.multiplyBy(l / h)
                              , u = l / (i.inertiaDeceleration * a)
                              , d = c.multiplyBy(-u / 2).round();
                            d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds),
                            M((function() {
                                e.panBy(d, {
                                    duration: u,
                                    easeLinearity: a,
                                    noMoveStart: !0,
                                    animate: !0
                                })
                            }
                            ))) : e.fire("moveend")
                        }
                    }
                });
                ni.addInitHook("addHandler", "dragging", nn),
                ni.mergeOptions({
                    keyboard: !0,
                    keyboardPanDelta: 80
                });
                var sn = gi.extend({
                    keyCodes: {
                        left: [37],
                        right: [39],
                        down: [40],
                        up: [38],
                        zoomIn: [187, 107, 61, 171],
                        zoomOut: [189, 109, 54, 173]
                    },
                    initialize: function(t) {
                        this._map = t,
                        this._setPanDelta(t.options.keyboardPanDelta),
                        this._setZoomDelta(t.options.zoomDelta)
                    },
                    addHooks: function() {
                        var t = this._map._container;
                        t.tabIndex <= 0 && (t.tabIndex = "0"),
                        Ne(t, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this),
                        this._map.on({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this)
                    },
                    removeHooks: function() {
                        this._removeHooks(),
                        Ue(this._map._container, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this),
                        this._map.off({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this)
                    },
                    _onMouseDown: function() {
                        if (!this._focused) {
                            var t = document.body
                              , e = document.documentElement
                              , i = t.scrollTop || e.scrollTop
                              , o = t.scrollLeft || e.scrollLeft;
                            this._map._container.focus(),
                            window.scrollTo(o, i)
                        }
                    },
                    _onFocus: function() {
                        this._focused = !0,
                        this._map.fire("focus")
                    },
                    _onBlur: function() {
                        this._focused = !1,
                        this._map.fire("blur")
                    },
                    _setPanDelta: function(t) {
                        var e, i, o = this._panKeys = {}, n = this.keyCodes;
                        for (e = 0,
                        i = n.left.length; e < i; e++)
                            o[n.left[e]] = [-1 * t, 0];
                        for (e = 0,
                        i = n.right.length; e < i; e++)
                            o[n.right[e]] = [t, 0];
                        for (e = 0,
                        i = n.down.length; e < i; e++)
                            o[n.down[e]] = [0, t];
                        for (e = 0,
                        i = n.up.length; e < i; e++)
                            o[n.up[e]] = [0, -1 * t]
                    },
                    _setZoomDelta: function(t) {
                        var e, i, o = this._zoomKeys = {}, n = this.keyCodes;
                        for (e = 0,
                        i = n.zoomIn.length; e < i; e++)
                            o[n.zoomIn[e]] = t;
                        for (e = 0,
                        i = n.zoomOut.length; e < i; e++)
                            o[n.zoomOut[e]] = -t
                    },
                    _addHooks: function() {
                        Ne(document, "keydown", this._onKeyDown, this)
                    },
                    _removeHooks: function() {
                        Ue(document, "keydown", this._onKeyDown, this)
                    },
                    _onKeyDown: function(t) {
                        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                            var e, i = t.keyCode, o = this._map;
                            if (i in this._panKeys) {
                                if (!o._panAnim || !o._panAnim._inProgress)
                                    if (e = this._panKeys[i],
                                    t.shiftKey && (e = A(e).multiplyBy(3)),
                                    o.options.maxBounds && (e = o._limitOffset(A(e), o.options.maxBounds)),
                                    o.options.worldCopyJump) {
                                        var n = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(e)));
                                        o.panTo(n)
                                    } else
                                        o.panBy(e)
                            } else if (i in this._zoomKeys)
                                o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                            else {
                                if (27 !== i || !o._popup || !o._popup.options.closeOnEscapeKey)
                                    return;
                                o.closePopup()
                            }
                            Xe(t)
                        }
                    }
                });
                ni.addInitHook("addHandler", "keyboard", sn),
                ni.mergeOptions({
                    scrollWheelZoom: !0,
                    wheelDebounceTime: 40,
                    wheelPxPerZoomLevel: 60
                });
                var an = gi.extend({
                    addHooks: function() {
                        Ne(this._map._container, "wheel", this._onWheelScroll, this),
                        this._delta = 0
                    },
                    removeHooks: function() {
                        Ue(this._map._container, "wheel", this._onWheelScroll, this)
                    },
                    _onWheelScroll: function(t) {
                        var e = ti(t)
                          , i = this._map.options.wheelDebounceTime;
                        this._delta += e,
                        this._lastMousePos = this._map.mouseEventToContainerPoint(t),
                        this._startTime || (this._startTime = +new Date);
                        var o = Math.max(i - (+new Date - this._startTime), 0);
                        clearTimeout(this._timer),
                        this._timer = setTimeout(n(this._performZoom, this), o),
                        Xe(t)
                    },
                    _performZoom: function() {
                        var t = this._map
                          , e = t.getZoom()
                          , i = this._map.options.zoomSnap || 0;
                        t._stop();
                        var o = this._delta / (4 * this._map.options.wheelPxPerZoomLevel)
                          , n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(o)))) / Math.LN2
                          , s = i ? Math.ceil(n / i) * i : n
                          , a = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
                        this._delta = 0,
                        this._startTime = null,
                        a && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + a) : t.setZoomAround(this._lastMousePos, e + a))
                    }
                });
                ni.addInitHook("addHandler", "scrollWheelZoom", an);
                var rn = 600;
                ni.mergeOptions({
                    tapHold: Rt.touchNative && Rt.safari && Rt.mobile,
                    tapTolerance: 15
                });
                var hn = gi.extend({
                    addHooks: function() {
                        Ne(this._map._container, "touchstart", this._onDown, this)
                    },
                    removeHooks: function() {
                        Ue(this._map._container, "touchstart", this._onDown, this)
                    },
                    _onDown: function(t) {
                        if (clearTimeout(this._holdTimeout),
                        1 === t.touches.length) {
                            var e = t.touches[0];
                            this._startPos = this._newPos = new O(e.clientX,e.clientY),
                            this._holdTimeout = setTimeout(n((function() {
                                this._cancel(),
                                this._isTapValid() && (Ne(document, "touchend", Ke),
                                Ne(document, "touchend touchcancel", this._cancelClickPrevent),
                                this._simulateEvent("contextmenu", e))
                            }
                            ), this), rn),
                            Ne(document, "touchend touchcancel contextmenu", this._cancel, this),
                            Ne(document, "touchmove", this._onMove, this)
                        }
                    },
                    _cancelClickPrevent: function t() {
                        Ue(document, "touchend", Ke),
                        Ue(document, "touchend touchcancel", t)
                    },
                    _cancel: function() {
                        clearTimeout(this._holdTimeout),
                        Ue(document, "touchend touchcancel contextmenu", this._cancel, this),
                        Ue(document, "touchmove", this._onMove, this)
                    },
                    _onMove: function(t) {
                        var e = t.touches[0];
                        this._newPos = new O(e.clientX,e.clientY)
                    },
                    _isTapValid: function() {
                        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                    },
                    _simulateEvent: function(t, e) {
                        var i = new MouseEvent(t,{
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            screenX: e.screenX,
                            screenY: e.screenY,
                            clientX: e.clientX,
                            clientY: e.clientY
                        });
                        i._simulated = !0,
                        e.target.dispatchEvent(i)
                    }
                });
                ni.addInitHook("addHandler", "tapHold", hn),
                ni.mergeOptions({
                    touchZoom: Rt.touch,
                    bounceAtZoomLimits: !0
                });
                var ln = gi.extend({
                    addHooks: function() {
                        we(this._map._container, "leaflet-touch-zoom"),
                        Ne(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    removeHooks: function() {
                        be(this._map._container, "leaflet-touch-zoom"),
                        Ue(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    _onTouchStart: function(t) {
                        var e = this._map;
                        if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                            var i = e.mouseEventToContainerPoint(t.touches[0])
                              , o = e.mouseEventToContainerPoint(t.touches[1]);
                            this._centerPoint = e.getSize()._divideBy(2),
                            this._startLatLng = e.containerPointToLatLng(this._centerPoint),
                            "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(o)._divideBy(2))),
                            this._startDist = i.distanceTo(o),
                            this._startZoom = e.getZoom(),
                            this._moved = !1,
                            this._zooming = !0,
                            e._stop(),
                            Ne(document, "touchmove", this._onTouchMove, this),
                            Ne(document, "touchend touchcancel", this._onTouchEnd, this),
                            Ke(t)
                        }
                    },
                    _onTouchMove: function(t) {
                        if (t.touches && 2 === t.touches.length && this._zooming) {
                            var e = this._map
                              , i = e.mouseEventToContainerPoint(t.touches[0])
                              , o = e.mouseEventToContainerPoint(t.touches[1])
                              , s = i.distanceTo(o) / this._startDist;
                            if (this._zoom = e.getScaleZoom(s, this._startZoom),
                            !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)),
                            "center" === e.options.touchZoom) {
                                if (this._center = this._startLatLng,
                                1 === s)
                                    return
                            } else {
                                var a = i._add(o)._divideBy(2)._subtract(this._centerPoint);
                                if (1 === s && 0 === a.x && 0 === a.y)
                                    return;
                                this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom)
                            }
                            this._moved || (e._moveStart(!0, !1),
                            this._moved = !0),
                            P(this._animRequest);
                            var r = n(e._move, e, this._center, this._zoom, {
                                pinch: !0,
                                round: !1
                            }, void 0);
                            this._animRequest = M(r, this, !0),
                            Ke(t)
                        }
                    },
                    _onTouchEnd: function() {
                        this._moved && this._zooming ? (this._zooming = !1,
                        P(this._animRequest),
                        Ue(document, "touchmove", this._onTouchMove, this),
                        Ue(document, "touchend touchcancel", this._onTouchEnd, this),
                        this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
                    }
                });
                ni.addInitHook("addHandler", "touchZoom", ln),
                ni.BoxZoom = en,
                ni.DoubleClickZoom = on,
                ni.Drag = nn,
                ni.Keyboard = sn,
                ni.ScrollWheelZoom = an,
                ni.TapHold = hn,
                ni.TouchZoom = ln,
                t.Bounds = Z,
                t.Browser = Rt,
                t.CRS = F,
                t.Canvas = Vo,
                t.Circle = ro,
                t.CircleMarker = so,
                t.Class = C,
                t.Control = ai,
                t.DivIcon = Bo,
                t.DivOverlay = zo,
                t.DomEvent = ii,
                t.DomUtil = Re,
                t.Draggable = Li,
                t.Evented = z,
                t.FeatureGroup = Xi,
                t.GeoJSON = po,
                t.GridLayer = No,
                t.Handler = gi,
                t.Icon = $i,
                t.ImageOverlay = Mo,
                t.LatLng = H,
                t.LatLngBounds = R,
                t.Layer = qi,
                t.LayerGroup = Yi,
                t.LineUtil = Hi,
                t.Map = ni,
                t.Marker = io,
                t.Mixin = vi,
                t.Path = no,
                t.Point = O,
                t.PolyUtil = Ti,
                t.Polygon = uo,
                t.Polyline = lo,
                t.Popup = Oo,
                t.PosAnimation = oi,
                t.Projection = Fi,
                t.Rectangle = Qo,
                t.Renderer = Wo,
                t.SVG = Jo,
                t.SVGOverlay = So,
                t.TileLayer = Uo,
                t.Tooltip = Ao,
                t.Transformation = q,
                t.Util = E,
                t.VideoOverlay = Eo,
                t.bind = n,
                t.bounds = B,
                t.canvas = qo,
                t.circle = ho,
                t.circleMarker = ao,
                t.control = ri,
                t.divIcon = Ro,
                t.extend = i,
                t.featureGroup = Ji,
                t.geoJSON = ko,
                t.geoJson = To,
                t.gridLayer = Ho,
                t.icon = Qi,
                t.imageOverlay = Po,
                t.latLng = U,
                t.latLngBounds = N,
                t.layerGroup = Ki,
                t.map = si,
                t.marker = oo,
                t.point = A,
                t.polygon = _o,
                t.polyline = co,
                t.popup = Io,
                t.rectangle = tn,
                t.setOptions = _,
                t.stamp = a,
                t.svg = $o,
                t.svgOverlay = Do,
                t.tileLayer = Go,
                t.tooltip = Zo,
                t.transformation = Y,
                t.version = e,
                t.videoOverlay = Co;
                var cn = window.L;
                t.noConflict = function() {
                    return window.L = cn,
                    this
                }
                ,
                window.L = t
            }(e)
        }
    }
      , e = {};
    function i(o) {
        var n = e[o];
        if (void 0 !== n)
            return n.exports;
        var s = e[o] = {
            exports: {}
        };
        return t[o].call(s.exports, s, s.exports, i),
        s.exports
    }
    i(5243),
    i(1787),
    i(1820),
    i(2582),
    i(2217),
    i(3648),
    i(1771),
    i(1725)
}
)();
