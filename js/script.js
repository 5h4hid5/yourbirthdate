window.onload = init;

var count = 0;
var index = 0;
var num = 0;
var date = '';
var m = 0;
var year = '';

var month = ['জানুয়ারি','ফেব্রুয়ারী','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];

var text = document.getElementById('text');
var input = document.getElementById('input');
var content = document.getElementById('content');

var qsn = ['প্রাপ্ত গুণফলটির সাথে ১৩ যোগ করুন।', 'যে সংখ্যাটি আপনি পেলেন তার সাথে ২৫ গুণ করুন।', 'প্রাপ্ত সংখ্যাটি থেকে ২০০ বাদ দিন।', 'যে তারিখে আপনার জন্ম তার সাথে আগের প্রাপ্ত সংখ্যাটি যোগ করুন।', 'প্রাপ্ত সংখ্যাটির সাথে ২ গুণ করুন।', 'গুণফলটি থেকে ৪০ বিয়োগ করুন।', 'এবার বিয়োগফলটির সাথে ৫০ গুণ করুন।', 'শেষ ধাপ হিসেবে  প্রাপ্ত ফলাফলটির সাথে আপনার জন্ম সালের শেষ দুটি সংখ্যা যোগ করুন।', 'আপনার কাছে যে সংখ্যাটি আছে তা নিচের ঘরে লিখুন'];

function init() {

    var btn = document.getElementById('btn');
    btn.onclick = nextQsn;
    count++;

}

function nextQsn() {
    text.innerHTML = qsn[index];
    if (count == 9) {
        input.innerHTML = '<input type="text" id="num" size="40" placeholder="এখানে লিখুন..."/>';
        btn.onclick = getNum;
    }
    count++;
    index++;
}

function getNum() {
    num = document.getElementById('num').value;
    if (num > 20599){
      calculateDate(num);
      showBirthDate();  
    } else {
        content.innerHTML = '<p>' + "দুঃখিত! আপনি কোনো সংখ্যা দেননি কিংবা গণনায় ভুল করেছেন।" + '</p><br><a href="bn.yourbirthdate.html" class="start-btn">আবার শুরু করুন</a>';
    }     
}

function calculateDate(a){
    var tempNum = a - 10500;
    var tempString = '';
    var temp = '';
    tempString = tempString + tempNum;
    
    if (tempString.length == 6){
        
        temp = tempString.charAt(0) + tempString.charAt(1);
        m = parseInt(temp);
        
        date = String.fromCharCode(tempString.charCodeAt(2)+2486) + String.fromCharCode(tempString.charCodeAt(3)+2486);
        
        year = String.fromCharCode(tempString.charCodeAt(4)+2486) + String.fromCharCode(tempString.charCodeAt(5)+2486);
        
    } else {
        
        temp = tempString.charAt(0);
        m = parseInt(temp);
        
        date = String.fromCharCode(tempString.charCodeAt(1)+2486) + String.fromCharCode(tempString.charCodeAt(2)+2486);
        
        year = String.fromCharCode(tempString.charCodeAt(3)+2486) + String.fromCharCode(tempString.charCodeAt(4)+2486);
        
    }  
    
}

function showBirthDate(){
    //content.innerHTML = date + "/" + m + "/" + year;
    content.innerHTML = '<p>' + month[m-1] + " " + date + ", " + year + '</p>';
}