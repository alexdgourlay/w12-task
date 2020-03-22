import * as dat from "dat.gui";

export default class GuiBuilder {
  object;
  settingsUri;
  guiWidth;
  gui;

  constructor(object, settingsUri, guiWidth) {
    this.settingsUri = settingsUri;
    this.object = object;
    this.guiWidth = guiWidth;
  }

  /**
   * @param {function} callback - callback function taking in dat.gui object, to be used
   * to add properties to the dat.gui.
   */

  create(callback) {
    var settings;

    if (this.settingsUri) {
      this.getSettings(this.settingsUri).then((res) => {
        settings = res;

        this.gui = new dat.GUI({ load: settings, width: this.guiWidth });
        this.gui.remember(this.object);

        const saveButtonRef = this.gui.domElement.getElementsByClassName("button save")[0];
        saveButtonRef.addEventListener("click", () => {
          this.patchSettings(this.settingsUri, settings);
        });

        callback(this.gui);
      });
    } else {
      this.gui = new dat.GUI();
      callback(this.gui);
    }
  }

  /**
   * @param {string} settingURi - URL to get settings file from.
   */

  getSettings = (settingsUri) => {
    const res = fetch(settingsUri).then((res) => res.json());
    return res;
  };

  /**
   * @param {string} settingURi - URL to patch settings file to.
   * @param {object} settings - JSON object containing the settings data.
   */

  patchSettings = (settingsUri, settings) => {
    fetch(settingsUri, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(settings)
    });
  };
}
