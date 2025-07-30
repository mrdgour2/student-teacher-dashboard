// Common function to show forms
<script>
function showForm(type) {
    const studentBtn = document.getElementById('studentBtn');
    const teacherBtn = document.getElementById('teacherBtn');
    const studentForm = document.getElementById('studentForm');
    const teacherForm = document.getElementById('teacherForm');
    
    if (type === 'student') {
        studentBtn.classList.add('active');
        teacherBtn.classList.remove('active');
        studentForm.classList.add('active');
        teacherForm.classList.remove('active');
    } else {
        teacherBtn.classList.add('active');
        studentBtn.classList.remove('active');
        teacherForm.classList.add('active');
        studentForm.classList.remove('active');
    }
}
</script>