(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/cv.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cv": (()=>cv)
});
const cv = {
    exhibitions: [
        {
            year: 2021,
            items: [
                "Ongoing collaboration with 'Short Notice' music and arts event group. Sydney/Eora, NSW.",
                "'Smoke and Steel', for Teel Studios. Curated by Harry Phillips. Wollongong, NSW."
            ]
        },
        {
            year: 2022,
            items: [
                'Group show for Bad News Gallery. Curated by Tsubasa Sherwin-Ozawa. Wollongong NSW.',
                "'Building Glass Houses', Project Contemporary Artspace. Curated by Erin Mison, Merle Stone and Greer Harris for Make Space. Wollongong, NSW."
            ]
        },
        {
            year: 2023,
            items: [
                'Selected works for Boomer Gallery. Tower Bridge, London UK.',
                'Virtual Open Studios for GlogAUair online program. Kreuzberg, Berlin.'
            ]
        },
        {
            year: 2024,
            items: [
                'Group Exhibition for Ember Collaborative Festival. Glenworth Valley, NSW.'
            ]
        },
        {
            year: 2025,
            items: [
                "'Welcome To The Dinner Party', group show for Platform Presents. Melbourne/Naarm, VIC."
            ]
        }
    ],
    residencies: [
        {
            year: 2023,
            items: [
                'Buinho Creative Hub, curated by Monica Reis. Messejana, Portugal.',
                'GlogAUair, curated by Justin Ross and Laura Olea Lopez. Berlin, Germany.',
                'Imsouane Dream Surf Camp, curated by Anas Lamziouaq. Imsouane, Morocco.'
            ]
        },
        {
            year: 2024,
            items: [
                'Prisma Collective. Lisbon, Portugal.'
            ]
        }
    ],
    collaborations: [
        {
            year: 2022,
            items: [
                "Stop motion animation for 'Life in Real Time' music video – Good Lekker. With Connor Duke."
            ]
        },
        {
            year: 2023,
            items: [
                'Co-designed mural with tattoo artist Ilyas Kedari. Taghazout Skate Park, Morocco.',
                "Creative direction for 'I Am Woman' project with Virginie Martinez. Imsouane, Morocco."
            ]
        },
        {
            year: 2024,
            items: [
                "Illustrated animation for Thunder Fox E.P. 'The Best.' In collaboration with Jesse Tachibana."
            ]
        },
        {
            year: 2025,
            items: [
                'Animated projections for Short Notice festival, Sassafras, NSW.'
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CVSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CVSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
function CVSection({ title, data, isExpanded, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${isExpanded ? 'mb-12' : 'mb-4'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: "w-full text-left flex items-center justify-between mb-6 border-b border-gray-300 dark:border-gray-700 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/CVSection.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: isExpanded ? '−' : '+'
                    }, void 0, false, {
                        fileName: "[project]/src/components/CVSection.tsx",
                        lineNumber: 25,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CVSection.tsx",
                lineNumber: 20,
                columnNumber: 4
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-fadeIn space-y-8 text-center",
                children: data.map(({ year, items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-800 dark:text-gray-100",
                                children: year
                            }, void 0, false, {
                                fileName: "[project]/src/components/CVSection.tsx",
                                lineNumber: 32,
                                columnNumber: 8
                            }, this),
                            items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 dark:text-gray-300",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CVSection.tsx",
                                            lineNumber: 37,
                                            columnNumber: 10
                                        }, this),
                                        item.includes('Welcome To The Dinner Party') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex overflow-x-auto space-x-4 mt-4",
                                            children: [
                                                ...Array(8)
                                            ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-48 h-48 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/platform-exhibition/0${index + 1}.jpg`,
                                                        alt: `Exhibition Image ${index + 1}`,
                                                        width: 192,
                                                        height: 192,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CVSection.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 14
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/CVSection.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 13
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CVSection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 11
                                        }, this),
                                        item.includes('Prisma Collective') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex overflow-x-auto space-x-4 mt-4",
                                            children: [
                                                ...Array(11)
                                            ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-48 h-48 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/prisma-residency/${index < 9 ? '0' : ''}${index + 1}.jpg`,
                                                        alt: `Prisma Collective Image ${index + 1}`,
                                                        width: 192,
                                                        height: 192,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CVSection.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 14
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/CVSection.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 13
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CVSection.tsx",
                                            lineNumber: 56,
                                            columnNumber: 11
                                        }, this),
                                        item.includes('Buinho Creative Hub') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex overflow-x-auto space-x-4 mt-4",
                                            children: [
                                                ...Array(4)
                                            ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-48 h-48 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/messejana-residency/0${index + 1}.jpg`,
                                                        alt: `Buinho Creative Hub Image ${index + 1}`,
                                                        width: 192,
                                                        height: 192,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CVSection.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 14
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/CVSection.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 13
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CVSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 11
                                        }, this),
                                        item.includes('GlogAUair, curated by Justin Ross and Laura Olea Lopez. Berlin, Germany.') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex overflow-x-auto space-x-4 mt-4",
                                            children: [
                                                ...Array(9)
                                            ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-48 h-48 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/glogauair-residency/0${index + 1}.jpg`,
                                                        alt: `GlogAUair Image ${index + 1}`,
                                                        width: 192,
                                                        height: 192,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CVSection.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 14
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/src/components/CVSection.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 13
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CVSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/CVSection.tsx",
                                    lineNumber: 36,
                                    columnNumber: 9
                                }, this))
                        ]
                    }, year, true, {
                        fileName: "[project]/src/components/CVSection.tsx",
                        lineNumber: 31,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/CVSection.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CVSection.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}
_c = CVSection;
var _c;
__turbopack_context__.k.register(_c, "CVSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/paintings.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "paintingsData": (()=>paintingsData)
});
const paintingsData = {
    paintings: [
        {
            medium: 'acrylic',
            images: [
                {
                    filename: '01.jpg',
                    title: 'Here Is A Pear',
                    year: 2024
                },
                {
                    filename: '02.jpg',
                    title: 'Here Is Another Pear',
                    year: 2024
                },
                {
                    filename: '03.jpg',
                    title: 'Acrylic 3',
                    year: 2024
                },
                {
                    filename: '04.jpg',
                    year: 2024
                },
                {
                    filename: '05.jpg',
                    year: 2024
                },
                {
                    filename: '06.jpg',
                    title: 'Freeze',
                    year: 2021
                },
                {
                    filename: '07.jpg',
                    title: 'Bleach',
                    year: 2021
                },
                {
                    filename: '08.jpg',
                    title: 'Brain snakes',
                    year: 2021
                },
                {
                    filename: '09.jpg',
                    year: 2024
                }
            ]
        },
        {
            medium: 'oil',
            images: [
                {
                    filename: '01.jpg',
                    title: 'Grievous Bodily Harm 1',
                    year: 2023
                },
                {
                    filename: '02.jpg',
                    title: 'Grievous Bodily Harm 2',
                    year: 2023
                },
                {
                    filename: '03.jpg',
                    title: 'Grievous Bodily Harm 3',
                    year: 2023
                },
                {
                    filename: '04.jpg',
                    year: 2024
                }
            ]
        },
        {
            medium: 'gouache',
            images: [
                {
                    filename: '01.jpg',
                    year: 2024
                },
                {
                    filename: '02.jpg',
                    year: 2024
                },
                {
                    filename: '03.jpg',
                    year: 2024
                }
            ]
        },
        {
            medium: 'mixed-media',
            images: [
                {
                    filename: '01.jpg',
                    title: "I'm Panicking at the Disco!",
                    year: 2025
                },
                {
                    filename: '02.jpg',
                    title: "Now I'm Yelling & Everyone Is Upset!",
                    year: 2025
                },
                {
                    filename: '03.jpg',
                    title: 'Pulling Teeth',
                    year: 2025
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SystemThemeHeading.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SystemThemeHeading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SystemThemeHeading({ name, width = 500, height = 150, className = '', priority = false }) {
    _s();
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemThemeHeading.useEffect": ()=>{
            setMounted(true);
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches);
            const handler = {
                "SystemThemeHeading.useEffect.handler": (e)=>setIsDarkMode(e.matches)
            }["SystemThemeHeading.useEffect.handler"];
            mediaQuery.addEventListener('change', handler);
            return ({
                "SystemThemeHeading.useEffect": ()=>mediaQuery.removeEventListener('change', handler)
            })["SystemThemeHeading.useEffect"];
        }
    }["SystemThemeHeading.useEffect"], []);
    if (!mounted) {
        return null; // Or a loading spinner, or fallback light mode image
    }
    const imagePath = isDarkMode ? `/headings-dark/${name}-invert.png` : `/headings/${name}.png`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: imagePath,
        alt: name,
        width: width,
        height: height,
        className: `mx-auto mb-10 ${className}`,
        priority: priority
    }, void 0, false, {
        fileName: "[project]/src/components/SystemThemeHeading.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, this);
}
_s(SystemThemeHeading, "q+x0zdt/XGteXtZ2heTYS/042UQ=");
_c = SystemThemeHeading;
var _c;
__turbopack_context__.k.register(_c, "SystemThemeHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SystemThemeHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Footer() {
    _s();
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            setMounted(true);
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches);
            const handler = {
                "Footer.useEffect.handler": (e)=>setIsDarkMode(e.matches)
            }["Footer.useEffect.handler"];
            mediaQuery.addEventListener('change', handler);
            return ({
                "Footer.useEffect": ()=>mediaQuery.removeEventListener('change', handler)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    if (!mounted) {
        return null; // Prevent hydration mismatch
    }
    const logoSrc = isDarkMode ? '/logo/logo-invert.png' : '/logo/logo.png';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "bg-white dark:bg-[#0a0a0a] py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "max-w-3xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    name: "contact",
                    width: 500,
                    height: 150,
                    className: "mx-auto mb-10",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 32,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 md:p-8 mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-64 h-64 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: logoSrc,
                                    alt: "Sammi Carr Logo",
                                    fill: true,
                                    className: "object-contain",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 44,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-center md:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold mb-2 text-gray-900 dark:text-white",
                                        children: "Sammi Carr"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-300 mb-4 italic",
                                        children: "Multimedia visual artist"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center justify-center md:justify-start gap-2 text-gray-700 dark:text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:scarrjam@gmail.com",
                                                        className: "hover:underline",
                                                        children: "scarrjam@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 63,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center justify-center md:justify-start gap-2 text-gray-700 dark:text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 11
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://www.instagram.com/scarrjam/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "hover:underline",
                                                        children: "@scarrjam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center justify-center md:justify-start gap-2 text-gray-700 dark:text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Illawarra/Dharawal land, NSW"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 107,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 62,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 55,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 42,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 41,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-sm text-gray-500 dark:text-gray-400",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Sammi Carr. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 135,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c49212942d8ea1a9" + " " + 'mt-6',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animation: 'breatheGlow 3s ease-in-out infinite'
                            },
                            className: "jsx-c49212942d8ea1a9" + " " + 'bg-gradient-to-br from-gray-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 mb-6 max-w-xs mx-auto border border-blue-200 dark:border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(96,165,250,0.4)]',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c49212942d8ea1a9" + " " + 'text-center text-sm font-light text-gray-700 dark:text-gray-200 mb-2 tracking-wide',
                                    children: [
                                        "Designed and built by",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c49212942d8ea1a9" + " " + 'text-blue-600 dark:text-blue-400 font-medium italic',
                                            children: "Annisa."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 149,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 147,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c49212942d8ea1a9" + " " + 'text-center mb-3',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://annisanye.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-c49212942d8ea1a9" + " " + 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium underline decoration-blue-300 dark:decoration-blue-500 hover:decoration-blue-600 dark:hover:decoration-blue-400 underline-offset-2 text-sm',
                                        children: "annisanye.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 154,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 153,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c49212942d8ea1a9" + " " + 'flex items-center justify-center gap-5',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:annisanye@outlook.com",
                                            title: "Email",
                                            className: "jsx-c49212942d8ea1a9" + " " + 'group text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-c49212942d8ea1a9" + " " + 'w-4 h-4',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 1.5,
                                                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                                    className: "jsx-c49212942d8ea1a9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 169,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 164,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/feed/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            title: "LinkedIn",
                                            className: "jsx-c49212942d8ea1a9" + " " + 'group text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-c49212942d8ea1a9" + " " + 'w-4 h-4',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                                    className: "jsx-c49212942d8ea1a9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 190,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 183,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/annisa-nye",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            title: "GitHub",
                                            className: "jsx-c49212942d8ea1a9" + " " + 'group text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-c49212942d8ea1a9" + " " + 'w-4 h-4',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                                                    className: "jsx-c49212942d8ea1a9"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 205,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 198,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 163,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 141,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "c49212942d8ea1a9",
                            children: "@keyframes breatheGlow{0%,to{border-color:#93c5fd;box-shadow:0 0 15px #3b82f633}50%{border-color:#3b82f6;box-shadow:0 0 25px #3b82f680}}@media (prefers-color-scheme:dark){@keyframes breatheGlow{0%,to{border-color:#60a5fa;box-shadow:0 0 15px #60a5fa4d}50%{border-color:#93c5fd;box-shadow:0 0 25px #60a5fa99}}}"
                        }, void 0, false, void 0, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 140,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 30,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
}
_s(Footer, "q+x0zdt/XGteXtZ2heTYS/042UQ=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SystemThemeLogo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SystemThemeLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SystemThemeLogo({ className = '' }) {
    _s();
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemThemeLogo.useEffect": ()=>{
            setMounted(true);
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches);
            const handler = {
                "SystemThemeLogo.useEffect.handler": (e)=>setIsDarkMode(e.matches)
            }["SystemThemeLogo.useEffect.handler"];
            mediaQuery.addEventListener('change', handler);
            return ({
                "SystemThemeLogo.useEffect": ()=>mediaQuery.removeEventListener('change', handler)
            })["SystemThemeLogo.useEffect"];
        }
    }["SystemThemeLogo.useEffect"], []);
    if (!mounted) {
        return null; // Or a loading spinner, or fallback light mode image
    }
    const logoSrc = isDarkMode ? '/logo/logo-invert.gif' : '/logo/logo.gif';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: logoSrc,
        alt: "Sammi Carr Logo Animated",
        width: 800,
        height: 400,
        className: `mx-auto mb-6 object-contain w-[800px] h-auto ${className}`,
        priority: true,
        unoptimized: true
    }, void 0, false, {
        fileName: "[project]/src/components/SystemThemeLogo.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this);
}
_s(SystemThemeLogo, "q+x0zdt/XGteXtZ2heTYS/042UQ=");
_c = SystemThemeLogo;
var _c;
__turbopack_context__.k.register(_c, "SystemThemeLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/InstagramSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InstagramSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SystemThemeHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function InstagramSection({ posts }) {
    _s();
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // For mobile devices (iPhones and small screens), show specific posts: 1, 2, 5, 7
    const mobilePostIds = [
        '1',
        '2',
        '5',
        '7'
    ];
    const mobileDisplayPosts = posts.filter((post)=>mobilePostIds.includes(post.id));
    // Show 8 posts for large devices (4x2 grid), first 4 will be visible on small devices (2x2 grid)
    const displayPosts = posts.slice(0, 8);
    const handlePostClick = (post)=>{
        if (post.link) {
            window.open(post.link, '_blank', 'noopener,noreferrer');
        } else {
            setSelectedPost(post);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "instagram",
        className: "bg-white dark:bg-[#0a0a0a] flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    name: "instagram",
                    width: 500,
                    height: 150,
                    className: "mx-auto mb-10",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/InstagramSection.tsx",
                    lineNumber: 45,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden contents",
                            children: mobileDisplayPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative cursor-pointer",
                                    onClick: ()=>handlePostClick(post),
                                    style: {
                                        width: '100%',
                                        aspectRatio: '1/1',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                        transition: 'transform 0.3s ease'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.transform = 'scale(1.02)',
                                    onMouseLeave: (e)=>e.currentTarget.style.transform = 'scale(1)',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: post.imageUrl,
                                            alt: post.caption || 'Instagram post',
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InstagramSection.tsx",
                                            lineNumber: 79,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-end",
                                            style: {
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.opacity = '1',
                                            onMouseLeave: (e)=>e.currentTarget.style.opacity = '0',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 sm:p-4 text-white",
                                                children: post.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm line-clamp-2",
                                                    children: post.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InstagramSection.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 12
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InstagramSection.tsx",
                                                lineNumber: 102,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InstagramSection.tsx",
                                            lineNumber: 91,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, post.id, true, {
                                    fileName: "[project]/src/components/InstagramSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/InstagramSection.tsx",
                            lineNumber: 56,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:contents",
                            children: displayPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative cursor-pointer",
                                    onClick: ()=>handlePostClick(post),
                                    style: {
                                        width: '100%',
                                        aspectRatio: '1/1',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                        transition: 'transform 0.3s ease'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.transform = 'scale(1.02)',
                                    onMouseLeave: (e)=>e.currentTarget.style.transform = 'scale(1)',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: post.imageUrl,
                                            alt: post.caption || 'Instagram post',
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InstagramSection.tsx",
                                            lineNumber: 138,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-end",
                                            style: {
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.opacity = '1',
                                            onMouseLeave: (e)=>e.currentTarget.style.opacity = '0',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 sm:p-4 text-white",
                                                children: post.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm line-clamp-2",
                                                    children: post.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InstagramSection.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 12
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InstagramSection.tsx",
                                                lineNumber: 161,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InstagramSection.tsx",
                                            lineNumber: 150,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, post.id, true, {
                                    fileName: "[project]/src/components/InstagramSection.tsx",
                                    lineNumber: 117,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/InstagramSection.tsx",
                            lineNumber: 115,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InstagramSection.tsx",
                    lineNumber: 54,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-6 sm:mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.instagram.com/scarrjam/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InstagramSection.tsx",
                                    lineNumber: 188,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InstagramSection.tsx",
                                lineNumber: 182,
                                columnNumber: 7
                            }, this),
                            "Follow on Instagram"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InstagramSection.tsx",
                        lineNumber: 176,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/InstagramSection.tsx",
                    lineNumber: 175,
                    columnNumber: 5
                }, this),
                selectedPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4",
                    onClick: ()=>setSelectedPost(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-zinc-900 rounded-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors",
                                onClick: ()=>setSelectedPost(null),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InstagramSection.tsx",
                                        lineNumber: 215,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InstagramSection.tsx",
                                    lineNumber: 209,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InstagramSection.tsx",
                                lineNumber: 205,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: selectedPost.imageUrl,
                                    alt: selectedPost.caption || 'Instagram post',
                                    fill: true,
                                    className: "object-contain",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InstagramSection.tsx",
                                    lineNumber: 224,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InstagramSection.tsx",
                                lineNumber: 223,
                                columnNumber: 8
                            }, this),
                            selectedPost.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 text-gray-800 dark:text-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: selectedPost.caption
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InstagramSection.tsx",
                                        lineNumber: 234,
                                        columnNumber: 10
                                    }, this),
                                    selectedPost.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-2 text-gray-500",
                                        children: selectedPost.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InstagramSection.tsx",
                                        lineNumber: 236,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InstagramSection.tsx",
                                lineNumber: 233,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InstagramSection.tsx",
                        lineNumber: 204,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/InstagramSection.tsx",
                    lineNumber: 200,
                    columnNumber: 6
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/InstagramSection.tsx",
            lineNumber: 44,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/InstagramSection.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, this);
}
_s(InstagramSection, "gO2hpKITQnTFbbgLvGWkMtNfAjI=");
_c = InstagramSection;
var _c;
__turbopack_context__.k.register(_c, "InstagramSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ScrollAnimation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScrollAnimation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Total number of frames in the animation
const TOTAL_FRAMES = 38; // Updated to match the actual number of frames
function ScrollAnimation() {
    _s();
    const [currentFrame, setCurrentFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAnimation.useEffect": ()=>{
            setMounted(true);
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(mediaQuery.matches);
            // Check if it's a mobile device (including iPhone)
            const checkMobile = {
                "ScrollAnimation.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth <= 768);
                }
            }["ScrollAnimation.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            const handler = {
                "ScrollAnimation.useEffect.handler": (e)=>setIsDarkMode(e.matches)
            }["ScrollAnimation.useEffect.handler"];
            mediaQuery.addEventListener('change', handler);
            return ({
                "ScrollAnimation.useEffect": ()=>{
                    mediaQuery.removeEventListener('change', handler);
                    window.removeEventListener('resize', checkMobile);
                }
            })["ScrollAnimation.useEffect"];
        }
    }["ScrollAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAnimation.useEffect": ()=>{
            const handleScroll = {
                "ScrollAnimation.useEffect.handleScroll": ()=>{
                    if (!containerRef.current) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    const scrollTop = window.scrollY;
                    const containerTop = rect.top + scrollTop;
                    const containerHeight = rect.height;
                    const windowHeight = window.innerHeight;
                    // Check if the container is in view
                    const isInView = rect.top < windowHeight && rect.bottom > 0;
                    setIsVisible(isInView);
                    if (isInView) {
                        // Calculate how far we've scrolled through the container
                        const scrollProgress = (scrollTop - containerTop + windowHeight) / (containerHeight + windowHeight);
                        // Calculate which frame to show based on scroll progress
                        const frameNumber = Math.min(Math.max(Math.floor(scrollProgress * TOTAL_FRAMES) + 1, 1), TOTAL_FRAMES);
                        setCurrentFrame(frameNumber);
                    }
                }
            }["ScrollAnimation.useEffect.handleScroll"];
            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
            // Initial check
            handleScroll();
            return ({
                "ScrollAnimation.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["ScrollAnimation.useEffect"];
        }
    }["ScrollAnimation.useEffect"], []);
    // Format frame number to 3 digits (e.g., 1 -> "001")
    const formatFrameNumber = (num)=>{
        return num.toString().padStart(3, '0');
    };
    if (!mounted) {
        return null; // Prevent hydration mismatch
    }
    // Use dark mode animation preview when in dark mode
    const animationFolder = isDarkMode ? 'animation_preview-dark' : 'animation_preview';
    // Check if we should use fullscreen mode (dark mode + mobile)
    const shouldUseFullscreen = isDarkMode && isMobile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full h-[200vh] sm:h-[300vh]" // Taller on desktop for smoother scrolling
        ,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `sticky top-0 w-full h-screen flex items-center justify-center ${shouldUseFullscreen ? 'px-0' : 'px-0 sm:px-6'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative flex items-center justify-center ${shouldUseFullscreen ? 'w-full h-full' : 'w-full h-full sm:max-w-7xl mx-auto'}`,
                style: {
                    willChange: 'transform'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: `/${animationFolder}/frame_${formatFrameNumber(currentFrame)}.gif`,
                    alt: `Animation frame ${currentFrame}`,
                    style: {
                        width: shouldUseFullscreen ? '100vw' : '100%',
                        height: shouldUseFullscreen ? '100vh' : '100%',
                        objectFit: shouldUseFullscreen ? 'cover' : 'contain',
                        transition: 'opacity 0.15s',
                        willChange: 'opacity, transform'
                    },
                    className: `select-none pointer-events-none ${isVisible ? 'opacity-100' : 'opacity-0'}`,
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/src/components/ScrollAnimation.tsx",
                    lineNumber: 114,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollAnimation.tsx",
                lineNumber: 103,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ScrollAnimation.tsx",
            lineNumber: 98,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollAnimation.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, this);
}
_s(ScrollAnimation, "iKihjZV0b3S9LVWixaA7isZIs68=");
_c = ScrollAnimation;
var _c;
__turbopack_context__.k.register(_c, "ScrollAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cv.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CVSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CVSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$paintings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/paintings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SystemThemeHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SystemThemeLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InstagramSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InstagramSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollAnimation.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/LightboxModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const S3_BASE_URL = 'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com';
const initialGallerySections = [
    {
        title: 'Painting',
        images: [],
        paintings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$paintings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paintingsData"]
    },
    {
        title: 'Illustration',
        images: [
            'charcoal/01.jpg',
            'charcoal/02.jpg',
            'charcoal/03.jpg',
            'charcoal/04.jpg',
            'charcoal/05.jpg',
            'ink/01.jpg',
            'ink/02.jpg',
            'ink/03.jpg',
            'ink/04.jpg',
            'ink/05.jpg',
            'ink/06.jpg',
            'ink/07.jpg',
            'ink/08.jpg',
            'ink/09.jpg',
            'ink/10.jpg',
            'oil-pastel/01.jpg',
            'oil-pastel/02.jpg',
            'oil-pastel/03.jpg',
            'oil-pastel/04.jpg',
            'sketch/01.jpg',
            'sketch/02.jpg',
            'sketch/03.jpg',
            'sketch/04.jpg',
            'sketch/05.jpg',
            'sketch/06.jpg'
        ]
    },
    {
        title: 'Collage',
        images: Array.from({
            length: 16
        }, (_, i)=>`${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
        title: 'Digital',
        images: Array.from({
            length: 5
        }, (_, i)=>`${String(i + 1).padStart(2, '0')}.jpg`)
    }
];
const instagramPosts = [
    {
        id: '1',
        imageUrl: '/instagram/1_instagram.jpg',
        caption: "and that's a hot girl's prerogative and pleasure",
        link: 'https://www.instagram.com/p/DIIorcNhrb2/?img_index=1'
    },
    {
        id: '2',
        imageUrl: '/instagram/2_instagram.jpg',
        caption: 'PLEASE I NEED A STUDIO I CANT SLEEP IN HERE ANYMORE',
        link: 'https://www.instagram.com/p/DGfXUz9hW7H/'
    },
    {
        id: '3',
        imageUrl: '/instagram/3_instagram.jpg',
        caption: "HEY SO I'm EXCITED for upcoming showcase at @prisma.lx where i have been BLESSED with a 2 month residency in this !!!! epic !!! lego!!! city !!!",
        link: 'https://www.instagram.com/p/C35lP49tHol/?img_index=1'
    },
    {
        id: '4',
        imageUrl: '/instagram/4_instagram.jpg',
        caption: 'primary colours make me go so feral',
        link: 'https://www.instagram.com/p/CvuoR-ytbfB/?img_index=1'
    },
    {
        id: '5',
        imageUrl: '/instagram/5_instagram.jpg',
        caption: 'discarded surf board pix for unofficial headshot biz purposes. thanks 2 my day dot sista gorl @_sarahbirch 🤝🤝',
        link: 'https://www.instagram.com/p/CudS9itv2wd/?img_index=1'
    },
    {
        id: '6',
        imageUrl: '/instagram/6_instagram.jpg',
        caption: '"throat handkerchief"',
        link: 'https://www.instagram.com/p/CtI5hYyrorF/?img_index=5'
    },
    {
        id: '7',
        imageUrl: '/instagram/7_instagram.jpg',
        caption: 'Bratz detachable foot behaviour',
        link: 'https://www.instagram.com/p/CpOJKC4hLJT/?img_index=1'
    },
    {
        id: '8',
        imageUrl: '/instagram/8_instagram.jpg',
        caption: 'i come to you with my hands 👉👈 and my face 🥹',
        link: 'https://www.instagram.com/p/CkLJc28NHWi/'
    }
];
const GALLERY_PREVIEW_CATEGORIES = [
    {
        title: 'Painting',
        key: 'painting'
    },
    {
        title: 'Illustration',
        key: 'illustration'
    },
    {
        title: 'Collage',
        key: 'collage'
    },
    {
        title: 'Digital',
        key: 'digital'
    }
];
function HomePage() {
    _s();
    const [activeGallerySection, setActiveGallerySection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Animation');
    const [gallerySections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialGallerySections);
    const [expandedCVSections, setExpandedCVSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Exhibitions'
    ]);
    const [currentSet, setCurrentSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [currentAnimation, setCurrentAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageLoadError, setImageLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lightboxImages, setLightboxImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const interval = setInterval({
                "HomePage.useEffect.interval": ()=>{
                    setIsLoading(true);
                    setCurrentSet({
                        "HomePage.useEffect.interval": (prev)=>prev % 4 + 1
                    }["HomePage.useEffect.interval"]);
                    setImageLoadError({}); // Reset errors when changing sets
                }
            }["HomePage.useEffect.interval"], 10000);
            return ({
                "HomePage.useEffect": ()=>clearInterval(interval)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const handleImageError = (key)=>{
        setImageLoadError((prev)=>({
                ...prev,
                [key]: true
            }));
        setIsLoading(false);
    };
    const handleImageLoad = ()=>{
        setIsLoading(false);
    };
    const handleGalleryToggle = (title)=>{
        console.log('Toggling gallery section:', title);
        setActiveGallerySection(activeGallerySection === title ? null : title);
    };
    const handleCVToggle = (title)=>{
        setExpandedCVSections((prev)=>prev.includes(title) ? prev.filter((section)=>section !== title) : [
                ...prev,
                title
            ]);
    };
    const handlePreviousAnimation = ()=>{
        setCurrentAnimation((prev)=>prev === 1 ? 4 : prev - 1);
    };
    const handleNextAnimation = ()=>{
        setCurrentAnimation((prev)=>prev === 4 ? 1 : prev + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "home",
                        className: "bg-white dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 208,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 204,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 212,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "bg-white dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto w-full text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: "about",
                                    width: 500,
                                    height: 150,
                                    className: "mx-auto mb-8",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 mx-auto mt-8 w-full max-w-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/headshot/headshot-1.jpg",
                                        alt: "Sammi Carr headshot",
                                        width: 600,
                                        height: 400,
                                        className: "w-full h-auto object-cover rounded border border-gray-300 shadow-sm",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "italic text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed text-center",
                                    children: "Born and raised in Western Australia, Sammi Carr currently lives and practices from the Illawarra/Dharawal land in New South Wales. Her working process prioritises open-ended exploration and experimenting with a variety of mediums. Favouring dynamic colour, form and shape, she uses satire and personal annotation to comment on current political, social and environmental landscapes. Sammi is self-taught and has evolved her practice by playing with concepts through abstract and figurative expression."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 219,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 215,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "gallery",
                        className: "bg-white dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: "gallery",
                                    width: 500,
                                    height: 150,
                                    className: "mx-auto mb-10",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-12",
                                    children: GALLERY_PREVIEW_CATEGORIES.map(({ title, key })=>{
                                        const imageKey = `${currentSet}_${key}`;
                                        const hasError = imageLoadError[imageKey];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const images = gallerySections.find((section)=>section.title === title)?.images.map((image)=>({
                                                        src: `${S3_BASE_URL}/gallery/${title.toLowerCase()}/${image}`,
                                                        alt: `${title} ${image}`
                                                    })) || [];
                                                setSelectedImage(images[0]);
                                                setLightboxImages(images);
                                            },
                                            className: `w-full p-0 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center overflow-hidden flex flex-col ${GALLERY_PREVIEW_CATEGORIES.some(({ title })=>title === activeGallerySection) && activeGallerySection !== title ? 'blur-sm' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full aspect-square",
                                                    children: [
                                                        isLoading && !hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-zinc-800",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 13
                                                        }, this),
                                                        !hasError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `/gallery-preview/${imageKey}.jpg`,
                                                            alt: `${title} preview`,
                                                            fill: true,
                                                            className: `object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`,
                                                            sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw",
                                                            priority: currentSet === 1,
                                                            onError: ()=>handleImageError(imageKey),
                                                            onLoad: handleImageLoad,
                                                            loading: currentSet === 1 ? 'eager' : 'lazy',
                                                            quality: 75
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 13
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-zinc-800",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500 dark:text-gray-400",
                                                                children: "Image unavailable"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 sm:p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg sm:text-2xl font-bold mb-1 sm:mb-2",
                                                            children: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                                            children: title === 'Painting' ? 'View paintings in various mediums' : title === 'Illustration' ? 'Explore charcoal, ink, and sketch works' : title === 'Collage' ? 'Browse mixed media collages' : 'Discover digital artworks'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, title, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 10
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 7
                                }, this),
                                activeGallerySection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-fadeIn mt-8",
                                    children: gallerySections.find((section)=>section.title === activeGallerySection) ? activeGallerySection === 'Painting' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex overflow-x-auto space-x-4",
                                        children: gallerySections.find((section)=>section.title === 'Painting')?.paintings?.paintings.flatMap((mediumGroup)=>mediumGroup.images.map((painting)=>{
                                                const uniqueKey = `${mediumGroup.medium}-${painting.filename}`;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedImage({
                                                            src: `${S3_BASE_URL}/gallery/painting/${mediumGroup.medium}/${painting.filename}`,
                                                            alt: painting.title || `${mediumGroup.medium} painting`,
                                                            title: painting.title,
                                                            year: painting.year,
                                                            medium: mediumGroup.medium.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                                        }),
                                                    className: "group aspect-square relative bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden flex-none w-40 h-40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `${S3_BASE_URL}/gallery/painting/${mediumGroup.medium}/${painting.filename}`,
                                                            alt: painting.title || `${mediumGroup.medium} painting`,
                                                            fill: true,
                                                            sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw",
                                                            quality: 75,
                                                            className: "object-cover transition-transform duration-300 group-hover:scale-105",
                                                            unoptimized: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, uniqueKey, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 16
                                                }, this);
                                            }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 11
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex overflow-x-auto space-x-4",
                                        children: gallerySections.find((section)=>section.title === activeGallerySection)?.images.map((image, index)=>{
                                            const [medium] = image.split('/');
                                            const formattedMedium = medium?.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || '';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedImage({
                                                        src: `${S3_BASE_URL}/gallery/${activeGallerySection.toLowerCase()}/${image}`,
                                                        alt: `${activeGallerySection} ${image}`,
                                                        medium: formattedMedium
                                                    }),
                                                className: "group aspect-square relative bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden flex-none w-40 h-40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: `${S3_BASE_URL}/gallery/${activeGallerySection.toLowerCase()}/${image}`,
                                                        alt: `${activeGallerySection} ${index + 1}`,
                                                        fill: true,
                                                        sizes: "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw",
                                                        quality: 75,
                                                        className: "object-cover transition-transform duration-300 group-hover:scale-105",
                                                        unoptimized: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 16
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 16
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 15
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 11
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 sm:mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 sm:p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold mb-1 sm:mb-2",
                                                        children: "Animation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4",
                                                        children: "Watch animated works and motion pieces"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full aspect-video h-[500px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: `/animation/${currentAnimation}_animation.gif`,
                                                        alt: `Animation ${currentAnimation}`,
                                                        fill: true,
                                                        className: "object-contain",
                                                        sizes: "100vw",
                                                        quality: 75,
                                                        unoptimized: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-between p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handlePreviousAnimation,
                                                                className: "bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200",
                                                                "aria-label": "Previous animation",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-6 h-6",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M15 19l-7-7 7-7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 478,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 11
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleNextAnimation,
                                                                className: "bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200",
                                                                "aria-label": "Next animation",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-6 h-6",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5l7 7-7 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 12
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 11
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",
                                                        children: [
                                                            1,
                                                            2,
                                                            3,
                                                            4
                                                        ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setCurrentAnimation(num),
                                                                className: `w-2 h-2 rounded-full transition-colors duration-200 ${currentAnimation === num ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`,
                                                                "aria-label": `Go to animation ${num}`
                                                            }, num, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 12
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 255,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 251,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "cv",
                        className: "bg-white dark:bg-[#0a0a0a] flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SystemThemeHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    name: "cv",
                                    width: 500,
                                    height: 150,
                                    className: "mx-auto mb-10",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 533,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CVSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Exhibitions",
                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cv"].exhibitions.sort((a, b)=>b.year - a.year),
                                    isExpanded: expandedCVSections.includes('Exhibitions'),
                                    onToggle: ()=>handleCVToggle('Exhibitions')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 541,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CVSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Residencies",
                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cv"].residencies.sort((a, b)=>b.year - a.year),
                                    isExpanded: expandedCVSections.includes('Residencies'),
                                    onToggle: ()=>handleCVToggle('Residencies')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CVSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Collaborations",
                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cv"].collaborations.sort((a, b)=>b.year - a.year),
                                    isExpanded: expandedCVSections.includes('Collaborations'),
                                    onToggle: ()=>handleCVToggle('Collaborations')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 557,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 532,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 528,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InstagramSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        posts: instagramPosts
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 569,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 572,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 202,
                columnNumber: 4
            }, this),
            selectedImage && lightboxImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightboxModal, {
                isOpen: !!selectedImage,
                onClose: ()=>setSelectedImage(null),
                images: lightboxImages,
                initialIndex: lightboxImages.findIndex((image)=>image.src === selectedImage.src)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 577,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "5wQuR0ML5JNgFhkHsa3GBw6JNTY=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_93025dd5._.js.map