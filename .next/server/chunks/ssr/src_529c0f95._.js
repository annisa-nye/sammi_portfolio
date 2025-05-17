module.exports = {

"[project]/src/data/paintings.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"title\":\"I'm Panicking at the Disco!\",\"year\":2025,\"medium\":\"mixed-media\",\"filename\":\"01.jpg\"},{\"title\":\"Now I’m Yelling & Everyone Is Upset!\",\"year\":2025,\"medium\":\"mixed-media\",\"filename\":\"02.jpg\"},{\"title\":\"Pulling Teeth\",\"year\":2025,\"medium\":\"mixed-media\",\"filename\":\"03.jpg\"},{\"title\":\"Here Is A Pear\",\"year\":2024,\"medium\":\"acrylic\",\"filename\":\"01.jpg\"},{\"title\":\"Here Is Another Pear\",\"year\":2024,\"medium\":\"acrylic\",\"filename\":\"02.jpg\"},{\"title\":\"Untitled\",\"year\":2024,\"medium\":\"acrylic\",\"filename\":\"05.jpg\"},{\"title\":\"Grievous Bodily Harm 1\",\"year\":2023,\"medium\":\"oil\",\"filename\":\"01.jpg\"},{\"title\":\"Grievous Bodily Harm 2\",\"year\":2023,\"medium\":\"oil\",\"filename\":\"02.jpg\"},{\"title\":\"Grievous Bodily Harm 3\",\"year\":2023,\"medium\":\"oil\",\"filename\":\"03.jpg\"},{\"title\":\"Freeze\",\"year\":2021,\"medium\":\"acrylic\",\"filename\":\"06.jpg\"},{\"title\":\"Bleach\",\"year\":2021,\"medium\":\"acrylic\",\"filename\":\"07.jpg\"},{\"title\":\"Brain snakes\",\"year\":2021,\"medium\":\"acrylic\",\"filename\":\"08.jpg\"}]"));}}),
"[project]/src/app/gallery/painting/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaintingGallery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$paintings$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/paintings.json (json)");
'use client';
;
;
function PaintingGallery() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center",
                children: "Paintings"
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/painting/page.tsx",
                lineNumber: 9,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$paintings$2e$json__$28$json$29$__["default"].map(({ title, filename, medium, year })=>{
                    const imageUrl = `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/painting/${medium}/${filename}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "bg-white rounded shadow p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imageUrl,
                                alt: title,
                                className: "w-full h-auto object-cover rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/gallery/painting/page.tsx",
                                lineNumber: 16,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "mt-2 text-sm text-center text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/gallery/painting/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 9
                                    }, this),
                                    " (",
                                    year,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/gallery/painting/page.tsx",
                                lineNumber: 21,
                                columnNumber: 8
                            }, this)
                        ]
                    }, imageUrl, true, {
                        fileName: "[project]/src/app/gallery/painting/page.tsx",
                        lineNumber: 15,
                        columnNumber: 7
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/painting/page.tsx",
                lineNumber: 11,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/gallery/painting/page.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, this);
}
}}),

};

//# sourceMappingURL=src_529c0f95._.js.map