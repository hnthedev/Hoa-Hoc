var exec = require("child_process").exec;

submitCBPU.addEventListener('click', () => {
    CBPUout.innerHTML = 'Đang tính toán...';
    exec('.\\balance.exe '+'"'+InputText.value.toString().replace(/\s/g, "")+'"', 
    function(er, stdout, stderr) {
        console.log(stderr);
        if (er != null) {
            console.log("NOTHING");
        }
        CBPUout.innerHTML = stdout.toString().replace("OUTPUT_HERE","<b style='font-size:large;'>Phương trình sau khi cân bằng</b>");
    }
    )
})

submitPer.addEventListener('click', () => {
    Perout.innerHTML = 'Đang tính toán...';
    exec('.\\weightpercent.exe '+'"'+InputTextPer.value.toString().replace(/\s/g, "")+'"', 
    function(er, stdout, stderr) {
        console.log(stderr);
        if (er != null) {
            console.log("NOTHING");
        }
        Perout.innerHTML = stdout.toString().replace("OUTPUT_HERE","<b style='font-size:large;'>Phương trình sau khi cân bằng</b>");
    }
    )
})