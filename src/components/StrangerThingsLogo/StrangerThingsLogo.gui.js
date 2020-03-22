import GuiBuilder from "../../gui/GuiBuilder";

export const initGui = (object) => {
  const guiBuilder = new GuiBuilder(object, "http://192.168.1.191:4000/gui-settings/stranger-things-logo", 350);

  guiBuilder.create((gui) => {
    // gui.add(object, "play");
    const folder1 = gui.addFolder("Stranger Things Logo");
    folder1.add(object, "logoAnimationDuration", 100, 15000, 100);
    folder1.add(object, "minimumOpacity", 0, 1, 0.05);
  });
};
