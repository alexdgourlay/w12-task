import GuiBuilder from "../../gui/GuiBuilder";

export const initGui = (object) => {
  const guiBuilder = new GuiBuilder(object, "http://192.168.1.191:4000/gui-settings/stranger-things-logo", 350);

  guiBuilder.create((gui) => {
    gui.add(object, "play");
    gui.add(object, "restart");
    const folder1 = gui.addFolder("Stranger Things Logo");
    folder1.add(object, "animationDuration", 100, 15000, 100);
    folder1.add(object, "minOpacity", 0, 1, 0.05);
    folder1.add(object, "scaleFactor", 1, 10, 0.2);
    folder1.add(object, "expansionFactor", 1, 40, 1);
  });
};
