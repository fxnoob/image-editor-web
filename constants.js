const { generateGuid } = require("./src/services/guid");
const constants = {
  appConfig: {
    appName: "Image Editor Web",
    urls: {
      chrome:
        "https://chrome.google.com/webstore/detail/image-to-text/jgjlejdhmfpimggbicpffmpbnalcnhoo",
      firefox: "https://addons.mozilla.org/addon/image-to-text-pro-ocr/",
      edge:
        "https://microsoftedge.microsoft.com/addons/detail/icgbomdceijejlokdmjpmgkojiliphma",
    },
    // put extension key here if required which would only be used in development mode
    key:
      "-----BEGIN PUBLIC KEY-----\n" +
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0f1J5tWg6zFc7MJ6jdeK\n" +
        "cR4oWUlprvZAjn/yqeFvaOW6VkoDDo6MQXKl1zISztzGcUHf5uHN/fRor+/dYb1g\n" +
        "Ws90+hPgcqpxI7aXvHpVzval+fjCKe4ndrQSwAy4/52Dmvi3MsEnU8L/fQZaVCQ1\n" +
        "cs4u7PfM2XW4AyysgA9tfdPpN2U6kKaZZkfwX8leWEwZWfu7hS98piDuxJlzsdWY\n" +
        "K675Ki6yPAJkEKcE36j2nsRLHZzn2q9iIg+7JFU5aFjdAWJwLLc7vpiebsdyWcMZ\n" +
        "wzr+ljNJByJMkAxjIAUP3UmYu1yq6x85qkVZ4GKSvd7SII+mNFcVWFPACAsOKqzN\n" +
        "OQIDAQAB\n" +
        "-----END PUBLIC KEY-----",
    endpoint: process.env.mode === "production" ? "https://imagetext.xyz": "http://localhost:3000",
  },
  contentScript: {
    mountId: generateGuid(),
  },
  browser: {
    firefox: {
      manifest: {
        browser_specific_settings: {
          gecko: {
            id: "imageeditorweb@fxboob",
            strict_min_version: "42.0",
          },
        },
      },
    },
  },
  support: {
    terms: "https://imagetext.xyz/terms",
    privacyPolicy: "https://imagetext.xyz/privacy",
    donate: "https://www.patreon.com/fxnoob",
    howToVideoLink: "https://www.youtube.com/watch?v=Yju7dDudunc",
    uninstallFeedbackForm: "https://forms.gle/nrGgwq1XW5mARdvu8",
  },
  promotion: {
    ocrWebsite: "http://imagetext.xyz/",
    voiceTypingExtension:
      "https://chrome.google.com/webstore/detail/voice-typing/hmpihaioaacpehkghnkmnmgmihalkmdf",
  },
};

module.exports = constants;
