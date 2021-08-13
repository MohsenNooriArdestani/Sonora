var document1 = document.getElementById('document');
var describe = document.getElementById('describe');
var config = document.getElementById('config');
var fuse = document.getElementById('fuse');
var imgProcess = document.getElementById('imgProcess');
var captionProcess = document.getElementById('captionProcess');
var detailProcess = document.getElementById('detailProcess');
var mobileBTN = document.getElementById('mobileBTN');
var siteBTN = document.getElementById('siteBTN');
var softwareBTN = document.getElementById('softwareBTN');
var designBTN = document.getElementById('designBTN');
var supportBTN = document.getElementById('supportBTN');
var contentBTN = document.getElementById('contentBTN');
var processBTN = document.getElementById('processBTN');
var orderBTN = document.getElementById('orderBTN');
var ourBTN = document.getElementById('ourBTN');

function documentClick() {
    document1.addEventListener("click", function(event) {
        document1.style.background = 'deeppink';
        fuse.style.background = '#7f6ed6';
        config.style.background = '#7f6ed6';
        describe.style.background = '#7f6ed6';
        imgProcess.src = 'images/1.jpg';
        captionProcess.innerText = 'تهیه مستندات پروژه درخواستی';
        detailProcess.innerText = 'ابتدا خلاصه ای از نحوه کارکرد اپلیکیشن موبایل مورد نظر خود به صورت فایل ورد یا متنی تهیه کرده و از طریق ایمیل یا تلگرام برای ما ارسال نمایید . توضیحات اپلیکیشن موبایل می بایست شامل : لیست صفحات مختلف اپلیکیشن ، توضیح مختصر در مورد هر صفحه ، امکانات مورد نیاز اپلیکیشن ، نوع دستگاه (موبایل ، تبلت) و در صورت وجود لینک اپلیکیشن مشابه باشد .';
        console.log("document clicked")
    });
}

function describeClick() {
    describe.addEventListener("click", function(event) {
        describe.style.background = 'deeppink';
        document1.style.background = '#7f6ed6';
        fuse.style.background = '#7f6ed6';
        config.style.background = '#7f6ed6';
        imgProcess.src = 'images/2.jpg';
        captionProcess.innerText = 'تحلیل پروژه';
        detailProcess.innerText = 'کارشناسان ما پروژه درخواستی شما را تحلیل کرده و مدت زمان و هزینه طراحی نرم افزار را به شما اعلام می کنند.';
    });
}

function configClick() {
    config.addEventListener("click", function(event) {
        config.style.background = 'deeppink';
        describe.style.background = '#7f6ed6';
        document1.style.background = '#7f6ed6';
        fuse.style.background = '#7f6ed6';
        imgProcess.src = 'images/3.jpg';
        captionProcess.innerText = 'تنظیم قرارداد و فازبندی پروژه';
        detailProcess.innerText = 'پس از تایید شما و هماهنگی های لازم انجام شده ، پیش نویس قرارداد برای شما ارسال می شود تا پس از مطالعه قرارداد برای امضا و تایید قرارداد طی جلسه حضوری یا تلفنی با ما تماس حاصل نمایید .';
        console.log("config clicked")
    });
}

function fuseClick() {
    fuse.addEventListener("click", function(event) {
        fuse.style.background = 'deeppink';
        config.style.background = '#7f6ed6';
        describe.style.background = '#7f6ed6';
        document1.style.background = '#7f6ed6';
        imgProcess.src = 'images/4.jpg';
        captionProcess.innerText = 'تکمیل پروژه و تست';
        detailProcess.innerText = 'پروژه براساس مدت زمان تعیین شده تکمیل شده و نسخه تست اپلیکیشن برای تست و بررسی هفت روزه تحویل شما خواهد شد.';
        console.log("fuse clicked")
    });
}

function mobile1Click() {
    mobileBTN.addEventListener("click", function(event) {
        location.href = "#MobileDevelopment";
    });
}

function site1Click() {
    siteBTN.addEventListener("click", function(event) {
        location.href = "#SiteDevelopment";
    });
}

function softwareClick() {
    softwareBTN.addEventListener("click", function(event) {
        location.href = "#SoftwareDevelopment";
    });
}

function designBTNClick() {
    designBTN.addEventListener("click", function(event) {
        location.href = "#UserInterfaceDesign";
    });
}

function supportBTNBTNClick() {
    supportBTN.addEventListener("click", function(event) {
        location.href = "#SoftwareSupport";
    });
}

function contentBTNClick() {
    contentBTN.addEventListener("click", function(event) {
        location.href = "#ContentProvider";
    });
}

function processBTNClick() {
    processBTN.addEventListener("click", function(event) {
        location.href = "#ProjectOrderingProcess";
    });
}

function orderBTNClick() {
    orderBTN.addEventListener("click", function(event) {
        location.href = "#ProjectOrder";
    });
}

function ourBTNClick() {
    ourBTN.addEventListener("click", function(event) {
        location.href = "#detailProcess";
    });
}

function LinkdinClick() {
    document.getElementById('dimg_30').addEventListener("click", function(event) {
        window.open('https://www.linkedin.com/company/71333478/admin/', '_blank');
    });
}

function InstagramClick() {
    document.getElementById('dimg_25').addEventListener("click", function(event) {
        window.open('https://www.instagram.com/sonora.ir/', '_blank');
    });
}

function TelegramClick() {
    document.getElementById('wp_thbn_24').addEventListener("click", function(event) {
        window.open('https://t.me/SONORA_SOFT', '_blank');
    });
}

ourBTNClick();
orderBTNClick();
processBTNClick();
contentBTNClick();
supportBTNBTNClick();
designBTNClick();
softwareClick();
site1Click();
mobile1Click();
fuseClick();
documentClick();
describeClick();
configClick();
LinkdinClick();
InstagramClick();
TelegramClick();