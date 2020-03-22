import GuiBuilder from "./gui/GuiBuilder";

export const initGui = (object) => {
  const guiBuilder = new GuiBuilder(object, "http://192.168.1.191:4000/gui-settings/app", 350);
  guiBuilder.create((gui) => {
    const folder1 = gui.addFolder("Page Transition");
  });
};
