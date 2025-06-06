(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Nav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Nav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const navItems = [
    {
        name: 'Home',
        href: '#home'
    },
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Gallery',
        href: '#gallery'
    },
    {
        name: 'CV',
        href: '#cv'
    },
    {
        name: 'Instagram',
        href: '#instagram',
        hideOnMobile: true
    },
    {
        name: 'Contact',
        href: '#contact'
    }
];
function Nav() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if we're on mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const checkMobile = {
                "Nav.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 640); // sm breakpoint
                }
            }["Nav.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "Nav.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    // Memoize the scroll handler to prevent unnecessary re-renders
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Nav.useCallback[handleScroll]": ()=>{
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            let currentSection = 'home';
            let maxVisibility = 0;
            // Find the section that is currently most visible in the viewport
            navItems.forEach({
                "Nav.useCallback[handleScroll]": ({ href })=>{
                    const section = document.querySelector(href);
                    if (section) {
                        const { top, bottom, height } = section.getBoundingClientRect();
                        const offsetTop = top + window.scrollY;
                        const offsetBottom = bottom + window.scrollY;
                        const viewportHeight = window.innerHeight;
                        // Calculate how much of the section is visible in the viewport
                        const visibleTop = Math.max(0, top);
                        const visibleBottom = Math.min(viewportHeight, bottom);
                        const visibleHeight = visibleBottom - visibleTop;
                        const visibilityRatio = visibleHeight / height;
                        // Special handling for gallery section
                        if (section.id === 'gallery') {
                            // Check if we're in any of the gallery subsections
                            const galleryCards = document.querySelectorAll('#gallery .gallery-card');
                            galleryCards.forEach({
                                "Nav.useCallback[handleScroll]": (card)=>{
                                    const cardRect = card.getBoundingClientRect();
                                    const cardTop = cardRect.top + window.scrollY;
                                    const cardBottom = cardRect.bottom + window.scrollY;
                                    if (scrollPosition >= cardTop && scrollPosition < cardBottom) {
                                        // If we're in a gallery subsection, keep gallery as active
                                        currentSection = 'gallery';
                                        maxVisibility = 1;
                                    }
                                }
                            }["Nav.useCallback[handleScroll]"]);
                        }
                        // Special handling for Instagram section on mobile
                        if (isMobile && section.id === 'instagram') {
                            // On mobile, when in Instagram section, highlight Contact instead
                            if (visibilityRatio > maxVisibility && scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                                currentSection = 'contact';
                                maxVisibility = visibilityRatio;
                            }
                        } else {
                            // Normal section handling
                            if (visibilityRatio > maxVisibility && scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                                currentSection = section.id;
                                maxVisibility = visibilityRatio;
                            }
                        }
                    }
                }
            }["Nav.useCallback[handleScroll]"]);
            setActiveSection(currentSection);
        }
    }["Nav.useCallback[handleScroll]"], [
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            // Set up the Intersection Observer with adjusted margins for better detection
            const observer = new IntersectionObserver({
                "Nav.useEffect": (entries)=>{
                    entries.forEach({
                        "Nav.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                // For gallery section, check if we're in a subsection
                                if (entry.target.id === 'gallery') {
                                    const galleryCards = document.querySelectorAll('#gallery .gallery-card');
                                    let inSubsection = false;
                                    galleryCards.forEach({
                                        "Nav.useEffect": (card)=>{
                                            const rect = card.getBoundingClientRect();
                                            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                                                inSubsection = true;
                                            }
                                        }
                                    }["Nav.useEffect"]);
                                    if (inSubsection) {
                                        setActiveSection('gallery');
                                    }
                                } else if (isMobile && entry.target.id === 'instagram') {
                                    // On mobile, when Instagram section is visible, highlight Contact
                                    setActiveSection('contact');
                                } else {
                                    setActiveSection(entry.target.id);
                                }
                            }
                        }
                    }["Nav.useEffect"]);
                }
            }["Nav.useEffect"], {
                rootMargin: '-20% 0px -80% 0px',
                threshold: [
                    0,
                    0.25,
                    0.5,
                    0.75,
                    1
                ]
            });
            // Observe all sections
            navItems.forEach({
                "Nav.useEffect": ({ href })=>{
                    const section = document.querySelector(href);
                    if (section) observer.observe(section);
                }
            }["Nav.useEffect"]);
            // Add scroll event listener with throttling
            let ticking = false;
            const scrollListener = {
                "Nav.useEffect.scrollListener": ()=>{
                    if (!ticking) {
                        window.requestAnimationFrame({
                            "Nav.useEffect.scrollListener": ()=>{
                                handleScroll();
                                ticking = false;
                            }
                        }["Nav.useEffect.scrollListener"]);
                        ticking = true;
                    }
                }
            }["Nav.useEffect.scrollListener"];
            window.addEventListener('scroll', scrollListener, {
                passive: true
            });
            // Call once on mount to set initial state
            handleScroll();
            return ({
                "Nav.useEffect": ()=>{
                    observer.disconnect();
                    window.removeEventListener('scroll', scrollListener);
                }
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        handleScroll,
        isMobile
    ]);
    const handleClick = (e, href)=>{
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
            setActiveSection(href.replace('#', ''));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white text-black shadow-md sm:top-6 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto sm:w-auto sm:rounded-full px-4 sm:px-6 py-3 sm:py-2 flex justify-center items-center border-b sm:border-b-0 border-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2 sm:gap-6 text-sm font-medium max-w-screen-sm sm:max-w-none mx-auto w-full justify-between sm:justify-center",
            children: navItems.map(({ name, href, hideOnMobile })=>{
                // Skip Instagram item on mobile
                if (hideOnMobile && isMobile) return null;
                const sectionId = href.replace('#', '');
                const isActive = activeSection === sectionId;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    onClick: (e)=>handleClick(e, href),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('transition-colors text-sm font-medium px-2 sm:px-3 py-1 rounded-full cursor-pointer whitespace-nowrap', isActive ? 'bg-black text-white' : 'opacity-60 hover:opacity-100'),
                    children: name
                }, href, false, {
                    fileName: "[project]/src/components/Nav.tsx",
                    lineNumber: 191,
                    columnNumber: 7
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/Nav.tsx",
            lineNumber: 182,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Nav.tsx",
        lineNumber: 181,
        columnNumber: 3
    }, this);
}
_s(Nav, "jRkPcM7rhcpw4Wfpj+TRQbuMpbg=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_Nav_tsx_2a7430a5._.js.map