const profile = {
  name: "Castle Tech",
  job: "Laptop, Computer and Printer Sale and Service Center",
  phone1: "+959420208006",
  phone2: "+959790445070",
  viberPhone: "+959790445070",
  email: "castleit2010@gmail.com",
  bioMy: "မင်္ဂလာပါ။ Castle Tech မှ ကြိုဆိုပါတယ်။ Laptop၊ Computer နှင့် Printer အရောင်းနှင့် ဝန်ဆောင်မှုများအတွက် ဆက်သွယ်နိုင်ပါတယ်။",
  bioEn: "Welcome to Castle Tech. Contact us for laptop, computer and printer sales and services.",
  facebookPage: "https://www.facebook.com/share/1LUDsadQR4/",
  tiktok: "https://www.tiktok.com/@castle.tech0?_r=1&_t=ZS-9B6IDW8369c",
  map: "https://maps.app.goo.gl/RQjyYP7TB1MJGGAf7"
};
document.getElementById("personName").textContent = profile.name;
document.getElementById("jobTitle").textContent = profile.job;
document.getElementById("bio").textContent = profile.bioMy;
document.getElementById("callPrimary").href = "tel:" + profile.phone1;
document.getElementById("callSecondary").href = "tel:" + profile.phone2;
document.getElementById("emailLink").href = "mailto:" + profile.email;
document.getElementById("facebookPageLink").href = profile.facebookPage;
document.getElementById("viberLink").href = "viber://chat?number=" + encodeURIComponent(profile.viberPhone);
document.getElementById("tiktokLink").href = profile.tiktok;
document.getElementById("mapLink").href = profile.map;
document.getElementById("year").textContent = new Date().getFullYear();
if (window.QRCode) {
  new QRCode(document.getElementById("qrcode"), {
    text: window.location.href.split("#")[0],
    width: 144, height: 144,
    colorDark: "#12314a", colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
let language = "my";
document.getElementById("langBtn").addEventListener("click", () => {
  language = language === "my" ? "en" : "my";
  document.documentElement.lang = language;
  document.getElementById("langBtn").textContent = language === "my" ? "English" : "မြန်မာ";
  document.getElementById("bio").textContent = language === "my" ? profile.bioMy : profile.bioEn;
  document.querySelectorAll("[data-my][data-en]").forEach(el => {
    el.textContent = language === "my" ? el.dataset.my : el.dataset.en;
  });
});
document.getElementById("saveContact").addEventListener("click", () => {
  const vcard = [
    "BEGIN:VCARD", "VERSION:3.0",
    "FN:" + profile.name, "ORG:" + profile.name,
    "TITLE:" + profile.job,
    "TEL;TYPE=CELL:" + profile.phone1,
    "TEL;TYPE=CELL:" + profile.phone2,
    "EMAIL:" + profile.email,
    "URL:" + profile.tiktok,
    "END:VCARD"
  ].join("\r\n");
  const blob = new Blob([vcard], {type:"text/vcard;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "castle-tech-contact.vcf"; a.click();
  URL.revokeObjectURL(url);
});
