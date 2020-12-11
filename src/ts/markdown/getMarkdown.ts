import {code160to32} from "../util/code160to32";

export const getMarkdown = (vditor: IVditor) => {
    // 得到markdown  content
    console.log(`aaron   this is  getMarkdown ${vditor.currentMode}`)

    if (vditor.currentMode === "sv") { //分屏
        return code160to32(`${vditor.sv.element.textContent}\n`.replace(/\n\n$/, "\n"));
    } else if (vditor.currentMode === "wysiwyg") {//所见即所得
        return vditor.lute.VditorDOM2Md(vditor.wysiwyg.element.innerHTML);
    } else if (vditor.currentMode === "ir") {  //即时渲染
        return vditor.lute.VditorIRDOM2Md(vditor.ir.element.innerHTML);
    }
    return "";
};
