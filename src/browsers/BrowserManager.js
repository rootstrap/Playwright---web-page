class Browser {
  static type(browser) {
    switch (browser) {
      case 'firefox':
        return 'firefox';
      case 'webkit':
        return 'webkit';
      default:
        return 'chromium';
    }
  }
}

module.exports = Browser;
