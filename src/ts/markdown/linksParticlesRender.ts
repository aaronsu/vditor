// import {Constants} from "../constants";
// import {addScript} from "../util/addScript";
//
// export const linksParticlesRender = (element: HTMLElement, cdn = Constants.CDN, theme: string) => {
//     const mermaidElements = element.querySelectorAll(".language-mermaid");
//     if (mermaidElements.length === 0) {
//         return;
//     }
//
//     // <script src="//unpkg.com/react@16/umd/react.production.min.js"></script>
//     //     <script src="//unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
//     //     <script src="//unpkg.com/babel-standalone"></script>
//     //
//     //     <script src="//unpkg.com/react-force-graph-2d"></script>
//         addScript(`//unpkg.com/react-force-graph-2d`, "vditorMermaidScript").then(res => res.json()).then(() => {
//
//         mermaidElements.forEach((item) => {
//             if (item.getAttribute("data-processed") === "true") {
//                 return;
//             }
//             linksParticles.init(undefined, item);
//             item.setAttribute("data-processed", "true");
//         });
//     });
// };
