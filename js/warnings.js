document.addEventListener("DOMContentLoaded", function() {
    // 显示警告提示框
    var modal = document.getElementById('warning-modal');
    var modalContent = document.querySelector('.modal-content');
    modal.style.display = 'flex';
    setTimeout(function() {
        modalContent.classList.add('show');
    }, 100);
});

function closeWarning() {
    // 关闭警告提示框
    var modal = document.getElementById('warning-modal');
    var modalContent = document.querySelector('.modal-content');
    modalContent.classList.remove('show');
    setTimeout(function() {
        modal.style.display = 'none';
    }, 300);
}

function goToNewWebsite(){
    window.location.href='https://server.leipishu.top/';
}
